import React from 'react';
import { TrendingUp, MapPin, Thermometer, Droplets, Activity, Globe } from 'lucide-react';

interface DashboardProps {
  currentQuery?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentQuery }) => {
  const generateChartData = () => {
    return Array.from({ length: 20 }, (_, i) => ({
      depth: i * 100,
      temperature: 25 - (i * 1.2) + Math.random() * 2,
      salinity: 34 + (i * 0.1) + Math.random() * 0.5
    }));
  };

  const chartData = generateChartData();
  const maxTemp = Math.max(...chartData.map(d => d.temperature));
  const minTemp = Math.min(...chartData.map(d => d.temperature));
  const maxSalinity = Math.max(...chartData.map(d => d.salinity));
  const minSalinity = Math.min(...chartData.map(d => d.salinity));

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Active Floats</p>
              <p className="text-3xl font-bold">4,127</p>
            </div>
            <Globe className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm">Daily Profiles</p>
              <p className="text-3xl font-bold">412</p>
            </div>
            <Activity className="w-8 h-8 text-cyan-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Avg Temperature</p>
              <p className="text-3xl font-bold">18.4°C</p>
            </div>
            <Thermometer className="w-8 h-8 text-orange-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm">Avg Salinity</p>
              <p className="text-3xl font-bold">34.7 PSU</p>
            </div>
            <Droplets className="w-8 h-8 text-teal-200" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temperature Profile Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Thermometer className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-bold text-gray-800">Temperature Profile</h3>
          </div>
          <div className="relative h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-50 rounded-lg"></div>
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <path
                d={`M 0,${250 - ((chartData[0].temperature - minTemp) / (maxTemp - minTemp)) * 240} ${
                  chartData.map((d, i) => 
                    `L ${(i / (chartData.length - 1)) * 100}%,${250 - ((d.temperature - minTemp) / (maxTemp - minTemp)) * 240}`
                  ).join(' ')
                } L 100%,250 L 0,250 Z`}
                fill="url(#tempGradient)"
                className="opacity-60"
              />
              <path
                d={`M 0,${250 - ((chartData[0].temperature - minTemp) / (maxTemp - minTemp)) * 240} ${
                  chartData.map((d, i) => 
                    `L ${(i / (chartData.length - 1)) * 100}%,${250 - ((d.temperature - minTemp) / (maxTemp - minTemp)) * 240}`
                  ).join(' ')
                }`}
                stroke="#ea580c"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-sm"
              />
            </svg>
            <div className="absolute bottom-2 left-2 text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
              Depth: 0-2000m
            </div>
          </div>
        </div>

        {/* Salinity Profile Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Droplets className="w-6 h-6 text-teal-500" />
            <h3 className="text-xl font-bold text-gray-800">Salinity Profile</h3>
          </div>
          <div className="relative h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-teal-50 rounded-lg"></div>
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="salinityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0f766e" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <path
                d={`M 0,${250 - ((chartData[0].salinity - minSalinity) / (maxSalinity - minSalinity)) * 240} ${
                  chartData.map((d, i) => 
                    `L ${(i / (chartData.length - 1)) * 100}%,${250 - ((d.salinity - minSalinity) / (maxSalinity - minSalinity)) * 240}`
                  ).join(' ')
                } L 100%,250 L 0,250 Z`}
                fill="url(#salinityGradient)"
                className="opacity-60"
              />
              <path
                d={`M 0,${250 - ((chartData[0].salinity - minSalinity) / (maxSalinity - minSalinity)) * 240} ${
                  chartData.map((d, i) => 
                    `L ${(i / (chartData.length - 1)) * 100}%,${250 - ((d.salinity - minSalinity) / (maxSalinity - minSalinity)) * 240}`
                  ).join(' ')
                }`}
                stroke="#0f766e"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-sm"
              />
            </svg>
            <div className="absolute bottom-2 left-2 text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
              PSU: 34.0-35.5
            </div>
          </div>
        </div>
      </div>

      {/* Ocean Map Visualization */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-bold text-gray-800">Global ARGO Float Distribution</h3>
          {currentQuery && (
            <span className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Query: {currentQuery}
            </span>
          )}
        </div>
        <div className="relative h-96 bg-gradient-to-b from-sky-100 to-blue-200 rounded-xl overflow-hidden">
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
          
          {/* Simulated float positions */}
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div className="absolute -inset-1 bg-red-400 rounded-full animate-ping opacity-75"></div>
            </div>
          ))}
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-800">Live ARGO Float Positions</p>
            <p className="text-xs text-gray-600">Red dots represent active floats</p>
          </div>
        </div>
      </div>

      {/* Recent Insights */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-green-500" />
          <h3 className="text-xl font-bold text-gray-800">Recent Ocean Insights</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🌊 Ocean Heat Wave Detected</h4>
            <p className="text-green-700 text-sm">Unusual warming pattern observed in the North Pacific. Surface temperatures 2-3°C above seasonal average.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">🧂 Salinity Anomaly - Arabian Sea</h4>
            <p className="text-blue-700 text-sm">Higher than normal salinity levels detected in Arabian Sea subsurface waters, likely due to reduced monsoon freshwater input.</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">📈 Deep Water Formation</h4>
            <p className="text-purple-700 text-sm">Active deep convection events recorded in the Labrador Sea, contributing to global thermohaline circulation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};