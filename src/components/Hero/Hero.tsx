import Image from 'next/image';
import SVGIMG from '../../../public/images/profile.svg';
import { RiNextjsLine } from 'react-icons/ri';

export default function Hero() {
  return (
    <div className="border-blue-100 border">
      <RiNextjsLine />

      <Image src={SVGIMG} width={200} height={200} alt="my profile" />
    </div>
  );
}
