export const NavbarText: string[] = [
  "New Arrivals",
  "Wall Decor",
  "Home & Living",
  "Clothing & Accessories",
  "Shop By Artist",
  "Inspiration",
];

export const textSlider1: string[] = [
  "Exclusive Designs",
  "Unique Products",
  "High Quality",
  "Sustainable",
  "Emerging Artists",
];

export const HeroImage: { image: string; text: string }[] = [
  { image: "/HeroImage1.webp", text: "Natural Haze Style Guide" },
  { image: "/HeroImage2.webp", text: "Charming Nostalgia Style Guide" },
  { image: "/HeroImage3.webp", text: "Pantone Color of the Year 2025" },
  { image: "/HeroImage4.webp", text: "New Bedding Collection" },
  { image: "/HeroImage5.webp", text: "Modern Craft Style Guide" },
];

export const HeroButtonTexts: string[] = [
  "STILL LIFE",
  "MOTIVATIONAL",
  "NATURE",
  "PHOTOGRAPHY",
  "ABSTRACT",
];

export const ShopByRoomData: Record<
  string,
  { image1: string; image2: string; text: string; buttonText: string }
> = {
  bathroom: {
    image1: "/Bathroom1.webp",
    image2: "/Bathroom2.webp",
    text: "Elevate your daily rituals with fresh bath mats, shower curtains and wall art that spark joy.",
    buttonText: "explore bathroom",
  },
  bedroom: {
    image1: "/Bedroom1.webp",
    image2: "/Bedroom2.webp",
    text: "Transform your sanctuary with artist-designed bedding, art and decor for a dreamy new year.",
    buttonText: "explore bedroom",
  },
  kitchen: {
    image1: "/Kitchen1.webp",
    image2: "/Kitchen2.webp",
    text: "Elevate your kitchen game with fresh kitchenware, art and decor that spark joy.",
    buttonText: "explore kitchen",
  },
  livingroom: {
    image1: "/LivingRoom1.webp",
    image2: "/LivingRoom2.webp",
    text: "Refresh your gathering space with bold art prints, cozy throws and conversation-starting decor.",
    buttonText: "explore living room",
  },
};

export const galleryData: { image: string; text: string }[] = [
  { image: "Slider1.webp", text: "Trade Program" },
  { image: "Slider2.webp", text: "Sell Your Art" },
  { image: "Slider3.webp", text: "About Us" },
];

export const feedbackData: { image: string; description: string }[] = [
  {
    image: "/Brand1.webp",
    description: `"Whenever I want to spruce up the walls in my home, I browse Society6’s canvas prints, framed posters, and tapestries. There are so many styles and tastes to choose from…you’re bound to find something that suits your space."`,
  },
  {
    image: "/Brand2.avif",
    description: `"For truly adorable and unique home accessories…you can't beat Society6—especially if you're looking for cute art prints and bedding."`,
  },
  {
    image: "/Brand3.webp",
    description: `"Get ready to discover stuff you didn't even know existed, but now desperately need in your life."`,
  },
  {
    image: "/Brand4.webp",
    description: `"Get ready to discover stuff you didn't even know existed, but now desperately need in your life."`,
  },
  {
    image: "/Brand5.avif",
    description: `"Society6 truly has something for everyone's taste, whether you're a budding collector or a first-time buyer. The site is meticulously categorized to help you narrow down what you're looking for and it ships quickly and securely. "`,
  },
  {
    image: "/Brand6.avif",
    description: `"Society6 is the place to go if you are looking for items where art and design meet functionality in the most spectacular way. The items showcase this collision of worlds, bringing a whole new outlook on everyday items."`,
  },
];

export const footerText: { heading: string; texts: string[] }[] = [
  {
    heading: "Contact Us",
    texts: [
      "Monday–Friday: 8am-5pm PST",
      "3890 S Windermere St.Englewood, CO 80110",
    ],
  },
  {
    heading: "Customer Support",
    texts: [
      "Help Center",
      "Shipping Information",
      "Returns",
      "Order Status",
      "Gift Cards",
      "Student Discount",
    ],
  },
  {
    heading: "About Us",
    texts: [
      "Our Story",
      "Careers",
      "Society6 Blog",
      "Wholesale Program",
      "Trade Program",
    ],
  },
  {
    heading: "Artist Support",
    texts: [
      "Sell Your Art",
      "Artist Affiliate Program",
      "Artist Help Center",
      "Artist Blog",
    ],
  },
];
