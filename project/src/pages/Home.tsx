import React from 'react';
import { Link } from 'react-router-dom';
import { ChatInterface } from '../components/ChatInterface';
import { ResponsiveDashboard } from '../components/ResponsiveDashboard';
import { ArrowRight, Play, Users, Database, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const [currentQuery, setCurrentQuery] = React.useState<string>('');

  const handleDataRequest = (query: string) => {
    setCurrentQuery(query);
  };

  const features = [
    {
      icon: Users,
      title: 'Conversational AI',
      description: 'Ask questions in natural language about ocean data, ARGO floats, and marine conditions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'Access live ARGO float data with temperature, salinity, and biogeochemical measurements.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Smart Insights',
      description: 'AI-powered analysis reveals ocean patterns, trends, and anomalies automatically.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Ocean Data with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Conversational AI
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              FloatChat makes ocean science accessible to everyone. Ask questions in natural language 
              and get instant insights from global ARGO float data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Start Exploring
              </Link>
              <Link
                to="/walkthrough"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                View Walkthrough
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl w-fit mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Try FloatChat Now
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of conversational ocean data exploration. 
              Ask questions and see real-time visualizations.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Chat Interface */}
            <div className="order-2 xl:order-1">
              <ChatInterface onDataRequest={handleDataRequest} />
            </div>
            
            {/* Dashboard Preview */}
            <div className="order-1 xl:order-2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Live Ocean Dashboard</h3>
                <ResponsiveDashboard currentQuery={currentQuery} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4,127</div>
              <div className="text-blue-100">Active ARGO Floats</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">2M+</div>
              <div className="text-blue-100">Ocean Profiles</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Real-time Monitoring</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">AI Accuracy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};