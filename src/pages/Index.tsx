import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Achievements from '@/components/Achievements';
import Publications from '@/components/Publications';
import Societies from '@/components/Societies';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import LoginModal from '@/components/LoginModal';
import { AuthProvider } from '@/hooks/useAuth';
import { NotificationsProvider } from '@/hooks/useNotifications';

const Index = () => {
  return (
    <AuthProvider>
      <NotificationsProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Hero />
          <About />
          <Team />
          <Achievements />
          <Publications />
          <Societies />
          <Events />
          <Contact />
          <LoginModal />
        </div>
      </NotificationsProvider>
    </AuthProvider>
  );
};

export default Index;
