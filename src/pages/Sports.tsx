
import Layout from '@/components/Layout';
import VideoGrid from '@/components/VideoGrid';

const Sports = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Sports</h1>
        <VideoGrid category="sports" />
      </div>
    </Layout>
  );
};

export default Sports;
