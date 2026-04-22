import { motion } from "motion/react";
import { PageTransition } from "../components/layout/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-8 block">About the Studio</span>
              <h1 className="text-huge mb-16">
                Curating<br />
                The Void.
              </h1>
              
              <div className="space-y-12 max-w-2xl">
                <p className="text-2xl font-light leading-relaxed text-zinc-700">
                  Monolith is a multi-disciplinary practice founded on the principles of reductionism and tactile architectural expression. We navigate the intersection between physical reality and abstract spatial concepts.
                </p>
                <div className="h-[1px] w-24 bg-zinc-200" />
                <div className="space-y-8 text-lg text-zinc-500 font-light leading-relaxed">
                  <p>
                    Since our inception, we have been committed to discovering the hidden poetry in raw materials and monumental forms. Our approach is curatorial—we don't just build; we select, interpret, and refine.
                  </p>
                  <p>
                    Every project is a study in light and shadow, exploring how minimalist interventions can transform our perception of space and time.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 self-start space-y-16">
              <div className="aspect-[3/4] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Core Principles</h3>
                  <ul className="space-y-2 text-sm font-medium uppercase tracking-wider text-zinc-800">
                    <li>— Absolute Reduction</li>
                    <li>— Material Integrity</li>
                    <li>— Spatial Resonance</li>
                    <li>— Curated Experience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Recognitions</h3>
                  <ul className="space-y-2 text-sm text-zinc-500">
                    <li className="flex justify-between"><span>ArchDaily Award</span> <span>2023</span></li>
                    <li className="flex justify-between"><span>Frame Magazine</span> <span>2022</span></li>
                    <li className="flex justify-between"><span>Minimalism Today</span> <span>2021</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
