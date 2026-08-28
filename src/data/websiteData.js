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

export const productsList = [
  // Built Environment — Planning & Design
  {
    id: 'compliance-chatbot',
    title: 'Gen AI Chatbot & Assistant for Regulatory and Codes Compliance',
    category: 'Planning & Design',
    status: 'Proof-of-concept completed',
    description: 'Helps consultants navigate 6,300+ rules, regulations, codes and circulars across seven government agencies under Singapore\'s CORENET X digital submission regime — retrieving, interpreting and contextualizing relevant clauses to reduce Plan Reject Letters.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fire-safety-advisor',
    title: 'Gen AI Specialist Advisor for Fire Safety and Protection Compliance',
    category: 'Planning & Design',
    status: 'Exploring with partner',
    description: 'A mentor-style tool guiding project teams through SCDF fire-safety regulatory requirements, reflecting real enforcement practice rather than a literal code reading. Anchored by a former SCDF Director of Fire Safety.',
    image: 'gen_ai.png'
  },
  {
    id: 'pe-ge-checker-mentor',
    title: 'Gen AI Mentor for Professional Engineers, Geotechnical Engineers and Accredited Checkers',
    category: 'Planning & Design',
    status: 'Seeking partners',
    description: 'Combines CORENET X submission-process coaching with technical guidance grounded in the Eurocodes and Singapore National Annexes, for structural and geotechnical designs.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'greensip',
    title: 'GreenSIP — Green Mark Sustainability Intelligence Platform',
    category: 'Planning & Design',
    status: 'Phase 1 live; Phase 2 in progress',
    description: 'Extends Aptiv8\'s Sustainable Design Smart Advisor (SDSA) into a full BCA Green Mark V7 co-pilot, with a Malaysia market extension (GreenRE, MyCREST, GBI) planned. Seeking SIT POD as engineering delivery partner.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sdsa',
    title: 'Sustainability Design Smart Advisor (SDSA)',
    category: 'Planning & Design',
    status: 'Video in production',
    description: 'The design-stage sustainability advisor underpinning Green Mark Sustainability Intelligence Platform; a video is being produced for BEXAsia 2026.',
    image: '/sdsa.png'
  },

  // Built Environment — Pre-Construction
  {
    id: 'bid-tender-prep',
    title: 'AI Assistant for Bid Preparation & Tender Evaluation',
    category: 'Pre-Construction',
    status: 'In development',
    description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly against technical and commercial criteria.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'specs-manager',
    title: 'AI Assistant for Managing Specifications',
    category: 'Pre-Construction',
    status: 'Conceptual stage',
    description: 'Helps draft, cross-check and maintain construction and FM specifications, flagging inconsistencies and supporting handover of specification intent into FM contracts.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },

  // Built Environment — Construction
  {
    id: 'site-supervisor-assistant',
    title: 'Site Supervisor / Manager Assistant',
    category: 'Construction',
    status: 'Active',
    description: 'Supports workplace safety and health (WSH), safety monitoring, and productivity on site (e.g. real-time logistics, hazard detection from live video, weather-impact prediction).',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },

  // Built Environment — Operations & Maintenance
  {
    id: 'aptiv8-cortex-cmms',
    title: 'A8 — Agentic AI-Powered CMMS Platform',
    category: 'Operations & Maintenance',
    status: 'Advisory roadmap completed',
    description: 'Adds an agentic AI layer to A8 CMMS already live across 200+ sites and 2,000+ users. An orchestrator directs nine specialist agents — work-order triage, asset onboarding, vendor/inventory reconciliation, compliance & certification tracking, predictive maintenance, energy monitoring, technician troubleshooting copilot, multilingual document parsing, and a conversational FM assistant — each with a human-approval checkpoint by default. Hosted within Aptiv8\'s Singapore-based, CSA-STAR-certified AWS environment.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cmms-integration',
    title: 'Gen AI Integration with CMMS',
    category: 'Operations & Maintenance',
    status: 'Under direct development',
    description: 'Three components: a dynamic Gen AI dashboard summarizing maintenance/asset/fault data in plain language; AI-enhanced natural-language fault reporting with automatic classification and routing; and an AI knowledge-base assistant giving technicians instant access to manuals and troubleshooting guidance.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Aptiv8-copilots',
    title: 'Aptiv8 Co-Pilots for Smart Energy Management & Thermal Comfort Optimization',
    category: 'Operations & Maintenance',
    status: 'Videos available',
    description: 'Optimizes thermal comfort and smart energy management. Short YouTube demonstration videos are already available.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dragonfly-controller',
    title: 'Dragonfly — Robotic Mosquito Controller',
    category: 'Operations & Maintenance',
    status: 'Marketed by Uniqix',
    description: 'A robotic solution for vector control. Product demonstration videos and brochure are already available. Marketed by Uniqix, our sister company.',
    image: 'dragon.png'
  },
  {
    id: 'mro-ai-aero',
    title: 'MRO AI (Aeronautics Proof-of-concept)',
    category: 'Operations & Maintenance',
    status: 'Proof-of-concept completed',
    description: 'Specialist aviation maintenance, repair, and overhaul compliance system. See also the dedicated Aerospace MRO solution under other sectors.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sor-pricing',
    title: 'AI Assistant for SOR (Schedule of Rates) Pricing and Bid Preparation',
    category: 'Operations & Maintenance',
    status: 'Video planned',
    description: 'Automates pricing evaluation and schedule of rates calculations. Demonstration video is planned.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
  },

  // Other Sectors — Customer Service, Telco, Hospitality, Aerospace
  {
    id: 'customer-service-ai',
    title: 'Autonomous AI Customer Service (multi-channel AI Concierge)',
    category: 'Other Sectors',
    status: 'Production-ready',
    description: 'Autonomous AI agents handling customer chat, voice, and email across industries — instant resolution of routine requests, with escalation to a human for what needs one. Positioned around industry data showing $350B spent annually on CX labor versus $50B on CX technology, with clear opportunity to automate routine tasks and reallocate resources.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'telco-support-concierge',
    title: 'AI Concierge for Telco Mobile Support',
    category: 'Other Sectors',
    status: 'Production-ready',
    description: 'A conversational concierge handling mobile plan guidance, network troubleshooting/support, personalized upgrade and add-on recommendations, and general account support — designed as a starting-point framework for a telco\'s own AI Agent Services Concierge.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'airbnb-rental-ecosystem',
    title: 'AI Agent Ecosystem for Airbnb-style Short-Term Rentals',
    category: 'Other Sectors',
    status: 'Production-ready',
    description: 'Six coordinated agents: Guest Interaction Agent (24/7 concierge), Dynamic Pricing Agent (nightly-rate optimization), Smart Listing Agent (high-conversion listing generation), Host Operations Agent (back-office automation), Guest Experience Agent (stay/review enhancement), and Compliance Agent (regulatory adherence).',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aerospace-mro-agent',
    title: 'AI Agent for Aerospace MRO (Maintenance, Repair and Overhaul)',
    category: 'Other Sectors',
    status: 'Production-ready',
    description: 'A suite of specialist agents — Compliance Ingestion & Classification, Aircraft Data & Scheduling, Work Card Generation, Inventory & Parts Forecasting, Technician Assistant, Compliance Closure & Audit, Reporting & Analytics, and Knowledge/Chatbot — addressing high fleet complexity, frequent regulatory updates (CAAM, with FAA/EASA for international operations), manual work-card generation, and compliance-gap risk in MRO operations.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80'
  }
];

export const projectsData = [
  {
    id: 'a8-ai-powered-cmms',
    title: 'A8 AI Powered CMMS',
    category: 'Built Environment',
    status: 'Cost Saving',
    description: 'Aptiv8\'s Computerized Maintenance Management System, empowering data-driven transition for the advanced A8 AI Powered CMMS asset lifecycle.',
    clientIndustry: 'Government (BCA, JTC, HDB), Data Centre, Building (TEL, XJE, ELTE, RP, Tampines Express) Contractors (MURP, Lum Chang)',
    keyFeatures: 'Analyzing maintenance documents, pilot projects proposed for technology reference identification',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'akira-datacenter',
    title: 'Akira – Data Centre Design Assistant',
    category: 'Built Environment',
    status: 'Design',
    description: 'Gen AI assistant specifically tailored for optimizing and efficiently accelerating complex data centre layout and technical designs.',
    clientIndustry: 'Design Consultants / Tier Certified Cloud',
    keyFeatures: 'When online (Natural) on-standby or standby on optional',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'compliance-chatbot',
    title: 'Compliance Chatbot',
    category: 'Built Environment',
    status: 'Future Ready',
    description: 'An AI assistant with Generative AI for immersive and verify design against authority rules under Singapore\'s CORENET X system.',
    clientIndustry: 'BCA / Consultants / AEC works Singapore',
    keyFeatures: 'No inequalities reference identified',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sdsa-beamp',
    title: 'BEAMP Cycle & Challenge – Sustainability Design Smart Advisor (SDSA)',
    category: 'Built Environment',
    status: 'Featured Solution',
    description: 'Developing sustainability advisor embodiment into the existing BEAMP Cycle & Challenge to enhance Green Mark transitional assessments.',
    clientIndustry: 'Built Environment sustainability consultants',
    keyFeatures: 'New rules to be produced for BEXAsia 2024',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dragonfly',
    title: 'Dragonfly',
    category: 'Built Environment',
    status: 'Cost Saving',
    description: 'Robotic Mosquito Controller — a vision-of-record robotic solution for intelligent vector control used in modern rental residential 0buildings, designed to automate monitoring, detection, targeted intervention',
    clientIndustry: 'Building Management / Facilities Management (FM)',
    keyFeatures: 'When already available',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-powered-cmms',
    title: 'AI-Powered CMMS',
    category: 'Built Environment',
    status: 'High Performance',
    description: 'Advanced version process of A8 AI Powered CMMS on a wider IoT platform, with integration of Real Time and Thermal Comfort Management Corporation.',
    clientIndustry: 'Built Environment / Facilities Management (FM)',
    keyFeatures: 'When on the cloud. No alter where now considered value to pipeline',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'public-sector-cs',
    title: 'Public Sector Customer Service Center',
    category: 'Public & Other Sectors',
    status: 'Digital',
    description: 'AI-powered customer service platform integrated into a public sector service centres to enhance efficiency, engagement and resident satisfaction.',
    clientIndustry: 'Public sectors / Centralized Operations',
    keyFeatures: 'No inequalities reference identified',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-value-be-video',
    title: '"AI Value for the Built Environment" Video',
    category: 'Media & Storyboards',
    status: 'Insights & Analytics',
    description: 'A 60–100 second brand video and storyboard production showcasing how AI, Data Engineering, Crypto + Token + ComplyDrive + CMMS drive solution.',
    clientIndustry: 'Prospective new development partners and clients across APAC',
    keyFeatures: 'Production-ready script & storyboard document',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gen-ai-other-sectors-video',
    title: '"Gen AI for Other Sectors" Video',
    category: 'Media & Storyboards',
    status: 'Why Aptiv8',
    description: 'AI showcase brand video for Agriculture and Advanced Tech & Creative (Advertise / Short-Film Festival), and Aerospace MRO Agents.',
    clientIndustry: 'Customer service, Sales, Hospitality, Cloud tech core market, Aviation & Aerospace (MRO)',
    keyFeatures: 'Production-ready script & storyboard document',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  }
];

export const showcasesList = [
  {
    id: 'showcase-1',
    title: "GenAI DC Design",
    video: "/DC_design.mp4",
    poster: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    category: "Infrastructure & Design",
    description: "Intelligent workflows automating data center layouts, cooling simulations, and validation against strict engineering codes."
  },
  {
    id: 'showcase-2',
    title: "GenAI for Construction Contract Management",
    video: "/construction.mp4",
    poster: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Operations & Procurement",
    description: "Automated analysis, risk screening, and regulatory mapping for construction agreements, tenders, and building codes."
  },
  {
    id: 'showcase-3',
    title: "GenAI for MRO",
    video: "/MRO.mp4",
    poster: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    category: "Maintenance & Operations",
    description: "Next-generation MRO co-pilot helping technical teams parse manuals, draft reports, and troubleshoot machinery on-site."
  },
  {
    id: 'showcase-4',
    title: "GenAI for Telco",
    video: "/Telco.mp4",
    poster: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
    category: "Telecommunications & Field Support",
    description: "Supporting field engineers and network designers with automated document search and interactive network topology queries."
  }
];

