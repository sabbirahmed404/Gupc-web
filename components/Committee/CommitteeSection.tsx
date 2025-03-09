import React from 'react';

interface MemberCard {
  name: string;
  role: string;
  image: string;
  category: 'Moderator' | 'Advisor' | 'Executive';
  year: string;
}

const committeeMembers: MemberCard[] = [
  {
    name: 'Dr. John Doe',
    role: 'Faculty Moderator',
    image: '/assets/placeholder.svg',
    category: 'Moderator',
    year: '2025',
  },
  {
    name: 'Prof. Jane Smith',
    role: 'Technical Advisor',
    image: '/assets/placeholder.svg',
    category: 'Advisor',
    year: '2025',
  },
  {
    name: 'Alice Johnson',
    role: 'President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Bob Wilson',
    role: 'Vice President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Charlie Brown',
    role: 'Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Dr. Sarah Connor',
    role: 'Faculty Moderator',
    image: '/assets/placeholder.svg',
    category: 'Moderator',
    year: '2024',
  },
  {
    name: 'Prof. Mike Ross',
    role: 'Technical Advisor',
    image: '/assets/placeholder.svg',
    category: 'Advisor',
    year: '2024',
  }
];

const MemberCard = ({ name, role, image }: MemberCard) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{role}</p>
    </div>
  );
};

interface CommitteeSectionProps {
  activeYear?: string;
}

const CommitteeSection = ({ activeYear = '2025' }: CommitteeSectionProps) => {
  const categories = ['Moderator', 'Advisor', 'Executive'];
  const filteredMembers = committeeMembers.filter(member => member.year === activeYear);

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryMembers = filteredMembers.filter(member => member.category === category);
        if (categoryMembers.length === 0) return null;

        return (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryMembers.map((member, index) => (
                <MemberCard key={`${member.name}-${index}`} {...member} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommitteeSection; 