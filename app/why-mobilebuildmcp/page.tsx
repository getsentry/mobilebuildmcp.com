import type { Metadata } from "next";
import { WhyMobileBuildMCPPage } from "./why-mobilebuildmcp-page";

export const metadata: Metadata = {
  title: "Why MobileBuildMCP? Agentic Xcode Automation Beyond Bash",
  description:
    "Why AI agents use MobileBuildMCP instead of ad-hoc xcodebuild and simctl commands: compact output, session defaults, managed logs, UI automation, LLDB, and deterministic CLI workflows.",
  openGraph: {
    title: "Why MobileBuildMCP?",
    description:
      "See why MobileBuildMCP gives AI agents a better Xcode feedback loop than raw shell commands.",
    url: "https://xcodebuildmcp.com/why-mobilebuildmcp",
  },
};

export default function Page() {
  return <WhyMobileBuildMCPPage />;
}
