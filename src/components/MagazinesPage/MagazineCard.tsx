import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MagazineCardProps {
  title: string;
  coverImageUrl: string;
  route: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ title, coverImageUrl, route }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={route}
      className="rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 flex flex-col cursor-pointer group relative"
    >
      <div className="w-full aspect-[2/3] overflow-hidden relative">
        {/* Placeholder fijo */}
        <img
          src="/magazine_placeholder.jpg"
          alt="Placeholder"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Imagen real */}
        <img
          src={coverImageUrl}
          loading="lazy"
          alt={`Revista ${title}`}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay azul */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/90 via-blue-800/20 to-blue-800/0 transition-opacity duration-500 group-hover:opacity-0">
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex justify-center">
            <span className="text-white text-lg font-bold text-center leading-tight">
              {title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MagazineCard;
