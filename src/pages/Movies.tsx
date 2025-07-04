
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Movies = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Movies</h1>
        <VideoGrid category="movies" />
      </div>
    </Layout>
  );
};

export default Movies;
