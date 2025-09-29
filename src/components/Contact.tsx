import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "You'll receive updates about IEEE SMVITM events and news.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ieee@smvitm.edu',
      action: 'mailto:ieee@smvitm.edu'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 824 274 7747',
      action: 'tel:+918242747747'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'SMVITM Campus, Bantakal, Udupi, Karnataka 574115',
      action: 'https://maps.google.com/?q=SMVITM+Bantakal+Udupi'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.smvitm.edu',
      action: 'https://www.smvitm.edu'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/ieeesmvitm' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/ieeesmvitm' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/ieee-smvitm' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/ieeesmvitm' }
  ];

  const quickLinks = [
    { name: 'About IEEE', url: 'https://www.ieee.org/about/index.html' },
    { name: 'Student Membership', url: 'https://www.ieee.org/membership/students/index.html' },
    { name: 'IEEE Publications', url: 'https://www.ieee.org/publications/index.html' },
    { name: 'Career Center', url: 'https://careers.ieee.org/' },
    { name: 'Conferences', url: 'https://www.ieee.org/conferences/index.html' }
  ];

  return (
    <footer id="contact" className="bg-ieee-gradient text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Organization Info */}
            <div className="fade-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-xl font-bold">IEEE</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">IEEE Student Branch</h3>
                  <p className="text-white/80">SMVITM</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Advancing technology for humanity through innovation, professional development, 
                and community engagement at Shri Madhwa Vadiraja Institute of Technology and Management.
              </p>

              {/* Newsletter Subscription */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold text-lg mb-3">Stay Updated</h4>
                <p className="text-white/80 text-sm mb-4">
                  Subscribe to receive latest news and event updates
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-ieee-blue hover:bg-white/90"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up">
              <h3 className="font-heading font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.action}
                    target={item.action.startsWith('http') ? '_blank' : undefined}
                    rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-4 hover:bg-white/10 rounded-2xl transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="fade-in-right">
              <h3 className="font-heading font-bold text-2xl mb-6">Quick Links</h3>
              <div className="grid grid-cols-1 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold text-lg mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2025 IEEE Student Branch – SMVITM. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Advancing Technology for Humanity
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;