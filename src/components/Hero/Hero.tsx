import Image from 'next/image';
import SVGIMG from '../../../public/images/profile.svg';

export default function Hero() {
  return (
    <div>
      <Image src={SVGIMG} width={200} height={200} alt="my profile" />
    </div>
  );
}
