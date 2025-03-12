import React from 'react';

interface CommitteeTabsProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const CommitteeTabs = ({ activeYear, onYearChange }: CommitteeTabsProps) => {
  const years = ['2025', '2024', '2023'];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="inline-flex justify-center">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`px-8 py-4 text-base font-medium rounded-md transition-all duration-200 mx-2 ${
              activeYear === year
                ? 'bg-white text-black'
                : 'text-white hover:bg-white hover:text-black'
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