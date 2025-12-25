export interface IntentRaw {
  user_goal: string;
  context: string;
  stated_constraints: string[];
  unstated_assumptions: string[];
  uncertainties: string[];
  out_of_scope: string[];
}

export interface IntentFile {
  intent: IntentRaw;
}

export type QuestionType = "binary" | "multiple-choice";

export interface ClarificationQuestion {
  id: string;
  prompt: string;
  type: QuestionType;
  options: string[];
  allowMultiple?: boolean;
  answer?: string | string[] | null;
  blocking: boolean;
  issue: string;
}

export interface ClarificationState {
  status: "pending" | "ready";
  generated_at: string;
  questions: ClarificationQuestion[];
  notes?: string[];
}

export interface RequirementValidation {
  tests: string[];
  acceptance_criteria: string[];
}

export interface Requirement {
  id: string;
  description: string;
  owner?: string;
  validation: RequirementValidation;
}

export interface ClarificationResponses {
  metadata: {
    spec_id: string;
    concept_id: string;
    synchronizations: string[];
    pdca_phase?: string;
  };
  intent: IntentRaw;
  decisions: {
    data_ownership: string;
    implicit_behaviors?: string[];
  };
  requirements: Requirement[];
  security: {
    defaults_applied: boolean;
    additional_constraints: string[];
  };
}

export interface ValidationRuleResult {
  id: string;
  passed: boolean;
  message: string;
  counterexample?: string;
}

export interface ValidationReport {
  status: "passed" | "failed";
  generated_at: string;
  rules: ValidationRuleResult[];
  errors: ValidationRuleResult[];
}

export interface FrameworkConcept {
  id: string;
  name: string;
  description?: string;
}

export interface FrameworkSynchronization {
  id: string;
  description?: string;
}

export interface FrameworkConfig {
  concepts: FrameworkConcept[];
  synchronizations: FrameworkSynchronization[];
  security_defaults: string[];
  allowed_paths: string[];
  disallowed_actions: string[];
}
