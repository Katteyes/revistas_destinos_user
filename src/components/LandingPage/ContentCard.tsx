import React from 'react';
import { Link } from 'react-router-dom';
import {CircleUser, Clock} from 'lucide-react';

interface ContentCardProps {
  title: string;
  main_image_url: string;
  category: string;
  author: string;
  publication_date: string;
  route: string;
}

function timeSince(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: 'año', seconds: 31536000 },
    { label: 'mes', seconds: 2592000 },
    { label: 'semana', seconds: 604800 },
    { label: 'día', seconds: 86400 },
    { label: 'hora', seconds: 3600 },
    { label: 'minuto', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''}`;
    }
  }
  return 'Hace unos segundos';
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  main_image_url,
  category,
  author,
  publication_date,
  route,
}) => {
  return (
    <Link
      to={route}
      className="bg-[#EAD1A9] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-103 duration-300 flex flex-col group cursor-pointer no-underline"
    >
      <div className="w-full aspect-[16/9] overflow-hidden rounded-t-3xl relative">
        <img
          src={main_image_url}
          alt={`Contenido: ${title}`}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

        <div className="absolute bottom-3 left-3">
          <span className="bg-[#2F3B5C] bg-opacity-80 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase drop-shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="px-6 py-4 flex-grow flex">
        <span className="block text-[#111C85] text-md sm:text-md lg:text-xl font-semibold leading-snug line-clamp-3 text-left w-full transition-colors duration-200 hover:text-[#1726b2]">
          {title}
        </span>
      </div>

      <div className="px-4 pb-4 flex justify-between items-center text-xs font-semibold text-gray-600">
        <div className="flex items-center gap-1">
          <CircleUser className="w-5"/>
          <p>{author}</p>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <Clock className="w-5"/>
          <span>{timeSince(publication_date)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
