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
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2023',
  },


  {
    name: 'Hadiuzzaman',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },

  {
    name: 'Md Sabbir Ahmed',
    role: 'General Secretary',
    image: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Durjoy Saha Dipta',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Masum Billah',
    role: 'Treasurer',
    image: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },

  {
    name: 'Md Naeem',
    role: 'Chief Photography Director',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Hossain Mohammad Mursalin',
    role: 'Photography Director',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Johirul Hoq Akash',
    role: 'Publication Secretary',
    image: 'https://plus.unsplash.com/premium_photo-1668675744027-84e3618e9970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Jubayer Hossain Jamil',
    role: 'Information Secretary',
    image: 'https://images.unsplash.com/photo-1445820200644-69f87d946277?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md. Niamat',
    role: 'Public Relation Officer',
    image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md Sumon Mia (Sharear)',
    role: 'Videography Secretary',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Kaniz Fatema Liza',
    role: 'Organizing Secretary',
    image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Jahir Raihan Taz',
    role: 'Administrative Secretary',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Naim Mridha',
    role: 'Membership Co-ordinator Secretary',
    image: 'https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Md Rasad Ishtiak',
    role: 'Photography Secretary',
    image: 'https://plus.unsplash.com/premium_photo-1673296129756-e45408e25250?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Suchita Kundu',
    role: 'Exhibition And Competition Secretary',
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Ahmad Jamil Jarif',
    role: 'Program Co-ordinator',
    image: 'https://images.unsplash.com/photo-1586959140255-aab0163e21cf?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  {
    name: 'Muaz Ibn Kamal',
    role: 'Graphics Secretary',
    image: 'https://plus.unsplash.com/premium_photo-1661895001905-d793f6f38943?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2024',
  },
  // 2025 Committee Members
  {
    name: 'MD. Naeem Hossen',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Md. Rasad Ishtiak',
    role: 'General Secretary',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Hossain Mohammad Mursalin',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Kaniz Fatema Liza',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Ahmad Jamil',
    role: 'Organizing Secretary',
    image: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Naim Mridha',
    role: 'Information Secretary',
    image: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Nasiful Haque Eram',
    role: 'Administrative Secretary',
    image: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Md Sumon Mia',
    role: 'Publication Secretary',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Mehraz Khandakar',
    role: 'Photography Secretary',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'MD. Nahiduzzaman',
    role: 'Videography Secretary',
    image: 'https://plus.unsplash.com/premium_photo-1668675744027-84e3618e9970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'Sarna Nandi',
    role: 'Membership Coordinator Secretary',
    image: 'https://images.unsplash.com/photo-1445820200644-69f87d946277?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Executive',
    year: '2025',
  },
  {
    name: 'MD. Mamun Shahriar',
    role: 'Graphics Secretary',
    image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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