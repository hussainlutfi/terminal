export default function Loader() {
  return (
    <div className="flex flex-row gap-1 sm:gap-2 ">
      <div className="w-1 h-1 rounded-full bg-white animate-bounce sm:w-2 sm:h-2"></div>
      <div className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-.3s] sm:w-2 sm:h-2"></div>
      <div className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:-.5s] sm:w-2 sm:h-2"></div>
    </div>
  );
}
