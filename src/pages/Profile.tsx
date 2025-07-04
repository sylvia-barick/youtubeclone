
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoGrid from '@/components/VideoGrid';
import { Settings, Bell, Shield, HelpCircle } from 'lucide-react';

const Profile = () => {
  return (
    <Layout>
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">JD</span>
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-gray-400 mb-2">@johndoe • 2.5M subscribers</p>
            <p className="text-gray-300 max-w-md">
              Welcome to my channel! I create content about technology, programming, and digital lifestyle. 
              Subscribe for weekly videos!
            </p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">2.5M</div>
            <div className="text-gray-400">Subscribers</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">156</div>
            <div className="text-gray-400">Videos</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">45M</div>
            <div className="text-gray-400">Views</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">3 years</div>
            <div className="text-gray-400">On YouTube</div>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="videos" className="text-white data-[state=active]:bg-gray-700">Videos</TabsTrigger>
            <TabsTrigger value="playlists" className="text-white data-[state=active]:bg-gray-700">Playlists</TabsTrigger>
            <TabsTrigger value="about" className="text-white data-[state=active]:bg-gray-700">About</TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-gray-700">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-6">
            <VideoGrid />
          </TabsContent>

          <TabsContent value="playlists" className="mt-6">
            <div className="text-white text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No playlists yet</h3>
              <p className="text-gray-400">Create your first playlist to organize your videos</p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">Create Playlist</Button>
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white text-xl font-semibold mb-4">About</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>
                    Passionate content creator focusing on technology, programming tutorials, 
                    and digital lifestyle content. Join me on this journey of learning and growth!
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Details</h4>
                  <p>Location: San Francisco, CA</p>
                  <p>Joined: January 15, 2021</p>
                  <p>Total views: 45,234,567</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Links</h4>
                  <p>Website: johndoe.dev</p>
                  <p>Twitter: @johndoe</p>
                  <p>Instagram: @johndoe_official</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white text-xl font-semibold mb-6">Account Settings</h3>
              <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                  <Settings className="mr-3 h-5 w-5" />
                  General Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                  <Bell className="mr-3 h-5 w-5" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                  <Shield className="mr-3 h-5 w-5" />
                  Privacy & Security
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                  <HelpCircle className="mr-3 h-5 w-5" />
                  Help & Support
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
