import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Download, Upload, FileText, Database, Share2 } from "lucide-react";
import { communityReports } from "../data/mockData";

const reportTypes = [
  { type: "Damage Assessment", count: 45, status: "Pending Review" },
  { type: "Incident Reports", count: 128, status: "Submitted" },
  { type: "Resource Utilization", count: 32, status: "Approved" },
  { type: "Financial Reports", count: 18, status: "Under Review" },
];

const dataIntegrations = [
  { system: "PhilAWARE", status: "Connected", lastSync: "2026-02-23 16:30" },
  { system: "GeoRiskPH", status: "Connected", lastSync: "2026-02-23 16:15" },
  { system: "OpenStreetMap", status: "Connected", lastSync: "2026-02-23 16:00" },
  { system: "UNOCHA HDX", status: "Connected", lastSync: "2026-02-23 14:30" },
  { system: "PAGASA Weather API", status: "Connected", lastSync: "2026-02-23 16:45" },
];

export function ReportsData() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports & Data Sharing</h1>
          <p className="text-slate-600 mt-1">Centralized reporting and data integration platform</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Total Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">223</div>
            <p className="text-xs text-slate-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">LGU Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">156</div>
            <p className="text-xs text-slate-500 mt-1">From 89 municipalities</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">12</div>
            <p className="text-xs text-slate-500 mt-1">Integrated systems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">API Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">8.5K</div>
            <p className="text-xs text-slate-500 mt-1">Last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Electronic Reports</TabsTrigger>
          <TabsTrigger value="community">Community Reports</TabsTrigger>
          <TabsTrigger value="integration">Data Integration</TabsTrigger>
          <TabsTrigger value="api">API Access</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Standardized Electronic Reporting System</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reportTypes.map((report) => (
                  <div key={report.type} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <h3 className="font-semibold text-slate-900">{report.type}</h3>
                        </div>
                        <div className="mt-3 flex items-center gap-4 text-sm">
                          <div>
                            <div className="text-slate-500">Total Reports</div>
                            <div className="text-2xl font-bold text-slate-900">{report.count}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Status</div>
                            <Badge variant="outline" className="mt-1">
                              {report.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      View Reports
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent LGU Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Report ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">LGU</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Type</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Submitted</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm font-medium">RPT-2026-0245</td>
                      <td className="py-3 px-4 text-sm">Tacloban City</td>
                      <td className="py-3 px-4 text-sm">Damage Assessment</td>
                      <td className="py-3 px-4 text-sm">Feb 23, 16:20</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-green-500">Approved</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm font-medium">RPT-2026-0244</td>
                      <td className="py-3 px-4 text-sm">Tuguegarao City</td>
                      <td className="py-3 px-4 text-sm">Incident Report</td>
                      <td className="py-3 px-4 text-sm">Feb 23, 14:15</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-yellow-500">Under Review</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm font-medium">RPT-2026-0243</td>
                      <td className="py-3 px-4 text-sm">Daraga Municipality</td>
                      <td className="py-3 px-4 text-sm">Resource Utilization</td>
                      <td className="py-3 px-4 text-sm">Feb 23, 10:30</td>
                      <td className="py-3 px-4 text-sm">
                        <Badge className="bg-green-500">Approved</Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crowdsourced Community Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityReports.map((report) => (
                  <div key={report.id} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            className={
                              report.severity === "High"
                                ? "bg-red-500"
                                : report.severity === "Medium"
                                ? "bg-orange-500"
                                : "bg-yellow-500"
                            }
                          >
                            {report.severity}
                          </Badge>
                          {report.verified && (
                            <Badge className="bg-green-500">Verified</Badge>
                          )}
                          <span className="text-sm text-slate-500">{report.id}</span>
                        </div>
                        <h4 className="font-semibold text-slate-900">{report.type} - {report.location}</h4>
                        <p className="text-sm text-slate-600 mt-2">{report.description}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                          <span>Reporter: {report.reporter}</span>
                          <span>•</span>
                          <span>{new Date(report.timestamp).toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {!report.verified && (
                          <Button variant="outline" size="sm">
                            Verify
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          Details
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
              <CardTitle>Community Reporting Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2,450</div>
                  <div className="text-sm text-slate-600 mt-1">Mobile App Reports</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1,820</div>
                  <div className="text-sm text-slate-600 mt-1">SMS Reports</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">890</div>
                  <div className="text-sm text-slate-600 mt-1">Social Media Reports</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Integration & Geospatial Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dataIntegrations.map((integration) => (
                  <div key={integration.system} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Database className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">{integration.system}</div>
                        <div className="text-xs text-slate-500">Last sync: {integration.lastSync}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500">
                      {integration.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Completeness</span>
                      <span className="text-sm font-bold">94%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Accuracy</span>
                      <span className="text-sm font-bold">91%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "91%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Timeliness</span>
                      <span className="text-sm font-bold">88%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Consistency</span>
                      <span className="text-sm font-bold">96%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">UNOCHA</div>
                      <div className="text-xs text-slate-500">Humanitarian Data Exchange</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">UNDP</div>
                      <div className="text-xs text-slate-500">Development Programs</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">USAID</div>
                      <div className="text-xs text-slate-500">Disaster Response</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">AHA Centre</div>
                      <div className="text-xs text-slate-500">ASEAN Coordination</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">RESTful API Endpoints</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Secure APIs for bilateral and international humanitarian partners to access verified disaster data
                  </p>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-green-600">GET</span> /api/v1/hazards
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-green-600">GET</span> /api/v1/incidents
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-blue-600">POST</span> /api/v1/reports
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-green-600">GET</span> /api/v1/resources
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <Share2 className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-slate-600 mt-1">Partner Organizations</div>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <Database className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold">8.5K</div>
                    <div className="text-sm text-slate-600 mt-1">API Calls (24h)</div>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <FileText className="h-8 w-8 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm text-slate-600 mt-1">API Uptime</div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4 mr-2" />
                  View Full API Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
