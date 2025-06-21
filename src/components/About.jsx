import { Card, CardContent } from '@/components/ui/card.jsx';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é desenvolvida com o objetivo de gerar resultados mensuráveis e impacto real no seu negócio.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Estamos sempre atualizados com as últimas tendências e tecnologias do marketing digital.'
    },
    {
      icon: Heart,
      title: 'Relacionamento Próximo',
      description: 'Acreditamos que o sucesso vem da parceria e do relacionamento próximo com nossos clientes.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada projeto, desde o planejamento até a execução e acompanhamento.'
    }
  ];

  const team = [
    {
      name: 'Ana Silva',
      role: 'CEO & Estrategista Digital',
      description: 'Mais de 10 anos de experiência em marketing digital e gestão de equipes.'
    },
    {
      name: 'Carlos Santos',
      role: 'Diretor de Tecnologia',
      description: 'Especialista em desenvolvimento web e soluções tecnológicas inovadoras.'
    },
    {
      name: 'Marina Costa',
      role: 'Head de SEO',
      description: 'Certificada Google e especialista em posicionamento orgânico.'
    },
    {
      name: 'Rafael Lima',
      role: 'Gerente de Tráfego Pago',
      description: 'Expert em Google Ads e Meta Ads com foco em performance.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '5+', label: 'Anos no Mercado' },
    { number: '50+', label: 'Clientes Ativos' }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem <span className="text-purple-600">Somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma agência de marketing digital apaixonada por transformar 
            ideias em resultados extraordinários para nossos clientes.
          </p>
        </div>

        {/* Nossa História */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                A Agência Nova nasceu da visão de democratizar o marketing digital 
                e torná-lo acessível para empresas de todos os tamanhos. Fundada em 2019, 
                começamos como uma pequena equipe de especialistas apaixonados por tecnologia 
                e resultados.
              </p>
              <p>
                Ao longo dos anos, crescemos e evoluímos, sempre mantendo nosso compromisso 
                com a excelência e a inovação. Hoje, somos uma agência completa que oferece 
                soluções integradas de marketing digital, desde SEO até desenvolvimento web.
              </p>
              <p>
                Nossa jornada é marcada por parcerias sólidas, resultados excepcionais 
                e a constante busca por superar as expectativas de nossos clientes.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-purple-100">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Transformar ideias em resultados digitais excepcionais, 
                impulsionando o crescimento e sucesso de nossos clientes 
                através de estratégias inovadoras e tecnologia de ponta.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal agência de marketing digital 
                do Brasil, referência em inovação, resultados e relacionamento 
                com clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600">
                Transparência, inovação, excelência, relacionamento próximo 
                e foco em resultados são os pilares que guiam todas as 
                nossas ações e decisões.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nossos Valores Detalhados */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Diferenciais
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nossa Equipe */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossa Equipe
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-xl text-purple-100 mb-6">
              Entre em contato conosco e descubra como podemos ajudar 
              sua empresa a alcançar resultados extraordinários.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

