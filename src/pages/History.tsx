
import Layout from '@/components/Layout';
import VideoCard from '@/components/VideoCard';
import { Button } from '@/components/ui/button';
import { Search, Trash2 } from 'lucide-react';
import { allVideos } from '@/data/videos';
import { useState } from 'react';

const History = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const watchedVideos = allVideos.slice(0, 12);

  const handleSearchHistory = () => {
    const query = prompt('Search your watch history:');
    if (query) {
      setSearchQuery(query);
      alert(`Searching for: ${query}`);
    }
  };

  const handleClearHistory = () => {
    if (confirm('This will delete your watch history from this browser and any devices where you\'re signed in. You can\'t undo this.')) {
      alert('Watch history cleared!');
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Watch History</h1>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleSearchHistory}
              className="text-white border-gray-600 hover:bg-gray-700"
            >
              <Search className="h-4 w-4 mr-2" />
              Search watch history
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClearHistory}
              className="text-white border-gray-600 hover:bg-gray-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear all watch history
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-400">Today</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {watchedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default History;
