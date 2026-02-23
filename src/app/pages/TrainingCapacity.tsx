import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { trainingPrograms } from "../data/mockData";

const competencyLevels = [
  { level: "Basic Awareness", certified: 2500, target: 3000 },
  { level: "Operational", certified: 1200, target: 1500 },
  { level: "Management", certified: 450, target: 600 },
  { level: "Strategic Leadership", certified: 120, target: 200 },
];

const trainingByCategory = [
  { name: "ICS/IMS", value: 450, color: "#3b82f6" },
  { name: "Community DRR", value: 680, color: "#10b981" },
  { name: "Emergency Response", value: 520, color: "#f59e0b" },
  { name: "SIMEX", value: 280, color: "#8b5cf6" },
  { name: "Technical Skills", value: 380, color: "#ef4444" },
];

const sendaiPriorities = [
  { priority: "Priority 1: Understanding Risk", completion: 78 },
  { priority: "Priority 2: Governance", completion: 82 },
  { priority: "Priority 3: Resilience Investment", completion: 75 },
  { priority: "Priority 4: Preparedness", completion: 88 },
];

export function TrainingCapacity() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Training & Capacity Building</h1>
          <p className="text-slate-600 mt-1">Competency framework and professional development programs</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <GraduationCap className="h-4 w-4 mr-2" />
          Enroll in Training
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Certified Professionals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">4,270</div>
            <p className="text-xs text-slate-500 mt-1">Across all levels</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Active Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">45</div>
            <p className="text-xs text-slate-500 mt-1">Ongoing training courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Training Institutions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">28</div>
            <p className="text-xs text-slate-500 mt-1">Accredited nationwide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">85%</div>
            <p className="text-xs text-slate-500 mt-1">Average across programs</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="programs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="programs">Training Programs</TabsTrigger>
          <TabsTrigger value="competency">Competency Framework</TabsTrigger>
          <TabsTrigger value="elearning">E-Learning</TabsTrigger>
          <TabsTrigger value="sendai">Sendai Alignment</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Training Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingPrograms.map((program) => (
                  <div key={program.id} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">{program.title}</h3>
                          <Badge
                            className={
                              program.status === "Ongoing"
                                ? "bg-blue-500"
                                : "bg-green-500"
                            }
                          >
                            {program.status}
                          </Badge>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-slate-500">Participants</div>
                            <div className="text-lg font-bold text-slate-900">{program.participants}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">Duration</div>
                            <div className="text-lg font-bold text-slate-900">{program.duration}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">Completion Rate</div>
                            <div className="text-lg font-bold text-slate-900">{program.completion}%</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${program.completion}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        View Details
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
                <CardTitle>Training by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trainingByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trainingByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming SIMEX Exercises</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">Multi-Hazard Earthquake & Tsunami</div>
                    <div className="text-sm text-slate-600">March 15-17, 2026 • Metro Manila</div>
                    <div className="mt-2 text-xs text-slate-500">30 participants • 3-day exercise</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">Typhoon Response Simulation</div>
                    <div className="text-sm text-slate-600">March 25-27, 2026 • Visayas Region</div>
                    <div className="mt-2 text-xs text-slate-500">50 participants • 3-day exercise</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">Volcanic Eruption Drill</div>
                    <div className="text-sm text-slate-600">April 8-10, 2026 • Bicol Region</div>
                    <div className="mt-2 text-xs text-slate-500">40 participants • 3-day exercise</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>OCD Competency Framework - Certification Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={competencyLevels}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="certified" fill="#3b82f6" name="Certified" />
                  <Bar dataKey="target" fill="#94a3b8" name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competency Level Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competencyLevels.map((level, idx) => (
                    <div key={level.level}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{level.level}</span>
                        <span className="text-sm font-bold text-slate-900">
                          {level.certified} / {level.target}
                        </span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            idx === 0
                              ? "bg-blue-500"
                              : idx === 1
                              ? "bg-green-500"
                              : idx === 2
                              ? "bg-purple-500"
                              : "bg-orange-500"
                          }`}
                          style={{ width: `${(level.certified / level.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Certification System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <Award className="h-10 w-10 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-blue-900 mb-2">Blockchain-Verified Certificates</h4>
                    <p className="text-sm text-blue-700">
                      All certifications are digitally signed and stored on a secure blockchain ledger for 
                      verification and fraud prevention.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">4,270</div>
                    <div className="text-sm text-slate-600">Total certificates issued</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">99.8%</div>
                    <div className="text-sm text-slate-600">Verification success rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="elearning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>E-Learning Platform for LGUs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-slate-200 rounded-lg text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900">150</div>
                  <div className="text-sm text-slate-600 mt-1">Online Courses</div>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900">12,500</div>
                  <div className="text-sm text-slate-600 mt-1">Active Learners</div>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg text-center">
                  <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900">8,200</div>
                  <div className="text-sm text-slate-600 mt-1">Completed Courses</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular E-Learning Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Introduction to DRR</h4>
                      <Badge className="bg-green-500">Beginner</Badge>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">Self-paced • 4 hours</div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>2,450 enrolled</span>
                      <span>95% completion rate</span>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Hazard Assessment Basics</h4>
                      <Badge className="bg-blue-500">Intermediate</Badge>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">Self-paced • 8 hours</div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>1,820 enrolled</span>
                      <span>88% completion rate</span>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">Emergency Operations Center Management</h4>
                      <Badge className="bg-purple-500">Advanced</Badge>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">Self-paced • 12 hours</div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>650 enrolled</span>
                      <span>82% completion rate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 mb-2">📚 Guidelines & Manuals</div>
                    <div className="text-sm text-slate-600">450 documents available</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 mb-2">🎥 Video Tutorials</div>
                    <div className="text-sm text-slate-600">280 instructional videos</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 mb-2">📊 Case Studies</div>
                    <div className="text-sm text-slate-600">120 documented incidents</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-medium text-slate-900 mb-2">📝 Templates & Forms</div>
                    <div className="text-sm text-slate-600">85 standardized templates</div>
                  </div>

                  <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700">
                    Access Knowledge Base
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sendai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sendai Framework Training Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sendaiPriorities.map((priority) => (
                  <div key={priority.priority}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{priority.priority}</span>
                      <span className="text-sm font-bold text-slate-900">{priority.completion}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{ width: `${priority.completion}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Sendai Framework Integration</h4>
                <p className="text-sm text-blue-700">
                  All training programs are aligned with Sendai Framework for Disaster Risk Reduction 2015-2030 priorities. 
                  Curriculum includes modules on understanding disaster risk, strengthening governance, investing in resilience, 
                  and enhancing preparedness for effective response.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>SDG Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">SDG 1: No Poverty</div>
                    <div className="text-sm text-slate-600">Resilience building for vulnerable populations</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">SDG 11: Sustainable Cities</div>
                    <div className="text-sm text-slate-600">Urban resilience and planning</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 mb-1">SDG 13: Climate Action</div>
                    <div className="text-sm text-slate-600">Climate adaptation and mitigation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">UN OCHA Certification</div>
                      <div className="text-xs text-slate-500">85 professionals certified</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">FEMA ICS Certification</div>
                      <div className="text-xs text-slate-500">120 professionals certified</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">ASEAN DM Certification</div>
                      <div className="text-xs text-slate-500">65 professionals certified</div>
                    </div>
                    <Badge variant="outline">Active</Badge>
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
