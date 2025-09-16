import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Globe, 
  Database, 
  Palette,
  Shield,
  Download,
  Key,
  Save,
  RefreshCw
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      name: 'Dr. Ocean Explorer',
      email: 'explorer@floatchat.org',
      organization: 'Marine Research Institute',
      role: 'Oceanographer'
    },
    notifications: {
      emailAlerts: true,
      dataUpdates: true,
      systemMaintenance: false,
      weeklyReports: true
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC',
      defaultRegion: 'global'
    },
    api: {
      apiKey: 'fc_1234567890abcdef',
      rateLimit: '1000/hour',
      lastUsed: '2025-01-15'
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'preferences', name: 'Preferences', icon: Palette },
    { id: 'api', name: 'API Access', icon: Key },
    { id: 'data', name: 'Data Export', icon: Download },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings);
  };

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
                  value={settings.profile.name}
                  onChange={(e) => setSettings({
                    ...settings,
                    profile: { ...settings.profile, name: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.profile.email}
                  onChange={(e) => setSettings({
                    ...settings,
                    profile: { ...settings.profile, email: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  value={settings.profile.organization}
                  onChange={(e) => setSettings({
                    ...settings,
                    profile: { ...settings.profile, organization: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={settings.profile.role}
                  onChange={(e) => setSettings({
                    ...settings,
                    profile: { ...settings.profile, role: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="Oceanographer">Oceanographer</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Student">Student</option>
                  <option value="Educator">Educator</option>
                  <option value="Policymaker">Policymaker</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Notification Preferences</h3>
            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div>
                    <div className="font-medium text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {key === 'emailAlerts' && 'Receive email notifications for important updates'}
                      {key === 'dataUpdates' && 'Get notified when new ARGO data is available'}
                      {key === 'systemMaintenance' && 'Alerts about system maintenance and downtime'}
                      {key === 'weeklyReports' && 'Weekly summary of ocean data insights'}
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, [key]: e.target.checked }
                      })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
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
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, theme: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, language: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, timezone: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time</option>
                  <option value="PST">Pacific Time</option>
                  <option value="GMT">Greenwich Mean Time</option>
                  <option value="JST">Japan Standard Time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Region</label>
                <select
                  value={settings.preferences.defaultRegion}
                  onChange={(e) => setSettings({
                    ...settings,
                    preferences: { ...settings.preferences, defaultRegion: e.target.value }
                  })}
                  className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="global">Global Ocean</option>
                  <option value="atlantic">Atlantic Ocean</option>
                  <option value="pacific">Pacific Ocean</option>
                  <option value="indian">Indian Ocean</option>
                  <option value="arctic">Arctic Ocean</option>
                </select>
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
                      value={settings.api.apiKey}
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
                    value={settings.api.rateLimit}
                    readOnly
                    className="w-full p-3 border border-blue-200 rounded-xl bg-gray-50"
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Last used: {settings.api.lastUsed}</p>
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
                <select className="w-full p-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-100">
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="365">1 year</option>
                  <option value="forever">Forever</option>
                </select>
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
                  />
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-100"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-100"
                  />
                  <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-4">Two-Factor Authentication</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Add an extra layer of security to your account.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors">
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
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium"
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