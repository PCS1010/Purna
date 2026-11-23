import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Purna Chandra Sekhar - Full Stack Developer & AI Enthusiast",
  description:
    "Learn more about Purna Chandra Sekhar, a Full Stack Developer and AI Enthusiast from Andhra Pradesh, India. Specializing in React, Next.js, Python, Machine Learning, and GIS Systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f3f4f6] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-['Poppins'] mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed font-['Space_Grotesk']">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Who I Am</h2>
            <p>
              I am Purna Chandra Sekhar, a passionate Full Stack Developer and AI Enthusiast from Andhra Pradesh, India. Currently pursuing my B.Tech in Artificial Intelligence &amp; Machine Learning at Krishna Chaitanya Institute of Science &amp; Technology, I am deeply committed to building intelligent digital solutions that solve real-world problems and create meaningful impact.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">My Journey</h2>
            <p className="mb-4">
              My journey into technology began with a curiosity about how software can transform everyday experiences. Over the years, I have developed a strong foundation in multiple domains of software engineering, from frontend web development using React and Next.js to backend systems with Python and Node.js. I have also explored the fascinating world of Artificial Intelligence and Machine Learning, applying these technologies to real-world challenges in agriculture, government services, and enterprise applications.
            </p>
            <p>
              I have had the opportunity to work on diverse projects ranging from AI-powered agricultural advisory systems to geospatial analysis platforms. Each project has taught me valuable lessons about software architecture, user experience design, and the importance of building scalable, maintainable code. My participation in hackathons has further sharpened my ability to ideate quickly, collaborate effectively, and deliver functional prototypes under tight deadlines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Technical Expertise</h2>
            <p className="mb-4">My technical skill set spans across multiple domains:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-white">Frontend Development:</strong> React, Next.js, TypeScript, Tailwind CSS, Framer Motion, responsive design, and modern UI/UX principles</li>
              <li><strong className="text-white">Backend Development:</strong> Node.js, Python, Express, RESTful APIs, server-side rendering, and database management</li>
              <li><strong className="text-white">AI &amp; Machine Learning:</strong> TensorFlow, PyTorch, scikit-learn, natural language processing, computer vision, and predictive modeling</li>
              <li><strong className="text-white">GIS &amp; Geospatial:</strong> Geographic Information Systems, spatial data analysis, mapping technologies, and location-based services</li>
              <li><strong className="text-white">DevOps &amp; Tools:</strong> Git, GitHub, Vercel, Docker, CI/CD pipelines, and cloud deployment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What Drives Me</h2>
            <p className="mb-4">
              I believe that technology should be accessible, intuitive, and impactful. Whether I am building a sleek web application, training a machine learning model, or analyzing geospatial data, my goal is always the same: to create solutions that make a genuine difference in people&apos;s lives. I am particularly passionate about applying AI to sectors like agriculture and governance, where technology can empower communities and drive sustainable development.
            </p>
            <p>
              Beyond coding, I am an avid learner who stays updated with the latest trends in technology. I enjoy reading technical blogs, contributing to open-source projects, and sharing knowledge with the developer community. I believe that collaboration and continuous learning are the keys to growth in the ever-evolving world of technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Let&apos;s Connect</h2>
            <p>
              I am always open to new opportunities, collaborations, and conversations about technology. Whether you have a project idea, want to discuss AI, or simply want to connect, feel free to reach out to me at{" "}
              <a href="mailto:chpurna506@gmail.com" className="text-cyan-400 hover:underline">
                chpurna506@gmail.com
              </a>. I look forward to hearing from you and exploring how we can build something amazing together.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <a href="/" className="text-cyan-400 hover:underline font-['Space_Grotesk'] text-sm">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
