import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const trustBullets = [
  "Plugin-based architecture",
  "Safe code edits",
  "Real-time logs",
];

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
              AI-Powered Dev Automation
            </span>

            {/* Title with gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Issues into Merge Requests —{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Automatically.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Code Agent 007 transforms your issues into production-ready merge
              requests with AI-powered planning, code generation, and automated
              testing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#demo"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Request Demo
              </a>
              <a
                href="#overview"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-700"
              >
                <FontAwesomeIcon icon={faPlay} className="w-4 h-4 mr-2" />
                Watch 60s Overview
              </a>
            </div>

            {/* Micro-trust bullets */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {trustBullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center text-sm text-gray-400"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-green-500 mr-2"
                  />
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Flow Visualization */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl" />

            {/* Visual panel */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col items-center space-y-4">
                {/* Issue Card */}
                <FlowCard
                  color="red"
                  tag="ISSUE #1234"
                  title="Add user authentication"
                  icon="📋"
                />

                <FlowArrow />

                {/* Plan Card */}
                <div className="w-full bg-gray-900/80 border border-yellow-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">📝</span>
                    <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">
                      Plan
                    </span>
                  </div>
                  <div className="space-y-2">
                    <TaskItem checked>Create auth middleware</TaskItem>
                    <TaskItem checked>Implement JWT tokens</TaskItem>
                    <TaskItem checked>Add login endpoint</TaskItem>
                  </div>
                </div>

                <FlowArrow />

                {/* Code Card */}
                <div className="w-full bg-gray-900/80 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">💻</span>
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wide">
                      Code
                    </span>
                  </div>
                  <div className="font-mono text-sm bg-gray-950/50 rounded-lg p-3 overflow-x-auto">
                    <div>
                      <span className="text-purple-400">export async function</span>{" "}
                      <span className="text-blue-300">authenticate</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-300">token</span>
                      <span className="text-gray-400">) {"{"}</span>
                    </div>
                    <div className="text-gray-500 pl-4">
                      {"// Verify JWT token"}
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-green-400">jwt</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-blue-300">verify</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-300">token</span>
                      <span className="text-gray-400">);</span>
                    </div>
                    <div className="text-gray-400">{"}"}</div>
                  </div>
                </div>

                <FlowArrow />

                {/* MR Card */}
                <FlowCard
                  color="green"
                  tag="MR #5678"
                  title="Ready to merge"
                  icon="✅"
                  status="3 checks passed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  color,
  tag,
  title,
  icon,
  status,
}: {
  color: "red" | "green";
  tag: string;
  title: string;
  icon: string;
  status?: string;
}) {
  const borderColor = color === "red" ? "border-red-500/30" : "border-green-500/30";
  const tagColor = color === "red" ? "text-red-400" : "text-green-400";

  return (
    <div className={`w-full bg-gray-900/80 border ${borderColor} rounded-xl p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>
        <span className={`${tagColor} text-xs font-semibold uppercase tracking-wide`}>
          {tag}
        </span>
      </div>
      <p className="text-white font-medium">{title}</p>
      {status && (
        <p className="text-green-400 text-sm mt-1 flex items-center gap-1">
          <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
          {status}
        </p>
      )}
    </div>
  );
}

function TaskItem({ children, checked }: { children: React.ReactNode; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className={`w-4 h-4 rounded flex items-center justify-center ${
          checked ? "bg-green-500/20 text-green-400" : "bg-gray-700"
        }`}
      >
        {checked && <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />}
      </span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-1">
      <FontAwesomeIcon
        icon={faChevronDown}
        className="w-5 h-5 text-blue-400 animate-pulse"
      />
    </div>
  );
}
