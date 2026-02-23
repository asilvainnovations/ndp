import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Share2, MessageSquare, TrendingUp, Users } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const socialMediaMetrics = [
  { platform: "Facebook", followers: 125000, engagement: 8.5, posts: 450 },
  { platform: "Twitter/X", followers: 85000, engagement: 6.2, posts: 1200 },
  { platform: "Instagram", followers: 45000, engagement: 9.1, posts: 320 },
  { platform: "YouTube", followers: 28000, engagement: 7.8, posts: 85 },
];

const engagementTrend = [
  { month: "Aug", reach: 250000, engagement: 18000 },
  { month: "Sep", reach: 280000, engagement: 22000 },
  { month: "Oct", reach: 420000, engagement: 35000 },
  { month: "Nov", reach: 320000, engagement: 25000 },
  { month: "Dec", reach: 380000, engagement: 30000 },
  { month: "Jan", reach: 290000, engagement: 23000 },
  { month: "Feb", reach: 450000, engagement: 42000 },
];

const publicConfidence = [
  { category: "Early Warning System", score: 8.5 },
  { category: "Emergency Response", score: 8.2 },
  { category: "Information Transparency", score: 7.8 },
  { category: "Resource Distribution", score: 7.5 },
  { category: "Recovery Support", score: 7.9 },
];

export function CommunityEngagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Community Engagement</h1>
          <p className="text-slate-600 mt-1">Social media integration and public confidence building</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Share2 className="h-4 w-4 mr-2" />
          Post Update
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Total Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">450K</div>
            <p className="text-xs text-slate-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Active DRRMCs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">342</div>
            <p className="text-xs text-slate-500 mt-1">With social media presence</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Verified Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">2,055</div>
            <p className="text-xs text-slate-500 mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Public Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">7.9/10</div>
            <p className="text-xs text-slate-500 mt-1">National average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="social" className="space-y-4">
        <TabsList>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="confidence">Public Confidence</TabsTrigger>
          <TabsTrigger value="community">Community Programs</TabsTrigger>
          <TabsTrigger value="feedback">Citizen Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Platform Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Platform</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Followers</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Engagement Rate</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Total Posts</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {socialMediaMetrics.map((platform) => (
                      <tr key={platform.platform} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium">{platform.platform}</td>
                        <td className="py-3 px-4 text-sm">{platform.followers.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-20 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-500"
                                style={{ width: `${(platform.engagement / 10) * 100}%` }}
                              ></div>
                            </div>
                            <span>{platform.engagement}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">{platform.posts}</td>
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

          <Card>
            <CardHeader>
              <CardTitle>Engagement Trends (7 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={engagementTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="reach" stroke="#3b82f6" name="Total Reach" strokeWidth={2} />
                  <Line type="monotone" dataKey="engagement" stroke="#10b981" name="Engagement" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Verified Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-blue-500">NDRRMC Official</Badge>
                      <span className="text-xs text-slate-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      #TyphoonMaring Update: Signal No. 3 now in effect for Eastern Samar, Leyte, and Biliran. 
                      Evacuation ongoing. Follow your local DRRMC for instructions.
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span>❤️ 2.5K likes</span>
                      <span>💬 340 comments</span>
                      <span>🔄 1.8K shares</span>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-green-500">DRRMC Region 8</Badge>
                      <span className="text-xs text-slate-500">5 hours ago</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      Evacuation centers now open in Tacloban City. Food, water, and medical assistance available. 
                      Please bring essential documents and medicines.
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span>❤️ 1.2K likes</span>
                      <span>💬 180 comments</span>
                      <span>🔄 950 shares</span>
                    </div>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-purple-500">OCD</Badge>
                      <span className="text-xs text-slate-500">1 day ago</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      Preparedness saves lives! Join our community-based DRR training program. Registration open 
                      for all barangays.
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span>❤️ 890 likes</span>
                      <span>💬 120 comments</span>
                      <span>🔄 520 shares</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standardized Social Media Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Content Guidelines</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>✓ All posts must be verified by authorized personnel</li>
                      <li>✓ Use standardized templates for hazard alerts</li>
                      <li>✓ Include official hashtags: #NDRRMCUpdates #DisasterPreparedness</li>
                      <li>✓ Multilingual support (Filipino, English, local languages)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Verification Process</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>✓ Blue checkmark for NDRRMC and OCD accounts</li>
                      <li>✓ Green checkmark for regional/provincial DRRMCs</li>
                      <li>✓ Real-time fact-checking for disaster misinformation</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Engagement Strategy</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>✓ Daily updates during active incidents</li>
                      <li>✓ Community Q&A sessions every Friday</li>
                      <li>✓ Success stories and resilience highlights</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="confidence" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Public Confidence Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={publicConfidence} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="category" type="category" width={180} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3b82f6" name="Confidence Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transparency Dashboard Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">45,000</div>
                    <div className="text-sm text-slate-600">Unique visitors (monthly)</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">8.5 min</div>
                    <div className="text-sm text-slate-600">Average session duration</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
                    <div className="text-sm text-slate-600">Satisfaction rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Mobile App</div>
                      <div className="text-sm text-slate-600">125,430 active users</div>
                    </div>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">SMS Alerts</div>
                      <div className="text-sm text-slate-600">2.5M subscribers</div>
                    </div>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Radio Network</div>
                      <div className="text-sm text-slate-600">45 partner stations</div>
                    </div>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium">Community Bulletins</div>
                      <div className="text-sm text-slate-600">1,200 locations</div>
                    </div>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community-Based Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border border-slate-200 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Barangay DRR Volunteers</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">15,420</div>
                  <p className="text-sm text-slate-600">Active volunteers across 1,200 barangays</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Community Drills</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">450</div>
                  <p className="text-sm text-slate-600">Conducted this quarter</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Preparedness Campaigns</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">85</div>
                  <p className="text-sm text-slate-600">Ongoing nationwide</p>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg">
                  <Share2 className="h-8 w-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Partner Organizations</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">230</div>
                  <p className="text-sm text-slate-600">NGOs and civil society groups</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Citizen Feedback & Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 border border-slate-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge className="bg-green-500 mb-2">Implemented</Badge>
                      <h4 className="font-semibold text-slate-900">Multilingual SMS Alerts</h4>
                    </div>
                    <span className="text-sm text-slate-500">850 votes</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Early warning messages should be available in local dialects, not just Filipino and English."
                  </p>
                  <div className="mt-3 text-xs text-slate-500">Suggested by: Maria Santos, Leyte • Implemented: Jan 2026</div>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge className="bg-blue-500 mb-2">Under Review</Badge>
                      <h4 className="font-semibold text-slate-900">Mobile App Offline Mode</h4>
                    </div>
                    <span className="text-sm text-slate-500">620 votes</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Allow the mobile app to function offline for basic emergency information during network outages."
                  </p>
                  <div className="mt-3 text-xs text-slate-500">Suggested by: Jose Reyes, Cagayan • Under review</div>
                </div>

                <div className="p-6 border border-slate-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge className="bg-purple-500 mb-2">Planning</Badge>
                      <h4 className="font-semibold text-slate-900">Evacuation Center WiFi</h4>
                    </div>
                    <span className="text-sm text-slate-500">540 votes</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Provide free WiFi in evacuation centers so families can communicate with loved ones."
                  </p>
                  <div className="mt-3 text-xs text-slate-500">Suggested by: Ana Cruz, Albay • In planning phase</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
