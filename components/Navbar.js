import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo.png"
          href="https://icons8.com/icon/113989/source-code"
          width={100}
          height={70}
        />
      </div>
      <Link href="/"> Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
