// Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/images/logo/WhiteLogo.png"}
        alt="logo"
        width={190}
        height={34}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        priority={true}
        className="hidden xsm:block"
      />
      <Image
        src={"/images/logo/WhiteLogo.png"}
        alt="logo"
        width={150}
        height={150}
        className="block xsm:hidden"
      />
    </Link>
  );
};

export default Logo;


