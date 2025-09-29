import { useState } from 'react';
import { Search, Download, ExternalLink, Calendar, FileText, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const publications = [
    {
      id: 1,
      title: 'AI-Driven Sustainable Energy Management Systems for Smart Cities',
      authors: ['Dr. Rajesh Kumar', 'Sarah Elizabeth', 'Arjun Patel'],
      journal: 'IEEE Transactions on Smart Grid',
      year: '2024',
      date: 'March 2024',
      type: 'Journal',
      abstract: 'This paper presents a novel approach to sustainable energy management in smart cities using artificial intelligence and machine learning algorithms. The proposed system optimizes energy distribution and consumption patterns.',
      keywords: ['Smart Cities', 'AI', 'Energy Management', 'Sustainability'],
      downloads: 247,
      citations: 12,
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/example.2024',
      impact: 'High Impact',
      status: 'Published'
    },
    {
      id: 2,
      title: 'IoT-Based Real-Time Monitoring System for Industrial Automation',
      authors: ['Priya Sharma', 'Karthik Reddy', 'Dr. Rajesh Kumar'],
      journal: 'IEEE Internet of Things Journal',
      year: '2024',
      date: 'February 2024',
      type: 'Journal',
      abstract: 'A comprehensive IoT framework for real-time monitoring and control of industrial processes. The system integrates various sensors and actuators to provide seamless automation capabilities.',
      keywords: ['IoT', 'Industrial Automation', 'Real-time Systems', 'Monitoring'],
      downloads: 189,
      citations: 8,
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/example.2024',
      impact: 'Medium Impact',
      status: 'Published'
    },
    {
      id: 3,
      title: 'Blockchain-Based Secure Communication Protocol for Distributed Systems',
      authors: ['Priya Sharma', 'Ananya Singh'],
      journal: 'IEEE Security & Privacy Magazine',
      year: '2024',
      date: 'January 2024',
      type: 'Magazine',
      abstract: 'Novel blockchain implementation for secure communication in distributed computing environments. The protocol ensures data integrity and authentication across multiple nodes.',
      keywords: ['Blockchain', 'Security', 'Distributed Systems', 'Communication'],
      downloads: 156,
      citations: 5,
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/example.2024',
      impact: 'Medium Impact',
      status: 'Published'
    },
    {
      id: 4,
      title: 'Machine Learning Approaches for Predictive Maintenance in Manufacturing',
      authors: ['Arjun Patel', 'Karthik Reddy', 'Dr. Rajesh Kumar'],
      journal: 'IEEE Transactions on Industrial Informatics',
      year: '2023',
      date: 'November 2023',
      type: 'Journal',
      abstract: 'Comprehensive study on applying machine learning techniques for predictive maintenance in manufacturing industries. The research demonstrates significant cost savings and efficiency improvements.',
      keywords: ['Machine Learning', 'Predictive Maintenance', 'Manufacturing', 'Industry 4.0'],
      downloads: 312,
      citations: 18,
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/example.2023',
      impact: 'High Impact',
      status: 'Published'
    },
    {
      id: 5,
      title: 'Renewable Energy Integration Using Smart Grid Technologies',
      authors: ['Ananya Singh', 'Sarah Elizabeth', 'Dr. Rajesh Kumar'],
      journal: 'IEEE Power and Energy Magazine',
      year: '2023',
      date: 'October 2023',
      type: 'Magazine',
      abstract: 'Analysis of smart grid technologies for effective integration of renewable energy sources. The study focuses on grid stability and energy storage optimization.',
      keywords: ['Renewable Energy', 'Smart Grid', 'Energy Storage', 'Grid Stability'],
      downloads: 203,
      citations: 14,
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/example.2023',
      impact: 'High Impact',
      status: 'Published'
    },
    {
      id: 6,
      title: 'Edge Computing Framework for Real-Time Data Processing in IoT Networks',
      authors: ['Sarah Elizabeth', 'Arjun Patel'],
      journal: 'IEEE Computer Society',
      year: '2024',
      date: 'Under Review',
      type: 'Conference',
      abstract: 'A novel edge computing framework designed to handle real-time data processing requirements in large-scale IoT deployments. The framework reduces latency and improves system efficiency.',
      keywords: ['Edge Computing', 'IoT', 'Real-time Processing', 'Network Optimization'],
      downloads: 0,
      citations: 0,
      pdfUrl: '#',
      doiUrl: '#',
      impact: 'Pending',
      status: 'Under Review'
    }
  ];

  const filteredPublications = publications.filter(pub =>
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
    pub.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High Impact': return 'text-green-600 bg-green-100';
      case 'Medium Impact': return 'text-yellow-600 bg-yellow-100';
      case 'Pending': return 'text-gray-600 bg-gray-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-green-600 bg-green-100';
      case 'Under Review': return 'text-orange-600 bg-orange-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Research Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Cutting-edge research contributions from our faculty and students published in prestigious IEEE journals and conferences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 fade-in-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search publications by title, author, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 focus:border-primary"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((publication, index) => (
            <div 
              key={publication.id}
              className="card-ieee p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(publication.status)}`}>
                          {publication.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(publication.impact)}`}>
                          {publication.impact}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                          {publication.type}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-semibold text-xl mb-3 text-balance group-hover:text-primary transition-colors">
                        {publication.title}
                      </h3>
                    </div>
                  </div>

                  {/* Authors */}
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {publication.authors.join(', ')}
                    </span>
                  </div>

                  {/* Journal & Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="font-medium">{publication.journal}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{publication.date}</span>
                    </div>
                  </div>

                  {/* Abstract */}
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {publication.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.keywords.map((keyword) => (
                      <span 
                        key={keyword}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  {publication.status === 'Published' && (
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{publication.downloads} downloads</span>
                      </div>
                      <div className="flex items-center">
                        <span>{publication.citations} citations</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-3">
                  {publication.status === 'Published' && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-ieee-outline"
                        onClick={() => window.open(publication.pdfUrl, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(publication.doiUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DOI
                      </Button>
                    </>
                  )}
                  {publication.status === 'Under Review' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Pending
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">No publications found</h3>
            <p className="text-muted-foreground">Try adjusting your search query to see more results.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;