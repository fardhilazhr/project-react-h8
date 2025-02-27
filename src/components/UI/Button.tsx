type buttonProps = {
  label?: string;
  className?: string;
  onClick?: () => void;
  imageUrl?: string;
};

export default function Button({
  label,
  onClick,
  className,
  imageUrl,
}: buttonProps) {
  return (
    <button
      className={`
        ${
          className?.includes("outline")
            ? "bg-white text-cyan-600 font-semibold py-2 px-4 rounded-md outline outline-cyan-600 shadow-gray-200 active:bg-cyan-800 active:text-white ease-in-out cursor-pointer"
            : className?.includes("text-only")
            ? "font-semibold rounded-md cursor-pointer"
            : "bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md shadow-md shadow-gray-200 active:shadow-none active:bg-cyan-800 active:outline-2 active:outline-cyan-800 active:outline-offset-2 ease-in-out cursor-pointer"
        } 
        transition-all duration-100 ${className}
      `}
      onClick={onClick}
    >
      <div
        className={`flex items-center ${
          imageUrl && label ? "justify-between" : "justify-center"
        }`}
      >
        {imageUrl && (
          <img src={imageUrl} alt="image" className="w-6 h-6 mr-2" />
        )}
        {label}
      </div>
    </button>
  );
}
