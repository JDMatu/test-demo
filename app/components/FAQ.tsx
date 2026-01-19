"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "How does Code Agent 007 understand my codebase?",
    answer:
      "Code Agent 007 uses advanced AI to analyze your repository structure, coding patterns, and existing documentation. It learns from your codebase to generate contextually appropriate code that follows your team's conventions and best practices.",
  },
  {
    question: "Is my code secure with Code Agent 007?",
    answer:
      "Security is our top priority. Your code is processed in isolated, encrypted environments and is never stored permanently. We are SOC 2 Type II certified and comply with GDPR regulations. Enterprise customers can also deploy on-premises for maximum security.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "Code Agent 007 supports all major programming languages including JavaScript, TypeScript, Python, Go, Java, C#, Ruby, PHP, Rust, and many more. Our plugin architecture allows for extending support to additional languages as needed.",
  },
  {
    question: "How do I get started with Code Agent 007?",
    answer:
      "Getting started is easy! Simply request a demo to see Code Agent 007 in action. Our team will walk you through the setup process, which typically takes less than 30 minutes. You can integrate with GitLab, GitHub, or Bitbucket with just a few clicks.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Code Agent 007.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-medium text-white pr-4">{question}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
