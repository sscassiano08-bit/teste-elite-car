/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Wind, 
  Gem, 
  Layers, 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Localização', href: '#location' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gold-500/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center shadow-lg shadow-gold-500/20">
            <span className="text-black font-bold text-xl">E</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter">
            ELITE <span className="gold-text-gradient">CAR</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511982000516" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gold-500 text-black font-bold rounded-full hover:bg-gold-600 transition-all transform hover:scale-105"
          >
            AGENDAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-gold-500/20 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium hover:text-gold-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5511982000516" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-gold-500 text-black font-bold rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AGENDAR SERVIÇO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury car detailing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 border border-gold-500 text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 rounded-full">
            Estética Automotiva Premium
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Elite Car – <span className="gold-text-gradient italic">Cuidado Premium</span> para o seu veículo
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Especialistas em estética automotiva, deixando seu carro impecável com técnicas avançadas e produtos de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511982000516" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold-500 text-black font-bold rounded-full hover:bg-gold-600 transition-all flex items-center justify-center gap-2 transform hover:scale-105 shadow-xl shadow-gold-500/20"
            >
              AGENDAR SERVIÇO <ChevronRight size={20} />
            </a>
            <a 
              href="#services" 
              className="px-10 py-4 border border-white/20 hover:border-gold-500 text-white font-bold rounded-full transition-all flex items-center justify-center"
            >
              VER SERVIÇOS
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500/50"
      >
        <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
              alt="Professional polishing" 
              className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-gold-500 tracking-[0.3em] uppercase mb-4">A Excelência em Detalhes</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Onde a Paixão por Carros Encontra a <span className="gold-text-gradient">Perfeição</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A Elite Car nasceu do desejo de elevar o padrão da estética automotiva. Não fazemos apenas lavagens; realizamos transformações. Cada veículo que entra em nosso estúdio é tratado como uma obra de arte.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Utilizamos apenas os melhores produtos do mercado mundial e técnicas exclusivas para garantir que seu carro não apenas brilhe, mas esteja protegido contra as ações do tempo e valorizado no mercado.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold-500 mb-1">10+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold-500 mb-1">5k+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Carros Transformados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Polimento",
      description: "Correção de pintura para remover riscos e devolver o brilho espelhado original.",
      icon: <Sparkles className="text-gold-500" size={32} />
    },
    {
      title: "Vitrificação",
      description: "Proteção cerâmica de alta durabilidade que cria uma camada hidrofóbica e resistente.",
      icon: <ShieldCheck className="text-gold-500" size={32} />
    },
    {
      title: "Enceramento Técnico",
      description: "Aplicação de ceras nobres para proteção e realce profundo da cor e brilho.",
      icon: <Gem className="text-gold-500" size={32} />
    },
    {
      title: "Limpeza Interna Detalhada",
      description: "Higienização completa do interior, com descontaminação de estofados e painéis.",
      icon: <Wind className="text-gold-500" size={32} />
    },
    {
      title: "Limpeza Externa Detalhada",
      description: "Lavagem técnica minuciosa que cuida de cada detalhe da lataria e rodas.",
      icon: <Droplets className="text-gold-500" size={32} />
    },
    {
      title: "Lavagem de Motor",
      description: "Limpeza técnica do cofre do motor com produtos específicos e proteção dos componentes.",
      icon: <Layers className="text-gold-500" size={32} />
    },
    {
      title: "Lavagem de Chassis",
      description: "Remoção de sujeiras pesadas da parte inferior do veículo com proteção anticorrosiva.",
      icon: <Layers className="text-gold-500" size={32} />
    },
    {
      title: "Cristalização de Vidros",
      description: "Tratamento repelente de água para vidros, melhorando a visibilidade em dias de chuva.",
      icon: <Sparkles className="text-gold-500" size={32} />
    },
    {
      title: "Lavagem Simples",
      description: "Limpeza rápida e eficiente para manter o visual do seu carro em dia.",
      icon: <Droplets className="text-gold-500" size={32} />
    }
  ];

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = `Olá, eu gostaria de fazer ${serviceTitle} no meu carro.`;
    return `https://wa.me/5511982000516?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-gold-500 tracking-[0.3em] uppercase mb-4">Nossos Serviços</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Soluções <span className="gold-text-gradient">Exclusivas</span> para seu Veículo</h3>
          <p className="text-gray-400">Clique em um serviço para agendar via WhatsApp com uma mensagem personalizada.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a 
              key={index}
              href={getWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-gold-500/50 transition-all group block"
            >
              <div className="mb-6 p-4 bg-black rounded-xl inline-block group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-gold-500 transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-gold-500 text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                AGENDAR AGORA <ChevronRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  const address = "R. Adhemar de Barros, 22 - Jardim Modelo, Arujá - SP, 07401-290";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-gold-500 tracking-[0.3em] uppercase mb-4">Onde Estamos</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Nossa <span className="gold-text-gradient">Localização</span></h3>
          </div>
          <div className="flex items-center gap-3 text-gray-400 max-w-sm">
            <MapPin className="text-gold-500 shrink-0" size={24} />
            <p>{address}</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[450px] rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/5"
        >
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src={mapUrl}
            title="Elite Car Location"
            className="grayscale contrast-125 invert-[0.05]"
          ></iframe>
        </motion.div>
        
        <div className="mt-8 text-center">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 font-bold hover:text-gold-600 transition-colors"
          >
            ABRIR NO GOOGLE MAPS <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Santos",
      role: "Proprietário de BMW M3",
      text: "O serviço de vitrificação da Elite Car superou todas as minhas expectativas. O brilho é inacreditável e a facilidade de limpeza agora é outro nível. Profissionais de altíssimo nível.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Proprietário de Porsche Macan",
      text: "Fiz a higienização interna e o polimento técnico. Meu carro voltou a ter cheiro de novo e a pintura parece que acabou de sair da concessionária. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Proprietário de Audi RS6",
      text: "A atenção aos detalhes é o que diferencia a Elite Car. Eles cuidam do carro como se fosse deles. O melhor estúdio de estética automotiva que já frequentei.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-gold-500 tracking-[0.3em] uppercase mb-4">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">O que nossos <span className="gold-text-gradient">Clientes</span> dizem</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-zinc-900 border border-white/5 rounded-3xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-gold-500 text-sm">{t.role}</p>
              </div>
              <div className="absolute top-10 right-10 text-white/5 font-serif text-8xl">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-gold-500 tracking-[0.3em] uppercase mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Pronto para dar o <span className="gold-text-gradient">Próximo Passo</span>?</h3>
            <p className="text-gray-400 mb-12 text-lg">Entre em contato conosco para agendar seu serviço ou tirar qualquer dúvida. Estamos prontos para atender você.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-gray-400">(11) 98200-0516</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-gray-400">R. Adhemar de Barros, 22 - Jardim Modelo, Arujá - SP, 07401-290</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-gray-400">elitecarum@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/5511982000516" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-105"
              >
                <MessageCircle size={24} /> FALAR NO WHATSAPP
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Serviço de Interesse</label>
                  <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all appearance-none">
                    <option>Selecione um serviço</option>
                    <option>Polimento</option>
                    <option>Vitrificação</option>
                    <option>Enceramento Técnico</option>
                    <option>Limpeza Interna Detalhada</option>
                    <option>Limpeza Externa Detalhada</option>
                    <option>Lavagem de Motor</option>
                    <option>Lavagem de Chassis</option>
                    <option>Cristalização de Vidros</option>
                    <option>Lavagem Simples</option>
                  </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-gold-500 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gold-500 text-black font-bold rounded-xl hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter">
                ELITE <span className="gold-text-gradient">CAR</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Referência em estética automotiva premium. Cuidamos do seu patrimônio com a dedicação e o profissionalismo que ele merece.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/elitecararuja?igsh=YnMzdXZyeTJ4aWdq" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold-500">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold-500">Horário</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Segunda - Sábado: 09:00 às 18:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2026 Elite Car Estética Automotiva. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="text-red-500">❤</span> para amantes de carros.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/5511982000516"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
