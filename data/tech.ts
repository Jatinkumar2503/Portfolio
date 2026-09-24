export type TechGroup = {
  title: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    title: "AI / ML",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "PINNs",
      "GNNs",
      "Transformers",
      "LLMs",
      "RAG",
      "Reinforcement Learning",
      "Explainable AI",
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "JWT Auth",
      "Prisma",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "Cloud Deployment",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Simulation",
      "Optimization",
      "NetworkX",
      "SimPy",
      "MILP",
      "Multi-Agent Systems",
      "Distributed Systems",
      "Data Pipelines",
      "System Design",
    ],
  },
];
