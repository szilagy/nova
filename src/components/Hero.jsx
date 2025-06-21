import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Tenha Sucesso Com
                <span className="block text-yellow-400">Seus Clientes</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Transformamos ideias em resultados digitais por meio de estratégias criativas
                e tecnologia de ponta. Sua presença online é nossa prioridade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2" size={20} />
                Chame Agora No WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
              >
                Nossos Serviços
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-purple-200">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-purple-200">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5+</div>
                <div className="text-sm text-purple-200">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-bold text-white">NOVA</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <div className="text-purple-600 font-bold">+</div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="relative">
        <svg 
          className="w-full h-20 fill-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

