import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Palette,
  Shield,
  Download,
  Key,
  Save,
  RefreshCw,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'preferences', name: 'Preferences', icon: Palette },
    { id: 'api', name: 'API Access', icon: Key },
    { id: 'data', name: 'Data Export', icon: Download },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Profile Information</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={user?.user_metadata?.name || ''}
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  value={user?.user_metadata?.organization || ''}
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  value={user?.user_metadata?.userRole || ''}
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors font-medium"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div>
                  <div className="font-medium text-gray-800 capitalize">
                    Email Alerts
                  </div>
                  <div className="text-sm text-gray-600">
                    Receive email notifications for important updates
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div>
                  <div className="font-medium text-gray-800 capitalize">
                    Data Updates
                  </div>
                  <div className="text-sm text-gray-600">
                    Get notified when new ARGO data is available
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div>
                  <div className="font-medium text-gray-800 capitalize">
                    Weekly Reports
                  </div>
                  <div className="text-sm text-gray-600">
                    Weekly summary of ocean data insights
                  </div>
                </div>
                <input type="checkbox" checked readOnly />
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Application Preferences</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <input
                  type="text"
                  value="Light"
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <input
                  type="text"
                  value="English"
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <input
                  type="text"
                  value="UTC"
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Region</label>
                <input
                  type="text"
                  value="Global Ocean"
                  readOnly
                  className="w-full p-3 border border-blue-200 rounded-xl bg-gray-100"
                />
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">API Access</h3>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value="fc_1234567890abcdef"
                      readOnly
                      className="flex-1 p-3 border border-blue-200 rounded-xl bg-gray-50"
                    />
                    <button className="bg-blue-500 text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition-colors">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rate Limit</label>
                  <input
                    type="text"
                    value="1000/hour"
                    readOnly
                    className="w-full p-3 border border-blue-200 rounded-xl bg-gray-50"
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Last used: 2025-01-15</p>
                <p className="mt-2">Keep your API key secure and do not share it publicly.</p>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Data Export</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h4 className="font-bold text-gray-800 mb-4">Export Your Data</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Download your query history, saved datasets, and personal preferences.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h4 className="font-bold text-gray-800 mb-4">Data Retention</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Configure how long your data is stored on our servers.
                </p>
                <input
                  type="text"
                  value="90 days"
                  readOnly
                  className="w-full p-3 border border-orange-200 rounded-xl bg-gray-100"
                />
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Security Settings</h3>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h4 className="font-bold text-gray-800 mb-4">Change Password</h4>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current password"
                    className="w-full p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-100"
                    readOnly
                  />
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-100"
                    readOnly
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-100"
                    readOnly
                  />
                  <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors" disabled>
                    Update Password
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-4">Two-Factor Authentication</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Add an extra layer of security to your account.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors" disabled>
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-gray-500 to-slate-500 p-3 rounded-xl">
              <SettingsIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Settings</h1>
              <p className="text-gray-600">Manage your account and application preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-blue-100">
              {renderTabContent()}
              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-end gap-4">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium"
                    disabled
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;