import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo = ({ variant = 'light', className = '' }: LogoProps) => {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}
      aria-label="AmprimaTech home"
    >
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-400/30 to-cyan-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={logoMark}
          alt=""
          className="relative h-10 w-auto sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_6px_rgba(37,99,235,0.18)]"
          aria-hidden
        />
      </div>

      <div className="flex items-baseline leading-none select-none">
        <span
          className={`text-lg sm:text-xl font-bold tracking-tight ${
            isLight ? 'text-[#1A2B4C]' : 'text-white'
          }`}
        >
          Amprima
        </span>
        <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Tech
        </span>
        <span className="text-lg sm:text-xl font-bold text-cyan-400">.</span>
      </div>
    </Link>
  );
};

export default Logo;
