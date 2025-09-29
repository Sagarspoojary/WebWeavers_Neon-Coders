import { ArrowRight, Users, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/ieee-hero-bg.jpg';
import { useAuth } from '@/hooks/useAuth';

const Hero = () => {
  const { user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    {
      icon: Users,
      title: 'IEEE Societies',
      description: 'Explore our technical societies',
      href: '#societies',
      color: 'text-ieee-blue'
    },
    {
      icon: Calendar,
      title: 'Upcoming Events',
      description: 'Join our latest workshops',
      href: '#events',
      color: 'text-ieee-accent'
    },
    {
      icon: BookOpen,
      title: 'Publications',
      description: 'Read our research papers',
      href: '#publications',
      color: 'text-primary'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-ieee-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* IEEE Logo */}
          <div className="mb-8 fade-in-up">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-elegant">
              <span className="text-4xl font-bold text-white">IEEE</span>
            </div>
            <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 fade-in-up text-balance">
            Empowering Future
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Engineers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in-up max-w-2xl mx-auto text-balance">
            IEEE Student Branch at Shri Madhwa Vadiraja Institute of Technology and Management
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up">
            {!user ? (
              <Button
                onClick={() => document.querySelector('#login-modal')?.classList.remove('hidden')}
                size="lg"
                className="bg-white text-ieee-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-elegant transform hover:scale-105 transition-all duration-300"
              >
                Join IEEE <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              <Button
                onClick={() => scrollToSection('#events')}
                size="lg"
                className="bg-white text-ieee-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-elegant transform hover:scale-105 transition-all duration-300"
              >
                View Events <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            )}
            
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-ieee-blue px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto fade-in-up">
            {quickLinks.map((link, index) => (
              <button
                key={link.title}
                onClick={() => scrollToSection(link.href)}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <link.icon className="w-8 h-8 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading font-semibold text-lg mb-2">{link.title}</h3>
                <p className="text-white/80 text-sm">{link.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;