# Copy reference — Sales Agent v2

Це single source of truth для всіх текстів у прототипі. Якщо треба змінити формулювання — правиш тут, потім синхронізуєш в `index.html` / `app.js`.

---

## Screen 0 — Home Hub

**Hero eyebrow:** `Growth Execution Agent · Active`
**Hero H1:** `From goal to execution — automatically.`
**Hero body:** You define what you want to achieve. The agent understands your context, builds a plan, calls the right tools, and delivers results — no manual setup required.

**Main CTA card:**
- Title: `What do you want to achieve?`
- Badge: `Most popular`
- Body: Describe your goal in plain language — the agent recommends the right approach, asks a few questions to fill in the details, and runs automatically.
- Link: `Start now →`

**Recent Projects:**
- `SaaS VP Sales Outreach — Q2 2026` · 52 prospects · 5-step sequence · Launched 2d ago · **Active**
- `LinkedIn Outreach — Series B FinTech` · 30 prospects · 3-touch sequence · Draft · **Draft**
- `Email Warm-up + Domain Audit` · 4 mailboxes · Completed last week · **Done**

---

## Screen 1 — Import Memory

**H2:** `Import Memory`
**Subtitle:** Help the agent understand your business before it starts working

**Principle card:**
- Title: `The new-colleague principle`
- Subtitle: Good agents start by listening, not clicking
- Body: When you onboard a new colleague, you don't hand them a manual and walk away. You first explain the business, the goals, and the context — so they can start contributing immediately. This agent works the same way.

**Step 1 title:** `Step 1 — Run this prompt in ChatGPT or Claude`
**Prompt text:**
```
You are a memory extraction assistant.
Summarize the following about me in structured format:
1. Company & product (what we sell, who we sell to)
2. ICP (ideal customer profile — industry, size, titles, geos)
3. USP (why customers choose us vs. alternatives)
4. Current outbound strategy & tools in use
5. Recent campaigns or projects underway
6. Preferred communication tone & style

Be concise. Use bullet points. Label each section clearly.
```

**Step 2 title:** `Step 2 — Paste the output here`
**Textarea placeholder:** Paste the AI-generated memory summary here… (з прикладом)

**Parsed preview:**
- Header: `Context Layers — Empty` (→ `Parsing context…` при введенні)
- L0: `Global Context`
- L1: `ICP + Targeting`
- L2: `USP + Messaging`
- L3: `Tools & Infrastructure`
- Placeholder у кожному шарі: `Waiting for input…` / `Not detected yet…`

**Why-this-matters callout:** Context determines whether the agent's work is actually correct — not just well-worded. Without it, every session starts from zero. With it, the agent can recommend the right next step, the right template, and the right message immediately.

---

## Screen 2 — Intent Entry

**H2:** `What do you want to achieve?`
**Body:** Describe your goal in plain language. The agent will recommend the right project template and ask a few questions to refine the plan.

**Textarea placeholder:** e.g. I want to find 50 VP Sales contacts at SaaS companies in the US, enrich their data, and launch a personalized cold email campaign to book discovery calls…

**Template chips:**
- 🎯 Outbound Prospecting
- 💼 LinkedIn Outreach
- 🔥 Email Warm-up
- 📊 Campaign Analysis
- ✏️ Content & Messaging

**Prefills (в `app.js → selectTemplate`):**
- `outbound` → I want to find 50 VP Sales contacts at SaaS companies in the US, enrich their data, and launch a personalized cold email campaign to book discovery calls.
- `linkedin` → I want to connect with 30 Head of Growth contacts on LinkedIn at Series B–C SaaS companies and start a warm outreach sequence.
- `warmup` → I need to warm up 3 new mailboxes before launching a cold email campaign next month.
- `analysis` → Analyze the performance of my last 3 campaigns and tell me which subject lines and personas performed best.
- `content` → Write a 5-email outbound sequence targeting CMOs at e-commerce companies, focusing on our AI personalization feature.

---

## Screen 3 — Agent Q&A

**Title:** `Refining your goal`
**Subtitle:** The agent is asking a few questions to build your execution plan

**Seed message:**
> **Got it.** You want to run an outbound campaign targeting **VP Sales / Head of Growth** at SaaS companies. Let me ask a few quick questions to build the right plan.
>
> **1 of 4 — Who's your ideal target?**

**Q1 options:**
- 🏢 SaaS / Software companies, 50–500 employees
- 🏦 FinTech / Financial services
- 🛒 E-commerce / D2C brands
- ✏️ Let me describe my ICP…

**Q2 — What geography should we target?**
- 🇺🇸 United States only
- 🌎 US + Canada + UK
- 🌍 All English-speaking markets
- ✏️ Custom geographies…

**Q3 — How many prospects do you need?**
- 25 / 50 / 100 / 200+ prospects

**Q4 — What tone should the emails use?**
- Friendly & conversational
- Professional & direct
- Educational & consultative
- Bold & challenger

**Done-message:** ✓ **All set.** I have everything I need. Your execution plan is ready — 5 tasks, all tools pre-configured. Ready to run?
- 📋 Review plan first
- ▶️ Run agent now

---

## Screen 4 — Execution Plan

**H2:** `Execution Plan`
**Subtitle:** Generated from your context and goal. Edit any step, then run the agent.

**Tasks:**
1. **Find matching prospects** — Search the 4.2B contact database for VP Sales, Head of Growth, CMO at SaaS companies with 50–500 employees in the US, Canada, and UK. · `Prospect Finder` · ~30s
2. **Verify and enrich contact data** — Verify email addresses, append phone numbers, LinkedIn URLs, company revenue, and tech stack for each prospect. · `Email Verifier + Enrichment API` · ~45s
3. **Generate AI-personalized email sequence** — Write a 5-step sequence using your USP and the prospect's company/title data. Friendly & conversational tone. Variables: first_name, company, industry. · `AI Content Engine` · ~20s
4. **Configure campaign & sending infrastructure** — Set up sender routing, daily limits (50/day), tracking domains, and deliverability checks. Verify SPF/DKIM. Assign to denis@snov.io. · `Campaign Engine + Warm-up` · ~10s
5. **Launch campaign & set up tracking** — Launch the sequence, configure open/reply/bounce tracking, and set auto-pause rules if reply rate drops below 5%. · `Campaign Engine` · ~5s

**Architecture panel (L0–L3) — див. index.html.**

---

## Screen 5 — Processing

**H2:** `Agent is executing…`
**Subtitle:** The agent is calling tools, processing data, and building your campaign automatically.

**Steps:**
1. Context loaded — L0–L2 ready · 4 parameters confirmed
2. Finding prospects — Scanning 4.2B contacts… → 52 prospects found · 48 verified
3. Enriching data — Email, phone, LinkedIn, tech stack
4. Generating email sequence — AI personalization per prospect
5. Configuring & launching — Infrastructure + deliverability check

---

## Screen 6 — Results

**H2:** `🎯 Execution Complete`
**Subtitle:** SaaS VP Sales Outreach · based on your ICP, USP, and context memory

**KPIs:**
- 52 · Prospects found · ↑ High match rate
- 48 · Emails verified · 92% verify rate
- 5 · Sequence steps · AI-personalized
- ~26 · Est. replies · ~24% open rate

**Tabs:** Prospects (52) / Enriched Data (48) / Campaign (5 steps) / Agent Memory (Updated)

### Email sequence copy
1. **Day 1** — `{{first_name}}, faster pipeline for {{company}}?`
   Hi {{first_name}}, I noticed {{company}} is scaling its sales team. Teams like yours spend 3+ hours/day on manual prospecting — Snov.io cuts that to 20 minutes. Worth a 15-min call?
2. **Day 4 follow-up** — `Re: {{company}} pipeline question`
3. **Day 9 value drop** — `The stack {{company}}'s competitors use`
4. **Day 14 social proof** — `How Gong's SDR team doubled reply rate`
5. **Day 21 break-up** — `Last note from me, {{first_name}}`

---

## Toasts (system messages)

- `Memory imported! Agent context updated.` (success)
- `Please describe your goal first`
- `Prompt copied!`
- `Exported to CSV`
- `Added to campaign!` (success)
- `Campaign launched!` (success)
- `🚀 Campaign launched!` (success)
- `Opening editor…`
- `Task editor — coming soon`
- `My Agents — coming soon`
- `Starting LinkedIn follow-up…`
- `Opening campaign tracker…`
- `Expanding ICP…`
- `Pausing agent…`
