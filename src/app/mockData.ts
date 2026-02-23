export const activeHazards = [
  {
    id: "1",
    type: "Typhoon",
    name: "Typhoon Maring",
    severity: "High",
    location: "Eastern Visayas",
    status: "Active",
    affectedPopulation: 125000,
    timestamp: "2026-02-23T08:30:00Z",
  },
  {
    id: "2",
    type: "Flood",
    name: "Cagayan River Flooding",
    severity: "Medium",
    location: "Cagayan Valley",
    status: "Active",
    affectedPopulation: 45000,
    timestamp: "2026-02-23T06:15:00Z",
  },
  {
    id: "3",
    type: "Earthquake",
    name: "Magnitude 4.2 Quake",
    severity: "Low",
    location: "Mindanao",
    status: "Monitoring",
    affectedPopulation: 0,
    timestamp: "2026-02-22T22:45:00Z",
  },
];

export const provinceRiskData = [
  { province: "Metro Manila", exposure: 8.5, vulnerability: 7.2, capacity: 8.1, resilience: 7.8 },
  { province: "Cebu", exposure: 7.8, vulnerability: 6.5, capacity: 7.5, resilience: 7.3 },
  { province: "Davao", exposure: 6.2, vulnerability: 5.8, capacity: 7.0, resilience: 7.1 },
  { province: "Albay", exposure: 8.9, vulnerability: 7.8, capacity: 6.5, resilience: 6.2 },
  { province: "Cagayan", exposure: 7.5, vulnerability: 7.0, capacity: 6.2, resilience: 6.5 },
  { province: "Leyte", exposure: 8.2, vulnerability: 7.5, capacity: 6.8, resilience: 6.7 },
  { province: "Iloilo", exposure: 7.0, vulnerability: 6.2, capacity: 7.2, resilience: 7.4 },
  { province: "Pampanga", exposure: 7.8, vulnerability: 6.8, capacity: 7.8, resilience: 7.5 },
];

export const incidentTimeline = [
  { month: "Aug", incidents: 12, resolved: 10 },
  { month: "Sep", incidents: 18, resolved: 15 },
  { month: "Oct", incidents: 25, resolved: 22 },
  { month: "Nov", incidents: 15, resolved: 14 },
  { month: "Dec", incidents: 20, resolved: 18 },
  { month: "Jan", incidents: 14, resolved: 12 },
  { month: "Feb", incidents: 22, resolved: 18 },
];

export const resourceInventory = [
  { category: "Evacuation Centers", total: 450, operational: 432, capacity: "125,000 persons" },
  { category: "Medical Facilities", total: 180, operational: 175, capacity: "8,500 beds" },
  { category: "Emergency Vehicles", total: 320, operational: 298, capacity: "N/A" },
  { category: "Communication Equipment", total: 890, operational: 845, capacity: "N/A" },
  { category: "Relief Goods (Family Packs)", total: 50000, operational: 48500, capacity: "N/A" },
];

export const earlyWarningAlerts = [
  {
    id: "1",
    hazard: "Typhoon Maring",
    level: "Critical",
    areas: ["Eastern Samar", "Leyte", "Biliran"],
    message: "Signal No. 3 raised. Expect heavy to intense rainfall and strong winds.",
    issued: "2026-02-23T08:00:00Z",
  },
  {
    id: "2",
    hazard: "Flood Warning",
    level: "Warning",
    areas: ["Cagayan", "Isabela"],
    message: "River levels rising. Residents in low-lying areas advised to evacuate.",
    issued: "2026-02-23T06:00:00Z",
  },
  {
    id: "3",
    hazard: "Volcanic Activity",
    level: "Advisory",
    areas: ["Albay (Mayon Volcano)"],
    message: "Increased seismic activity detected. Alert Level 2 maintained.",
    issued: "2026-02-22T18:00:00Z",
  },
];

export const communityReports = [
  {
    id: "1",
    location: "Tacloban City, Leyte",
    reporter: "Barangay Captain - Brgy. 88",
    type: "Flooding",
    severity: "High",
    description: "Widespread flooding in residential areas, 150 families evacuated",
    timestamp: "2026-02-23T09:15:00Z",
    verified: true,
  },
  {
    id: "2",
    location: "Tuguegarao, Cagayan",
    reporter: "MDRRMO Officer",
    type: "River Overflow",
    severity: "Medium",
    description: "Cagayan River approaching critical level, 3 barangays on alert",
    timestamp: "2026-02-23T07:30:00Z",
    verified: true,
  },
  {
    id: "3",
    location: "Daraga, Albay",
    reporter: "Community Volunteer",
    type: "Ashfall",
    severity: "Low",
    description: "Light ashfall observed, residents advised to use masks",
    timestamp: "2026-02-22T19:45:00Z",
    verified: false,
  },
];

export const trainingPrograms = [
  {
    id: "1",
    title: "Incident Command System (ICS) Level 1",
    participants: 45,
    completion: 78,
    status: "Ongoing",
    duration: "3 days",
  },
  {
    id: "2",
    title: "Community-Based DRR Planning",
    participants: 120,
    completion: 92,
    status: "Completed",
    duration: "2 weeks",
  },
  {
    id: "3",
    title: "Emergency Response & First Aid",
    participants: 85,
    completion: 65,
    status: "Ongoing",
    duration: "5 days",
  },
  {
    id: "4",
    title: "SIMEX: Multi-Hazard Simulation",
    participants: 30,
    completion: 100,
    status: "Completed",
    duration: "1 week",
  },
];

export const evacuationCenters = [
  {
    id: "1",
    name: "Tacloban City Astrodome",
    location: "Tacloban City, Leyte",
    capacity: 5000,
    current: 3420,
    status: "Active",
    coordinates: { lat: 11.2433, lng: 125.0028 },
  },
  {
    id: "2",
    name: "Tuguegarao Sports Complex",
    location: "Tuguegarao, Cagayan",
    capacity: 3000,
    current: 1250,
    status: "Active",
    coordinates: { lat: 17.6132, lng: 121.7270 },
  },
  {
    id: "3",
    name: "Daraga Central School",
    location: "Daraga, Albay",
    capacity: 2000,
    current: 0,
    status: "Standby",
    coordinates: { lat: 13.1599, lng: 123.6914 },
  },
  {
    id: "4",
    name: "Cebu City Sports Center",
    location: "Cebu City, Cebu",
    capacity: 8000,
    current: 0,
    status: "Standby",
    coordinates: { lat: 10.3157, lng: 123.8854 },
  },
];

export const complianceMetrics = [
  { framework: "RA 10121 Compliance", score: 85, target: 95 },
  { framework: "Sendai Framework (Priority 1)", score: 78, target: 90 },
  { framework: "Sendai Framework (Priority 2)", score: 82, target: 90 },
  { framework: "Sendai Framework (Priority 3)", score: 75, target: 90 },
  { framework: "Sendai Framework (Priority 4)", score: 88, target: 90 },
  { framework: "COOP/COG Implementation", score: 72, target: 85 },
];

export const financialData = [
  { category: "Emergency Response Fund", allocated: 5000000, utilized: 3750000 },
  { category: "Recovery Assistance", allocated: 8000000, utilized: 6200000 },
  { category: "Microfinance Programs", allocated: 3000000, utilized: 2850000 },
  { category: "People's Survival Fund", allocated: 10000000, utilized: 7500000 },
  { category: "Infrastructure Resilience", allocated: 15000000, utilized: 9800000 },
];
