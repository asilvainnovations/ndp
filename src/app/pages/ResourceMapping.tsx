import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MapPin, Building2, Truck, Radio, Package } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { evacuationCenters } from "../data/mockData";

const resourceCategories = [
  { name: "Evacuation Centers", value: 432, color: "#3b82f6" },
  { name: "Medical Facilities", value: 175, color: "#10b981" },
  { name: "Emergency Vehicles", value: 298, color: "#f59e0b" },
  { name: "Communication Hubs", value: 845, color: "#8b5cf6" },
  { name: "Supply Warehouses", value: 125, color: "#ef4444" },
];

const logisticsData = [
  {
    route: "Manila → Tacloban",
    type: "Air Transport",
    cargo: "Medical Supplies",
    status: "In Transit",
    eta: "4 hours",
  },
  {
    route: "Cebu → Tuguegarao",
    type: "Land Transport",
    cargo: "Relief Goods",
    status: "In Transit",
    eta: "12 hours",
  },
  {
    route: "Davao → Leyte",
    type: "Sea Transport",
    cargo: "Heavy Equipment",
    status: "Loading",
    eta: "24 hours",
  },
];

const communicationInfra = [
  { type: "HF Radio Stations", count: 450, operational: 432, coverage: "95%" },
  { type: "Satellite Terminals", count: 85, operational: 82, coverage: "96%" },
  { type: "Mobile Cell Towers (Backup)", count: 120, operational: 115, coverage: "95%" },
  { type: "Emergency Hotlines", count: 340, operational: 338, coverage: "99%" },
];

export function ResourceMapping() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Infrastructure & Resource Mapping</h1>
          <p className="text-slate-600 mt-1">Real-time mapping and logistics planning</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MapPin className="h-4 w-4 mr-2" />
          Add Resource
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Evacuation Centers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">432</div>
            <p className="text-xs text-slate-500 mt-1">Operational</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Medical Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">175</div>
            <p className="text-xs text-slate-500 mt-1">Ready for emergencies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Emergency Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">298</div>
            <p className="text-xs text-slate-500 mt-1">Deployed nationwide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Communication Hubs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">845</div>
            <p className="text-xs text-slate-500 mt-1">Active stations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Supply Warehouses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">125</div>
            <p className="text-xs text-slate-500 mt-1">Stocked and ready</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Interactive Map</TabsTrigger>
          <TabsTrigger value="evacuation">Evacuation Centers</TabsTrigger>
          <TabsTrigger value="logistics">Logistics Planning</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Geospatial Resource Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg p-24 text-center">
                <div className="text-slate-400 mb-4">
                  <MapPin className="h-24 w-24 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Interactive GIS Map</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Real-time mapping of evacuation centers, hospitals, fire stations, warehouses, and critical infrastructure.
                  Integration with GeoRiskPH and OpenStreetMap for comprehensive spatial data.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline">📍 Evacuation Centers</Badge>
                  <Badge variant="outline">🏥 Medical Facilities</Badge>
                  <Badge variant="outline">🚒 Fire Stations</Badge>
                  <Badge variant="outline">📦 Warehouses</Badge>
                  <Badge variant="outline">📡 Communication Hubs</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Distribution Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={resourceCategories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {resourceCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-3">
                  {resourceCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-lg font-bold">{category.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evacuation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Evacuation Center Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Facility Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Location</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Capacity</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Current Occupancy</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Utilization</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evacuationCenters.map((center) => (
                      <tr key={center.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium">{center.name}</td>
                        <td className="py-3 px-4 text-sm">{center.location}</td>
                        <td className="py-3 px-4 text-sm">{center.capacity.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">{center.current.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  center.current / center.capacity > 0.8
                                    ? "bg-red-500"
                                    : center.current / center.capacity > 0.5
                                    ? "bg-orange-500"
                                    : "bg-green-500"
                                }`}
                                style={{ width: `${(center.current / center.capacity) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-xs">
                              {Math.round((center.current / center.capacity) * 100)}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <Badge
                            className={
                              center.status === "Active"
                                ? "bg-green-500"
                                : "bg-slate-400"
                            }
                          >
                            {center.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Building2 className="h-12 w-12 text-blue-600" />
                  <div>
                    <div className="text-3xl font-bold">18,000</div>
                    <div className="text-sm text-slate-600">Persons</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Currently Occupied</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <MapPin className="h-12 w-12 text-green-600" />
                  <div>
                    <div className="text-3xl font-bold">4,670</div>
                    <div className="text-sm text-slate-600">Persons</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Available Space</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Package className="h-12 w-12 text-purple-600" />
                  <div>
                    <div className="text-3xl font-bold">13,330</div>
                    <div className="text-sm text-slate-600">Persons</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Logistics Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logisticsData.map((operation, idx) => (
                  <div key={idx} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Truck className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">{operation.route}</h4>
                          <Badge
                            className={
                              operation.status === "In Transit"
                                ? "bg-blue-500"
                                : operation.status === "Loading"
                                ? "bg-orange-500"
                                : "bg-green-500"
                            }
                          >
                            {operation.status}
                          </Badge>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-slate-500">Transport Type</div>
                            <div className="font-medium">{operation.type}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Cargo</div>
                            <div className="font-medium">{operation.cargo}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">ETA</div>
                            <div className="font-medium">{operation.eta}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Pre-positioned Stocks</span>
                      <span className="text-sm font-bold">92%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Transport Readiness</span>
                      <span className="text-sm font-bold">88%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Route Accessibility</span>
                      <span className="text-sm font-bold">85%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Distribution Efficiency</span>
                      <span className="text-sm font-bold">90%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Warehouse Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Family Packs</div>
                      <div className="text-xs text-slate-500">Food & basic supplies</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">48,500</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Medical Supplies</div>
                      <div className="text-xs text-slate-500">Emergency medical kits</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">12,300</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Shelter Materials</div>
                      <div className="text-xs text-slate-500">Tents, tarpaulins, etc.</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">8,750</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Water & Sanitation</div>
                      <div className="text-xs text-slate-500">Purification, hygiene kits</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">22,100</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Communication Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Infrastructure Type</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Total</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Operational</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Coverage</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {communicationInfra.map((infra) => (
                      <tr key={infra.type} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Radio className="h-4 w-4 text-blue-600" />
                            {infra.type}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{infra.count}</td>
                        <td className="py-3 px-4 text-sm">
                          <Badge variant="outline" className="bg-green-50">
                            {infra.operational}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-500"
                                style={{ width: infra.coverage }}
                              ></div>
                            </div>
                            <span>{infra.coverage}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <Badge className="bg-green-500">Active</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Communication Redundancy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Multi-Layer Communication Strategy</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>✓ <strong>Primary:</strong> HF Radio Network (450 stations)</li>
                    <li>✓ <strong>Secondary:</strong> Satellite Communications (85 terminals)</li>
                    <li>✓ <strong>Tertiary:</strong> Mobile Networks with backup power</li>
                    <li>✓ <strong>Emergency:</strong> Amateur radio operators network</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 mb-1">99.2%</div>
                  <div className="text-sm text-slate-600">Communication uptime (last 30 days)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="font-semibold text-red-900 mb-1">National Emergency Hotline</div>
                    <div className="text-2xl font-bold text-red-600">911</div>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="font-semibold text-orange-900 mb-1">NDRRMC Operations Center</div>
                    <div className="text-xl font-bold text-orange-600">(02) 8911-5061 to 65</div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="font-semibold text-blue-900 mb-1">Regional Coordination Centers</div>
                    <div className="text-sm text-blue-700">17 regional hotlines operational 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
