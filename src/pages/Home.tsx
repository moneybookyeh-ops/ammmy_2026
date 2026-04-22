import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/layout/PageTransition";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      id: "brutal-light",
      title: "Brutal Light",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "spatial-void",
      title: "Spatial Void",
      category: "Curatorial",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <h1 className="text-huge mb-12">
              Building<br />
              <span className="text-zinc-400">Silent</span><br />
              Spaces.
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <p className="max-w-md text-lg text-zinc-600 font-light leading-relaxed">
                A creative studio dedicated to refined architectural curation and the exploration of minimal spatial forms. We believe in the power of silence, texture, and light.
              </p>
              
              <Link 
                to="/projects" 
                className="group flex items-center space-x-4 px-8 py-5 bg-zinc-900 text-white rounded-full transition-transform hover:scale-105 active:scale-95"
              >
                <span className="text-xs uppercase tracking-widest font-bold">View Selected Works</span>
                <MoveRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Featured Studies</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Selected Works</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-zinc-500 transition-colors">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-zinc-100">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-zinc-900 text-[10px] uppercase tracking-widest font-bold">Read More</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase mb-1">{project.title}</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">{project.category}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-300">/ 0{index + 1}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-48 px-6 md:px-12 bg-zinc-900 text-white overflow-hidden relative">
        <motion.div 
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[20vh] font-extrabold tracking-tighter uppercase leading-none opacity-5 mr-32">ESSENTIALISM — ARCHITECTURE — SILENCE — CURATION — </span>
          <span className="text-[20vh] font-extrabold tracking-tighter uppercase leading-none opacity-5 mr-32">ESSENTIALISM — ARCHITECTURE — SILENCE — CURATION — </span>
        </motion.div>
        
        <div className="max-w-4xl mx-auto absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed">
            "Space is the breath of art"
          </h2>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] font-bold text-zinc-500">— Frank Lloyd Wright</p>
        </div>
      </section>
    </PageTransition>
  );
}
