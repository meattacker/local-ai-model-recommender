# Local AI Model Recommender

A beginner-friendly static web app that helps you choose practical local AI
models for Ollama based on your computer's RAM, VRAM, operating system, use
case, and performance priority.

Live site: https://meattacker.github.io/local-ai-model-recommender/

Repository: https://github.com/meattacker/local-ai-model-recommender

The project is designed to be simple, private, and easy to inspect. It runs
entirely in the browser with static HTML, CSS, and vanilla JavaScript. There is
no backend, database, API, account system, login, or payment flow.

---

## Screenshots

Homepage screenshot:

```text
TODO: Add screenshot of the homepage and hardware input form.
```

Recommendation result screenshot:

```text
TODO: Add screenshot of the generated top 3 model recommendations.
```

SEO guide screenshot:

```text
TODO: Add screenshot of one SEO guide article page.
```

---

## What It Does

Local AI Model Recommender helps people choose a realistic first Ollama model
without needing to understand every model size, hardware limit, or performance
tradeoff upfront.

You enter:

- RAM
- VRAM
- Use case
- Priority
- Operating system

The app returns:

- Top 3 recommended models
- Expected performance notes
- Ollama `pull` and `run` commands
- Hardware warnings
- Upgrade advice
- OS-aware setup steps
- Beginner setup checklist
- Shareable recommendation URL
- Links to practical local AI guides

Recommendations are estimates, not benchmarks. Actual performance depends on
your CPU, GPU, RAM, VRAM, quantization, context length, thermals, operating
system, drivers, background apps, and Ollama version.

---

## Live Demo

Use the app here:

https://meattacker.github.io/local-ai-model-recommender/

Example shareable recommendation URL:

```text
https://meattacker.github.io/local-ai-model-recommender/?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux
```

---

## Features

- Hardware-based Ollama and local AI model recommendations
- RAM, VRAM, use case, priority, and OS inputs
- Custom RAM and VRAM values
- Top 3 model recommendations
- Expected performance labels and practical notes
- Copy-ready `ollama pull` and `ollama run` commands
- Warnings for weak or mismatched hardware
- Upgrade advice based on the selected setup
- Beginner setup checklist
- Top 3 model comparison table
- Shareable recommendation URLs
- SEO guide pages for common local AI hardware questions
- Feedback and correction links for model recommendation issues
- Fully static deployment on GitHub Pages

Privacy and simplicity:

- No backend
- No database
- No API calls for recommendations
- No login
- No payments
- No user hardware data sent to a server

The site uses Cloudflare Web Analytics and is connected to Google Search
Console for basic site measurement and search visibility.

---

## How It Works

The recommendation logic lives in `app.js`.

At a high level, the app:

1. Reads the selected RAM, VRAM, use case, priority, and operating system.
2. Scores a built-in local model dataset against those inputs.
3. Filters or penalizes models that are a poor fit for the selected hardware.
4. Weighs model fit differently depending on the user's priority, such as
   speed, quality, lowest memory use, or privacy/offline use.
5. Shows the top matches with commands, warnings, setup steps, and upgrade
   advice.
6. Stores the selected options in the URL so results can be shared.

The app does not call a remote recommendation API. The scoring and rendering
happen in the browser.

---

## Tech Stack

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages
- Cloudflare Web Analytics
- Google Search Console

No framework, package manager, build step, server, or new dependency is needed.

---

## Project Structure

```text
.
├── README.md
├── app.js
├── index.html
├── styles.css
├── sitemap.xml
├── robots.txt
├── FEEDBACK.md
└── *.html / *.md SEO guide pages
```

Core files:

- `index.html` contains the static app page.
- `styles.css` contains the responsive layout and article styles.
- `app.js` contains the model dataset, scoring logic, URL state, and UI
  rendering.
- `sitemap.xml` lists the live pages for search engines.
- `FEEDBACK.md` tracks tester notes and future improvement ideas.

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/meattacker/local-ai-model-recommender.git
cd local-ai-model-recommender
```

Open `index.html` directly in a browser.

You can also run a small local static server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Current SEO Guides and Resources

The site includes practical guides for common local AI and Ollama hardware
questions:

- [Can my laptop run local AI?](https://meattacker.github.io/local-ai-model-recommender/can-my-laptop-run-local-ai.html)
- [Can Ollama run on 8GB RAM?](https://meattacker.github.io/local-ai-model-recommender/can-ollama-run-on-8gb-ram.html)
- [How much RAM do you need for Ollama?](https://meattacker.github.io/local-ai-model-recommender/how-much-ram-do-you-need-for-ollama.html)
- [Best Ollama models for 16GB RAM](https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-16gb-ram.html)
- [Best Ollama models for 8GB RAM and 4GB VRAM](https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-8gb-ram-4gb-vram.html)
- [Best local AI models for 4GB VRAM](https://meattacker.github.io/local-ai-model-recommender/best-local-ai-models-4gb-vram.html)
- [Best Ollama models for coding on low-end PCs](https://meattacker.github.io/local-ai-model-recommender/best-ollama-models-for-coding-on-low-end-pcs.html)

Each guide is static HTML and links back to the main recommender.

---

## Roadmap

Planned or possible improvements:

- Add screenshots to this README.
- Keep the model dataset updated as Ollama model availability changes.
- Improve recommendation wording for more hardware edge cases.
- Add more beginner guides for common RAM, VRAM, CPU-only, and laptop setups.
- Add more model comparison guidance for coding, study, home server, and vision
  use cases.
- Improve accessibility and mobile layout details as feedback comes in.
- Add lightweight validation checks for SEO pages and internal links.

The project should remain static and easy to host.

---

## Feedback and Contributions

Corrections are welcome, especially for model fit, hardware advice, unclear
wording, broken links, and missing beginner guidance.

Open an issue here:

https://github.com/meattacker/local-ai-model-recommender/issues

Helpful reports include:

- Your RAM and VRAM
- CPU and GPU, if known
- Operating system
- Ollama model tested
- What worked or failed
- Whether the recommendation felt too optimistic or too cautious

If you make a pull request, keep changes focused and avoid adding a backend,
database, framework, build step, or dependency unless there is a clear reason.

---

## Disclaimer

Local AI performance varies a lot across machines. The recommendations in this
project are practical estimates, not guaranteed benchmark results.

A model that appears as recommended may still feel slow on some systems. A model
that downloads successfully may still be too heavy for smooth use. Always test
models on your own hardware before relying on them for serious work.

This project is meant to help beginners choose safer starting points, not to
promise exact performance.
