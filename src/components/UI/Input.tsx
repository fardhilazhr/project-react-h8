type InputProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  className?: string;
  error?: string;
};

export default function Input({
  id,
  type = "text",
  placeholder,
  onChange,
  ref,
  className,
  error,
}: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return (
    <>
      <input
        id={id}
        ref={ref}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={`border
              ${error ? "border-red-500" : "border-neutral-400"}
              py-2
              px-5
              text-black
              focus:border-2
              focus:border-cyan-600
              focus:outline-none
              ${className}
              `}
      />
      {error && <div className="mb-2 text-sm text-red-500">{error}</div>}
    </>
  );
}
