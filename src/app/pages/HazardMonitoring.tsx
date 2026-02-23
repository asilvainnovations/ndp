import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Cloud, Droplets, Mountain, Wind, Zap, Bell } from "lucide-react";
import { earlyWarningAlerts, activeHazards } from "../data/mockData";

const hazardTypes = [
  { icon: Wind, label: "Typhoons", count: 1, color: "text-blue-500" },
  { icon: Droplets, label: "Floods", count: 1, color: "text-cyan-500" },
  { icon: Mountain, label: "Earthquakes", count: 1, color: "text-orange-500" },
  { icon: Cloud, label: "Volcanic", count: 1, color: "text-red-500" },
  { icon: Zap, label: "Storm Surge", count: 0, color: "text-purple-500" },
];

export function HazardMonitoring() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Multi-Hazard Monitoring & Early Warning</h1>
          <p className="text-slate-600 mt-1">Real-time hazard tracking and automated alert dissemination</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Bell className="h-4 w-4 mr-2" />
          Configure Alerts
        </Button>
      </div>

      {/* Hazard Type Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {hazardTypes.map((hazard) => {
          const Icon = hazard.icon;
          return (
            <Card key={hazard.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <Icon className={`h-8 w-8 ${hazard.color}`} />
                  <div className="text-right">
                    <div className="text-2xl font-bold">{hazard.count}</div>
                    <div className="text-xs text-slate-500">Active</div>
                  </div>
                </div>
                <div className="mt-3 text-sm font-medium">{hazard.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Monitoring Interface */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Hazards</TabsTrigger>
          <TabsTrigger value="alerts">Early Warnings</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
          <TabsTrigger value="history">Historical Data</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Currently Active Hazard Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeHazards.map((hazard) => (
                  <div
                    key={hazard.id}
                    className="p-6 border-l-4 bg-slate-50 rounded-lg"
                    style={{
                      borderLeftColor:
                        hazard.severity === "High"
                          ? "#ef4444"
                          : hazard.severity === "Medium"
                          ? "#f59e0b"
                          : "#eab308",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-900">{hazard.name}</h3>
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
                          <Badge variant={hazard.status === "Active" ? "default" : "outline"}>
                            {hazard.status}
                          </Badge>
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-slate-600">
                          <p>
                            <span className="font-medium">Type:</span> {hazard.type}
                          </p>
                          <p>
                            <span className="font-medium">Location:</span> {hazard.location}
                          </p>
                          <p>
                            <span className="font-medium">Affected Population:</span>{" "}
                            {hazard.affectedPopulation.toLocaleString()} persons
                          </p>
                          <p>
                            <span className="font-medium">Last Updated:</span>{" "}
                            {new Date(hazard.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>

                    {/* Simulated Real-time Data */}
                    <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500">Wind Speed</div>
                        <div className="text-lg font-bold">
                          {hazard.type === "Typhoon" ? "120 km/h" : "N/A"}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Rainfall</div>
                        <div className="text-lg font-bold">
                          {hazard.type === "Typhoon" || hazard.type === "Flood" ? "150 mm/day" : "N/A"}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Magnitude</div>
                        <div className="text-lg font-bold">
                          {hazard.type === "Earthquake" ? "4.2" : "N/A"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Early Warning Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earlyWarningAlerts.map((alert) => (
                  <div key={alert.id} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Badge
                          className={
                            alert.level === "Critical"
                              ? "bg-red-500 text-white"
                              : alert.level === "Warning"
                              ? "bg-orange-500 text-white"
                              : "bg-yellow-500 text-white"
                          }
                        >
                          {alert.level}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{alert.hazard}</h4>
                        <p className="text-sm text-slate-600 mt-2">{alert.message}</p>
                        <div className="mt-3 space-y-2">
                          <div className="text-xs text-slate-500">Affected Areas:</div>
                          <div className="flex flex-wrap gap-2">
                            {alert.areas.map((area, idx) => (
                              <Badge key={idx} variant="outline">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                          <span>Issued: {new Date(alert.issued).toLocaleString()}</span>
                          <span>•</span>
                          <span>Disseminated via: SMS, Mobile App, Radio</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button variant="outline" size="sm">
                          Resend Alert
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Dissemination Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">98.5%</div>
                  <div className="text-sm text-slate-600 mt-1">SMS Delivery Rate</div>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">125,430</div>
                  <div className="text-sm text-slate-600 mt-1">Mobile App Users</div>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-slate-600 mt-1">Radio Stations</div>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-slate-600 mt-1">Satellite Links</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>5-Day Hazard Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900">Tropical Cyclone Formation Probability</h4>
                  <p className="text-sm text-slate-600 mt-2">
                    Moderate probability (40-60%) of tropical cyclone formation in the Philippine Area of
                    Responsibility within the next 5 days. Monitoring continues in coordination with PAGASA.
                  </p>
                  <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: "55%" }}></div>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">Probability: 55%</div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900">Rainfall Forecast - Northern Luzon</h4>
                  <p className="text-sm text-slate-600 mt-2">
                    Heavy to intense rainfall expected in Cagayan Valley and Ilocos Region. Flood risk remains
                    elevated for low-lying areas.
                  </p>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((day, idx) => (
                      <div key={day} className="text-center">
                        <div className="text-xs text-slate-500 mb-1">{day}</div>
                        <div className="h-16 bg-blue-500 rounded" style={{ opacity: 1 - idx * 0.15 }}></div>
                        <div className="text-xs font-medium mt-1">{100 - idx * 15}mm</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historical Hazard Events (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Hazard Type</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Location</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Severity</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Duration</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-slate-600">Casualties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm">Feb 10, 2026</td>
                      <td className="py-3 px-4 text-sm">Typhoon</td>
                      <td className="py-3 px-4 text-sm">Bicol Region</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-red-500">High</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">3 days</td>
                      <td className="py-3 px-4 text-sm text-right">12</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm">Feb 5, 2026</td>
                      <td className="py-3 px-4 text-sm">Flood</td>
                      <td className="py-3 px-4 text-sm">Metro Manila</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-orange-500">Medium</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">1 day</td>
                      <td className="py-3 px-4 text-sm text-right">0</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm">Jan 28, 2026</td>
                      <td className="py-3 px-4 text-sm">Earthquake</td>
                      <td className="py-3 px-4 text-sm">Mindanao</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-yellow-500">Low</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">Minutes</td>
                      <td className="py-3 px-4 text-sm text-right">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
