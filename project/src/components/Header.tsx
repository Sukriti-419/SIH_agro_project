import React from 'react';
import { Waves as Wave, Activity, Globe, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Wave className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">FloatChat</h1>
              <p className="text-blue-100 text-sm">AI-Powered Ocean Data Exploration Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-300" />
                <span className="text-sm">System Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Global Coverage</span>
              </div>
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 p-3 rounded-xl transition-all duration-200 backdrop-blur-sm">
              <Settings className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-6">
              <span>🌊 ARGO Network Status: Operational</span>
              <span>📡 Data Updates: Real-time</span>
              <span>🤖 AI Assistant: Active</span>
            </div>
            <div className="text-blue-100">
              Last Update: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};