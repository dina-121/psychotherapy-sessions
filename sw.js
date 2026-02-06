
const CACHE_VERSION = 'cheiselounge-v2.0';
const CACHE_NAME = `${CACHE_VERSION}-gallery`;

// الموارد الحرجة التي يجب تحميلها فوراً
const CRITICAL_RESOURCES = [
  '/gallery.html',
  '/style.css',
  '/main.js'
];

// الموارد الخارجية الهامة
const EXTERNAL_RESOURCES = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/lucide@latest/dist/umd/lucide.js'
];

// صور المعرض - تحميل ذكي
const GALLERY_IMAGES = [
  'images/bac.png',
  'images/FINAL.mp4',
  'images/img15.png',
  'images/img16.png',
  'images/imag9.jpg',
  'images/img3.jpg'
];

// ==============================================
// 1. التثبيت - تحميل الموارد الحرجة
// ==============================================
self.addEventListener('install', event => {
  console.log('📦 [Service Worker] يتم التثبيت...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ [Service Worker] فتح الكاش:', CACHE_NAME);
        
        // تحميل الموارد الحرجة أولاً
        return Promise.all([
          cache.addAll(CRITICAL_RESOURCES),
          cache.addAll(EXTERNAL_RESOURCES),
          // تحميل الصور الهامة
          ...GALLERY_IMAGES.map(img => 
            cache.add(img).catch(err => 
              console.log(`⚠️  فشل تحميل: ${img}`, err)
            )
          )
        ]);
      })
      .then(() => {
        console.log('🚀 [Service Worker] جميع الموادر الحرجة تم تحميلها');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ [Service Worker] خطأ في التثبيت:', error);
      })
  );
});

// ==============================================
// 2. التفعيل - تنظيف الكاش القديم
// ==============================================
self.addEventListener('activate', event => {
  console.log('✨ [Service Worker] يتم التفعيل...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // حذف الكاش القديم
            if (cacheName !== CACHE_NAME && cacheName.startsWith('cheiselounge-')) {
              console.log('🗑️  [Service Worker] حذف الكاش القديم:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ [Service Worker] الكاش تم تنظيفه');
        return self.clients.claim();
      })
  );
});

// ==============================================
// 3. إستراتيجية التحميل الذكي
// ==============================================
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // استراتيجيات مختلفة لأنواع الملفات
  if (url.pathname.includes('images/')) {
    // استراتيجية الصور: كاش أولاً، ثم شبكة
    event.respondWith(handleImageRequest(event.request));
  } else if (url.pathname.endsWith('.html') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
    // استراتيجية الملفات الثابتة: شبكة أولاً، مع fallback للكاش
    event.respondWith(handleStaticRequest(event.request));
  } else if (url.origin.includes('cdnjs.cloudflare.com') || url.origin.includes('fonts.googleapis.com')) {
    // استراتيجية الموارد الخارجية: كاش أولاً
    event.respondWith(handleExternalRequest(event.request));
  } else {
    // استراتيجية عامة
    event.respondWith(handleDefaultRequest(event.request));
  }
});

// ==============================================
// وظائف معالجة الطلبات
// ==============================================

// استراتيجية الصور
async function handleImageRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // 1. حاول من الكاش أولاً
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      console.log('🖼️  [Image Cache] تم التحميل من الكاش:', request.url);
      return cachedResponse;
    }
    
    // 2. إذا لم توجد في الكاش، حمل من الشبكة وخزن
    const networkResponse = await fetch(request);
    
    // تأكد أن الاستجابة صالحة للتخزين
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      cache.put(request, responseClone);
      console.log('🌐 [Image Cache] تم تحميل وتخزين:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('⚠️  [Image Cache] خطأ، إرجاع صورة افتراضية');
    
    // إذا فشل كل شيء، أرجع صورة افتراضية
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#f0f0f0"/><text x="50" y="50" font-family="Arial" font-size="10" text-anchor="middle" fill="#999">شيزلونج</text></svg>',
      {
        headers: { 'Content-Type': 'image/svg+xml' }
      }
    );
  }
}

// استراتيجية الملفات الثابتة
async function handleStaticRequest(request) {
  try {
    // 1. حاول من الشبكة أولاً (للحصول على أحدث نسخة)
    const networkResponse = await fetch(request);
    
    // إذا نجحت الشبكة، خزن في الكاش
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      const responseClone = networkResponse.clone();
      cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    // 2. إذا فشلت الشبكة، حاول من الكاش
    console.log('🌐 [Static] الشبكة فشلت، جاري التحقق من الكاش');
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 3. إذا لم توجد في الكاش، أرجع صفحة 404 بسيطة
    return new Response(
      '<h1>شيزلونج - مركز الاستشارات النفسية</h1><p>عذراً، لا يمكن تحميل الصفحة حالياً. يرجى المحاولة لاحقاً.</p>',
      {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
        status: 503,
        statusText: 'Service Unavailable'
      }
    );
  }
}

// استراتيجية الموارد الخارجية
async function handleExternalRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    console.log('🌍 [External] من الكاش:', request.url);
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      cache.put(request, responseClone);
    }
    return networkResponse;
  } catch (error) {
    console.log('⚠️  [External] خطأ في تحميل المورد الخارجي');
    return new Response('', { status: 408 });
  }
}

// استراتيجية عامة
async function handleDefaultRequest(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// ==============================================
// 4. معالجة الرسائل من الصفحة الرئيسية
// ==============================================
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('🧹 [Service Worker] طلب مسح الكاش');
    caches.delete(CACHE_NAME);
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    caches.open(CACHE_NAME)
      .then(cache => cache.keys())
      .then(keys => {
        event.ports[0].postMessage({ size: keys.length });
      });
  }
});

// ==============================================
// 5. تحديث المحتوى تلقائياً
// ==============================================
async function checkForUpdates() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cachedResponse = await cache.match(request);
        
        if (!cachedResponse || 
            networkResponse.headers.get('etag') !== cachedResponse.headers.get('etag')) {
          
          console.log('🔄 [Update] تحديث الملف:', request.url);
          cache.put(request, networkResponse.clone());
        }
      }
    } catch (error) {
      // تجاهل الأخطاء في التحديث
    }
  }
}

// التحقق من التحديثات كل 24 ساعة
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-cache') {
    event.waitUntil(checkForUpdates());
  }
});

// ==============================================
// 6. معالجة دفع الإشعارات (مستقبلاً)
// ==============================================
self.addEventListener('push', event => {
  const options = {
    body: 'مركز شيزلونج: لدينا مقالة جديدة عن الصحة النفسية',
    icon: 'images/icon-192x192.png',
    badge: 'images/badge.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/gallery.html'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('شيزلونج', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        
        if (clients.openWindow) {
          return clients.openWindow('/gallery.html');
        }
      })
  );
});

console.log('✅ [Service Worker] جاهز للعمل!');