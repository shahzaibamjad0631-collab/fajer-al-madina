import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Al Rashidi",
    role: "Marketing Director",
    company: "Emaar Properties",
    content:
      "Exceptional quality and incredibly fast delivery. We ordered 5,000 premium business cards with Spot UV finish and they were ready within 24 hours. The quality exceeded our expectations — truly a professional printing partner for our real estate team.",
    rating: 5,
    source: "google",
    featured: true,
    date: "2024-11-15",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Operations Manager",
    company: "Café Arabica Dubai",
    content:
      "We needed urgent menu redesign and printing for a grand opening in 48 hours. The team at Fajer Al Madina delivered perfectly — beautiful menus, roll-up banners, and window graphics all on time. Our customers love the new look!",
    rating: 5,
    source: "google",
    featured: true,
    date: "2024-10-28",
  },
  {
    id: "3",
    name: "Dr. Khalid Mansoor",
    role: "Clinic Director",
    company: "Al Shifa Medical Center",
    content:
      "We required MOHAP-compliant frosted vinyl for our clinic windows. The team understood the regulations perfectly and delivered exactly what we needed. Professional service and great pricing. Highly recommended for healthcare facilities.",
    rating: 5,
    source: "google",
    featured: true,
    date: "2024-11-02",
  },
  {
    id: "4",
    name: "Priya Nair",
    role: "Event Coordinator",
    company: "Luxe Events Dubai",
    content:
      "Outstanding exhibition printing for GITEX! All our backdrops, pop-up displays, and branded materials were delivered on time and looked stunning on the exhibition floor. Will definitely be using them for all future events.",
    rating: 5,
    source: "google",
    featured: true,
    date: "2024-10-20",
  },
  {
    id: "5",
    name: "Mohammed Youssef",
    role: "CEO",
    company: "Al Noor Construction LLC",
    content:
      "We had our entire fleet of 15 trucks branded professionally. The quality of the vehicle wraps is superb and the team was very accommodating with our tight timeline. Our brand visibility on the roads has increased significantly.",
    rating: 5,
    source: "google",
    featured: false,
    date: "2024-09-14",
  },
  {
    id: "6",
    name: "Jennifer Cruz",
    role: "Brand Manager",
    company: "Rove Hotels",
    content:
      "Fajer Al Madina handles all our hotel branding materials — from room signage to outdoor banners. Consistent quality every time, competitive pricing, and they always deliver on schedule. A trusted partner for 3 years now.",
    rating: 5,
    source: "google",
    featured: false,
    date: "2024-08-30",
  },
  {
    id: "7",
    name: "Tariq Ibrahim",
    role: "Founder",
    company: "Desert Bloom Café",
    content:
      "Amazing work on our café wall murals and frosted vinyl branding! The café looks absolutely stunning now. Our Instagram engagement has tripled since the new look. These guys know their craft — highly recommend!",
    rating: 5,
    source: "google",
    featured: false,
    date: "2024-11-08",
  },
  {
    id: "8",
    name: "Linda Thompson",
    role: "HR Director",
    company: "Dubai Technology Co.",
    content:
      "Ordered corporate gifts for 200 employees — mugs, notebooks, and lanyards all branded beautifully. The attention to detail was impressive and pricing was very competitive. Delivered 2 days ahead of schedule!",
    rating: 5,
    source: "google",
    featured: false,
    date: "2024-10-05",
  },
];

export const getFeaturedTestimonials = () =>
  testimonials.filter((t) => t.featured);

export const getAverageRating = () => {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonials.length).toFixed(1);
};
