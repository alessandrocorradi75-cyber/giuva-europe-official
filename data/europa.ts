import {
  Bike,
  BookOpen,
  Building2,
  Coffee,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Mail,
  Map,
  Network,
  ShieldCheck,
  Smile,
  Sprout,
  Users,
  Utensils
} from "lucide-react";

export const europeBrand = {
  name: "GIUVA Europe",
  acronym: "GIUVA",
  fullName: "Global Initiative for Urban Volunteering & Awareness",
  claim: "Your Community. Your Ideas. Your Impact.",
  shortClaim: "GIUVA is not only volunteering. GIUVA is your community.",
  subtitle: "A European platform connecting people, communities, volunteers and local initiatives to create real social impact.",
  description: "GIUVA Europe is the umbrella community platform for people, volunteers, ideas and local initiatives across Europe. It helps communities meet, listen, build and act with a shared civic identity.",
  legalBoundary: "GIUVA does not replace public authorities, emergency services, 112/118, civil protection bodies or competent institutions. GIUVA promotes civic participation, preparedness culture, AED awareness, community support and complementary cooperation where legally authorized.",
  email: "info@giuva.eu"
};

export const europeNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/countries", label: "Countries" },
  { href: "/community", label: "Community" },
  { href: "/projects", label: "Projects" },
  { href: "/partners", label: "Partners" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" }
];

export const europeCtas = {
  join: { label: "Join the Community", href: "/community" },
  programmes: { label: "Discover GIUVA Programmes", href: "/programmes" },
  initiative: { label: "Start a Local Initiative", href: "/projects" }
};

export const europeProgrammes = [
  { slug: "community-social", name: "Community & Social", color: "Community green", accent: "bg-[#18865B]", icon: Users, description: "Local communities, inclusion, social connection, mutual support and everyday civic participation." },
  { slug: "riders-rescue", name: "Riders Rescue", color: "GIUVA navy", accent: "bg-[#0B2A4A]", icon: Bike, description: "A responsible motorcyclist community promoting preparedness, AED culture, civic presence and community support. Future AED-equipped availability may be developed only where legally authorized." },
  { slug: "preparedness", name: "Preparedness", color: "European yellow", accent: "bg-[#F2C94C]", icon: ShieldCheck, description: "Preparedness culture, AED awareness, first response education and practical community readiness." },
  { slug: "civil-support", name: "Civil Support", color: "Civic orange", accent: "bg-[#F97316]", icon: HandHeart, description: "Complementary civic support for events, markets, fairs, community gatherings and local initiatives." },
  { slug: "academy", name: "Academy", color: "Learning purple", accent: "bg-[#7C3AED]", icon: GraduationCap, description: "Workshops, training paths, civic leadership, volunteer wellbeing and practical learning." },
  { slug: "journey", name: "Journey", color: "Journey green", accent: "bg-[#2F7D32]", icon: Map, description: "Responsible travel, cultural exchange, community hospitality and human storytelling across Europe." },
  { slug: "youth", name: "Youth", color: "Youth blue", accent: "bg-[#0891B2]", icon: Smile, description: "Youth participation, students, teenagers, civic learning and safe digital community experiences." },
  { slug: "senior", name: "Senior", color: "Senior burgundy", accent: "bg-[#7F1D1D]", icon: HandHeart, description: "Active ageing, intergenerational support, memory, mentoring and senior community participation." },
  { slug: "project-pulse", name: "Project Pulse", color: "Impact brown", accent: "bg-[#8B5E34]", icon: HeartPulse, description: "Transparent campaigns, fundraising readiness, impact communication and community project support." },
  { slug: "food-solidarity", name: "Food Solidarity / Agriculture", color: "Solidarity red", accent: "bg-[#B91C1C]", icon: Utensils, description: "Future community agriculture and food solidarity programmes: sowing, cultivating, harvesting and transforming resources through partners where appropriate." },
  { slug: "digital-youth", name: "Digital Youth / Future Lab", color: "Future teal", accent: "bg-[#0F766E]", icon: Network, description: "Safe digital participation, youth creativity and future civic learning environments, including Roblox-inspired educational concepts without implying partnership." }
];

export const communityGroups = ["Young people", "Teenagers", "Students", "Adults", "Seniors", "People with disabilities", "Families", "Professionals", "Volunteers", "Motorcyclists", "Restaurants and farmers", "Civic institutions"];

export const ideaPathway = [
  { title: "Meet", text: "People meet around a community need, a coffee, a shared idea or a local opportunity.", icon: Coffee },
  { title: "Listen", text: "The community listens, connects experience and welcomes different ages and abilities.", icon: Users },
  { title: "Build", text: "Ideas become local initiatives, learning moments, exchanges or solidarity projects.", icon: Sprout },
  { title: "Act", text: "Communities benefit through practical, visible and responsible social impact.", icon: Leaf }
];

export const europeCountries = [
  { name: "GIUVA Italy", status: "Local implementation", year: "2026", href: "https://www.giuva.it" },
  { name: "GIUVA Romania", status: "Local implementation", year: "2026", href: "https://www.giuva.ro" },
  { name: "GIUVA Spain", status: "Future country", year: "2027", href: "#" },
  { name: "GIUVA Austria", status: "Planned", year: "2027", href: "#" },
  { name: "GIUVA Hungary", status: "Planned", year: "2028", href: "#" },
  { name: "Future countries", status: "Open network", year: "Roadmap", href: "#" }
];

export const europeProjectAreas = [
  { title: "Food Solidarity & Community Agriculture", icon: Utensils, text: "A future development area where communities can sow, cultivate, harvest and transform resources with local partners." },
  { title: "Youth & Digital Community", icon: Smile, text: "A place for young people to learn, create, participate and explore safe civic digital experiences." },
  { title: "Preparedness & Public Support", icon: ShieldCheck, text: "Preparedness culture, AED awareness, civic assistance and responsible community presence at public gatherings." },
  { title: "Journey & Exchange", icon: Map, text: "Responsible travel, cultural exchange, community hospitality and stories that connect volunteers across Europe." }
];

export const europeContactFields = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "country", label: "Country", type: "text", required: true },
  { name: "topic", label: "Topic", type: "text", required: true }
];

export const europePartnerAreas = ["municipalities", "schools", "universities", "restaurants", "farmers", "civic institutions", "social partners", "foundations", "corporate sponsors", "European project partners"];

export const europeContactEmails = [
  { label: "General", value: "info@giuva.eu", icon: Mail },
  { label: "Community", value: "community@giuva.eu", icon: Users },
  { label: "Partnerships", value: "partners@giuva.eu", icon: Building2 },
  { label: "Projects", value: "projects@giuva.eu", icon: BookOpen }
];

export const europeSocialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/giuva/?viewAsMember=true" },
  { label: "Facebook", href: "https://www.facebook.com/GIUVACommunity" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" }
];

export const europeSeoKeywords = ["GIUVA Europe", "European community platform", "European volunteering", "community volunteering", "social impact Europe", "civil society platform", "volunteer network Europe", "community projects", "preparedness volunteers", "food solidarity", "youth volunteering", "inclusive community", "European civic innovation"];
