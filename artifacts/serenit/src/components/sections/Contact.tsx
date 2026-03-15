import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Send, Loader2, Mail, MapPin } from "lucide-react";

// Frontend validation schema aligning with backend ContactRequest
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await mutation.mutateAsync({ data });
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isPending = mutation.isPending;

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to elevate your IT infrastructure? Reach out to discuss how our consulting services can empower your enterprise.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Us</p>
                  <a href="mailto:info@serenit.org" className="hover:text-foreground transition-colors">info@serenit.org</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Headquarters</p>
                  <p>Global Remote Operations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-xl shadow-black/20">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      id="name"
                      {...form.register("name")}
                      disabled={isPending}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive font-medium">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      disabled={isPending}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                      placeholder="jane@company.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive font-medium">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name (Optional)</label>
                  <input
                    id="company"
                    {...form.register("company")}
                    disabled={isPending}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help? *</label>
                  <textarea
                    id="message"
                    {...form.register("message")}
                    disabled={isPending}
                    rows={5}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground resize-none disabled:opacity-50"
                    placeholder="Tell us about your project requirements..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive font-medium">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
