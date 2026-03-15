import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Decades of combined enterprise IT experience",
    "Proven track record of digital transformation",
    "Custom-tailored solutions for complex architectures",
    "Uncompromising commitment to quality and governance"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card/30 border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a premier IT consulting firm dedicated to helping organizations navigate the complexities of modern technology. Our approach is rooted in precision, analytical rigor, and a deep understanding of enterprise architecture.
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From implementing sophisticated test automation pipelines to establishing bulletproof data governance frameworks, we partner with your team to deliver solutions that are scalable, secure, and aligned with your strategic objectives.
            </p>

            <ul className="space-y-4 pt-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-full opacity-50" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-graphic.png`}
                alt="Abstract rendering of data architecture" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
