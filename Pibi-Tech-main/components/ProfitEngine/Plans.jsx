"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Plans() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
        <PlanCard
          highlight={false}
          title="BASIC Plan"
          price="₹2,999"
          period="/ month"
          icon={<BasicIcon />}
          blurb="Perfect for small manufacturing teams starting operations — CRM, HRMS, and Growth are optional add-ons"
          sections={[
            {
              heading: "Manufacturing Operations",
              items: [
                { text: "Invoices & Quotations", icon: "📄" },
                { text: "Sales Order", icon: "📋" },
                { text: "Real-Time Inventory", icon: "📦" },
                { text: "Purchase Orders and Bills", icon: "🛒" },
                { text: "RFQs (Request for Quotations)", icon: "💬" },
                { text: "Vendor Management", icon: "🤝" },
                { text: "Production Planning (Basic)", icon: "📊" },
                { text: "Expense Management", icon: "💰" },
                { text: "P&L, Balance Sheet", icon: "📈" },
                { text: "Price List", icon: "💲" },
              ],
            },
            {
              heading: "Management & Tasks",
              items: [
                { text: "Task Assignment & Tracking", icon: "✅" },
                {
                  text: "Standard Dashboards (Production, Inventory, Revenue)",
                  icon: "📊",
                },
              ],
            },
            {
              heading: "Support",
              items: [
                {
                  text: "Email Notifications for Orders & Inventory Alerts",
                  icon: "📧",
                },
                { text: "Email Support", icon: "💬" },
              ],
            },
          ]}
          addons={[
            {
              title: "CRM Basic Pack",
              price: "₹2,000/mo",
              description: "Lead Tracking, Customer Contacts, Deal Status",
            },
            {
              title: "HRMS Basic",
              price: "₹1,500/mo",
              description: "Attendance & Leave Management",
              icon: "👥",
            },
            {
              title: "Growth Booster Basic",
              price: "₹2,000/mo",
              description: "Lead Nurturing Campaigns, Email/WhatsApp/SMS",
              icon: "📱",
            },
          ]}
          addonsTitle="Add-Ons Available for Basic"
        />

        <PlanCard
          highlight
          badge="Most Popular"
          title="PROFESSIONAL Plan"
          price="₹5,999"
          period="/ month"
          icon={<ProIcon />}
          blurb="₹1,000 more than Basic + includes CRM Basic pack + extra features"
          sections={[
            {
              heading: "Manufacturing Operations (Enhanced)",
              items: [
                { text: "POS", icon: "💳" },
                { text: "Work Orders", icon: "🔧" },
                { text: "Bill of Materials (BOM)", icon: "📑" },
                {
                  text: "Advanced Production Planning (Auto Resource Allocation)",
                },
                { text: "Real-Time Inventory Alerts", icon: "🔔" },
                { text: "Sales and Purchsse approvals", icon: "✅" },
                {
                  text: "Price Lists (Automated Pricing Rules)",
                  icon: "🏷️",
                },
                { text: "GSTR Filing" },
                {
                  text: "Inventory Forecasting & Auto-Reordering",
                  icon: "🔮",
                },
              ],
            },
            {
              heading: "CRM & Management",
              items: [
                {
                  text: "CRM Basic (Included) — saves ₹2,000/mo vs. Basic + Add-On",
                },
                {
                  text: "Automated Workflows (Task reminders, approvals)",
                  icon: "⚡",
                },
                { text: "Role-Based Access Control", icon: "🔐" },
                {
                  text: "HRMS Basic (Optional Add-On ₹1,500/mo if needed)",
                  icon: "👥",
                },
              ],
            },
            {
              heading: "Growth & Marketing",
              items: [
                {
                  text: "Lead Nurturing Campaigns (Email, WhatsApp, SMS)",
                  icon: "📱",
                },
                {
                  text: "Deal Insights AI (Pricing & Conversion Recommendations)",
                  icon: "🤖",
                },
                { text: "Priority Support", icon: "⭐" },
              ],
            },
          ]}
          addons={[
            {
              title: "HRMS Advanced",
              price: "₹2,000/mo",
              description: "Payroll, Performance Reviews, Employee Analytics",
              icon: "👨‍💼",
            },
            {
              title: "Growth Booster Advanced",
              price: "₹2,500/mo",
              description:
                "Advanced marketing automation with AI-powered insights",
              icon: "🚀",
            },
          ]}
          addonsTitle="Strategic Add-Ons"
        />

        <PlanCard
          highlight={false}
          title="ULTIMATE Plan"
          price="₹11,999"
          period="/ month"
          icon={<UltimateIcon />}
          blurb="Full manufacturing automation + CRM Advanced + Growth & Marketing Intelligence"
          sections={[
            {
              heading: "Complete Manufacturing Operations",
              items: [
                {
                  text: "Capacity Planning & Work Center Optimization",
                  icon: "⚙️",
                },
                {
                  text: "Multi-Plant & Multi-Warehouse Automation",
                  icon: "🏭",
                },
                { text: "Auto BOM Updates", icon: "🔄" },
                {
                  text: "Advanced Stock Ledger & Batch Controls",
                  icon: "📊",
                },
                { text: "Procurement Automation", icon: "🤖" },
                {
                  text: "Production Costing & Variance Reports",
                  icon: "📉",
                },
              ],
            },
            {
              heading: "CRM Advanced & Management",
              items: [
                {
                  text: "CRM Advanced (Customer 360, Deal AI, Follow-Up Automation) — saves ₹3,500/mo if purchased as add-on separately",
                },
                {
                  text: "HRMS Advanced (Payroll, Performance Reviews, Employee Analytics)",
                  icon: "👨‍💼",
                },
              ],
            },
            {
              heading: "Growth, Marketing & Revenue Intelligence",
              items: [
                {
                  text: "Personalized Lead Nurturing Campaigns (AI Recommendations)",
                  icon: "🤖",
                },
                { text: "Ad Exchange", icon: "📢" },
                {
                  text: "Revenue Forecasting & ROAS Dashboards",
                  icon: "📈",
                },
                {
                  text: "Revenue Attribution & Marketing Intelligence Reports",
                  icon: "📊",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}

function PlanCard({
  title,
  price,
  period,
  blurb,
  sections,
  highlight = false,
  badge,
  icon,
  addons,
  addonsTitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={
        "relative h-full rounded-3xl border bg-white/80 backdrop-blur-xl p-8 md:p-10 transition-all duration-300 flex flex-col" +
        (highlight
          ? " border-primary/40 shadow-2xl shadow-primary/10 ring-2 ring-primary/10"
          : " border-slate-200 hover:border-primary/30 shadow-lg")
      }
    >
      {highlight && (
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-transparent rounded-3xl pointer-events-none" />
      )}

      {badge ? (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-5 py-2 text-sm font-bold rounded-full bg-linear-to-r from-secondary to-primary text-white shadow-lg shadow-primary/20 whitespace-nowrap">
            {badge}
          </span>
        </div>
      ) : null}

      <div className="relative mb-8">
        <h3 className="text-2xl font-bold mb-3 text-accent">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-extrabold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-slate-500 text-lg font-medium">{period}</span>
        </div>
        {blurb ? (
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-medium">
            {blurb}
          </p>
        ) : null}
      </div>

      <div className="relative space-y-8 mb-8 grow">
        {sections?.map((sec) => (
          <div key={sec.heading}>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
              {sec.heading}
            </h4>
            <ul className="space-y-3">
              {sec.items.map((it, i) => {
                const isObject = typeof it === "object";
                const itemText = isObject ? it.text : it;
                const itemIcon = isObject ? it.icon : null;

                return (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-700 text-sm leading-relaxed font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{itemText}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {addons && addons.length > 0 && (
        <div className="relative mb-8">
          <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">
            {addonsTitle || "Add-Ons"}
          </h4>
          <div className="space-y-3">
            {addons.map((addon, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h5 className="font-bold text-accent text-sm">
                        {addon.title}
                      </h5>
                      <span className="text-secondary font-bold text-xs whitespace-nowrap">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {addon.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="relative mt-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl font-bold text-base text-white bg-linear-to-r from-secondary to-primary shadow-lg hover:shadow-primary/20 transition-all"
        >
          Get Started →
        </motion.button>
      </div>
    </motion.div>
  );
}

// SVG Icon Components
function BasicIcon() {
  return (
    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
      <svg
        className="w-8 h-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </div>
  );
}

function ProIcon() {
  return (
    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
      <svg
        className="w-8 h-8 text-purple-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
  );
}

function UltimateIcon() {
  return (
    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
      <svg
        className="w-8 h-8 text-amber-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    </div>
  );
}

function getIconSVG(emoji) {
  return <span className="text-lg">{emoji}</span>;
}
