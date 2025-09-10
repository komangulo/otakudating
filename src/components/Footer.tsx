import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-snctm-gray-dark text-xs">
          <p>© {currentYear} DADDY ISSUES</p>
          <div className="mt-2">
            <a href="/privacy" className="hover:underline mx-1">Política de Privacidad</a>
            <span>•</span>
            <a href="/terms" className="hover:underline mx-1">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
