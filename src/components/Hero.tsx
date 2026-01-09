import ProfileAvatar from "./ProfileAvatar";
import SocialLinks from "./SocialLinks";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen gradient-background flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-scale-in">
            <ProfileAvatar 
              src={profileImage} 
              alt="Clauber - Desenvolvedor Full Stack"
              size="lg"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm text-muted-foreground">Disponível para oportunidades</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">Desenvolvedor</span>
              <br />
              <span className="text-foreground">Full Stack</span>
            </h1>

            {/* Name */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Olá, meu nome é <span className="text-foreground font-semibold">Clauber</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Sou estudante de ciência da computação e estou em busca de uma oportunidade 
              de estágio na área de desenvolvimento. Tenho conhecimentos em{" "}
              <span className="text-foreground">Python</span>,{" "}
              <span className="text-foreground">Front-end</span> e{" "}
              <span className="text-foreground">C#</span>, e estou sempre buscando 
              melhorar minhas habilidades na prática. Gosto de aprender coisas novas, 
              trabalhar em equipe e contribuir com projetos que gerem impacto real.
            </p>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
