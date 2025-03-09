import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import NavBar from '../components/NavigationBar/NavBar';
import CommitteeSection from '../components/Committee/CommitteeSection';
import CommitteeTabs from '../components/Committee/CommitteeTabs';
import Footer from '../components/Footer/Footer';

const Committee: NextPage = () => {
  const [activeYear, setActiveYear] = useState('2025');

  return (
    <>
      <Head>
        <title>Committee - GUPC</title>
        <meta
          name="description"
          content="Meet the committee members of Green University Photography Club"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>
      
      <NavBar />
      
      <div className="relative">
        {/* Hero Section - Half Height */}
        <div className="flex items-center justify-center h-[25vh] bg-fixed bg-center bg-cover custom-img">
          {/* Dark overlay - z-index lowered */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />
          <div className="relative p-5 text-white z-[3]">
            <h1 className="text-5xl font-bold text-center">Our Committee</h1>
          </div>
        </div>
        
        {/* Extended Shadow Overlay - z-index lowered */}
        <div className="relative bg-black/70 pb-16 z-[1]">
          {/* Content - raised z-index */}
          <div className="relative z-[3] max-w-[1240px] mx-auto px-4 pt-8">
            <p className="text-xl text-center text-white mb-8">Meet the dedicated team behind GUPC</p>
            {/* Year tabs inside the shadow overlay with higher z-index */}
            <CommitteeTabs activeYear={activeYear} onYearChange={setActiveYear} />
          </div>
        </div>
      </div>

      {/* Committee Content */}
      <div className="max-w-[1240px] mx-auto px-4 mb-12 mt-8">
        <CommitteeSection activeYear={activeYear} />
      </div>
      
      <Footer />
    </>
  );
};

export default Committee; 