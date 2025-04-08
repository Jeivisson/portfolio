'use client';

import Image from 'next/image';
import MenuLink from '../MenuLink/MenuLink';
import LOGOSVG from '../../../public/images/jeiilogo.svg';

export default function NavBar() {
  return (
    <div className="fixed">
      <Image className="pt-[30px] pl-[5px]" width={200} height={200} src={LOGOSVG} alt="logo"></Image>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-end">
        <div className="p-[18px]">
          <ul className="flex">
            <li>
              <MenuLink link="#">About</MenuLink>
            </li>
            <li>
              <MenuLink link="#">Projects</MenuLink>
            </li>
            <li>
              <MenuLink link="#">Contatct</MenuLink>
            </li>
          </ul>
        </div>
        <div className=" flex justify-end bg-black w-[30px] h-[1px]"></div>
      </nav>
    </div>
  );
}
