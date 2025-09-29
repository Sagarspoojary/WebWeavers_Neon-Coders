import { useState } from 'react';
import { X, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Advisor',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Kumar has 15+ years of experience in computer vision and machine learning. He has published over 50 research papers and mentored numerous IEEE projects.',
      email: 'rajesh.kumar@smvitm.edu',
      phone: '+91 98765 43210',
      linkedin: 'https://linkedin.com/in/rajeshkumar',
      specializations: ['Machine Learning', 'Computer Vision', 'Data Science'],
      achievements: ['IEEE Senior Member', 'Best Faculty Award 2023', '50+ Publications']
    },
    {
      id: 2,
      name: 'Sarah Elizabeth',
      role: 'Student Branch President',
      department: 'Electronics & Communication',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah is a final year ECE student passionate about IoT and embedded systems. She has led multiple technical initiatives and won several hackathons.',
      email: 'sarah.elizabeth@student.smvitm.edu',
      phone: '+91 98765 43211',
      linkedin: 'https://linkedin.com/in/sarahelizabeth',
      github: 'https://github.com/sarahelizabeth',
      specializations: ['IoT', 'Embedded Systems', 'Wireless Communication'],
      achievements: ['Hackathon Winner 2024', 'IEEE Student Member', 'Research Publication']
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Vice President',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Arjun specializes in artificial intelligence and has developed several innovative projects in natural language processing and deep learning.',
      email: 'arjun.patel@student.smvitm.edu',
      phone: '+91 98765 43212',
      linkedin: 'https://linkedin.com/in/arjunpatel',
      github: 'https://github.com/arjunpatel',
      specializations: ['Artificial Intelligence', 'Deep Learning', 'NLP'],
      achievements: ['AI Competition Winner', 'Open Source Contributor', 'Technical Blog Author']
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Secretary',
      department: 'Information Technology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Priya is passionate about cybersecurity and blockchain technology. She has organized multiple workshops on information security.',
      email: 'priya.sharma@student.smvitm.edu',
      phone: '+91 98765 43213',
      linkedin: 'https://linkedin.com/in/priyasharma',
      specializations: ['Cybersecurity', 'Blockchain', 'Network Security'],
      achievements: ['Cybersecurity Certification', 'Workshop Organizer', 'Security Research']
    },
    {
      id: 5,
      name: 'Karthik Reddy',
      role: 'Treasurer',
      department: 'Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Karthik works on robotics and automation projects. He has designed several industrial automation solutions and robotic systems.',
      email: 'karthik.reddy@student.smvitm.edu',
      phone: '+91 98765 43214',
      linkedin: 'https://linkedin.com/in/karthikreddy',
      specializations: ['Robotics', 'Automation', 'Control Systems'],
      achievements: ['Robotics Competition Winner', 'Patent Filed', 'Industry Internship']
    },
    {
      id: 6,
      name: 'Ananya Singh',
      role: 'Technical Lead',
      department: 'Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      bio: 'Ananya focuses on renewable energy systems and smart grid technology. She has worked on several sustainability projects.',
      email: 'ananya.singh@student.smvitm.edu',
      phone: '+91 98765 43215',
      linkedin: 'https://linkedin.com/in/ananyasingh',
      specializations: ['Renewable Energy', 'Smart Grid', 'Power Systems'],
      achievements: ['Green Energy Project', 'Research Scholar', 'Technical Paper Author']
    }
  ];

  const openMemberModal = (member: any) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Dedicated leaders and innovators driving IEEE SMVITM forward with passion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="card-ieee p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openMemberModal(member)}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-ieee-gradient text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {member.role.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="font-heading font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.department}</p>
                
                {/* Specializations */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.specializations.slice(0, 2).map((spec) => (
                    <span 
                      key={spec}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 hover:bg-muted rounded-xl transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded-xl transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  {member.github && (
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-xl transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* View Details */}
                <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view full profile <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative p-6 border-b">
              <button
                onClick={closeMemberModal}
                className="absolute top-6 right-6 p-2 hover:bg-muted rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-2">{selectedMember.name}</h2>
                  <p className="text-primary font-semibold">{selectedMember.role}</p>
                  <p className="text-muted-foreground">{selectedMember.department}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Bio */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-3">About</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Specializations */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specializations.map((spec: string) => (
                    <span 
                      key={spec}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedMember.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center space-x-3 p-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>{selectedMember.email}</span>
                  </a>
                  <a 
                    href={`tel:${selectedMember.phone}`}
                    className="flex items-center space-x-3 p-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{selectedMember.phone}</span>
                  </a>
                  <a 
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  {selectedMember.github && (
                    <a 
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 hover:bg-muted rounded-xl transition-colors"
                    >
                      <Github className="w-5 h-5 text-primary" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;