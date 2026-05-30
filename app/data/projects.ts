export const projects = [
  /*
  {
    slug: "template",
    order: #,
    name: "Name of Project",
    subtitle: "subtitle",
    date: "idk",
    status: "past, current, or future",
    accent: "#C4A882",
    description: [
      `smt smt
      second line`,
    ],
    skills: ["tag1", "tag2"],
    short: [
      `description on the card`,
    ],
    images: [
      { src: "/images/template-1.png", caption: "caption" },
      { src: "/images/template-2.jpg", caption: "caption" },
    ],
    documentation: [
      { label: "label", href: "/docs/jester-buildlog.pdf" },
    ],
  }, 
  */
   {
    slug: "jester",
    order: 1,
    name: "Jester Rocket",
    subtitle: "L2 Capable Rocket — Scrap Build Challenge",
    date: "April 2026 — Present",
    status: "current",
    accent: "#C4A882",
    description: [
      `Jester is an L2-capable rocket built entirely from free scrap parts as a 
      personal engineering challenge on a sub-$40 budget (excluding motor). The 
      project began as a creative exercise in resourcefulness and hands-on engineering, 
      with the goal of designing and launching a high-performance rocket, using only 
      materials that could be sourced for free from the Engineering department, at the 
      University of California or purchased within the strict budget constraint, of 
      $40 (excluding motor). Jester represents a unique blend of creativity, 
      engineering skill, and frugality, demonstrating that with ingenuity and 
      determination, it's possible to achieve impressive results even with limited 
      resources.`,
    ],
    skills: ["SolidWorks", "OpenRocket", "Budget Design", "Laser Cutting"],
    short: [
      `L2-capable rocket built entirely from free scrap parts as a personal engineering
      challenge on a sub-$40 budget (excluding motor)`,
    ],
    images: [
      { src: "/images/jester-1.png", caption: "Rocket Rendered Image" },
      { src: "/images/jester-2.jpg", caption: "OpenRocket" },
    ],
    documentation: [
      { label: "Build Log", href: "/docs/jester-buildlog.pdf" },
      { label: "OpenRocket Simulation File", href: "/docs/jester-sim.ork" },

    ],
  },
  {
    slug: "ROK",
    order: 2,
    name: "ROK Robot",
    subtitle: `Autonomous Pneumatic "Kick-Propulsion" Robot`,
    date: "March 2026 — Present",
    status: "current",
    accent: "#C4A882",
    description: [
      `I am spearheading the design and CAD development of a 25lb autonomous robot featuring 
      a unique pneumatic "kick-propulsion" system. Tasked with integrating a specific 
      set of pneumatic components into a high-profile, 16-inch tall chassis, my primary 
      focus was balancing dynamic stability with precision maneuverability. I engineered 
      the structural frame to withstand the jarring impulses of the pneumatic actuator 
      while managing a high center of gravity, ensuring the machine could follow designated 
      pathways without tipping or losing traction.`,

      `To achieve precise navigation, I designed and modeled a custom Ackermann steering 
      geometry optimized for a square 6.5" wheelbase. I calculated the exact interior 
      angles and tie-rod lengths required to eliminate tire scrubbing and minimize 
      steering resistance. By leveraging SolidWorks for full-system assembly and motion studies, 
      I successfully integrated the propulsion "swing window" within the steering linkage, 
      resulting in a robust, functional machine that met all project criteria and performance 
      goals.`,
    ],
    skills: ["SolidWorks", "Robotics", "3D Printing", "Laser Cutting"],
    short: [
      `A 25lb autonomous robot designed with a square 6.5" chassis to stabilize a unique 
      pneumatic impulse propulsion system`,
    ],
    images: [
      { src: "/images/ROK-Robot-1.png", caption: "CAD Model" },
    ],
    documentation: [
      { label: "Nothing yet ", href: "/docs/ROK-docs.pdf" },
    ],
  }, 
  {
    slug: "saddlehorse",
    order: 3,
    name: "Saddlehorse",
    subtitle: "High-Powered L2 Rocket Program",
    date: "February 2026 — Present",
    status: "current",
    accent: "#6B1F2A",
    description: [
      `I designed this multi‑phase project to build the manufacturing, simulation, 
      and avionics skills required for high‑power rocketry. The program includes:`,
      ` `,
      `- Mid‑Power Dual Deploy Rocket: Training in dual‑deploy avionics and flight 
      electronics.`,
      `- Level 1 Scratch Build: Fully scratch‑built airframe with a 3D‑printed nosecone
      and boattail modeled in SolidWorks; carbon‑fiber layups reinforcing 3D‑printed 
      fins.`,
      `- Level 2 Rocket: A final build integrating avionics, composites, and simulation 
      skills developed in the first two phases.`,
      ` `,
      `I am currently focused on the L1 rocket, refining the composite layups and 
      validating stability and performance through OpenRocket simulations.`,
    ],

    skills: ["SolidWorks", "OpenRocket", "Flight Computer Integration", "Pyrotechnic Systems", "Composite Fabrication"],
    short: [
      `Multi-stage curriculum to design, build, and launch a high-powered L2 rocket with 
      an integrated flight computer, composite materials, and pyrotechnic systems.`,
    ],
    images: [
      { src: "/images/saddlehorse-1.jpg", caption: "Design render" },
      { src: "/images/saddlehorse-2.jpg", caption: "Parts layout" },
      { src: "/images/saddlehorse-3.jpg", caption: "Simulation output" },
    ],
    documentation: [
      { label: "OpenRocket Simulation File", href: "/docs/saddlehorse-sim.ork" },
      { label: "Design Report", href: "/docs/saddlehorse-report.pdf" },
    ],
  },
  {
    slug: "website",
    order: 4,
    name: "Vercel Portfolio Website",
    subtitle: "You're looking at it!",
    date: "April 2026 — Present",
    status: "current",
    accent: "#6B1F2A",
    description: [`
      Designed and developed a full-stack personal portfolio website from scratch. 
      Built with Next.js and TypeScript, the site features a dynamic project slideshow, 
      individual project pages with image lightboxes, a skills tracker that pulls 
      automatically from project data, and a multi-page layout deployed continuously 
      via Vercel. Every design decision — from the maroon and tan color palette to the 
      typographic hierarchy — was made to reflect a clean, engineering-forward aesthetic.
      `,],
    skills: ["Next.js", "TypeScript", "Vercel", "UI/UX Design"],
    short: [
      "A custom-built digital portfolio built with Next.js and TypeScript, deployed continuously via Vercel to document my projects and skills",
    ],
    images: [
      { src: "https://api.microlink.io/?url=https://ryscorpuz.vercel.app/&screenshot=true&meta=false&embed=screenshot.url", caption: "Live portfolio preview" },
    ],
    documentation: [
      { label: "Github Repository", href: "https://github.com/RysPuff/ryscorpuz-portfolio" },
    ],
  },
  {
    slug: "kohaku",
    order: 3,
    name: "Kohaku Comet",
    subtitle: "L1 Certification Rocket",
    date: "December 2024 — February 2026",
    status: "past",
    accent: "#6B1F2A",
    description: [
      `I built and launched an L1-certified rocket with a koi fish 
      paint job as a solo project with the capability to launch as an 
      L2. By combining 3D modeling, laser cutting, simulation, and other 
      methods, I gained hands-on experience in rocket design, propulsion 
      systems, and safety protocols. This project allowed me to apply my 
      knowledge of applied physics and develop practical engineering skills.`,
    ],
    skills: ["SolidWorks", "Laser Cutting", "OpenRocket"],
    short: [
      "Designed, built, and launched an L1-certified rocket with a koi fish paint job as a solo project",
      "Self-taught rocket design, propulsion systems, and safety protocols using SolidWorks, laser cutting, and simulation",
    ],
    images: [
      { src: "/images/kohaku-1.jpg", caption: "Me and the Kohaku Comet" },
      { src: "/images/kohaku-2.jpg", caption: "Rocket on the Launch Pad" },
      { src: "/images/kohaku-3.jpg", caption: "Kohaku in the Sky" },
      { src: "/images/kohaku-4.jpg", caption: "Kohaku Coming Down" },
    ],
    documentation: [
      { label: "Drawing Sheets", href: "/docs/kohaku-sheets.pdf" },
    ],
  },
  {
    slug: "cao-research-group",
    order: 4,
    name: "Cao Research Group",
    subtitle: "Molecular Dynamics — Grain Boundary Research",
    date: "June 2025 — August 2025",
    status: "past",
    accent: "#7B5EA7",
    description: [` Material failure mechanisms like fracture and corrosion pose 
    critical risks to aerospace structures. This work leverages Molecular Dynamics (MD) 
    simulations via LAMMPS to provide atomic-level insights that traditional tensile 
    testing cannot capture. By integrating Newton's laws of motion to track atomic 
    forces, I characterized the failure modes of symmetric tilt grain boundaries and 
    performed visual post-processing in OVITO to identify dislocation and fracture 
    propagation.`, 
    ``,
    `To validate this predictive framework, I simulated a tensile test 
    on a Σ5(310) symmetric tilt grain boundary in aluminum, calculating a grain 
    boundary energy of 564 mJ/m². This result aligns closely with the 500–600 mJ/m² 
    theoretical range reported in experimental literature, confirming the model's 
    accuracy. By translating these raw trajectories into actionable MATLAB-based 
    stress-strain data, this project demonstrates a reliable, cost-effective method 
    for evaluating material performance in high-stress environments without the 
    overhead of physical prototyping.`, ],
    skills: ["LAMMPS", "OVITO", "MATLAB", "Molecular Dynamics", "Materials Science", "Data Visualization", "Research Presentation"],
    short: [
      `Utilized LAMMPS and OVITO to perform molecular dynamics simulations on Σ5(310) 
      aluminum grain boundaries, leveraging MATLAB to analyze interfacial energy and 
      nanoscale fracture behavior.`,
    ],
    images: [
      { src: "/images/cao-1.jpg", caption: "Grain Boundary Formation" },
      { src: "/images/cao-2.jpg", caption: "Fracture via Modeled Tensile Test (MATLAB & OVITO)" },
    ],
    documentation: [
      { label: "Research Poster", href: "/docs/cao-1.pdf" },
    ],
  },
  {
    slug: "rc-plane",
    order: 5,
    name: "Fire-Flight: RC Plane",
    subtitle: "Engineering Club — Evacuation Routes",
    date: "January 2025 — August 2025",
    status: "past",
    accent: "#C4A882",
    description: [
      `"Fire-Flight: ML-Driven Aerial Sensing for Wildfire Prediction 
    and Smart Evacuation," explores how a remote-controlled plane we created can 
    collect data to enhance machine-learning models that support wildfire response 
    and evacuation strategies. I worked on the structual aspects of the plane 
    verifying the flight capablities utilizing MATLAB and SolidWorks.`
    ],
    skills: ["SolidWorks", "CFD", "MATLAB", "Structural Analysis", "Aerodynamics", "Research Presentation"],
    short: [
      "Led SolidWorks structural analysis and CFD for an RC plane studying evacuation routes",
    ],
    images: [
      { src: "/images/rcplane-1.jpg", caption: "RC Plane" },
      { src: "/images/rcplane-2.jpg", caption: "RC Plane Team at UC Berkeley" }, 
      {  src: "/images/rcplane-3.JPG", caption: "Symposium Presentation Team " },
    ],
    documentation: [
      { label: "Symposium Slides (presented at UC Berkeley)", href: "/docs/rcplane-1.pdf" },
      { label: "MATLAB Scripts", href: "/docs/rcplane-matlab.zip" },
    ],
  },
  {
    slug: "earth-to-didymos",
    order: 2,
    name: "Earth → Didymos",
    subtitle: "Interplanetary Mission Design",
    date: "February 2026 — March 2026",
    status: "past",
    accent: "#6B1F2A",
    description: [
      `Performed preliminary interplanetary mission analysis for a transfer from 
      Earth to Near-Earth Object 65803 Didymos as part of a university astrodynamics 
      course. Implemented a full astrodynamics toolkit in MATLAB from scratch, including 
      Keplerian element conversions, Kepler's equation solver via Newton-Raphson 
      iteration, and Lambert's problem using universal variables. Conducted mission 
      trajectory optimization by generating a porkchop plot over a 1000-day launch window 
      to identify optimal departure and arrival dates minimizing total transfer ΔV. 
      Visualized results including 3D transfer trajectories and orbital mechanics of both 
      Earth and Didymos.`,
      ``,
      `Didymos is the target of NASA's DART mission, the world's first planetary defense 
      demonstration, which successfully impacted the asteroid in September 2022. It is a 
      well-studied and mission-relevant object for trajectory analysis.`,
      ],
    skills: ["MATLAB", "Astrodynamics", "Trajectory Optimization", "Orbital Mechanics", "Data Visualization"],
    short: [
      `Developed a MATLAB astrodynamics toolkit to solve Lambert's problem and optimize ΔV for a 1000-day Earth-to-Didymos 
      launch window via porkchop plot analysis.`,
    ],
    images: [
      { src: "/images/didymos-1.jpg", caption: "Porkchop Plot for Earth-to-Didymos Transfer" },
      { src: "/images/didymos-2.png", caption: "Earth → Didymos Transfer Trajectory" },
      { src: "/images/didymos-3.jpg", caption: "Optimal Earth → Didymos Transfer Trajectory" },
    ],
    documentation: [
      { label: "Project Files (download)", href: "/docs/SRCorpuz Astronautics Project.zip" },
    ],
  },
    {
    slug: "nyx-node",
    order: 1,
    name: "Nyx Node",
    subtitle: "Wearable Cyberdeck",
    date: "Summer 2026",
    status: "future",
    accent: "#7B5EA7",
    description: [
      `This is a personal project in development: a wearable cyberdeck designed 
      for on-site rocket simulations and note-taking. Built around a Raspberry Pi 
      Zero 2 W, the Nyx Node features a custom CAD-designed and 3D-printed case, a 
      compact keyboard, and a high-contrast display optimized for field use. The goal 
      is to create a rugged, portable device that can run OpenRocket simulations 
      in real time at the launch site, allowing for last-minute trajectory adjustments 
      and data logging. This project combines my interests in hardware design, 
      software integration, and hands-on engineering challenges.`,
    ],
    skills: ["SolidWorks","Raspberry Pi", "3D Printing", "OpenRocket", "Hardware Design"],
    short: [
      `Wearable cyberdeck built around a Raspberry Pi Zero 2 W made to
      run OpenRocket simulations in the field and take notes on-site`,
    ],
    images: [
      { src: "/images/nyxnode-1.jpg", caption: "Mock Up Sketch" },

    ],
    documentation: [
      { label: "CAD Files", href: "/docs/nyxnode-cad.zip" },
      { label: "Build Notes", href: "/docs/nyxnode-notes.pdf" },
    ],
  },
  {
    slug: "drone",
     order: 2,
    name: "Flyby",
    subtitle: "Mini FPV Racing Drone",
    date: "Summer 2026",
    status: "future",
    accent: "#7B5EA7",
    description: [
      `Description in development: A mini FPV racing drone with a custom CAD-designed 
      and 3D printed frame, built to explore the intersection of aerospace engineering 
      and drone technology. This project will involve designing a compact, lightweight 
      frame optimized for agility and speed, integrating high-performance motors and 
      flight controllers, and fine-tuning the drone's aerodynamics through iterative 
      testing.`
    ],
    skills: ["SolidWorks", "Raspberry Pi", "3D Printing", "Hardware Design"],
    short: [
      "Mini FPV racing drone with a custom CAD-designed and 3D printed frame",
    ],
    images: [
      { src: "/images/nothing.jpg", caption: "Nothing Yet" },
    ],
    documentation: [
      { label: "Nothing Yet", href: "/docs/nothing.pdf" },
    ],
  },
];