import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-purple-600">NOVA</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
          <div className="relative group">
            <a href="#servicos" className="text-gray-700 hover:text-purple-600 transition-colors">Serviços</a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4 space-y-2">
                <a href="#bi-dados" className="block text-sm text-gray-600 hover:text-purple-600">BI & Dados</a>
                <a href="#seo" className="block text-sm text-gray-600 hover:text-purple-600">SEO</a>
                <a href="#desenvolvimento" className="block text-sm text-gray-600 hover:text-purple-600">Desenvolvimento</a>
                <a href="#midia-off" className="block text-sm text-gray-600 hover:text-purple-600">Mídia Off</a>
                <a href="#inbound-marketing" className="block text-sm text-gray-600 hover:text-purple-600">Inbound Marketing</a>
                <a href="#social-media" className="block text-sm text-gray-600 hover:text-purple-600">Social Media</a>
                <a href="#midia-on" className="block text-sm text-gray-600 hover:text-purple-600">Mídia On</a>
              </div>
            </div>
          </div>
          <a href="#quem-somos" className="text-gray-700 hover:text-purple-600 transition-colors">Quem Somos</a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
          <a href="#contato" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-purple-600">Home</a>
            <div>
              <div className="text-gray-700 font-medium mb-2">Serviços</div>
              <div className="pl-4 space-y-2">
                <a href="#bi-dados" className="block text-sm text-gray-600 hover:text-purple-600">BI & Dados</a>
                <a href="#seo" className="block text-sm text-gray-600 hover:text-purple-600">SEO</a>
                <a href="#desenvolvimento" className="block text-sm text-gray-600 hover:text-purple-600">Desenvolvimento</a>
                <a href="#midia-off" className="block text-sm text-gray-600 hover:text-purple-600">Mídia Off</a>
                <a href="#inbound-marketing" className="block text-sm text-gray-600 hover:text-purple-600">Inbound Marketing</a>
                <a href="#social-media" className="block text-sm text-gray-600 hover:text-purple-600">Social Media</a>
                <a href="#midia-on" className="block text-sm text-gray-600 hover:text-purple-600">Mídia On</a>
              </div>
            </div>
            <a href="#quem-somos" className="block text-gray-700 hover:text-purple-600">Quem Somos</a>
            <a href="#blog" className="block text-gray-700 hover:text-purple-600">Blog</a>
            <a href="#contato" className="block text-gray-700 hover:text-purple-600">Contato</a>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

