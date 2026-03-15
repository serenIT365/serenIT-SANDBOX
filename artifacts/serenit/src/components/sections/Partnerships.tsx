import { motion } from "framer-motion";
import { Heart, GraduationCap, Globe, Smartphone } from "lucide-react";

const partnerships = [
  {
    title: "Non-Profit Organizations",
    description: "We are committed to empowering mission-driven organizations with enterprise-grade IT consulting at accessible rates. We help non-profits modernize systems, improve data governance, and stretch every technology dollar further.",
    icon: Heart,
    badge: "Community Impact",
  },
  {
    title: "IT Training",
    description: "Upskill your workforce with targeted training programs in QA, test automation, data analytics, and agile methodologies. Our hands-on workshops and mentoring programs equip your team with the skills to succeed.",
    icon: GraduationCap,
    badge: "Skills Development",
  },
  {
    title: "Website Development",
    description: "From concept to launch, we design and build performant, accessible websites tailored to your brand. Whether a corporate presence, a non-profit platform, or a community portal — we deliver clean, modern web experiences.",
    icon: Globe,
    badge: "Digital Presence",
  },
  {
    title: "App Development",
    description: "We partner with organizations to build custom mobile and web applications that solve real problems. Our agile development approach ensures your app is delivered on time, on budget, and built to scale.",
    icon: Smartphone,
    badge: "Custom Solutions",
  },
];

export function Partnerships() {
  return (
    <section id="partnerships" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 border border-primary/30 rounded-full px-4 py-1.5 bg-primary/10">
            Partnership Opportunities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Partnering for <span className="text-primary">Impact</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We extend our expertise beyond traditional consulting to create meaningful partnerships that drive lasting change across communities and industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {partnerships.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">Interested in partnering with us?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
