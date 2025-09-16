import React from 'react';
import { 
  Waves, 
  Users, 
  Globe, 
  Zap, 
  Database, 
  Brain,
  Target,
  Award,
  ExternalLink,
  Mail,
  Github,
  Twitter
} from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze ocean patterns and provide intelligent insights from ARGO float data.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access data from over 4,000 active ARGO floats distributed across all major ocean basins worldwide.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Near real-time data processing and visualization with updates from floats as they surface and transmit.'
    },
    {
      icon: Database,
      title: 'Comprehensive Datasets',
      description: 'Temperature, salinity, biogeochemical parameters, and trajectory data spanning over two decades.'
    }
  ];

  const team = [
    {
      name: 'Devika Rakh ',
      role: 'Backend Engineer',
      bio: ' ARGO data analysis and ocean modeling.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Araham Sayeed',
      role: 'AI/ML Engineer',
      bio: 'Specializes in machine learning applications for environmental data and natural language processing.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sukriti Das',
      role: 'Frontend Engineer',
      bio: 'Expert in big data analytics and visualization for oceanographic research and climate studies.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { value: '4,127', label: 'Active ARGO Floats', icon: Waves },
    { value: '2M+', label: 'Ocean Profiles', icon: Database },
    { value: '95%', label: 'AI Accuracy', icon: Brain },
    { value: '24/7', label: 'Monitoring', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              About FloatChat
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Democratizing ocean science through AI-powered conversational interfaces and 
              intelligent data visualization for the global ARGO float network.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                FloatChat bridges the gap between complex oceanographic data and accessible insights. 
                We believe that understanding our oceans should not require specialized technical knowledge.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By combining the power of AI with the world's largest ocean observation network, 
                we make ocean science accessible to researchers, educators, policymakers, and curious minds worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  🌊 Ocean Accessibility
                </div>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  🤖 AI Innovation
                </div>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                  🌍 Global Impact
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Platform Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets oceanographic expertise to deliver 
              unprecedented access to ocean data and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl w-fit mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-blue-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of oceanographers, data scientists, and AI engineers 
              passionate about making ocean science accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our platform leverages cutting-edge AI and cloud infrastructure 
              to process and analyze massive oceanographic datasets in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Hugging Face Transformers for Natural Language Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>PostgreSQL + Vector Database for Semantic Search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>React + TypeScript for Interactive Visualizations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>NetCDF Processing Pipeline for ARGO Data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Cloud Infrastructure for Scalable Processing</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Data Processing</h3>
              <div className="space-y-4 text-blue-100">
                <div className="flex justify-between">
                  <span>Daily Data Ingestion</span>
                  <span className="font-bold">~400 profiles</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Latency</span>
                  <span className="font-bold">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Query Response Time</span>
                  <span className="font-bold">&lt; 500ms</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Model Accuracy</span>
                  <span className="font-bold">95.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about FloatChat or want to collaborate? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center border border-blue-100">
              <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get in touch with our team</p>
              <a href="mailto:contact@floatchat.org" className="text-blue-600 hover:text-blue-700 font-medium">
                contact@floatchat.org
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 text-center border border-purple-100">
              <Github className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Open Source</h3>
              <p className="text-gray-600 mb-4">Contribute to our codebase</p>
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center gap-2">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 text-center border border-green-100">
              <Twitter className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Follow Us</h3>
              <p className="text-gray-600 mb-4">Stay updated with latest news</p>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center justify-center gap-2">
                @FloatChatAI <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};