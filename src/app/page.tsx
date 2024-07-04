import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full">
      <div className="w-full bg-gradient-to-br from-[#ff472b51]  to-[#061f407e] to-80%">
        <div className="flex flex-col items-center justify-center pt-28 max-sm:pt-20">
          <h1 className="text-white md:text-7xl font-extrabold md:leading-tight leading-normal tracking-tight text-4xl text-center ">
            أهلاً وسهلاً
          </h1>
        </div>
      </div>
    </main>
  );
}
