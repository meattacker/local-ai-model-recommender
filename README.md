# Local AI Model Recommender

A static website that helps users choose local AI models to run with Ollama based on their laptop or PC specs.

Live demo:  
https://meattacker.github.io/local-ai-model-recommender/

---

## What it does

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
- Add optional offline documentation links for Ollama setup
