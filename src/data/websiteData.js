// Premium SVGs representing architecture and BIM concepts to keep it fast, responsive and high-fidelity
export const svgs = {
  sustainability: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
  compliance: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  fireSafety: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  bimData: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  bidPrep: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  specManager: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
  cmms: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  cortex: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  strata: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  lease: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',

  // Lifecycle
  planning: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  preCon: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  operations: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  realEstate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',

  // Industries
  architecture: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  engineering: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  // infrastructure: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=800&q=80',
  dataCenters: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
};

export const featuredSolutions = [
  {
    id: 'sdsa',
    title: 'Sustainability Design Smart Advisor (SDSA)',
    category: 'Planning & Design',
    description: 'The design-stage sustainability advisor underpinning Green Mark Sustainability Intelligence Platform; a video is being produced for BEXAsia 2026.',
    image: '/sdsa.png',
  },
  {
    id: 'akira-datacenter',
    title: 'Akira – Data Centre Design Assistant',
    category: 'Planning & Design',
    description: 'Gen AI assistant specifically tailored for optimizing and efficiently accelerating complex data centre layout and technical designs.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fire-safety',
    title: 'Gen AI Advisor for Fire Safety & Protection',
    category: 'Planning & Design',
    description: 'Guiding project teams through SCDF fire-safety regulatory requirements, reflecting real enforcement practice. Anchored by former SCDF Director.',
    image: svgs.fireSafety,
  },
  
  // {
  //   id: 'bid-prep',
  //   title: 'AI Assistant for Bid & Tender Evaluation',
  //   category: 'Pre-Construction',
  //   description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly.',
  //   image: svgs.bidPrep,
  // },
  // {
  //   id: 'spec-manager',
  //   title: 'AI Assistant for Managing Specifications',
  //   category: 'Pre-Construction',
  //   description: 'Helps draft, cross-check and maintain construction and FM specifications, flagging inconsistencies.',
  //   image: svgs.specManager,
  // },
  // {
  //   id: 'cmms',
  //   title: 'Aptiv8 — Agentic AI-Powered CMMS',
  //   category: 'Operations & Maintenance',
  //   description: 'Adds an orchestrator directing nine specialist AI agents within Aptiv8\'s Singapore-based, CSA-STAR-certified AWS environment.',
  //   image: svgs.cmms,
  // },
  // {
  //   id: 'cortex',
  //   title: 'Gen AI Integration with CMMS',
  //   category: 'Operations & Maintenance',
  //   description: 'Dynamic dashboard, natural-language fault reporting, and an AI knowledge-base assistant for field technicians.',
  //   image: svgs.cortex,
  // },
  // {
  //   id: 'strata',
  //   title: 'Strata Title & Maintenance Assistant',
  //   category: 'Real Estate',
  //   description: 'Supports Managing Agents with drafting correspondence, tracking maintenance schedules, and bylaw compliance.',
  //   image: svgs.strata,
  // },
  
];

export const bentoProducts = [
  {
    id: 'bento-1',
    title: 'GreenSIP Platform',
    description: 'Co-pilot for full BCA Green Mark V7 compliance, mapping energy, ETTV, and thermal comfort metrics.',
    image: svgs.sustainability,
    size: 'lg',
  },
  {
    id: 'bento-2',
    title: 'Bid Prep & Tender AI',
    description: 'Evaluate technical and commercial submissions fairly against specific tendering criteria.',
    image: svgs.bidPrep,
    size: 'md',
  },
  {
    id: 'bento-3',
    title: 'CORENET X Assistant',
    description: 'Navigates 6,300+ rules across seven government agencies under Singapore\'s CORENET X submission regime.',
    image: svgs.compliance,
    size: 'sm',
  },
  {
    id: 'bento-4',
    title: 'A8 Agentic CMMS',
    description: 'Nine specialist agents orchestrating work-orders, compliance checklists, and troubleshooting.',
    image: svgs.cortex,
    size: 'md',
  },
];

export const lifecycleStages = [
  {
    id: 'planning-design',
    name: 'Planning & Design',
    description: 'Establish design intent, check initial zoning compliance, and run carbon optimizations.',
    products: [
      { name: 'Data Centre Design Assistant (Akira)', status: 'Deployed' },
      { name: 'Gen AI Chatbot & Assistant for Regulatory and Codes Compliance', status: 'POC Completed' },
      { name: 'Sustainability Design Smart Advisor (SDSA)', status: 'In Development' },
      { name: 'Gen AI Specialist Advisor for Fire Safety and Protection Compliance', status: 'Exploring / POC' },
      { name: 'Gen AI Mentor for Professional Engineers, Geotechnical Engineers and Accredited Checkers', status: 'Seeking Partners' }
    ],
    image: svgs.planning,
  },
  {
    id: 'pre-construction',
    name: 'Pre-Construction',
    description: 'Prepare accurate tender documentation, align models, and evaluate initial bids.',
    products: [
      { name: 'AI Assistant for Bid Preparation', status: 'Emerging Solution' },
      { name: 'AI Assistant for Tender Evaluation', status: 'Emerging Solution' },
      { name: 'AI Assistant for Managing Specifications', status: 'Deployed' }
    ],
    image: svgs.preCon,
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Track material properties, coordinate works, and monitor structural concrete fatigue.',
    products: [
      { name: 'AI-Powered Contract Lifecycle Management', status: 'Emerging Solution' },
      { name: 'Site Supervisor / Manager Assistant', status: 'Deployed' }
    ],
    image: svgs.construction,
  },
  {
    id: 'ops-maintenance',
    name: 'Operations & Maintenance',
    description: 'Manage physical structures, coordinate reactive repairs, and automate equipment status checks.',
    products: [
      { name: 'A8 — Agentic AI-Powered CMMS Platform', status: 'Deployed' },
      { name: 'Gen AI Integration with CMMS', status: 'Deployed' },
      { name: 'A8 Co-Pilots for Smart Energy Management and Thermal Comfort Optimization', status: 'In Development' },
      { name: 'Dragonfly — Robotic Mosquito Controller', status: 'Deployed' },
      { name: 'MRO AI (Aeronautics proof-of-concept)', status: 'POC Completed' },
      { name: 'AI Assistant for SOR Pricing and Bid Preparation', status: 'In Development' }
    ],
    image: svgs.operations,
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Coordinate tenant leases, occupancy forecasts, and complex strata governance audits.',
    products: [
      { name: 'Strata Title & Maintenance Management Assistant', status: 'Deployed' },
      { name: 'Lease Management Assistant', status: 'In Development' }
    ],
    image: svgs.realEstate,
  },
];

export const industries = [
  { name: 'Architecture', image: svgs.architecture },
  { name: 'Engineering', image: svgs.engineering },
  { name: 'Construction', image: svgs.construction },
  { name: 'Facilities Management', image: svgs.operations },
  // { name: 'Infrastructure', image: svgs.infrastructure },
  { name: 'Real Estate', image: svgs.realEstate },
  { name: 'Data Centers', image: svgs.dataCenters },
  { name: 'Aerospace', image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80', isOtherSector: true },
  { name: 'Telco Mobile', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', isOtherSector: true },
];

export const caseStudies = [
  {
    id: 'case-1',
    problem: 'Manual building regulation checking took up to 6 weeks per architectural iteration, leading to project delay.',
    solution: 'Integrated the Compliance Chatbot and CodeCheck API directly within the Revit workspace.',
    implementation: 'Deployed custom Singapore BCA regulatory datasets to run real-time checks on Revit element properties.',
    results: 'Check durations reduced from 6 weeks to under 4 hours, and compliance validation accuracy reached 99.8%.',
    impact: 'Saved approximately $240K in engineering design costs and secured BCA design approval 45 days ahead of schedule.',
  },
  {
    id: 'case-2',
    problem: 'An industrial property portfolio faced high facility operational downtime and rising energy consumption.',
    solution: 'Configured AI-Enhanced CMMS paired with real-time A8 Cortex predictive maintenance sensors.',
    implementation: 'Installed IoT sensory twins on critical ACMV units, feeding thermal telemetry directly into the AI twin.',
    results: 'Downtime dropped by 42% and overall building energy consumption was optimized by 18%.',
    impact: 'Achieved Singapore BCA Green Mark Gold certification, saving $160K in annual electricity bills.',
  },
];

export const chatbotAnswers = [
  {
    keywords: ['green mark', 'compliance', 'sustainability', 'sdsa'],
    answer: 'To improve Green Mark compliance, you can deploy the Sustainability Design Smart Advisor (SDSA). It reviews orientation factors, envelopes, and mechanical ventilation designs to maximize your sustainability score. Our tools have helped projects secure Green Mark Platinum certifications.',
  },
  {
    keywords: ['facility', 'maintenance', 'cmms', 'operations'],
    answer: 'A8 AI-Enhanced CMMS predicts equipment faults before failure occurs using temperature, noise, and vibration telemetry from Aptiv8 Cortex. This reduces reactive maintenance calls and extends asset lifespans by up to 25%.',
  },
  {
    keywords: ['bid', 'tender', 'prepar', 'cost'],
    answer: 'The AI Assistant for Bid Preparation processes large historical bids, generates cost sheets, and conducts risk classification on contract clauses, helping estimating teams prepare high-accuracy tenders 5x faster.',
  },
  {
    keywords: ['code', 'compliance', 'fire', 'check'],
    answer: 'Our Fire Safety AI Mentor and Compliance Chatbot automate checking regulations against BIM standards (IFC and Revit), verifying exits, ventilation shafts, and structural dimensions dynamically.',
  },
];
