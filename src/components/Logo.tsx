import logoIcon from '@/assets/logo-icon.png';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ showText = true, size = 'md' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-xl' },
    md: { icon: 'w-10 h-10', text: 'text-2xl md:text-3xl' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl md:text-4xl' },
  };

  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logoIcon} alt="Gully Bowls Logo" className={sizes[size].icon} />
      {showText && (
        <div className="flex items-center gap-1">
          <span className={`${sizes[size].text} font-bold text-primary`}>
            Gully
          </span>
          <span className={`${sizes[size].text} font-bold text-secondary`}>
            Bowls
          </span>
        </div>
      )}
    </a>
  );
};

export default Logo;
