import { FC } from 'react';
import { Facebook, MessageCircle, Youtube } from 'lucide-react';

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
      href: 'https://www.facebook.com/destinosturism',
      label: 'Compartir en Facebook',
      icon: Facebook,
      bg: 'bg-[#3b5998]',
    },
    {
      href: `https://api.whatsapp.com/send?phone=%2B34664349972&context=AfdlPuQ0iNwLB-ueHb5CzfNfBWGCWAy2y8Ck2-QYF-prscFCiUVXW89-ObrzFbdhD43QFYTMEDnvnSA4i-c4FE9O0VqXIQ_Lbe-zalmdDLcY6Zb_OJXW0wWFQ85OSMfKrlc_0H-EjMgyS3S32k_k9HOixQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawKoxMVleHRuA2FlbQIxMABicmlkETFJamJqR3B1TFVDblRGeUE4AR7M9pktO0hrFzNQ2egV-ox8zZGjCey2oPvkCb1XO9bBo1ovYHs4g9PvmgH6Jg_aem_3TynYiBJz6-19SxOQm2DIA`,
      label: 'Compartir por WhatsApp',
      icon: MessageCircle,
      bg: 'bg-[#3b5998]',
    },
    {
      href: `https://www.youtube.com/@RevistaDestinosPer%C3%BA`,
      label: 'Compartir por Youtube',
      icon: Youtube,
      bg: 'bg-[#3b5998]',
    },
  ],
  className = '',
}) => {
  return (
    <aside className={`flex flex-col gap-4 rounded p-2 bg-white/90 rounded-xl shadow-lg ${className}`}>
      {links.map(({ href, label, icon: Icon, bg }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded ${bg} hover:scale-110 transition-transform`}
        >
          <Icon className="h-5 w-6 text-white" />
        </a>
      ))}
    </aside>
  );
};

export default SocialShareBar;
