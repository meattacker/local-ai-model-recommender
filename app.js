const models = [
  {
    id: "tinyllama",
    name: "TinyLlama",
    size: "1.1B",
    minRam: 4,
    recommendedRam: 8,
    recommendedVram: 0,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "home server"],
    bestFor: "Very low-end machines and quick testing",
    expectedPerformance: "Fast but low quality. Good for basic chat and testing Ollama.",
    speedScore: 10,
    qualityScore: 2,
    memoryScore: 10,
    offlineScore: 9,
    codingScore: 2,
    agentScore: 2,
    pullCommand: "ollama pull tinyllama",
    runCommand: "ollama run tinyllama",
    warnings: [
      "Not recommended for serious coding.",
      "May hallucinate more than newer small models.",
      "Use only when RAM is extremely limited."
    ]
  },
  {
    id: "llama3.2-1b",
    name: "Llama 3.2 1B",
    size: "1B",
    minRam: 4,
    recommendedRam: 8,
    recommendedVram: 0,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "home server"],
    bestFor: "Basic offline chat on weak laptops",
    expectedPerformance: "Very light and responsive, but not ideal for complex reasoning.",
    speedScore: 10,
    qualityScore: 4,
    memoryScore: 10,
    offlineScore: 10,
    codingScore: 2,
    agentScore: 3,
    pullCommand: "ollama pull llama3.2:1b",
    runCommand: "ollama run llama3.2:1b",
    warnings: ["Too small for reliable coding.", "Best for simple Q&A and summarization."]
  },
  {
    id: "llama3.2-3b",
    name: "Llama 3.2 3B",
    size: "3B",
    minRam: 8,
    recommendedRam: 16,
    recommendedVram: 2,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "home server", "automation agents"],
    bestFor: "General chat on 8 GB to 16 GB laptops",
    expectedPerformance: "Good lightweight chat model. Usable on CPU, better with GPU.",
    speedScore: 8,
    qualityScore: 6,
    memoryScore: 8,
    offlineScore: 10,
    codingScore: 4,
    agentScore: 5,
    pullCommand: "ollama pull llama3.2:3b",
    runCommand: "ollama run llama3.2:3b",
    warnings: ["Not the best coding model.", "Agent workflows may be limited."]
  },
  {
    id: "qwen2.5-1.5b",
    name: "Qwen2.5 1.5B",
    size: "1.5B",
    minRam: 4,
    recommendedRam: 8,
    recommendedVram: 0,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "home server"],
    bestFor: "Small multilingual study/chat model",
    expectedPerformance: "Lightweight and decent for simple study help.",
    speedScore: 9,
    qualityScore: 5,
    memoryScore: 9,
    offlineScore: 10,
    codingScore: 3,
    agentScore: 3,
    pullCommand: "ollama pull qwen2.5:1.5b",
    runCommand: "ollama run qwen2.5:1.5b",
    warnings: ["Use a larger Qwen model if you have 8 GB+ RAM.", "Limited coding ability."]
  },
  {
    id: "qwen3-4b",
    name: "Qwen3 4B",
    size: "4B",
    minRam: 8,
    recommendedRam: 16,
    recommendedVram: 4,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "coding", "automation agents", "home server"],
    bestFor: "Best balanced small model for 8 GB to 16 GB systems",
    expectedPerformance: "Strong for its size. Good daily-driver choice on modest hardware.",
    speedScore: 7,
    qualityScore: 8,
    memoryScore: 7,
    offlineScore: 10,
    codingScore: 7,
    agentScore: 7,
    pullCommand: "ollama pull qwen3:4b",
    runCommand: "ollama run qwen3:4b",
    warnings: [
      "May be slow on CPU-only 8 GB machines.",
      "For heavy coding, use Qwen Coder if hardware allows."
    ]
  },
  {
    id: "phi4-mini",
    name: "Phi-4 Mini",
    size: "3.8B",
    minRam: 8,
    recommendedRam: 16,
    recommendedVram: 4,
    cpuFriendly: true,
    vision: false,
    useCases: ["chat", "study", "automation agents", "coding"],
    bestFor: "Reasoning, study, and lightweight agent workflows",
    expectedPerformance: "Good small reasoning model. Strong option for 8 GB to 16 GB machines.",
    speedScore: 7,
    qualityScore: 8,
    memoryScore: 7,
    offlineScore: 10,
    codingScore: 6,
    agentScore: 8,
    pullCommand: "ollama pull phi4-mini",
    runCommand: "ollama run phi4-mini",
    warnings: ["Requires a recent Ollama version.", "Not a vision model."]
  },
  {
    id: "gemma3-4b",
    name: "Gemma 3 4B",
    size: "4B",
    minRam: 8,
    recommendedRam: 16,
    recommendedVram: 4,
    cpuFriendly: true,
    vision: true,
    useCases: ["chat", "study", "vision", "home server"],
    bestFor: "Small multimodal use and long-context study",
    expectedPerformance: "Good for study, summarization, and basic image understanding.",
    speedScore: 7,
    qualityScore: 7,
    memoryScore: 7,
    offlineScore: 10,
    codingScore: 4,
    agentScore: 5,
    pullCommand: "ollama pull gemma3:4b",
    runCommand: "ollama run gemma3:4b",
    warnings: [
      "Vision use may require more memory than text-only use.",
      "Not the best coding-focused model."
    ]
  },
  {
    id: "qwen2.5-coder-7b",
    name: "Qwen2.5 Coder 7B",
    size: "7B",
    minRam: 16,
    recommendedRam: 32,
    recommendedVram: 6,
    cpuFriendly: false,
    vision: false,
    useCases: ["coding", "automation agents"],
    bestFor: "Local coding assistant",
    expectedPerformance: "Good coding performance. Best with 16 GB+ RAM and GPU acceleration.",
    speedScore: 5,
    qualityScore: 8,
    memoryScore: 5,
    offlineScore: 10,
    codingScore: 9,
    agentScore: 7,
    pullCommand: "ollama pull qwen2.5-coder:7b",
    runCommand: "ollama run qwen2.5-coder:7b",
    warnings: ["May be slow on CPU-only machines.", "Not designed for vision."]
  },
  {
    id: "mistral-7b",
    name: "Mistral 7B",
    size: "7B",
    minRam: 16,
    recommendedRam: 32,
    recommendedVram: 6,
    cpuFriendly: false,
    vision: false,
    useCases: ["chat", "study", "coding", "home server"],
    bestFor: "Reliable general-purpose 7B model",
    expectedPerformance: "Good general model if your machine can handle 7B models.",
    speedScore: 5,
    qualityScore: 7,
    memoryScore: 5,
    offlineScore: 10,
    codingScore: 6,
    agentScore: 6,
    pullCommand: "ollama pull mistral:7b",
    runCommand: "ollama run mistral:7b",
    warnings: ["Use a smaller model on 8 GB RAM.", "Not a vision model."]
  },
  {
    id: "qwen3-8b",
    name: "Qwen3 8B",
    size: "8B",
    minRam: 16,
    recommendedRam: 32,
    recommendedVram: 8,
    cpuFriendly: false,
    vision: false,
    useCases: ["chat", "study", "coding", "automation agents", "home server"],
    bestFor: "Higher-quality local daily driver",
    expectedPerformance: "Better quality than 3B/4B models, but needs stronger hardware.",
    speedScore: 5,
    qualityScore: 9,
    memoryScore: 4,
    offlineScore: 10,
    codingScore: 8,
    agentScore: 8,
    pullCommand: "ollama pull qwen3:8b",
    runCommand: "ollama run qwen3:8b",
    warnings: ["Not recommended for 8 GB RAM systems.", "GPU acceleration strongly recommended."]
  },
  {
    id: "deepseek-r1-7b",
    name: "DeepSeek-R1 7B",
    size: "7B",
    minRam: 16,
    recommendedRam: 32,
    recommendedVram: 6,
    cpuFriendly: false,
    vision: false,
    useCases: ["study", "coding", "automation agents"],
    bestFor: "Reasoning-heavy study and problem solving",
    expectedPerformance: "Good reasoning model, but can be slower because it thinks through problems.",
    speedScore: 4,
    qualityScore: 8,
    memoryScore: 5,
    offlineScore: 10,
    codingScore: 7,
    agentScore: 7,
    pullCommand: "ollama pull deepseek-r1:7b",
    runCommand: "ollama run deepseek-r1:7b",
    warnings: [
      "Reasoning models can be slower.",
      "May produce long chain-like responses unless prompted carefully."
    ]
  },
  {
    id: "gemma3-12b",
    name: "Gemma 3 12B",
    size: "12B",
    minRam: 32,
    recommendedRam: 64,
    recommendedVram: 12,
    cpuFriendly: false,
    vision: true,
    useCases: ["chat", "study", "vision", "home server"],
    bestFor: "Better multimodal and long-context work",
    expectedPerformance: "Stronger than 4B models, but needs serious memory.",
    speedScore: 3,
    qualityScore: 9,
    memoryScore: 3,
    offlineScore: 10,
    codingScore: 5,
    agentScore: 6,
    pullCommand: "ollama pull gemma3:12b",
    runCommand: "ollama run gemma3:12b",
    warnings: ["Not recommended below 32 GB RAM.", "Vision workloads may need more memory."]
  },
  {
    id: "qwen2.5-coder-14b",
    name: "Qwen2.5 Coder 14B",
    size: "14B",
    minRam: 32,
    recommendedRam: 64,
    recommendedVram: 12,
    cpuFriendly: false,
    vision: false,
    useCases: ["coding", "automation agents"],
    bestFor: "Stronger local coding on high-end machines",
    expectedPerformance: "Good quality coding model, but memory-heavy.",
    speedScore: 3,
    qualityScore: 9,
    memoryScore: 3,
    offlineScore: 10,
    codingScore: 10,
    agentScore: 8,
    pullCommand: "ollama pull qwen2.5-coder:14b",
    runCommand: "ollama run qwen2.5-coder:14b",
    warnings: ["Needs strong hardware.", "For most users, 7B is a better v1 recommendation."]
  },
  {
    id: "qwen3-14b",
    name: "Qwen3 14B",
    size: "14B",
    minRam: 32,
    recommendedRam: 64,
    recommendedVram: 12,
    cpuFriendly: false,
    vision: false,
    useCases: ["chat", "study", "coding", "automation agents", "home server"],
    bestFor: "High-quality local chat and reasoning",
    expectedPerformance: "Strong local model for users with powerful machines.",
    speedScore: 3,
    qualityScore: 10,
    memoryScore: 3,
    offlineScore: 10,
    codingScore: 8,
    agentScore: 8,
    pullCommand: "ollama pull qwen3:14b",
    runCommand: "ollama run qwen3:14b",
    warnings: ["Not suitable for low-memory laptops.", "Expect slow CPU-only performance."]
  }
];

const form = document.getElementById("recommender-form");
const resultsGrid = document.getElementById("results-grid");
const resultsSummary = document.getElementById("results-summary");
const resultsWarning = document.getElementById("results-warning");
const setupSteps = document.getElementById("setup-steps");
const upgradeAdvice = document.getElementById("upgrade-advice");
const resultsSection = document.getElementById("results-section");
const sharePanel = document.getElementById("share-panel");
const shareUrlInput = document.getElementById("share-url");
const copyShareLinkButton = document.getElementById("copy-share-link");
const shareStatus = document.getElementById("share-status");
const comparisonPanel = document.getElementById("comparison-panel");
const comparisonTableBody = document.getElementById("comparison-table-body");
const checklistPanel = document.getElementById("checklist-panel");
const checklistList = document.getElementById("checklist-list");
const copyChecklistButton = document.getElementById("copy-checklist-button");
const checklistStatus = document.getElementById("checklist-status");
const fields = {
  ram: document.getElementById("ram"),
  vram: document.getElementById("vram"),
  useCase: document.getElementById("useCase"),
  priority: document.getElementById("priority"),
  os: document.getElementById("os")
};
const queryFieldNames = ["ram", "vram", "useCase", "priority", "os"];
const beginnerTestPrompt =
  "Explain what you can do on my computer and suggest 5 beginner tasks I can try.";

const ramAdviceMap = {
  4: "Upgrade to at least 8 GB RAM. 16 GB is strongly recommended for useful local AI.",
  8: "8 GB is enough for small models. Upgrade to 16 GB for better 4B and 7B model performance.",
  16: "16 GB is a good starting point. Upgrade to 32 GB if you want to run 7B/14B models more comfortably.",
  32: "32 GB is strong for local AI. Your next best upgrade is usually GPU VRAM.",
  64: "Your RAM is excellent. Focus on GPU VRAM and storage speed."
};

const vramAdviceMap = {
  0: "No dedicated VRAM selected. Small models can run on CPU, but speed may be limited.",
  2: "2 GB VRAM is very limited. Prefer 1B–3B models.",
  4: "4 GB VRAM is useful for small 3B/4B models.",
  6: "6–8 GB VRAM is good for many 7B/8B models.",
  8: "6–8 GB VRAM is good for many 7B/8B models.",
  12: "12 GB+ VRAM is strong for larger local models.",
  16: "12 GB+ VRAM is strong for larger local models."
};

const queryFieldConfig = {
  ram: {
    element: fields.ram,
    getParamValue: () => fields.ram.options[fields.ram.selectedIndex].textContent.trim(),
    findOption: (paramValue) =>
      Array.from(fields.ram.options).find((option) => option.textContent.trim() === paramValue)
  },
  vram: {
    element: fields.vram,
    getParamValue: () => fields.vram.options[fields.vram.selectedIndex].textContent.trim(),
    findOption: (paramValue) =>
      Array.from(fields.vram.options).find((option) => option.textContent.trim() === paramValue)
  },
  useCase: {
    element: fields.useCase,
    getParamValue: () => fields.useCase.value,
    findOption: (paramValue) =>
      Array.from(fields.useCase.options).find((option) => option.value === paramValue)
  },
  priority: {
    element: fields.priority,
    getParamValue: () => fields.priority.value,
    findOption: (paramValue) =>
      Array.from(fields.priority.options).find((option) => option.value === paramValue)
  },
  os: {
    element: fields.os,
    getParamValue: () => fields.os.value,
    findOption: (paramValue) =>
      Array.from(fields.os.options).find((option) => option.value === paramValue)
  }
};

function getPriorityScore(model, priority) {
  if (priority === "speed") return model.speedScore;
  if (priority === "quality") return model.qualityScore;
  if (priority === "lowest memory") return model.memoryScore;
  return model.offlineScore;
}

function getPerformanceLabel(model, ram, vram) {
  if (ram < model.minRam) return "Not recommended";
  if (ram < model.recommendedRam || vram < model.recommendedVram) {
    return model.cpuFriendly || vram > 0 ? "Slow" : "Not recommended";
  }
  if (model.speedScore >= 7) return "Fast";
  return "Good";
}

function getRankingScore(model, selection, baseScore) {
  let rankingScore = baseScore;

  if (selection.priority === "quality" && selection.ram >= 8) {
    if (model.qualityScore >= 7) rankingScore += 35;
    if (parseFloat(model.size) < 3) rankingScore -= 40;
  }

  if (selection.useCase === "coding" && model.codingScore >= 8) {
    rankingScore += 50;
  }

  if (selection.useCase === "automation agents" && model.agentScore >= 7) {
    rankingScore += 20;
  }

  return rankingScore;
}

function recommendModels({ ram, vram, useCase, priority }) {
  return models
    .filter((model) => ram >= model.minRam)
    .filter((model) => (useCase === "vision" ? model.vision : true))
    .map((model) => {
      let score = 0;

      if (ram >= model.minRam) score += 30;
      if (ram >= model.recommendedRam) score += 20;
      if (vram >= model.recommendedVram) score += 15;
      if (vram === 0 && model.cpuFriendly) score += 10;
      if (model.useCases.includes(useCase)) score += 30;

      score += getPriorityScore(model, priority);

      if (useCase === "coding") score += model.codingScore * 2;
      if (useCase === "automation agents") score += model.agentScore * 2;

      if (ram < model.recommendedRam) score -= 15;
      if (vram < model.recommendedVram) score -= 10;
      if (useCase === "coding" && model.codingScore < 6) score -= 20;
      if (useCase === "automation agents" && model.agentScore < 6) score -= 15;

      return {
        ...model,
        score,
        rankingScore: getRankingScore(model, { ram, vram, useCase, priority }, score),
        performanceLabel: getPerformanceLabel(model, ram, vram)
      };
    })
    .sort((a, b) => b.rankingScore - a.rankingScore || b.score - a.score);
}

function getWhyThisModel(model, selection) {
  const reasons = [];

  if (model.useCases.includes(selection.useCase)) {
    reasons.push(`matches your ${selection.useCase} use case`);
  }

  if (selection.priority === "speed" && model.speedScore >= 8) {
    reasons.push("leans toward faster local responses");
  }

  if (selection.priority === "quality" && model.qualityScore >= 7) {
    reasons.push("offers stronger quality for its size");
  }

  if (selection.priority === "lowest memory" && model.memoryScore >= 8) {
    reasons.push("keeps memory demands relatively low");
  }

  if (selection.priority === "privacy/offline" && model.offlineScore >= 9) {
    reasons.push("fits fully offline local usage");
  }

  if (selection.vram === 0 && model.cpuFriendly) {
    reasons.push("is realistic on CPU-only setups");
  }

  if (selection.useCase === "coding" && model.codingScore >= 7) {
    reasons.push("has better coding capability than most small models");
  }

  if (selection.useCase === "automation agents" && model.agentScore >= 7) {
    reasons.push("is one of the better lightweight agent options");
  }

  if (selection.useCase === "vision" && model.vision) {
    reasons.push("supports vision workloads in this dataset");
  }

  if (selection.ram >= model.recommendedRam) {
    reasons.push("fits comfortably within your selected RAM");
  } else if (selection.ram >= model.minRam) {
    reasons.push("should run, but may sit near your hardware limit");
  }

  if (reasons.length === 0) {
    return "It cleared the hardware filter and ranked well enough to be one of the most practical local options here.";
  }

  return `It ${reasons.slice(0, 3).join(", ")}.`;
}

function getSelectionWarnings(selection, recommendations) {
  const warnings = [];

  if (selection.ram === 4) {
    warnings.push("4 GB RAM is extremely limiting. Expect only tiny models to be practical.");
  }

  if (selection.vram === 0) {
    warnings.push("No dedicated VRAM selected. CPU-only runs can work, but response speed may be limited.");
  }

  if (selection.useCase === "vision") {
    warnings.push("Vision models usually need more memory than text-only models, especially for larger images and longer contexts.");
  }

  if (
    selection.useCase === "coding" &&
    (selection.ram < 16 || selection.vram === 0 || recommendations.every((model) => model.codingScore < 7))
  ) {
    warnings.push("Coding on weak hardware is possible, but expect slower responses and less reliable code quality from smaller models.");
  }

  if (recommendations.length < 3 && recommendations.length > 0) {
    warnings.push("Fewer than 3 models qualified for this setup, so only the available options are shown.");
  }

  return warnings;
}

function createCommandBlock(label, command, idSuffix) {
  return `
    <div class="command-row">
      <div class="command-meta">
        <strong>${label}</strong>
        <code id="${idSuffix}">${command}</code>
      </div>
      <button
        type="button"
        class="copy-button"
        data-copy="${command}"
        data-state="idle"
        data-copy-label="Copy command"
      >
        Copy command
      </button>
    </div>
  `;
}

function createChecklistCommandBlock(label, command, idSuffix) {
  return `
    <div class="checklist-command-group">
      <span class="checklist-command-label">${label}</span>
      <div class="checklist-command-block">
        <code id="${idSuffix}">${command}</code>
      </div>
      <button
        type="button"
        class="copy-button checklist-copy-button"
        data-copy="${command}"
        data-state="idle"
        data-copy-label="Copy command"
      >
        Copy command
      </button>
    </div>
  `;
}

function createPromptBlock(prompt, idSuffix) {
  return `
    <div class="command-block checklist-command">
      <div class="command-row">
        <div class="command-meta">
          <strong>Test prompt</strong>
          <code id="${idSuffix}">${prompt}</code>
        </div>
        <button
          type="button"
          class="copy-button"
          data-copy="${prompt}"
          data-state="idle"
          data-copy-label="Copy prompt"
        >
          Copy prompt
        </button>
      </div>
    </div>
  `;
}

function getModelCommandName(model) {
  return model.runCommand.replace(/^ollama run\s+/, "");
}

function getTerminalLabel(os) {
  return os === "Windows" ? "PowerShell" : "Terminal";
}

function getScoreLabel(score) {
  if (score <= 3) return "Low";
  if (score <= 6) return "Medium";
  if (score <= 8) return "High";
  return "Very high";
}

function renderEmptyState(selection) {
  resultsGrid.innerHTML = `
    <article class="empty-state">
      <h3>No eligible model found in this v1 dataset</h3>
      <p>
        Try a larger RAM or VRAM selection, or switch to a lighter use case.
        Vision and coding recommendations are the easiest to run out of options on small hardware.
      </p>
    </article>
  `;

  const emptyCommand = "ollama pull tinyllama";
  const terminalLabel = getTerminalLabel(selection.os);

  setupSteps.innerHTML = `
    <li>Install Ollama for ${selection.os} from ollama.com, or use the Linux installer script if applicable.</li>
    <li>Open ${terminalLabel}.</li>
    <li>Start with a tiny test model such as <code>${emptyCommand}</code> after upgrading hardware or changing your target use case.</li>
    <li>Re-run the recommender after adjusting your hardware selection.</li>
  `;
}

function buildChecklistText(selection, topModel) {
  const modelCommandName = getModelCommandName(topModel);

  return [
    "Local AI setup checklist",
    "",
    `OS: ${selection.os}`,
    `Recommended model: ${topModel.name}`,
    "",
    "1. Install Ollama.",
    `2. Open ${getTerminalLabel(selection.os)}.`,
    "3. Pull the model:",
    `   ${topModel.pullCommand}`,
    "4. Run the model:",
    `   ${topModel.runCommand}`,
    "5. Ask this test prompt:",
    `   ${beginnerTestPrompt}`,
    "6. Optional: install Open WebUI for a browser interface.",
    `7. Save this model name for daily use: ${modelCommandName}`
  ].join("\n");
}

function renderChecklist(selection, topModel, shouldShow) {
  checklistPanel.classList.toggle("hidden", !shouldShow || !topModel);

  if (!shouldShow || !topModel) {
    checklistList.innerHTML = "";
    checklistStatus.textContent = "";
    copyChecklistButton.dataset.checklistText = "";
    updateCopyButton(copyChecklistButton, "idle", "Copy checklist");
    return;
  }

  const modelCommandName = getModelCommandName(topModel);
  copyChecklistButton.dataset.checklistText = buildChecklistText(selection, topModel);

  checklistList.innerHTML = `
    <li>Install Ollama.</li>
    <li>Open ${getTerminalLabel(selection.os)}.</li>
    <li>
      Pull the recommended model.
      ${createChecklistCommandBlock("Pull command", topModel.pullCommand, "checklist-pull")}
    </li>
    <li>
      Run the recommended model.
      ${createChecklistCommandBlock("Run command", topModel.runCommand, "checklist-run")}
    </li>
    <li>
      Ask a test prompt.
      <span class="checklist-item-copy">${beginnerTestPrompt}</span>
      ${createPromptBlock(beginnerTestPrompt, "checklist-prompt")}
    </li>
    <li>Optional: install Open WebUI for a browser interface.</li>
    <li>Save the model name somewhere for daily use: <strong>${modelCommandName}</strong></li>
  `;
}

function renderComparison(recommendations, shouldShow) {
  const topThree = recommendations.slice(0, 3);
  comparisonPanel.classList.toggle("hidden", !shouldShow || topThree.length === 0);

  if (!shouldShow || topThree.length === 0) {
    comparisonTableBody.innerHTML = "";
    return;
  }

  comparisonTableBody.innerHTML = topThree
    .map(
      (model) => `
        <tr>
          <th scope="row" class="comparison-model">${model.name}</th>
          <td>${model.size}</td>
          <td>${model.bestFor}</td>
          <td>${model.expectedPerformance}</td>
          <td>${getScoreLabel(model.speedScore)}</td>
          <td>${getScoreLabel(model.qualityScore)}</td>
          <td>${getScoreLabel(model.codingScore)}</td>
          <td>${model.vision ? "Yes" : "No"}</td>
          <td>
            <div class="comparison-command">
              <code>${model.pullCommand}</code>
              <button
                type="button"
                class="copy-button checklist-copy-button"
                data-copy="${model.pullCommand}"
                data-state="idle"
                data-copy-label="Copy command"
              >
                Copy command
              </button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderResults(recommendations, selection) {
  resultsGrid.innerHTML = "";
  resultsGrid.removeAttribute("aria-label");

  if (!recommendations.length) {
    resultsSummary.textContent =
      "No model in this v1 dataset passed the hardware and use-case filter for your current selection.";
    resultsWarning.textContent =
      "No eligible match: this usually means the selected hardware is too limited for the chosen workload, especially for vision or heavier coding use.";
    resultsWarning.classList.remove("hidden");
    renderComparison([], false);
    renderEmptyState(selection);
    return;
  }

  const topThree = recommendations.slice(0, 3);
  const warnings = getSelectionWarnings(selection, topThree);

  resultsSummary.textContent = `Showing ${topThree.length} recommendation${topThree.length > 1 ? "s" : ""} for ${selection.ram} GB RAM, ${selection.vram === 0 ? "no dedicated VRAM" : `${selection.vram} GB VRAM`}, ${selection.useCase}, priority ${selection.priority}.`;

  if (warnings.length > 0) {
    resultsWarning.innerHTML = warnings.map((warning) => `<div>${warning}</div>`).join("");
    resultsWarning.classList.remove("hidden");
  } else {
    resultsWarning.classList.add("hidden");
    resultsWarning.textContent = "";
  }

  topThree.forEach((model, index) => {
    const article = document.createElement("article");
    article.className = `result-card${index === 0 ? " best-match" : ""}`;
    const headingId = `${model.id}-title`;
    article.setAttribute("aria-labelledby", headingId);
    article.innerHTML = `
      <div class="result-badges">
        <span class="badge badge-rank">Top ${index + 1}</span>
        ${index === 0 ? '<span class="badge badge-best">Best match</span>' : ""}
        <span class="badge badge-size">${model.size}</span>
      </div>
      <div class="result-top">
        <div class="result-title-row">
          <div>
            <h3 id="${headingId}">${model.name}</h3>
            <p class="result-subcopy">${model.bestFor}</p>
          </div>
        </div>
      </div>
      <div class="scan-grid">
        <div class="scan-item">
          <span class="scan-label">Expected performance</span>
          <strong>${model.performanceLabel}</strong>
          <span>${model.expectedPerformance}</span>
        </div>
        <div class="scan-item">
          <span class="scan-label">Best for</span>
          <strong>${selection.useCase}</strong>
          <span>${model.bestFor}</span>
        </div>
      </div>
      <div class="why-block">
        <strong>Why this model?</strong>
        <span>${getWhyThisModel(model, selection)}</span>
      </div>
      <div class="command-block">
        ${createCommandBlock("Pull command", model.pullCommand, `${model.id}-pull`)}
        ${createCommandBlock("Run command", model.runCommand, `${model.id}-run`)}
      </div>
      <ul class="warning-cluster">${model.warnings.map((warning) => `<li>${warning}</li>`).join("")}</ul>
    `;
    resultsGrid.appendChild(article);
  });

  resultsGrid.setAttribute("aria-label", `Top ${topThree.length} model recommendations`);
  renderSetupSteps(selection.os, topThree[0]);
}

function renderSetupSteps(os, topModel) {
  const downloadLine =
    os === "Linux"
      ? "Install Ollama using: curl -fsSL https://ollama.com/install.sh | sh"
      : `Download and install Ollama for ${os} from ollama.com.`;

  const terminalLine = os === "Windows" ? "Open PowerShell." : "Open Terminal.";

  setupSteps.innerHTML = `
    <li>${downloadLine}</li>
    <li>${terminalLine}</li>
    <li>Run the pull command: <code>${topModel.pullCommand}</code></li>
    <li>Run the model: <code>${topModel.runCommand}</code></li>
  `;
}

function renderUpgradeAdvice(ram, vram) {
  upgradeAdvice.textContent = `${ramAdviceMap[ram]} ${vramAdviceMap[vram]}`;
}

function buildShareUrl() {
  const params = new URLSearchParams();

  queryFieldNames.forEach((fieldName) => {
    params.set(fieldName, queryFieldConfig[fieldName].getParamValue());
  });

  const url = new URL(window.location.href);
  url.search = params.toString();
  return url;
}

function syncShareUrl() {
  const shareUrl = buildShareUrl();
  shareUrlInput.value = shareUrl.toString();
  history.replaceState({}, "", `${shareUrl.pathname}${shareUrl.search}${shareUrl.hash}`);
  return shareUrl.toString();
}

function renderSharePanel(shouldShow) {
  sharePanel.classList.toggle("hidden", !shouldShow);

  if (!shouldShow) {
    shareStatus.textContent = "";
    shareUrlInput.value = "";
    updateCopyButton(copyShareLinkButton, "idle", "Copy link");
    return;
  }

  syncShareUrl();
}

function applyQueryParams() {
  const searchParams = new URLSearchParams(window.location.search);
  let appliedCount = 0;

  queryFieldNames.forEach((fieldName) => {
    const rawValue = searchParams.get(fieldName);
    if (!rawValue) return;

    const matchingOption = queryFieldConfig[fieldName].findOption(rawValue);
    if (!matchingOption) return;

    queryFieldConfig[fieldName].element.value = matchingOption.value;
    appliedCount += 1;
  });

  return appliedCount;
}

function fallbackCopy(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.top = "0";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.focus();
  helper.select();
  helper.setSelectionRange(0, helper.value.length);
  const success = document.execCommand("copy");
  document.body.removeChild(helper);
  return success;
}

function updateCopyButton(button, state, label) {
  button.textContent = label;
  button.dataset.state = state;
}

async function copyText(text, button, options = {}) {
  const {
    originalText = button.textContent,
    successText = "Copied!",
    failureText = "Press Ctrl/Cmd+C",
    onComplete
  } = options;
  let copied = false;

  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
      copied = true;
    } else {
      copied = fallbackCopy(text);
    }
  } catch (error) {
    copied = false;
  }

  if (!copied) {
    copied = fallbackCopy(text);
  }

  if (copied) {
    updateCopyButton(button, "copied", successText);
  } else {
    updateCopyButton(button, "failed", failureText);
  }

  if (typeof onComplete === "function") {
    onComplete(copied);
  }

  window.setTimeout(() => {
    updateCopyButton(button, "idle", originalText);
  }, 1600);
}

function getSelection() {
  return {
    ram: Number(fields.ram.value),
    vram: Number(fields.vram.value),
    useCase: fields.useCase.value,
    priority: fields.priority.value,
    os: fields.os.value
  };
}

function runRecommendation({
  shouldScroll = true,
  updateUrl = false,
  showShare = false,
  showComparison = false,
  showChecklist = false
} = {}) {
  const selection = getSelection();
  const recommendations = recommendModels(selection);
  const topModel = recommendations[0] || null;

  renderResults(recommendations, selection);
  renderUpgradeAdvice(selection.ram, selection.vram);
  renderSharePanel(showShare);
  renderComparison(recommendations, showComparison);
  renderChecklist(selection, topModel, showChecklist);

  if (updateUrl) {
    syncShareUrl();
  }

  if (shouldScroll) {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    resultsSection.focus();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runRecommendation({
    shouldScroll: true,
    updateUrl: true,
    showShare: true,
    showComparison: true,
    showChecklist: true
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-button");
  if (!button) return;
  copyText(button.dataset.copy, button, {
    originalText: button.dataset.copyLabel || "Copy"
  });
});

copyShareLinkButton.addEventListener("click", () => {
  copyText(shareUrlInput.value, copyShareLinkButton, {
    originalText: "Copy link",
    successText: "Copied!",
    failureText: "Press Ctrl/Cmd+C",
    onComplete: (copied) => {
      shareStatus.textContent = copied
        ? "Share link copied to clipboard."
        : "Automatic copy failed. Select the link and press Ctrl/Cmd+C.";
    }
  });
});

copyChecklistButton.addEventListener("click", () => {
  if (!copyChecklistButton.dataset.checklistText) return;

  copyText(copyChecklistButton.dataset.checklistText, copyChecklistButton, {
    originalText: "Copy checklist",
    successText: "Copied!",
    failureText: "Press Ctrl/Cmd+C",
    onComplete: (copied) => {
      checklistStatus.textContent = copied
        ? "Checklist copied as plain text."
        : "Automatic copy failed. Select the checklist text and press Ctrl/Cmd+C.";
    }
  });
});

const appliedQueryParams = applyQueryParams();

if (appliedQueryParams > 0) {
  runRecommendation({
    shouldScroll: false,
    updateUrl: true,
    showShare: true,
    showComparison: true,
    showChecklist: true
  });
} else {
  runRecommendation({
    shouldScroll: false,
    updateUrl: false,
    showShare: false,
    showComparison: false,
    showChecklist: false
  });
}
