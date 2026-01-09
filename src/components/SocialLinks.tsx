import { Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://instagram.com",
    color: "hover:text-pink-400" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://linkedin.com",
    color: "hover:text-blue-400" 
  },
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com",
    color: "hover:text-foreground" 
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-button text-muted-foreground ${social.color}`}
          aria-label={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
