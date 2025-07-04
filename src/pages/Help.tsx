
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle, MessageSquare, Shield } from 'lucide-react';

const Help = () => {
  const helpTopics = [
    { title: 'Upload videos', description: 'Learn how to upload and manage your videos' },
    { title: 'Account & settings', description: 'Manage your account preferences and privacy' },
    { title: 'Monetization', description: 'Information about earning money from your content' },
    { title: 'Copyright', description: 'Understanding copyright and Content ID' },
    { title: 'Community guidelines', description: 'Learn about our community standards' },
    { title: 'Troubleshooting', description: 'Fix common issues and problems' },
  ];

  return (
    <Layout>
      <div className="p-6 max-w-6xl">
        <h1 className="text-white text-3xl font-bold mb-8">YouTube Help</h1>
        
        {/* Search Help */}
        <div className="mb-8">
          <div className="flex max-w-2xl">
            <div className="relative flex-1">
              <Input
                placeholder="Describe your issue"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-r-none"
              />
            </div>
            <Button className="bg-gray-700 hover:bg-gray-600 border border-gray-600 border-l-0 rounded-l-none px-6">
              <Search className="h-4 w-4 text-gray-300" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <MessageSquare className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Contact us</h3>
            <p className="text-gray-400 text-sm mb-4">Get help from our support team</p>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
              Contact Support
            </Button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <HelpCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Community</h3>
            <p className="text-gray-400 text-sm mb-4">Get help from other creators</p>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
              Visit Community
            </Button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Safety</h3>
            <p className="text-gray-400 text-sm mb-4">Report content or harassment</p>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
              Safety Center
            </Button>
          </div>
        </div>

        {/* Help Topics */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-6">Popular help topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpTopics.map((topic, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 cursor-pointer transition-colors">
                <h3 className="text-white font-medium mb-1">{topic.title}</h3>
                <p className="text-gray-400 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
