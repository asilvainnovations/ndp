import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin } from "lucide-react";
import { BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { provinceRiskData } from "../data/mockData";

const vulnerabilityIndicators = [
  { indicator: "Poverty Incidence", value: 7.2 },
  { indicator: "Health Infrastructure", value: 6.5 },
  { indicator: "Education Access", value: 8.1 },
  { indicator: "Housing Quality", value: 5.8 },
  { indicator: "Livelihood Diversity", value: 6.9 },
];

const scenarioModeling = [
  {
    scenario: "Magnitude 7.0 Earthquake",
    expectedCasualties: "5,000 - 8,000",
    damagedBuildings: "25,000 - 35,000",
    economicLoss: "₱50-80 Billion",
    affectedPop: "2.5 Million",
  },
  {
    scenario: "Category 5 Super Typhoon",
    expectedCasualties: "1,200 - 2,500",
    damagedBuildings: "15,000 - 25,000",
    economicLoss: "₱30-60 Billion",
    affectedPop: "1.8 Million",
  },
  {
    scenario: "Major Flooding (100-year)",
    expectedCasualties: "500 - 1,200",
    damagedBuildings: "8,000 - 15,000",
    economicLoss: "₱15-25 Billion",
    affectedPop: "850,000",
  },
];

export function RiskAssessment() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Risk & Vulnerability Assessment</h1>
          <p className="text-slate-600 mt-1">Multi-hazard exposure, vulnerability, and resilience analysis</p>
        </div>
        <Select defaultValue="national">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="national">National Level</SelectItem>
            <SelectItem value="regional">Regional Level</SelectItem>
            <SelectItem value="provincial">Provincial Level</SelectItem>
            <SelectItem value="municipal">Municipal Level</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">High-Risk Provinces</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">12</div>
            <p className="text-xs text-slate-500 mt-1">Requiring priority intervention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Vulnerable Population</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">8.5M</div>
            <p className="text-xs text-slate-500 mt-1">In high-exposure areas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">National Resilience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">7.2/10</div>
            <p className="text-xs text-slate-500 mt-1">Average resilience score</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Coping Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">74%</div>
            <p className="text-xs text-slate-500 mt-1">Communities with adequate capacity</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="provincial" className="space-y-4">
        <TabsList>
          <TabsTrigger value="provincial">Provincial Risk Matrix</TabsTrigger>
          <TabsTrigger value="vulnerability">Vulnerability Indicators</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Modeling</TabsTrigger>
          <TabsTrigger value="maps">Interactive Maps</TabsTrigger>
        </TabsList>

        <TabsContent value="provincial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Hazard Risk Assessment by Province</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={provinceRiskData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="province" type="category" width={100} />
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

          <Card>
            <CardHeader>
              <CardTitle>Provincial Risk Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Rank</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Province</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Exposure</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Vulnerability</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Capacity</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Resilience</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provinceRiskData
                      .sort((a, b) => b.exposure + b.vulnerability - (a.exposure + a.vulnerability))
                      .map((province, idx) => (
                        <tr key={province.province} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4 text-sm font-medium">{idx + 1}</td>
                          <td className="py-3 px-4 text-sm font-medium">{province.province}</td>
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-red-500"
                                  style={{ width: `${(province.exposure / 10) * 100}%` }}
                                ></div>
                              </div>
                              <span>{province.exposure}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-orange-500"
                                  style={{ width: `${(province.vulnerability / 10) * 100}%` }}
                                ></div>
                              </div>
                              <span>{province.vulnerability}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-500"
                                  style={{ width: `${(province.capacity / 10) * 100}%` }}
                                ></div>
                              </div>
                              <span>{province.capacity}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-green-500"
                                  style={{ width: `${(province.resilience / 10) * 100}%` }}
                                ></div>
                              </div>
                              <span>{province.resilience}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <Badge
                              className={
                                idx < 3
                                  ? "bg-red-500"
                                  : idx < 6
                                  ? "bg-orange-500"
                                  : "bg-yellow-500"
                              }
                            >
                              {idx < 3 ? "Critical" : idx < 6 ? "High" : "Medium"}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vulnerability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Socioeconomic Vulnerability Indicators (National Average)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={vulnerabilityIndicators}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="indicator" />
                    <PolarRadiusAxis domain={[0, 10]} />
                    <Radar
                      name="Vulnerability Score"
                      dataKey="value"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>

                <div className="space-y-4">
                  {vulnerabilityIndicators.map((indicator) => (
                    <div key={indicator.indicator}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{indicator.indicator}</span>
                        <span className="text-sm font-bold text-slate-900">{indicator.value}/10</span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-500 rounded-full transition-all"
                          style={{ width: `${(indicator.value / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Infrastructure Vulnerability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-600">Buildings at Risk</div>
                    <div className="text-2xl font-bold">23,500</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Critical Infrastructure</div>
                    <div className="text-2xl font-bold">1,240</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Population Vulnerability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-600">Below Poverty Line</div>
                    <div className="text-2xl font-bold">18.2%</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Elderly & Disabled</div>
                    <div className="text-2xl font-bold">2.8M</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Economic Vulnerability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-600">Livelihood at Risk</div>
                    <div className="text-2xl font-bold">₱125B</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Agricultural Exposure</div>
                    <div className="text-2xl font-bold">₱85B</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hazard-Specific Scenario Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {scenarioModeling.map((scenario) => (
                  <div key={scenario.scenario} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">{scenario.scenario}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Expected Casualties</div>
                        <div className="font-semibold text-slate-900">{scenario.expectedCasualties}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Damaged Buildings</div>
                        <div className="font-semibold text-slate-900">{scenario.damagedBuildings}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Economic Loss</div>
                        <div className="font-semibold text-slate-900">{scenario.economicLoss}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Affected Population</div>
                        <div className="font-semibold text-slate-900">{scenario.affectedPop}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Geospatial Risk Maps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-100 rounded-lg p-12 text-center">
                <div className="text-slate-400 mb-4">
                  <MapPin className="h-16 w-16 mx-auto" />
                </div>
                <p className="text-slate-600">
                  Integration point for PhilAWARE/DisasterAWARE geospatial datasets
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Interactive maps showing multi-hazard exposure overlays with socioeconomic indicators
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}