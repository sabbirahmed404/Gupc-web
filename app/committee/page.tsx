'use client';

import React, { useState } from 'react';
import CommitteeSection from '../../components/Committee/CommitteeSection';
import CommitteeTabs from '../../components/Committee/CommitteeTabs';

export default function Committee() {
  const [activeYear, setActiveYear] = useState('2025');

  return (
    <div className="pt-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Our Committee</h1>
        <CommitteeTabs activeYear={activeYear} onYearChange={setActiveYear} />
        <CommitteeSection activeYear={activeYear} />
      </div>
    </div>
  );
} 