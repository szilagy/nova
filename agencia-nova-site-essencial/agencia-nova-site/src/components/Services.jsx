import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { 
  BarChart3, 
  Search, 
  Code, 
  Radio, 
  BookOpen, 
  Share2, 
  Monitor,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'bi-dados',
      title: 'BI & Dados',
      description: 'Transforme dados em insights estratégicos para seu negócio',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      items: ['Power BI', 'Google Analytics 4 (GA4)', 'Google Tag Manager', 'Dashboards Personalizados']
    },
    {
      id: 'seo',
      title: 'SEO',
      description: 'Posicione seu site no topo do Google e aumente sua visibilidade',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      items: ['Consultoria SEO', 'Implementação', 'Migração SEO', 'Portais de Conteúdo']
    },
    {
      id: 'desenvolvimento',
      title: 'Desenvolvimento',
      description: 'Sites e e-commerces modernos e responsivos',
      icon: Code,
      color: 'from-red-500 to-pink-500',
      items: ['Sites', 'Portais de Conteúdo', 'E-Commerce', 'Manutenção de sites e e-commerces']
    },
    {
      id: 'midia-off',
      title: 'Mídia Off',
      description: 'Estratégias de marketing tradicional e produção gráfica',
      icon: Radio,
      color: 'from-purple-500 to-indigo-500',
      items: ['TV - Rádio', 'Produção Gráfica', 'Out of Home', 'Digital Out of Home']
    },
    {
      id: 'inbound-marketing',
      title: 'Inbound Marketing',
      description: 'Atraia, converta e encante seus clientes',
      icon: BookOpen,
      color: 'from-green-400 to-blue-500',
      items: ['Criação de E-book', 'Criação de Conteúdo', 'Gerenciamento de RD Station', 'Fluxo de Nutrição', 'Automação de Marketing']
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Gestão completa das suas redes sociais',
      icon: Share2,
      color: 'from-pink-500 to-rose-500',
      items: ['Design', 'Micro Influenciadores', 'LinkedIn Social Selling', 'SAC 2.0', 'Gestão de Redes Sociais (FB | IG | TWT | IN | TT)']
    },
    {
      id: 'midia-on',
      title: 'Mídia On',
      description: 'Campanhas de tráfego pago que convertem',
      icon: Monitor,
      color: 'from-blue-500 to-purple-500',
      items: ['Meta Ads', 'Google Ads', 'Programática', 'Native Ads']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossas <span className="text-purple-600">Soluções</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de marketing digital 
            para impulsionar seu negócio e alcançar resultados extraordinários.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Saiba mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e vamos criar uma solução personalizada para seu negócio.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

