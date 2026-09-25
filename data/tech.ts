export type TechGroup = {
  title: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    title: "AI / ML",
    items: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "PINNs",
      "GNNs",
      "LLMs",
      "Explainable AI",
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Simulation",
      "Optimization",
      "Multi-Agent Systems",
      "System Design",
    ],
  },
];
