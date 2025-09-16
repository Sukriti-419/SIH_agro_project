import React, { useState } from 'react';
import { 
  Map, 
  Search, 
  Filter, 
  Download, 
  Calendar,
  MapPin,
  Thermometer,
  Droplets,
  Activity,
  Globe2,
  Layers,
  Settings
} from 'lucide-react';

export const DataExplorer: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState('temperature');
  const [dateRange, setDateRange] = useState('30d');
  const [region, setRegion] = useState('global');
  const [searchQuery, setSearchQuery] = useState('');

  const layers = [
    { id: 'temperature', name: 'Temperature', icon: Thermometer, color: 'text-orange-500' },
    { id: 'salinity', name: 'Salinity', icon: Droplets, color: 'text-teal-500' },
    { id: 'floats', name: 'Float Positions', icon: MapPin, color: 'text-blue-500' },
    { id: 'currents', name: 'Ocean Currents', icon: Activity, color: 'text-purple-500' }
  ];

  const regions = [
    { id: 'global', name: 'Global Ocean' },
    { id: 'atlantic', name: 'Atlantic Ocean' },
    { id: 'pacific', name: 'Pacific Ocean' },
    { id: 'indian', name: 'Indian Ocean' },
    { id: 'arctic', name: 'Arctic Ocean' },
    { id: 'southern', name: 'Southern Ocean' }
  ];

  const generateFloatData = () => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: `ARGO_${1000 + i}`,
      lat: (Math.random() - 0.5) * 180,
      lon: (Math.random() - 0.5) * 360,
      temperature: 15 + Math.random() * 15,
      salinity: 34 + Math.random() * 2,
      depth: Math.random() * 2000,
      lastUpdate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
    }));
  };

  const floatData = generateFloatData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Data Explorer</h1>
                <p className="text-gray-600">Interactive ocean data visualization and analysis</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors">
                <Download className="w-4 h-4" />
                Export Data
              </button>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" />
                Search
              </h3>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by float ID, region..."
                className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-500" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Last 3 Months</option>
                    <option value="1y">Last Year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100"
                  >
                    {regions.map(r => (
                      <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Layer Control */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" />
                Map Layers
              </h3>
              
              <div className="space-y-2">
                {layers.map(layer => {
                  const Icon = layer.icon;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                        selectedLayer === layer.id
                          ? 'bg-blue-50 border-2 border-blue-200'
                          : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${layer.color}`} />
                      <span className="font-medium text-gray-700">{layer.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Globe2 className="w-6 h-6 text-blue-500" />
                  Interactive Ocean Map
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-b from-sky-100 to-blue-200 rounded-xl overflow-hidden">
                {/* Ocean background with waves */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="oceanWaves" x="0" y="0" width="200" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0,20 Q50,0 100,20 T200,20" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#oceanWaves)"/>
                  </svg>
                </div>

                {/* Float positions */}
                {floatData.map((float, i) => (
                  <div
                    key={float.id}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${((float.lon + 180) / 360) * 100}%`,
                      top: `${((90 - float.lat) / 180) * 100}%`,
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full shadow-lg transform transition-all duration-200 group-hover:scale-150 ${
                      selectedLayer === 'temperature' ? 'bg-orange-500' :
                      selectedLayer === 'salinity' ? 'bg-teal-500' :
                      selectedLayer === 'floats' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}>
                      <div className="absolute -inset-1 rounded-full animate-ping opacity-75 bg-current"></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded-lg p-2 whitespace-nowrap z-10">
                      <div className="font-medium">{float.id}</div>
                      <div>Temp: {float.temperature.toFixed(1)}°C</div>
                      <div>Salinity: {float.salinity.toFixed(1)} PSU</div>
                      <div>Depth: {float.depth.toFixed(0)}m</div>
                    </div>
                  </div>
                ))}

                {/* Map controls */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-800 mb-2">Active Layer</div>
                  <div className={`flex items-center gap-2 text-sm ${
                    layers.find(l => l.id === selectedLayer)?.color || 'text-gray-600'
                  }`}>
                    {React.createElement(layers.find(l => l.id === selectedLayer)?.icon || MapPin, { className: 'w-4 h-4' })}
                    <span>{layers.find(l => l.id === selectedLayer)?.name}</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-sm font-medium text-gray-800 mb-2">Legend</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <span>ARGO Float ({floatData.length} active)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Float Data Table</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Float ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Position</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Temperature</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Salinity</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Depth</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {floatData.slice(0, 10).map((float) => (
                      <tr key={float.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                        <td className="py-3 px-4 font-medium text-blue-600">{float.id}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {float.lat.toFixed(2)}°, {float.lon.toFixed(2)}°
                        </td>
                        <td className="py-3 px-4 text-orange-600 font-medium">
                          {float.temperature.toFixed(1)}°C
                        </td>
                        <td className="py-3 px-4 text-teal-600 font-medium">
                          {float.salinity.toFixed(1)} PSU
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {float.depth.toFixed(0)}m
                        </td>
                        <td className="py-3 px-4 text-gray-500">
                          {float.lastUpdate.toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};