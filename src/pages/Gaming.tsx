
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Gaming = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Gaming</h1>
        <VideoGrid category="gaming" />
      </div>
    </Layout>
  );
};

export default Gaming;
