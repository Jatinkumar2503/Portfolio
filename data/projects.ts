export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  architecture: string[];
  metrics: Metric[];
  technologies: string[];
  links: { label: string; href: string; primary?: boolean }[];
  previewImages: string[];
  tone: "emerald" | "cyan" | "slate";
};

export const projects: Project[] = [
  {
    name: "NEXUS AI",
    subtitle: "Multi-Agent Decision Intelligence for High-Density Railway Corridors",
    description:
      "AI-native decision-support and autonomous dispatching for dense railway operations built around digital twins, graph intelligence, and low-latency inference.",
    problem:
      "Rail corridors operate in complex, congestion-heavy conditions where dispatching decisions must balance throughput, safety, and dynamic network constraints under time pressure.",
    approach:
      "Model the corridor as a dynamic graph, simulate operational conditions with a digital twin, and pair a multi-agent decision layer with deterministic safety enforcement.",
    architecture: [
      "SimPy digital twin",
      "NetworkX infrastructure graph",
      "multi-agent decision layer",
      "spatiotemporal transformer",
      "VCG-based allocation",
      "deterministic safety gate",
      "edge inference",
    ],
    metrics: [
      { label: "P50 INFERENCE LATENCY", value: "3.62 ms", detail: "median inference time on the operational model" },
      { label: "P95 INFERENCE LATENCY", value: "6.46 ms", detail: "tail latency for near-real-time dispatch decisions" },
      { label: "P99 INFERENCE LATENCY", value: "7.02 ms", detail: "worst-case inference under benchmark load" },
      { label: "DELAY REDUCTION", value: "33.5%", detail: "measured reduction in benchmark delay exposure" },
      { label: "SAFETY VIOLATIONS", value: "0%", detail: "safety violations during benchmark evaluation" },
    ],
    technologies: [
      "Python",
      "SimPy",
      "NetworkX",
      "PyTorch",
      "Transformers",
      "Multi-Agent Systems",
      "Optimization",
    ],
    links: [
      { label: "VIEW PROJECT", href: "#work", primary: true },
      { label: "GITHUB", href: "https://github.com/Jatinkumar2503/Nexus--AI.git" },
      { label: "LIVE DEMO", href: "https://nexus-ai-7nb2.vercel.app/" },
    ],
    previewImages: [
      "/projects/nexus-ai.png",
      "/projects/nexusai.png.png",
      "/projects/nexusai2.png.png",
      "/projects/nexusai3.png.png",
      "/projects/nexusai5.png.png",
      "/projects/nexsuai4 (1).png",
      "/projects/nexsuai4 (2).png",
    ],
    tone: "emerald",
  },
  {
    name: "PRAJNA",
    subtitle: "Physics-Constrained AI for Nuclear Safety Research",
    description:
      "Research prototype for physics-constrained temporal forecasting, anomaly detection, and safety-oriented decision support in a digital twin context.",
    problem:
      "Operational reactor data is not publicly available, so simulation is used to explore physically meaningful behavior while keeping the system grounded in safety constraints.",
    approach:
      "Blend multiphysics simulation with constrained learning, temporal forecasting, and anomaly detection to estimate time-to-threshold behavior under uncertainty.",
    architecture: [
      "physics-constrained learning",
      "multiphysics simulation",
      "temporal forecasting",
      "anomaly detection",
      "digital twin concepts",
      "time-to-threshold analysis",
      "safety-oriented decision support",
      "PINNs",
      "GNN / temporal modeling",
    ],
    metrics: [
      { label: "MODEL PARAMETERS", value: "264M", detail: "large-scale parameter architecture" },
      { label: "MONTE CARLO SIMULATIONS", value: "100K", detail: "physics-based simulation runs" },
      { label: "INPUT CHANNELS", value: "16", detail: "observed system channels" },
      { label: "READING WINDOW", value: "45", detail: "sequence window for temporal modeling" },
      { label: "STATUS", value: "PATENT FILED", detail: "research concept under protection" },
    ],
    technologies: [
      "PINNs",
      "GNNs",
      "Python",
      "TensorFlow",
      "Simulation",
      "Temporal Modeling",
      "Explainable AI",
    ],
    links: [
      { label: "VIEW PROJECT", href: "#work", primary: true },
      { label: "GITHUB", href: "https://github.com/Jatinkumar2503/Prajna.git" },
    ],
    previewImages: [
      "/projects/prajna.png",
      "/projects/prajna.png.png",
      "/projects/prajna.png (2).png",
      "/projects/prajna.svg",
    ],
    tone: "cyan",
  },
  {
    name: "PRAGATI AI",
    subtitle: "Industrial AI Platform for Sustainability and Optimization",
    description:
      "A decision-support platform for industrial optimization, load forecasting, anomaly detection, and sustainability-aware scheduling.",
    problem:
      "Industrial operations require balanced planning across forecasting uncertainty, equipment health, and energy usage while staying aligned with sustainability targets.",
    approach:
      "Combine predictive modeling, optimization, and orchestration into a unified AI layer that supports operational decision-making across energy and production constraints.",
    architecture: [
      "load forecasting",
      "anomaly detection",
      "MILP optimization",
      "AI orchestration",
      "industrial sustainability",
      "resource-aware planning",
    ],
    metrics: [
      { label: "FOCUS", value: "INDUSTRY", detail: "industrial load and sustainability planning" },
      { label: "MODEL TYPE", value: "AI + OPT", detail: "forecasting and optimization integration" },
      { label: "SYSTEM GOAL", value: "EFFICIENT", detail: "sustainability-aware scheduling" },
    ],
    technologies: [
      "Machine Learning",
      "MILP",
      "FastAPI",
      "Node.js",
      "React",
      "Optimization",
      "Industrial AI",
    ],
    links: [
      { label: "VIEW PROJECT", href: "#work", primary: true },
      { label: "GITHUB", href: "https://github.com/Jatinkumar2503/Pragati---AI-sustainable-energy-.git" },
    ],
    previewImages: [
      "/projects/pragati-ai.png",
      "/projects/pragati (1).png",
      "/projects/pragati (2).png",
      "/projects/pragati (3).png",
      "/projects/pragati (4).png",
      "/projects/pragati (5).png",
    ],
    tone: "slate",
  },
];
