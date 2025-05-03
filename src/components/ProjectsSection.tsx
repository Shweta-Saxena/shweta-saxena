
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";

const projects = [
  {
    title: "US Med Premium",
    period: "Feb 2024 - Present",
    description: "A comprehensive patient management system with robust features for managing patient records, appointments, and medical histories.",
    contributions: [
      "Developed using Next.js 14, Tailwind CSS, and TypeScript",
      "Implemented React Hook Form and Zod for form validation",
      "Utilized Shadcn UI for modern UI components",
      "Employed Redux Toolkit and Redux Persist for state management",
      "Led a team of 3 developers, coordinating tasks and setting milestones"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Shadcn UI", "Redux Toolkit"],
  },
  {
    title: "The BodyShop",
    period: "May 2022 - January 2024",
    description: "Migrated the existing ReactJS website to Next.js for enhanced performance and user experience with seamless payment solutions.",
    contributions: [
      "Migrated from ReactJS to Next.js for enhanced performance",
      "Integrated seamless payment solutions for secure transactions",
      "Optimized for SEO and improved performance with Server-Side Rendering",
      "Developed as a Progressive Web App (PWA) for offline functionality"
    ],
    technologies: ["Next.js", "React", "SSR", "SEO Optimization", "PWA", "Payment Integration"],
  },
  {
    title: "The BodyShop CMS Panel",
    period: "August 2021 - April 2022",
    description: "Solely handled the entire CMS panel's frontend development, taking ownership of the full UI, API integrations, and frontend functionality.",
    contributions: [
      "Solely handled the entire CMS panel's frontend development",
      "Took ownership of the full UI, API integrations, and frontend functionality",
      "Developed a fully responsive and accessible UI using Material UI v4",
      "Ensured optimal performance across devices"
    ],
    technologies: ["React", "JavaScript", "Material UI v4", "Responsive Design", "API Integration"],
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto text-white">Featured Projects</h2>
            <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
              A selection of my recent work and contributions to impactful projects.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <Card className="border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white/95 backdrop-blur-sm hover:bg-white">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-sky-600 border-sky-200 bg-sky-50 w-fit">
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-2 text-slate-600">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="text-lg font-semibold mb-3 text-slate-700">Key Contributions:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 mb-6">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="text-slate-600">{contribution}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                          {tech}
                        </Badge>
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                    View Project Details
                  </Button>
                </CardFooter>
                
                {/* Subtle line animation on hover */}
                <motion.div 
                  className="h-0.5 bg-sky-500 w-0 group-hover:w-full transition-all duration-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "5%" }}
                  whileHover={{ width: "100%" }}
                  viewport={{ once: true }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
