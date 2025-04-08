'use client';
import Link from 'next/link';
interface MenuLinkProps {
  children: string;
  link: string;
}

export default function MenuLink(props: MenuLinkProps) {
  return (
    <div className="flex text-x p-[15px] cursor-pointer ">
      <Link className="hover:bg-gray-400 hover:rounded-[5px] px-[5px]" href={props.link}>
        {props.children}
      </Link>
    </div>
  );
}
