type ButtonProps = {
  label?: string;
  className?: string;
  onClick?: () => void;
  imageUrl?: string;
  disabled?: boolean;
};

export default function Button({
  label,
  onClick,
  className,
  imageUrl,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`
        flex items-center justify-center gap-2
        ${
          className?.includes("outline")
            ? "bg-white text-cyan-600 font-semibold py-1 lg:py-2 lg:px-4 rounded-md border border-cyan-600 shadow-sm lg:shadow-md active:bg-cyan-800 active:text-white cursor-pointer"
            : className?.includes("text-only")
            ? "font-semibold rounded-md cursor-pointer"
            : "bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md shadow-md active:shadow-none active:bg-cyan-800 hover:scale-105 transition-all duration-100 cursor-pointer"
        } 
        transition-all duration-100 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {imageUrl && (
        <img src={imageUrl} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
      {label && <span className="text-sm sm:text-base">{label}</span>}
    </button>
  );
}
