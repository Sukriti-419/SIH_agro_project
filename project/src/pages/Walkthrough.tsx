import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  ArrowLeft,
  MessageSquare,
  BarChart3,
  Map,
  Database,
  Settings,
  Info,
  Home,
  Waves,
  Users,
  Globe,
  Zap,
  Brain,
  Activity,
  Thermometer,
  Droplets,
  MapPin,
  Download,
  Eye,
  Filter,
  Search,
  Calendar,
  RefreshCw
} from 'lucide-react';

interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
  features: string[];
  screenshot: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

export const Walkthrough: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: WalkthroughStep[] = [
    {
      id: 'home',
      title: 'Welcome to FloatChat',
      description: 'Your AI-powered gateway to ocean data exploration. FloatChat makes complex oceanographic data accessible through natural language conversations.',
      features: [
        'Conversational AI interface for natural language queries',
        'Real-time ARGO float data visualization',
        'Interactive demo with live chat and dashboard',
        'Beautiful ocean-themed design with smooth animations',
        'Mobile-responsive layout for all devices'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'chat',
      title: 'Conversational AI Chat Interface',
      description: 'Ask questions in natural language and get intelligent responses about ocean data, ARGO floats, temperature, salinity, and marine conditions.',
      features: [
        'Natural language processing powered by Hugging Face AI',
        'Voice input support with microphone integration',
        'Typing indicators and smooth message animations',
        'Context-aware responses about oceanographic data',
        'Real-time data visualization triggers',
        'Chat history and conversation memory'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      id: 'dashboard',
      title: 'Interactive Visualization Dashboard',
      description: 'Comprehensive dashboard with real-time ocean data visualizations, charts, and AI-generated insights from global ARGO float network.',
      features: [
        'Real-time statistics from 4,127+ active ARGO floats',
        'Interactive temperature and salinity profile charts',
        'Global ocean map with live float positions',
        'AI-generated ocean insights and anomaly detection',
        'Responsive design adapting to all screen sizes',
        'Customizable time ranges and regional filters'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: BarChart3,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      id: 'explorer',
      title: 'Advanced Data Explorer',
      description: 'Interactive mapping interface for exploring ARGO float positions, data layers, and detailed oceanographic measurements.',
      features: [
        'Interactive global ocean map with zoom and pan',
        'Multiple data layers: Temperature, Salinity, Float Positions, Currents',
        'Advanced filtering by region, time range, and parameters',
        'Detailed float information with hover tooltips',
        'Comprehensive data table with sortable columns',
        'Export capabilities for research and analysis'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: Map,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 'datasets',
      title: 'Comprehensive Data Catalog',
      description: 'Browse and download various ARGO datasets including core temperature/salinity data, biogeochemical parameters, and metadata.',
      features: [
        'Six major dataset collections totaling 3.5TB of data',
        'Multiple format support: NetCDF, CSV, JSON, HDF5',
        'Real-time data streams and historical archives',
        'Comprehensive API documentation with examples',
        'Search and filter capabilities across datasets',
        'Direct download and API access options'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      id: 'about',
      title: 'Platform Information & Team',
      description: 'Learn about FloatChat\'s mission, technology stack, and the expert team behind the platform.',
      features: [
        'Platform mission and impact statistics',
        'Expert team of oceanographers and AI engineers',
        'Advanced technology stack with Hugging Face AI',
        'Open source commitment and collaboration opportunities',
        'Contact information and social media links',
        'Technical specifications and performance metrics'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: Info,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      id: 'settings',
      title: 'User Settings & Preferences',
      description: 'Customize your FloatChat experience with personal preferences, API access, and security settings.',
      features: [
        'Personal profile and organization information',
        'Notification preferences and email alerts',
        'Theme, language, and timezone customization',
        'API key management and rate limiting',
        'Data export and retention policies',
        'Security settings and two-factor authentication'
      ],
      screenshot: '/api/placeholder/800/500',
      icon: Settings,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50'
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const currentStepData = steps[currentStep];
  const StepIcon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              FloatChat Platform Walkthrough
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how FloatChat revolutionizes ocean data exploration through 
              AI-powered conversations and intelligent visualizations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  index === currentStep
                    ? `bg-gradient-to-br ${step.color} text-white shadow-lg scale-105`
                    : index < currentStep
                    ? 'bg-green-100 text-green-600 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-xs font-medium truncate">{step.title.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Step Information */}
          <div className={`bg-gradient-to-br ${currentStepData.bgColor} rounded-2xl p-8 border border-blue-100`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`bg-gradient-to-br ${currentStepData.color} p-3 rounded-xl`}>
                <StepIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  {currentStepData.title}
                </h2>
                <div className="text-sm text-gray-500 mt-1">
                  Feature {currentStep + 1} of {steps.length}
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentStepData.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h3>
              {currentStepData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot/Demo Area */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-blue-100">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Live Demo Preview</h3>
              <p className="text-sm text-gray-600">Interactive preview of {currentStepData.title}</p>
            </div>
            
            {/* Demo Content Based on Current Step */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
              {currentStep === 0 && (
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mb-4 inline-block">
                    <Waves className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Welcome to FloatChat</h4>
                  <p className="text-gray-600 mb-4">AI-Powered Ocean Data Exploration</p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Globe className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Brain className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Activity className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="w-full">
                  <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-500 p-2 rounded-full">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Ocean AI Assistant</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "Hello! I can help you explore ARGO float data. Try asking: 'Show me temperature profiles in the Arabian Sea'"
                    </p>
                  </div>
                  <div className="bg-blue-500 text-white rounded-xl p-4 ml-8">
                    <p className="text-sm">"What's the average salinity near the equator?"</p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium">Temperature</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">18.4°C</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="w-4 h-4 text-teal-500" />
                        <span className="text-sm font-medium">Salinity</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800">34.7 PSU</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded flex items-center justify-center">
                      <span className="text-gray-600">Interactive Charts & Visualizations</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="w-full">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Map className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Interactive Ocean Map</span>
                    </div>
                    <div className="h-32 bg-gradient-to-b from-sky-100 to-blue-200 rounded relative">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-red-500 rounded-full animate-pulse"
                          style={{
                            left: `${20 + (i * 10)}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white px-3 py-1 rounded text-xs border">Temperature</button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Salinity</button>
                    <button className="bg-white px-3 py-1 rounded text-xs border">Floats</button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="w-full space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium">ARGO Core Data</span>
                      <span className="text-sm text-gray-500">2.4 TB</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">NetCDF</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">CSV</span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">JSON</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm flex items-center gap-2">
                      <Download className="w-3 h-3" />
                      Download
                    </button>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    6 Dataset Collections • 4.2M Ocean Profiles
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="w-full text-center">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-sm font-medium">Expert Team</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Zap className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <div className="text-sm font-medium">AI Technology</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Globe className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-medium">Global Impact</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Learn about our mission and technology</p>
                </div>
              )}

              {currentStep === 6 && (
                <div className="w-full">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Settings className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">User Preferences</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Email Notifications</span>
                        <div className="w-8 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Theme</span>
                        <span className="text-sm text-gray-500">Light</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">API Access</span>
                        <Eye className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep
                    ? 'bg-blue-500 scale-125'
                    : index < currentStep
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {currentStep === steps.length - 1 ? 'Start Over' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">FloatChat Platform Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-blue-100">Major Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4,127</div>
              <div className="text-blue-100">Active ARGO Floats</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3.5TB</div>
              <div className="text-blue-100">Ocean Data</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};