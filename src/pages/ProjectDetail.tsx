import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { PageTransition } from "../components/layout/PageTransition";
import { ArrowLeft, MoveRight } from "lucide-react";

const allProjects = {
  "brutal-light": {
    title: "Brutal Light",
    description: "An exploration of verticality and concrete textures under harsh sunlight. This project studies the relationship between cast shadows and geometric permanence.",
    category: "Architecture",
    year: "2024",
    client: "National Gallery of Art",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200",
    ]
  },
  "spatial-void": {
    title: "Spatial Void",
    description: "A curatorial study of negative space within high-density urban environments. How can nothingness provide more value than build form?",
    category: "Curatorial",
    year: "2023",
    client: "Metropolitan Institute",
    images: [
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80&w=1200",
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects[id as keyof typeof allProjects] || allProjects["brutal-light"];

  return (
    <PageTransition>
      <div className="pt-40 pb-32 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link to="/projects" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-16 group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Index</span>
          </Link>

          <header className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <h1 className="text-huge mb-8">{project.title}</h1>
                <p className="text-2xl font-light text-zinc-600 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
                <div className="grid grid-cols-2 gap-8 py-8 border-t border-zinc-100">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-300 mb-2">Category</h3>
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-300 mb-2">Year</h3>
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-300 mb-2">Client</h3>
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="space-y-12">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="aspect-[16/9] w-full bg-zinc-100 overflow-hidden"
              >
                <img src={img} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-cover grayscale" />
              </motion.div>
            ))}
          </section>

          <section className="mt-32 pt-32 border-t border-zinc-100 flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-8">Next Project</p>
            <Link to="/projects" className="group">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-8 group-hover:text-zinc-500 transition-colors">Spatial Void</h2>
              <div className="flex justify-center">
                <MoveRight size={32} className="text-zinc-200 group-hover:text-zinc-900 transition-colors transform group-hover:translate-x-4" />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
