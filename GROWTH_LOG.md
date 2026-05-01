# Growth Log

Use this file to track growth, distribution, SEO progress, and recurring user feedback for Local AI Model Recommender.

Live site: https://meattacker.github.io/local-ai-model-recommender/

---

## Baseline Snapshot

Date: 2026-05-01
Source: Cloudflare Web Analytics

### Summary

- Baseline: 21 visits / 21 page views
- Main source: direct + Reddit
- Main device: mobile
- Learning: mobile experience matters more than desktop right now
- Next action: check mobile layout and keep collecting signals

### Traffic

Visits: 21
Page views: 21
Top path: `/local-ai-model-recommender/`

### Sources

Direct: 13
Reddit app/frontpage: 6
reddit.com: 2
Other: 0

### Countries

United States: 9
Argentina: 4
Germany: 3
United Kingdom: 2
Canada: 2
Netherlands: 1

### Devices

Mobile: 18
Desktop: 3

### Browsers

Mobile Safari: 10
Chrome Mobile: 8
Chrome: 3

### Performance

Page load time shown: 296ms

### Notes

- Most early traffic is mobile, so mobile layout matters.
- Reddit is already sending some traffic.
- Direct traffic may include manual testing, shared links, or untracked referrers.
- This is an early baseline, not enough data for big decisions yet.

---

## Weekly Growth Template

### Week of:

### Cloudflare Analytics

Visits:
Page views:
Top page:
Top referrer:
Top country:
Mobile visits:
Desktop visits:
Notable spike/drop:

### Google Search Console

Indexed pages:
Total impressions:
Total clicks:
Average CTR:
Average position:
Top query:
Top page:
Pages requested for indexing:

### Distribution

Places posted:
1.
2.
3.

Best performing post/source:

### GitHub

Stars:
Forks:
Issues opened:
Useful comments:

### Feedback

Useful feedback received:
1.
2.
3.

Repeated problems:
1.
2.
3.

### Fixes Made

1.
2.
3.

### SEO Pages Published

1.
2.

### Experiments

Experiment:
Hypothesis:
Result:
Decision:

### Next Actions

1.
2.
3.

---

## SEO and Search Console Tracking

Use this section once per week after Google Search Console has enough data.

### Weekly SEO Notes

Week of:

- Indexed pages:
- Pages not indexed:
- Pages submitted or resubmitted:
- Queries gaining impressions:
- Queries with impressions but low CTR:
- Pages with clicks:
- Pages needing title/meta changes:
- Pages needing intro or CTA improvements:

### Search Console Checklist

- Check indexing status for new pages.
- Request indexing for important new pages.
- Record impressions and clicks by page.
- Record top queries and average positions.
- Look for pages with impressions but no clicks.
- Do not overreact to tiny samples.

---

## Page-Level SEO Tracker

| Page | URL | Status | Submitted to Search Console | Indexed? | Impressions | Clicks | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage / main recommender | https://meattacker.github.io/local-ai-model-recommender/ | Live | Unknown | Unknown | TBD | TBD | Current top path in Cloudflare baseline. |
| Best Ollama models for 8GB RAM and 4GB VRAM | https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-8gb-ram-4gb-vram.html | Live | Unknown | Unknown | TBD | TBD | Hardware-specific beginner guide. |
| Can Ollama run on 8GB RAM? | https://meattacker.github.io/local-ai-model-recommender/can-ollama-run-on-8gb-ram.html | Live | Unknown | Unknown | TBD | TBD | Good beginner query target. |
| How much RAM do you need for Ollama? | https://meattacker.github.io/local-ai-model-recommender/how-much-ram-do-you-need-for-ollama.html | Live | Unknown | Unknown | TBD | TBD | Broader memory planning article. |
| Best Ollama models for coding on low-end PCs | https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-for-coding-on-low-end-pcs.html | Live | Unknown | Unknown | TBD | TBD | Coding-focused article; watch model freshness feedback. |
| Can my laptop run local AI? | https://meattacker.github.io/local-ai-model-recommender/can-my-laptop-run-local-ai.html | Live | Unknown | Unknown | TBD | TBD | Broad entry page for beginners. |
| Best local AI models for 4GB VRAM | https://meattacker.github.io/local-ai-model-recommender/best-local-ai-models-4gb-vram.html | Live | Unknown | Unknown | TBD | TBD | GPU/VRAM-focused guide. |
| Best Ollama models for 16GB RAM | https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-16gb-ram.html | Live | Unknown | Unknown | TBD | TBD | New 16GB RAM guide; monitor impressions after indexing. |

---

## Distribution Tracker

| Date | Platform | Community | Link shared | Result | Feedback received | Follow-up needed |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-04-30 | Reddit | r/Ollama | Main recommender | Sent early traffic and feedback | Coding models felt outdated; mobile responsiveness issue; RAM/VRAM caps too low | Prioritize model freshness, mobile polish, and high-end hardware support. |
| TBD | Reddit | r/LocalLLM | Main recommender or relevant guide | Planned / unknown | TBD | Track traffic, comments, and repeated objections. |
| TBD | Discord | LocalLLaMA self-promotion | Main recommender or relevant guide | Planned / unknown | TBD | Track whether Discord sends useful hardware/model feedback. |
| 2026-05-01 | Cloudflare | Reddit app/frontpage | Unknown Reddit surface | 6 visits | No direct comment attached in analytics | Match with Reddit posts when possible. |
| 2026-05-01 | Cloudflare | reddit.com | Unknown Reddit page | 2 visits | No direct comment attached in analytics | Match with Reddit posts when possible. |

---

## Feedback Patterns From FEEDBACK.md

Current high-priority signals:

1. Coding recommendations can feel outdated if newer Qwen coding/reasoning models are missing.
2. Mobile responsiveness matters because most early traffic is mobile.
3. High-end users expect RAM and VRAM options beyond beginner laptop tiers.
4. Users may judge trust quickly based on model freshness, hardware coverage, and mobile polish.

Patterns to track weekly:

- Models that are recommended but users say are outdated.
- Hardware profiles where advice feels wrong.
- Missing models users request more than once.
- Mobile layout problems on common widths: 360px, 390px, 430px, 768px.
- Confusing wording around why a model was recommended.
- Requests for a model database freshness note or last-updated date.

Rule of thumb:

- If the same model or hardware issue appears 3 times, update recommendation logic or model data.
- If the same UX issue appears 3 times, fix the interface before publishing more content.

---

## Next Actions and Experiments

### Current Next Actions

1. Watch whether Reddit traffic produces repeat feedback or only one-off comments.
2. Check Search Console indexing for the homepage and published SEO guides.
3. Track whether mobile-heavy traffic continues over the next 2-4 weeks.
4. Keep SEO publishing steady at 1-2 pages per week instead of publishing everything at once.
5. Use FEEDBACK.md to decide whether recommendation logic needs accuracy updates.

### Experiment Backlog

| Experiment | Hypothesis | Success Signal | Decision |
| --- | --- | --- | --- |
| Share one specific SEO guide in a relevant community | A focused guide gets better engagement than the homepage alone | More comments, saves, clicks, or Search Console impressions | Keep sharing guide-specific pages if response is better. |
| Improve title/meta on pages with impressions but low CTR | Better snippets increase clicks without new content | CTR improves over 2-4 weeks | Keep revised title/meta if CTR improves. |
| Add or update model freshness messaging | Trust improves when users know the model data has a review date | Fewer comments about outdated recommendations | Keep freshness note if it reduces trust objections. |
| Mobile layout review after traffic baseline | Mobile users are the main early audience | Fewer mobile complaints and better engagement | Prioritize mobile fixes if mobile remains dominant. |

---

## Decision Rules

- Do not judge SEO performance from less than 2-4 weeks of Search Console data.
- Do not publish all remaining SEO pages at once.
- Publish 1-2 SEO pages per week.
- If a page gets impressions but low clicks, improve the title/meta description.
- If a page gets clicks but users do not engage, improve the page intro and CTA.
- If mobile traffic stays high, prioritize mobile readability and button visibility.
- If Reddit traffic sends feedback, prioritize accuracy fixes over new features.
- If the same model/hardware issue appears 3 times, update the recommendation logic.
- Do not add ads or payments until there is meaningful recurring traffic.
