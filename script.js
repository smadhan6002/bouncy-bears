/**
 * Bouncy Bears — CLIENT INTERACTION ENGINE
 * Powered by centralized Bouncy_CONFIG
 */

// ==========================================================================
// 0. VIDEO PRELOADER LOGIC
// ==========================================================================
(function() {
  var preloader = document.getElementById('video-preloader');
  var video = document.getElementById('preloader-video');
  
  if (!preloader || !video) return;

  // Check session storage
  var hasSeenPreloader = sessionStorage.getItem('bouncyBearsPreloaderSeen');
  
  if (hasSeenPreloader === 'true') {
    // Already saw it this session, hide immediately without transition
    preloader.style.display = 'none';
    return;
  }

  // Prevent scrolling
  document.body.classList.add('preloader-active');

  function removePreloader() {
    if (preloader.classList.contains('fade-out')) return;
    
    preloader.classList.add('fade-out');
    document.body.classList.remove('preloader-active');
    sessionStorage.setItem('bouncyBearsPreloaderSeen', 'true');
    
    // Completely remove from DOM after fade out to free memory
    setTimeout(function() {
      if (preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 800);
  }

  // Event Listeners
  video.addEventListener('ended', removePreloader);
  video.addEventListener('error', removePreloader); // Fallback if video fails to load

  // Attempt Autoplay
  var playPromise = video.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(function(error) {
      // Autoplay blocked or failed
      console.warn("Autoplay prevented or failed, hiding preloader fallback:", error);
      removePreloader();
    });
  }

  // Fallback: If video gets stuck buffering for more than 10 seconds
  setTimeout(function() {
    if (!preloader.classList.contains('fade-out')) {
      console.warn("Preloader timeout fallback triggered");
      removePreloader();
    }
  }, 10000);
})();

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var config = window.Bouncy_CONFIG || {};

  // 1. DYNAMIC CONTACT & WHATSAPP DATA BINDING
  function bindDynamicConfig() {
    if (!config.contact) return;

    // Direct WhatsApp links
    document.querySelectorAll('[data-whatsapp-action]').forEach(function (el) {
      var customMsg = el.getAttribute('data-whatsapp-msg');
      el.href = config.getWhatsAppUrl(customMsg);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Direct Phone links
    document.querySelectorAll('[data-phone-primary]').forEach(function (el) {
      el.href = 'tel:' + config.contact.primaryPhoneRaw;
      if (el.classList.contains('bind-text')) {
        el.textContent = config.contact.primaryPhone;
      }
    });

    document.querySelectorAll('[data-phone-secondary]').forEach(function (el) {
      el.href = 'tel:' + config.contact.secondaryPhoneRaw;
      if (el.classList.contains('bind-text')) {
        el.textContent = config.contact.secondaryPhone;
      }
    });

    // Direct Email links
    document.querySelectorAll('[data-email-bind]').forEach(function (el) {
      el.href = 'mailto:' + config.contact.email;
      if (el.classList.contains('bind-text')) {
        el.textContent = config.contact.email;
      }
    });
  }

  bindDynamicConfig();

  // 2. STICKY NAVBAR SCROLL ELEVATION
  var siteHeader = document.getElementById('siteHeader');
  function handleNavbarScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // 3. RESPONSIVE MOBILE NAVIGATION DRAWER
  var mobileToggle = document.getElementById('mobileToggle');
  var mobileDrawer = document.getElementById('mobileDrawer');
  var drawerClose = document.getElementById('drawerClose');
  var drawerOverlay = document.getElementById('drawerOverlay');
  var drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileToggle && mobileToggle.classList.add('active');
    mobileToggle && mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerOverlay && drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileToggle && mobileToggle.classList.remove('active');
    mobileToggle && mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerOverlay && drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle && mobileToggle.addEventListener('click', function () {
    if (mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay && drawerOverlay.addEventListener('click', closeDrawer);

  // Close drawer on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeDrawer();
      mobileToggle && mobileToggle.focus();
    }
  });

  drawerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setTimeout(closeDrawer, 180);
    });
  });

  // 4. ACTIVE NAV LINK SCROLL TRACKING
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    var scrollY = window.pageYOffset + 120;
    sections.forEach(function (current) {
      var sectionHeight = current.offsetHeight;
      var sectionTop = current.offsetTop;
      var sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // 5. PROGRAM CARD -> ENQUIRY FORM AUTO-SELECT
  document.querySelectorAll('.program-enquire-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var programName = this.getAttribute('data-program');
      var programSelect = document.getElementById('enquiryProgram');
      if (programSelect && programName) {
        programSelect.value = programName;
      }
      var enquirySection = document.getElementById('enquiry');
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 6. GALLERY & LIGHTBOX MODAL (DYNAMIC)
  var dynamicContainer = document.getElementById('dynamic-galleries-container');
  var lightboxModal = document.getElementById('lightboxModal');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');

  var currentLightboxIndex = 0;
  var currentLightboxEventData = []; // Array of image objects for the currently open event

  // Event Gallery Data
  var eventsData = {
    "Annual Day": [
      "IMG-20250413-WA0053.jpg", "IMG-20250413-WA0060.jpg", "IMG-20250413-WA0061.jpg", "IMG-20250413-WA0066.jpg", "IMG-20250413-WA0075.jpg", "IMG-20250413-WA0079.jpg", "IMG-20250413-WA0084.jpg", "IMG-20250413-WA0085.jpg", "IMG-20250413-WA0093.jpg", "IMG-20250413-WA0105.jpg", "IMG-20250413-WA0116.jpg", "IMG-20250413-WA0118.jpg", "IMG-20250413-WA0144.jpg", "IMG-20250413-WA0149.jpg", "IMG-20250413-WA0151.jpg", "IMG-20250413-WA0168.jpg", "IMG-20250413-WA0174.jpg", "IMG-20250413-WA0184.jpg", "IMG-20250413-WA0187.jpg", "IMG-20250413-WA0190.jpg", "IMG-20250413-WA0202.jpg", "IMG-20250413-WA0207.jpg", "IMG-20250413-WA0215.jpg", "IMG-20250413-WA0257.jpg", "IMG-20250413-WA0278.jpg", "IMG-20250413-WA0296.jpg", "IMG-20250413-WA0298.jpg", "IMG-20250413-WA0310.jpg", "IMG-20250413-WA0314.jpg", "IMG-20250413-WA0321.jpg", "IMG-20250413-WA0324.jpg", "IMG-20250413-WA0342.jpg", "IMG-20250413-WA0343.jpg"
    ],
    "field trip and sports day": [
      "WhatsApp Image 2026-10-06 at 7.49.30 PM (2).jpeg", "WhatsApp Image 2026-10-06 at 7.49.31 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.31 PM (2).jpeg", "WhatsApp Image 2026-10-06 at 7.49.31 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.32 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.32 PM (2).jpeg", "WhatsApp Image 2026-10-06 at 7.49.32 PM (3).jpeg", "WhatsApp Image 2026-10-06 at 7.49.32 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.33 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.33 PM (2).jpeg", "WhatsApp Image 2026-10-06 at 7.49.33 PM (3).jpeg", "WhatsApp Image 2026-10-06 at 7.49.33 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.34 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.35 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.35 PM (3).jpeg", "WhatsApp Image 2026-10-06 at 7.49.35 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.37 PM (2).jpeg", "WhatsApp Image 2026-10-06 at 7.49.38 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.38 PM.jpeg", "WhatsApp Image 2026-10-06 at 7.49.39 PM (1).jpeg", "WhatsApp Image 2026-10-06 at 7.49.39 PM (3).jpeg"
    ],
    "Ganesh chaturthi": [
      "IMG-20250826-WA0012.jpg", "IMG-20250826-WA0016.jpg", "IMG-20250826-WA0031.jpg", "IMG-20250826-WA0032.jpg", "IMG-20250826-WA0035.jpg", "IMG-20250826-WA0036.jpg", "IMG-20250826-WA0048.jpg", "IMG-20250826-WA0063.jpg", "IMG-20250826-WA0065.jpg", "IMG-20250826-WA0067.jpg", "IMG-20250826-WA0071.jpg", "IMG-20250826-WA0098.jpg"
    ],
    "pongal cebration": [
      "IMG-20240112-WA0119.jpg", "IMG-20240112-WA0122.jpg", "IMG-20240112-WA0139.jpg", "IMG-20240112-WA0143.jpg", "IMG-20240112-WA0146.jpg", "IMG-20240112-WA0149.jpg"
    ],
    "Christmas": [
      "IMG-20251223-WA0011.jpg", "IMG-20251223-WA0020.jpg", "IMG-20251223-WA0022.jpg", "IMG-20251223-WA0024.jpg", "IMG-20251223-WA0025.jpg", "IMG-20251223-WA0027.jpg", "IMG-20251223-WA0035.jpg", "IMG-20251223-WA0052.jpg", "IMG-20251223-WA0061.jpg", "IMG-20251223-WA0068.jpg", "IMG-20251223-WA0079.jpg", "IMG-20251223-WA0086.jpg", "IMG-20251223-WA0088.jpg", "IMG-20251223-WA0089.jpg", "IMG-20251223-WA0092.jpg", "IMG-20251223-WA0103.jpg"
    ],
    "Project Based Learning": [
      "WhatsApp Image 2026-10-08 at 5.26.22 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.23 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.23 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.23 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.24 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.24 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.24 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.25 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.25 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.25 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.26 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.26 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.26 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.27 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.27 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.27 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.28 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.28 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.28 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.29 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.29 PM (2).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.29 PM.jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.30 PM (1).jpeg",
      "WhatsApp Image 2026-10-08 at 5.26.30 PM.jpeg"
    ]
  };

  var galleryState = {
    isLightboxOpen: false,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  if (dynamicContainer) {
    Object.keys(eventsData).forEach(function (eventName) {
      var images = eventsData[eventName];
      if (images.length === 0) return;
      
      var sectionDiv = document.createElement('div');
      sectionDiv.className = 'event-gallery-section fade-up';
      
      var headerDiv = document.createElement('div');
      headerDiv.className = 'event-gallery-header';
      headerDiv.innerHTML = '<h3 class="event-gallery-title">' + eventName + '</h3>';
      
      var trackContainer = document.createElement('div');
      trackContainer.className = 'event-gallery-track-container';
      
      var trackDiv = document.createElement('div');
      trackDiv.className = 'event-gallery-track';
      
      // Duplicate images for infinite illusion
      var renderImages = images.concat(images);
      
      renderImages.forEach(function (imgFile, index) {
        var imgSrc = 'images/' + eventName + '/' + imgFile;
        var originalIndex = index % images.length;
        
        var itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item';
        itemDiv.tabIndex = 0;
        itemDiv.setAttribute('role', 'button');
        itemDiv.setAttribute('aria-label', 'Open ' + eventName + ' image');
        
        var imgEl = document.createElement('img');
        imgEl.src = imgSrc;
        imgEl.alt = eventName + ' celebration at Bethel School';
        imgEl.loading = 'lazy';
        
        var overlayDiv = document.createElement('div');
        overlayDiv.className = 'gallery-overlay';
        overlayDiv.innerHTML = '<span class="gallery-category">Event</span><div class="gallery-title">' + eventName + '</div>';
        
        itemDiv.appendChild(imgEl);
        itemDiv.appendChild(overlayDiv);
        
        itemDiv.addEventListener('click', function () {
          openLightbox(originalIndex, images, eventName);
        });
        itemDiv.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') openLightbox(originalIndex, images, eventName);
        });
        
        trackDiv.appendChild(itemDiv);
      });
      
      trackContainer.appendChild(trackDiv);
      sectionDiv.appendChild(headerDiv);
      sectionDiv.appendChild(trackContainer);
      dynamicContainer.appendChild(sectionDiv);
      
      // Auto-scroll Logic
      var isHovered = false;
      var isDragging = false;
      var startX, scrollLeft;
      var scrollSpeed = 0.5;

      trackContainer.addEventListener('mouseenter', function () { isHovered = true; });
      trackContainer.addEventListener('mouseleave', function () { 
        isHovered = false; 
        isDragging = false;
      });
      
      trackContainer.addEventListener('touchstart', function () { isHovered = true; }, {passive: true});
      trackContainer.addEventListener('touchend', function () { isHovered = false; });
      
      trackContainer.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.pageX - trackContainer.offsetLeft;
        scrollLeft = trackContainer.scrollLeft;
      });
      trackContainer.addEventListener('mouseup', function () { isDragging = false; });
      trackContainer.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - trackContainer.offsetLeft;
        var walk = (x - startX) * 2; 
        trackContainer.scrollLeft = scrollLeft - walk;
      });
      
      function step() {
        if (!galleryState.reducedMotion && !galleryState.isLightboxOpen && !isHovered && !isDragging) {
          trackContainer.scrollLeft += scrollSpeed;
          // Reset when reaching halfway
          if (trackContainer.scrollLeft >= trackContainer.scrollWidth / 2) {
            trackContainer.scrollLeft = 0;
          }
        }
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  function openLightbox(index, imagesArray, eventName) {
    if (!lightboxModal) return;
    galleryState.isLightboxOpen = true;
    
    currentLightboxEventData = imagesArray.map(function(img) {
      return {
        src: 'images/' + eventName + '/' + img,
        alt: eventName + ' celebration at Bethel School',
        title: eventName,
        category: 'Event'
      };
    });
    
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function updateLightboxContent() {
    var data = currentLightboxEventData[currentLightboxIndex];
    if (lightboxImg) {
      lightboxImg.src = data.src;
      lightboxImg.alt = data.alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = data.title + (data.category ? ' — ' + data.category : '');
    }
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    galleryState.isLightboxOpen = false;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNextImage() {
    if (!currentLightboxEventData.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxEventData.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    if (!currentLightboxEventData.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxEventData.length) % currentLightboxEventData.length;
    updateLightboxContent();
  }

  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext && lightboxNext.addEventListener('click', function (e) {
    e.stopPropagation();
    showNextImage();
  });
  lightboxPrev && lightboxPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    showPrevImage();
  });

  lightboxModal && lightboxModal.addEventListener('click', function (e) {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', function (e) {
    if (!galleryState.isLightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });

  // 7. ENQUIRY FORM CLIENT-SIDE VALIDATION & FEEDBACK
  var enquiryForm = document.getElementById('bouncyEnquiryForm');
  var formSubmitBtn = document.getElementById('formSubmitBtn');
  var formStatusMsg = document.getElementById('formStatusMsg');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var parentName = (document.getElementById('parentName') || {}).value || '';
      var childName = (document.getElementById('childName') || {}).value || '';
      var childAge = (document.getElementById('childAge') || {}).value || '';
      var phoneNum = (document.getElementById('phoneNum') || {}).value || '';
      var emailAddr = (document.getElementById('emailAddr') || {}).value || '';
      var interestedProgram = (document.getElementById('enquiryProgram') || {}).value || '';
      var preferredMethod = (document.getElementById('preferredMethod') || {}).value || 'Phone';
      var messageText = (document.getElementById('parentMessage') || {}).value || '';

      // Validation
      if (!parentName.trim() || !phoneNum.trim()) {
        if (formStatusMsg) {
          formStatusMsg.className = 'form-status-msg error';
          formStatusMsg.textContent = 'Please fill in both your Parent Name and Contact Phone Number.';
        }
        return;
      }

      // UI Loading state
      if (formSubmitBtn) {
        formSubmitBtn.disabled = true;
        var btnText = formSubmitBtn.querySelector('span');
        if (btnText) btnText.textContent = 'Submitting Enquiry...';
      }

      // Simulated clean network transmission
      setTimeout(function () {
        if (formSubmitBtn) {
          formSubmitBtn.disabled = false;
          var btnText = formSubmitBtn.querySelector('span');
          if (btnText) btnText.textContent = 'Send Enquiry';
        }

        if (formStatusMsg) {
          formStatusMsg.className = 'form-status-msg success';
          formStatusMsg.innerHTML = 
            '<strong>✓ Thank you, ' + escapeHtml(parentName) + '!</strong> Your enquiry for ' + 
            (childName ? escapeHtml(childName) + ' ' : '') + 'has been received. ' +
            'Our team at Bouncy Bears will reach out to you via ' + escapeHtml(preferredMethod) + ' shortly.<br>' +
            '<a href="' + config.getWhatsAppUrl('Hi Bouncy Bears, I just submitted an enquiry for ' + (interestedProgram || 'your programs') + ' for child ' + (childName || 'my child') + '.') + '" target="_blank" rel="noopener noreferrer" style="color:#065F46; font-weight:700; text-decoration:underline; display:inline-block; margin-top:6px;">Or click here to connect immediately on WhatsApp &rarr;</a>';
        }

        enquiryForm.reset();
      }, 1200);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // 8. SCROLL FADE-UP ANIMATIONS (IntersectionObserver)
  var fadeElements = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  // 9. DAY / NIGHT THEME SWITCHER (Blossom Bud Purple Dark Theme)
  var themeToggleBtns = document.querySelectorAll('#themeToggle, #drawerThemeToggle');

  function getStoredTheme() {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function setTheme(theme, triggerTransition) {
    if (triggerTransition) {
      document.documentElement.classList.add('theme-transitioning');
    }

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('theme', 'dark'); } catch (e) {}
      var metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#0D0A1A');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      try { localStorage.setItem('theme', 'light'); } catch (e) {}
      var metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#B45309');
    }

    themeToggleBtns.forEach(function (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to Day theme' : 'Switch to Night theme');
      btn.setAttribute('title', isDark ? 'Switch to Day theme' : 'Switch to Night theme');
    });

    if (triggerTransition) {
      setTimeout(function () {
        document.documentElement.classList.remove('theme-transitioning');
      }, 350);
    }
  }

  themeToggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
    });
  });

  // Sync initial state
  setTheme(getStoredTheme(), false);

  // 14. HORIZONTAL CAROUSEL LOGIC
  document.querySelectorAll('.carousel-wrapper').forEach(function(wrapper) {
    var track = wrapper.querySelector('.carousel-track-container');
    var trackInner = track.querySelector('.carousel-track');
    var prevBtn = wrapper.querySelector('.carousel-btn.prev');
    var nextBtn = wrapper.querySelector('.carousel-btn.next');
    var paginationContainer = wrapper.parentElement.querySelector('.carousel-pagination');
    var items = trackInner.querySelectorAll('.carousel-item');
    
    if (!track || items.length === 0) return;

    var isInfiniteMarquee = wrapper.classList.contains('highlights-carousel') || wrapper.classList.contains('learning-carousel');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      isInfiniteMarquee = false; // Disable continuous scroll for accessibility
    }

    if (isInfiniteMarquee) {
      // ----------------------------------------------------
      // TRUE SEAMLESS INFINITE MARQUEE (Highlights Carousel)
      // ----------------------------------------------------
      if (paginationContainer) {
        paginationContainer.style.display = 'none'; // Hide pagination
      }

      var originalItems = Array.from(items);
      
      // Hide native scrollbar and disable native scrolling for flawless marquee
      track.style.overflow = 'hidden';
      
      // Wrap original items in a group
      var group1 = document.createElement('div');
      group1.className = 'marquee-group';
      group1.style.display = 'flex';
      group1.style.gap = window.getComputedStyle(trackInner).gap || '1.5rem';
      group1.style.flexShrink = '0';
      group1.style.alignItems = 'stretch';
      
      originalItems.forEach(function(item) {
        group1.appendChild(item);
      });
      trackInner.appendChild(group1);
      
      // Clone the group twice
      var group2 = group1.cloneNode(true);
      group2.setAttribute('aria-hidden', 'true');
      trackInner.appendChild(group2);

      var group3 = group1.cloneNode(true);
      group3.setAttribute('aria-hidden', 'true');
      trackInner.appendChild(group3);

      var isPaused = false;
      var isTransitioning = false;
      var speedPerMs = 0.05; // Constant speed (~50px per second, ~30s per loop)
      var currentX = 0;
      var animationFrameId;
      var interactionTimeout;
      var lastTime = performance.now();
      
      // Touch/Drag logic
      var isDragging = false;
      var startX = 0;
      var lastDragX = 0;

      function getSetWidth() {
        var setWidth = group1.getBoundingClientRect().width;
        var gap = parseFloat(window.getComputedStyle(trackInner).gap) || 0;
        return setWidth + gap;
      }

      function loop(currentTime) {
        var dt = currentTime - lastTime;
        lastTime = currentTime;
        if (dt > 100) dt = 16; // Prevent jump after inactive tab

        var totalSetWidth = getSetWidth();
        if (totalSetWidth > 0 && !isPaused && !isDragging && !isTransitioning) {
          currentX -= speedPerMs * dt;
          
          if (Math.abs(currentX) >= totalSetWidth) {
            currentX += totalSetWidth;
          } else if (currentX > 0) {
            currentX -= totalSetWidth;
          }
          
          trackInner.style.transform = 'translate3d(' + currentX + 'px, 0, 0)';
        }
        animationFrameId = window.requestAnimationFrame(loop);
      }

      animationFrameId = window.requestAnimationFrame(loop);

      function pauseScroll() {
        isPaused = true;
        clearTimeout(interactionTimeout);
      }

      function resumeScroll() {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(function() {
          isPaused = false;
        }, 2000);
      }

      // Hover
      wrapper.addEventListener('mouseenter', pauseScroll);
      wrapper.addEventListener('mouseleave', resumeScroll);

      // Touch / Swipe
      track.addEventListener('touchstart', function(e) {
        isDragging = true;
        pauseScroll();
        startX = e.touches[0].clientX;
        lastDragX = currentX;
      }, { passive: true });

      track.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        var dx = e.touches[0].clientX - startX;
        currentX = lastDragX + dx;
        
        var totalSetWidth = getSetWidth();
        if (currentX > 0) {
           currentX -= totalSetWidth;
           lastDragX -= totalSetWidth;
        } else if (Math.abs(currentX) >= totalSetWidth) {
           currentX += totalSetWidth;
           lastDragX += totalSetWidth;
        }
        
        trackInner.style.transform = 'translate3d(' + currentX + 'px, 0, 0)';
      }, { passive: true });

      track.addEventListener('touchend', function() {
        isDragging = false;
        resumeScroll();
      }, { passive: true });

      // Mouse Drag
      track.addEventListener('mousedown', function(e) {
        isDragging = true;
        pauseScroll();
        startX = e.clientX;
        lastDragX = currentX;
        track.style.cursor = 'grabbing';
      });
      
      window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        var dx = e.clientX - startX;
        currentX = lastDragX + dx;
        
        var totalSetWidth = getSetWidth();
        if (currentX > 0) {
           currentX -= totalSetWidth;
           lastDragX -= totalSetWidth;
        } else if (Math.abs(currentX) >= totalSetWidth) {
           currentX += totalSetWidth;
           lastDragX += totalSetWidth;
        }
        
        trackInner.style.transform = 'translate3d(' + currentX + 'px, 0, 0)';
      });
      
      window.addEventListener('mouseup', function() {
        if (isDragging) {
          isDragging = false;
          track.style.cursor = '';
          resumeScroll();
        }
      });

      // Buttons manually scroll
      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          pauseScroll();
          isTransitioning = true;
          var itemWidth = originalItems[0].getBoundingClientRect().width + (parseFloat(window.getComputedStyle(group1).gap) || 0);
          currentX += itemWidth;
          
          var totalSetWidth = getSetWidth();
          if (currentX > 0) currentX -= totalSetWidth;
          
          trackInner.style.transition = 'transform 0.3s ease-out';
          trackInner.style.transform = 'translate3d(' + currentX + 'px, 0, 0)';
          
          setTimeout(function() {
            trackInner.style.transition = 'none';
            isTransitioning = false;
            resumeScroll();
          }, 300);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          pauseScroll();
          isTransitioning = true;
          var itemWidth = originalItems[0].getBoundingClientRect().width + (parseFloat(window.getComputedStyle(group1).gap) || 0);
          currentX -= itemWidth;
          
          var totalSetWidth = getSetWidth();
          if (Math.abs(currentX) >= totalSetWidth) currentX += totalSetWidth;
          
          trackInner.style.transition = 'transform 0.3s ease-out';
          trackInner.style.transform = 'translate3d(' + currentX + 'px, 0, 0)';
          
          setTimeout(function() {
            trackInner.style.transition = 'none';
            isTransitioning = false;
            resumeScroll();
          }, 300);
        });
      }

    } else {
      // ----------------------------------------------------
      // NORMAL DISCRETE CAROUSEL (Learning/Bento Carousel)
      // ----------------------------------------------------
      var dots = [];
      if (paginationContainer) {
        items.forEach(function(_, i) {
          var dot = document.createElement('button');
          dot.className = 'carousel-dot';
          if (i === 0) dot.classList.add('active');
          dot.setAttribute('aria-label', 'Go to item ' + (i + 1));
          dot.addEventListener('click', function() {
            var scrollPos = items[i].offsetLeft - track.offsetLeft;
            track.scrollTo({ left: scrollPos, behavior: 'smooth' });
          });
          paginationContainer.appendChild(dot);
          dots.push(dot);
        });
      }

      function updateCarouselState() {
        var maxScrollLeft = track.scrollWidth - track.clientWidth;
        if (prevBtn) prevBtn.disabled = track.scrollLeft <= 0;
        if (nextBtn) nextBtn.disabled = Math.ceil(track.scrollLeft) >= maxScrollLeft - 1;

        var centerPos = track.scrollLeft + (track.clientWidth / 2);
        var activeIndex = 0;
        var minDiff = Infinity;
        
        items.forEach(function(item, index) {
          var itemCenter = (item.offsetLeft - track.offsetLeft) + (item.offsetWidth / 2);
          var diff = Math.abs(itemCenter - centerPos);
          if (diff < minDiff) {
            minDiff = diff;
            activeIndex = index;
          }
        });
        
        dots.forEach(function(dot, index) {
          if (index === activeIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          var itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0].parentElement).gap || '0');
          track.scrollBy({ left: -itemWidth * 2, behavior: 'smooth' });
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          var itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0].parentElement).gap || '0');
          track.scrollBy({ left: itemWidth * 2, behavior: 'smooth' });
        });
      }

      track.addEventListener('scroll', function() {
        window.requestAnimationFrame(updateCarouselState);
      });

      // Auto-Scroll (Discrete loop for secondary carousels)
      var autoScrollTimer;
      function startDiscreteAutoScroll() {
        autoScrollTimer = setInterval(function() {
          if (!track || items.length === 0) return;
          var maxScrollLeft = track.scrollWidth - track.clientWidth;
          var itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0].parentElement).gap || '0');
          
          if (Math.ceil(track.scrollLeft) >= maxScrollLeft - 1) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            track.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }, 3000);
      }

      function stopDiscreteAutoScroll() {
        clearInterval(autoScrollTimer);
      }

      startDiscreteAutoScroll();
      wrapper.addEventListener('mouseenter', stopDiscreteAutoScroll);
      wrapper.addEventListener('mouseleave', startDiscreteAutoScroll);
      wrapper.addEventListener('touchstart', stopDiscreteAutoScroll, { passive: true });
      wrapper.addEventListener('touchend', startDiscreteAutoScroll, { passive: true });

      window.addEventListener('resize', updateCarouselState);
      setTimeout(updateCarouselState, 100);
    }
  });

});
