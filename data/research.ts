export type ResearchPaper = {
  id: string;
  title: string;
  doi: string;
  status: string;
  summary: string;
};

export const researchPapers: ResearchPaper[] = [
  {
    id: "01",
    title:
      "Attention-Enhanced GRU with Contextual Isolation Forest for Smart Factory Load Forecasting and Anomaly Detection",
    doi: "10.2139/ssrn.7177076",
    status: "Preprint/ Under Review",
    summary:
      "A hybrid forecasting and anomaly-detection framework focused on industrial time-series behavior under operational context.",
  },
  {
    id: "02",
    title:
      "Decentralized Rail Platform Capacity Allocation Under Congestion Using a Dynamic Vickrey Clarke Groves Auction with Token Taxation",
    doi: "10.2139/ssrn.7176875",
    status: "Preprint/ Under Review",
    summary:
      "A congestion-aware allocation model combining auction design, token taxation, and decentralized coordination for rail capacity planning.",
  },
  {
    id: "03",
    title:
      "MILP-Based Renewable Workload Scheduling with Battery Degradation Modeling and Privacy-Preserving LLM Integration for Smart Factories",
    doi: "TBD",
    status: "Preprint / Under Review",
    summary:
      "A scheduling and optimization system that integrates renewable planning, battery degradation modeling, and privacy-aware LLM orchestration.",
  },
];
