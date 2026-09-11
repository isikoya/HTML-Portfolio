// Fabricated demo accounts for the Member Dashboard practice project.
// Not real security: credentials and data are visible to anyone viewing source.
// Never replace these with real member IDs, passwords, or personal data.
const DEMO_ACCOUNTS = {
  "MEM10234": {
    password: "Demo#2026",
    name: "Naledi Dlamini",
    memberId: "MB-772104",
    memberSince: "2022-03-27",
    membershipTier: "Associate",
    membershipStatus: "Active",
    renewsInDays: 96,
    cpdHoursLogged: 18,
    cpdHoursRequired: 40,
    outstandingBalance: 0,
    contact: {
      email: "n.dlamini@example.test",
      phone: "071 555 0142",
      address: "48 Fernwood Ave, Rivonia, Johannesburg, 2191"
    },
    testResults: [
      { assessment: "Financial Reporting Assessment", date: "2026-03-14", score: "78%", result: "Passed" },
      { assessment: "Tax Compliance Module", date: "2026-05-02", score: "64%", result: "Passed" },
      { assessment: "Ethics & Professional Conduct", date: "2026-07-19", score: "41%", result: "Failed" }
    ],
    fees: [
      { description: "Annual membership fee", date: "2026-06-01", amount: 2450.00, status: "Paid" },
      { description: "CPD workshop: Financial Reporting", date: "2026-07-14", amount: 650.00, status: "Paid" },
      { description: "Certificate reissue fee", date: "2026-08-22", amount: 150.00, status: "Outstanding" }
    ],
    queries: [
      { caseNumber: "CQ-48210-A1", category: "Billing", status: "Case Closed", created: "2026-07-02", resolved: "2026-07-05" }
    ]
  },
  "MEM10891": {
    password: "Test@456",
    name: "Thabo Nkosi",
    memberId: "MB-559812",
    memberSince: "2019-11-10",
    membershipTier: "Full Member",
    membershipStatus: "Active",
    renewsInDays: 12,
    cpdHoursLogged: 40,
    cpdHoursRequired: 40,
    outstandingBalance: 2450.00,
    contact: {
      email: "t.nkosi@example.test",
      phone: "082 555 0198",
      address: "12 Berea Rd, Durban, KwaZulu-Natal, 4001"
    },
    testResults: [
      { assessment: "Financial Reporting Assessment", date: "2026-02-08", score: "91%", result: "Passed" },
      { assessment: "Tax Compliance Module", date: "2026-04-16", score: "88%", result: "Passed" }
    ],
    fees: [
      { description: "Annual membership fee (renewal)", date: "2026-09-01", amount: 2450.00, status: "Outstanding" },
      { description: "Late renewal penalty", date: "2026-09-01", amount: 200.00, status: "Outstanding" }
    ],
    queries: [
      { caseNumber: "CQ-50117-B7", category: "Renewal", status: "Awaiting Response", created: "2026-09-02", resolved: "-" }
    ]
  },
  "MEM11207": {
    password: "Pass!789",
    name: "Priya Naidoo",
    memberId: "MB-330475",
    memberSince: "2024-01-15",
    membershipTier: "Trainee",
    membershipStatus: "Suspended",
    renewsInDays: 0,
    cpdHoursLogged: 5,
    cpdHoursRequired: 40,
    outstandingBalance: 3100.00,
    contact: {
      email: "p.naidoo@example.test",
      phone: "063 555 0177",
      address: "9 Marine Dr, Cape Town, Western Cape, 8001"
    },
    testResults: [
      { assessment: "Ethics & Professional Conduct", date: "2026-01-20", score: "55%", result: "Passed" }
    ],
    fees: [
      { description: "Annual membership fee", date: "2025-06-01", amount: 2450.00, status: "Outstanding" },
      { description: "Disciplinary review fee", date: "2026-02-10", amount: 650.00, status: "Outstanding" }
    ],
    queries: [
      { caseNumber: "CQ-41983-C3", category: "Compliance", status: "Case Closed", created: "2025-12-11", resolved: "2026-01-04" },
      { caseNumber: "CQ-52290-D9", category: "Suspension Appeal", status: "Under Review", created: "2026-08-30", resolved: "-" }
    ]
  }
};

// Generic reference links shown on every account's dashboard.
const DEMO_REQUIREMENTS = [
  { title: "CPD Requirements", note: "Annual continuing professional development hours and evidence." },
  { title: "Membership Renewal", note: "Fees, deadlines, and reinstatement after suspension." },
  { title: "Code of Conduct", note: "Professional and ethical standards for members." }
];
