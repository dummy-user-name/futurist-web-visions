
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 animate-[slideDown_0.8s_ease-out]">
        <ul className="flex gap-8 text-sm font-medium">
          <li><a href="#hero" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">Home</a></li>
          <li><a href="#about" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">About</a></li>
          <li><a href="#projects" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">Projects</a></li>
          <li><a href="#blog" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">Blog</a></li>
          <li><a href="#resume" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">Resume</a></li>
          <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center relative py-16 px-8 opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
        <div className="z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Alex Chen
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 mb-8 animate-[float_3s_ease-in-out_infinite]">
            Full Stack Developer
          </p>
          <p className="text-lg mb-8 text-slate-400 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technology
          </p>
          <a 
            href="#projects" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,212,255,0.4)] relative overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 max-w-6xl mx-auto opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.15)]">
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
            <p className="mb-4 text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building 
              modern web applications. I specialize in React, Node.js, and cloud technologies, 
              with a keen eye for user experience and performance optimization.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.15)]">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '⚛️', name: 'React' },
                { icon: '🟢', name: 'Node.js' },
                { icon: '🐍', name: 'Python' },
                { icon: '☁️', name: 'AWS' },
                { icon: '🗄️', name: 'PostgreSQL' },
                { icon: '🔷', name: 'TypeScript' }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] cursor-pointer"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-sm font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 max-w-6xl mx-auto opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'E-Commerce Platform',
              description: 'A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory management, advanced search, and responsive design.',
              tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
            },
            {
              title: 'Task Management App',
              description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
              tech: ['Vue.js', 'Express', 'Socket.io', 'MongoDB']
            },
            {
              title: 'AI-Powered Analytics Dashboard',
              description: 'A data visualization platform with machine learning insights, featuring interactive charts and predictive analytics for business intelligence.',
              tech: ['Python', 'Django', 'TensorFlow', 'D3.js']
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,212,255,0.2)] cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{project.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-block text-cyan-400 font-medium hover:text-pink-400 transition-all duration-300 hover:translate-x-2"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-8 max-w-6xl mx-auto opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              date: 'March 15, 2024',
              title: 'Building Scalable React Applications',
              description: 'Best practices for architecting large-scale React applications with performance and maintainability in mind.'
            },
            {
              date: 'March 8, 2024',
              title: 'Modern CSS Techniques',
              description: 'Exploring the latest CSS features including container queries, cascade layers, and advanced selectors.'
            },
            {
              date: 'February 28, 2024',
              title: 'Optimizing Node.js Performance',
              description: 'Advanced techniques for improving Node.js application performance and handling high-traffic scenarios.'
            }
          ].map((post, index) => (
            <article 
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:rotate-x-1 hover:shadow-[0_25px_50px_rgba(124,58,237,0.2)] cursor-pointer"
            >
              <div className="text-sm text-slate-400 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{post.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{post.description}</p>
              <a 
                href="#" 
                className="inline-block text-cyan-400 font-medium hover:text-pink-400 transition-all duration-300 hover:translate-x-2"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-8 max-w-4xl mx-auto text-center opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">Resume</h2>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.15)] max-w-2xl mx-auto">
          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_35px_rgba(124,58,237,0.4)] mb-8"
          >
            Download PDF Resume
          </a>
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Key Highlights</h3>
          <ul className="text-left space-y-3">
            {[
              '5+ years of full-stack development experience',
              'Led development of 15+ web applications from concept to deployment',
              'Expertise in React, Node.js, Python, and cloud technologies',
              'Strong background in agile methodologies and DevOps practices',
              'Active contributor to open-source projects with 1000+ GitHub stars',
              'Mentored 20+ junior developers through code reviews and pair programming'
            ].map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">▶</span>
                <span className="text-slate-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 max-w-4xl mx-auto opacity-0 translate-y-12 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.15)]">
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 resize-vertical"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
            >
              Send Message
            </button>
          </form>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.15)]">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Connect With Me</h3>
            <div className="space-y-4">
              {[
                { icon: '💼', label: 'LinkedIn' },
                { icon: '🐙', label: 'GitHub' },
                { icon: '🐦', label: 'Twitter' },
                { icon: '📧', label: 'alex@example.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:bg-white/10 p-4 rounded-xl transition-all duration-300 hover:translate-x-3"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-8 border-t border-white/20 mt-16">
        <div className="flex justify-center gap-8 mb-4">
          {['LinkedIn', 'GitHub', 'Twitter', 'Email'].map((social, index) => (
            <a 
              key={index}
              href="#" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 text-lg font-medium"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-slate-400">
          &copy; 2024 Alex Chen. All rights reserved. Built with passion and modern web technologies.
        </p>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Index;
