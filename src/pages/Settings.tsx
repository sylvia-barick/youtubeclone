
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  return (
    <Layout>
      <div className="p-6 max-w-4xl">
        <h1 className="text-white text-3xl font-bold mb-8">Settings</h1>
        
        <div className="space-y-8">
          {/* General Settings */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">General</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Dark theme</h3>
                  <p className="text-gray-400 text-sm">Use dark theme across YouTube</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Autoplay</h3>
                  <p className="text-gray-400 text-sm">Autoplay next video</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Privacy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Keep search history</h3>
                  <p className="text-gray-400 text-sm">Save searches to improve recommendations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Keep watch history</h3>
                  <p className="text-gray-400 text-sm">Save videos you watch to improve recommendations</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Account</h2>
            <div className="space-y-4">
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                Manage Google Account
              </Button>
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                Switch Account
              </Button>
              <Button variant="destructive">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
