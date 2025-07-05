import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoGrid from '@/components/VideoGrid';
import { Settings, Bell, Shield, HelpCircle, Share, Edit, User, Search, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userVideos = [
    {
      id: 'user1',
      title: 'My First YouTube Video - Channel Introduction',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop',
      channel: 'The Power of 3',
      views: '1.2K views',
      timestamp: '2 days ago',
      duration: '5:23',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'personal'
    },
    {
      id: 'user2',
      title: 'Coding Tutorial: Building a React App',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=640&h=360&fit=crop',
      channel: 'The Power of 3',
      views: '856 views',
      timestamp: '1 week ago',
      duration: '28:15',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'tech'
    },
    {
      id: 'user3',
      title: 'Daily Vlog: A Day in My Life as a Developer',
      thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=640&h=360&fit=crop',
      channel: 'The Power of 3',
      views: '2.1K views',
      timestamp: '2 weeks ago',
      duration: '12:45',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'vlog'
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Power of 3 - YouTube Channel',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Channel link copied to clipboard!');
    }
  };

  const handleCustomizeChannel = () => {
    navigate('/settings');
  };

  const handleSubscribe = () => {
    alert('Subscribed to The Power of 3!');
  };

  const handleJoin = () => {
    alert('Joined the channel membership!');
  };

  const handleSearchHistory = () => {
    navigate('/history');
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear all watch history?')) {
      alert('Watch history cleared!');
    }
  };

  const handleCreatePlaylist = () => {
    alert('Create Playlist feature coming soon!');
  };

  const handleCreatePost = () => {
    alert('Create Community Post feature coming soon!');
  };

  const handleSortBy = () => {
    alert('Sort options: Date added (newest), Date added (oldest), Most popular, Date published (newest)');
  };

  return (
    <Layout>
      <div className="p-6">
        {/* Profile Banner */}
        <div 
          className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg h-48 mb-6"
          style={{ 
            backgroundImage: 'url(https://i.postimg.cc/pXV3SDFs/71-ZMi-LBZC6-S-UF1000-1000-QL80.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
          <Button 
            onClick={handleCustomizeChannel}
            className="absolute top-4 right-4 bg-black text-white hover:bg-gray-900"
          >
            <Edit className="h-4 w-4 mr-2" />
            Customize channel
          </Button>
        </div>

        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 border-gray-700 overflow-hidden">
            <img 
              src="https://i.postimg.cc/xdcyWdfJ/q-JHcy-Hgm-400x400.jpg" 
              alt="The Power of 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-white text-4xl font-bold">The Power of 3</h1>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleShare}
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            <div className="flex items-center gap-4 text-gray-400 mb-3">
              <span>@Three</span>
              <span>•</span>
              <span>2.5K subscribers</span>
              <span>•</span>
              <span>3 videos</span>
            </div>
            <p className="text-gray-300 max-w-2xl mb-4">
              Welcome to my channel! I'm a full-stack developer who loves to share coding tutorials, 
              daily vlogs, and tech insights. Subscribe for weekly content about programming, 
              web development, and my journey in tech!
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700"
              >
                Subscribe
              </Button>
              <Button 
                variant="outline" 
                onClick={handleJoin}
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">2.5K</div>
            <div className="text-gray-400 text-sm">Subscribers</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-gray-400 text-sm">Videos</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">4.2K</div>
            <div className="text-gray-400 text-sm">Total views</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">30</div>
            <div className="text-gray-400 text-sm">Days active</div>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-800">
            <TabsTrigger value="home" className="text-white data-[state=active]:bg-gray-700">Home</TabsTrigger>
            <TabsTrigger value="videos" className="text-white data-[state=active]:bg-gray-700">Videos</TabsTrigger>
            <TabsTrigger value="playlists" className="text-white data-[state=active]:bg-gray-700">Playlists</TabsTrigger>
            <TabsTrigger value="community" className="text-white data-[state=active]:bg-gray-700">Community</TabsTrigger>
            <TabsTrigger value="about" className="text-white data-[state=active]:bg-gray-700">About</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">Featured video</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <img src={userVideos[0].thumbnail} alt={userVideos[0].title} className="w-full aspect-video object-cover rounded mb-3" />
                    <h4 className="text-white font-medium mb-2">{userVideos[0].title}</h4>
                    <p className="text-gray-400 text-sm">{userVideos[0].views} • {userVideos[0].timestamp}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">Popular uploads</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userVideos.map((video) => (
                    <div key={video.id} className="bg-gray-800 rounded-lg p-4">
                      <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover rounded mb-3" />
                      <h4 className="text-white font-medium mb-1 line-clamp-2">{video.title}</h4>
                      <p className="text-gray-400 text-sm">{video.views} • {video.timestamp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-semibold">Uploads</h3>
              <Button 
                variant="outline" 
                onClick={handleSortBy}
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                Sort by
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-3">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="text-white font-medium line-clamp-2 mb-1">{video.title}</h4>
                  <p className="text-gray-400 text-sm">{video.views} • {video.timestamp}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playlists" className="mt-6">
            <div className="text-white text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No playlists yet</h3>
              <p className="text-gray-400 mb-4">Create your first playlist to organize your videos</p>
              <Button 
                onClick={handleCreatePlaylist}
                className="bg-red-600 hover:bg-red-700"
              >
                Create Playlist
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="text-white text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No community posts yet</h3>
              <p className="text-gray-400 mb-4">Share updates with your subscribers</p>
              <Button 
                onClick={handleCreatePost}
                className="bg-red-600 hover:bg-red-700"
              >
                Create Post
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-white text-xl font-semibold mb-4">Description</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Hi! I'm The Power of 3, a passionate full-stack developer with 1+ years of experience in web development. 
                    I love creating content about programming, sharing coding tutorials, and documenting my journey in tech.
                  </p>
                  <p>
                    On this channel, you'll find:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>Coding tutorials and tips</li>
                    <li>Tech career advice</li>
                    <li>Daily vlogs and behind-the-scenes</li>
                    <li>Project walkthroughs</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Stats</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>Joined: January 15, 2025</p>
                    <p>Total views: 4,267</p>
                    <p>Location: San Francisco, CA</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Links</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-blue-400 hover:text-blue-300">🌐 The Power of 3.dev</a>
                    <a href="#" className="block text-blue-400 hover:text-blue-300">🐦 @The Power of 3</a>
                    <a href="#" className="block text-blue-400 hover:text-blue-300">📷 @The Power of 3</a>
                    <a href="#" className="block text-blue-400 hover:text-blue-300">💼 LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;