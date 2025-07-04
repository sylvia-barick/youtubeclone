
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Live = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Live</h1>
        <VideoGrid category="live" />
      </div>
    </Layout>
  );
};

export default Live;
