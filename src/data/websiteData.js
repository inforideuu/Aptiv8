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
  infrastructure: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=800&q=80',
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
    id: 'compliance',
    title: 'Gen AI Chatbot & Assistant for Regulatory Compliance',
    category: 'Planning & Design',
    description: 'Helps consultants navigate 6,300+ rules, regulations, codes and circulars under Singapore\'s CORENET X digital submission regime.',
    image: svgs.compliance,
  },
  {
    id: 'fire-safety',
    title: 'Gen AI Advisor for Fire Safety & Protection',
    category: 'Planning & Design',
    description: 'Guiding project teams through SCDF fire-safety regulatory requirements, reflecting real enforcement practice. Anchored by former SCDF Director.',
    image: svgs.fireSafety,
  },
  {
    id: 'bim-data',
    title: 'Gen AI Agent for Open BIM Data Management',
    category: 'Planning & Design',
    description: 'Automates mapping of native BIM data to the IFC-SG schema and validates it against Design Gateway submission requirements under CORENET X.',
    image: svgs.bimData,
  },
  {
    id: 'bid-prep',
    title: 'AI Assistant for Bid & Tender Evaluation',
    category: 'Pre-Construction',
    description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly.',
    image: svgs.bidPrep,
  },
  {
    id: 'spec-manager',
    title: 'AI Assistant for Managing Specifications',
    category: 'Pre-Construction',
    description: 'Helps draft, cross-check and maintain construction and FM specifications, flagging inconsistencies.',
    image: svgs.specManager,
  },
  {
    id: 'cmms',
    title: 'Cryotos — Agentic AI-Powered CMMS',
    category: 'Operations & Maintenance',
    description: 'Adds an orchestrator directing nine specialist AI agents within Cryotos\' Singapore-based, CSA-STAR-certified AWS environment.',
    image: svgs.cmms,
  },
  {
    id: 'cortex',
    title: 'Gen AI Integration with CMMS',
    category: 'Operations & Maintenance',
    description: 'Dynamic dashboard, natural-language fault reporting, and an AI knowledge-base assistant for field technicians.',
    image: svgs.cortex,
  },
  {
    id: 'strata',
    title: 'Strata Title & Maintenance Assistant',
    category: 'Real Estate',
    description: 'Supports Managing Agents with drafting correspondence, tracking maintenance schedules, and bylaw compliance.',
    image: svgs.strata,
  },
  {
    id: 'lease',
    title: 'Lease Management Assistant',
    category: 'Real Estate',
    description: 'Tracks landlord/tenant obligations, flags upcoming lease events, and supports Green Lease clause administration.',
    image: '/lead.png',
  },
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
    title: 'Cryotos Agentic CMMS',
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
      'Gen AI Chatbot & Assistant for Regulatory and Codes Compliance',
      'Gen AI Specialist Advisor for Fire Safety and Protection Compliance',
      'Gen AI Agent for Open BIM Standardized Data Management',
      'Gen AI Mentor for Professional Engineers, Geotechnical Engineers and Accredited Checkers',
      'GreenSIP — Green Mark Sustainability Intelligence Platform',
      'Sustainability Design Smart Advisor (SDSA)'
    ],
    image: svgs.planning,
  },
  {
    id: 'pre-construction',
    name: 'Pre-Construction',
    description: 'Prepare accurate tender documentation, align models, and evaluate initial bids.',
    products: [
      'AI Assistant for Bid Preparation & Tender Evaluation',
      'AI Assistant for Managing Specifications'
    ],
    image: svgs.preCon,
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Track material properties, coordinate works, and monitor structural concrete fatigue.',
    products: [
      'Site Supervisor / Manager Assistant'
    ],
    image: svgs.construction,
  },
  {
    id: 'ops-maintenance',
    name: 'Operations & Maintenance',
    description: 'Manage physical structures, coordinate reactive repairs, and automate equipment status checks.',
    products: [
      'Cryotos — Agentic AI-Powered CMMS Platform',
      'Gen AI Integration with CMMS',
      'Retragreen Co-Pilots for Smart Energy Management and Thermal Comfort Optimization',
      'Dragonfly — Robotic Mosquito Controller',
      'MRO AI (Aeronautics proof-of-concept)',
      'AI Assistant for SOR Pricing and Bid Preparation'
    ],
    image: svgs.operations,
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Coordinate tenant leases, occupancy forecasts, and complex strata governance audits.',
    products: [
      'Strata Title & Maintenance Management Assistant',
      'Lease Management Assistant'
    ],
    image: svgs.realEstate,
  },
];

export const industries = [
  { name: 'Architecture', image: svgs.architecture },
  { name: 'Engineering', image: svgs.engineering },
  { name: 'Construction', image: svgs.construction },
  { name: 'Facilities Management', image: svgs.operations },
  { name: 'Infrastructure', image: svgs.infrastructure },
  { name: 'Real Estate', image: svgs.realEstate },
  { name: 'Data Centers', image: svgs.dataCenters },
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
    solution: 'Configured AI-Enhanced CMMS paired with real-time Cryotos Cortex predictive maintenance sensors.',
    implementation: 'Installed IoT sensory twins on critical HVAC units, feeding thermal telemetry directly into the AI twin.',
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
    answer: 'Aptiv8 AI-Enhanced CMMS predicts equipment faults before failure occurs using temperature, noise, and vibration telemetry from Cryotos Cortex. This reduces reactive maintenance calls and extends asset lifespans by up to 25%.',
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
