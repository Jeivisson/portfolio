import Image from 'next/image';
import SVGIMG from '../../../public/images/Avatar.png';
import { RiHtml5Line, RiNextjsLine, RiReactjsLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

export default function Hero() {
  return (
    <>
      <div className=" flex h-screen justify-center items-center space-x-6 ">
        <div className="w-[450px] h-[312px] flex-col">
          <div className="pl-6 pr-5  pt-8 flex items-center w-full">
            <h1 className="text-xl font-semibold mr-2">About Me</h1>
            <div className="flex-1 border-b border-black "></div>
          </div>
          <p className="text-wrap text-[18px] mt-4 ">
            Ashley Cabeçuda Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <div className="font-semibold flex items-center space-x-2 mt-[38px]">
            <span className=" text-xl ">Tech Stack |</span>
            <RiNextjsLine className="size-8" />
            <RiReactjsLine className="size-8 text-blue-500" />
            <SiTypescript className="size-8 " />
            <RiHtml5Line className="size-8" />
          </div>
        </div>
        <div className="pt-19 mt-12">
          <Image width={300} height={300} src={SVGIMG} alt="Self Image" />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="w-[80%] border-b border-black "></div>
      </div>
    </>
  );
}
