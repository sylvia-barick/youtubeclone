
import VideoCard from './VideoCard';
import { allVideos, getVideosByCategory, searchVideos } from '@/data/videos';

interface VideoGridProps {
  category?: string;
  searchQuery?: string;
}

const VideoGrid = ({ category = 'all', searchQuery }: VideoGridProps) => {
  let filteredVideos;
  
  if (searchQuery) {
    filteredVideos = searchVideos(searchQuery);
  } else {
    filteredVideos = getVideosByCategory(category);
  }

  if (filteredVideos.length === 0) {
    return (
      <div className="text-white text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No videos found</h3>
        <p className="text-gray-400">
          {searchQuery ? `No results for "${searchQuery}"` : 'No videos available in this category'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
