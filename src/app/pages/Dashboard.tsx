import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { AlertTriangle, Users, MapPin, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { activeHazards, incidentTimeline, provinceRiskData, earlyWarningAlerts } from "../data/mockData";

const COLORS = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6"];

export function Dashboard() {
  const totalAffected = activeHazards.reduce((sum, h) => sum + h.affectedPopulation, 0);
  const activeIncidents = activeHazards.filter(h => h.status === "Active").length;

  const severityData = [
    { name: "Critical", value: 1 },
    { name: "High", value: 1 },
    { name: "Medium", value: 1 },
    { name: "Low", value: 1 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">National Disaster Preparedness Dashboard</h1>
        <p className="text-slate-600 mt-1">Real-time overview of disaster risk reduction and response operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Hazards</CardTitle>
            <AlertTriangle className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeIncidents}</div>
            <p className="text-xs text-slate-500 mt-1">Across 3 regions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Affected Population</CardTitle>
            <Users className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalAffected.toLocaleString()}</div>
            <p className="text-xs text-slate-500 mt-1">Requiring assistance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Evacuation Centers</CardTitle>
            <MapPin className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">432</div>
            <p className="text-xs text-slate-500 mt-1">Operational nationwide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Response Readiness</CardTitle>
            <TrendingUp className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <p className="text-xs text-slate-500 mt-1">National average</p>
          </CardContent>
        </Card>
      </div>

      {/* Early Warning Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Active Early Warning Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {earlyWarningAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                <div className="flex-shrink-0">
                  <Badge
                    className={
                      alert.level === "Critical"
                        ? "bg-red-500"
                        : alert.level === "Warning"
                        ? "bg-orange-500"
                        : "bg-yellow-500"
                    }
                  >
                    {alert.level}
                  </Badge>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{alert.hazard}</h4>
                  <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-slate-500">Affected areas:</span>
                    <div className="flex flex-wrap gap-1">
                      {alert.areas.map((area, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Issued: {new Date(alert.issued).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incident Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Incident Response Timeline (Last 7 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={incidentTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="incidents" stroke="#ef4444" name="Total Incidents" strokeWidth={2} />
                <Line type="monotone" dataKey="resolved" stroke="#10b981" name="Resolved" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hazard Severity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Current Hazard Severity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={severityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {severityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Risk Provinces */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Provincial Risk Assessment (Top 8 Provinces)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={provinceRiskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="province" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="exposure" fill="#ef4444" name="Hazard Exposure" />
                <Bar dataKey="vulnerability" fill="#f59e0b" name="Vulnerability" />
                <Bar dataKey="capacity" fill="#3b82f6" name="Coping Capacity" />
                <Bar dataKey="resilience" fill="#10b981" name="Resilience Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Active Hazards Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Hazard Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Hazard Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Severity</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-600">Affected Pop.</th>
                </tr>
              </thead>
              <tbody>
                {activeHazards.map((hazard) => (
                  <tr key={hazard.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 text-sm">{hazard.type}</td>
                    <td className="py-3 px-4 text-sm font-medium">{hazard.name}</td>
                    <td className="py-3 px-4 text-sm">{hazard.location}</td>
                    <td className="py-3 px-4 text-sm">
                      <Badge
                        className={
                          hazard.severity === "High"
                            ? "bg-red-500"
                            : hazard.severity === "Medium"
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                        }
                      >
                        {hazard.severity}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <Badge variant={hazard.status === "Active" ? "default" : "outline"}>
                        {hazard.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-medium">
                      {hazard.affectedPopulation.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
