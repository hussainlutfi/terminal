import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t-2 border-white border-opacity-10 mt-14 sm:mt-28 ">
      <div className="flex px-16 sm:px-96 mb-2 sm:mb-5">
        <a
          href="https://www.facebook.com/Mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/facebook.svg" alt="About services" />
        </a>
        <a
          href="https://www.instagram.com/mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/insta.svg" alt="About services" />
        </a>
        <a
          href="https://www.linkedin.com/company/mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/linked-in.svg" alt="About services" />
        </a>
        <a
          href="https://x.com/mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/x.svg" alt="About services" />
        </a>
        <a
          href="https://www.youtube.com/c/Mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/youtube.svg" alt="About services" />
        </a>
        <a
          href="https://www.snapchat.com/add/mostaqbli"
          className="w-[25px] mx-auto opacity-70 transition ease-in-out delay-150 hover:scale-125"
        >
          <img src="/assets/social/snapchat.svg" alt="About services" />
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center">
        <span className="sm:text-lg text-gray-500 text-center block">
          © مستقبلي 2024، جميع الحقوق محفوظة
        </span>
      </div>
      <div className="flex ">
        <span className="w-full px-5 sm:text-lg text-gray-500 text-center pt-3 font-bold">
          طوّر بواسطة،{" "}
          <a
            className="text-gray-400 hover:opacity-70 underline"
            href="https://www.linkedin.com/in/hussainlutfi/"
          >
            حسين الزاير
          </a>
        </span>
      </div>
    </footer>
  );
}
