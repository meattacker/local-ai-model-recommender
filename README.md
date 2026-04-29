## Live Demo

https://meattacker.github.io/local-ai-model-recommender/

# Local AI Model Recommender

Static website that estimates which local AI models are practical to run with Ollama based on laptop or PC hardware.

## Description

This project is a browser-only recommender for local AI users. A user selects RAM, VRAM, use case, priority, and operating system, then gets the top matching Ollama models with copyable pull and run commands, setup steps, warnings, fallback guidance, and upgrade advice.

Recommendations are estimates, not benchmarks. Real-world results vary with quantization, context length, CPU, GPU, thermals, background load, operating system, drivers, and Ollama version.

## Features

- Static site with no backend, database, login, or API calls
- Works by opening `index.html` directly
- Mobile-friendly responsive UI with scanable recommendation cards
- In-browser recommendation logic using a local model dataset
- Accessible form labels, visible keyboard focus states, and skip-to-content navigation
- SEO metadata including title, meta description, and Open Graph tags
- Best match badge for the top result
- "Why this model?" explanation on every recommendation card
- Copy buttons for Ollama pull and run commands with fallback behavior
- Clear warnings for low RAM, no dedicated VRAM, vision workloads, and weak coding hardware
- OS-specific setup steps for Windows, Linux, and macOS
- Upgrade advice based on RAM and VRAM
- FAQ, warning section, privacy note, and footer trust signals

## Tech stack

- HTML
- CSS
- Vanilla JavaScript

## Project structure

```text
.
├── README.md
├── app.js
├── index.html
└── styles.css
```

## How to run locally

1. Download or clone the project.
2. Open `index.html` in your browser.

No build step, package manager, or server is required.

## How to test locally

1. Open `index.html`.
2. Tab from the top of the page and confirm the `Skip to main content` link becomes visible and works.
3. Tab through every form field and confirm each field has a visible label and a clear focus state.
4. Change the hardware inputs and click `Recommend Models`.
5. Confirm focus moves to the recommendations area after submission.
6. Confirm the top result shows a `Best match` badge.
7. Confirm each result card shows a model name, size badge, expected performance, `Why this model?`, pull and run copy buttons, and warnings.
8. Click each copy button and confirm the label changes to `Copied!`, or shows the manual copy fallback text if clipboard access is blocked.
9. Choose a constrained setup such as `4GB RAM`, `no VRAM`, and `vision`, then confirm the warning or empty-state guidance updates correctly.
10. Change the operating system and confirm the setup steps switch between Windows, Linux, and macOS wording.
11. Check a small mobile viewport and confirm cards stack cleanly and commands remain readable.
12. Reopen `index.html` directly with a `file://` URL and confirm the page still works without a server.

## How to deploy on GitHub Pages

1. Push these files to a GitHub repository.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to the main branch root.
5. Save and wait for GitHub Pages to publish the site.

## How to deploy on Vercel

1. Create a new Vercel project from the repository.
2. Keep the framework preset as `Other`.
3. Use the default static deployment settings.
4. Deploy.

This site is static, so no environment variables are needed.

## Privacy note

Everything runs in-browser. No user hardware data is sent anywhere.

## Limitations

- The dataset is curated manually and does not cover every Ollama model.
- Recommendations are heuristic estimates and should not be treated as benchmark results.
- Clipboard behavior can vary by browser when the page is opened directly from `file://`.

## Roadmap

- Add more models and quantization notes
- Add deeper scoring explanations per recommendation
- Add a side-by-side comparison mode
- Add manual toggles for CPU-only and GPU-preferred recommendations
- Add optional offline documentation links for Ollama setup
