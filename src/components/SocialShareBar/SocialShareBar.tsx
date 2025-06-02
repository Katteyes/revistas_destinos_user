import { FC, useState } from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export interface SocialLink {
  href: string;
  label: string;
  icon: FC<{ className?: string }>;
  bg: string;
}

interface Props {
  links?: SocialLink[];
  className?: string;
  mobile?: boolean; 
}

export const SocialShareBar: FC<Props> = ({
  links = [
    {
      href: 'https://www.facebook.com/destinosturism',
      label: 'Compartir en Facebook',
      icon: Facebook,
      bg: 'bg-[#3b5998]',
    },
    {
      href: 'https://www.instagram.com/dest.iturismo/',
      label: 'Instagram Destinos',
      icon: Instagram,
      bg: 'bg-[#3b5998]',
    },
    {
      href: 'https://x.com/destinosrevis',
      label: 'X Destinos',
      icon: Twitter,
      bg: 'bg-[#3b5998]',
    },
    {
      href: 'https://api.whatsapp.com/send?...',
      label: 'Compartir por WhatsApp',
      icon: MessageCircle,
      bg: 'bg-[#3b5998]',
    },
  ],
  className = '',
  mobile = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

 if (mobile) {
  return (
    <aside
      className={`relative transition-transform duration-300 ease-in-out flex flex-col gap-2 p-2 bg-white/90 rounded-full shadow-lg min-w-[3rem] ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } ${className}`}
    >
      {/* Flechita que sobresale al lado izquierdo del aside */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow-md z-40"
      >
        {isVisible ? (
          <ChevronRight className="w-5 h-5 text-gray-700" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {isVisible &&
        links.map(({ href, label, icon: Icon, bg }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-12 w-12 items-center justify-center rounded-full ${bg} hover:scale-110 transition-transform`}
          >
            <Icon className="h-5 w-5 text-white" />
          </a>
        ))}
    </aside>
  );
}

  return (
    <aside
      className={`flex flex-col gap-2 p-2 bg-white/90 rounded-full shadow-lg ${className}`}
    >
      {links.map(({ href, label, icon: Icon, bg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full ${bg} hover:scale-110 transition-transform`}
        >
          <Icon className="h-5 w-6 text-white" />
        </a>
      ))}
    </aside>
  );
};

export default SocialShareBar;
