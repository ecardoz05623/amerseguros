// Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  sticky?: boolean;
}

const Logo = ({ sticky }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={sticky ? "/images/logo/WhiteLogo.png" : "/images/logo/WhiteLogo.png"}
        alt="logo"
        width={190}
        height={34}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        priority={true}
        className="hidden xsm:block"
      />
      <Image
        src={sticky ? "/images/logo/WhiteLogo.png" : "/images/logo/WhiteLogo.png"}
        alt="logo"
        width={150}
        height={150}
        className="block xsm:hidden"
      />
    </Link>
  );
};

export default Logo;


