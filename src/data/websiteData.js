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
    category: 'Sustainability',
    description: 'BIM model optimization engine ensuring high thermal efficiency, lower carbon footprint, and seamless BCA Green Mark Platinum alignment.',
    image: svgs.sustainability,
  },
  {
    id: 'compliance',
    title: 'Compliance Chatbot',
    category: 'Regulatory',
    description: 'Instant verification of digital architecture layouts against Singapore building regulations and accessibility code standards.',
    image: svgs.compliance,
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety AI Mentor',
    category: 'Safety & Risk',
    description: 'Sophisticated cognitive pathfinding modeling that flags exit blocks and validates smoke venting compliance before construction.',
    image: svgs.fireSafety,
  },
  {
    id: 'bim-data',
    title: 'Open BIM Data Management',
    category: 'BIM Automation',
    description: 'Intelligent metadata extraction engine that cleanses and normalizes IFC/Revit structural schemas.',
    image: svgs.bimData,
  },
  {
    id: 'bid-prep',
    title: 'AI Assistant for Bid Preparation',
    category: 'Tendering',
    description: 'Smart document analyzer extracting quantities, evaluating contractor risk, and drafting responses for public tenders.',
    image: svgs.bidPrep,
  },
  {
    id: 'spec-manager',
    title: 'AI Specification Manager',
    category: 'Documentation',
    description: 'Drafts, standardizes, and cross-references structural specs directly with dynamic local building codes.',
    image: svgs.specManager,
  },
  {
    id: 'cmms',
    title: 'AI-Enhanced CMMS',
    category: 'Operations',
    description: 'Predictive facilities manager using telemetry to auto-assign repair tickets and optimize asset lifespans.',
    image: svgs.cmms,
  },
  {
    id: 'cortex',
    title: 'Cryotos Cortex',
    category: 'Asset Monitoring',
    description: 'Deep neural network for real-time structural health monitoring, concrete fatigue prediction, and sensor mesh analysis.',
    image: svgs.cortex,
  },
  {
    id: 'strata',
    title: 'Strata Title Management AI',
    category: 'Property Management',
    description: 'Automates share value calculations, bylaw resolution audits, and resident request classifications.',
    image: svgs.strata,
  },
  {
    id: 'lease',
    title: 'AI Lease Management',
    category: 'Real Estate',
    description: 'NLP engine scanning lease contracts to compile rent reviews, payment structures, and occupancy projections.',
    image: svgs.lease,
  },
];

export const bentoProducts = [
  {
    id: 'bento-1',
    title: 'Green Mark Planner',
    description: 'Optimize building orientation, glass-to-wall ratios, and HVAC options with instant carbon and cost assessments.',
    image: svgs.sustainability,
    size: 'lg',
  },
  {
    id: 'bento-2',
    title: 'Smart Tender Reader',
    description: 'Scan 500-page tenders in seconds. Highlight structural risks and export cost sheets instantly.',
    image: svgs.bidPrep,
    size: 'md',
  },
  {
    id: 'bento-3',
    title: 'CodeCheck API',
    description: 'Integrate automated building regulation code compliance checks into any current CAD or BIM workflow.',
    image: svgs.compliance,
    size: 'sm',
  },
  {
    id: 'bento-4',
    title: 'Sensory Twin Integrator',
    description: 'Synchronize live smart IoT sensors directly into an active digital twin representation.',
    image: svgs.cortex,
    size: 'md',
  },
];

export const lifecycleStages = [
  {
    id: 'planning-design',
    name: 'Planning & Design',
    description: 'Establish design intent, check initial zoning compliance, and run carbon optimizations.',
    products: ['Sustainability Design Smart Advisor (SDSA)', 'Compliance Chatbot', 'Fire Safety AI Mentor', 'AI Specification Manager'],
    image: svgs.planning,
  },
  {
    id: 'pre-construction',
    name: 'Pre-Construction',
    description: 'Prepare accurate tender documentation, align models, and evaluate initial bids.',
    products: ['AI Assistant for Bid Preparation', 'Open BIM Data Management', 'AI Specification Manager'],
    image: svgs.preCon,
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Track material properties, coordinate works, and monitor structural concrete fatigue.',
    products: ['Open BIM Data Management', 'Cryotos Cortex'],
    image: svgs.construction,
  },
  {
    id: 'ops-maintenance',
    name: 'Operations & Maintenance',
    description: 'Manage physical structures, coordinate reactive repairs, and automate equipment status checks.',
    products: ['AI-Enhanced CMMS', 'Cryotos Cortex', 'Strata Title Management AI'],
    image: svgs.operations,
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Coordinate tenant leases, occupancy forecasts, and complex strata governance audits.',
    products: ['AI Lease Management', 'Strata Title Management AI'],
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
