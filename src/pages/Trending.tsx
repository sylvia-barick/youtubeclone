
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Trending = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Trending</h1>
        <VideoGrid />
      </div>
    </Layout>
  );
};

export default Trending;
