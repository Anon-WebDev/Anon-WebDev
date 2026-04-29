export type Service = {
  title: string;
  description: string;
  price: string;
  duration: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Testimonial = {
  name: string;
  rating: number;
  review: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Luma Wellness Spa",
  legalName: "Luma Wellness Spa",
  url: "https://www.lumawellnessspa.com",
  phone: "(415) 555-0184",
  email: "hello@lumawellnessspa.com",
  address: {
    street: "248 Willow Avenue",
    city: "San Mateo",
    region: "CA",
    postalCode: "94401",
    country: "US",
  },
  hours: [
    "Monday - Friday: 9:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 6:00 PM",
    "Sunday: 10:00 AM - 5:00 PM",
  ],
  hero: {
    headline: "Restore your body, refresh your skin, and reset your mind.",
    supportingCopy:
      "Experience personalized massage and skincare rituals designed to help you feel lighter, calmer, and beautifully renewed.",
    image: {
      src: "/images/spa-hero.jpg",
      alt: "Calm spa treatment room with soft lighting and neatly prepared massage table",
      width: 1200,
      height: 900,
    },
    badges: ["Licensed Estheticians", "Relaxing Atmosphere", "Personalized Care"],
  },
  services: [
    {
      title: "Swedish Massage",
      description:
        "A gentle, flowing massage to ease daily tension, improve circulation, and bring full-body relaxation.",
      price: "$110",
      duration: "60 min",
      href: "#contact",
    },
    {
      title: "Deep Tissue Massage",
      description:
        "Targeted pressure for chronic tightness, post-workout soreness, and deep muscle release.",
      price: "$135",
      duration: "60 min",
      href: "#contact",
    },
    {
      title: "Signature Facial",
      description:
        "A customized facial with cleansing, exfoliation, mask therapy, and hydration for radiant skin.",
      price: "$125",
      duration: "60 min",
      href: "#contact",
    },
    {
      title: "Hydrating Facial",
      description:
        "Restores moisture and glow with nourishing serums ideal for dry, stressed, or sensitive skin.",
      price: "$140",
      duration: "75 min",
      href: "#contact",
    },
    {
      title: "Hot Stone Therapy",
      description:
        "Warm volcanic stones and expert touch relieve muscle stiffness and melt away stress.",
      price: "$155",
      duration: "75 min",
      href: "#contact",
    },
    {
      title: "Couples Massage",
      description:
        "Share a peaceful side-by-side massage experience perfect for partners, friends, or celebrations.",
      price: "$230",
      duration: "60 min",
      href: "#contact",
    },
  ] satisfies Service[],
  about: {
    story:
      "At Luma Wellness Spa, we believe self-care is essential. Our studio was created as a serene retreat where guests can step away from stress and reconnect with themselves through thoughtful, results-driven care.",
    reasons: [
      "Experienced therapists and estheticians who personalize every treatment",
      "Premium, skin-friendly products selected for visible results",
      "A calm boutique setting designed for comfort, privacy, and renewal",
    ],
    stats: [
      { label: "Years Experience", value: "12+" },
      { label: "Happy Clients", value: "4,800+" },
      { label: "Service Options", value: "20+" },
    ],
  },
  benefits: [
    "Stress relief",
    "Skin rejuvenation",
    "Better sleep",
    "Muscle recovery",
    "Personalized treatment plans",
    "Peaceful environment",
  ],
  gallery: [
    {
      src: "/images/massage-room.jpg",
      alt: "Private massage room with warm lighting and folded towels",
      width: 900,
      height: 700,
    },
    {
      src: "/images/facial-treatment.jpg",
      alt: "Esthetician performing a facial treatment on a client",
      width: 900,
      height: 700,
    },
    {
      src: "/images/spa-products.jpg",
      alt: "Luxury skincare products displayed on wooden shelves",
      width: 900,
      height: 700,
    },
    {
      src: "/images/waiting-area.jpg",
      alt: "Modern spa waiting area with soft seating and natural decor",
      width: 900,
      height: 700,
    },
    {
      src: "/images/couples-room.jpg",
      alt: "Couples treatment room with two prepared massage tables",
      width: 900,
      height: 700,
    },
    {
      src: "/images/spa-hero.jpg",
      alt: "Spa interior detail with candles, stones, and eucalyptus",
      width: 900,
      height: 700,
    },
  ] satisfies GalleryImage[],
  testimonials: [
    {
      name: "Sophia",
      rating: 5,
      review:
        "The deep tissue massage was exactly what I needed after long work weeks. I left feeling lighter and slept so well that night.",
    },
    {
      name: "Marcus",
      rating: 5,
      review:
        "I booked the hydrating facial and the difference in my skin was immediate. The team made me feel comfortable from start to finish.",
    },
    {
      name: "Elena",
      rating: 5,
      review:
        "Peaceful atmosphere, attentive staff, and truly personalized care. It has become my favorite monthly reset ritual.",
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "Do I need an appointment?",
      answer:
        "Appointments are strongly recommended so we can reserve your preferred time and therapist. Same-day openings are available when schedules allow.",
    },
    {
      question: "What should I wear?",
      answer:
        "Wear comfortable clothing. For treatments, your therapist will explain exactly what to expect and provide privacy for changing.",
    },
    {
      question: "How early should I arrive?",
      answer:
        "Please arrive 10 to 15 minutes early to check in, enjoy tea, and settle in before your session begins.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes. We offer digital and in-studio gift cards for any amount, treatment, or spa package.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We kindly ask for at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee.",
    },
  ] satisfies FaqItem[],
};

export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
