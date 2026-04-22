import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/layout/PageTransition";
import { MoveUpRight } from "lucide-react";

const allProjects = [
  {
    id: "brutal-light",
    title: "Brutal Light",
    category: "Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "spatial-void",
    title: "Spatial Void",
    category: "Curatorial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "monolith-pavilion",
    title: "Monolith Pavilion",
    category: "Installation",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518005020250-68a0d0d75f14?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "tessellated-forms",
    title: "Tessellated Forms",
    category: "Digital Study",
    year: "2022",
    image: "https://images.unsplash.com/photo-1515343483170-f4429558da47?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "shadow-house",
    title: "Shadow House",
    category: "Residential",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "urban-fragment",
    title: "Urban Fragment",
    category: "Urbanism",
    year: "2021",
    image: "https://images.unsplash.com/photo-1449156001931-828310931885?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <header className="mb-32">
            <h1 className="text-huge mb-12">Index<br />Of Works.</h1>
            <div className="flex flex-wrap gap-4 border-b border-zinc-100 pb-8">
              {["All", "Architecture", "Curatorial", "Installation", "Residential"].map((filter) => (
                <button 
                  key={filter} 
                  className={`text-[10px] uppercase tracking-widest font-bold px-6 py-2 rounded-full border ${
                    filter === "All" ? "bg-zinc-900 text-white border-zinc-900" : "bg-transparent border-zinc-200 text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 transition-all"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {allProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group cursor-pointer block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-zinc-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute top-6 right-6 p-4 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      <MoveUpRight size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-zinc-100 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight uppercase group-hover:text-zinc-500 transition-colors">{project.title}</h3>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mt-1">{project.category}</p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300 font-bold tracking-widest">{project.year}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
