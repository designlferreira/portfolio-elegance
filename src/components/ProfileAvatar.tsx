interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-40 h-40 md:w-48 md:h-48",
  lg: "w-56 h-56 md:w-64 md:h-64",
};

const ProfileAvatar = ({ src, alt, size = "md" }: ProfileAvatarProps) => {
  return (
    <div className={`avatar-ring rounded-full glow-accent animate-float ${sizeClasses[size]}`}>
      <div className="w-full h-full rounded-full overflow-hidden bg-card">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
