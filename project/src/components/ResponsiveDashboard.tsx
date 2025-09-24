import React, { useState } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Activity, 
  Globe,
  Filter,
  Download,
  RefreshCw,
  Calendar,
  BarChart3,
  LineChart,
  PieChart
} from 'lucide-react';

interface ResponsiveDashboardProps {
  currentQuery?: string;
}

export const ResponsiveDashboard: React.FC<ResponsiveDashboardProps> = ({ currentQuery }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [chartType, setChartType] = useState('line');

  const generateChartData = () => {
    return Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
      temperature: 25 - (i * 0.1) + Math.random() * 3,
      salinity: 34 + (i * 0.02) + Math.random() * 0.8,
      depth: Math.random() * 2000
    }));
  };

  const chartData = generateChartData();

  const stats = [
    {
      title: 'Active Floats',
      value: '4,127',
      change: '+12',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Daily Profiles',
      value: '412',
      change: '+8',
      icon: Activity,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      title: 'Avg Temperature',
      value: '18.4°C',
      change: '+0.3°C',
      icon: Thermometer,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      title: 'Avg Salinity',
      value: '34.7 PSU',
      change: '+0.1',
      icon: Droplets,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100'
    }
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Controls Bar */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-bold text-gray-800">Data Controls</h3>
            {currentQuery && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Query: {currentQuery}
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100"
            >
              <option value="1h">Last 1 Hour</option>
              <option value="1d">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 3 Months</option>
            </select>
            
            <select 
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100"
            >
              <option value="global">Global</option>
              <option value="atlantic">Atlantic Ocean</option>
              <option value="pacific">Pacific Ocean</option>
              <option value="indian">Indian Ocean</option>
              <option value="arctic">Arctic Ocean</option>
            </select>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`bg-gradient-to-br ${stat.bgColor} p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-white/50`}>
              <div className="flex items-center justify-between mb-2">
                <div className={`bg-gradient-to-br ${stat.color} p-2 lg:p-3 rounded-lg lg:rounded-xl`}>
                  <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-xs lg:text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <div>
                <p className="text-xs lg:text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-lg lg:text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section - Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Temperature Chart */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 lg:mb-6 gap-3">
            <div className="flex items-center gap-3">
              <Thermometer className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />
              <h3 className="text-lg lg:text-xl font-bold text-gray-800">Temperature Trends</h3>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setChartType('line')}
                className={`p-2 rounded-lg transition-colors ${chartType === 'line' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <LineChart className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setChartType('bar')}
                className={`p-2 rounded-lg transition-colors ${chartType === 'bar' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <BarChart3 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative h-48 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-orange-25 rounded-lg"></div>
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              {chartData.map((point, index) => (
                <circle
                  key={index}
                  cx={`${(index / (chartData.length - 1)) * 100}%`}
                  cy={`${100 - (point.temperature / 30) * 100}%`}
                  r="3"
                  fill="#ea580c"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </svg>
            <div className="absolute bottom-2 left-2 text-xs lg:text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
              Range: 15-30°C
            </div>
          </div>
        </div>

        {/* Salinity Chart */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <Droplets className="w-5 h-5 lg:w-6 lg:h-6 text-teal-500" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800">Salinity Distribution</h3>
          </div>
          
          <div className="relative h-48 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-teal-25 rounded-lg"></div>
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="salinityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0f766e" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              {/* Salinity bars */}
              {Array.from({ length: 12 }, (_, i) => (
                <rect
                  key={i}
                  x={`${(i / 12) * 100}%`}
                  y={`${60 + Math.random() * 30}%`}
                  width="6%"
                  height={`${20 + Math.random() * 20}%`}
                  fill="url(#salinityGradient)"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </svg>
            <div className="absolute bottom-2 left-2 text-xs lg:text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
              PSU: 33.5-35.5
            </div>
          </div>
        </div>
      </div>

      {/* Ocean Map - Full Width Responsive */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 lg:mb-6 gap-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
            <h3 className="text-lg lg:text-xl font-bold text-gray-800">Global ARGO Float Network</h3>
          </div>
          <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-b from-sky-100 to-blue-200 rounded-lg lg:rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,10 Q25,0 50,10 T100,10" stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
          </div>
          
          {/* Responsive float positions */}
          {Array.from({ length: window.innerWidth < 768 ? 25 : 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-pulse shadow-lg cursor-pointer hover:scale-150 transition-transform"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              title={`Float ID: ${1000 + i} | Depth: ${Math.floor(Math.random() * 2000)}m`}
            >
              <div className="absolute -inset-1 bg-red-400 rounded-full animate-ping opacity-75"></div>
            </div>
          ))}
          
          <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-lg">
            <p className="text-xs lg:text-sm font-medium text-gray-800">Live ARGO Float Positions</p>
            <p className="text-xs text-gray-600">Red dots represent active floats</p>
          </div>
          
          <div className="absolute top-2 lg:top-4 right-2 lg:right-4 bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-lg">
            <div className="flex items-center gap-2 text-xs lg:text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Active Floats: {window.innerWidth < 768 ? 25 : 50}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section - Responsive Cards */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
          <h3 className="text-lg lg:text-xl font-bold text-gray-800">AI-Generated Ocean Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 text-sm lg:text-base">🌊 Ocean Heat Wave Alert</h4>
            <p className="text-green-700 text-xs lg:text-sm">Unusual warming detected in North Pacific. Surface temperatures 2-3°C above seasonal average.</p>
            <div className="mt-2 text-xs text-green-600">Confidence: 94%</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 text-sm lg:text-base">🧂 Salinity Anomaly</h4>
            <p className="text-blue-700 text-xs lg:text-sm">Higher salinity levels in Arabian Sea subsurface waters due to reduced monsoon input.</p>
            <div className="mt-2 text-xs text-blue-600">Trend: Increasing</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200 lg:col-span-2 xl:col-span-1">
            <h4 className="font-semibold text-purple-800 mb-2 text-sm lg:text-base">📈 Deep Water Formation</h4>
            <p className="text-purple-700 text-xs lg:text-sm">Active convection in Labrador Sea contributing to global circulation patterns.</p>
            <div className="mt-2 text-xs text-purple-600">Impact: Global</div>
          </div>
        </div>
      </div>
    </div>
  );
};