export const DIRECTORIES = {
  intent: "intent",
  clarification: "clarification",
  specs: "specs",
  validation: "validation",
  synthesis: "synthesis",
  config: "config",
} as const;

export const FILENAMES = {
  intentRaw: `${DIRECTORIES.intent}/intent.raw.yaml`,
  clarificationQuestions: `${DIRECTORIES.clarification}/questions.yaml`,
  clarificationResponses: `${DIRECTORIES.clarification}/responses.yaml`,
  validationReport: `${DIRECTORIES.validation}/report.json`,
  synthesisPrompt: `${DIRECTORIES.synthesis}/codex.prompt.md`,
  config: `${DIRECTORIES.config}/framework.yaml`,
} as const;

export const DEFAULT_PDCA_PHASE = "Plan";
export const DEFAULT_SPEC_TEMPLATE_VERSION = "v1";
