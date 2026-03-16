"use client";

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, Activity, Brain, Link as LinkIcon, AlertTriangle, GitPullRequest, FileText, Zap, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeatureSection />
        <ProductPreviewSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="font-medium tracking-tight text-sm">Assumption OS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
          <Link href="#problem" className="hover:text-black transition-colors">Problem</Link>
          <Link href="#how-it-works" className="hover:text-black transition-colors">How it works</Link>
          <Link href="#features" className="hover:text-black transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-neutral-500 hover:text-black transition-colors">Log in</Link>
          <Link href="/signup" className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium tracking-wide uppercase text-neutral-600">Assumption OS 1.0 is live</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-6 leading-[1.1]">
            Your team remembers the decision.<br className="hidden md:block" /> We remember why.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Capture the assumptions behind every major decision and get alerted when the logic behind your strategy stops being true.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
            Start Free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/demo" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black border border-black/10 rounded-full font-medium hover:bg-neutral-50 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
            Book Demo
          </Link>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA] z-10 pointer-events-none" />
          <motion.div 
            whileHover={{ scale: 1.01, rotate: 0.5, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="rounded-2xl border border-black/[0.08] bg-white shadow-2xl shadow-black/[0.04] overflow-hidden"
          >
            <div className="h-12 border-b border-black/[0.04] flex items-center px-4 gap-2 bg-neutral-50/50">
              <div className="w-3 h-3 rounded-full bg-black/10" />
              <div className="w-3 h-3 rounded-full bg-black/10" />
              <div className="w-3 h-3 rounded-full bg-black/10" />
            </div>
            <div className="p-8 text-left bg-white">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Q3 Pricing Strategy</h3>
                  <p className="text-sm text-neutral-500">Decided on Oct 12, 2025 • 4 Assumptions</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200/50 text-xs font-medium flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  1 Assumption at Risk
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-black/[0.06] flex items-start gap-4">
                  <div className="mt-0.5 text-emerald-500"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <p className="text-sm font-medium mb-1">Competitor X won&apos;t lower prices</p>
                    <p className="text-xs text-neutral-500">Linked to: Competitor Pricing Tracker</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 flex items-start gap-4">
                  <div className="mt-0.5 text-amber-500"><AlertTriangle className="w-5 h-5" /></div>
                  <div>
                    <p className="text-sm font-medium text-amber-900 mb-1">Customer acquisition cost remains under $50</p>
                    <p className="text-xs text-amber-700/70 mb-2">Linked to: Stripe CAC Metric</p>
                    <div className="text-xs font-medium text-amber-800 bg-amber-100/50 inline-flex px-2 py-1 rounded-md">
                      Current CAC: $58.40 (Exceeds threshold)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="py-12 border-y border-black/[0.04] bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-8">Trusted by forward-thinking teams</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
          {/* Fictional Logos */}
          <div className="text-xl font-bold tracking-tighter">Acme Corp</div>
          <div className="text-xl font-serif italic">Globex</div>
          <div className="text-xl font-black uppercase tracking-widest">Soylent</div>
          <div className="text-xl font-medium tracking-tight">Initech</div>
          <div className="text-xl font-bold">Umbrella</div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">The silent killer of good strategy is forgotten context.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Teams make decisions in meetings, Slack, docs, and planning tools, but later forget why they made them. When the underlying assumptions change, the team notices too late, leading to misaligned execution and wasted resources.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Capture the decision",
      description: "Log major decisions quickly from Slack, Notion, or directly in Assumption OS."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Extract assumptions",
      description: "Our AI helps identify and articulate the hidden beliefs supporting your decision."
    },
    {
      icon: <LinkIcon className="w-5 h-5" />,
      title: "Connect live metrics",
      description: "Link assumptions to live data sources like Stripe, Mixpanel, or custom APIs."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Get alerts when broken",
      description: "Receive immediate notifications when the logic behind your strategy stops being true."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-white border-y border-black/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How it works</h2>
            <p className="text-neutral-500">A simple workflow to protect your strategic logic.</p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-black/[0.06]" />
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1} className="relative pt-6 md:pt-0">
              <div className="w-12 h-12 bg-white border border-black/[0.08] rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10 shadow-sm">
                {step.icon}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Decision capture",
      description: "A centralized ledger for every strategic choice your company makes."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Assumption extraction",
      description: "Turn vague beliefs into testable, trackable hypotheses."
    },
    {
      icon: <LinkIcon className="w-5 h-5" />,
      title: "Metric linking",
      description: "Tie assumptions directly to the data that proves or disproves them."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Risk alerts",
      description: "Automated warnings when a foundational assumption is invalidated."
    },
    {
      icon: <GitPullRequest className="w-5 h-5" />,
      title: "Review workflows",
      description: "Scheduled check-ins to manually verify qualitative assumptions."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI risk summaries",
      description: "Weekly digests of your strategic health and emerging vulnerabilities."
    }
  ];

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything you need to monitor strategy.</h2>
            <p className="text-neutral-500 max-w-2xl">Built for teams that treat decisions as hypotheses to be tested, not facts to be forgotten.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="p-8 rounded-3xl border border-black/[0.06] bg-white hover:border-black/[0.12] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-6 text-neutral-600 group-hover:bg-black group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="rounded-[2.5rem] bg-black p-2 md:p-4 shadow-2xl">
            <div className="rounded-[2rem] overflow-hidden bg-[#FAFAFA] border border-white/10 relative">
              <div className="h-14 border-b border-black/[0.06] flex items-center px-6 justify-between bg-white">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="text-xs font-medium text-neutral-400">app.assumptionos.com</div>
                <div className="w-16" />
              </div>
              
              <div className="flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-black/[0.06] h-[600px] bg-neutral-50/50 hidden md:block p-4">
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium bg-white rounded-lg shadow-sm border border-black/[0.04]">All Decisions</div>
                    <div className="px-3 py-2 text-sm font-medium text-neutral-500">At Risk <span className="float-right bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px]">2</span></div>
                    <div className="px-3 py-2 text-sm font-medium text-neutral-500">Healthy</div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-8 bg-white h-[600px] overflow-hidden relative">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">European Expansion</h2>
                      <p className="text-sm text-neutral-500">Owner: Sarah J. • Decided: Jan 15, 2026</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Core Assumptions</h3>
                    
                    {/* Assumption Card 1 */}
                    <div className="p-5 rounded-2xl border border-black/[0.06] hover:border-black/[0.1] transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Regulatory approval takes &lt; 6 months</h4>
                            <p className="text-sm text-neutral-500 mt-1">Based on historical data from competitors.</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-neutral-100 rounded-md text-neutral-600">Manual Review</span>
                      </div>
                      <div className="text-xs text-neutral-400 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" /> Last verified: 2 days ago
                      </div>
                    </div>

                    {/* Assumption Card 2 - Broken */}
                    <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/30 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400" />
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-amber-900">Local hiring market has sufficient senior talent</h4>
                            <p className="text-sm text-amber-700/70 mt-1">Need 5 senior engineers within 60 days.</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-white border border-amber-200 rounded-md text-amber-700 flex items-center gap-1">
                          <LinkIcon className="w-3 h-3" /> Workday API
                        </span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-amber-100 flex items-center justify-between">
                        <span className="text-sm font-medium text-amber-800">Current Pipeline: 1 Senior Candidate</span>
                        <button className="text-xs font-medium bg-amber-100 text-amber-800 px-3 py-1.5 rounded-md hover:bg-amber-200 transition-colors">
                          Acknowledge Risk
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Stop flying blind after the decision is made.</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                Most companies spend weeks making a decision and zero minutes tracking if the reasons for that decision hold true over time.
              </p>
            </FadeIn>
            <div className="space-y-6">
              {[
                { title: "Fewer silent bad decisions", desc: "Catch failing strategies before they impact the bottom line." },
                { title: "Better team memory", desc: "New hires instantly understand why things are the way they are." },
                { title: "Earlier risk visibility", desc: "Data-driven alerts replace gut feelings and delayed reporting." }
              ].map((benefit, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.1} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-400">{benefit.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={0.3} className="relative">
            <div className="aspect-square rounded-full bg-white/5 absolute -inset-8 blur-3xl" />
            <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-medium">System Health</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-sm text-neutral-300">Active Decisions</span>
                  <span className="font-mono text-white">142</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-sm text-neutral-300">Tracked Assumptions</span>
                  <span className="font-mono text-white">584</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-sm text-amber-400">Assumptions at Risk</span>
                  <span className="font-mono text-amber-400">3</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We used to realize a strategy was failing 6 months too late. Now, Assumption OS pings us the moment our core metrics diverge from our initial thesis.",
      author: "Elena R.",
      role: "VP of Product, TechFlow"
    },
    {
      quote: "It's completely changed how we run executive meetings. Instead of arguing opinions, we look at which assumptions are holding up and which are breaking.",
      author: "Marcus T.",
      role: "CEO, ScaleUp Inc"
    },
    {
      quote: "The best tool for remote teams. The context behind why we chose a specific architecture is never lost, even when the original engineers leave.",
      author: "Sarah K.",
      role: "Engineering Manager, DataSync"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Don&apos;t just take our word for it</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-white border border-black/[0.06] h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-neutral-600 leading-relaxed mb-8">&quot;{t.quote}&quot;</p>
                </div>
                <div>
                  <p className="font-medium text-black">{t.author}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-black/[0.04] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h2>
            <p className="text-neutral-500">Start protecting your decisions today.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <FadeIn delay={0}>
            <div className="p-8 rounded-3xl border border-black/[0.06] bg-[#FAFAFA]">
              <h3 className="text-lg font-medium mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-semibold">$49</span>
                <span className="text-neutral-500">/mo</span>
              </div>
              <p className="text-sm text-neutral-500 mb-8 h-10">For small teams establishing their decision culture.</p>
              <Link href="/signup" className="block w-full py-3 px-4 bg-white border border-black/[0.1] rounded-full text-center font-medium hover:bg-neutral-50 transition-colors mb-8">
                Start Free Trial
              </Link>
              <ul className="space-y-4 text-sm text-neutral-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Up to 10 users</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Unlimited decisions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Manual assumption tracking</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Slack integration</li>
              </ul>
            </div>
          </FadeIn>

          {/* Growth */}
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-3xl border-2 border-black bg-white relative shadow-xl shadow-black/[0.04] transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                RECOMMENDED
              </div>
              <h3 className="text-lg font-medium mb-2">Growth</h3>
              <div className="mb-6">
                <span className="text-4xl font-semibold">$199</span>
                <span className="text-neutral-500">/mo</span>
              </div>
              <p className="text-sm text-neutral-500 mb-8 h-10">For scaling companies that need automated monitoring.</p>
              <Link href="/signup" className="block w-full py-3 px-4 bg-black text-white rounded-full text-center font-medium hover:bg-neutral-800 transition-colors mb-8">
                Start Free Trial
              </Link>
              <ul className="space-y-4 text-sm text-neutral-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Up to 50 users</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Live metric integrations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Automated risk alerts</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> AI assumption extraction</li>
              </ul>
            </div>
          </FadeIn>

          {/* Enterprise */}
          <FadeIn delay={0.2}>
            <div className="p-8 rounded-3xl border border-black/[0.06] bg-[#FAFAFA]">
              <h3 className="text-lg font-medium mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-semibold">Custom</span>
              </div>
              <p className="text-sm text-neutral-500 mb-8 h-10">For large organizations with complex data requirements.</p>
              <Link href="/demo" className="block w-full py-3 px-4 bg-white border border-black/[0.1] rounded-full text-center font-medium hover:bg-neutral-50 transition-colors mb-8">
                Book a Demo
              </Link>
              <ul className="space-y-4 text-sm text-neutral-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Unlimited users</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Custom API integrations</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Advanced access controls</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-neutral-400" /> Dedicated success manager</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How is this different from Notion or Google Docs?",
      a: "Docs are static. Once a decision is written down, it's rarely looked at again. Assumption OS actively monitors the logic behind your decisions and alerts you when the underlying facts change."
    },
    {
      q: "What kind of metrics can I connect?",
      a: "You can connect data from Stripe, Mixpanel, Salesforce, HubSpot, or any custom data source via our API to automatically verify quantitative assumptions."
    },
    {
      q: "Does it require a lot of manual data entry?",
      a: "No. Our Slack integration and AI extraction tools allow you to log a decision in seconds. The AI automatically drafts the underlying assumptions for you to review."
    },
    {
      q: "How do qualitative assumptions get tracked?",
      a: "For assumptions that can't be tied to a number (e.g., 'Competitor X won't launch a similar feature'), you can set up automated review workflows that ping the owner to verify the assumption periodically."
    },
    {
      q: "Is my strategic data secure?",
      a: "Yes. We use enterprise-grade encryption at rest and in transit. We are SOC2 Type II compliant and never train public AI models on your proprietary data."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#FAFAFA] border-t border-black/[0.04]">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div 
        className="border border-black/[0.06] rounded-2xl bg-white overflow-hidden cursor-pointer hover:border-black/[0.12] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-6 flex justify-between items-center">
          <h3 className="font-medium text-black pr-8">{question}</h3>
          <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="p-6 pt-0 text-neutral-500 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to protect your strategy?</h2>
          <p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">
            Join hundreds of forward-thinking teams that use Assumption OS to make better, safer decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Start your free trial
            </Link>
            <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-black/10 rounded-full font-medium hover:bg-neutral-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Book a Demo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-black/[0.04] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <span className="font-medium tracking-tight">Assumption OS</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Decision risk and assumption monitoring for modern teams. Never lose the context behind your strategy again.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Assumption OS. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-neutral-400">
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
