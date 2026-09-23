interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className = "",
}: ButtonProps) {

  return (
    <button
      className={`
      px-6 py-3
      rounded-full
      bg-yellow-600
      text-white
      font-medium
      transition
      duration-300
      hover:scale-105
      ${className}
      `}
    >
      {children}
    </button>
  );
}