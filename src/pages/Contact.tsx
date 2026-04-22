import { motion } from "motion/react";
import { PageTransition } from "../components/layout/PageTransition";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-40 pb-32 px-6 md:px-12 bg-[#F8F8F8] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-8 block">Connect</span>
              <h1 className="text-huge mb-12">Talk<br />To Us.</h1>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold text-zinc-300">General Inquiries</h3>
                  <p className="text-2xl font-light hover:text-zinc-500 transition-colors cursor-pointer">hello@monolith.studio</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold text-zinc-300">Studio Location</h3>
                  <p className="text-2xl font-light">
                    Bleichstraße 51, 60313<br />
                    Frankfurt am Main, Germany
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-extrabold text-zinc-300">Social Presence</h3>
                  <div className="flex flex-col space-y-2">
                    {["Instagram", "Behance", "LinkedIn", "X / Twitter"].map((platform) => (
                      <a key={platform} href="#" className="text-sm uppercase tracking-widest font-bold text-zinc-600 hover:text-zinc-900 transition-colors flex items-center group">
                        {platform} <ArrowRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-16 border-brutalist shadow-sm">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-colors font-light text-xl"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-colors font-light text-xl"
                      placeholder="name@company.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-colors font-light text-xl resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button className="w-full bg-zinc-900 text-white py-6 uppercase tracking-[0.3em] text-xs font-extrabold hover:bg-zinc-800 transition-colors flex justify-center items-center group">
                  Send Message
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
