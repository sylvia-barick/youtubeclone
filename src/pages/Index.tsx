
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import CategoryTabs from '@/components/CategoryTabs';
import VideoGrid from '@/components/VideoGrid';

const Index = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('search');
    setSearchQuery(query || '');
  }, [searchParams]);

  return (
    <Layout onSearch={setSearchQuery}>
      {!searchQuery && <CategoryTabs />}
      <div className="p-6">
        {searchQuery && (
          <div className="mb-6">
            <h1 className="text-white text-2xl font-bold">Search results for "{searchQuery}"</h1>
            <p className="text-gray-400">About {Math.floor(Math.random() * 1000000)} results</p>
          </div>
        )}
        <VideoGrid searchQuery={searchQuery} />
      </div>
    </Layout>
  );
};

export default Index;
