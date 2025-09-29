import { Mail, ExternalLink, Users, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Societies = () => {
  const societies = [
    {
      id: 1,
      name: 'Communication Society',
      acronym: 'ComSoc',
      description: 'Advancing communication technologies through research, education, and professional development in wireless, optical, and networking systems.',
      icon: '📡',
      color: 'bg-blue-500',
      members: 120,
      lead: {
        name: 'Dr. Priya Nair',
        email: 'priya.nair@smvitm.edu',
        role: 'Faculty Coordinator'
      },
      activities: [
        'Wireless Communication Workshops',
        '5G Technology Seminars',
        'Research Projects on Optical Networks',
        'Industry Guest Lectures'
      ],
      achievements: [
        'Best Paper Award at IEEE ICC 2024',
        '15+ Research Publications',
        'Industry Partnership with Nokia'
      ],
      upcomingEvents: [
        {
          title: '5G and Beyond Workshop',
          date: 'January 15, 2025',
          type: 'Workshop'
        },
        {
          title: 'Optical Communication Seminar',
          date: 'February 10, 2025',
          type: 'Seminar'
        }
      ]
    },
    {
      id: 2,
      name: 'Computer Society',
      acronym: 'CS',
      description: 'Promoting computer science education, research, and professional development in software engineering, AI, and cybersecurity.',
      icon: '💻',
      color: 'bg-green-500',
      members: 200,
      lead: {
        name: 'Dr. Arjun Kumar',
        email: 'arjun.kumar@smvitm.edu',
        role: 'Faculty Coordinator'
      },
      activities: [
        'AI/ML Workshops',
        'Coding Competitions',
        'Open Source Contributions',
        'Cybersecurity Training'
      ],
      achievements: [
        'ACM ICPC Regional Finalists',
        '20+ Open Source Projects',
        'Google Summer of Code Participants'
      ],
      upcomingEvents: [
        {
          title: 'AI Ethics Workshop',
          date: 'January 20, 2025',
          type: 'Workshop'
        },
        {
          title: 'Hackathon 2025',
          date: 'March 5-7, 2025',
          type: 'Competition'
        }
      ]
    },
    {
      id: 3,
      name: 'SIGHT (Special Interest Group on Humanitarian Technology)',
      acronym: 'SIGHT',
      description: 'Leveraging technology for humanitarian causes and sustainable development to create positive social impact in local communities.',
      icon: '🌍',
      color: 'bg-emerald-500',
      members: 85,
      lead: {
        name: 'Prof. Ananya Singh',
        email: 'ananya.singh@smvitm.edu',
        role: 'Faculty Coordinator'
      },
      activities: [
        'Rural Technology Education',
        'Clean Water Solutions',
        'Renewable Energy Projects',
        'Digital Literacy Programs'
      ],
      achievements: [
        'Impacted 500+ Rural Families',
        'Solar Energy Project Implementation',
        'UNESCO Recognition for Community Service'
      ],
      upcomingEvents: [
        {
          title: 'Sustainable Tech Fair',
          date: 'February 15, 2025',
          type: 'Exhibition'
        },
        {
          title: 'Community Outreach Program',
          date: 'March 20, 2025',
          type: 'Community Service'
        }
      ]
    },
    {
      id: 4,
      name: 'Women in Engineering',
      acronym: 'WIE',
      description: 'Empowering women engineers through mentorship, professional development, and creating inclusive engineering environments.',
      icon: '👩‍💼',
      color: 'bg-purple-500',
      members: 95,
      lead: {
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@smvitm.edu',
        role: 'Faculty Coordinator'
      },
      activities: [
        'Leadership Development Programs',
        'Mentorship Networks',
        'Technical Skill Workshops',
        'Industry Networking Events'
      ],
      achievements: [
        '80% Women Leadership Placement',
        'National WIE Excellence Award',
        'Industry Mentorship Program Success'
      ],
      upcomingEvents: [
        {
          title: 'Women in Tech Leadership Summit',
          date: 'January 25, 2025',
          type: 'Summit'
        },
        {
          title: 'Mentorship Program Launch',
          date: 'February 5, 2025',
          type: 'Program'
        }
      ]
    }
  ];

  return (
    <section id="societies" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">IEEE Societies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Specialized technical societies fostering innovation, professional development, and community impact across diverse engineering domains.
          </p>
        </div>

        {/* Societies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {societies.map((society, index) => (
            <div 
              key={society.id}
              className="card-ieee p-8 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${society.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {society.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-1">{society.name}</h3>
                    <p className="text-primary font-semibold">{society.acronym}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{society.members} members</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {society.description}
              </p>

              {/* Lead Contact */}
              <div className="bg-muted/50 rounded-2xl p-4 mb-6">
                <h4 className="font-semibold text-sm mb-2">Faculty Coordinator</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{society.lead.name}</p>
                    <p className="text-sm text-muted-foreground">{society.lead.role}</p>
                  </div>
                  <a 
                    href={`mailto:${society.lead.email}`}
                    className="p-2 hover:bg-background rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Key Activities */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-primary" />
                  Key Activities
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {society.activities.map((activity, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Upcoming Events
                </h4>
                <div className="space-y-2">
                  {society.upcomingEvents.map((event, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm p-2 bg-background/50 rounded-xl">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-muted-foreground text-xs">{event.type}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{event.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Recent Achievements</h4>
                <div className="space-y-1">
                  {society.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-ieee-accent rounded-full mr-2"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full btn-ieee-primary group-hover:scale-[1.02]"
                onClick={() => window.open(`mailto:${society.lead.email}?subject=Interest in ${society.name}`, '_blank')}
              >
                Learn More <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-ieee-elevated p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl mb-4">Join a Society</h3>
            <p className="text-muted-foreground mb-6">
              Become part of our vibrant technical communities and advance your professional journey with IEEE SMVITM societies.
            </p>
            <Button 
              size="lg"
              className="btn-ieee-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societies;