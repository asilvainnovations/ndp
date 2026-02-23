import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Plus, FileText, Package, Users as UsersIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { resourceInventory } from "../data/mockData";

const activeIncidents = [
  {
    id: "INC-2026-0045",
    title: "Typhoon Maring Response - Eastern Visayas",
    status: "Active",
    priority: "Critical",
    commander: "Dir. Maria Santos (OCD Region 8)",
    startDate: "2026-02-23",
    affectedLGUs: 12,
    personnel: 450,
  },
  {
    id: "INC-2026-0046",
    title: "Cagayan River Flood Response",
    status: "Active",
    priority: "High",
    commander: "Dir. Jose Reyes (OCD Region 2)",
    startDate: "2026-02-23",
    affectedLGUs: 8,
    personnel: 280,
  },
  {
    id: "INC-2026-0044",
    title: "Albay Volcanic Activity Monitoring",
    status: "Monitoring",
    priority: "Medium",
    commander: "Dir. Ana Cruz (OCD Region 5)",
    startDate: "2026-02-20",
    affectedLGUs: 5,
    personnel: 120,
  },
];

const icsStructure = [
  { role: "Incident Commander", assigned: "OCD Regional Director" },
  { role: "Operations Section Chief", assigned: "NDRRMC Ops" },
  { role: "Planning Section Chief", assigned: "DILG Representative" },
  { role: "Logistics Section Chief", assigned: "DSWD Representative" },
  { role: "Finance/Admin Chief", assigned: "DBM Representative" },
];

const resourceDeployment = [
  { category: "Personnel", deployed: 850, available: 2450 },
  { category: "Vehicles", deployed: 125, available: 195 },
  { category: "Equipment", deployed: 340, available: 550 },
  { category: "Relief Goods", deployed: 15000, available: 33500 },
];

export function IncidentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Incident Management System (IMS)</h1>
          <p className="text-slate-600 mt-1">ICS-aligned workflows and resource coordination</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Incident
        </Button>
      </div>

      {/* Active Incidents Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Active Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">2</div>
            <p className="text-xs text-slate-500 mt-1">Requiring immediate response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Deployed Personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">850</div>
            <p className="text-xs text-slate-500 mt-1">Response team members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Affected LGUs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">20</div>
            <p className="text-xs text-slate-500 mt-1">Requiring assistance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Mutual Aid Activated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">5</div>
            <p className="text-xs text-slate-500 mt-1">Inter-LGU agreements</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="incidents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="incidents">Active Incidents</TabsTrigger>
          <TabsTrigger value="resources">Resource Management</TabsTrigger>
          <TabsTrigger value="ics">ICS Structure</TabsTrigger>
          <TabsTrigger value="mutual-aid">Mutual Aid</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Incident Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeIncidents.map((incident) => (
                  <div key={incident.id} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            className={
                              incident.priority === "Critical"
                                ? "bg-red-500"
                                : incident.priority === "High"
                                ? "bg-orange-500"
                                : "bg-yellow-500"
                            }
                          >
                            {incident.priority}
                          </Badge>
                          <Badge variant={incident.status === "Active" ? "default" : "outline"}>
                            {incident.status}
                          </Badge>
                          <span className="text-sm text-slate-500">{incident.id}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{incident.title}</h3>
                        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-slate-500">Incident Commander</div>
                            <div className="font-medium">{incident.commander}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Start Date</div>
                            <div className="font-medium">{new Date(incident.startDate).toLocaleDateString()}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Affected LGUs</div>
                            <div className="font-medium">{incident.affectedLGUs}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Personnel Deployed</div>
                            <div className="font-medium">{incident.personnel}</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View IAP
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Operations Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-xs text-slate-500">08:00</div>
                    <div className="flex-1 pb-4 border-l-2 border-blue-500 pl-4">
                      <div className="font-medium">Pre-positioning of resources</div>
                      <div className="text-sm text-slate-600">Eastern Visayas evacuation centers</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-xs text-slate-500">10:30</div>
                    <div className="flex-1 pb-4 border-l-2 border-green-500 pl-4">
                      <div className="font-medium">Evacuation commenced</div>
                      <div className="text-sm text-slate-600">3,420 families evacuated to 8 centers</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-xs text-slate-500">14:15</div>
                    <div className="flex-1 pb-4 border-l-2 border-orange-500 pl-4">
                      <div className="font-medium">Search and rescue operations</div>
                      <div className="text-sm text-slate-600">5 teams deployed to affected barangays</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-xs text-slate-500">16:45</div>
                    <div className="flex-1 border-l-2 border-slate-300 pl-4">
                      <div className="font-medium">Relief distribution ongoing</div>
                      <div className="text-sm text-slate-600">15,000 family packs distributed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Situation Reports (SitReps)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">SitRep #12 - Typhoon Maring</span>
                      <Badge variant="outline">Latest</Badge>
                    </div>
                    <div className="text-sm text-slate-600">Feb 23, 2026 - 16:00</div>
                    <div className="mt-2 text-sm">Updated casualty count, evacuation status, and resource requirements</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">SitRep #8 - Cagayan Flooding</span>
                    </div>
                    <div className="text-sm text-slate-600">Feb 23, 2026 - 14:30</div>
                    <div className="mt-2 text-sm">River level updates and evacuation progress</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">SitRep #3 - Mayon Monitoring</span>
                    </div>
                    <div className="text-sm text-slate-600">Feb 23, 2026 - 12:00</div>
                    <div className="mt-2 text-sm">Seismic activity and alert level status</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Inventory & Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Category</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Total</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Operational</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Capacity</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resourceInventory.map((resource) => (
                      <tr key={resource.category} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-slate-400" />
                            {resource.category}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{resource.total.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">
                          <Badge variant="outline" className="bg-green-50">
                            {resource.operational.toLocaleString()}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{resource.capacity}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="h-2 w-32 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500"
                              style={{ width: `${(resource.operational / resource.total) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Resource Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resourceDeployment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="deployed" fill="#3b82f6" name="Deployed" />
                  <Bar dataKey="available" fill="#10b981" name="Available" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Incident Command System (ICS) Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {icsStructure.map((position) => (
                  <div key={position.role} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <UsersIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{position.role}</div>
                        <div className="text-sm text-slate-600">{position.assigned}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Responsibilities
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">ICS Compliance</h4>
                <p className="text-sm text-blue-700">
                  All incident operations follow standardized ICS workflows as mandated by NDRRMC and aligned with
                  international best practices. Command structures are established within 30 minutes of incident
                  activation.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mutual-aid" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Mutual Aid Agreements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Region 8 ↔ Region 5 Resource Sharing</h4>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Agreement Type</div>
                      <div className="font-medium">Equipment & Personnel</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Resources Shared</div>
                      <div className="font-medium">50 Personnel, 12 Vehicles</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Duration</div>
                      <div className="font-medium">Feb 23 - Feb 28</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Tacloban City ↔ Ormoc City Emergency Support</h4>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Agreement Type</div>
                      <div className="font-medium">Medical & Relief Goods</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Resources Shared</div>
                      <div className="font-medium">Medical teams, 5,000 packs</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Duration</div>
                      <div className="font-medium">Feb 23 - Ongoing</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg opacity-60">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Region 2 ↔ CAR Standby Agreement</h4>
                    <Badge variant="outline">Standby</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Agreement Type</div>
                      <div className="font-medium">Equipment Support</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Available Resources</div>
                      <div className="font-medium">Heavy equipment, generators</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Status</div>
                      <div className="font-medium">Ready for activation</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
