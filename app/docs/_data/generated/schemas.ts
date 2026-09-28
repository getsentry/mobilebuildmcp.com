export type PublishedSchema = {
  name: string
  versions: string[]
  latest: string
}

export const publishedSchemas: PublishedSchema[] = [
  { name: "mobilebuildmcp.output.app-path", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.build-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.build-run-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.build-settings", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.bundle-id", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.capture-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.coverage-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.debug-breakpoint-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.debug-command-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.debug-session-action", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.debug-stack-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.debug-variables-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.device-list", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.doctor-report", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.error", versions: ["1"], latest: "1" },
  { name: "mobilebuildmcp.output.install-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.launch-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.process-list", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.project-list", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.scaffold-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.scheme-list", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.session-defaults", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.session-profile", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.simulator-action-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.simulator-list", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.stop-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.test-result", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.ui-action-result", versions: ["1", "2", "3"], latest: "3" },
  { name: "mobilebuildmcp.output.workflow-selection", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.xcode-bridge-call-result", versions: ["1", "2", "3"], latest: "3" },
  { name: "mobilebuildmcp.output.xcode-bridge-status", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.xcode-bridge-sync", versions: ["1", "2"], latest: "2" },
  { name: "mobilebuildmcp.output.xcode-bridge-tool-list", versions: ["1", "2", "3"], latest: "3" },
]
