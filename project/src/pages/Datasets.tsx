import React, { useState } from 'react';
import { 
  Database, 
  Download, 
  Eye, 
  Calendar,
  MapPin,
  Thermometer,
  Droplets,
  Activity,
  Zap,
  FileText,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';

export const Datasets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const datasets = [
    {
      id: 'argo-core',
      name: 'ARGO Core Temperature & Salinity',
      description: 'Global ocean temperature and salinity profiles from autonomous floats',
      category: 'core',
      size: '2.4 TB',
      records: '2,847,392',
      lastUpdate: '2025-01-15',
      format: ['NetCDF', 'CSV', 'JSON'],
      icon: Thermometer,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 'argo-bgc',
      name: 'ARGO Biogeochemical Data',
      description: 'Oxygen, pH, nitrate, chlorophyll, and other biogeochemical parameters',
      category: 'biogeochemical',
      size: '847 GB',
      records: '1,234,567',
      lastUpdate: '2025-01-14',
      format: ['NetCDF', 'CSV'],
      icon: Activity,
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      id: 'argo-deep',
      name: 'Deep ARGO (4000m+)',
      description: 'Extended depth profiles reaching abyssal ocean depths',
      category: 'deep',
      size: '156 GB',
      records: '89,432',
      lastUpdate: '2025-01-13',
      format: ['NetCDF', 'HDF5'],
      icon: Droplets,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      id: 'argo-realtime',
      name: 'Real-time ARGO Stream',
      description: 'Live data stream from active floats with near real-time updates',
      category: 'realtime',
      size: 'Live Stream',
      records: '~400/day',
      lastUpdate: 'Live',
      format: ['JSON', 'WebSocket'],
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 'argo-trajectories',
      name: 'Float Trajectory Data',
      description: 'GPS positions and drift patterns of ARGO floats over time',
      category: 'trajectory',
      size: '89 GB',
      records: '4,127 floats',
      lastUpdate: '2025-01-15',
      format: ['CSV', 'GeoJSON', 'KML'],
      icon: MapPin,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50'
    },
    {
      id: 'argo-metadata',
      name: 'Float Metadata & Documentation',
      description: 'Technical specifications, calibration data, and deployment information',
      category: 'metadata',
      size: '2.1 GB',
      records: '15,847 floats',
      lastUpdate: '2025-01-12',
      format: ['XML', 'JSON', 'PDF'],
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Datasets', count: datasets.length },
    { id: 'core', name: 'Core Data', count: datasets.filter(d => d.category === 'core').length },
    { id: 'biogeochemical', name: 'Biogeochemical', count: datasets.filter(d => d.category === 'biogeochemical').length },
    { id: 'deep', name: 'Deep Ocean', count: datasets.filter(d => d.category === 'deep').length },
    { id: 'realtime', name: 'Real-time', count: datasets.filter(d => d.category === 'realtime').length },
    { id: 'trajectory', name: 'Trajectories', count: datasets.filter(d => d.category === 'trajectory').length },
    { id: 'metadata', name: 'Metadata', count: datasets.filter(d => d.category === 'metadata').length }
  ];

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dataset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-xl">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Ocean Datasets</h1>
              <p className="text-gray-600">Explore and download ARGO ocean observation data</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search datasets..."
                className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-sm lg:text-base text-gray-600">Dataset Collections</div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
            <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">3.5TB</div>
            <div className="text-sm lg:text-base text-gray-600">Total Data Size</div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
            <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">4.2M</div>
            <div className="text-sm lg:text-base text-gray-600">Ocean Profiles</div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-blue-100">
            <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm lg:text-base text-gray-600">Live Updates</div>
          </div>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDatasets.map((dataset) => {
            const Icon = dataset.icon;
            return (
              <div key={dataset.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                {/* Header */}
                <div className={`bg-gradient-to-r ${dataset.bgColor} p-6 border-b border-blue-100`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${dataset.color} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{dataset.lastUpdate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dataset.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dataset.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Data Size</div>
                      <div className="font-bold text-gray-800">{dataset.size}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Records</div>
                      <div className="font-bold text-gray-800">{dataset.records}</div>
                    </div>
                  </div>

                  {/* Formats */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Available Formats</div>
                    <div className="flex flex-wrap gap-2">
                      {dataset.format.map((format) => (
                        <span key={format} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* API Documentation */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-500" />
            API Access & Documentation
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">REST API Endpoints</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg font-mono">
                  <span className="text-green-600 font-bold">GET</span> /api/v1/floats
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono">
                  <span className="text-blue-600 font-bold">GET</span> /api/v1/profiles/{'{float_id}'}
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono">
                  <span className="text-purple-600 font-bold">GET</span> /api/v1/data/temperature
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono">
                  <span className="text-orange-600 font-bold">GET</span> /api/v1/data/salinity
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Start</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                <div className="mb-2"># Get latest float data</div>
                <div className="text-white">curl -X GET \</div>
                <div className="text-white ml-4">"https://api.floatchat.org/v1/floats" \</div>
                <div className="text-white ml-4">-H "Authorization: Bearer YOUR_API_KEY"</div>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                  Get API Key
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                  View Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};