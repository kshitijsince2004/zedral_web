// ─── Blog Post Data Store ────────────────────────────────────────────────────
// To add a new blog post:
//   1. Add a new object to the `blogPosts` array below
//   2. Add the slug URL to public/sitemap.xml
//   3. Add the article to llms.txt under Blog Articles section
// ─────────────────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  dateISO: string; // for SEO / schema
  readTime: string;
  tags: string[];
  heroImage: string;
  content: ContentBlock[];
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

// ─── Import assets ────────────────────────────────────────────────────────────
import featureMetrics from "@/assets/feature-metrics.png";
import featureBottleneck from "@/assets/feature-bottleneck.png";
import featureYield from "@/assets/feature-yield.png";
import featureCycle from "@/assets/feature-cycle.png";
import featureReports from "@/assets/feature-reports.png";
import featureQuality from "@/assets/feature-quality.png";

// ─────────────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  // ── Article 1 ──────────────────────────────────────────────────────────────
  {
    slug: "manufacturers-operating-at-65-percent",
    category: "Operational Efficiency",
    title:
      "Why Most Manufacturers Are Operating at 65% of Their True Production Potential",
    excerpt:
      "Manufacturing organisations across India consistently underperform against their theoretical capacity — not because of machine limitations, but because of invisible inefficiencies embedded in manual workflows.",
    author: "Zedral Team",
    date: "20 February 2026",
    dateISO: "2026-02-20",
    readTime: "8 min read",
    tags: ["manufacturing", "efficiency", "operational intelligence", "India", "AI"],
    heroImage: featureMetrics,
    seo: {
      title:
        "Why Most Manufacturers Are Operating at 65% of Their True Production Potential",
      description:
        "Manufacturing organisations across India consistently underperform against their theoretical capacity. We break down where the loss happens and what structured visibility can do about it.",
      keywords:
        "manufacturing efficiency India, production capacity, shopfloor bottleneck, factory efficiency improvement, operational intelligence",
    },
    content: [
      {
        type: "paragraph",
        text: "Manufacturing organisations across India consistently underperform against their theoretical capacity — not because of machine limitations, but because of invisible inefficiencies embedded in manual workflows. The gap between what a factory can produce and what it actually produces is often staggering.",
      },
      { type: "heading", text: "The 65% Reality" },
      {
        type: "paragraph",
        text: "Studies across sectors — garments, electronics assembly, packaging, and automotive components — consistently show that most factories operate at roughly 65% of their theoretical capacity. This is not a failure of machinery. Machines, when maintained, perform at specification. The loss lives in the spaces between: changeover delays, unbalanced workstations, inconsistent operator pacing, and processes that nobody has formally measured in years.",
      },
      {
        type: "paragraph",
        text: "Line supervisors often know where the problems are. But without structured data, their observations remain anecdotal — easy to dismiss in planning meetings, impossible to quantify for leadership.",
      },
      { type: "image", src: featureBottleneck, alt: "Bottleneck detection illustration" },
      { type: "heading", text: "Where the Loss Hides" },
      {
        type: "paragraph",
        text: "Production loss rarely announces itself. It accumulates in small, repeated patterns:",
      },
      {
        type: "list",
        items: [
          "A workstation that takes 20% longer than its neighbours, creating a bottleneck nobody formally tracks.",
          "Changeover procedures that vary by shift, adding 15–30 minutes of unplanned downtime daily.",
          "SOP deviations that go unnoticed because compliance is checked manually, if at all.",
          "Idle time between tasks that compounds across dozens of operators over a full shift.",
        ],
      },
      {
        type: "paragraph",
        text: "Each of these individually seems minor. Together, they account for the missing 35%.",
      },
      { type: "heading", text: "The Visibility Problem" },
      {
        type: "paragraph",
        text: "The core issue is not that these problems are unsolvable — it is that they are invisible. Traditional monitoring gives you machine uptime and output counts. It does not tell you why Line 3 consistently underperforms on Tuesday afternoons, or why a particular workstation's cycle time drifts upward after lunch.",
      },
      {
        type: "paragraph",
        text: "This is the gap that operational intelligence fills. By capturing workstation-level activity data continuously and structuring it into actionable metrics, factories gain the ability to see what has always been hidden in plain sight.",
      },
      { type: "heading", text: "From Data to Action" },
      {
        type: "paragraph",
        text: 'Structured visibility changes the conversation. Instead of "we need to improve efficiency," teams can say: "Workstation 7 on Line 2 is our constraint — its average cycle time is 42 seconds against a target of 30, and it affects downstream throughput by 18%."',
      },
      {
        type: "paragraph",
        text: "That specificity is what drives real improvement. It moves factories from reactive problem-solving to proactive optimisation — identifying issues before they compound, and measuring the impact of every change.",
      },
      { type: "image", src: featureYield, alt: "Yield improvement illustration" },
      { type: "heading", text: "The Path to Full Potential" },
      {
        type: "paragraph",
        text: "No factory will operate at 100% — some loss is inherent in any physical process. But the jump from 65% to 80% or 85% represents a transformation in output, margin, and competitiveness. And it does not require new machines, new layouts, or more workers. It requires seeing what is actually happening on the line, shift by shift, station by station.",
      },
      {
        type: "paragraph",
        text: "That is the promise of operational intelligence: not more data, but the right data — structured, contextual, and immediately actionable.",
      },
    ],
  },

  // ── Article 2 ──────────────────────────────────────────────────────────────
  {
    slug: "ai-vision-replacing-manual-shopfloor-observation",
    category: "AI & Technology",
    title: "How AI Vision Is Replacing Manual Shopfloor Observation",
    excerpt:
      "For decades, the only way to understand what was happening on a factory floor was to walk it. AI-powered computer vision is changing that — giving production teams continuous, objective, and scalable visibility without a single extra person on the floor.",
    author: "Zedral Team",
    date: "5 March 2026",
    dateISO: "2026-03-05",
    readTime: "6 min read",
    tags: ["AI vision", "computer vision", "shopfloor monitoring", "manufacturing technology", "Industry 4.0"],
    heroImage: featureCycle,
    seo: {
      title: "How AI Vision Is Replacing Manual Shopfloor Observation",
      description:
        "AI-powered computer vision gives production teams continuous, objective shopfloor visibility — replacing expensive, inconsistent manual observation with real-time data from existing cameras.",
      keywords:
        "AI vision manufacturing, computer vision shopfloor, AI monitoring factory, automated shopfloor observation, manufacturing AI India",
    },
    content: [
      {
        type: "paragraph",
        text: "For decades, the only way to understand what was actually happening on a factory floor was to walk it. Time-motion studies, supervisor rounds, clipboard-based observations — all valuable in their time, but slow, expensive, and deeply subjective. AI-powered computer vision is changing that fundamentally.",
      },
      { type: "heading", text: "The Limits of Manual Observation" },
      {
        type: "paragraph",
        text: "Manual observation has three core problems that no amount of diligence can solve. First, it is not continuous — a supervisor can only watch one area at a time, and behaviour changes when people know they are being observed. Second, it is slow — time-motion studies take days to complete and produce a snapshot, not a live picture. Third, it does not scale — adding more observers adds cost, not accuracy.",
      },
      {
        type: "paragraph",
        text: "The result is that most factories make operational decisions based on incomplete, delayed, and inconsistent data. Problems that repeat daily go undetected for months simply because no one was watching at the right moment.",
      },
      { type: "image", src: featureCycle, alt: "Cycle time monitoring illustration" },
      { type: "heading", text: "What AI Vision Does Differently" },
      {
        type: "paragraph",
        text: "AI vision systems use existing cameras — the same CCTV infrastructure most factories already have — and apply machine learning models to analyse activity in real time. Unlike manual observation, these systems work continuously across every shift, every line, every workstation simultaneously.",
      },
      {
        type: "list",
        items: [
          "Continuous monitoring: every minute of every shift is observed, not just sampled.",
          "Objective measurement: cycle times, idle periods, and activity patterns are recorded without human interpretation bias.",
          "Scalable coverage: one system can monitor an entire production floor simultaneously.",
          "Historical analysis: trends over weeks and months become visible, not just single-shift snapshots.",
        ],
      },
      { type: "heading", text: "Privacy and Practicality" },
      {
        type: "paragraph",
        text: "A common concern is worker privacy. Well-designed AI vision systems address this directly — they detect and measure activity patterns rather than recording or storing identifiable video. The output is structured data: cycle times, workstation utilisation rates, idle percentages. No faces, no personal data, no surveillance footage.",
      },
      {
        type: "paragraph",
        text: "This is also what makes deployment practical. No new cameras, no new hardware, no weeks of installation. The intelligence layer sits on top of infrastructure that already exists.",
      },
      { type: "heading", text: "From Observation to Action" },
      {
        type: "paragraph",
        text: "The real value of AI vision is not the data itself — it is the speed at which insights reach the people who can act on them. When a workstation begins running slow, a supervisor sees it on their dashboard in real time, not in next week's report. When a changeover takes 40% longer than standard, the system flags it immediately.",
      },
      {
        type: "paragraph",
        text: "This shift from reactive to proactive management is where factories find their efficiency gains — not in knowing what went wrong last month, but in catching it this shift.",
      },
    ],
  },

  // ── Article 3 ──────────────────────────────────────────────────────────────
  {
    slug: "hidden-cost-of-sop-non-compliance-indian-factories",
    category: "Operations",
    title: "The Hidden Cost of SOP Non-Compliance on Indian Factory Floors",
    excerpt:
      "Standard Operating Procedures exist for a reason — but in most Indian factories, compliance is assumed rather than verified. The financial cost of that assumption is larger than most operations teams realise.",
    author: "Zedral Team",
    date: "12 March 2026",
    dateISO: "2026-03-12",
    readTime: "7 min read",
    tags: ["SOP compliance", "production loss", "Indian manufacturing", "quality control", "operations"],
    heroImage: featureQuality,
    seo: {
      title: "The Hidden Cost of SOP Non-Compliance on Indian Factory Floors",
      description:
        "SOP compliance is assumed rather than verified in most Indian factories. We quantify the real financial cost and explain how continuous monitoring changes the equation.",
      keywords:
        "SOP compliance manufacturing India, standard operating procedure factory, production loss SOP, manufacturing quality compliance, shopfloor compliance monitoring",
    },
    content: [
      {
        type: "paragraph",
        text: "Standard Operating Procedures exist for a reason. They encode the best-known way to perform a task — the sequence, the timing, the quality checks — refined through experience and often through costly mistakes. Yet in most Indian factories, SOP compliance is assumed rather than verified. The result is a quiet, continuous drain on efficiency and quality that rarely appears on any dashboard.",
      },
      { type: "heading", text: "Why Compliance Drifts" },
      {
        type: "paragraph",
        text: "SOP drift is almost never intentional. It happens through small adaptations that each seem reasonable in isolation: a worker skips a step because they are running behind, a shortcut that works most of the time gets passed on informally, a procedure written for one machine gets applied unchanged to a newer model. Over time, what the SOP says and what actually happens on the floor diverge significantly.",
      },
      {
        type: "list",
        items: [
          "New operators learn from experienced colleagues, not from the SOP document.",
          "Supervisors are too stretched to verify procedural compliance continuously.",
          "SOPs are often updated centrally but not consistently communicated to the floor.",
          "Pressure to hit output targets creates incentive to cut corners on process steps.",
        ],
      },
      { type: "image", src: featureQuality, alt: "Quality monitoring illustration" },
      { type: "heading", text: "The Real Cost" },
      {
        type: "paragraph",
        text: "The financial impact of SOP non-compliance shows up in three places — and only one of them is usually visible. Quality defects and rework are tracked because they produce a tangible output: rejected units, customer complaints, return costs. But the other two — inconsistent cycle times and accumulating micro-inefficiencies — rarely appear in any formal accounting.",
      },
      {
        type: "paragraph",
        text: "Consider a garment factory where a stitching SOP specifies a 28-second cycle at a particular workstation. If 30% of operators are consistently running 35 seconds due to a procedural deviation, that single station loses roughly 20% of its throughput. Across a line of 40 stations running three shifts, the cumulative loss is substantial — and it never shows up as a line item.",
      },
      { type: "heading", text: "Verification at Scale" },
      {
        type: "paragraph",
        text: "The traditional approach to compliance verification is audits — periodic checks by supervisors or quality teams. The problem is that audits are easily gamed, highly sampled, and expensive to run at meaningful frequency. A workstation that is checked once per shift can run non-compliant for the other seven hours without consequence.",
      },
      {
        type: "paragraph",
        text: "Continuous monitoring using AI vision changes this equation entirely. When every cycle at every workstation is observed and measured against expected parameters, deviation is caught immediately — not in the next audit. Supervisors receive alerts when a workstation's pattern diverges from its SOP baseline, allowing correction in real time rather than after the fact.",
      },
      { type: "heading", text: "Making Compliance Visible" },
      {
        type: "paragraph",
        text: "The goal is not surveillance — it is consistency. Factories that achieve consistent SOP adherence do not just reduce defects. They also unlock the reliable baseline that process improvement requires: you cannot meaningfully improve a process until you know it is being executed as designed in the first place.",
      },
      {
        type: "paragraph",
        text: "This is what structured compliance visibility provides — not a tool for blame, but a foundation for genuine improvement.",
      },
    ],
  },

  // ── Article 4 ──────────────────────────────────────────────────────────────
  {
    slug: "operational-intelligence-for-plant-managers",
    category: "Leadership",
    title:
      "From Data to Decisions: What Operational Intelligence Means for Plant Managers",
    excerpt:
      "Plant managers are data-rich and insight-poor. They receive reports on output volumes, machine downtime, and quality defects — but rarely on the human workflow layer where most efficiency is actually won or lost.",
    author: "Zedral Team",
    date: "18 March 2026",
    dateISO: "2026-03-18",
    readTime: "5 min read",
    tags: ["plant manager", "operational intelligence", "manufacturing decisions", "production data", "leadership"],
    heroImage: featureReports,
    seo: {
      title: "From Data to Decisions: What Operational Intelligence Means for Plant Managers",
      description:
        "Plant managers are data-rich but insight-poor. Operational intelligence platforms give them workstation-level visibility to make faster, more accurate production decisions.",
      keywords:
        "operational intelligence plant manager, manufacturing data decisions, production manager tools, factory floor insights, manufacturing leadership India",
    },
    content: [
      {
        type: "paragraph",
        text: "Plant managers are, by most measures, drowning in data. ERP systems produce output counts. MES platforms track machine downtime. Quality systems log defect rates. Yet ask most plant managers what is actually causing their efficiency gap on any given shift, and the honest answer is: they are not sure.",
      },
      { type: "heading", text: "The Gap Between Data and Insight" },
      {
        type: "paragraph",
        text: "The problem is not a lack of information — it is a lack of the right information. Most factory data systems are designed around machines and outputs, not around human workflow activity. They tell you how many units were produced and how long the line was down. They do not tell you which workstation slowed everything down, or why output on Line 4 is consistently 12% below target on evening shifts.",
      },
      {
        type: "paragraph",
        text: "This leaves plant managers making decisions based on intuition, supervisor reports, and retrospective data — all of which are valuable, but none of which give a real-time picture of what is happening at workstation level.",
      },
      { type: "image", src: featureReports, alt: "Production efficiency reports illustration" },
      { type: "heading", text: "What Operational Intelligence Adds" },
      {
        type: "paragraph",
        text: "Operational intelligence platforms fill the gap between machine-level data and human workflow reality. By monitoring workstation activity continuously — cycle times, idle periods, throughput rates — they give plant managers a live picture of where bottlenecks are forming, which lines are running below capacity, and where SOP compliance is drifting.",
      },
      {
        type: "list",
        items: [
          "Real-time bottleneck identification: see which station is constraining throughput right now, not in tomorrow's report.",
          "Shift-level comparisons: understand why morning shifts consistently outperform evening shifts on specific lines.",
          "Workstation benchmarking: identify which operators or stations are running ahead of target and why.",
          "Trend analysis: spot efficiency degradation over days and weeks before it becomes a crisis.",
        ],
      },
      { type: "heading", text: "Better Decisions, Faster" },
      {
        type: "paragraph",
        text: "The operational value of this visibility is in decision speed. A plant manager who knows, at 10am, that Workstation 7 on Line 2 is running 40% over cycle time can redirect resource, adjust targets, or investigate the cause before the entire shift is lost. Without that visibility, the same problem surfaces in the afternoon meeting — hours after the damage is done.",
      },
      {
        type: "paragraph",
        text: "Over time, the cumulative effect of faster, better-informed decisions compounds. Factories that operate with workstation-level visibility consistently achieve efficiency gains not by investing in new equipment, but by making better use of what they already have.",
      },
      { type: "heading", text: "The Manager's Role in an AI-Assisted Factory" },
      {
        type: "paragraph",
        text: "Operational intelligence does not replace the judgement of experienced plant managers — it augments it. The system surfaces what is happening; the manager decides what to do about it. The combination of continuous data and human expertise is consistently more effective than either alone.",
      },
      {
        type: "paragraph",
        text: "This is the practical promise of AI in manufacturing: not automation for its own sake, but tools that make the people running factories measurably more effective.",
      },
    ],
  },
];

// ── Helper: look up a post by slug ──────────────────────────────────────────
export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
