import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
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
      
      {/* Background image that spans the entire top section */}
      <div className="relative bg-fixed bg-center bg-cover custom-img" style={{ marginTop: 0 }}>
        {/* Hero Section with more space for the heading */}
        <div className="flex items-center justify-center h-[30vh] flex-col" style={{ paddingTop: '200px' }}>
          {/* Dark overlay only on the top part */}
          <div className="absolute inset-0 bg-black/70 z-[1]" />
          <div className="relative p-5 text-white z-[3] flex flex-col items-center space-y-3" style={{ marginTop: '60px' }}>
            <h1 className="text-5xl font-bold text-center">Our Committee</h1>
            <p className="text-xl text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Meet the dedicated team behind GUPC
            </p>
          </div>
        </div>
        
        {/* Middle section with tabs centered - added 2px margin-top */}
        <div className="relative pb-16 z-[1] flex justify-center" style={{ marginTop: '90px' }}>
          {/* Year tabs centered with semi-transparent background */}
          <div className="relative z-[3] bg-black/30 inline-block mx-auto p-1 rounded-lg mb-8">
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