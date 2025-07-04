
import Layout from '@/components/Layout';
import VideoCard from '@/components/VideoCard';
import { Button } from '@/components/ui/button';
import { allVideos } from '@/data/videos';

const History = () => {
  // Show a random selection of videos as "watched"
  const watchedVideos = allVideos.slice(0, 12);

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Watch History</h1>
          <div className="flex gap-3">
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
              Search watch history
            </Button>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
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
