import React from 'react';
import { Link } from 'react-router-dom';

interface MagazineCardProps {
  title: string;
  coverImageUrl: string;
  route: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ title, coverImageUrl, route }) => {
  return (
    <Link
      to={route}
      className="bg-[#EAD1A9] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 flex flex-col cursor-pointer group"
    >
      <div className="w-full aspect-[3/4] overflow-hidden relative">
        <img
          src={coverImageUrl}
          alt={`Revista ${title}`}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      <div className="px-4 py-3 flex-grow flex items-center justify-center">
        <span className="block text-[#111C85] text-md font-bold leading-snug text-center line-clamp-2">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default MagazineCard;
