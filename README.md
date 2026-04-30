# Local AI Model Recommender

A private, static web app that recommends local AI models for [Ollama](https://ollama.com/) based on your computer's RAM, VRAM, operating system, use case, and priority.

Live demo:  
https://meattacker.github.io/local-ai-model-recommender/

---

## What It Does

Local AI Model Recommender helps people choose a practical first local model without sending their hardware details to a server. The app runs entirely in the browser, scores a built-in dataset of 64 Ollama model entries, and shows the top matches with copy-ready Ollama commands.

It asks for:

- RAM
- VRAM
- Use case
- Priority
- Operating system

It returns:

- Top model recommendations
- Expected performance labels: `Fast`, `Good`, `Slow`, or `Not recommended`
- `ollama pull` and `ollama run` commands
- One-click command copying
- Setup steps tailored to Windows, Linux, or macOS
- Hardware warnings and upgrade advice
- A shareable URL for the selected inputs
- A beginner setup checklist
- A top 3 comparison table

Recommendations are estimates, not benchmarks. Actual performance depends on your CPU, GPU, RAM, VRAM, quantization, context length, thermals, operating system, drivers, and Ollama version.

---

## Live Demo

https://meattacker.github.io/local-ai-model-recommender/

Example shareable recommendation:

```text
https://meattacker.github.io/local-ai-model-recommender/?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux
```

---

## Features

- Fully static HTML, CSS, and JavaScript
- No backend, database, login, tracking, payments, or API calls
- Works by opening `index.html` directly
- Deployable on GitHub Pages, Vercel, Netlify, or Cloudflare Pages
- Mobile-friendly design
- In-browser recommendation logic
- Copyable `ollama pull` and `ollama run` commands
- Shareable recommendation URLs
- Beginner setup checklist
- Top 3 model comparison table
- OS-specific setup steps for Windows, Linux, and macOS
- FAQ and privacy notes built into the page
- Privacy-friendly: no user data leaves the browser

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No framework, package manager, or build step is required.

---

## Project Structure

```text
.
├── README.md       # Project overview and usage
├── FEEDBACK.md     # Tester feedback and future improvement notes
├── app.js          # Model dataset, scoring, URL state, and rendering logic
├── index.html      # Static page markup
└── styles.css      # Responsive styling
```

---

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/meattacker/local-ai-model-recommender.git
cd local-ai-model-recommender
```

Open `index.html` directly in your browser.

Or run a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## How It Works

The site uses a static model dataset inside `app.js`. It currently includes 64 model entries across small chat models, general-purpose models, coding models, reasoning models, vision models, and high-end workstation models. Each model includes hardware requirements, use-case fit, speed, quality, memory, offline, coding, and agent scores.

The recommender:

1. Filters out models that do not meet the selected RAM minimum.
2. Requires vision-capable models when the `vision` use case is selected.
3. Scores remaining models for RAM fit, VRAM fit, use-case fit, and selected priority.
4. Applies extra weighting for coding, automation agents, CPU-only setups, and quality-focused selections.
5. Sorts models by ranking score and displays the best matches.

This keeps the app fast and transparent, but recommendation quality depends on keeping the model dataset current.

---

## Inputs

The user selects:

| Input | Options |
| --- | --- |
| RAM | 4GB, 8GB, 16GB, 32GB, 64GB, 96GB, 128GB, custom 1GB+ |
| VRAM | none, 2GB, 4GB, 6GB, 8GB, 12GB, 16GB, 20GB, 24GB, 32GB, 48GB, 64GB, 96GB, 128GB, custom 0GB+ |
| Use case | chat, coding, study, automation agents, home server, vision |
| Priority | speed, quality, lowest memory, privacy/offline |
| OS | Windows, Linux, macOS |

---

## Recommendation View

After the form is submitted, the page shows:

- Best matching model
- Two additional recommended models
- Pull and run commands
- Expected performance
- Warnings
- Upgrade advice
- Setup steps
- Shareable URL
- Beginner checklist
- Comparison table

---

## Shareable URLs

When recommendations are generated, the selected options are saved in the URL query string.

Example:

```text
?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux
```

Opening a valid share URL automatically fills the form and regenerates the same recommendation view.

No data is sent to a server. The selected values are only stored in the URL.

---

## Beginner Setup Checklist

After recommendations are generated, the page shows a beginner setup checklist using the top recommended model.

The checklist includes:

- Install Ollama
- Open Terminal or PowerShell
- Pull the recommended model
- Run the recommended model
- Try a beginner test prompt
- Optional Open WebUI note
- Save the model name for daily use

The full checklist can be copied as plain text.

---

## Top 3 Model Comparison

The site includes a comparison table for the top 3 recommended models.

It compares:

- Model name
- Size
- Best use case
- Expected performance
- Speed
- Quality
- Coding suitability
- Vision support
- Pull command

This helps users understand why one model may be a better fit than another.

---

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Go to repository `Settings`.
3. Open `Pages`.
4. Select `Deploy from a branch`.
5. Choose the `main` branch and `/root` folder.
6. Save.

The site will be available at:

```text
https://YOUR_USERNAME.github.io/local-ai-model-recommender/
```

### Vercel

1. Import the GitHub repository into Vercel.
2. Use framework preset: `Other`.
3. Leave the build command empty.
4. Deploy.

No environment variables are needed.

---

## Development Notes

- Update the model dataset and scoring logic in `app.js`.
- Keep RAM and VRAM options and custom-value validation in sync between `index.html`, URL parsing in `app.js`, and this README.
- Use `FEEDBACK.md` to track tester reports before changing the model dataset or UI priorities.
- Since there is no build pipeline, test changes directly in a browser at desktop and mobile widths.

---

## Privacy

This site runs entirely in the browser.

It does not collect, store, or send:

- Hardware specs
- Form selections
- User accounts
- API keys
- Analytics data

Shareable URLs only store the selected options in the address bar.

---

## Limitations

- Recommendations are heuristic estimates, not benchmark results.
- The model database is manually curated.
- Not every Ollama model is included.
- Real-world performance can vary significantly by hardware and quantization.
- Clipboard behavior can vary when the page is opened directly with `file://`.
- Invalid URL parameters are ignored.

---

## Manual Test Checklist

Before publishing changes, test:

- Page loads with no query parameters
- Default recommendation works
- Shareable URL updates after submitting the form
- Opening a shareable URL auto-fills the form
- Copy buttons work
- Beginner checklist appears
- Top 3 comparison table appears
- Weak hardware warnings appear
- OS-specific setup steps update correctly
- Mobile layout remains readable

Useful test URL:

```text
https://meattacker.github.io/local-ai-model-recommender/?ram=8GB&vram=none&useCase=study&priority=quality&os=Linux
```

---

## Roadmap

Potential future improvements:

- Add more Ollama models
- Add source links or last-reviewed metadata per model
- Add quantization guidance
- Add CPU-only vs GPU-preferred mode
- Add Apple Silicon-specific recommendations
- Add GPU brand-specific guidance
- Add user-submitted hardware feedback
- Add benchmark notes from real users
- Add SEO guides for common local AI setups

---

## Feedback

Use `FEEDBACK.md` to track tester reports. Useful feedback includes:

- Your RAM and VRAM
- Your operating system
- Your use case
- The model it recommended
- Whether the model actually worked well
- Any model you think should be added
- Any confusing wording or UI issue

---

## License

MIT License
