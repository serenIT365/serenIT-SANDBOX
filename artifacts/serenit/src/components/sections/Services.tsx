import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Landmark, TestTube2, RefreshCw, Microscope } from "lucide-react";

const services = [
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive strategic business decisions and optimize performance.",
    icon: BarChart3,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing protocols to ensure your software is reliable, secure, and performs flawlessly under pressure.",
    icon: ShieldCheck,
  },
  {
    title: "Governance",
    description: "Establish robust frameworks for data management, compliance, and risk mitigation across your IT landscape.",
    icon: Landmark,
  },
  {
    title: "Test Automation",
    description: "Accelerate your release cycles with comprehensive, scalable automated testing solutions.",
    icon: TestTube2,
  },
  {
    title: "Agile Methodology",
    description: "Transform your team's workflow with proven agile practices that enhance collaboration and delivery speed.",
    icon: RefreshCw,
  },
  {
    title: "Root Cause Analysis",
    description: "Deep-dive investigations to identify and permanently resolve the underlying factors of complex system failures.",
    icon: Microscope,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized expertise designed to fortify your technological infrastructure and streamline your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
