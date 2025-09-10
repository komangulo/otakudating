import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

type SubmenuItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};

export const SnctmHeader: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const navItems: NavItem[] = [
    { label: 'INICIO', href: '/' },
    { label: 'QUIEN SOY', href: '/about' },
    { label: 'CONTACTO', href: '/contact' }
  ];

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  const handleSubmenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="block mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-snctm-black">
              Otaku Dating
            </h1>
          </Link>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
              {navItems.map((item) => (
                <li 
                  key={item.href} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    to={item.href}
                    className="text-snctm-gray-dark hover:text-snctm-black transition-colors py-2 block"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div 
                      className={`absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${
                        activeSubmenu === item.label ? 'block' : 'hidden'
                      }`}
                      onMouseEnter={handleSubmenuEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-snctm-gray-dark hover:bg-gray-50 hover:text-snctm-black"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};