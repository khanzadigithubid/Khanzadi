export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  linkedinUrl?: string;
  date: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "René Schildt",
    role: "Business Development & AI Solutions | E-Commerce Strategy | Project Management",
    content: "I had the pleasure of hiring Khanzadi Wazir Ali for one of my clients a few months ago to design and develop a new website with a full-featured online shop. From start to finish, Khanzadi impressed both my client and me with her deep expertise in web development, Shopify, and e-commerce strategy. What truly sets her apart is her ability to balance technical mastery with a collaborative mindset — she not only executes flawlessly but also listens carefully to feedback, offers thoughtful suggestions, and finds smart ways to enhance the final product. Her understanding of digital marketing, AI, and automation adds real strategic value, helping brands grow intelligently rather than just getting things done. Khanzadi is a reliable professional who delivers excellent results and is a pleasure to work with.",
    linkedinUrl: "https://www.linkedin.com/in/reneschildt/en/",
    date: "2026-03-20",
    avatarUrl: undefined // Add avatar URL if available
  }
];
