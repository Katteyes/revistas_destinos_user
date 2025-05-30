import { FC } from 'react';
import { Facebook, Mail } from 'lucide-react';

export interface SocialLink {
  href: string;
  label: string;
  icon: FC<{ className?: string }>;
  bg: string;
}

interface Props {
  links?: SocialLink[];
  className?: string;
}

export const SocialShareBar: FC<Props> = ({
  links = [
    {
      href: 'https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href),
      label: 'Compartir en Facebook',
      icon: Facebook,
      bg: 'bg-[#3b5998]',
    },
    {
      href: `mailto:?subject=${document.title}&body=${window.location.href}`,
      label: 'Compartir por Email',
      icon: Mail,
      bg: 'bg-[#3b5998]',
    },
    {
      href: `mailto:?subject=${document.title}&body=${window.location.href}`,
      label: 'Compartir por Email',
      icon: Mail,
      bg: 'bg-[#3b5998]',
    },
  ],
  className = '',
}) => {
  return (
    <aside className={`top-15 flex flex-col gap-4 rounded-2xl p-4 shadow-lg ${className}`}>
      {links.map(({ href, label, icon: Icon, bg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-15 w-15 items-center justify-center rounded ${bg} transition hover:scale-120`}
        >
          <Icon className="h-5 w-5 text-white" />
        </a>
      ))}
    </aside>
  );
};

export default SocialShareBar;
