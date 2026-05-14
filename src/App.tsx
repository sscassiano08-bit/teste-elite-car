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
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 md:py-3 border-b border-brand-500/20' : 'bg-transparent py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex flex-col items-start gap-0">
          <span className="text-2xl md:text-3xl font-sans font-black tracking-tighter uppercase leading-none">
            MD
          </span>
          <span className="text-[8px] md:text-[10px] font-bold text-brand-500 tracking-[0.2em] uppercase leading-none">
            Estética Automotiva
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center lg:gap-8 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs lg:text-sm font-medium hover:text-brand-500 transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511947867477" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 lg:px-6 py-2 bg-brand-500 text-black font-bold rounded-full hover:bg-brand-600 transition-all transform hover:scale-105 text-xs lg:text-sm whitespace-nowrap"
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
            className="absolute top-full left-0 w-full bg-black border-b border-brand-500/20 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium hover:text-brand-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5511947867477" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-brand-500 text-black font-bold rounded-full"
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-20">
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
          className="max-w-2xl mt-4 md:mt-8"
        >
          <span className="inline-block px-4 py-1 border border-brand-500 text-brand-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 rounded-full">
            Estética Automotiva Premium
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6">
            MD Estética – <span className="brand-text-gradient italic">Cuidado Premium</span> para o seu veículo
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
            Especialistas em estética automotiva, deixando seu carro impecável com técnicas avançadas e produtos de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="https://wa.me/5511947867477" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-10 py-3 md:py-4 bg-brand-500 text-black font-bold rounded-full hover:bg-brand-600 transition-all flex items-center justify-center gap-2 transform hover:scale-105 shadow-xl shadow-brand-500/20 text-sm md:text-base"
            >
              AGENDAR SERVIÇO <ChevronRight size={18} />
            </a>
            <a 
              href="#services" 
              className="px-6 md:px-10 py-3 md:py-4 border border-white/20 hover:border-brand-500 text-white font-bold rounded-full transition-all flex items-center justify-center text-sm md:text-base"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-500/50"
      >
        <div className="w-6 h-10 border-2 border-brand-500/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-brand-500 tracking-[0.3em] uppercase mb-4">A Excelência em Detalhes</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 md:mb-8 leading-tight">
              Onde a Paixão por Carros Encontra a <span className="brand-text-gradient">Perfeição</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              A MD Estética Automotiva nasceu do desejo de elevar o padrão da estética automotiva. Não fazemos apenas lavagens; realizamos transformações. Cada veículo que entra em nosso estúdio é tratado como uma obra de arte.
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Utilizamos apenas os melhores produtos do mercado mundial e técnicas exclusivas para garantir que seu carro não apenas brilhe, mas esteja protegido contra as ações do tempo e valorizado no mercado.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-brand-500 mb-1">10+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-brand-500 mb-1">5k+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-nowrap">Carros Transformados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  // ... (keeping existing services array but updating the return)
  const services = [
    {
      title: "Higienização",
      description: "Limpeza profunda do interior, eliminando ácaros, fungos e odores para sua saúde e conforto.",
      icon: <Wind size={32} />
    },
    {
      title: "Polimento Comercial",
      description: "Proteção e brilho rápido para valorizar o veículo com excelente custo-benefício.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Polimento Técnico",
      description: "Correção minuciosa da pintura, removendo riscos e recuperando o brilho original.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Vitrificação de Pintura",
      description: "Camada cerâmica de alta resistência que protege contra intempéries e realça o brilho.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Vitrificação de Plásticos",
      description: "Rejuvenescimento e proteção de longa duração para partes plásticas externas e internas.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Lavagem Convencional",
      description: "Limpeza externa e interna padrão com produtos de qualidade para o dia a dia.",
      icon: <Droplets size={32} />
    },
    {
      title: "Lavagem Detalhada",
      description: "Limpeza minuciosa de cada fresta, emblema e detalhe, garantindo a perfeição.",
      icon: <Droplets size={32} />
    },
    {
      title: "Lavagem de Motor",
      description: "Limpeza técnica do cofre do motor com proteção e verniz de motor para um aspecto de novo.",
      icon: <Layers size={32} />
    }
  ];

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = `Olá, eu gostaria de fazer ${serviceTitle} no meu carro.`;
    return `https://wa.me/5511947867477?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-bold text-brand-500 tracking-[0.3em] uppercase mb-4">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Soluções <span className="brand-text-gradient">Exclusivas</span> para seu Veículo</h3>
          <p className="text-gray-400 text-sm md:text-base">Clique em um serviço para agendar via WhatsApp com uma mensagem personalizada.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-brand-500/50 transition-all group block"
            >
              <div className="mb-6 p-4 bg-black rounded-xl inline-block group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'text-brand-500' })}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-brand-500 transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-brand-500 text-sm font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
    <section id="location" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs md:text-sm font-bold text-brand-500 tracking-[0.3em] uppercase mb-4">Onde Estamos</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold">Nossa <span className="brand-text-gradient">Localização</span></h3>
          </div>
          <div className="flex items-center gap-3 text-gray-400 max-w-sm text-sm md:text-base">
            <MapPin className="text-brand-500 shrink-0" size={24} />
            <p>{address}</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-brand-500/20 shadow-2xl shadow-brand-500/5"
        >
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src={mapUrl}
            title="MD Estética Location"
            className="grayscale contrast-125 invert-[0.05]"
          ></iframe>
        </motion.div>
        
        <div className="mt-8 text-center">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-500 font-bold hover:text-brand-600 transition-colors"
          >
            ABRIR NO GOOGLE MAPS <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // ... (testimonials array kept the same)
  const testimonials = [
    {
      name: "Ricardo Santos",
      role: "Proprietário de BMW M3",
      text: "O serviço de vitrificação da MD Estética superou todas as minhas expectativas. O brilho é inacreditável e a facilidade de limpeza agora é outro nível. Profissionais de altíssimo nível.",
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
      text: "A atenção aos detalhes é o que diferencia a MD Estética. Eles cuidam do carro como se fosse deles. O melhor estúdio de estética automotiva que já frequentei.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-bold text-brand-500 tracking-[0.3em] uppercase mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">O que nossos <span className="brand-text-gradient">Clientes</span> dizem</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
                  <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-brand-500 text-sm">{t.role}</p>
              </div>
              <div className="absolute top-10 right-10 text-white/5 font-serif text-8xl">"</div>
            </motion.div>
          ))}
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
            <div className="flex flex-col items-start gap-0 mb-6">
              <span className="text-2xl font-sans font-black tracking-tighter uppercase leading-none">
                MD
              </span>
              <span className="text-[8px] font-bold text-brand-500 tracking-[0.2em] uppercase leading-none">
                Estética Automotiva
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Referência em estética automotiva premium. Cuidamos do seu patrimônio com a dedicação e o profissionalismo que ele merece.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/md.esteticaautomotiva_" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-500">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-500">Horário</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Segunda - Sábado: 09:00 às 18:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2026 MD Estética Automotiva. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="text-red-500">❤</span> para amantes de carros.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/5511947867477"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
    >
      <MessageCircle size={28} md:size={32} />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
