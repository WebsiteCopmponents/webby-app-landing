
import React, { useState } from 'react';
import { FEATURES, PROCESS_STEPS, PROJECTS, PRICING_PLANS, FAQS, CLIENT_LOGOS } from './constants';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="glass-panel rounded-full px-6 py-4 shadow-sm flex items-center justify-between gap-8 max-w-[1024px] w-full border border-white/60">
        <a className="flex items-center gap-3 text-text-dark group" href="#">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-glow transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-xl">blur_on</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Webbee</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#why-us">Why Us</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#process">Process</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#work">Work</a>
          <a className="text-sm font-medium text-text-muted hover:text-primary transition-colors" href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex bg-text-dark hover:bg-primary text-white text-sm font-bold h-11 px-6 rounded-full items-center justify-center shadow-lg transition-all active:scale-95">
            Start a Project
          </button>
          <button className="md:hidden p-2 text-text-dark hover:bg-gray-100 rounded-full transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 sm:px-10 lg:px-40 pb-20 pt-32 md:pt-48 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 text-center lg:text-left z-10">
          <div className="inline-flex self-center lg:self-start items-center gap-2 bg-white/80 backdrop-blur-sm border border-white rounded-full px-4 py-2 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-text-dark tracking-wide uppercase">Available for New Projects</span>
          </div>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-text-dark">
            Building <span className="text-primary">World-Class</span><br /> Apps, With a Smile.
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            We are a premium product studio shipping high-quality mobile and web apps for global startups. No headaches, just code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
            <button className="bg-text-dark hover:bg-primary text-white text-base font-bold h-14 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 group">
              See our Plans
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="bg-white border border-gray-200 text-text-dark text-base font-bold h-14 px-8 rounded-full hover:bg-gray-50 transition-all active:scale-95">
              View Portfolio
            </button>
          </div>
          <div className="flex items-center gap-5 justify-center lg:justify-start mt-8 pt-8 border-t border-gray-200/50">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <img key={i} alt="Avatar" className="w-12 h-12 rounded-full border-[3px] border-background-light object-cover shadow-sm" src={`https://picsum.photos/100/100?random=${i}`} />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400 text-lg fill-current">star</span>
                ))}
              </div>
              <span className="text-xs font-bold text-text-muted mt-1 uppercase tracking-wide">Trusted by 100+ Clients</span>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] sm:h-[600px] w-full flex items-center justify-center lg:justify-end">
          <div className="relative w-full h-full max-w-lg animate-float">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-white to-[#f0f0f0] rounded-[3rem] rotate-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white z-10 flex items-center justify-center overflow-hidden">
               <span className="material-symbols-outlined text-[10rem] text-primary/5 rotate-[-12deg]">layers</span>
            </div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-white/40 backdrop-blur-md rounded-full shadow-glass border border-white/50 z-20 flex items-center justify-center animate-pulse">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">code</span>
              </div>
            </div>
            <div className="absolute bottom-32 left-0 w-20 h-20 bg-white rounded-3xl rotate-[-15deg] shadow-xl z-20 flex items-center justify-center border border-gray-50">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute top-40 left-10 w-16 h-16 bg-secondary rounded-full shadow-lg opacity-90 z-0"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-teal/20 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Logos: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-bold text-text-muted mb-8 uppercase tracking-[0.2em]">Powering Next-Gen Companies</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-between items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 overflow-x-auto no-scrollbar py-4 px-10">
            {CLIENT_LOGOS.map((name) => (
              <span key={name} className="text-2xl font-bold shrink-0">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40" id="why-us">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">The Studio Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark tracking-tight">Why top startups <br />choose to build with us.</h2>
          </div>
          <p className="text-text-muted text-lg max-w-md font-light leading-relaxed">We've refined the development process to eliminate uncertainty and deliver engineering excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat) => (
            <div key={feat.id} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-hover transition-all duration-500 border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#f7f7f7] text-text-dark flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl font-light">{feat.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4">{feat.title}</h3>
              <p className="text-text-muted leading-relaxed font-light">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white relative overflow-hidden" id="process">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-6">From concept to launch.</h2>
          <p className="text-text-muted text-lg font-light">A transparent, step-by-step journey to bring your vision to life.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 z-0"></div>
          <div className="md:hidden absolute top-0 bottom-0 left-[2.25rem] w-[2px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className={`group relative md:pt-8 pl-24 md:pl-0 ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}>
                <div className="md:hidden absolute left-0 top-0 w-[4.5rem] h-[4.5rem] bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="hidden md:flex absolute top-[52px] left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                <div className="glass-card-premium p-8 rounded-[2rem] flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-glass h-full relative overflow-hidden">
                  <span className="hidden md:block text-8xl font-black text-gray-50 absolute -top-6 -right-6 z-0 select-none group-hover:text-primary/5 transition-colors">{step.number}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 relative" id="work">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">Selected Works</h2>
            <p className="text-text-muted text-lg font-light">A showcase of our finest digital products.</p>
          </div>
          <a className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-primary-light transition-colors group" href="#">
            View all projects <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className={`group cursor-pointer ${project.offset ? 'md:mt-20' : ''}`}>
              <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden aspect-[4/3] relative mb-8 transition-all hover:shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center p-12" style={{ backgroundColor: project.imageBg }}>
                  <div className="w-full h-full bg-white rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 overflow-hidden border-4 border-white flex flex-col">
                    <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div className="w-24 h-4 bg-gray-100 rounded"></div>
                        <div className="w-full h-24 bg-primary/5 rounded"></div>
                        <div className="flex gap-2">
                           <div className="w-1/2 h-12 bg-gray-50 rounded"></div>
                           <div className="w-1/2 h-12 bg-gray-50 rounded"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-text-dark group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-muted mt-2 text-lg">{project.type} • {project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 relative bg-white" id="pricing">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-text-dark mb-4">Simple, transparent pricing</h2>
          <p className="text-text-muted text-lg font-light">No hidden fees. No long-term contracts. Pause or cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className={`p-8 rounded-[2.5rem] flex flex-col gap-6 transition-all shadow-sm border ${plan.isPopular ? 'bg-text-dark text-white transform md:-translate-y-6 shadow-2xl border-gray-800 z-10' : 'bg-[#fcfcfc] border-gray-100 hover:border-gray-200'}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-text-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="font-bold text-xl">{plan.name}</h3>
                <p className={`text-sm mt-2 font-light ${plan.isPopular ? 'text-white/80' : 'text-text-muted'}`}>{plan.subtitle}</p>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl font-black">{plan.price}</span>
                {plan.period && <span className={`ml-2 font-medium ${plan.isPopular ? 'text-white/60' : 'text-text-muted'}`}>{plan.period}</span>}
              </div>
              <button className={`btn-bouncy w-full py-4 rounded-full font-bold transition-all active:scale-95 ${plan.isPopular ? 'bg-primary hover:bg-white hover:text-primary text-white' : 'border border-gray-200 text-text-dark hover:bg-black hover:text-white'}`}>
                {plan.ctaText}
              </button>
              <div className={`space-y-4 pt-4 border-t ${plan.isPopular ? 'border-white/20' : 'border-gray-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${plan.isPopular ? 'text-white/60' : 'text-text-muted'}`}>
                  {plan.isPopular ? 'Everything in MVP, plus:' : "What's Included"}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light">
                      <span className={`material-symbols-outlined text-xl ${plan.isPopular ? 'text-accent-teal' : 'text-primary'}`}>{plan.isPopular ? 'check' : 'check_circle'}</span>
                      <span className="flex-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-40 bg-white" id="faq">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-text-muted">Everything you need to know about working with us.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className={`group rounded-2xl border transition-all duration-300 ${openId === faq.id ? 'bg-white shadow-lg border-gray-100' : 'bg-[#f7f7f7] border-transparent shadow-sm'}`}>
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center font-bold text-lg p-6 cursor-pointer text-text-dark text-left"
              >
                {faq.question}
                <span className={`material-symbols-outlined transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''} text-text-muted`}>expand_more</span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-text-muted leading-relaxed font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto pt-24 pb-10 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a className="flex items-center gap-2 text-text-dark" href="#">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">blur_on</span>
              </div>
              <span className="text-xl font-bold">Webbee</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs font-light">
              We build digital products that users love and businesses rely on. Premium quality, transparent pricing, zero headaches.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#f7f7f7] rounded-full px-4 py-2 mt-2 w-max border border-gray-100">
              <span className="text-xl">🇮🇳</span>
              <span className="text-xs font-bold text-primary tracking-wide">India to Global</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted font-light">
              <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted font-light">
              <li><a className="hover:text-primary transition-colors" href="#">Web Development</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Mobile Apps</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">UI/UX Design</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">MVP Builder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-6">Connect</h4>
            <div className="flex gap-4">
              {['public', 'mail', 'share'].map((icon) => (
                <a key={icon} className="w-12 h-12 rounded-full bg-[#f7f7f7] flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-all duration-300 active:scale-90" href="#">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted font-light">© 2023 Webbee. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-text-muted font-light">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <FeaturesSection />
        <ProcessSection />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
