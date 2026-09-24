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
    title: "Systems",
    items: ["FastAPI", "Node.js", "Express.js", "React", "TypeScript"],
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
    ],
  },
];
