import { projects } from "../data/projects";

// 1. Extract and flatten all skill arrays from projects
// 2. Use a Set to remove duplicates
// 3. Sort alphabetically for a clean UI
const dynamicSkills = Array.from(
  new Set(
    projects.flatMap((project) => project.skills || [])
  )
).sort();

export const manualSkills = {
  certifications: [
    { name: "A.S. in Engineering", source: "Foothill College" },
    { name: "A.S. in Physics", source: "Foothill College" },
    { name: "A.S.T. in Physics", source: "Foothill College" },
    { name: "A.S.T. in Mathematics", source: "Foothill College" },
    { name: "L1 Rocketry Certification", source: "National Association of Rocketry" },
    { name: "L2 Rocketry Certification (In Progress)", source: "Tripoli Rocketry Association" },
  ],
  // This now pulls "LAMMPS", "OVITO", "SolidWorks", etc. automatically
  fromProjectsAndResearch: dynamicSkills
};