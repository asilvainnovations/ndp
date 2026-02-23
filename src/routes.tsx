import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import { HazardMonitoring } from "./pages/HazardMonitoring";
import { RiskAssessment } from "./pages/RiskAssessment";
import { IncidentManagement } from "./pages/IncidentManagement";
import { ReportsData } from "./pages/ReportsData";
import { CommunityEngagement } from "./pages/CommunityEngagement";
import { TrainingCapacity } from "./pages/TrainingCapacity";
import { ResourceMapping } from "./pages/ResourceMapping";
import { GovernanceCompliance } from "./pages/GovernanceCompliance";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "monitoring", Component: HazardMonitoring },
      { path: "risk-assessment", Component: RiskAssessment },
      { path: "incidents", Component: IncidentManagement },
      { path: "reports", Component: ReportsData },
      { path: "community", Component: CommunityEngagement },
      { path: "training", Component: TrainingCapacity },
      { path: "resources", Component: ResourceMapping },
      { path: "governance", Component: GovernanceCompliance },
      { path: "*", Component: NotFound },
    ],
  },
]);
