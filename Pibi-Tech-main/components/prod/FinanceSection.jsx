import { Settings } from "lucide-react";
import { AgentCard } from "../AgentCard";

export function FinanceBankingSection() {
  const agents = [
    {
      icon: <Settings />,
      title: "Transaction Monitoring & Fraud Detection Agent",
      description:
        "Continuously tracks financial transactions, flags suspicious patterns, and alerts teams instantly to help prevent fraud and protect customer accounts in real time.",
    },
    {
      icon: <Settings />,
      title: "Loan Underwriting Automation Agent",
      description:
        "Reviews loan applications, checks eligibility, and calculates risk scores quickly, ensuring faster approvals and consistent decision-making for both lenders and borrowers.",
    },
    {
      icon: <Settings />,
      title: "Regulatory Compliance Reporting Agent",
      description:
        "Gathers required data, validates accuracy, and prepares compliance reports on schedule, helping financial institutions stay audit-ready and meet regulatory standards effortlessly.",
    },
    {
      icon: <Settings />,
      title: "Credit Scoring & Risk Assessment Agent",
      description:
        "Analyzes credit history, spending behavior, and other risk indicators to provide accurate, consistent credit scores for smarter lending decisions.",
    },
    {
      icon: <Settings />,
      title: "Autonomous Monitoring Agent",
      description:
        "Runs quietly in the background, watching key systems and transactions for anomalies, and notifies teams before issues escalate into costly problems.",
    },
    {
      icon: <Settings />,
      title: "Customer KYC & AML Screening Agent",
      description:
        "Verifies customer identities, checks documents, and screens against watchlists to ensure compliance with Know Your Customer and anti–money laundering regulations.",
    },
    {
      icon: <Settings />,
      title: "Bank Reconciliation Agent",
      description:
        "Matches internal records with bank statements, identifies mismatches, and updates accounts to keep financial records accurate and up to date.",
    },
    {
      icon: <Settings />,
      title: "Treasury Cash Flow Forecast Agent",
      description:
        "Analyzes historical data and payment trends to accurately predict cash inflows and outflows, helping businesses manage liquidity and plan ahead.",
    },
    {
      icon: <Settings />,
      title: "Invoice Processing Automation Agent",
      description:
        "Reads, verifies, and processes invoices automatically, reducing manual work, avoiding payment errors, and accelerating the accounts payable cycle.",
    },
    {
      icon: <Settings />,
      title: "Audit Trail Validator Agent",
      description:
        "Ensures every financial transaction and change is logged correctly, making audits easier and ensuring regulatory transparency.",
    },
    {
      icon: <Settings />,
      title: "Suspicious Activity Report (SAR) Generator Agent",
      description:
        "Compiles details of flagged transactions into a complete, ready-to-submit suspicious activity report, saving compliance teams hours of manual work.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-[#F1F0FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A0BE6] mb-8 md:mb-12">
          AI Agents in Finance & Banking
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
