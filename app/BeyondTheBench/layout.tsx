import type { ReactNode } from "react";

export const metadata = {
  title: "Beyond The Bench",
  description:
    "Are you ready to step off the sidelines and embrace the ultimate sports adventure? 🏆✨Experience sports, strategy, and surprises like never before! This isn’t just about sports—it’s about creativity, fun, and pushing boundaries. 🏅Whether you’re a fan or curious, there’s something for everyone!",
  keywords:
    "sports adventure, creativity, fun, strategy, surprises, ultimate sports, sports fans, pushing boundaries",
  og: {
    title: "Beyond The Bench - The Ultimate Sports Adventure",
    description:
      "Join 'Beyond The Bench' for an exhilarating sports journey filled with strategy, surprises, and creativity. Step off the sidelines and into the action!",
    url: "https://www.ecellmjcet.com/BeyondTheBench", // Change URL to match the actual website if different
    type: "website",
    image: "/assets/comingup", // Placeholder for image, update as per actual content
  },
  twitter: {
    card: "summary_large_image",
    site: "@EcellMJCET BeyondTheBench",
    title: "Beyond The Bench - Your Sports Adventure Awaits",
    description:
      "Explore sports like never before with 'Beyond The Bench' – a journey of strategy, fun, and creativity!",
    image: "/assets/comingup", // Placeholder for Twitter image
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Beyond The Bench",
    url: "https://www.ecellmjcet.com/BeyondTheBench",
    logo: "/assets/Logo/logo-big-colour.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "ecellmjcet@mjcollege.ac.in", // Placeholder email, update as needed
      areaServed: "Global",
      availableLanguage: "English",
    },
    sameAs: ["https://www.instagram.com/ecellmjcet/"],
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
