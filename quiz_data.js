const QUIZ_DATA = {
  audit: {
    label: "Auditing",
    icon: "🔍",
    color: "#10b981",
    questions: [
      // Financial Statement Assertions
      {
        q: "Which financial statement assertion confirms that assets, liabilities and equity interests actually exist at the period end?",
        options: ["Completeness", "Existence", "Valuation and Allocation", "Rights and Obligations"],
        answer: 1,
        explanation: "The 'Existence' assertion confirms that items recorded in the financial statements actually exist at the period end. The auditor verifies this by physically counting or inspecting assets."
      },
      {
        q: "An auditor performs cutoff tests by inspecting the last Goods Received Notes of the year. Which assertion is this designed to test?",
        options: ["Existence", "Valuation", "Completeness", "Presentation"],
        answer: 2,
        explanation: "Cutoff tests address the 'Completeness' assertion — ensuring that all transactions and events that should have been recorded have indeed been recorded, especially around year-end."
      },
      {
        q: "Inspecting purchase invoices and shipping documents to verify legal ownership of inventory addresses which assertion?",
        options: ["Valuation", "Rights and Obligations", "Accuracy", "Completeness"],
        answer: 1,
        explanation: "'Rights and Obligations' confirms the entity holds or controls rights to its assets. Verifying ownership documents proves the entity legally owns the inventory."
      },
      {
        q: "The NRV check — comparing unit cost of inventory to post-year-end sales prices — addresses which assertion?",
        options: ["Completeness", "Existence", "Valuation and Allocation", "Occurrence"],
        answer: 2,
        explanation: "The 'Valuation and Allocation' assertion is that assets are included at appropriate amounts. IAS 2 requires inventory to be valued at the lower of cost and NRV."
      },
      // Ethical Threats
      {
        q: "When a former finance director of an audit client joins the audit firm and is proposed to review that same client's audit, this creates which ethical threat?",
        options: ["Self-interest threat", "Self-review threat", "Familiarity threat", "Intimidation threat"],
        answer: 2,
        explanation: "A Familiarity Threat arises when an auditor becomes too sympathetic to a client's interests due to a close relationship. The former employee joining the firm creates this threat. They must not be involved in the audit for at least two years."
      },
      {
        q: "An audit firm preparing the financial statements that it subsequently audits creates which type of threat?",
        options: ["Self-review threat", "Advocacy threat", "Intimidation threat", "Familiarity threat"],
        answer: 0,
        explanation: "A Self-Review Threat occurs when auditors review work they or their firm previously performed. Preparing then auditing financial statements is a classic example — the firm cannot objectively review its own work."
      },
      {
        q: "A client offers an auditor a luxury weekend at a hotel as a 'thank you'. This is primarily which type of ethical threat?",
        options: ["Familiarity", "Advocacy", "Self-interest", "Intimidation"],
        answer: 2,
        explanation: "A Self-Interest Threat arises when the audit firm or its members could benefit financially or otherwise from a client relationship. Accepting lavish gifts can compromise objectivity and independence."
      },
      {
        q: "A client pressures auditors to 'complete quickly with minimal questions' to secure future advisory contracts. Which threat is this?",
        options: ["Self-review", "Advocacy", "Intimidation / Self-interest", "Familiarity"],
        answer: 2,
        explanation: "This is both an Intimidation Threat (pressure to comply) and a Self-Interest Threat (desire for future fees). Both compromise audit independence. The auditor should communicate that professional standards cannot be compromised."
      },
      // Going Concern
      {
        q: "Which of the following is a going concern audit procedure?",
        options: [
          "Perform a physical inventory count",
          "Review management's cash flow forecasts for at least 12 months from year-end",
          "Confirm accounts receivable with customers",
          "Recompute depreciation on fixed assets"
        ],
        answer: 1,
        explanation: "Reviewing management's cash flow and profit forecasts for at least 12 months from year-end is a primary going concern procedure under ISA 570, as it assesses the entity's ability to continue as a going concern."
      },
      {
        q: "When assessing going concern, what period of cash flow forecasts should an auditor review?",
        options: ["3 months", "6 months", "At least 12 months from year-end", "24 months"],
        answer: 2,
        explanation: "ISA 570 (Going Concern) requires auditors to assess events and conditions for a period of at least 12 months from the date of the financial statements."
      },
      // Internal Controls
      {
        q: "QIP's website is not integrated with the inventory system. What is the primary risk?",
        options: [
          "Customer data may be stolen",
          "Goods may be sold that are out of stock",
          "Sales tax may be miscalculated",
          "Shipping costs may increase"
        ],
        answer: 1,
        explanation: "Without real-time inventory integration, orders can be placed for out-of-stock items, leading to unfulfilled orders, customer complaints, and damage to the company's reputation and cash flow."
      },
      {
        q: "What is the risk when only one accountant calculates depreciation with no independent review?",
        options: [
          "Assets may be over-depreciated only",
          "Errors or fraud go undetected due to lack of segregation of duties",
          "Depreciation rates may increase each year",
          "The asset register will be incomplete"
        ],
        answer: 1,
        explanation: "Lack of segregation of duties means errors (both honest mistakes and fraud) may not be detected. An independent review creates a check that would catch miscalculations or manipulation."
      },
      // Written Representations
      {
        q: "What is the primary purpose of a Written Representation from a client?",
        options: [
          "To replace physical audit evidence",
          "To obtain management's acknowledgement of their responsibility for the financial statements",
          "To confirm the auditor's independence",
          "To set the audit fee"
        ],
        answer: 1,
        explanation: "Per ISA 580, Written Representations obtain management's formal acknowledgement of its responsibility for the preparation and fair presentation of the financial statements, and to document responses where other evidence is limited."
      },
      {
        q: "Supplier statement reconciliations have not been performed. What is the main risk?",
        options: [
          "Tax returns may be filed late",
          "Errors or fraudulent payments may go undetected in the purchase ledger",
          "Inventory may be understated",
          "Revenue may be overstated"
        ],
        answer: 1,
        explanation: "Without supplier reconciliations, discrepancies between the company's ledger and supplier records — including duplicated payments, fraudulent invoices, or mispostings — will remain undetected."
      },
      // Audit Committee
      {
        q: "Which of the following is a benefit of an audit committee?",
        options: [
          "It eliminates the need for external auditors",
          "It increases management's control over financial reporting",
          "It enhances external auditor independence by providing a buffer from management",
          "It allows the board to set its own salaries"
        ],
        answer: 2,
        explanation: "An audit committee serves as an independent oversight body between management and auditors, enhancing independence and strengthening both internal and external audit functions."
      },
      // Evidence Procedures
      {
        q: "Physically inspecting a newly purchased truck to verify it was received is an example of which audit procedure?",
        options: ["Inquiry", "Observation", "Inspection", "Recalculation"],
        answer: 2,
        explanation: "Inspection involves examining records or tangible assets. Physically viewing the truck confirms its existence and that it is in operation — an inspection of a physical asset."
      },
      {
        q: "Watching client staff perform an inventory count is an example of which audit procedure?",
        options: ["Inspection", "Observation", "Recalculation", "External confirmation"],
        answer: 1,
        explanation: "Observation involves looking at a process being performed by others. Watching the client count inventory is observation — the auditor is monitoring the client's procedure."
      },
      {
        q: "Manually re-computing the depreciation charge to check accuracy is which audit procedure?",
        options: ["Inquiry", "Analytical procedures", "Recalculation", "Inspection"],
        answer: 2,
        explanation: "Recalculation involves checking the mathematical accuracy of documents or records. Re-computing depreciation manually and comparing it to the client's figure is a classic recalculation."
      },
      // Internal Audit
      {
        q: "Which is a limitation of an internal audit department?",
        options: [
          "It can detect fraud",
          "Lack of independence as internal auditors are employees of the company",
          "It can perform tax reviews",
          "Internal auditors have specialist skills"
        ],
        answer: 1,
        explanation: "The primary limitation of internal audit is a lack of independence. Since internal auditors are employees appointed by and reporting to management, their ability to objectively report on management's actions is inherently limited."
      },
      {
        q: "Before accepting a new audit engagement, which action is most critical?",
        options: [
          "Agree on the fee immediately",
          "Set the audit timetable",
          "Obtain professional clearance from the predecessor auditor",
          "Issue the audit report"
        ],
        answer: 2,
        explanation: "Professional clearance involves contacting the previous auditor to inquire whether there are any professional reasons (e.g., unpaid fees, management integrity concerns) that should prevent acceptance of the new engagement."
      }
    ]
  },

  project: {
    label: "Project Management",
    icon: "📋",
    color: "#fbbf24",
    questions: [
      {
        q: "What is the correct definition of a project?",
        options: [
          "A permanent, routine operation carried out to produce a standard product",
          "A temporary, planned, complex, one-time, customer-focused endeavor to create a unique outcome",
          "A long-term business strategy for growth",
          "An ongoing process of maintaining existing systems"
        ],
        answer: 1,
        explanation: "A project is defined as a temporary, planned, complex, one-time, customer-focused endeavor undertaken to create a unique outcome with a limited budget, schedule, and resources. The key distinguishing feature is that it is temporary and unique."
      },
      {
        q: "Which of the following is NOT a characteristic of a project?",
        options: ["It has an objective to be achieved", "It has a defined schedule to closure", "It is a repetitive, ongoing operation", "It requires specific resources"],
        answer: 2,
        explanation: "A 'repetitive, ongoing operation' describes operations management, not a project. Projects are temporary and unique, whereas operations are ongoing and repetitive."
      },
      {
        q: "The Triple Constraint in project management refers to which three elements?",
        options: [
          "Quality, Risk, and Stakeholders",
          "Time, Cost, and Scope",
          "Budget, Resources, and Communication",
          "Initiation, Planning, and Closure"
        ],
        answer: 1,
        explanation: "The Triple Constraint (also called the Iron Triangle) consists of Time (schedule), Cost (budget), and Scope (what is to be delivered). Changing any one of these affects the others."
      },
      {
        q: "The primary constraints of project management include: Time, Cost, Scope and also which additional three?",
        options: [
          "Revenue, Profit, and Growth",
          "Resources, Risk, and Quality",
          "Stakeholders, Budget, and Communication",
          "Leadership, Teamwork, and Innovation"
        ],
        answer: 1,
        explanation: "Beyond the Triple Constraint, modern project management recognizes Resources, Risk, and Quality as additional constraints that a project manager must balance."
      },
      {
        q: "Who are project stakeholders?",
        options: [
          "Only the project manager and sponsors",
          "Only external clients and customers",
          "Individuals and organizations who may have an interest in and be actively involved in the project",
          "Only the government and regulatory bodies"
        ],
        answer: 2,
        explanation: "Stakeholders are broadly defined as individuals and organizations who may have an interest in and may be actively involved in the project — including owners, sponsors, customers, contractors, and the public."
      },
      {
        q: "What is the correct order of the four phases in the Project Life Cycle?",
        options: [
          "Planning → Initiation → Execution → Closure",
          "Initiation → Planning → Execution & Controls → Closure",
          "Execution → Planning → Initiation → Closure",
          "Initiation → Execution → Planning → Closure"
        ],
        answer: 1,
        explanation: "The Project Life Cycle follows four sequential phases: Initiation, Planning, Execution & Controls, and Termination/Closure. Each phase must complete before the next one begins in traditional project management."
      },
      {
        q: "What is a project delay?",
        options: [
          "A project that finishes ahead of schedule",
          "A change in the project scope",
          "The inability of a project team to complete all stipulated activities within the estimated duration",
          "An increase in the project budget"
        ],
        answer: 2,
        explanation: "Project delay is defined as the inability of a project team to complete all stipulated activities within the estimated duration. This can be critical (affecting the end date) or non-critical."
      },
      {
        q: "Which of the following is an example of an 'excusable' project delay?",
        options: [
          "Poor resource planning by the project team",
          "A natural disaster (force majeure event)",
          "Failure to meet quality standards",
          "Scope creep due to poor requirements gathering"
        ],
        answer: 1,
        explanation: "An 'excusable' delay is one caused by events outside the contractor's control, such as force majeure events (natural calamities, acts of God, pandemics). In contrast, delays caused by poor planning are 'non-excusable'."
      },
      {
        q: "Which of the following best describes the role of a Project Manager?",
        options: [
          "Only monitoring budgets and costs",
          "Linking strategy, reporting progress, and managing stakeholder communications throughout the project",
          "Only resolving technical problems within the project",
          "Only managing the project team's personal development"
        ],
        answer: 1,
        explanation: "A project manager's role is broad: linking strategy and the project, reporting and receiving updates on the team's efforts, and sharing progress reports with sponsors and all stakeholders to keep everyone aligned."
      },
      {
        q: "When workers within a project team experience conflict due to individual differences and unhealthy competition, what type of conflict is this?",
        options: ["Technical conflict", "Communication conflict", "Group differences conflict", "Resource conflict"],
        answer: 2,
        explanation: "Group Differences conflict occurs when workers do not work efficiently together due to individual differences, personalities, or unhealthy competition. Resolution methods include Avoidance or Smoothing."
      },
      {
        q: "What is the first step in managing a project?",
        options: [
          "Setting up communication among stakeholders",
          "Balancing competing project constraints",
          "Identification of requirements/needs",
          "Managing stakeholder expectations"
        ],
        answer: 2,
        explanation: "The first step in project management is the Identification of requirements and needs. Only once needs are identified can the project manager address stakeholder concerns, set up communications, and plan execution accordingly."
      },
      {
        q: "Three interpersonal skills required of a Project Manager are:",
        options: [
          "Technical expertise, Budgeting, and Scheduling",
          "Leadership, Team building, and Motivational skills",
          "Financial analysis, Risk management, and Reporting",
          "Communication, Conflict avoidance, and Delegation"
        ],
        answer: 1,
        explanation: "Key interpersonal (soft) skills for a project manager include Leadership Skills, Team Building Skills, and Motivational Skills. These enable them to inspire, unite, and drive the project team towards the objective."
      }
    ]
  },

  advanced: {
    label: "Advanced Financial Reporting",
    icon: "📊",
    color: "#818cf8",
    questions: [
      // IFRS 10 Exemptions
      {
        q: "Under IFRS 10, a parent may be exempt from preparing consolidated financial statements if all conditions are met. Which of the following is NOT one of those conditions?",
        options: [
          "Its debt or equity instruments are not traded in a public market",
          "Its other owners do not object to the parent not presenting consolidated statements",
          "The parent has fewer than 50 employees",
          "Its ultimate parent produces IFRS-compliant consolidated financial statements"
        ],
        answer: 2,
        explanation: "The number of employees is irrelevant to consolidation exemptions under IFRS 10. The four conditions relate to: (1) Ownership consent, (2) Not publicly traded, (3) No regulatory filings for public markets, and (4) Parent compliance with IFRS."
      },
      {
        q: "Under IFRS 10, a parent's exemption from consolidation requires that its ultimate parent produces consolidated statements available for public use that comply with:",
        options: ["Local GAAP", "IFRS only", "IFRSs or an equivalent", "Any internationally recognized standard"],
        answer: 1,
        explanation: "IFRS 10 specifically requires the ultimate or intermediate parent to produce consolidated financial statements that comply with IFRSs (International Financial Reporting Standards). This ensures the group accounts are still produced at a higher level."
      },
      // Pole and South Consolidation
      {
        q: "Pole acquired 75% of South on 1 April 2023. The reporting year end is 30 September 2023. For how many months should South's results be consolidated into Pole's profit or loss?",
        options: ["12 months", "9 months", "3 months", "6 months"],
        answer: 3,
        explanation: "Pole acquired South on 1 April 2023. The year ends 30 September 2023, which is 6 months later. Under IFRS 10, only post-acquisition results are consolidated, so South's P&L items are included for 6 months (the x 6/12 time-apportionment)."
      },
      {
        q: "In the Pole & South consolidation, South sold goods to Pole at a transfer price of GH¢13,000 with a margin of 25%. One-fifth remains in inventory. What is the Provision for Unrealized Profit (PUP)?",
        options: ["GH¢2,600", "GH¢3,250", "GH¢650", "GH¢1,300"],
        answer: 2,
        explanation: "Step 1: Gross profit = GH¢13,000 x 25% = GH¢3,250. Step 2: Unsold fraction = 1/5. Step 3: PUP = GH¢3,250 x 1/5 = GH¢650. The PUP eliminates unrealized profit that is still sitting in the group's closing inventory."
      },
      {
        q: "In the Pole & South consolidation, the NCI is measured at fair value (GH¢3.6m). NCI's share of South's post-acquisition adjusted loss is 25% x (GH¢3,050). What is the closing NCI value?",
        options: ["GH¢3,600", "GH¢2,837.5", "GH¢762.5", "GH¢2,300"],
        answer: 1,
        explanation: "NCI at acquisition = GH¢3,600. Less: 25% x (GH¢3,050) post-acquisition adjusted net asset decrease = (GH¢762.5). Closing NCI = GH¢3,600 - GH¢762.5 = GH¢2,837.5."
      },
      {
        q: "The fair value of a contingent consideration DECREASED from GH¢1,800 at acquisition to GH¢1,500 at year-end. How is the change of GH¢300 treated in the consolidated financial statements?",
        options: [
          "As an adjustment to goodwill",
          "As a gain recognized in the consolidated profit or loss",
          "Taken directly to other comprehensive income",
          "Ignored as it is a contingent amount"
        ],
        answer: 1,
        explanation: "Under IFRS 3, subsequent changes in the fair value of contingent consideration classified as a liability are recognized in profit or loss. A decrease in the liability (from 1,800 to 1,500) means a gain of GH¢300 is recognized in the P&L."
      },
      {
        q: "In the Pole & South consolidation, Pole's investment in South involved a cash payment of GH¢1.50 per share for 75% of 12,000,000 shares. How many shares did Pole acquire and what was the total cash paid?",
        options: [
          "6,000,000 shares; GH¢9,000,000",
          "9,000,000 shares; GH¢13,500,000",
          "12,000,000 shares; GH¢18,000,000",
          "3,000,000 shares; GH¢4,500,000"
        ],
        answer: 1,
        explanation: "South has GH¢6,000 share capital at GH¢0.50 each = 12,000,000 shares total. Pole acquired 75% = 9,000,000 shares. Cash paid = 9,000,000 x GH¢1.50 = GH¢13,500,000 (GH¢13.5m)."
      },
      // Goodwill
      {
        q: "In the Pole & South consolidation, total consideration was GH¢15,300 and fair value of NCI was GH¢3,600. Fair value of net assets at acquisition was GH¢22,300. What is the result?",
        options: [
          "Goodwill of GH¢3,400",
          "A gain on bargain purchase of GH¢3,400",
          "Goodwill of GH¢18,900",
          "No goodwill or gain — the figures balance"
        ],
        answer: 1,
        explanation: "Total value of entity = GH¢15,300 + GH¢3,600 = GH¢18,900. Less FV of net assets = (GH¢22,300). Negative difference = (GH¢3,400). A negative goodwill is a 'Bargain Purchase Gain', recognized immediately in the consolidated P&L."
      },
      {
        q: "At acquisition, South's property had a fair value GH¢2m above carrying amount with a remaining life of 10 years. All depreciation is in cost of sales. What is the additional depreciation charge in the post-acquisition 6-month period?",
        options: ["GH¢200", "GH¢400", "GH¢100", "GH¢2,000"],
        answer: 2,
        explanation: "Annual additional depreciation = GH¢2,000 / 10 years = GH¢200 per year. For the post-acquisition period of 6 months: GH¢200 x 6/12 = GH¢100. This GH¢100 increases the group's cost of sales and reduces the net assets of South."
      },
      // OGUAA/Prestige concepts
      {
        q: "OGUAA Ltd acquired 60% of PEDU Ltd. The policy is to measure NCI at its proportionate share of the fair value of the subsidiary's net assets. This means NCI at acquisition is measured using which method?",
        options: [
          "Fair value method (full goodwill method)",
          "Proportionate share method (partial goodwill method)",
          "Book value method",
          "Market capitalization method"
        ],
        answer: 1,
        explanation: "IFRS 3 allows two methods: (1) Fair Value method, where NCI is measured at its fair value (resulting in full goodwill), OR (2) Proportionate Share method, where NCI is measured as its percentage of the subsidiary's identifiable net assets (resulting in partial goodwill). OGUAA uses the proportionate share method."
      },
      {
        q: "When OGUAA acquired 60% of PEDU Ltd, the fair value of identifiable net assets was GH¢3,900m. The NCI is measured at proportionate share. What is the NCI value at acquisition?",
        options: ["GH¢1,560m", "GH¢2,340m", "GH¢2,500m", "GH¢3,900m"],
        answer: 0,
        explanation: "NCI = 40% (non-controlling share) x GH¢3,900m (fair value of net assets) = GH¢1,560m. Note: OGUAA acquired 60%, so NCI = 100% - 60% = 40%."
      },
      {
        q: "Under IFRS 9, if an entity irrevocably elects to account for equity investments at FVOCI (Fair Value through Other Comprehensive Income), where are changes in fair value recognized?",
        options: [
          "In retained earnings directly",
          "In profit or loss",
          "In other comprehensive income (OCI) — never recycled to P&L",
          "As an adjustment to the cost of the investment"
        ],
        answer: 2,
        explanation: "Under IFRS 9, the irrevocable FVOCI election for equity instruments means fair value gains and losses are always recognized in OCI and are NEVER recycled (reclassified) to profit or loss, even on disposal. This contrasts with debt instruments at FVOCI where gains ARE recycled."
      }
    ]
  }
};
