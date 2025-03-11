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
    name: 'Baktiar Alam Bulbul',
    role: 'Faculty Moderator',
    image: '/assets/new/new1.jpg',
    category: 'Moderator',
    year: '2025',
  },
  {
    name: 'Baktiar Alam Bulbul',
    role: 'Faculty Moderator',
    image: '/assets/new/new1.jpg',
    category: 'Moderator',
    year: '2024',
  },
 // {
 //   name: 'Prof. Jane Smith',
 //   role: 'Technical Advisor',
 //   image: '/assets/placeholder.svg',
 //   category: 'Advisor',
 //   year: '2025',
 // },

  {
    name: 'Bob Wilson',
    role: 'Vice President',
    image: '/assets/img-7.jpg',
    category: 'Executive',
    year: '2023',
  },


  {
    name: 'Hadiuzzaman',
    role: 'President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },

  {
    name: 'Md Sabbir Ahmed',
    role: 'General Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Durjoy Saha Dipta',
    role: 'Vice President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Masum Billah',
    role: 'Treasurer',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },

  {
    name: 'Md Naeem',
    role: 'Chief Photography Director',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Hossain Mohammad Mursalin',
    role: 'Photography Director',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Johirul Hoq Akash',
    role: 'Publication Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Jubayer Hossain Jamil',
    role: 'Information Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md. Niamat',
    role: 'Public Relation Officer',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md Sumon Mia (Sharear)',
    role: 'Videography Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Kaniz Fatema Liza',
    role: 'Organizing Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Jahir Raihan Taz',
    role: 'Administrative Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Naim Mridha',
    role: 'Membership Co-ordinator Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md Rasad Ishtiak',
    role: 'Photography Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Suchita Kundu',
    role: 'Exhibition And Competition Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Ahmad Jamil Jarif',
    role: 'Program Co-ordinator',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Muaz Ibn Kamal',
    role: 'Graphics Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2024',
  },
  // 2025 Committee Members
  {
    name: 'MD. Naeem Hossen',
    role: 'President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Md. Rasad Ishtiak',
    role: 'General Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Hossain Mohammad Mursalin',
    role: 'Vice President',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Kaniz Fatema Liza',
    role: 'Treasurer',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Ahmad Jamil',
    role: 'Organizing Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Naim Mridha',
    role: 'Information Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Nasiful Haque Eram',
    role: 'Administrative Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Md Sumon Mia',
    role: 'Publication Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Mehraz Khandakar',
    role: 'Photography Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'MD. Nahiduzzaman',
    role: 'Videography Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Sarna Nandi',
    role: 'Membership Coordinator Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'MD. Mamun Shahriar',
    role: 'Graphics Secretary',
    image: '/assets/placeholder.svg',
    category: 'Executive',
    year: '2025',
  },
];

const MemberCard = ({ name, role, image }: MemberCard) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 mx-auto max-w-[250px]">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center">{name}</h3>
      <p className="text-gray-600 mt-2 text-center">{role}</p>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{category}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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