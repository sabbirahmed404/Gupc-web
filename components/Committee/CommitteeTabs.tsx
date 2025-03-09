import React from 'react';

interface CommitteeTabsProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const CommitteeTabs = ({ activeYear, onYearChange }: CommitteeTabsProps) => {
  const years = ['2025', '2024'];

  return (
    <div className="flex justify-center relative z-10">
      <div className="inline-flex rounded-lg border border-gray-300 bg-black/30 p-1 relative z-10">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`px-6 py-3 text-base font-medium rounded-md transition-all duration-200 relative z-10 ${
              activeYear === year
                ? 'bg-blue-600 text-white'
                : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommitteeTabs; 