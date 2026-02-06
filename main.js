
        // تهيئة أيقونات Lucide
        lucide.createIcons();

        // تبديل الوضع الليلي
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            
            const button = document.querySelector('.theme-toggle');
            if (document.body.classList.contains('dark-mode')) {
                button.textContent = '☀️ الوضع النهاري';
                button.innerHTML = '☀️ الوضع النهاري';
            } else {
                button.textContent = '🌙 الوضع الليلي';
                button.innerHTML = '🌙 الوضع الليلي';
            }
        }

        // تأثيرات الدخول عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.program-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.animationPlayState = 'paused';
                observer.observe(card);
            });
        });
        // تبديل الوضع الليلي
        function toggleTheme() {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light-mode');
            
            const button = document.querySelector('.theme-toggle');
            if (document.body.classList.contains('dark')) {
                button.textContent = 'تبديل الوضع النهاري';
            } else {
                button.textContent = 'تبديل الوضع الليلي';
            }
        }

        // تأثيرات الدخول
        document.addEventListener('DOMContentLoaded', function() {
            const items = document.querySelectorAll('.why-choose-us-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });

            items.forEach(item => {
                observer.observe(item);
            });
        });
        // كود JavaScript لإضافة الأنيميشن عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const visionCards = document.querySelectorAll('.vision-card, .mission-card, .philosophy-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    visionCards.forEach(card => {
        observer.observe(card);
    });
    
    // إعادة تهيئة أيقونات Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });

        // Initialize Lucide icons
        lucide.createIcons();
     document.addEventListener('DOMContentLoaded', function() {
    // تأكد من إظهار المحتوى الرئيسي مباشرة
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
    }
});   
       // تأكد من هذا السطر

        document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 0); // انتقال سريع
    }, 0); // ربع ثانية بالظبط! ✅
});
        // إمكانية تخطي شاشة الترحيب بالنقر
        document.getElementById('welcome-screen').addEventListener('click', function() {
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 0);
        });
        
        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.remove('active');
                document.getElementById('mobile-menu-toggle').classList.remove('active');
            });
        });
        
        // Theme toggle with localStorage
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        
        // Check for saved theme preference or respect OS preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
        } else {
            document.body.classList.remove('dark');
            themeIcon.setAttribute('data-lucide', 'moon');
        }
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.setAttribute('data-lucide', 'sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.setAttribute('data-lucide', 'moon');
            }
            
            lucide.createIcons();
        });
        
        // WhatsApp functions
        function openWhatsApp(phoneNumber = '+97333531415') {
            const message = "مرحباً، أود معرفة المزيد عن جلسات الإرشاد والعلاج النفسي";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        
        // Map function
        function openMap() {
            window.open('https://maps.app.goo.gl/QFagAdgLgQFtMnug9', '_blank');
        }
        
        // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate stats counter
        function animateStats() {
            const sessionsElement = document.getElementById('sessions-count');
            const clientsElement = document.getElementById('clients-count');
            const experienceElement = document.getElementById('experience-count');
            
            const targetSessions = 5000;
            const targetClients = 1000;
            const targetExperience = +15;
            
            let sessionsCount = 0;
            let clientsCount = 0;
            let experienceCount = 0;
            
            const sessionsInterval = setInterval(() => {
                sessionsCount += Math.ceil(targetSessions / 100);
                if (sessionsCount >= targetSessions) {
                    sessionsCount = targetSessions;
                    clearInterval(sessionsInterval);
                }
                sessionsElement.textContent = '+' + sessionsCount.toLocaleString();
            }, 30);
            
            const clientsInterval = setInterval(() => {
                clientsCount += Math.ceil(targetClients / 100);
                if (clientsCount >= targetClients) {
                    clientsCount = targetClients;
                    clearInterval(clientsInterval);
                }
                clientsElement.textContent = '+' + clientsCount.toLocaleString();
            }, 40);
            
            const experienceInterval = setInterval(() => {
                experienceCount += 1;
                if (experienceCount >= targetExperience) {
                    experienceCount = targetExperience;
                    clearInterval(experienceInterval);
                }
                experienceElement.textContent = experienceCount;
            }, 200);
        }
        
        // Initialize stats animation when stats section is in view
        const statsSection = document.querySelector('.stats-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        if (statsSection) {
            observer.observe(statsSection);
        }
        
        // Initialize sliders
        function initSliders() {
            // Main slider
            const mainSwiper = new Swiper('.mySwiper', {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                },
                // Pause on hover/touch
                on: {
                    init: function() {
                        this.el.addEventListener('mouseenter', function() {
                            mainSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('mouseleave', function() {
                            mainSwiper.autoplay.start();
                        });
                        this.el.addEventListener('touchstart', function() {
                            mainSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('touchend', function() {
                            setTimeout(() => {
                                mainSwiper.autoplay.start();
                            }, 3000);
                        });
                    }
                }
            });
            
            // Studio slider
            const studioSwiper = new Swiper('.studio-swiper', {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.studio-swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.studio-swiper-button-next',
                    prevEl: '.studio-swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 0,
                // Pause on hover/touch
                on: {
                    init: function() {
                        this.el.addEventListener('mouseenter', function() {
                            studioSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('mouseleave', function() {
                            studioSwiper.autoplay.start();
                        });
                        this.el.addEventListener('touchstart', function() {
                            studioSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('touchend', function() {
                            setTimeout(() => {
                                studioSwiper.autoplay.start();
                            }, 3000);
                        });
                    }
                }
            });
            
            // Success Stories slider
            const successStoriesSwiper = new Swiper('.success-stories-swiper', {
                loop: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.success-stories-pagination',
                    clickable: true,
                },
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }
            });
            
            // Blog slider
            const blogSwiper = new Swiper('.blog-swiper', {
                loop: true,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.blog-slider-pagination',
                    clickable: true,
                },
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }
            });
            
            // Customer Reviews slider - محسن
            const customerReviewsSwiper = new Swiper('.customer-reviews-swiper-enhanced', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.customer-reviews-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.customer-reviews-next',
                    prevEl: '.customer-reviews-prev',
                },
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                // Pause on hover/touch
                on: {
                    init: function() {
                        this.el.addEventListener('mouseenter', function() {
                            customerReviewsSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('mouseleave', function() {
                            customerReviewsSwiper.autoplay.start();
                        });
                        this.el.addEventListener('touchstart', function() {
                            customerReviewsSwiper.autoplay.stop();
                        });
                        this.el.addEventListener('touchend', function() {
                            setTimeout(() => {
                                customerReviewsSwiper.autoplay.start();
                            }, 3000);
                        });
                    }
                }
            });
            
            return { mainSwiper, studioSwiper, successStoriesSwiper, blogSwiper, customerReviewsSwiper };
        }
        
        // Services data with detailed information
               const servicesData = [
            { 
                name: "علاج القلق العام", 
                icon: "alert-circle", 
                detailedDescription: "شعور دائم بالقلق والتوتر وصعوبة في السيطرة على الأفكار السلبية. يُعالج من خلال العلاج السلوكي المعرفي وتقنيات الاسترخاء وتنظيم التفكير.",
                features: [
                    "تشخيص دقيق لنوع القلق وشدته",
                    "علاج سلوكي معرفي متخصص",
                    "تعلم تقنيات إدارة القلق والتوتر",
                    "تمارين الاسترخاء والتأمل",
                    "دعم مستمر خلال رحلة العلاج"
                ]
            },
            { 
                name: "علاج الاكتئاب", 
                icon: "cloud-rain", 
                detailedDescription: "إحساس بالحزن وفقدان الطاقة والاهتمام بالأشياء التي كانت ممتعة. يُعالج باستخدام العلاج السلوكي المعرفي أو العلاج بالتقبل والالتزام مع تعزيز النشاط والسلوكيات الإيجابية.",
                features: [
                    "تشخيص دقيق لنوع الاكتئاب وشدته",
                    "خطط علاجية فردية وشاملة",
                    "علاج نفسي مكثف وجلسات دعم",
                    "تعلم مهارات التعايش وإدارة المشاعر",
                    "متابعة مستمرة ودعم خلال رحلة التعافي"
                ]
            },
            { 
                name: "علاج نوبات الهلع", 
                icon: "activity", 
                detailedDescription: "نوبات مفاجئة من الخوف الشديد يصاحبها أعراض جسدية قوية مثل تسارع ضربات القلب. يُعالج من خلال العلاج السلوكي المعرفي وتمارين فهم نوبات الهلع وإدارتها واجتيازها.",
                features: [
                    "فهم أسباب وآلية نوبات الهلع",
                    "تعلم تقنيات التعامل مع النوبات",
                    "تقنيات التنفس والاسترخاء",
                    "التعرض التدريجي للمواقف المثيرة",
                    "دعم نفسي مستمر خلال رحلة العلاج"
                ]
            },
            { 
                name: "علاج الوسواس القهري", 
                icon: "brain", 
                detailedDescription: "أفكار متكررة مزعجة وسلوكيات قهرية لتخفيف القلق الناتج عنها. يُعالج بـ العلاج السلوكي المعرفي وتقنية التعرض ومنع الاستجابة.",
                features: [
                    "تشخيص دقيق للوسواس القهري",
                    "علاج سلوكي معرفي متخصص",
                    "تقنيات التعرض ومنع الاستجابة",
                    "إدارة القلق المرتبط بالوسواس",
                    "دعم الأسرة وتعليمهم كيفية المساعدة"
                ]
            },
            { 
                name: "علاج اضطراب ما بعد الصدمة", 
                icon: "alert-triangle", 
                detailedDescription: "استرجاع مؤلم لتجارب صادمة مع قلق ونوم مضطرب وكوابيس. يُعالج بـ العلاج السلوكي المعرفي المخصص للصدمة.",
                features: [
                    "تشخيص دقيق للصدمة النفسية",
                    "علاج سلوكي معرفي متخصص للصدمات",
                    "تقنيات إعادة المعالجة",
                    "إدارة الأعراض المرتبطة بالصدمة",
                    "دعم نفسي طويل الأمد"
                ]
            },
            { 
                name: "علاج الرهاب الاجتماعي", 
                icon: "eye-off", 
                detailedDescription: "خوف شديد من المواقف الاجتماعية أو من تقييم الآخرين السلبي. يُعالج عبر العلاج السلوكي المعرفي والتعرض التدريجي للمواقف الاجتماعية وتنمية الثقة بالنفس.",
                features: [
                    "تشخيص الرهاب الاجتماعي وشدته",
                    "جلسات تدريب على المهارات الاجتماعية",
                    "تقنيات التعرض التدريجي للمواقف الاجتماعية",
                    "إدارة القلق في المواقف الاجتماعية",
                    "بناء الثقة في التواصل مع الآخرين"
                ]
            },
            { 
                name: "علاج الفوبيا", 
                icon: "heart", 
                detailedDescription: "خوف مفرط وغير منطقي من أشياء أو مواقف محددة مثل الطيران أو الأماكن المغلقة أو الحيوانات. يُعالج بـ العلاج السلوكي المعرفي وتقنية التعرض التدريجي لتقليل شدة الخوف وإدارته واجتيازها.",
                features: [
                    "تشخيص دقيق لنوع الفوبيا وشدتها",
                    "برامج علاجية مخصصة لكل حالة",
                    "استخدام تقنيات العلاج السلوكي المعرفي",
                    "جلسات تدريجية للتغلب على المخاوف",
                    "متابعة مستمرة للتأكد من التحسن"
                ]
            },
            { 
                name: "علاج اضطرابات الأكل", 
                icon: "utensils", 
                detailedDescription: "علاقة غير صحية مع الطعام أو الصورة الجسدية مثل فقدان الشهية أو الشره. يُعالج من خلال العلاج السلوكي المعرفي العلاج الجدلي السلوكي مع دعم غذائي وإرشاد نفسي.",
                features: [
                    "تشخيص نوع اضطراب الأكل",
                    "علاج سلوكي معرفي متخصص",
                    "تطوير علاقة صحية مع الطعام",
                    "تحسين صورة الجسد",
                    "دعم تغذوي ونفسي متكامل"
                ]
            },
            { 
                name: "علاج اضطرابات النوم", 
                icon: "moon", 
                detailedDescription: "صعوبة في النوم أو الاستمرار فيه أو نوم غير مريح. يُعالج عبر العلاج السلوكي المعرفي الموجّه للنوم وتعديل نمط الحياة.",
                features: [
                    "تشخيص نوع اضطراب النوم",
                    "علاج سلوكي معرفي للنوم",
                    "تعديل عادات النوم",
                    "تقنيات الاسترخاء قبل النوم",
                    "تحسين جودة النوم بشكل مستدام"
                ]
            },
            { 
                name: "علاج الخوف من الموت", 
                icon: "skull", 
                detailedDescription: "قلق مفرط أو وساوس متكررة مرتبطة بفكرة الموت أو فقدان الأحبة. يُعالج من خلال العلاج بالتقبل والالتزام والعلاج السلوكي المعرفي بالتركيز على تقبل فكرة الفناء وإعادة التوازن بين القلق والحياة الحاضرة.",
                features: [
                    "فهم أسباب الخوف من الموت",
                    "تقنيات العلاج بالتقبل والالتزام",
                    "إعادة صياغة الأفكار حول الموت",
                    "تعزيز الوعي بالحياة الحالية",
                    "دعم نفسي للتعامل مع مخاوف الوجود"
                ]
            },
            { 
                name: "علاج ضعف الثقة بالنفس", 
                icon: "star", 
                detailedDescription: "نظرة سلبية للذات وشعور بعدم الكفاءة أو القبول. يُعالج بـ العلاج السلوكي المعرفي والعلاج بالتقبل والالتزام مع تدريب على التعاطف الذاتي والوعي بالنفس.",
                features: [
                    "تقييم مستوى الثقة بالنفس وتقدير الذات",
                    "برامج تدريبية لتعزيز الثقة",
                    "تمارين عملية لتحسين الصورة الذاتية",
                    "تعزيز المهارات الاجتماعية",
                    "متابعة التقدم وتحفيز الاستمرارية"
                ]
            },
            { 
                name: "علاج اضطرابات الشخصية", 
                icon: "users", 
                detailedDescription: "أنماط ثابتة من التفكير والسلوك تؤثر على العلاقات والعمل. يُعالج بـ العلاج الجدلي السلوكي والعلاج التحليلي لتطوير الوعي الذاتي وتنظيم المشاعر.",
                features: [
                    "تشخيص دقيق لاضطرابات الشخصية",
                    "خطط علاجية فردية وشاملة",
                    "علاج نفسي مكثف وجلسات دعم",
                    "تحسين المهارات الاجتماعية والتواصل",
                    "دعم الأسرة والمحيطين بالمريض"
                ]
            },
            { 
                name: "الارشاد الأسري والزوجي", 
                icon: "home", 
                detailedDescription: "صعوبات في التواصل، الخلافات المستمرة أو فقدان التفاهم. يُعالج عبر العلاج الأسري وتنمية مهارات التواصل والحوار.",
                features: [
                    "تحليل ديناميكيات الأسرة",
                    "نخليها تحسين مهارات التواصل بين الازواج",
                    "حل النزاعات بطرق بناءة",
                    "تعزيز الروابط الأسرية",
                    "دعم الأسر في الأزمات والتحديات"
                ]
            },
            { 
                name: " الإرشاد التربوي", 
                icon: "book-open", 
                detailedDescription: "تقلبات المزاج، العزلة، أو سلوكيات متمردة خلال مرحلة النمو. يُعالج بـ الإرشاد التربوي والذي يهدف إلى مساعدة الأطفال والمراهقين وأولياء الأمور على التعامل مع صعوبات التعلم والمشكلات السلوكية أو الدراسية.",
                features: [
                    "توجيه تربوي متخصص",
                    "تعزيز مهارات التربية الإيجابية",
                    "حل مشكلات التعلم والسلوك",
                    "تحسين التواصل بين الآباء والأبناء",
                    "دعم المعلمين في التعامل مع الطلاب"
                ]
            },
            { 
                name: "إدارة الغضب", 
                icon: "flame", 
                detailedDescription: "صعوبة في التحكم في الانفعال أو ردود الفعل العدوانية. يُعالج بـ العلاج الجدلي السلوكي والعلاج السلوكي المعرفي من خلال فهم المثيرات وتنظيم الاستجابات.",
                features: [
                    "تحليل أسباب ومحفزات الغضب",
                    "تعلم تقنيات إدارة الغضب",
                    "تطوير مهارات حل المشكلات",
                    "تحسين مهارات التواصل في المواقف الصعبة",
                    "تعزيز القدرة على ضبط النفس"
                ]
            },
            { 
                name: "علاج الاحتراق النفسي", 
                icon: "battery", 
                detailedDescription: "إرهاق نفسي وجسدي ناتج عن العمل المفرط والضغط المستمر. يُعالج عبر العلاج بالتقبل والاتزالم وتقنيات التوازن النفسي والتثقيف الذاتي.",
                features: [
                    "تشخيص مستوى الاحتراق النفسي",
                    "تعلم تقنيات إدارة الضغوط",
                    "تطوير مهارات التوازن بين العمل والحياة",
                    "تعزيز الصلابة النفسية",
                    "دعم للتعافي والوقاية من الانتكاس"
                ]
            }
        ];
        
   // تصحيح جزء طرق العلاج المتاحة
function initTreatmentMethods() {
    const container = document.getElementById('treatment-methods-container');
    if (!container) {
        console.error('العنصر treatment-methods-container غير موجود');
        return;
    }

    const treatmentMethodsData = [
        { 
            name: "الجلسات الفردية بالمركز", 
            icon: "user-check", 
            description: "جلسات علاجية فردية مباشرة في مركزنا مع اختصاصي نفسي معتمد"
        },
        { 
            name: "الجلسات عن بعد Online", 
            icon: "video", 
            description: "جلسات علاجية عبر الإنترنت تناسب من لا يستطيع الحضور للمركز"
        },
        { 
            name: "المجموعة العلاجية", 
            icon: "users", 
            description: "لقاء أسبوعي لتبادل الأفكار والمشاعر في بيئة آمنة ومنضبطة علاجيا"
        }
    ];

    container.innerHTML = treatmentMethodsData.map((method, index) => `
        <div class="treatment-method-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="treatment-icon">
                <i data-lucide="${method.icon}"></i>
            </div>
            <h3>${method.name}</h3>
            <p>${method.description}</p>
            <button class="btn-treatment" onclick="openWhatsAppTreatment('${method.name}')">
                احجز الآن
            </button>
        </div>
    `).join('');
    
    // إعادة تهيئة الأيقونات
    lucide.createIcons();
}

// دالة خاصة بواتساب العلاج
function openWhatsAppTreatment(serviceType) {
    const phoneNumber = '97333531415';
    const message = `مرحباً، أود حجز موعد لـ ${serviceType}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initTreatmentMethods();
});


        // دالة لعرض طرق العلاج
function renderTreatmentMethods() {
    const container = document.getElementById('treatment-methods-container');
    if (container) {
        container.innerHTML = treatmentMethodsData.map((method, index) => `
            <div class="treatment-method-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="treatment-icon">
                    <i data-lucide="${method.icon}"></i>
                </div>
                <h3>${method.name}</h3>
                <p>${method.description}</p>
                <button class="btn-treatment" onclick="openWhatsAppTreatment('${method.name}')">
                    احجز الآن
                </button>
            </div>
        `).join('');
        
        // إعادة تهيئة الأيقونات
        lucide.createIcons();
    }
}

// دالة خاصة بواتساب العلاج
function openWhatsAppTreatment(serviceType) {
    const phoneNumber = '97333531415';
    const message = `مرحباً، أود حجز موعد لـ ${serviceType}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
        
        // Treatment programs data
        const treatmentProgramsData = [
            {
                number: 1,
                name: "العلاج السلوكي المعرفي (CBT)",
                icon: "brain",
                description: "يركز على تغيير الأفكار والسلوكيات السلبية وتحويلها لأنماط أكثر إيجابية وفعالية."
            },
            {
                number: 2,
                name: "الوعي والاستبصار والتثقيف النفسي",
                icon: "eye",
                description: "لزيادة الوعي الذاتي واستبصار المشاعر ودوافع السلوك، مع محتوى تثقيفي نفسي عملي يساعد على فهم الذات والتعامل مع ضغوط الحياة بوعي أكبر."
            },
            {
                number: 3,
                name: "العلاج بالقبول والالتزام (ACT)",
                icon: "target",
                description: "يساعد على قبول المشاعر الصعبة والالتزام بسلوكيات تتماشى مع قيمك وأهدافك."
            },
            {
                number: 4,
                name: "العلاج الجدلي السلوكي (DBT)",
                icon: "activity",
                description: "يُستخدم لتقوية التحكم العاطفي وتنمية مهارات التكيف، خاصة مع الأشخاص الذين يعانون من تقلبات مزاجية شديدة وغيرها."
            },
            {
                number: 5,
                name: "العلاج النفسي التحليلي",
                icon: "search",
                description: "يركز على فهم الجذور العميقة للمشاكل النفسية والعلاقات الداخلية لتجاوز الصراعات النفسية."
            },
            {
                number: 6,
                name: "العلاج الأسري",
                icon: "home",
                description: "يعمل على تحسين التفاعل والتواصل داخل الأسرة وحل الخلافات بطريقة صحية وبناءة من منظور نفسي"
            },
            {
                number: 7,
                name: "العلاج النفسي الجمعي (Group Therapy)",
                icon: "users",
                description: "يوفر بيئة داعمة لتبادل التجارب مع الآخرين وتعلم مهارات جديدة في التكيف النفسي"
            },
            {
                number: 8,
                name: "الارشاد التربوي للعلاج السلوكي للأطفال والمراهقين",
                icon: "graduation-cap",
                description: "يهدف لتحسين سلوكيات الأطفال والمراهقين وتنمية مهارات التأقلم الاجتماعي والعاطفي."
            },
            {
                number: 9,
                name: "العلاج بالاسترخاء",
                icon: "moon",
                description: "يعلّم تقنيات التحكم بالتوتر والقلق عبر الاسترخاء والتنفس والتأمل."
            }
        ];
        
        // FAQ data
        const faqData = [
            {
                question: "ما هي مدة الجلسة العلاجية؟",
                answer: "مدة الجلسة العلاجية او الاستشارة ٥٠ دقيقة في المتوسط، وقد تختلف حسب احتياج المراجع والسياق العلاجي."
            },
            {
                question: "هل جلسات العلاج النفسي سرية؟",
                answer: "نعم، جميع الجلسات العلاجية سرية تماماً ومحمية بموجب قوانين الخصوصية المهنية. لا نشارك أي معلومات شخصية مع أي طرف ثالث بدون موافقة صريحة من المراجع ."
            },
            {
                question: "كم عدد الجلسات التي أحتاجها؟",
                answer: "عدد الجلسات يختلف حسب الحالة الفردية ونوع المشكلة ومدى استجابة المراجع  للعلاج. بعد الجلسة الأولى، سيتم وضع خطة علاجية مناسبة تشمل عدد الجلسات المتوقعة."
            },
            {
                question: "هل يمكنني الحصول على استشارة عبر الإنترنت؟",
                answer: "نعم، نقدم جلسات علاجية عبر الإنترنت (Online) لمن لا يستطيع الحضور شخصياً للمركز، مع الحفاظ على نفس مستوى الجودة والخصوصية."
            },
            {
                question: "ما الفرق بين الاستشارة النفسية والعلاج النفسي؟",
                answer: "الاستشارة النفسية تركز على المشكلات الحالية ومساعدة المراجع  على تطوير مهارات التأقلم، بينما العلاج النفسي يتعمق أكثر في جذور المشكلات ويعمل على تغيير الأنماط السلوكية والتفكيرية العميقة."
            },
            {
                question: "العلاج النفسي مكلف، هل لديكم خصومات؟",
                answer: "نعم، يوجد باقات مختلفة للرسوم حسب عدد الجلسات المطلوبة.يمكنك التعرف على الباقات من خلال التواصل معنا عبر الواتساب. "
            },
            {
                question: "هل أحتاج إلى تحويل من طبيب للحصول على العلاج؟",
                answer: "لا، لا تحتاج إلى تحويل من طبيب. يمكنك حجز موعد مباشرة مع المركز."
            }

        ];
        
      // Blog data - استبدل الموجود بهذا
const blogData = [
    {
        "id": 1,
        "title": "العلاج النفسي غير الدوائي",
        "excerpt": "مجموعة من التقنيات النفسية والسلوكية والتربوية تستخدم علاقة تفاعلية بين المعالج والمريض لعلاج الاضطرابات وتعديل السلوكيات. يهدف إلى رفع الوعي الذاتي وتصحيح الأفكار المشوهة، ويُعد بديلاً أو مكملاً للعلاج الدوائي ويركز على التأهيل الاجتماعي.",
        "category": "الصحة النفسية",
        "date": "10 يناير 2025", 
        "readTime": "4 دقائق",
        "image": "images/img19.jpg"
    },
    {
        "id": 2,
        "title": "يا مجنون !!",
        "excerpt": "مقالة نقدية تتناول النظرة السلبية والوصم المجتمعي (الاستغماية والاستهزاء) المرتبط بالمرض النفسي والعلاج النفسي. يؤكد الكاتب على ضرورة تغيير هذه الثقافة لنشر الوعي وتقديم الدعم للمرضى وتشجيعهم على طلب المساعدة دون خوف من الحكم أو الرفض.",
        "category": "الصحة النفسية",
        "date": "10 يناير 2025",
        "readTime": "4 دقائق",
        "image": "images/img18.jpg"
    },
    {
        "id": 3,
        "title": "رعاية الأطفال ذوي الإعاقة: دمجهم في المجتمع",
        "excerpt": "رؤية متخصصة من الأخصائي النفسي محمد القاضي حول أهمية دعم الأسرة والمجتمع في رعاية الأطفال ذوي الإعاقة ودمجهم بشكل فعال.",
        "category": "رعاية الأطفال",
        "date": "15 يناير 2025",
        "readTime": "5 دقائق", 
        "image": "images/img1.png"
    },
    {
        "id": 4,
        "title": "الفوبيا: اضطراب يصيب الشباب بين 15 و35 سنة",
        "excerpt": "تعرف على أنواع الفوبيا المختلفة وأسبابها وكيفية التعامل مع هذا الاضطراب النفسي الشائع.",
        "category": "الاضطرابات النفسية",
        "date": "12 يناير 2025",
        "readTime": "3 دقائق",
        "image": "images/img16.png"
    },
    {
        "id": 5, 
        "title": "الوسواس القهري والدين: فهم العلاقة والعلاج",
        "excerpt": "نظرة متخصصة حول الوسواس القهري المرتبط بالدين وطرق العلاج المناسبة لهذا النوع من الاضطرابات.",
        "category": "العلاج النفسي",
        "date": "8 يناير 2025",
        "readTime": "6 دقائق",
        "image": "images/img15.png"
    },
    {
        "id": 6,
        "title": "دور الأسرة في دعم الأطفال ذوي الإعاقة", 
        "excerpt": "كيف يمكن للأسرة أن تكون الداعم الأساسي في رحلة دمج الطفل المعاق في المجتمع وتحسين جودة حياته.",
        "category": "العلاج الأسري",
        "date": "5 يناير 2025",
        "readTime": "4 دقائق",
        "image": "images/img17.png"
    }
];
        
        
        // Success stories data - تم تحديث الصور
        const successStoriesData = [];
        for (let i = 1; i <= 21; i++) {
            successStoriesData.push({
                id: i,
                title: `شفاء بدون دواء ${i}`,
                image: `images/experince (${i}).jpg`
            });
        }
        
        // Customer reviews data - صور آراء العملاء
        const customerReviewsData = [];
        for (let i = 1; i <= 10; i++) {
            customerReviewsData.push({
                id: i,
                title: `رأي العميل ${i}`,
                image: `images/play (${i}).jpg`
            });
        }
        
                // Render services with AOS animations
        function renderServices() {
            const servicesGrid = document.getElementById('services-grid');
            if (servicesGrid) {
                servicesGrid.innerHTML = servicesData.map((service, index) => `
                    <div class="service-card service-card-3d performance-optimized stagger-reveal services-animation" data-aos="fade-up" data-aos-delay="${index * 100}">
                        <div class="service-icon">
                            <i data-lucide="${service.icon}"></i>
                        </div>
                        <h3>${service.name}</h3>
                        <div class="service-actions">
                            <button onclick="openServiceModal('${service.name}')" class="btn-view">
                                <i data-lucide="info" class="ml-2"></i>
                                المزيد
                            </button>
                        </div>
                    </div>
                `).join('');
                
                lucide.createIcons();
                
                // Add touch events for mobile hover effect
                if (window.innerWidth <= 767) {
                    document.querySelectorAll('.service-card').forEach(card => {
                        card.addEventListener('touchstart', function() {
                            this.classList.add('active');
                        });
                        
                        card.addEventListener('touchend', function() {
                            setTimeout(() => {
                                this.classList.remove('active');
                            }, 300);
                        });
                    });
                }
                
                // Animate staggered reveals
                const staggerElements = document.querySelectorAll('.stagger-reveal');
                const staggerObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate');
                            staggerObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                staggerElements.forEach(element => {
                    staggerObserver.observe(element);
                });
            }
        }

        // Service modal functionality
        function openServiceModal(serviceName) {
            const service = servicesData.find(s => s.name === serviceName);
            if (!service) return;
            
            const modal = document.getElementById('service-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalFeaturesList = document.getElementById('modal-features-list');
            const modalBookBtn = document.getElementById('modal-book-btn');
            
            modalTitle.textContent = service.name;
            modalDescription.textContent = service.detailedDescription;
            
            // Clear previous features
            modalFeaturesList.innerHTML = '';
            
            // Add new features
            service.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeaturesList.appendChild(li);
            });
            
            // Update book button
            modalBookBtn.onclick = function() {
                openWhatsAppService(service.name);
                closeServiceModal();
            };
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeServiceModal() {
            const modal = document.getElementById('service-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside or on close button
        document.getElementById('service-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });
        
        document.getElementById('modal-close').addEventListener('click', closeServiceModal);
        
        // WhatsApp functions with service name
        function openWhatsAppService(serviceName = '') {
            const phoneNumber = "97333789415";
            const message = serviceName ? 
                `مرحباً، أود حجز موعد لخدمة ${serviceName}` : 
                "مرحباً، أود الاستفسار عن الخدمات النفسية المتاحة";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            renderServices();
        });
        // Render treatment methods
        function renderTreatmentMethods() {
            const treatmentMethodsGrid = document.getElementById('treatment-methods-grid');
            if (treatmentMethodsGrid) {
                treatmentMethodsGrid.innerHTML = treatmentMethodsData.map((method, index) => `
                    <div class="treatment-card card-3d performance-optimized stagger-reveal" data-index="${index}">
                        <div class="treatment-icon">
                            <i data-lucide="${method.icon}"></i>
                        </div>
                        <h3 class="mb-3">${method.name}</h3>
                        <p class="mb-6">${method.description}</p>
                        <div class="treatment-actions">
                            <button class="btn-primary" onclick="openWhatsAppTreatment('${method.name}')">
                                احجز الآن
                            </button>
                        </div>
                    </div>
                `).join('');
                
                lucide.createIcons();
                
                // Add animation to treatment cards when they come into view
                const treatmentCards = document.querySelectorAll('.treatment-card');
                const treatmentObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const index = parseInt(entry.target.getAttribute('data-index'));
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, index * 200);
                            treatmentObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.3 });
                
                treatmentCards.forEach(card => {
                    treatmentObserver.observe(card);
                });
            }
        }
        
        // Render treatment programs
        function renderTreatmentPrograms() {
            const programsGrid = document.getElementById('programs-grid');
            if (programsGrid) {
                programsGrid.innerHTML = treatmentProgramsData.map(program => `
                    <div class="program-card card-hover animate-fade-up">
                        <div class="program-number">${program.number}</div>
                        <div class="program-icon">
                            <i data-lucide="${program.icon}"></i>
                        </div>
                        <h3>${program.name}</h3>
                        <p>${program.description}</p>
                    </div>
                `).join('');
                
                lucide.createIcons();
            }
        }
        
        // Render FAQ
        function renderFAQ() {
            const faqContainer = document.getElementById('faq-container');
            if (faqContainer) {
                faqContainer.innerHTML = faqData.map((faq, index) => `
                    <div class="faq-item stagger-reveal">
                        <button class="faq-trigger" data-index="${index}">
                            <span>${faq.question}</span>
                            <i data-lucide="chevron-down" class="faq-icon"></i>
                        </button>
                        <div class="faq-content">
                            <div class="faq-content-inner">
                                <p>${faq.answer}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                // Add event listeners to FAQ triggers
                document.querySelectorAll('.faq-trigger').forEach(trigger => {
                    trigger.addEventListener('click', function() {
                        const index = this.getAttribute('data-index');
                        const content = this.nextElementSibling;
                        const icon = this.querySelector('.faq-icon');
                        
                        // Toggle active class
                        this.classList.toggle('active');
                        content.classList.toggle('active');
                        
                        // Update icon
                        if (this.classList.contains('active')) {
                            icon.style.transform = 'rotate(180deg)';
                        } else {
                            icon.style.transform = 'rotate(0)';
                        }
                    });
                });
                
                lucide.createIcons();
                
                // Animate staggered reveals for FAQ
                const faqStaggerElements = document.querySelectorAll('.faq-item.stagger-reveal');
                const faqStaggerObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate');
                            faqStaggerObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                faqStaggerElements.forEach(element => {
                    faqStaggerObserver.observe(element);
                });
            }
        }
        
        // Render blog posts in slider
        function renderBlogSlider() {
            const blogSliderWrapper = document.getElementById('blog-slider-wrapper');
            if (blogSliderWrapper) {
                blogSliderWrapper.innerHTML = blogData.map((post, index) => `
                    <div class="swiper-slide blog-slide">
                        <div class="blog-card-slider card-3d performance-optimized" data-index="${index}">
                            <img 
                                src="${post.image}" 
                                alt="${post.title}"
                                class="blog-image-slider"
                                onerror="this.src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'"
                            />
                            <div class="blog-content-slider">
                                <span class="blog-category-slider">${post.category}</span>
                                <h3 class="blog-title-slider">${post.title}</h3>
                                <p class="blog-excerpt-slider">${post.excerpt}</p>
                                <div class="blog-meta-slider">
                                    <div class="blog-meta-item-slider">
                                        <i data-lucide="calendar" class="h-4 w-4"></i>
                                        <span>${post.date}</span>
                                    </div>
                                    <div class="blog-meta-item-slider">
                                        <i data-lucide="clock" class="h-4 w-4"></i>
                                        <span>${post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                // Add click event to expand blog cards
                document.querySelectorAll('.blog-card-slider').forEach(card => {
                    card.addEventListener('click', function() {
                        // Toggle expanded class
                        this.classList.toggle('expanded');
                        
                        // Close other expanded cards
                        document.querySelectorAll('.blog-card-slider').forEach(otherCard => {
                            if (otherCard !== this && otherCard.classList.contains('expanded')) {
                                otherCard.classList.remove('expanded');
                            }
                        });
                    });
                });
                
                // Re-initialize icons for newly added elements
                lucide.createIcons();
            }
        }
        
        // Render success stories
        function renderSuccessStories() {
            const successStoriesWrapper = document.getElementById('success-stories-wrapper');
            if (successStoriesWrapper) {
                successStoriesWrapper.innerHTML = successStoriesData.map((story, index) => `
                    <div class="swiper-slide success-story-slide">
                        <img src="${story.image}" alt="${story.title}" class="success-story-image" loading="lazy">
                    </div>
                `).join('');
            }
        }
        
        // Render customer reviews - محسن
        function renderCustomerReviews() {
            const customerReviewsWrapper = document.getElementById('customer-reviews-wrapper');
            if (customerReviewsWrapper) {
                customerReviewsWrapper.innerHTML = customerReviewsData.map((review, index) => `
                    <div class="swiper-slide customer-review-slide-enhanced">
                        <img src="${review.image}" alt="${review.title}" class="customer-review-image-enhanced" loading="lazy">
                    </div>
                `).join('');
            }
        }
        
        // Render studio slider
        function renderStudioSlider() {
            const studioSliderWrapper = document.getElementById('studio-slider-wrapper');
            if (studioSliderWrapper) {
                studioSliderWrapper.innerHTML = studioImages.map((item, index) => `
                    <div class="swiper-slide studio-slide" data-index="${index}">
                        <img src="${item.image}" alt="${item.title}" class="studio-slide-image">
                        <div class="studio-slide-overlay">
                            <h3>${item.title}</h3>
                            ${item.description ? `<p>${item.description}</p>` : ''}
                        </div>
                    </div>
                `).join('');
                
                // Add click event to open modal
                document.querySelectorAll('.studio-slide').forEach(slide => {
                    slide.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        openImageModal(index);
                    });
                });
            }
        }
        
        // Image modal functionality
        let currentImageIndex = 0;
        
        function openImageModal(index) {
            currentImageIndex = index;
            const modal = document.getElementById('image-modal');
            const modalImage = document.getElementById('modal-image');
            
            modalImage.src = studioImages[currentImageIndex].image;
            modalImage.alt = studioImages[currentImageIndex].title;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeImageModal() {
            const modal = document.getElementById('image-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        function navigateImageModal(direction) {
            if (direction === 'next') {
                currentImageIndex = (currentImageIndex + 1) % studioImages.length;
            } else {
                currentImageIndex = (currentImageIndex - 1 + studioImages.length) % studioImages.length;
            }
            
            const modalImage = document.getElementById('modal-image');
            modalImage.src = studioImages[currentImageIndex].image;
            modalImage.alt = studioImages[currentImageIndex].title;
        }
        
        // Service modal functionality
        function openServiceModal(serviceName) {
            const service = servicesData.find(s => s.name === serviceName);
            if (!service) return;
            
            const modal = document.getElementById('service-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalFeaturesList = document.getElementById('modal-features-list');
            const modalBookBtn = document.getElementById('modal-book-btn');
            
            modalTitle.textContent = service.name;
            modalDescription.textContent = service.detailedDescription;
            
            // Clear previous features
            modalFeaturesList.innerHTML = '';
            
            // Add new features
            service.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeaturesList.appendChild(li);
            });
            
            // Update book button
            modalBookBtn.onclick = function() {
                openWhatsAppService(service.name);
                closeServiceModal();
            };
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeServiceModal() {
            const modal = document.getElementById('service-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside or on close button
        document.getElementById('service-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });
        
        document.getElementById('modal-close').addEventListener('click', closeServiceModal);
        
        // Image modal event listeners
        document.getElementById('image-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });
        
        document.getElementById('modal-close-image').addEventListener('click', closeImageModal);
        document.getElementById('modal-prev').addEventListener('click', () => navigateImageModal('prev'));
        document.getElementById('modal-next').addEventListener('click', () => navigateImageModal('next'));
        
        // WhatsApp functions with service name
        function openWhatsAppService(serviceName = '') {
    const phoneNumber = "+97333531415";
            const message = serviceName ? 
                `مرحباً، أود حجز موعد لخدمة ${serviceName}` : 
                "مرحباً، أود الاستفسار عن الخدمات النفسية المتاحة";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        function openWhatsAppTreatment(methodName) {
    const phoneNumber = "+97333531415";
            const message = `مرحباً، أود حجز موعد لطريقة العلاج: ${methodName}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        
        // Form submission to WhatsApp
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const service = formData.get('service');
            const appointment = formData.get('appointment');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `
طلب استشارة جديدة من موقع شيزلونج:

👤 الاسم: ${name}
📞 الهاتف: ${phone}
📧 الإيميل: ${email || 'لم يتم التزويد'}
🩺 الخدمة المطلوبة: ${service}
⏰ الوقت المفضل: ${appointment}
💬 الرسالة: ${message}
            `.trim();
            
            // Show success message
            const successMessage = document.getElementById('success-message');
            successMessage.classList.add('active');
            
            // Redirect to WhatsApp after 2 seconds
            setTimeout(() => {
                const url = `https://wa.me/97333531415?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(url, '_blank');
                
                // Reset form
                this.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('active');
                }, 5000);
            }, 2000);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    document.querySelectorAll('.mobile-nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    const menuToggle = document.getElementById('mobile-menu-toggle');
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        menuToggle.classList.remove('active');
                    }
                }
            });
        });
        
        // Scroll animation
        function initScrollAnimation() {
            const elements = document.querySelectorAll('.scroll-animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });
            
            elements.forEach(element => {
                observer.observe(element);
            });
        }
        
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            renderServices();
            renderTreatmentMethods();
            renderFAQ();
            renderBlogSlider();
            renderSuccessStories();
            renderCustomerReviews();
            renderStudioSlider();
            const sliders = initSliders();
            initScrollAnimation();
            
            // Animate feature items
            const featureItems = document.querySelectorAll('.feature-item');
            featureItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, 300 * (index + 1));
            });
            
            // Keyboard navigation for image modal
            document.addEventListener('keydown', function(e) {
                const imageModal = document.getElementById('image-modal');
                if (imageModal.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        closeImageModal();
                    } else if (e.key === 'ArrowRight') {
                        navigateImageModal('next');
                    } else if (e.key === 'ArrowLeft') {
                        navigateImageModal('prev');
                    }
                }
            });

            // Animate review cards
            const reviewCards = document.querySelectorAll('.review-card');
            const reviewObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        reviewObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            reviewCards.forEach(card => {
                reviewObserver.observe(card);
            });
        });

       
        // وظائف إدارة النوافذ المنبثقة
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                // إعادة تهيئة الأيقونات
                lucide.createIcons();
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }

        // إغلاق النافذة عند النقر خارج المحتوى
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // إغلاق النافذة بمفتاح Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal-overlay').forEach(modal => {
                        modal.classList.remove('active');
                    });
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // وظيفة فتح نافذة النصائح
        function openTipsModal() {
            openModal('tips-modal');
        }

        // Social dropdown functionality
        document.addEventListener('DOMContentLoaded', function() {
            const socialButton = document.getElementById('social-button');
            const socialDropdown = document.getElementById('social-dropdown');
            
            if (socialButton && socialDropdown) {
                socialButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    socialDropdown.classList.toggle('active');
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', function() {
                    socialDropdown.classList.remove('active');
                });
                
                // Prevent dropdown from closing when clicking inside it
                socialDropdown.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
        });



// دالة فتح خيارات الاتصال -  
function openContactOptions(phoneNumber = '+97333531415') {
    const modal = document.createElement('div');
    modal.className = 'contact-options-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 300px;
            width: 90%;
        ">
            <h3 style="margin-bottom: 1.5rem; color: #333;">اختر طريقة التواصل</h3>
            
            <button onclick="window.open('tel:${phoneNumber.replace(/[\s\-]/g, '')}', '_self'); this.closest('.contact-options-modal').remove();" style="
                background: #392d1bff;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                margin: 0.5rem;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            ">
                <i data-lucide="phone"></i>
                الاتصال الهاتفي
            </button>
            
            <button onclick="openWhatsApp('${phoneNumber}'); this.closest('.contact-options-modal').remove();" style="
                background: #075e54;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                margin: 0.5rem;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            ">
                <i data-lucide="message-circle"></i>
                واتساب
            </button>
            
            <button onclick="this.closest('.contact-options-modal').remove()" style="
                background: #6c757d;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                margin: 0.5rem;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                margin-top: 1rem;
            ">
                <i data-lucide="x"></i>
                إلغاء
            </button>
        </div>
    `;

    document.body.appendChild(modal);
    lucide.createIcons();
}

// دالة إجراء مكالمة هاتفية
function makePhoneCall(phoneNumber) {
    // تنظيف الرقم من أي مسافات أو شرطات
    const cleanNumber = phoneNumber.replace(/[\s\-]/g, '');
    
    // فتح رابط الاتصال الهاتفي
    window.open(`tel:${cleanNumber}`, '_self');
    
    // إغلاق النافذة المنبثقة
    closeContactModal();
}

// دالة إغلاق النافذة المنبثقة
function closeContactModal() {
    const modal = document.querySelector('.contact-options-modal');
    if (modal) {
        modal.remove();
    }
}

// إغلاق النافذة عند النقر خارجها
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('contact-options-modal')) {
        closeContactModal();
    }
});



// دالة معالجة أخطاء الصور - ضع هذا قبل نهاية الملف
function handleImageError(img, title) {
    console.log(`جاري تحميل صورة بديلة للمقال: ${title}`);
    
    // صور بديلة مناسبة للصحة النفسية
    const fallbackImages = [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1576091160550-2173cba7efa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ];
    
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    img.src = fallbackImages[randomIndex];
    img.alt = `صورة بديلة للمقال: ${title}`;
    
    // إزالة مستمع الخطأ بعد المعالجة
    img.onerror = null;
}


document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    // تأثير التمرير
    whatsappBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.08)';
        this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
        this.style.background = '#1da851';
    });
    
    whatsappBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(37, 211, 102, 0.3)';
        this.style.background = '#25D366';
    });
    
    // تأثير النقر
    whatsappBtn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.96)';
    });
    
    whatsappBtn.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.08)';
    });
});


// التحكم في السلايدر حسب الوضع
function updateSliderForTheme(isDark) {
    const swiper = document.querySelector('.mySwiper')?.swiper;
    if (!swiper) return;
    
    // إعادة تهيئة السلايدر بعد تغيير الوضع
    setTimeout(() => {
        swiper.update();
        swiper.slideTo(0);
    }, 100);
}

// دالة لتحديث السلايدر عند تغيير الوضع
function handleThemeChange(isDark) {
    updateSliderForTheme(isDark);
}

// تحديث السلايدر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const isDark = document.body.classList.contains('dark-mode');
    updateSliderForTheme(isDark);
    
    // إضافة مستمع لتغيير الوضع
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                const isDarkNow = document.body.classList.contains('dark-mode');
                updateSliderForTheme(isDarkNow);
            }, 300);
        });
    }
});