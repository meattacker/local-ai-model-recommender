# Local AI Model Recommender

A simple static website that helps users choose local AI models to run with [Ollama](https://ollama.com/) based on their laptop or PC specs.

Live demo:  
https://meattacker.github.io/local-ai-model-recommender/

---

## What It Does

Local AI Model Recommender asks for:

- RAM
- VRAM
- Use case
- Priority
- Operating system

Then it recommends the top local AI models to try with Ollama.

For each recommendation, it shows:

- Top 3 model suggestions
- Ollama pull and run commands
- Copy buttons
- Expected performance
- Warnings
- Upgrade advice
- OS-specific setup steps
- Shareable recommendation URL
- Beginner setup checklist
- Top 3 comparison table

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

- Fully static website
- No backend
- No database
- No API calls
- No login
- No payments
- Works by opening `index.html` directly
- Deployable on GitHub Pages, Vercel, Netlify, or Cloudflare Pages
- Mobile-friendly design
- In-browser recommendation logic
- Copyable Ollama commands
- Shareable recommendation URLs
- Beginner setup checklist
- Top 3 model comparison table
- OS-specific setup steps for Windows, Linux, and macOS
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
├── README.md
├── app.js
├── index.html
└── styles.css
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

The site uses a static model dataset inside `app.js`.

The recommendation engine scores models based on:

- RAM fit
- VRAM fit
- Selected use case
- Selected priority
- CPU-friendliness
- Vision support
- Coding suitability
- Agent suitability

The highest-scoring eligible models are shown as the top recommendations.

---

## Inputs

The user selects:

| Input | Options |
|---|---|
| RAM | 4GB, 8GB, 16GB, 32GB, 64GB+ |
| VRAM | none, 2GB, 4GB, 6GB, 8GB, 12GB, 16GB+ |
| Use case | chat, coding, study, automation agents, home server, vision |
| Priority | speed, quality, lowest memory, privacy/offline |
| OS | Windows, Linux, macOS |

---

## Outputs

The site shows:

- Best matching model
- Two additional recommended models
- Pull command
- Run command
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
- Add quantization guidance
- Add CPU-only vs GPU-preferred mode
- Add Apple Silicon-specific recommendations
- Add GPU brand-specific guidance
- Add user-submitted hardware feedback
- Add benchmark notes from real users
- Add SEO guides for common local AI setups

---

## Feedback

Useful feedback includes:

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
