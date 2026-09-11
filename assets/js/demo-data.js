// Fabricated demo accounts for the Member Dashboard practice project.
// Not real security: credentials and data are visible to anyone viewing source.
// Never replace these with real member IDs, passwords, or personal data.
const DEMO_ACCOUNTS = {
  "MEM10234": {
    password: "Demo#2026",
    name: "Naledi Dlamini",
    membershipStatus: "Active",
    renewsInDays: 96,
    cpdHoursLogged: 18,
    cpdHoursRequired: 40,
    outstandingBalance: 0,
    testResults: [
      { assessment: "Financial Reporting Assessment", date: "2026-03-14", score: "78%", result: "Passed" },
      { assessment: "Tax Compliance Module", date: "2026-05-02", score: "64%", result: "Passed" },
      { assessment: "Ethics & Professional Conduct", date: "2026-07-19", score: "41%", result: "Failed" }
    ],
    fees: [
      { description: "Annual membership fee", date: "2026-06-01", amount: 2450.00, status: "Paid" },
      { description: "CPD workshop: Financial Reporting", date: "2026-07-14", amount: 650.00, status: "Paid" },
      { description: "Certificate reissue fee", date: "2026-08-22", amount: 150.00, status: "Outstanding" }
    ]
  },
  "MEM10891": {
    password: "Test@456",
    name: "Thabo Nkosi",
    membershipStatus: "Active",
    renewsInDays: 12,
    cpdHoursLogged: 40,
    cpdHoursRequired: 40,
    outstandingBalance: 2450.00,
    testResults: [
      { assessment: "Financial Reporting Assessment", date: "2026-02-08", score: "91%", result: "Passed" },
      { assessment: "Tax Compliance Module", date: "2026-04-16", score: "88%", result: "Passed" }
    ],
    fees: [
      { description: "Annual membership fee (renewal)", date: "2026-09-01", amount: 2450.00, status: "Outstanding" },
      { description: "Late renewal penalty", date: "2026-09-01", amount: 200.00, status: "Outstanding" }
    ]
  },
  "MEM11207": {
    password: "Pass!789",
    name: "Priya Naidoo",
    membershipStatus: "Suspended",
    renewsInDays: 0,
    cpdHoursLogged: 5,
    cpdHoursRequired: 40,
    outstandingBalance: 3100.00,
    testResults: [
      { assessment: "Ethics & Professional Conduct", date: "2026-01-20", score: "55%", result: "Passed" }
    ],
    fees: [
      { description: "Annual membership fee", date: "2025-06-01", amount: 2450.00, status: "Outstanding" },
      { description: "Disciplinary review fee", date: "2026-02-10", amount: 650.00, status: "Outstanding" }
    ]
  }
};
