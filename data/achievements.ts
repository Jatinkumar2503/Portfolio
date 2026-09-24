export type Achievement = {
  value: string;
  label: string;
};

export type Certification = {
  name: string;
  issuer: string;
  type: string;
};

export const achievements: Achievement[] = [
  { value: "04×", label: "Hackathon Winner" },
  { value: "PATENT", label: "Filed" },
  { value: "JAPAN", label: "International Hackathon Selection" },
  { value: "ISRO", label: "Hackathon Selection" },
  { value: "RESEARCH", label: "Preprints / Papers" },
];

export const certifications: Certification[] = [
  { name: "IAEA Nuclear Safety Certificate", issuer: "IAEA", type: "Nuclear Safety" },
  { name: "Oracle Cybersecurity Certificate", issuer: "Oracle", type: "Cybersecurity" },
  { name: "Oracle Data Science Certificate", issuer: "Oracle", type: "Data Science" },
  { name: "Deloitte AI / ML Certificate", issuer: "Deloitte", type: "AI / ML" },
];
