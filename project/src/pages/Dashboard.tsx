import React, { useState } from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { ResponsiveDashboard } from '../components/ResponsiveDashboard';
import { BarChart3, MessageSquare, Maximize2, Minimize2 } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [chatExpanded, setChatExpanded] = useState(false);

  const handleDataRequest = (query: string) => {
    setCurrentQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Ocean Data Dashboard</h1>
                <p className="text-gray-600">Real-time ARGO float monitoring and analysis</p>
              </div>
            </div>
            
            <button
              onClick={() => setChatExpanded(!chatExpanded)}
              className="lg:hidden flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              {chatExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface - Responsive */}
          <div className={`lg:col-span-1 ${chatExpanded ? 'fixed inset-0 z-50 bg-white lg:relative lg:inset-auto lg:z-auto lg:bg-transparent' : 'hidden lg:block'}`}>
            {chatExpanded && (
              <div className="lg:hidden absolute top-4 right-4 z-10">
                <button
                  onClick={() => setChatExpanded(false)}
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            )}
            <div className={`h-full ${chatExpanded ? 'p-4 lg:p-0' : ''}`}>
              <ChatInterface onDataRequest={handleDataRequest} />
            </div>
          </div>
          
          {/* Dashboard - Responsive */}
          <div className="lg:col-span-2">
            <ResponsiveDashboard currentQuery={currentQuery} />
          </div>
        </div>
      </main>
    </div>
  );
};