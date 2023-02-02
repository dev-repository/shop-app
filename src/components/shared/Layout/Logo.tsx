import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { siteSettings } from '~/utils/site';

interface LogoProps {
  className?: cn.ArgumentArray;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href={siteSettings.logo.href}
      className={cn('inline-flex focus:outline-none', className)}
    >
      <Image
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
