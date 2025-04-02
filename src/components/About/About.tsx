export default function About() {
  return (
    <>
      <div className=" flex h-screen justify-center items-center space-x-20 ">
        <div className="w-[450px] h-[312px] flex-col">
          <div className="pl-6 pr-5 flex items-center w-full">
            <h1 className="text-xl font-semibold mr-2">About Me</h1>
            <div className="flex-1 border-b border-black "></div>
          </div>
          <p className="text-wrap text-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </>
  );
}
