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
  size?: 'small' | 'medium' | 'large';
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
      href: 'https://wa.me/34664349972',
      label: 'Compartir por WhatsApp',
      icon: MessageCircle,
      bg: 'bg-[#3b5998]',
    },
  ],
  className = '',
  mobile = false,
  size = 'medium',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Configuración de tamaños
  const sizeConfig = {
    small: {
      buttonSize: 'h-8 w-8',
      iconSize: 'h-3 w-3',
      gap: 'gap-1',
      padding: 'p-1.5',
      toggleSize: 'w-3 h-3',
      togglePadding: 'p-0.5',
    },
    medium: {
      buttonSize: 'h-10 w-10',
      iconSize: 'h-4 w-4',
      gap: 'gap-1.5',
      padding: 'p-2',
      toggleSize: 'w-4 h-4',
      togglePadding: 'p-1',
    },
    large: {
      buttonSize: 'h-12 w-12',
      iconSize: 'h-5 w-5',
      gap: 'gap-2',
      padding: 'p-2',
      toggleSize: 'w-5 h-5',
      togglePadding: 'p-1',
    },
  };

  const config = sizeConfig[size];

  if (mobile) {
    return (
      <aside
        className={`relative transition-transform duration-300 ease-in-out flex flex-col ${config.gap} ${config.padding} bg-white/90 rounded-full shadow-lg min-w-[2rem] ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } ${className}`}
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full ${config.togglePadding} shadow-md z-40`}
        >
          {isVisible ? (
            <ChevronRight className={`${config.toggleSize} text-gray-700`} />
          ) : (
            <ChevronLeft className={`${config.toggleSize} text-gray-700`} />
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
              className={`flex ${config.buttonSize} items-center justify-center rounded-full ${bg} hover:scale-110 transition-transform`}
            >
              <Icon className={`${config.iconSize} text-white`} />
            </a>
          ))}
      </aside>
    );
  }

  return (
    <aside
      className={`flex flex-col ${config.gap} ${config.padding} bg-white/90 rounded-full shadow-lg ${className}`}
    >
      {links.map(({ href, label, icon: Icon, bg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex ${config.buttonSize} items-center justify-center rounded-full ${bg} hover:scale-110 transition-transform`}
        >
          <Icon className={`${config.iconSize} text-white`} />
        </a>
      ))}
    </aside>
  );
};

export default SocialShareBar;
