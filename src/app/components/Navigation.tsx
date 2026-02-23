import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Radio, 
  AlertTriangle, 
  ClipboardList, 
  Database, 
  Users, 
  GraduationCap, 
  MapPin,
  Shield
} from "lucide-react";
import { cn } from "../ui/utils";

const navItems = [
  { path: "/", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/monitoring", icon: Radio, label: "Hazard Monitoring" },
  { path: "/risk-assessment", icon: AlertTriangle, label: "Risk Assessment" },
  { path: "/incidents", icon: ClipboardList, label: "Incident Management" },
  { path: "/reports", icon: Database, label: "Reports & Data" },
  { path: "/community", icon: Users, label: "Community Engagement" },
  { path: "/training", icon: GraduationCap, label: "Training & Capacity" },
  { path: "/resources", icon: MapPin, label: "Resource Mapping" },
  { path: "/governance", icon: Shield, label: "Governance & Compliance" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold">NDPBA Platform</h1>
        <p className="text-xs text-slate-400 mt-1">Disaster Preparedness</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="text-xs text-slate-500">
          <p>Philippines NDRRMC</p>
          <p className="mt-1">Office of Civil Defense</p>
        </div>
      </div>
    </aside>
  );
}
