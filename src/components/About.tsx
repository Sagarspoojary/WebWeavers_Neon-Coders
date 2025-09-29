import { Target, Eye, History, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2018',
      title: 'IEEE Student Branch Established',
      description: 'Official formation of IEEE Student Branch at SMVITM with 50 founding members.'
    },
    {
      year: '2019',
      title: 'First Technical Symposium',
      description: 'Organized our inaugural technical symposium with 200+ participants.'
    },
    {
      year: '2020',
      title: 'Virtual Innovation',
      description: 'Adapted to virtual events during pandemic, reaching 500+ students online.'
    },
    {
      year: '2021',
      title: 'Research Excellence',
      description: 'Published 15+ research papers in IEEE conferences and journals.'
    },
    {
      year: '2022',
      title: 'Industry Partnerships',
      description: 'Established collaborations with leading tech companies.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Received IEEE Outstanding Student Branch Award.'
    },
    {
      year: '2024',
      title: 'Expanding Horizons',
      description: 'Launched new societies and reached 800+ active members.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Fostering creative solutions to real-world engineering challenges'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong networks within the global IEEE community'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining high standards in all our technical endeavors'
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Continuous professional development and skill enhancement'
    }
  ];

  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">About IEEE SMVITM</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Empowering the next generation of engineers through innovation, collaboration, and technical excellence.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-ieee p-8 fade-in-left">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To advance technology for humanity by fostering technological innovation, 
              supporting professional development of our members, and creating opportunities 
              for technical collaboration and knowledge sharing within our community.
            </p>
          </div>

          <div className="card-ieee p-8 fade-in-right">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading IEEE Student Branch that produces globally competent engineers 
              who contribute significantly to technological advancement and serve society 
              through innovative solutions and ethical professional practices.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 fade-in-up">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card-ieee p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-ieee-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="card-ieee p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-ieee-gradient text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;