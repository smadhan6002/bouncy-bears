/**
 * BETHEL SCHOOL — BILINGUAL TRANSLATION SYSTEM
 * Supports: English (en) | Tamil (ta)
 * Architecture: data-i18n attribute-driven, localStorage persisted, zero page-reload
 * To add a new language: add a new key at the top level matching the lang code,
 * then mirror all keys from the 'en' block.
 */

window.BETHEL_I18N = {

  /* ============================= ENGLISH ============================= */
  en: {
    /* ── Loader ─────────────────────────── */
    "loader-text": "Arise &amp; Shine",

    /* ── Header / Desktop Nav ─────────────── */
    "logo-subtitle": "Nursery &amp; Primary School",
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-founder": "Founder",
    "nav-facilities": "Facilities",
    "nav-gallery": "Gallery",
    "nav-admissions": "Admissions",
    "nav-contact": "Contact",
    "btn-apply": "Apply 2025–26",
    "lang-btn-label": "Language",

    /* ── Mobile Drawer ───────────────────── */
    "drawer-home": "Home",
    "drawer-about": "About Us",
    "drawer-founder": "Founder Legacy",
    "drawer-facilities": "Facilities",
    "drawer-gallery": "Interactive Gallery",
    "drawer-admissions": "Admissions 2025",
    "drawer-contact": "Contact Us",
    "drawer-motto": "\u201cArise and Shine\u201d",

    /* ── Hero Section ────────────────────── */
    "hero-badge": "ESTABLISHED 1993",
    "hero-title-line1": "Where Young Minds",
    "hero-title-line2": "Arise and Shine",
    "hero-subtext": "A premium educational haven combining institutional discipline, safety, and heartfelt care. Empanelled State Board English Medium school guiding Pre-KG to 5th Standard since 1993.",
    "hero-btn-admissions": "Admissions Open",
    "hero-btn-whatsapp": "WhatsApp Inquiry",
    "card-years-title": "Years of Excellence",
    "card-years-sub": "Guiding generations since 1993",
    "card-safe-title": "100% Safe Campus",
    "card-safe-sub": "Continuous parental reassurance",
    "card-location-title": "Prime Arakkonam Area",
    "card-location-sub": "Near SR Gate",

    /* ── Trust Strip Ticker ──────────────── */
    "ticker-1": "ESTABLISHED IN 1993",
    "ticker-2": "STATE BOARD ENGLISH MEDIUM",
    "ticker-3": "100% CCTV SECURED CAMPUS",
    "ticker-4": "HIGHLY TRAINED CARING FACULTY",
    "ticker-5": "ACTIVITY-BASED EXPERIENTIAL LEARNING",
    "ticker-6": "PRE-KG TO 5TH STANDARD EXCELLENCE",

    /* ── About Section ───────────────────── */
    "about-label": "WHO WE ARE",
    "about-title": "Nurturing Safe, Creative &amp; Disciplined Foundations",
    "about-para1": "As parents, selecting the first school for your child is a profound choice of heart and trust. Bethel Nursery and Primary School provides an environment where safety is paramount, discipline is loving, and learning is an inspiring adventure.",
    "about-para2": "Established in 1993, we are structured around the State Board curriculum, blended with highly tactile, activity-focused learning methodologies. Elizabeth Joshua leads a handpicked team of warm, motherly educators dedicated to guiding your child from early Pre-KG play to confident 5th Standard graduation.",
    "about-badge-sub": "Years Nurturing",
    "value1-title": "Safety-First Focus",
    "value1-desc": "Comprehensive campus CCTV, locked entry gates, and dedicated female attendants.",
    "value2-title": "Nurturing Mentorship",
    "value2-desc": "Low student-to-teacher ratios that guarantee individual emotional and academic attention.",
    "value3-title": "Rooted in Integrity",
    "value3-desc": "Core emphasis on discipline, modern moral values, and social responsibility.",
    "about-cta": "Discover School Life",

    /* ── Founder Section ─────────────────── */
    "founder-label": "IN MEMORIAM",
    "founder-quote": "\u201cEvery child enters this campus<br>carries a dream worth nurturing.\u201d",
    "founder-sig": "\u2014 Joshua Williams.J",
    "founder-para1": "Founded on the principle of selflessly educating local communities, Joshua Williams.J",
    "founder-para2": "His philosophy centered on the conviction that a child\u2019s early educational steps shape their global destiny. Today, his wife Elizabeth Joshua and our dedicated staff carry forward this sacred torch of premium, empathetic, and disciplined learning.",
    "founder-crest": "ALWAYS IN OUR HEARTS",

    /* ── Facilities Section ──────────────── */
    "facilities-label": "CAMPUS LIFE",
    "facilities-title": "Designed for Safe &amp; Stimulating Growth",
    "facilities-subtitle": "Every classroom, corridor, and play zone is tailored specifically to provide security and structured exploration for Pre-KG to 5th Standard children.",
    "facility1-title": "Smart Classrooms",
    "facility1-desc": "Airy, climate-balanced spaces featuring digital display units and multi-sensory teaching tools that make abstract facts instantly memorable.",
    "facility2-title": "100% Secure Environment",
    "facility2-desc": "Restricted main entrance gates, integrated HD security cams across all sections, and dedicated attendants monitoring play areas.",
    "facility3-title": "Motherly Caring Faculty",
    "facility3-desc": "Our educators are carefully selected for their patience and emotional training, serving as gentle, supportive second mothers on campus.",
    "facility4-title": "Child Mind Development",
    "facility4-desc": "Special mental checkups, focus mapping games, emotional resilience building, and language milestone assessments.",
    "facility5-title": "Vibrant Play Area",
    "facility5-desc": "Fully padded indoor soft play stations and a highly secure outer courtyard equipped with secure slides, swings, and sensory pathways.",
    "facility6-title": "Interactive Activities",
    "facility6-desc": "Phonics modules, clay sculpting, origami modeling, group recitation circles, spelling bees, and foundational computational logic drills.",

    /* ── Gallery Section ─────────────────── */
    "gallery-label": "MOMENTS OF JOY",
    "gallery-title": "A Window into Bethel Student Life",
    "gallery-subtitle": "Discover our vibrant school life through beautiful moments. Click any photo to view it in full screen. Swipe left or right on mobile to navigate.",
    "gallery-hint": "&#128065; Click any image to view in fullscreen &nbsp;|&nbsp; &#9654; Hover to pause scrolling",

    /* ── Admissions Section ──────────────── */
    "admissions-badge": "REGISTRATION NOW OPEN",
    "admissions-title": "Admissions Open for Academic Year 2025\u201326",
    "admissions-subtitle": "Give your child a high-end foundation rooted in deep structural discipline, parental care, and rich cognitive growth. Limited seats available in Pre-KG to 5th Standard batches.",
    "step1-num": "01",
    "step1-title": "Submit Inquiry",
    "step1-desc": "Call Elizabeth Joshua or message our desk on WhatsApp.",
    "step2-num": "02",
    "step2-title": "Visit Campus",
    "step2-desc": "Tour smart sections, play areas and review CCTV modules.",
    "step3-num": "03",
    "step3-title": "Seat Reservation",
    "step3-desc": "Finalize early documents, interactive review, secure admission.",
    "admissions-btn-apply": "Apply Now",
    "admissions-btn-wa": "WhatsApp",

    /* ── Contact Section ─────────────────── */
    "contact-label": "GET IN TOUCH",
    "contact-title": "We Are Here to Listen and Care",
    "contact-desc": "Choosing a school is the beginning of a mutual partnership. Visit us in Arakkonam during office hours, call Elizabeth Joshua directly, or send us a quick digital note.",
    "contact-address-title": "School Address",
    "contact-address-val": "27, Bajanai Kovil Street,<br>Griblespet,<br>Arakkonam \u2013 631002",
    "contact-phone-title": "Call Us",
    "contact-email-title": "Email Address",
    "contact-hours-title": "Working Hours",
    "contact-hours-val": "9:00 AM \u2013 5:00 PM (Monday \u2013 Saturday)",
    "brochure-label": "DOWNLOAD BROCHURE",
    "brochure-sub": "PDF Prospectus &amp; Admission Sheet (1.2 MB)",

    /* ── Footer ──────────────────────────── */
    "footer-motto": "\u201cArise and Shine\u201d",
    "footer-summary": "Guiding early childhood development and academic baselines through discipline, safety, and a highly nurturing, home-like English medium infrastructure in Arakkonam since 1993.",
    "footer-nav-title": "Quick Navigation",
    "footer-nav-home": "Home Base",
    "footer-nav-about": "Our Identity &amp; Mission",
    "footer-nav-founder": "Founder\u2019s Vision",
    "footer-nav-facilities": "Campus Infrastructure",
    "footer-nav-gallery": "Interactive Gallery",
    "footer-nav-admissions": "Registration 2025",
    "footer-nav-contact": "Get in Touch",
    "footer-details-title": "Academic Details",
    "footer-motto-item": "<strong>Motto:</strong> \u201cArise and Shine\u201d",
    "footer-estd-item": "<strong>Estd Year:</strong> 1993",
    "footer-affil-item": "<strong>Affiliation:</strong> State Board English Medium",
    "footer-scope-item": "<strong>Class Scope:</strong> Pre-KG to 5th Standard",
    "footer-head-item": "<strong>Managing Head:</strong> Elizabeth Joshua",
    "footer-founder-item": "<strong>Founder:</strong> Joshua Williams.J",
    "footer-contact-title": "Principal\u2019s Desk Contact",
    "footer-call-label": "Call (9:00 AM \u2013 5:00 PM):",
    "footer-wa-label": "WhatsApp Helpline:",
    "footer-mail-label": "Mailbox:",
    "footer-open-label": "Open Days:",
    "footer-open-val": "Monday \u2013 Saturday",
    "footer-copyright": "\u00a9 2026 Bethel Nursery and Primary School. All rights reserved. Managed with care by Elizabeth Joshua.",
    "footer-tribute": "In loving memory of Founder Joshua Williams.J (1959\u20132022)",
    "footer-trust": "\u201cEducational Charitable Trust\u201d",
  },

  /* ============================= TAMIL ============================= */
  ta: {
    /* ── Loader ─────────────────────────── */
    "loader-text": "எழு &amp; ஒளி பெறு",

    /* ── Header / Desktop Nav ─────────────── */
    "logo-subtitle": "நர்சரி &amp; தொடக்கப்பள்ளி",
    "nav-home": "முகப்பு",
    "nav-about": "எங்களை பற்றி",
    "nav-founder": "நிறுவனர்",
    "nav-facilities": "வசதிகள்",
    "nav-gallery": "தொகுப்பகம்",
    "nav-admissions": "சேர்க்கை",
    "nav-contact": "தொடர்பு",
    "btn-apply": "விண்ணப்பி 2025–26",
    "lang-btn-label": "மொழி",

    /* ── Mobile Drawer ───────────────────── */
    "drawer-home": "முகப்பு",
    "drawer-about": "எங்களை பற்றி",
    "drawer-founder": "நிறுவனர் மரபு",
    "drawer-facilities": "வசதிகள்",
    "drawer-gallery": "படத் தொகுப்பு",
    "drawer-admissions": "சேர்க்கை 2025",
    "drawer-contact": "தொடர்பு கொள்ளுங்கள்",
    "drawer-motto": "\u201cஎழு மற்றும் ஒளிர்\u201d",

    /* ── Hero Section ────────────────────── */
    "hero-badge": "1993 இல் நிறுவப்பட்டது",
    "hero-title-line1": "இளம் மனங்கள்",
    "hero-title-line2": "எழுகின்றன, ஒளிர்கின்றன",
    "hero-subtext": "ஒழுக்கம், பாதுகாப்பு மற்றும் அன்பான அரவணைப்பை இணைத்த சிறந்த கல்வி இல்லம். 1993 முதல் முன்-கே.ஜி முதல் 5-ஆம் வகுப்பு வரை வழிநடத்தும் மாநில வாரிய ஆங்கில வழிப் பள்ளி.",
    "hero-btn-admissions": "சேர்க்கை திறக்கப்பட்டுள்ளது",
    "hero-btn-whatsapp": "வாட்ஸ்அப் விசாரணை",
    "card-years-title": "சிறப்பான ஆண்டுகள்",
    "card-years-sub": "1993 முதல் தலைமுறைகளை வழிநடத்துகிறோம்",
    "card-safe-title": "100% பாதுகாப்பான வளாகம்",
    "card-safe-sub": "தொடர்ச்சியான பெற்றோர் உறுதிப்பாடு",
    "card-location-title": "அரக்கோணம் சிறந்த இடம்",
    "card-location-sub": "SR வாயிலுக்கு அருகில்",

    /* ── Trust Strip Ticker ──────────────── */
    "ticker-1": "1993 இல் நிறுவப்பட்டது",
    "ticker-2": "மாநில வாரிய ஆங்கில வழிப் பள்ளி",
    "ticker-3": "100% CCTV பாதுகாப்பான வளாகம்",
    "ticker-4": "திறமையான அன்பான ஆசிரியர்கள்",
    "ticker-5": "செயல்பாட்டு அனுபவ கல்வி",
    "ticker-6": "முன்-கே.ஜி முதல் 5-ஆம் வகுப்பு சிறப்பு",

    /* ── About Section ───────────────────── */
    "about-label": "நாங்கள் யார்",
    "about-title": "பாதுகாப்பான, படைப்பாற்றல் மிக்க &amp; ஒழுக்கமான அடித்தளங்களை வளர்க்கிறோம்",
    "about-para1": "பெற்றோர்களாக, உங்கள் குழந்தைக்கு முதல் பள்ளியை தேர்வு செய்வது இதயம் மற்றும் நம்பிக்கையின் ஆழமான தேர்வு. பெத்தேல் நர்சரி மற்றும் தொடக்கப்பள்ளி பாதுகாப்பு முதன்மையான, அன்பான ஒழுக்கம் மற்றும் கல்வி ஒரு ஊக்கமளிக்கும் சாகசமாக இருக்கும் சூழலை வழங்குகிறது.",
    "about-para2": "1993 இல் நிறுவப்பட்டு, நாங்கள் மாநில வாரிய பாடத்திட்டத்தை மையமாகக் கொண்டு, அதிக செயல்பாட்டு, செயல்-சார் கற்றல் முறைகளை இணைத்துள்ளோம். எலிசபெத் ஜோஷுவா தலைமையில் அன்பான, தாய்மையான ஆசிரியர்கள் குழு உங்கள் குழந்தையை முன்-கே.ஜி விளையாட்டிலிருந்து 5-ஆம் வகுப்பு தேர்ச்சி வரை வழிநடத்துகிறது.",
    "about-badge-sub": "ஆண்டுகள் அரவணைப்பு",
    "value1-title": "பாதுகாப்பு முதல் கவனம்",
    "value1-desc": "முழுமையான வளாக CCTV, பூட்டிய நுழைவு வாயில்கள் மற்றும் அர்ப்பணிப்பான பெண் உதவியாளர்கள்.",
    "value2-title": "அன்பான வழிகாட்டுதல்",
    "value2-desc": "தனிப்பட்ட உணர்வு மற்றும் கல்வி கவனத்தை உறுதிசெய்யும் குறைந்த மாணவர்-ஆசிரியர் விகிதம்.",
    "value3-title": "நேர்மையில் வேரூன்றியது",
    "value3-desc": "ஒழுக்கம், நவீன தார்மீக மதிப்புகள் மற்றும் சமூக பொறுப்பில் முக்கிய வலியுறுத்தல்.",
    "about-cta": "பள்ளி வாழ்க்கையை கண்டறியுங்கள்",

    /* ── Founder Section ─────────────────── */
    "founder-label": "நினைவில்",
    "founder-quote": "\u201cஒவ்வொரு குழந்தையும் இந்த வளாகத்தில் நுழைகிறது<br>வளர்க்கப்படவேண்டிய கனவை சுமக்கிறது.\u201d",
    "founder-sig": "\u2014 ஜோஷுவா வில்லியம்ஸ்.ஜே",
    "founder-para1": "உள்ளூர் சமூகங்களுக்கு அர்ப்பணிப்புடன் கல்வி கற்பிக்கும் கொள்கையில் நிறுவப்பட்டது, ஜோஷுவா வில்லியம்ஸ்.ஜே",
    "founder-para2": "ஒரு குழந்தையின் ஆரம்பகால கல்வி படிகள் அவர்களின் உலக விதியை வடிவமைக்கும் என்ற நம்பிக்கையில் அவரது தத்துவம் மையம் கொண்டது. இன்று, அவரது மனைவி எலிசபெத் ஜோஷுவா மற்றும் எங்கள் அர்ப்பணிப்பான ஊழியர்கள் சிறந்த, அனுதாப மிக்க மற்றும் ஒழுக்கமான கல்வியின் இந்த புனித தீவட்டியை மேலும் கொண்டு செல்கிறார்கள்.",
    "founder-crest": "எங்கள் இதயங்களில் என்றும் நிலைத்திருப்பீர்",

    /* ── Facilities Section ──────────────── */
    "facilities-label": "வளாக வாழ்க்கை",
    "facilities-title": "பாதுகாப்பான &amp; தூண்டுதலான வளர்ச்சிக்காக வடிவமைக்கப்பட்டது",
    "facilities-subtitle": "ஒவ்வொரு வகுப்பறை, தாழ்வாரம் மற்றும் விளையாட்டு மண்டலம் முன்-கே.ஜி முதல் 5-ஆம் வகுப்பு குழந்தைகளுக்கு பாதுகாப்பு மற்றும் கட்டமைக்கப்பட்ட ஆய்வை வழங்க குறிப்பாக வடிவமைக்கப்பட்டுள்ளது.",
    "facility1-title": "ஸ்மார்ட் வகுப்பறைகள்",
    "facility1-desc": "டிஜிட்டல் காட்சி அலகுகள் மற்றும் பல-உணர்வு கற்பித்தல் கருவிகளைக் கொண்ட காற்றோட்டமான, காலநிலை-சமநிலை இடங்கள் சுருக்கமான உண்மைகளை உடனடியாக நினைவில் வைக்கச் செய்கின்றன.",
    "facility2-title": "100% பாதுகாப்பான சூழல்",
    "facility2-desc": "கட்டுப்படுத்தப்பட்ட முதன்மை நுழைவு வாயில்கள், அனைத்து பிரிவுகளிலும் HD பாதுகாப்பு கேமராக்கள் மற்றும் விளையாட்டு மண்டலங்களை கண்காணிக்கும் அர்ப்பணிப்பான உதவியாளர்கள்.",
    "facility3-title": "தாய்மையான அக்கறையுள்ள ஆசிரியர்கள்",
    "facility3-desc": "எங்கள் ஆசிரியர்கள் பொறுமை மற்றும் உணர்வு பயிற்சிக்காக கவனமாக தேர்ந்தெடுக்கப்பட்டவர்கள், வளாகத்தில் மென்மையான, ஆதரவான இரண்டாம் தாய்களாக பணியாற்றுகிறார்கள்.",
    "facility4-title": "குழந்தை மன வளர்ச்சி",
    "facility4-desc": "சிறப்பு மன சோதனைகள், கவன வரைபட விளையாட்டுகள், உணர்வு விடாமுயற்சி வளர்ப்பு மற்றும் மொழி மைல்கல் மதிப்பீடுகள்.",
    "facility5-title": "துடிப்பான விளையாட்டு மண்டலம்",
    "facility5-desc": "முழுமையாக மெத்தையிடப்பட்ட உட்புற மென் விளையாட்டு நிலையங்கள் மற்றும் பாதுகாப்பான சறுக்கல் தண்டுகள், ஊஞ்சல்கள் மற்றும் உணர்வு பாதைகளுடன் கூடிய மிகவும் பாதுகாப்பான வெளி முற்றம்.",
    "facility6-title": "ஊடாடும் செயல்பாடுகள்",
    "facility6-desc": "ஒலியியல் தொகுதிகள், களிமண் சிற்பம், ஒரிகாமி மாதிரி, குழு பாராயண வட்டங்கள், எழுத்துப் போட்டிகள் மற்றும் அடிப்படை கணக்கீட்டு தர்க்க பயிற்சிகள்.",

    /* ── Gallery Section ─────────────────── */
    "gallery-label": "மகிழ்ச்சியின் தருணங்கள்",
    "gallery-title": "பெத்தேல் மாணவர் வாழ்க்கையின் ஒரு பார்வை",
    "gallery-subtitle": "அழகான தருணங்கள் வழியாக எங்கள் துடிப்பான பள்ளி வாழ்க்கையை கண்டறியுங்கள். முழு திரையில் பார்க்க எந்த புகைப்படத்தையும் கிளிக் செய்யுங்கள். மொபைலில் வலது அல்லது இடதுக்கு ஸ்வைப் செய்யுங்கள்.",
    "gallery-hint": "&#128065; முழு திரையில் பார்க்க படத்தை கிளிக் செய்யுங்கள் &nbsp;|&nbsp; &#9654; நிறுத்த மவுஸை வையுங்கள்",

    /* ── Admissions Section ──────────────── */
    "admissions-badge": "பதிவு இப்போது திறந்துள்ளது",
    "admissions-title": "கல்வியாண்டு 2025\u201326க்கான சேர்க்கை திறக்கப்பட்டுள்ளது",
    "admissions-subtitle": "ஆழமான கட்டமைப்பு ஒழுக்கம், பெற்றோர் அரவணைப்பு மற்றும் செழுமையான அறிவாற்றல் வளர்ச்சியில் வேரூன்றிய உயர்தர அடித்தளத்தை உங்கள் குழந்தைக்கு வழங்குங்கள். முன்-கே.ஜி முதல் 5-ஆம் வகுப்பு வரை குறைந்த இடங்கள் மட்டுமே உள்ளன.",
    "step1-num": "01",
    "step1-title": "விசாரணை சமர்ப்பிக்கவும்",
    "step1-desc": "எலிசபெத் ஜோஷுவாவை அழைக்கவும் அல்லது வாட்ஸ்அப்பில் எங்கள் மேசைக்கு செய்தி அனுப்பவும்.",
    "step2-num": "02",
    "step2-title": "வளாகம் பார்வையிடவும்",
    "step2-desc": "ஸ்மார்ட் பிரிவுகள், விளையாட்டு மண்டலங்கள் சுற்றுலா மற்றும் CCTV தொகுதிகள் மதிப்பாய்வு செய்யவும்.",
    "step3-num": "03",
    "step3-title": "இட முன்பதிவு",
    "step3-desc": "ஆரம்ப ஆவணங்களை இறுதி செய்யவும், ஊடாடும் மதிப்பாய்வு, பாதுகாப்பான சேர்க்கை.",
    "admissions-btn-apply": "இப்போது விண்ணப்பிக்கவும்",
    "admissions-btn-wa": "வாட்ஸ்அப்",

    /* ── Contact Section ─────────────────── */
    "contact-label": "தொடர்பு கொள்ளுங்கள்",
    "contact-title": "நாங்கள் கேட்கவும் அக்கறை கொள்ளவும் இங்கே இருக்கிறோம்",
    "contact-desc": "பள்ளியை தேர்வு செய்வது ஒரு பரஸ்பர கூட்டாண்மையின் தொடக்கம். அலுவல் நேரத்தில் அரக்கோணத்தில் எங்களை பார்வையிடுங்கள், எலிசபெத் ஜோஷுவாவை நேரடியாக அழைக்கவும் அல்லது எங்களுக்கு ஒரு விரைவான டிஜிட்டல் குறிப்பு அனுப்பவும்.",
    "contact-address-title": "பள்ளி முகவரி",
    "contact-address-val": "27, பஜனை கோவில் தெரு,<br>கிரிப்பிள்ஸ்பெட்,<br>அரக்கோணம் \u2013 631002",
    "contact-phone-title": "எங்களை அழையுங்கள்",
    "contact-email-title": "மின்னஞ்சல் முகவரி",
    "contact-hours-title": "வேலை நேரம்",
    "contact-hours-val": "காலை 9:00 \u2013 மாலை 5:00 (திங்கள் \u2013 சனி)",
    "brochure-label": "சிற்றேடு பதிவிறக்கவும்",
    "brochure-sub": "PDF முன்னோட்டம் &amp; சேர்க்கை தாள் (1.2 MB)",

    /* ── Footer ──────────────────────────── */
    "footer-motto": "\u201cஎழு மற்றும் ஒளிர்\u201d",
    "footer-summary": "1993 முதல் அரக்கோணத்தில் ஒழுக்கம், பாதுகாப்பு மற்றும் மிகவும் அன்பான, வீடு போன்ற ஆங்கில வழி உள்கட்டமைப்பு மூலம் ஆரம்பகால குழந்தை வளர்ச்சி மற்றும் கல்வி அடிப்படைகளை வழிநடத்துகிறோம்.",
    "footer-nav-title": "விரைவு வழிசெலுத்தல்",
    "footer-nav-home": "முகப்பு",
    "footer-nav-about": "எங்கள் அடையாளம் &amp; நோக்கம்",
    "footer-nav-founder": "நிறுவனரின் தொலைநோக்கு",
    "footer-nav-facilities": "வளாக உள்கட்டமைப்பு",
    "footer-nav-gallery": "ஊடாடும் தொகுப்பகம்",
    "footer-nav-admissions": "பதிவு 2025",
    "footer-nav-contact": "தொடர்பு கொள்ளுங்கள்",
    "footer-details-title": "கல்வி விவரங்கள்",
    "footer-motto-item": "<strong>குறிக்கோள்:</strong> \u201cஎழு மற்றும் ஒளிர்\u201d",
    "footer-estd-item": "<strong>நிறுவப்பட்ட ஆண்டு:</strong> 1993",
    "footer-affil-item": "<strong>இணைப்பு:</strong> மாநில வாரிய ஆங்கில வழி",
    "footer-scope-item": "<strong>வகுப்பு நோக்கம்:</strong> முன்-கே.ஜி முதல் 5-ஆம் வகுப்பு",
    "footer-head-item": "<strong>நிர்வாக தலைவர்:</strong> எலிசபெத் ஜோஷுவா",
    "footer-founder-item": "<strong>நிறுவனர்:</strong> ஜோஷுவா வில்லியம்ஸ்.ஜே",
    "footer-contact-title": "முதல்வர் மேசை தொடர்பு",
    "footer-call-label": "அழைப்பு (காலை 9:00 \u2013 மாலை 5:00):",
    "footer-wa-label": "வாட்ஸ்அப் உதவி மேடை:",
    "footer-mail-label": "அஞ்சல் பெட்டி:",
    "footer-open-label": "திறந்த நாட்கள்:",
    "footer-open-val": "திங்கள் \u2013 சனி",
    "footer-copyright": "\u00a9 2026 பெத்தேல் நர்சரி மற்றும் தொடக்கப்பள்ளி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. எலிசபெத் ஜோஷுவா அக்கறையுடன் நிர்வகிக்கிறார்.",
    "footer-tribute": "நிறுவனர் ஜோஷுவா வில்லியம்ஸ்.ஜே (1959\u20132022) நினைவில்",
    "footer-trust": "\u201cகல்வி தொண்டு அறக்கட்டளை\u201d",
  }
};
