import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { AlertTriangle } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <AlertTriangle className="h-24 w-24 text-slate-300 mb-6" />
      <h1 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
