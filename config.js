/**
 * BOUNEY BEARS — CENTRAL CONFIGURATION DATA
 * Single source of truth for all school information, contact details,
 * business hours, programs, facilities, and gallery items.
 * 
 * Rules:
 * - Only verified client information is included.
 * - Any unconfirmed detail (like Tue-Sat hours or physical address) is explicitly noted
 *   and can be updated here without touching HTML/CSS.
 */

const BOUNEY_CONFIG = {
  schoolName: "BOUNEY BEARS",
  tagline: "Where Little Minds Learn, Play & Grow",
  subTagline: "A warm and nurturing space for children to learn, explore, build confidence and grow with care.",
  type: "Preschool · Day Care · Tuition & Children's Activity Centre",
  minAge: "2+ Years",

  // Contact Information (Strictly verified)
  contact: {
    primaryPhone: "99404 62534",
    primaryPhoneRaw: "+919940462534",
    secondaryPhone: "044 31451925",
    secondaryPhoneRaw: "+914431451925",
    email: "boneybearschildcare@gmail.com",
    whatsappNumber: "919940462534",
    whatsappDisplay: "+91 99404 62534",
    addressNotice: "Contact us for location details",
    addressStatus: "Location details available upon enquiry"
  },

  // Business Hours (Strictly verified from client form)
  businessHours: [
    { day: "Monday", time: "9:00 AM – 9:00 PM", status: "open" },
    { day: "Tuesday – Saturday", time: "Contact us for current timings", status: "flexible" },
    { day: "Sunday", time: "Closed", status: "closed" }
  ],

  // Verified Offerings & Programs
  programs: [
    {
      id: "play-school",
      title: "Play School",
      badge: "Ages 2+ Years",
      icon: "palette",
      summary: "A nurturing early-learning environment where children learn through play, interaction, creativity and exploration.",
      keyFeatures: [
        "Play-based sensory learning",
        "Fine & gross motor skill development",
        "Social interaction & emotional growth",
        "Caring, individualized attention"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about the Play School program."
    },
    {
      id: "day-care",
      title: "Day Care",
      badge: "Extended & Flexible Care",
      icon: "heart-handshake",
      summary: "A caring environment designed to support children's routines, comfort and development while parents manage their daily commitments.",
      keyFeatures: [
        "Comfortable & secure rest areas",
        "Nutritious routine & mealtime supervision",
        "Structured play & restful naptime",
        "Loving, attentive caregivers"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about your Day Care services."
    },
    {
      id: "tuition-all",
      title: "Tuition — All Subjects",
      badge: "Primary & Middle School",
      icon: "book-open",
      summary: "Academic support across all school subjects, helping students clarify concepts, complete homework, and build steady study habits.",
      keyFeatures: [
        "Concept-first guided learning",
        "Regular practice & doubt clearing",
        "Confidence in school curriculum",
        "Patient, structured guidance"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about Tuition for all subjects."
    },
    {
      id: "classical-dance",
      title: "Classical Dance",
      badge: "Ages ~3–5 Years",
      icon: "sparkles",
      summary: "Classical dance learning for young children, encouraging rhythm, posture, body coordination, and joyful artistic expression.",
      keyFeatures: [
        "Foundational rhythm and body posture",
        "Expressions, mudras and musicality",
        "Stage confidence & discipline",
        "Gentle, age-appropriate coaching"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about Classical Dance classes."
    },
    {
      id: "chess",
      title: "Chess",
      badge: "Ages ~7+ Years",
      icon: "trophy",
      summary: "Chess-based learning to encourage patience, sharp concentration, strategic thinking and logical problem-solving.",
      keyFeatures: [
        "Board awareness and piece coordination",
        "Strategic planning & tactical puzzles",
        "Patience, sportsmanship & focus",
        "Progressive challenges"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about Chess coaching."
    },
    {
      id: "phonics",
      title: "Phonics",
      badge: "Early Learners",
      icon: "volume-2",
      summary: "Foundational phonics support to help children develop early reading, letter-sound recognition, and clear pronunciation skills.",
      keyFeatures: [
        "Sound-to-letter phonetic associations",
        "Blending and segmenting practice",
        "Early vocabulary & reading fluency",
        "Interactive sound games"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about the Phonics program."
    },
    {
      id: "higher-tuition",
      title: "Higher Class Tuition",
      badge: "11th & 12th Standards",
      icon: "graduation-cap",
      summary: "Focused academic support for 11th and 12th standard students to strengthen core subjects, exam techniques, and board readiness.",
      keyFeatures: [
        "Subject-specific problem solving",
        "Board examination orientation",
        "Systematic revision sessions",
        "Individual doubt clearance"
      ],
      whatsappMsg: "Hi BOUNEY BEARS, I would like to know more about 11th & 12th Class Tuition."
    }
  ],

  // Verified Extracurricular Activities
  activities: [
    {
      name: "Classical Dance",
      age: "Approx. 3–5 Years",
      desc: "Nurturing rhythm, posture, and creative cultural expression in young children.",
      tag: "Creative Arts"
    },
    {
      name: "Chess",
      age: "Approx. 7+ Years",
      desc: "Cultivating sharp focus, strategic foresight, and disciplined thinking.",
      tag: "Cognitive Skill"
    },
    {
      name: "Phonics & Early Reading",
      age: "Early Learners",
      desc: "Building joyful confidence in reading, pronunciation, and vocabulary.",
      tag: "Language Skills"
    },
    {
      name: "Creative Activities",
      age: "All Early Ages",
      desc: "Art, hands-on craft, sensory play, and imaginative exploration.",
      tag: "Creativity"
    },
    {
      name: "Learning Through Play",
      age: "Play School & Day Care",
      desc: "Interactive games, social collaboration, and physical coordination.",
      tag: "Play & Growth"
    }
  ],

  // Verified Facilities (Checked strictly from client form)
  facilities: [
    {
      title: "Air-Conditioned Classrooms",
      desc: "Climate-controlled, clean, and comfortable spaces ensuring children stay focused and energetic throughout the day.",
      icon: "snowflake"
    },
    {
      title: "Indoor Play Area",
      desc: "A secure, padded, and engaging indoor space equipped with safe toys, activity corners, and soft play items.",
      icon: "smile"
    },
    {
      title: "Smart Classrooms",
      desc: "Interactive visual-audio tools that bring rhymes, phonics, stories, and academic lessons vibrantly to life.",
      icon: "monitor"
    },
    {
      title: "Outdoor Play Area",
      desc: "Dedicated outdoor space designed for gross motor exercises, fresh air playtime, and joyful active physical games.",
      icon: "sun"
    },
    {
      title: "CCTV Monitoring",
      desc: "Continuous premises surveillance ensuring attentive supervision, parental reassurance, and a vigilant environment.",
      icon: "shield-check"
    },
    {
      title: "Activity Room",
      desc: "A creative multipurpose studio dedicated to classical dance, chess, art, music, and collaborative workshops.",
      icon: "award"
    }
  ],

  // Gallery items (Centralized for easy future replacement)
  gallery: [
    {
      title: "Joyful Early Exploration",
      category: "Play School",
      src: "assets/gallery-class-1.jpg",
      alt: "Children engaged in joyful early childhood learning at BOUNEY BEARS"
    },
    {
      title: "Interactive Classroom Learning",
      category: "Smart Learning",
      src: "assets/gallery-class-2.jpg",
      alt: "Interactive classroom activities and attentive guidance"
    },
    {
      title: "Creative Arts & Expression",
      category: "Activities",
      src: "assets/gallery-cultural-1.jpg",
      alt: "Cultural expression and classical dance practice"
    },
    {
      title: "Active Play & Gross Motor Fun",
      category: "Play Area",
      src: "assets/gallery-sports-1.jpg",
      alt: "Outdoor active play and physical games"
    },
    {
      title: "Celebrations & Confidence",
      category: "Events",
      src: "assets/gallery-celebrations-1.jpg",
      alt: "Children celebrating achievements and group activities"
    },
    {
      title: "Cooperative Fun & Bonding",
      category: "Day Care",
      src: "assets/gallery-annual-1.jpg",
      alt: "Cooperative child activities and caring environment"
    }
  ],

  // Helper method to create WhatsApp direct links
  getWhatsAppUrl: function (customText) {
    var text = customText || "Hi BOUNEY BEARS, I would like to enquire about your programs.";
    return "https://wa.me/" + this.contact.whatsappNumber + "?text=" + encodeURIComponent(text);
  }
};

if (typeof window !== "undefined") {
  window.BOUNEY_CONFIG = BOUNEY_CONFIG;
}
