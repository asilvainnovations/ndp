import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Shield, FileText, DollarSign, Scale } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { complianceMetrics, financialData } from "../data/mockData";

const coopImplementation = [
  { agency: "NDRRMC", status: "Implemented", lastUpdate: "Feb 2026", compliance: 95 },
  { agency: "OCD National", status: "Implemented", lastUpdate: "Jan 2026", compliance: 92 },
  { agency: "Region 1 DRRMC", status: "Implemented", lastUpdate: "Feb 2026", compliance: 88 },
  { agency: "Region 8 DRRMC", status: "Implemented", lastUpdate: "Feb 2026", compliance: 90 },
  { agency: "Metro Manila DRRMC", status: "Under Review", lastUpdate: "Jan 2026", compliance: 78 },
];

const legalFramework = [
  {
    law: "RA 10121",
    title: "Philippine Disaster Risk Reduction and Management Act of 2010",
    compliance: 85,
    lastAudit: "Jan 2026",
  },
  {
    law: "RA 11032",
    title: "Ease of Doing Business and Efficient Government Service Delivery Act",
    compliance: 90,
    lastAudit: "Dec 2025",
  },
  {
    law: "Climate Change Act",
    title: "RA 9729 - Climate Change Act of 2009",
    compliance: 82,
    lastAudit: "Feb 2026",
  },
];

export function GovernanceCompliance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Governance & Compliance</h1>
          <p className="text-slate-600 mt-1">COOP/COG planning and regulatory compliance monitoring</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">RA 10121 Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">85%</div>
            <p className="text-xs text-slate-500 mt-1">National average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Sendai Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">81%</div>
            <p className="text-xs text-slate-500 mt-1">Overall progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">COOP Plans Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">342</div>
            <p className="text-xs text-slate-500 mt-1">LGUs with approved plans</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Budget Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">76%</div>
            <p className="text-xs text-slate-500 mt-1">FY 2026</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="compliance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="compliance">Compliance Metrics</TabsTrigger>
          <TabsTrigger value="coop">COOP/COG</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="financing">Resilience Financing</TabsTrigger>
        </TabsList>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Framework Compliance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={complianceMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="framework" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Current Score"
                      dataKey="score"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Target"
                      dataKey="target"
                      stroke="#94a3b8"
                      fill="#94a3b8"
                      fillOpacity={0.3}
                    />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>

                <div className="space-y-4">
                  {complianceMetrics.map((metric) => (
                    <div key={metric.framework}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{metric.framework}</span>
                        <span className="text-sm font-bold text-slate-900">
                          {metric.score}% / {metric.target}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            metric.score >= metric.target
                              ? "bg-green-500"
                              : metric.score >= metric.target * 0.8
                              ? "bg-blue-500"
                              : "bg-orange-500"
                          }`}
                          style={{ width: `${(metric.score / metric.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sendai Framework Progress (2015-2030)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Priority 1: Understanding Disaster Risk</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Risk assessments, vulnerability mapping, and hazard monitoring systems
                  </p>
                  <div className="h-3 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: "78%" }}></div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-blue-900">78% Complete</div>
                </div>

                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Priority 2: Strengthening Disaster Risk Governance</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Institutional arrangements, legal frameworks, and multi-stakeholder coordination
                  </p>
                  <div className="h-3 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600" style={{ width: "82%" }}></div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-green-900">82% Complete</div>
                </div>

                <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Priority 3: Investing in Resilience</h4>
                  <p className="text-sm text-purple-700 mb-3">
                    Infrastructure resilience, economic diversification, and social protection
                  </p>
                  <div className="h-3 bg-purple-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: "75%" }}></div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-purple-900">75% Complete</div>
                </div>

                <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Priority 4: Enhancing Preparedness</h4>
                  <p className="text-sm text-orange-700 mb-3">
                    Early warning systems, response capacity, and recovery planning
                  </p>
                  <div className="h-3 bg-orange-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600" style={{ width: "88%" }}></div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-orange-900">88% Complete</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coop" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Continuity of Operations (COOP) / Continuity of Government (COG) Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Agency/LGU</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Last Update</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Compliance Score</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coopImplementation.map((item) => (
                      <tr key={item.agency} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-600" />
                            {item.agency}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <Badge
                            className={
                              item.status === "Implemented"
                                ? "bg-green-500"
                                : item.status === "Under Review"
                                ? "bg-orange-500"
                                : "bg-slate-400"
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm">{item.lastUpdate}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  item.compliance >= 90
                                    ? "bg-green-500"
                                    : item.compliance >= 80
                                    ? "bg-blue-500"
                                    : "bg-orange-500"
                                }`}
                                style={{ width: `${item.compliance}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium">{item.compliance}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
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
                <CardTitle>COOP/COG Templates & Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">National COOP Template</h4>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <p className="text-sm text-slate-600">
                      Standardized template for national agencies and departments
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">LGU COOP Template</h4>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <p className="text-sm text-slate-600">
                      Tailored template for provincial, city, and municipal governments
                    </p>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">COG Implementation Guide</h4>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <p className="text-sm text-slate-600">
                      Step-by-step guide for continuity of government planning
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Role-Based Access Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">National Level</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• NDRRMC Officials</li>
                      <li>• OCD Executive Director</li>
                      <li>• Cabinet Secretaries</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Regional Level</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Regional DRRMC Chairs</li>
                      <li>• OCD Regional Directors</li>
                      <li>• Regional Line Agencies</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Local Level</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Provincial/City/Municipal Mayors</li>
                      <li>• Local DRRM Officers</li>
                      <li>• Barangay Officials</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="legal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Legal & Regulatory Framework Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {legalFramework.map((law) => (
                  <div key={law.law} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Scale className="h-5 w-5 text-blue-600" />
                          <h3 className="font-semibold text-slate-900">{law.law}</h3>
                          <Badge
                            className={
                              law.compliance >= 85
                                ? "bg-green-500"
                                : law.compliance >= 75
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }
                          >
                            {law.compliance}% Compliant
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600">{law.title}</p>
                        <div className="mt-3 text-xs text-slate-500">Last Audit: {law.lastAudit}</div>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${law.compliance}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Policy Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Evidence-Based Policy Development</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Leverage platform analytics and incident data to inform policy updates aligned with SDGs and 
                    Sendai Framework targets.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">SDG 1</Badge>
                    <Badge variant="outline">SDG 11</Badge>
                    <Badge variant="outline">SDG 13</Badge>
                    <Badge variant="outline">Sendai 2030</Badge>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Regulatory Gap Analysis</h4>
                  <p className="text-sm text-slate-600">
                    Automated monitoring identifies areas where additional regulations or policy updates are needed 
                    to strengthen DRR governance at all levels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resilience & Recovery Financing</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="allocated" fill="#3b82f6" name="Allocated (₱)" />
                  <Bar dataKey="utilized" fill="#10b981" name="Utilized (₱)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>People's Survival Fund (PSF)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-1">₱10.0B</div>
                    <div className="text-sm text-green-900">Total Allocated</div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">₱7.5B</div>
                    <div className="text-sm text-blue-900">Utilized (75%)</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">125</div>
                    <div className="text-sm text-slate-600">Projects Funded</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Microfinance & Insurance Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-slate-900">Low-Interest Loans</div>
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">₱3.2B</div>
                    <div className="text-sm text-slate-600">Disbursed to 12,500 households</div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-slate-900">Parametric Insurance</div>
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">45,000</div>
                    <div className="text-sm text-slate-600">Households covered</div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-slate-900">Business Recovery Grants</div>
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">₱1.8B</div>
                    <div className="text-sm text-slate-600">Supporting 8,200 MSMEs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recovery Cost Estimator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Household & Business Recovery Calculator</h4>
                <p className="text-sm text-blue-700 mb-4">
                  AI-powered tool to estimate recovery costs based on damage assessment data, helping households 
                  and businesses plan financial recovery and access appropriate assistance programs.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Launch Calculator
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
