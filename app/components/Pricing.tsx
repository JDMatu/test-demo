"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "Team",
    price: "$29",
    period: "/dev/mo",
    badge: null,
    highlighted: false,
    buttonStyle: "blue",
    benefits: [
      "Up to 10 team members",
      "Unlimited merge requests",
      "Real-time execution logs",
      "Plugin architecture access",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    badge: "Most popular",
    highlighted: true,
    buttonStyle: "gradient",
    benefits: [
      "Unlimited team members",
      "Priority code generation",
      "Advanced security controls",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your team&apos;s needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
}: {
  plan: {
    name: string;
    price: string;
    period: string;
    badge: string | null;
    highlighted: boolean;
    buttonStyle: string;
    benefits: string[];
  };
}) {
  return (
    <div
      className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
        plan.highlighted
          ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
          : "border-gray-700/50 hover:border-gray-600/50"
      }`}
    >
      {/* Glow effect for highlighted card */}
      {plan.highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {/* Plan name */}
        <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl md:text-5xl font-bold text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-gray-400 ml-1">{plan.period}</span>
          )}
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-8">
          {plan.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            plan.buttonStyle === "gradient"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
        </button>
      </div>
    </div>
  );
}
