import { Hero } from "./components/Hero";
import { Features } from "./components/Features";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Pricing</h2>
          <div className="bg-gray-800 p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-400">
              We&apos;re working on flexible pricing plans for teams of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                What is Code Agent 007?
              </h3>
              <p className="text-gray-400">
                Code Agent 007 is an AI-powered development automation platform
                that helps teams build software faster.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                How do I get started?
              </h3>
              <p className="text-gray-400">
                Click the &quot;Request Demo&quot; button to schedule a demo with our
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
