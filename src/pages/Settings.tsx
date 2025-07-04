
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { User, Bell, Shield, Eye, Download, Trash2, Globe, Moon, Volume2 } from 'lucide-react';
import { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);

  const handleAccountSettings = () => {
    alert('Account settings: Manage your personal information, email, and password');
  };

  const handleNotificationSettings = () => {
    alert('Notification settings: Choose what notifications you want to receive');
  };

  const handlePrivacySettings = () => {
    alert('Privacy settings: Control who can see your activity and information');
  };

  const handleViewingData = () => {
    alert('Viewing data: See your watch history, search history, and recommendations');
  };

  const handleDownloadData = () => {
    alert('Download your data: Get a copy of all your YouTube data');
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion process initiated');
    }
  };

  const handleLanguageSettings = () => {
    alert('Language settings: Change your language and location preferences');
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8">Settings</h1>
        
        <div className="grid gap-6">
          {/* Account Settings */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="h-5 w-5" />
                Account
              </CardTitle>
              <CardDescription>Manage your account information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                onClick={handleAccountSettings}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <User className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Control your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Enable notifications</span>
                <Switch 
                  checked={notifications} 
                  onCheckedChange={setNotifications}
                />
              </div>
              <Button 
                variant="outline" 
                onClick={handleNotificationSettings}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Control your privacy and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                onClick={handlePrivacySettings}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <Shield className="h-4 w-4 mr-2" />
                Privacy Settings
              </Button>
              <Button 
                variant="outline" 
                onClick={handleViewingData}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Your Data
              </Button>
            </CardContent>
          </Card>

          {/* Playback Settings */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Playback
              </CardTitle>
              <CardDescription>Control video playback preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Autoplay next video</span>
                <Switch 
                  checked={autoplay} 
                  onCheckedChange={setAutoplay}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Play sound effects</span>
                <Switch 
                  checked={sound} 
                  onCheckedChange={setSound}
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Appearance
              </CardTitle>
              <CardDescription>Customize the look and feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Dark mode</span>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                />
              </div>
            </CardContent>
          </Card>

          {/* Language & Location */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Location
              </CardTitle>
              <CardDescription>Set your language and regional preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                onClick={handleLanguageSettings}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <Globe className="h-4 w-4 mr-2" />
                Language Settings
              </Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Download className="h-5 w-5" />
                Data Management
              </CardTitle>
              <CardDescription>Download or delete your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                onClick={handleDownloadData}
                className="w-full justify-start text-white border-gray-600 hover:bg-gray-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Your Data
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteAccount}
                className="w-full justify-start"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
