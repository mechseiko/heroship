import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  to,
  lucid
}) => {
  const base = "md:px-6 md:py-3 p-2 rounded font-medium transition duration-300";
  const variants = {
    primary: "bg-primary text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-lg",
    secondary: "bg-secondary text-dark hover:bg-yellow-500 hover:text-muted hover:scale-105 hover:shadow-lg",
    accent: "bg-accent text-muted hover:bg-teal-600 hover:scale-105 hover:shadow-lg",
  };

  const className = `${base} ${variants[variant] || variants.primary}`;
  const lucidClassName = `${base} ${variants[variant] || variants.primary} flex flex-row justify-between items-center`;

  const content = (
    <button type={type} onClick={onClick} className={lucid ? lucidClassName : className}>
      {children}
    </button>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export default Button;
