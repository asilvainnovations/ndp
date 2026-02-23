import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ========================================
   🧩 LAZY LOADED COMPONENTS
   ======================================== */
// Layout Components
const RootLayout = lazy(() => import("./components/layouts/RootLayout"));
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Header = lazy(() => import("./components/navigation/Header"));

// Page Components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const HazardMonitoring = lazy(() => import("./pages/HazardMonitoring"));
const RiskAssessment = lazy(() => import("./pages/RiskAssessment"));
const IncidentManagement = lazy(() => import("./pages/IncidentManagement"));
const ReportsData = lazy(() => import("./pages/ReportsData"));
const CommunityEngagement = lazy(() => import("./pages/CommunityEngagement"));
const TrainingCapacity = lazy(() => import("./pages/TrainingCapacity"));
const ResourceMapping = lazy(() => import("./pages/ResourceMapping"));
const GovernanceCompliance = lazy(() => import("./pages/GovernanceCompliance"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* ========================================
   🛣️ ROUTER CONFIGURATION
   ======================================== */
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorFallback,
    children: [
      { index: true, Component: Dashboard, ErrorBoundary: ErrorFallback },
      { path: "monitoring", Component: HazardMonitoring, ErrorBoundary: ErrorFallback },
      { path: "risk-assessment", Component: RiskAssessment, ErrorBoundary: ErrorFallback },
      { path: "incidents", Component: IncidentManagement, ErrorBoundary: ErrorFallback },
      { path: "reports", Component: ReportsData, ErrorBoundary: ErrorFallback },
      { path: "community", Component: CommunityEngagement, ErrorBoundary: ErrorFallback },
      { path: "training", Component: TrainingCapacity, ErrorBoundary: ErrorFallback },
      { path: "resources", Component: ResourceMapping, ErrorBoundary: ErrorFallback },
      { path: "governance", Component: GovernanceCompliance, ErrorBoundary: ErrorFallback },
      { path: "*", Component: NotFound, ErrorBoundary: ErrorFallback },
    ],
  },
]);

/* ========================================
   🚨 ERROR FALLBACK COMPONENT
   ======================================== */
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="glass-strong min-h-screen flex items-center justify-center p-8 animate-enter">
      <div className="glass-card max-w-md w-full p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold mb-4 text-gradient">Something Went Wrong</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>🔄</span>
          Try Again
        </button>
      </div>
    </div>
  );
}

/* ========================================
   ⏳ LOADING FALLBACK COMPONENT
   ======================================== */
function LoadingFallback() {
  return (
    <div className="glass-strong min-h-screen flex items-center justify-center">
      <div className="glass-card p-8 text-center animate-pulse">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

/* ========================================
   🎭 APP COMPONENT
   ======================================== */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      // Simulate asset loading
      await new Promise((resolve) => setTimeout(resolve, 100));
      setIsLoaded(true);
    };

    preloadAssets();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <div className="app-container min-h-screen">
          {/* Background Gradient Layer */}
          <div className="fixed inset-0 -z-10 bg-background">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
          </div>

          {/* Main App Content */}
          {isLoaded ? (
            <RouterProvider router={router} />
          ) : (
            <LoadingFallback />
          )}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

/* ========================================
   📱 GLOBAL STYLES (Inline for critical CSS)
   ======================================== */
const style = document.createElement("style");
style.textContent = `
  .app-container {
    position: relative;
    overflow-x: hidden;
  }
  
  /* Smooth page transitions */
  .page-transition {
    animation: fadeInUp 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  /* Glass animation */
  @keyframes glassShimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  /* Focus visible for accessibility */
  :focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
  
  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
document.head.appendChild(style);
