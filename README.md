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

## Shareable URLs

The recommender can store the selected RAM, VRAM, use case, priority, and operating system directly in the page URL.

Example:

`https://meattacker.github.io/local-ai-model-recommender/?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux`

When someone opens a valid share URL, the form auto-fills and the same recommendation view is generated automatically. No data is sent to a server; the selected values are only stored in the URL query string.

## Beginner setup checklist

After recommendations are generated, the page shows a beginner setup checklist below the recommendation cards. It uses the top recommended model, includes the pull and run commands, and can be copied as plain text with the `Copy checklist` button.

## Top 3 model comparison

After recommendations are generated, the page also shows a top 3 comparison table. The site now includes shareable URLs, a Beginner setup checklist, and a Top 3 model comparison for the recommended models.

## How to test locally

1. Open `index.html` with no query parameters and confirm the default form state and recommendation view still work.
2. Tab from the top of the page and confirm the `Skip to main content` link becomes visible and works.
3. Tab through every form field and confirm each field has a visible label and a clear focus state.
4. Select `8GB` RAM, `none` VRAM, `study`, `quality`, and `Linux`, then click `Recommend Models`.
5. Confirm focus moves to the recommendations area after submission.
6. Confirm the URL updates to include `ram`, `vram`, `useCase`, `priority`, and `os` query parameters without reloading the page.
7. Confirm the `Share this recommendation` area appears with a read-only URL field and `Copy link` button.
8. Click `Copy link` and confirm the button changes to `Copied!`, or the manual fallback message appears if clipboard access is blocked.
9. Paste the copied URL into a new tab and confirm the form auto-fills and the recommendations appear automatically.
10. Try an invalid URL such as `?ram=999GB&vram=dragon` and confirm invalid values are ignored without crashing the page.
11. Try a partial URL such as `?ram=16GB&useCase=coding` and confirm valid fields are applied while missing fields keep defaults.
12. Confirm the live GitHub Pages path remains correct:
    `https://meattacker.github.io/local-ai-model-recommender/?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux`
13. Confirm the comparison table appears after the recommendation cards and before the Beginner setup checklist.
14. Confirm the comparison table shows exactly the top 3 recommended models and each pull command copy button works.
15. Confirm the `Beginner setup checklist` appears and uses the top recommended model.
16. Confirm the checklist pull command, run command, and saved model name match the top result.
17. Confirm the checklist pull and run commands render inside visible dark command boxes with readable labels and copy buttons.
18. Click `Copy checklist` and confirm the button changes to `Copied!`, or the manual fallback message appears if clipboard access is blocked.
19. Click each model command copy button and confirm the label changes to `Copied!`, or shows the manual copy fallback text if clipboard access is blocked.
20. Choose a constrained setup such as `4GB RAM`, `no VRAM`, and `vision`, then confirm the warning or empty-state guidance updates correctly.
21. Change the operating system and confirm the setup steps and checklist wording switch between Windows, Linux, and macOS correctly.
22. Check a small mobile viewport and confirm cards, comparison table, checklist content, and commands remain readable.
23. Reopen `index.html` directly with a `file://` URL and confirm the page still works without a server.

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

Everything runs in-browser. No user hardware data is sent anywhere. Shareable URLs only store the chosen form values in the address bar.

## Limitations

- The dataset is curated manually and does not cover every Ollama model.
- Recommendations are heuristic estimates and should not be treated as benchmark results.
- Clipboard behavior can vary by browser when the page is opened directly from `file://`.
- Invalid query parameters are ignored rather than preserved.

## Roadmap

- Add more models and quantization notes
- Add deeper scoring explanations per recommendation
- Add a side-by-side comparison mode
- Add manual toggles for CPU-only and GPU-preferred recommendations
- Add optional offline documentation links for Ollama setup
