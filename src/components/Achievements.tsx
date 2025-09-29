import { useState } from 'react';
import { Calendar, Filter, Award, Trophy, Star, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const achievements = [
    {
      id: 1,
      title: 'IEEE Outstanding Student Branch Award',
      type: 'award',
      year: '2023',
      date: 'December 2023',
      description: 'Recognized as one of the top performing student branches globally for exceptional technical activities and member engagement.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: 'Global Recognition'
    },
    {
      id: 2,
      title: 'Best Technical Paper - IEEE Conference',
      type: 'publication',
      year: '2024',
      date: 'March 2024',
      description: 'Our research on "AI-Driven Sustainable Energy Management" won the best paper award at IEEE International Conference.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      category: 'Research Excellence'
    },
    {
      id: 3,
      title: 'National Hackathon Championship',
      type: 'competition',
      year: '2024',
      date: 'January 2024',
      description: 'Team from our branch secured first place in National Level Hackathon with innovative IoT solution for smart cities.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'IEEE Student Magazine Feature',
      type: 'recognition',
      year: '2023',
      date: 'September 2023',
      description: 'Our branch activities and student achievements were featured in IEEE Student Magazine reaching global audience.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      category: 'Media Recognition'
    },
    {
      id: 5,
      title: 'Regional Technical Symposium Success',
      type: 'event',
      year: '2023',
      date: 'November 2023',
      description: 'Successfully organized regional technical symposium with 500+ participants from 25+ institutions.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
      category: 'Event Management'
    },
    {
      id: 6,
      title: 'Industry Partnership Excellence',
      type: 'partnership',
      year: '2024',
      date: 'February 2024',
      description: 'Established strategic partnerships with 5 leading tech companies for student internships and research collaboration.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      category: 'Industry Relations'
    },
    {
      id: 7,
      title: 'Patent Filing Achievement',
      type: 'patent',
      year: '2024',
      date: 'April 2024',
      description: 'Filed 3 patents for innovative engineering solutions developed by our student members.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'Intellectual Property'
    },
    {
      id: 8,
      title: 'Community Impact Award',
      type: 'social',
      year: '2023',
      date: 'August 2023',
      description: 'Recognized for outstanding community service through technology education in rural areas.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      category: 'Social Impact'
    }
  ];

  const years = ['all', '2024', '2023', '2022', '2021'];
  const types = ['all', 'award', 'publication', 'competition', 'recognition', 'event', 'partnership', 'patent', 'social'];

  const filteredAchievements = achievements.filter(achievement => {
    const yearMatch = selectedYear === 'all' || achievement.year === selectedYear;
    const typeMatch = selectedType === 'all' || achievement.type === selectedType;
    return yearMatch && typeMatch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return Award;
      case 'competition': return Trophy;
      case 'publication': return Star;
      default: return Medal;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'text-yellow-600 bg-yellow-100';
      case 'competition': return 'text-blue-600 bg-blue-100';
      case 'publication': return 'text-green-600 bg-green-100';
      case 'recognition': return 'text-purple-600 bg-purple-100';
      case 'event': return 'text-indigo-600 bg-indigo-100';
      case 'partnership': return 'text-orange-600 bg-orange-100';
      case 'patent': return 'text-red-600 bg-red-100';
      case 'social': return 'text-teal-600 bg-teal-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Celebrating our journey of excellence, innovation, and impact in the IEEE community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          
          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {years.map(year => (
              <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.type);
            return (
              <div 
                key={achievement.id}
                className="card-ieee overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(achievement.type)}`}>
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground font-medium">{achievement.category}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg mb-3 text-balance">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>

                  <div className="mt-4 pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-hover hover:bg-primary/10 p-0 h-auto font-medium"
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">No achievements found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;