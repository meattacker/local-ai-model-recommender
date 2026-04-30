# Feedback Tracker

Use this file to collect feedback from people who test Local AI Model Recommender.

Live site: https://meattacker.github.io/local-ai-model-recommender/

---

## Feedback Format

Copy this template for each new feedback entry.

```text
Source:
Date:
Hardware:
RAM:
VRAM:
OS:
Use case:
Priority:
Recommended model:
Did it work:
What was confusing:
Suggested fix:
Priority: Low / Medium / High
Status: New / Planned / Fixed / Won't fix
```

---

## High-Priority Reddit Feedback

### 1. r/Ollama feedback - coding recommendations feel outdated

```text
Source: r/Ollama
Date: 2026-04-30
Hardware:
RAM:
VRAM:
OS:
Use case: Coding
Priority:
Recommended model: qwen2.5-coder
Did it work: User closed the site before testing because the recommendation felt outdated.
What was confusing:
- Coding recommendations still recommend qwen2.5-coder.
- User expected newer Qwen coding models such as qwen3.6 / newer Qwen coder-style models.
- The model database appears outdated, which hurts trust immediately.
Suggested fix:
- Refresh the coding model database.
- Add newer Qwen coding/reasoning models.
- Add a "Last updated" note to the model database or site.
- Consider showing why an older model is recommended, or demote older coding models if newer equivalent models exist.
Priority: High
Status: New
```

### 2. r/Ollama feedback - mobile responsiveness issue

```text
Source: r/Ollama
Date: 2026-04-30
Hardware:
RAM:
VRAM:
OS:
Use case:
Priority:
Recommended model:
Did it work: User reported the site is not correctly mobile responsive.
What was confusing:
- Mobile layout appears broken or not polished enough.
- User noticed responsiveness problems quickly.
Suggested fix:
- Run a full mobile layout pass.
- Test common widths: 360px, 390px, 430px, 768px.
- Check form layout, result cards, comparison table, command blocks, and checklist.
- Make comparison table horizontally scrollable or convert to stacked cards on mobile.
Priority: High
Status: New
```

### 3. r/Ollama feedback - RAM/VRAM upper limits too low

```text
Source: r/Ollama
Date: 2026-04-30
Hardware: 2-year-old GPU + 64GB system RAM
RAM: 64GB
VRAM: 16GB
OS:
Use case:
Priority:
Recommended model:
Did it work:
What was confusing:
- User said 64GB+ RAM and 16GB+ VRAM limits are too restrictive / "stupid".
- User has 16GB VRAM and 64GB RAM, and pointed out that 24GB+ VRAM is common enough to include.
- Current dropdown caps make high-end users feel the tool is not serious.
Suggested fix:
- Expand RAM options beyond 64GB+.
- Expand VRAM options beyond 16GB+.
- Add higher tiers such as:
  RAM: 4GB, 8GB, 16GB, 32GB, 64GB, 96GB, 128GB+
  VRAM: none, 4GB, 6GB, 8GB, 12GB, 16GB, 20GB, 24GB, 32GB, 48GB+
- Consider using custom numeric input instead of only fixed dropdowns.
- Or keep simple dropdowns but add "24GB+ VRAM" and "128GB+ RAM".
Priority: High
Status: New
```

---

## What This Feedback Means

This is useful feedback, even though the tone is harsh.

The main signal is:

```text
Your tool currently feels beginner-focused, but experienced local AI users immediately judge it on:
1. model freshness
2. high-end hardware support
3. mobile polish
```

---

## Top 3 Fixes From This Feedback

### 1. Add "Last updated" and newer coding models

This is the most important trust fix.

Add near the model/results section:

```text
Model database last updated: April 2026
Recommendations are estimates and may not include every newly released model.
```

Then update coding recommendations to include newer models.

### 2. Expand RAM/VRAM options

Do not use a custom number input yet unless you want complexity.

Better quick fix:

```text
RAM:
4GB, 8GB, 16GB, 32GB, 64GB, 96GB, 128GB+

VRAM:
none, 2GB, 4GB, 6GB, 8GB, 12GB, 16GB, 20GB, 24GB, 32GB+
```

This instantly makes the tool feel less toy-like.

### 3. Mobile responsiveness pass

This is now non-negotiable because multiple users may leave immediately if the page feels broken on mobile.

Focus on:

```text
comparison table
command blocks
long buttons
result cards
form spacing
horizontal overflow
```

---

## Better Reddit Reply

You can reply with something like this:

```text
Thanks, this is useful feedback.

You're right that the coding model list needs a freshness pass. I started with a conservative beginner-focused dataset, but if qwen2.5-coder feels outdated now, I should either demote it or add newer Qwen coding models and show a "last updated" note.

Also fair point on the 64GB/16GB caps. I was optimizing for beginner laptops, but high-end local AI users need 24GB+ VRAM and higher RAM tiers. I'll add higher RAM/VRAM options and fix the mobile layout next.

Appreciate the direct feedback.
```

Do not argue with them. Treat it as signal.

---

## Next Implementation Priority

Do this order:

```text
1. Mobile responsiveness fix
2. Expand RAM/VRAM tiers
3. Add "model database last updated"
4. Refresh coding model list
```

This feedback should become the first real validation-driven update.

---

## Patterns to Watch

Track repeated issues here.

### Models that are recommended but do not run well

- qwen2.5-coder may feel outdated for coding recommendations.

### Hardware profiles where advice feels wrong

- High-end local AI users with 64GB+ RAM and 16GB+ VRAM.
- Users with 24GB+ VRAM who are not represented by current dropdown caps.

### Missing models users request

- Newer Qwen coding/reasoning models.

### Confusing UI or wording

- Missing model database freshness signal.
- No explanation for why an older model is recommended.

### Bugs

### Mobile issues

- Mobile layout needs a full pass at 360px, 390px, 430px, and 768px.
- Comparison table, command blocks, long buttons, result cards, form spacing, and horizontal overflow need review.

---

## Next Fixes

Use this section to decide what to improve next.

### High Priority

1. Fix mobile responsiveness.
2. Expand RAM and VRAM tiers.
3. Add model database "Last updated" note.
4. Refresh coding recommendations with newer Qwen coding/reasoning models.

### Medium Priority

### Low Priority
