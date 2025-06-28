
const Index = () => {
  return (
    <div className="portfolio-container">
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Full Stack Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #00d4ff;
            --secondary-color: #7c3aed;
            --accent-color: #ff006e;
            --text-primary: #ffffff;
            --text-secondary: #b8c1ec;
            --glass-bg: rgba(255, 255, 255, 0.1);
            --glass-border: rgba(255, 255, 255, 0.2);
            --shadow-glow: 0 8px 32px rgba(0, 212, 255, 0.15);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255, 0, 110, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }

        .glass-container {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            box-shadow: var(--shadow-glow);
        }

        .section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 0.8s ease-out forwards;
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

        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
            50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
        }

        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            padding: 1rem 2rem;
            animation: slideDown 0.8s ease-out;
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

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 10px;
        }

        nav a:hover {
            color: var(--primary-color);
            background: var(--glass-bg);
            transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            animation-delay: 0.2s;
        }

        .hero-content {
            z-index: 10;
        }

        .hero h1 {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero .subtitle {
            font-size: clamp(1.2rem, 3vw, 2rem);
            color: var(--text-secondary);
            margin-bottom: 2rem;
            animation: float 3s ease-in-out infinite;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
        }

        /* About Section */
        .about {
            animation-delay: 0.4s;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text {
            padding: 2rem;
        }

        .about h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .skill-item {
            padding: 1rem;
            text-align: center;
            border-radius: 15px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .skill-item:hover {
            transform: translateY(-5px) scale(1.05);
            animation: glow 2s infinite;
        }

        /* Projects Section */
        .projects {
            animation-delay: 0.6s;
        }

        .projects h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--primary-color);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .project-card {
            padding: 2rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .project-card:hover::before {
            transform: scaleX(1);
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .project-card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }

        .tech-tag {
            padding: 0.3rem 0.8rem;
            background: var(--glass-bg);
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--text-secondary);
            border: 1px solid var(--glass-border);
        }

        .project-link {
            display: inline-block;
            margin-top: 1rem;
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .project-link:hover {
            color: var(--accent-color);
            transform: translateX(5px);
        }

        /* Blog Section */
        .blog {
            animation-delay: 0.8s;
        }

        .blog h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--primary-color);
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .blog-card {
            padding: 2rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .blog-card:hover {
            transform: translateY(-8px) rotateX(5deg);
            box-shadow: 0 25px 50px rgba(124, 58, 237, 0.2);
        }

        .blog-date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .blog-card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        /* Resume Section */
        .resume {
            animation-delay: 1s;
            text-align: center;
        }

        .resume h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: var(--primary-color);
        }

        .resume-content {
            padding: 2rem;
            margin: 2rem auto;
            max-width: 600px;
        }

        .download-btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 2rem 0;
        }

        .download-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 15px 35px rgba(124, 58, 237, 0.4);
        }

        .resume-highlights {
            list-style: none;
            text-align: left;
        }

        .resume-highlights li {
            padding: 0.5rem 0;
            position: relative;
            padding-left: 2rem;
        }

        .resume-highlights li::before {
            content: '▶';
            position: absolute;
            left: 0;
            color: var(--primary-color);
        }

        /* Contact Section */
        .contact {
            animation-delay: 1.2s;
        }

        .contact h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--primary-color);
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            max-width: 800px;
            margin: 0 auto;
        }

        .contact-form {
            padding: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 10px;
            color: var(--text-primary);
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
        }

        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .social-links {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        .social-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 1rem;
            border-radius: 10px;
            width: 100%;
        }

        .social-link:hover {
            color: var(--primary-color);
            background: var(--glass-bg);
            transform: translateX(10px);
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 2rem;
            color: var(--text-secondary);
            border-top: 1px solid var(--glass-border);
            margin-top: 4rem;
        }

        .footer-social {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
        }

        .footer-social a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.2rem;
        }

        .footer-social a:hover {
            color: var(--primary-color);
            transform: translateY(-3px);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .section {
                padding: 2rem 1rem;
            }

            nav {
                top: 1rem;
                padding: 0.5rem 1rem;
            }

            nav ul {
                gap: 1rem;
            }

            nav a {
                padding: 0.3rem 0.8rem;
                font-size: 0.9rem;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero .subtitle {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }

            .section h2 {
                font-size: 2rem;
            }

            .cta-button {
                padding: 0.8rem 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="glass-container">
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero section">
        <div class="hero-content">
            <h1>Alex Chen</h1>
            <p class="subtitle">Full Stack Developer</p>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; color: var(--text-secondary);">
                Crafting digital experiences with cutting-edge technology
            </p>
            <a href="#projects" class="cta-button">View My Work</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about section">
        <div class="about-content">
            <div class="about-text glass-container">
                <h2>About Me</h2>
                <p style="margin-bottom: 1rem;">
                    I'm a passionate full-stack developer with 5+ years of experience building 
                    modern web applications. I specialize in React, Node.js, and cloud technologies, 
                    with a keen eye for user experience and performance optimization.
                </p>
                <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge through technical writing and mentoring.
                </p>
            </div>
            <div class="skills-container glass-container">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Tech Stack</h3>
                <div class="skills-grid">
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚛️</div>
                        <div>React</div>
                    </div>
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🟢</div>
                        <div>Node.js</div>
                    </div>
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🐍</div>
                        <div>Python</div>
                    </div>
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">☁️</div>
                        <div>AWS</div>
                    </div>
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗄️</div>
                        <div>PostgreSQL</div>
                    </div>
                    <div class="skill-item glass-container">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔷</div>
                        <div>TypeScript</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects section">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card glass-container">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory management, advanced search, and responsive design.</p>
                <div class="project-tech">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">Stripe</span>
                </div>
                <a href="#" class="project-link">View Project →</a>
            </div>

            <div class="project-card glass-container">
                <h3>Task Management App</h3>
                <p>A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                <div class="project-tech">
                    <span class="tech-tag">Vue.js</span>
                    <span class="tech-tag">Express</span>
                    <span class="tech-tag">Socket.io</span>
                    <span class="tech-tag">MongoDB</span>
                </div>
                <a href="#" class="project-link">View Project →</a>
            </div>

            <div class="project-card glass-container">
                <h3>AI-Powered Analytics Dashboard</h3>
                <p>A data visualization platform with machine learning insights, featuring interactive charts and predictive analytics for business intelligence.</p>
                <div class="project-tech">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Django</span>
                    <span class="tech-tag">TensorFlow</span>
                    <span class="tech-tag">D3.js</span>
                </div>
                <a href="#" class="project-link">View Project →</a>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="blog section">
        <h2>Latest Blog Posts</h2>
        <div class="blog-grid">
            <article class="blog-card glass-container">
                <div class="blog-date">March 15, 2024</div>
                <h3>Building Scalable React Applications</h3>
                <p>Best practices for architecting large-scale React applications with performance and maintainability in mind.</p>
                <a href="#" class="project-link">Read More →</a>
            </article>

            <article class="blog-card glass-container">
                <div class="blog-date">March 8, 2024</div>
                <h3>Modern CSS Techniques</h3>
                <p>Exploring the latest CSS features including container queries, cascade layers, and advanced selectors.</p>
                <a href="#" class="project-link">Read More →</a>
            </article>

            <article class="blog-card glass-container">
                <div class="blog-date">February 28, 2024</div>
                <h3>Optimizing Node.js Performance</h3>
                <p>Advanced techniques for improving Node.js application performance and handling high-traffic scenarios.</p>
                <a href="#" class="project-link">Read More →</a>
            </article>
        </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume section">
        <h2>Resume</h2>
        <div class="resume-content glass-container">
            <a href="#" class="download-btn">Download PDF Resume</a>
            <h3 style="color: var(--primary-color); margin: 2rem 0 1rem;">Key Highlights</h3>
            <ul class="resume-highlights">
                <li>5+ years of full-stack development experience</li>
                <li>Led development of 15+ web applications from concept to deployment</li>
                <li>Expertise in React, Node.js, Python, and cloud technologies</li>
                <li>Strong background in agile methodologies and DevOps practices</li>
                <li>Active contributor to open-source projects with 1000+ GitHub stars</li>
                <li>Mentored 20+ junior developers through code reviews and pair programming</li>
            </ul>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
        <h2>Get In Touch</h2>
        <div class="contact-content">
            <form class="contact-form glass-container">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>

            <div class="social-links glass-container">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Connect With Me</h3>
                <a href="#" class="social-link">
                    <span style="font-size: 1.5rem;">💼</span>
                    <span>LinkedIn</span>
                </a>
                <a href="#" class="social-link">
                    <span style="font-size: 1.5rem;">🐙</span>
                    <span>GitHub</span>
                </a>
                <a href="#" class="social-link">
                    <span style="font-size: 1.5rem;">🐦</span>
                    <span>Twitter</span>
                </a>
                <a href="#" class="social-link">
                    <span style="font-size: 1.5rem;">📧</span>
                    <span>alex@example.com</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">Email</a>
        </div>
        <p>&copy; 2024 Alex Chen. All rights reserved. Built with passion and modern web technologies.</p>
    </footer>
</body>
</html>
        `
      }} />
    </div>
  );
};

export default Index;
