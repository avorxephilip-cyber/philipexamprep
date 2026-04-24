const QUIZ_DATA = {

  // ─────────────────────────────────────────────
  // 1. AUDITING AND INTERNAL REVIEW
  // ─────────────────────────────────────────────
  audit: {
    label: "Auditing & Internal Review",
    icon: "🔍",
    color: "#10b981",
    questions: [
      { q: "Which assertion confirms that all recorded assets actually exist at the period end?", options: ["Completeness","Existence","Valuation","Rights and Obligations"], answer: 1, explanation: "The Existence assertion verifies that assets, liabilities and equity interests exist at the reporting date." },
      { q: "Cutoff tests — inspecting the last Goods Received Notes of the year — primarily address which assertion?", options: ["Existence","Valuation","Completeness","Presentation"], answer: 2, explanation: "Completeness ensures all transactions that should be recorded have been recorded, particularly those near year-end." },
      { q: "Inspecting purchase invoices to verify legal ownership of inventory tests which assertion?", options: ["Valuation","Rights and Obligations","Accuracy","Completeness"], answer: 1, explanation: "Rights and Obligations confirms the entity holds or controls rights to its assets — verified by ownership documents." },
      { q: "Comparing inventory unit cost to NRV by checking post-year-end sales prices tests which assertion?", options: ["Completeness","Existence","Valuation and Allocation","Occurrence"], answer: 2, explanation: "IAS 2 requires inventory at the lower of cost and NRV — verified by the Valuation and Allocation assertion." },
      { q: "What is agency theory in the context of auditing?", options: ["Management auditing themselves","The relationship between principals (owners) and agents (managers) that creates demand for independent verification","Government regulation of accounting","Tax compliance monitoring"], answer: 1, explanation: "Agency theory states that because owners (principals) delegate management to agents (managers), a conflict of interest arises. External auditors provide independent verification that agents have acted in the owners' interests." },
      { q: "Which of the following is NOT a responsibility of an audit committee?", options: ["Overseeing the external audit process","Reviewing financial reporting","Preparing the company's management accounts","Monitoring internal controls"], answer: 2, explanation: "An audit committee oversees — it does not prepare — management accounts. Preparation is management's responsibility." },
      { q: "Which type of audit focuses on efficiency and effectiveness of operations?", options: ["Financial audit","Compliance audit","Operational/Performance audit","Forensic audit"], answer: 2, explanation: "An operational or performance audit (value for money audit) evaluates whether resources are used efficiently and effectively." },
      { q: "What is the key distinction between internal and external audit?", options: ["Internal auditors are paid more","External auditors are employees of the company","External auditors are independent of the entity and report to shareholders; internal auditors are employees","Internal auditors focus only on fraud"], answer: 2, explanation: "External auditors are independent third parties appointed by shareholders. Internal auditors are employed by the entity and report to management or the audit committee." },
      { q: "A former finance director joins the audit firm and is proposed to review that client's audit. This creates which threat?", options: ["Self-interest","Self-review","Familiarity","Intimidation"], answer: 2, explanation: "A Familiarity Threat arises from a close relationship — a former employee of the client joining the firm and reviewing that client's work is a classic example." },
      { q: "Preparing financial statements and then auditing them creates which ethical threat?", options: ["Self-review","Advocacy","Intimidation","Familiarity"], answer: 0, explanation: "A Self-Review Threat occurs when auditors review their own work — preparing then auditing financial statements is a textbook case." },
      { q: "A client offering a luxury hotel weekend to the audit team is primarily which threat?", options: ["Familiarity","Advocacy","Self-interest","Intimidation"], answer: 2, explanation: "A Self-Interest Threat arises when the auditor or firm might benefit personally. Gifts compromise objectivity." },
      { q: "ISA 570 Going Concern requires auditors to review cash flow forecasts for at least how long from year-end?", options: ["3 months","6 months","12 months","24 months"], answer: 2, explanation: "ISA 570 requires auditors to cover a period of at least twelve months from the balance sheet date when assessing going concern." },
      { q: "Which audit procedure involves looking at a process being performed by others?", options: ["Inspection","Observation","Inquiry","Recalculation"], answer: 1, explanation: "Observation involves the auditor watching a process — such as watching client staff count inventory." },
      { q: "Manually re-computing the depreciation charge is which type of audit procedure?", options: ["Inquiry","Analytical procedures","Recalculation","Inspection"], answer: 2, explanation: "Recalculation involves checking mathematical accuracy of documents or records by independently computing them." },
      { q: "A debtors confirmation sent directly to customers to verify balances is called a:", options: ["Test of control","Substantive procedure — circularisation","Analytical procedure","Walk-through test"], answer: 1, explanation: "A debtors' circularisation (external confirmation) is a substantive procedure where auditors contact customers directly to verify balances." },
      { q: "What is the primary purpose of a Letter of Representation?", options: ["Replace all other audit evidence","Management formally acknowledges responsibility for the financial statements","Set the audit fee","Confirm auditor independence"], answer: 1, explanation: "Per ISA 580, a Written Representation is a formal letter from management acknowledging its responsibility for the financial statements and confirming specific representations." },
      { q: "Before accepting a new audit client, the most critical step is:", options: ["Agree the audit fee","Issue a draft audit report","Obtain professional clearance from the predecessor auditor","Start fieldwork immediately"], answer: 2, explanation: "Professional clearance involves contacting the outgoing auditor to check for professional reasons (integrity concerns, unpaid fees) that may prevent acceptance." },
      { q: "Which sampling method gives every item an equal chance of selection?", options: ["Haphazard sampling","Systematic sampling","Random sampling","Judgement sampling"], answer: 2, explanation: "Random sampling uses a random number table or generator so that every item in the population has an equal probability of selection." },
      { q: "Sampling risk in auditing means:", options: ["The auditor missed a material misstatement entirely","The risk that the auditor's conclusion from the sample differs from the conclusion if the entire population were tested","The cost of sampling is too high","The client refuses to provide sample items"], answer: 1, explanation: "Sampling risk arises because the auditor examines less than 100% of the population — the sample may not be representative, leading to incorrect conclusions." },
      { q: "Which of the following would be considered external audit evidence?", options: ["Sales invoices raised by the client","Internal memos","Bank statements received from the bank","Management's written representations"], answer: 2, explanation: "Bank statements are received from a third party (the bank) and so are external evidence — considered more reliable than internally generated documents." },
      { q: "In which audit phase are analytical procedures used to form an overall view of whether the financial statements are consistent with the auditor's understanding?", options: ["Planning only","Fieldwork/testing only","Completion/Final review","Acceptance phase"], answer: 2, explanation: "Analytical procedures are used in all three phases, but the completion phase specifically uses them to form an overall conclusion on whether the financial statements are consistent as a whole." },
      { q: "A weakness where one accountant calculates depreciation with no independent review is best described as:", options: ["Segregation of duties failure","Revenue recognition issue","Valuation policy error","Going concern indicator"], answer: 0, explanation: "Lack of segregation of duties means one person controls the entire process, making errors or fraud undetectable." },
      { q: "Which procedure would best detect fictitious suppliers in the purchase ledger?", options: ["Review of cash receipts","Comparison of supplier details against a verified master file","Analysis of sales margins","Inspection of customer contracts"], answer: 1, explanation: "Comparing supplier details (names, bank accounts, addresses) against an independently verified master file detects suppliers that do not have legitimate business identities." },
      { q: "What does ISA 530 govern?", options: ["Audit documentation","Audit sampling","Going concern","Written representations"], answer: 1, explanation: "ISA 530 provides guidance on audit sampling — the process of selecting and evaluating a sample from a population to draw conclusions about the whole population." },
      { q: "The risk that the auditor issues an incorrect opinion BECAUSE of using a sample is:", options: ["Non-sampling risk","Inherent risk","Sampling risk","Detection risk"], answer: 2, explanation: "Sampling risk is the risk that the auditor's conclusion based on the sample would differ from the conclusion if the entire population were tested." }
    ]
  },

  // ─────────────────────────────────────────────
  // 2. ADVANCED ACCOUNTING
  // ─────────────────────────────────────────────
  advanced: {
    label: "Advanced Accounting",
    icon: "📊",
    color: "#818cf8",
    questions: [
      { q: "Under IFRS 10, which element is NOT required to establish that an investor controls an investee?", options: ["Power over the investee through existing rights.","Exposure, or rights, to variable returns from its involvement.","The power to participate in the financial and operating policy decisions of the investee without having control.","The ability to use its power to affect the amount of the investor's returns."], answer: 2, explanation: "This describes significant influence, which is the threshold for an associate under IAS 28, whereas control requires the actual ability to direct relevant activities.", preamble: "Consider the distinction between controlling an entity and merely having significant influence over its policies." },
      { q: "A parent is exempt from preparing consolidated financial statements under IFRS 10 if it meets specific conditions. Which of the following is one of those conditions?", options: ["The parent is a subsidiary, but its other owners were not informed about the decision to omit consolidated statements.","Its ultimate or any intermediate parent produces consolidated financial statements available for public use that comply with IFRSs.","The parent is in the process of filing its financial statements with a securities commission for public issuance.","The parent's debt or equity instruments are traded in a domestic stock exchange."], answer: 1, explanation: "This is a key requirement to ensure that consolidated information for the group is still accessible to the public even if a sub-parent doesn't prepare its own.", preamble: "Focus on the availability of a 'higher-level' set of group accounts." },
      { q: "When applying the acquisition method under IFRS 3, how should an acquirer treat acquisition-related costs like legal and accounting fees?", options: ["Deduct them from equity if they relate to the issuance of debt securities.","Capitalize them as part of the cost of the investment in the separate financial statements only.","Include them as part of the consideration transferred to determine goodwill.","Recognize them as an expense in the periods in which the costs are incurred."], answer: 3, explanation: "Acquisition-related costs are not considered part of the fair value exchange for the business and must be expensed as operating costs.", preamble: "Think about whether these costs add long-term value to the acquired business itself." },
      { q: "How is goodwill measured in a business combination according to IFRS 3?", options: ["The difference between the purchase price and the book value of the subsidiary's equity.","The excess of (Consideration + NCI + Previously held interest) over the fair value of identifiable net assets acquired.","The consideration transferred minus the non-controlling interest's share of net assets.","The total value of the subsidiary's intangible assets that were not previously recognized."], answer: 1, explanation: "Goodwill is the residual amount after comparing the total value given (including the value of NCI) against the fair value of the net assets received.", preamble: "It is the excess of the 'price paid' for the whole entity over the fair value of its 'identifiable' parts." },
      { q: "If the initial accounting for a business combination is incomplete by the end of the reporting period, IFRS 3 allows for 'provisional amounts.' What is the maximum duration of the 'measurement period' to adjust these amounts?", options: ["One year from the acquisition date.","The end of the following financial year.","Indefinitely, until all fair values are finalized.","Three months from the reporting date."], answer: 0, explanation: "This period allows the acquirer to obtain necessary information about facts existing at the acquisition date, but it is capped at 12 months.", preamble: "This timeframe is exactly twelve months long." },
      { q: "Under IFRS 3, how should a 'Bargain Purchase' (negative goodwill) be recognized?", options: ["As an adjustment to the parent's retained earnings at the start of the period.","As a gain in profit or loss on the acquisition date after reassessing the identification and measurement of all items.","By reducing the fair values of non-current assets proportionately until the excess is eliminated.","As a deferred credit in the statement of financial position to be amortized over its useful life."], answer: 1, explanation: "A bargain purchase represents an immediate gain that must be recognized in the income statement after a thorough review to ensure values are correct.", preamble: "Consider the impact of a 'lucky' purchase on the current year's performance." },
      { q: "In the context of IAS 28, what is the 'equity method' of accounting?", options: ["Combining the assets, liabilities, income, and expenses of the investor and investee line-by-line.","The investment is initially recognized at cost and adjusted thereafter for the investor's share of the post-acquisition change in the investee's net assets.","Recording the investment at cost and only recognizing income when dividends are received.","Measuring the investment at fair value through other comprehensive income at each reporting date."], answer: 1, explanation: "This method reflects the economic reality of the investor's interest by recognizing their share of the investee's profits and losses.", preamble: "Think about how an investor tracks their 'piece of the pie' as the investee grows." },
      { q: "According to IFRS 11, what is the primary characteristic of a 'Joint Operation'?", options: ["The arrangement must always be structured through a separate legal vehicle.","Parties have rights to the net assets of the arrangement only.","A single party has the power to direct all relevant activities without the consent of others.","Parties have rights to the assets and obligations for the liabilities relating to the arrangement."], answer: 3, explanation: "In a joint operation, the operators have a direct interest in the individual assets and liabilities rather than just a share of the net result.", preamble: "Look for direct ownership of resources and responsibility for debts." },
      { q: "How should a joint operator account for its interest in a joint operation in its financial statements?", options: ["Recognize its own assets, liabilities, revenues, and expenses, including its share of those held or incurred jointly.","Only recognize its share of the net profit as a single line item in the income statement.","Apply the equity method as described in IAS 28.","Consolidate the operation as a subsidiary if it holds more than $50\\%$ of the voting rights."], answer: 0, explanation: "A joint operator reports its specific share of each financial statement line item based on the contractual agreement.", preamble: "The operator accounts for its share of the 'pieces' of the operation, not just the 'bottom line'." },
      { q: "Under IFRS 8, which of the following is NOT one of the $10\\%$ quantitative thresholds used to identify reportable segments?", options: ["Reported revenue (external and intersegment) is $10\\%$ or more of the combined revenue of all segments.","The absolute amount of reported profit or loss is $10\\%$ or more of the greater of combined profit or combined loss.","The segment's assets are $10\\%$ or more of the combined assets of all operating segments.","The segment's number of employees is $10\\%$ or more of the combined total of all operating segments."], answer: 3, explanation: "Employee count is not a quantitative threshold for reportability under IFRS 8; thresholds are based on revenue, profit/loss, and assets.", preamble: "Thresholds are financial measures like income, results, and resources." },
      { q: "IFRS 8 requires that the total external revenue of reportable segments must constitute at least what percentage of the entity's total external revenue?", options: ["$10\\%$","$50\\%$","$75\\%$","$90\\%$"], answer: 2, explanation: "This rule ensures that the segments identified provide a comprehensive view of the entity's overall business.", preamble: "This threshold represents three-quarters of the total." },
      { q: "When eliminating intra-group sales in the consolidated statement of comprehensive income, how is the adjustment made?", options: ["Deduct the profit element from Revenue and the cost element from Cost of Sales.","Only deduct the unrealized profit from the ending inventory balance.","Add the intra-group sales to Revenue and deduct the cost from Cost of Sales.","Deduct the full value of the intra-group sales from both Revenue and Cost of Sales."], answer: 3, explanation: "This removes the 'double counting' of turnover and expenses within the group as if the transaction never happened.", preamble: "The group should only show sales made to outside customers." },
      { q: "A Provision for Unrealized Profit (PUP) is necessary when a group company sells inventory to another group company and those goods remain in stock. Where is this adjustment typically made in the consolidated statement of financial position?", options: ["Deducted from the consolidated inventory and deducted from the group retained earnings (if the parent sold).","Added to consolidated inventory to reflect the higher price paid by the purchasing company.","Only adjusted in the non-controlling interest's share of equity.","Ignored as it is a realized profit for the individual company that made the sale."], answer: 0, explanation: "This eliminates the 'fake' profit from the group's perspective and brings the inventory back down to its original cost to the group.", preamble: "Think about how to bring the 'inflated' asset value back to its original cost." },
      { q: "Under IFRS 3, contingent consideration that is classified as a liability must be:", options: ["Remeasured with changes recognized directly in other comprehensive income.","Amortized over the period until the contingency is resolved.","Recognized at the original acquisition-date fair value and never adjusted.","Remeasured to fair value at each reporting date with changes recognized in profit or loss."], answer: 3, explanation: "Liability-classified contingent consideration is a financial instrument that must be kept at fair value through the income statement.", preamble: "It is treated as a financial liability where gains or losses go to the bottom line." },
      { q: "Which of the following is a specific indicator of 'significant influence' under IAS 28?", options: ["The power to govern the financial and operating policies of the entity.","Holding $50\\%$ or more of the voting power of the investee.","Participation in the policy-making processes, including participation in decisions about dividends.","Having the ability to affect returns through power over relevant activities."], answer: 2, explanation: "Being involved in high-level strategic decisions is a clear sign that the investor has significant influence despite not having full control.", preamble: "It involves having a seat at the table without being the one to run the whole show." },
      { q: "If a parent's reporting date is 31 December and its subsidiary's reporting date is 30 September, what does IFRS 10 require for consolidation?", options: ["The subsidiary must prepare additional financial information as of 31 December unless it is impracticable.","Consolidation is prohibited because the dates differ by more than one month.","The parent consolidates using the 30 September accounts with no further adjustments.","The parent must change its reporting date to match the subsidiary's date."], answer: 0, explanation: "Ideally, all group entities should use the same date; if not, the subsidiary provides interim data for the group's year-end.", preamble: "The goal is to align the financial data to the same point in time." },
      { q: "In a consolidation of a statement of comprehensive income, what is the treatment for a subsidiary acquired halfway through the financial year?", options: ["Include the subsidiary's results for the full twelve-month period.","Consolidate the subsidiary starting from the beginning of the next financial year.","Include only the subsidiary's income and expenses from the date of acquisition onwards.","Only include the subsidiary's net profit for the year as a single line item."], answer: 2, explanation: "The group only has rights to the subsidiary's results for the period it actually controlled the entity.", preamble: "The group's performance only includes the time it 'owned' the subsidiary." },
      { q: "Under the new structure proposed in IFRS 18 (referencing the source material), into which categories is profit or loss classified?", options: ["Trading, Administrative, and Financial.","Revenue, Gross Profit, and Net Profit.","Operating, Investing, Financing, Income Taxes, and Discontinued Operations.","Core Operations and Non-Core Operations only."], answer: 2, explanation: "IFRS 18 aims to standardize the income statement structure to improve comparability across entities.", preamble: "It aligns closely with the categories found in a statement of cash flows." },
      { q: "In a joint operation, how does a joint operator recognize its share of revenue from the sale of the output?", options: ["Only when the joint arrangement is liquidated.","By recognizing $100\\%$ of the revenue and deducting the other parties' shares as an expense.","As a dividend received from the joint arrangement vehicle.","Based on its specific share of the output arising from the joint operation."], answer: 3, explanation: "Joint operators recognize revenue based on their contractual entitlement to the output produced.", preamble: "They report what they are personally entitled to according to the contract." },
      { q: "Which of the following would NOT be considered a 'related party' of a reporting entity according to IAS 24?", options: ["A member of the key management personnel of the reporting entity or its parent.","A person who has control or joint control over the reporting entity.","An entity that simply shares a single common director with the reporting entity.","An associate or joint venture of the reporting entity."], answer: 2, explanation: "Sharing a director is not enough to create a related party relationship unless that director has control or significant influence over both entities.", preamble: "Relatedness usually requires more than just a coincidental overlapping personnel connection." },
      { q: "Under IFRS 3, if an acquirer achieves a business combination in stages (a step acquisition), what must it do with its previously held equity interest?", options: ["Keep it at its original cost to avoid recognizing unrealized gains.","Move it directly to the non-controlling interest balance.","Deduct it directly from the total consideration transferred.","Remeasure it to acquisition-date fair value and recognize any gain or loss in profit or loss."], answer: 3, explanation: "This 'disposes' of the old investment at its current value before accounting for the new, controlled entity.", preamble: "The 'old' stake is treated as if it were sold and repurchased at the current market price." },
      { q: "Which of the following is one of the aggregation criteria that must be met to combine two operating segments into one reportable segment under IFRS 8?", options: ["The segments must have similar economic characteristics, such as similar long-term average gross margins.","One segment must represent at least $75\\%$ of the other segment's revenue.","The segments must operate in the same geographic country.","The segments must be overseen by two different chief operating decision makers."], answer: 0, explanation: "Aggregation is only permitted when segments are economically similar and share multiple specific characteristics.", preamble: "Think about whether the segments 'look and feel' like the same type of business." },
      { q: "How should 'potential voting rights' (like share options or convertible instruments) be treated when assessing control under IFRS 10?", options: ["Always included in the calculation of the current ownership percentage.","Ignored until they are actually converted into ordinary shares.","Considered only if they are substantive and currently exercisable.","Considered only if they are held by the non-controlling interest to protect their rights."], answer: 2, explanation: "Potential rights only give 'power' if the holder has the practical ability to exercise them when decisions need to be made.", preamble: "Assess whether the holder can actually use them to make a difference right now." },
      { q: "What is the primary difference between 'wholly-owned' and 'partially-owned' subsidiaries in the consolidated statement of financial position?", options: ["Partially-owned subsidiaries require the recognition of a non-controlling interest (NCI) in the equity section.","Wholly-owned subsidiaries do not have their assets and liabilities recognized at fair value.","Intra-group balances are only eliminated for wholly-owned subsidiaries.","Only wholly-owned subsidiaries are consolidated line-by-line."], answer: 0, explanation: "The NCI represents the portion of the subsidiary's equity that is not owned by the parent company.", preamble: "Consider the presence of 'other' owners who are not part of the parent group." },
      { q: "According to IAS 28, how are 'upstream' transactions between an associate and an investor handled?", options: ["Ignore the transaction as associates are independent legal entities.","Treat the transaction as an intra-group sale and eliminate the revenue and cost of sales line-by-line.","Eliminate the entire profit of the associate, regardless of the investor's ownership percentage.","Eliminate the investor's share in the associate's profits resulting from the transaction."], answer: 3, explanation: "Profits on sales from an associate to an investor are only considered realized from the group's perspective when the asset is sold to an outside party.", preamble: "An investor shouldn't report a profit on their 'own' share of a purchase from their associate." },
      { q: "How are distributions (dividends) received from an associate accounted for under the equity method?", options: ["They are recognized as dividend income in the consolidated statement of comprehensive income.","They increase the carrying amount of the investment to reflect the cash received.","They reduce the carrying amount of the investment in the associate.","They are ignored in the consolidated accounts but recognized in separate accounts at cost."], answer: 2, explanation: "Since the investor has already recognized their share of the associate's profit as it was earned, the dividend is seen as a return of that investment.", preamble: "The dividend is basically the associate 'paying out' a part of the value the investor already recorded." },
      { q: "What is the IFRS 3 recognition principle for contingent liabilities assumed in a business combination?", options: ["Recognize them only when the contingency is actually resolved and the amount is certain.","Recognize them at fair value if they represent a present obligation from past events and can be measured reliably, regardless of probability.","Only recognize them if an outflow of resources is probable (more than $50\\%$).","Only disclose them in the notes to the financial statements."], answer: 1, explanation: "IFRS 3 has a lower threshold than IAS 37 for recognizing contingent liabilities in a business combination to ensure all risks are reflected.", preamble: "Consider how the purchase price would be lower to account for 'maybe' having to pay a future debt." },
      { q: "When an entity's interest in an associate equals or exceeds its 'interest in the associate' due to losses, what should the investor do according to IAS 28?", options: ["Continue to recognize losses, creating a negative investment (liability) balance.","Discontinue recognizing its share of further losses unless it has incurred legal or constructive obligations.","Remeasure the remaining interest at fair value under IFRS 9.","Immediately write off the investment and consolidate the associate line-by-line."], answer: 1, explanation: "The investor's loss is generally limited to their investment amount unless they've guaranteed the associate's debts.", preamble: "The investor stops 'taking the hit' once their investment value hits rock bottom." },
      { q: "Under IFRS 10, control exists when an investor has which three elements?", options: ["Majority shares, voting rights, and dividends","Power over the investee, exposure to variable returns, and ability to use power to affect returns","Board representation, auditing rights, and profit sharing","Ownership above 50%, veto rights, and liquidation preference"], answer: 1, explanation: "IFRS 10 defines control through three elements: (1) Power over the investee, (2) Exposure or rights to variable returns, and (3) The ability to use power to affect returns." },
      { q: "Under IFRS 10, which condition is NOT required for a parent to be exemption from preparing consolidated financial statements?", options: ["Its debt/equity instruments are not publicly traded","The parent has fewer than 200 employees","Other owners consent to non-consolidation","The ultimate parent produces IFRS-compliant consolidated statements"], answer: 1, explanation: "Employee headcount is irrelevant to consolidation exemptions under IFRS 10. The four conditions focus on ownership, public trading status, regulatory filings, and parent compliance." },
      { q: "Under IFRS 3, a Gain on Bargain Purchase arises when:", options: ["Goodwill exceeds fair value of net assets","Consideration paid is less than the fair value of identifiable net assets acquired","NCI is measured at full fair value","The subsidiary has a deficit in retained earnings"], answer: 1, explanation: "A Gain on Bargain Purchase (negative goodwill) occurs when the fair value of identifiable net assets acquired exceeds the total consideration transferred plus NCI. It is recognised immediately in Profit or Loss." },
      { q: "How is a Gain on Bargain Purchase treated in consolidated financial statements?", options: ["Deducted from goodwill","Recognised directly in equity","Recognised immediately in consolidated profit or loss","Amortised over 5 years"], answer: 2, explanation: "Under IFRS 3, a gain on bargain purchase is recognised immediately in profit or loss in the period of acquisition after re-assessment of all fair values." },
      { q: "Under the proportionate share method (partial goodwill), NCI at acquisition is measured as:", options: ["Fair value of NCI shares in the market","NCI percentage × fair value of the subsidiary's identifiable net assets","NCI percentage × book value of the subsidiary's net assets","A fixed amount set by management"], answer: 1, explanation: "The proportionate share (partial goodwill) method measures NCI as the NCI's percentage ownership multiplied by the fair value of the subsidiary's identifiable net assets — resulting in goodwill attributable to the parent only." },
      { q: "Under the full goodwill (fair value) method, NCI at acquisition is measured at:", options: ["Its proportionate share of net assets","The parent's cost of investment","The fair value of the NCI shares","Book value of the NCI shares"], answer: 2, explanation: "Under the full goodwill method, NCI is measured at its own fair value — this results in goodwill being recognised for both the parent's and the NCI's share." },
      { q: "An unrealized profit on goods sold from a subsidiary to a parent (upstream sale) remaining in the parent's closing inventory should be:", options: ["Added to consolidated retained earnings","Eliminated in full with the adjustment shared between parent and NCI","Ignored as it is between group companies","Recognised only for the parent's share"], answer: 1, explanation: "For upstream sales (subsidiary to parent), the full PUP is eliminated. The adjustment reduces retained earnings shared between the parent and NCI in proportion to their ownership." },
      { q: "An unrealized profit on goods sold from a parent to a subsidiary (downstream sale) is:", options: ["Shared between parent and NCI","Borne entirely by the parent's retained earnings","Borne entirely by the NCI","Added to consolidated goodwill"], answer: 1, explanation: "For downstream sales (parent to subsidiary), the full PUP is eliminated, and the adjustment is borne entirely by the parent's retained earnings since the profit originated from the parent." },
      { q: "A Provision for Unrealized Profit (PUP) arises when:", options: ["A group company sells goods to an external customer and the goods are unsold","A group company sells goods to another group company and the goods remain unsold within the group at year-end","A subsidiary declares a dividend","A parent writes down an asset"], answer: 1, explanation: "The PUP eliminates profit that has not yet been realized through an external sale. Goods sold between group companies but remaining in inventory at year-end must have their intra-group profit eliminated." },
      { q: "What is the formula for Goodwill under IFRS 3?", options: ["FV of net assets − Consideration","Consideration paid + NCI at acquisition − FV of identifiable net assets acquired","Share capital + Retained earnings","Book value of assets − Liabilities"], answer: 1, explanation: "Goodwill = Consideration transferred + NCI at acquisition (±Fair value of previously held interest) − Fair value of identifiable net assets acquired." },
      { q: "Goodwill is reviewed for impairment under IFRS:", options: ["Systematically over 10 years","Annually or when there is an indicator of impairment","Every 5 years","Only on disposal of the subsidiary"], answer: 1, explanation: "Under IAS 36 and IFRS 3, goodwill is not amortised but is tested for impairment at least annually or whenever there is an indicator of impairment." },
      { q: "Under IAS 28, an associate is an entity over which the investor has:", options: ["Control","Joint control","Significant influence (typically 20%–50% ownership)","No influence"], answer: 2, explanation: "IAS 28 defines an associate as an entity over which the investor has significant influence — presumed when holding 20%–50% of voting power." },
      { q: "Associates are accounted for using which method in consolidated financial statements?", options: ["Full consolidation","Proportionate consolidation","Equity method","Cost method"], answer: 2, explanation: "Under IAS 28, associates are accounted for using the equity method — the investment is initially recognised at cost and adjusted for the investor's share of post-acquisition profits/losses." },
      { q: "Under IFRS 9, if an entity irrevocably elects FVOCI for equity investments, gains and losses are:", options: ["Always recycled to P&L on disposal","Recognised in P&L during the year","Recognised in OCI and never recycled to P&L","Taken directly to retained earnings"], answer: 2, explanation: "The irrevocable FVOCI election for equity instruments under IFRS 9 means fair value changes go to OCI and are permanently locked there — they are NOT recycled to P&L even on disposal." },
      { q: "A subsidiary is acquired on 1 July during a financial year ending 31 December. For how many months are the subsidiary's results consolidated?", options: ["12 months","9 months","6 months","3 months"], answer: 2, explanation: "Only post-acquisition results are consolidated. From 1 July to 31 December is 6 months, so the subsidiary's revenues, expenses etc. are time-apportioned at × 6/12." },
      { q: "When the fair value of a subsidiary's net assets exceeds their book value at acquisition, the difference is called a:", options: ["Goodwill","Fair value adjustment","Retained earnings surplus","Share premium"], answer: 1, explanation: "A fair value adjustment uplifts the carrying value of specific assets (e.g. property, plant) to their fair value at the date of acquisition. This must then be depreciated/amortised in post-acquisition periods." },
      { q: "A fair value adjustment to property of GH¢2m with a 10-year remaining life creates additional depreciation of:", options: ["GH¢200,000 per year","GH¢2,000,000 per year","GH¢20,000 per year","No depreciation — land does not depreciate"], answer: 0, explanation: "Annual additional depreciation = GH¢2,000,000 ÷ 10 years = GH¢200,000. This increases post-acquisition cost of sales/depreciation and reduces the subsidiary's net assets for consolidation purposes." },
      { q: "A contingent consideration classified as a liability must subsequently be measured at:", options: ["Cost","Fair value, with changes in P&L","Amortised cost","Nominal value"], answer: 1, explanation: "Under IFRS 3, contingent consideration classified as a financial liability is remeasured to fair value at each reporting date, with changes recognised in profit or loss." },
      { q: "Under IFRS 10, a Special Purpose Entity (SPE) should be consolidated if:", options: ["It has a majority shareholding","The reporting entity controls it regardless of legal ownership percentage","It is jointly owned","It is a public company"], answer: 1, explanation: "Control under IFRS 10 is based on substance, not legal form. An entity controls an SPE if it has power over it, exposure to variable returns, and uses its power to affect those returns — regardless of the equity percentage held." },
      { q: "Post-acquisition retained earnings attributable to non-controlling interest are included in:", options: ["Consolidated share capital","Goodwill calculation","NCI within the equity section of the consolidated SFP","Group retained earnings"], answer: 2, explanation: "NCI in the consolidated SFP includes NCI at acquisition plus NCI's share of all post-acquisition changes in equity, presented as a separate component within total equity." },
      { q: "Which IFRS standard governs the preparation of Consolidated Financial Statements?", options: ["IAS 27","IFRS 3","IFRS 10","IAS 28"], answer: 2, explanation: "IFRS 10 Consolidated Financial Statements provides the definition of control and the requirements for consolidation." },
      { q: "IFRS 3 governs:", options: ["Consolidated financial statements","Business combinations — the accounting at acquisition date","Associates and joint ventures","Financial instrument classification"], answer: 1, explanation: "IFRS 3 Business Combinations provides the acquisition method for accounting for business combinations, including goodwill, fair value of assets and liabilities, and NCI measurement." }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. CORPORATE FINANCIAL ANALYSIS
  // ─────────────────────────────────────────────
  corporate: {
    label: "Corporate Financial Analysis",
    icon: "📈",
    color: "#f472b6",
    questions: [
      {
    "q": "According to the Altman Z-score model for public companies, which formula represents the variable $X_{1}$ used to measure liquidity?",
    "options": [
      "$X_{1} = \\frac{\\text{Working Capital}}{\\text{Total Assets}}$",
      "$X_{1} = \\frac{\\text{Sales}}{\\text{Total Assets}}$",
      "$X_{1} = \\frac{\\text{Retained Earnings}}{\\text{Total Assets}}$",
      "$X_{1} = \\frac{\\text{Current Assets}}{\\text{Total Liabilities}}$"
    ],
    "answer": 0,
    "explanation": "This ratio compares the net liquid assets of the firm to its total capitalization to assess short-term solvency.",
    "preamble": "Consider the relationship between net current assets and the entire asset base of the firm."
  },
  {
    "q": "In the DuPont Analysis, the Return on Equity ($ROE$) is decomposed into which three specific components?",
    "options": [
      "Profit Margin × Asset Turnover × Equity Multiplier",
      "Operating Income × Financial Leverage × Tax Rate",
      "Gross Margin × Inventory Turnover × Debt Ratio",
      "Net Profit × Sales × Total Assets"
    ],
    "answer": 0,
    "explanation": "This identity shows how operational efficiency, asset use, and financial leverage combine to generate returns for shareholders.",
    "preamble": "The formula involves a profitability measure, an efficiency measure, and a leverage measure."
  },
  {
    "q": "Which formula is used to calculate the Degree of Financial Leverage ($DFL$)?",
    "options": [
      "$DFL = \\frac{\\text{Total Debt}}{\\text{Total Equity}}$",
      "$DFL = \\frac{EBIT}{EBT}$",
      "$DFL = \\frac{\\text{Sales}}{EBIT}$",
      "$DFL = \\frac{\\text{Contribution}}{EBIT}$"
    ],
    "answer": 1,
    "explanation": "This ratio measures the responsiveness of earnings per share to changes in operating income due to fixed interest charges.",
    "preamble": "Think about the relationship between operating profit and earnings before taxes."
  },
  {
    "q": "How is the Economic Value Added ($EVA$) calculated using Net Operating Profit After Tax ($NOPAT$)?",
    "options": [
      "$EVA = \\frac{NOPAT}{WACC}$",
      "$EVA = NOPAT - (WACC \\times \\text{Invested Capital})$",
      "$EVA = (\\text{Net Income} - \\text{Dividends}) \\times WACC$",
      "$EVA = NOPAT + (WACC \\times \\text{Invested Capital})$"
    ],
    "answer": 1,
    "explanation": "This formula subtracts the dollar cost of all capital used from the operating profits to determine true economic profit.",
    "preamble": "Economic profit is what remains after paying for the use of all debt and equity funds."
  },
  {
    "q": "The Altman Z-score for private companies uses which coefficient for the $X_{3}$ variable (EBIT / Total Assets)?",
    "options": [
      "$3.107$",
      "$0.717$",
      "$1.200$",
      "$3.300$"
    ],
    "answer": 0,
    "explanation": "The 1983 revised model for private firms adjusted the coefficients, assigning 3.107 to the profitability measure.",
    "preamble": "The coefficient for profitability is the highest in both the public and private models, but it is slightly lower in the private version."
  },
  {
    "q": "When reformulating the Statement of Shareholders' Equity, which item is subtracted from Net Income to find the total income available to equity shareholders?",
    "options": [
      "Retained Earnings",
      "Other Comprehensive Income",
      "Preference Dividends",
      "Ordinary Dividends"
    ],
    "answer": 2,
    "explanation": "Preference shares are treated as liabilities in this reformulation, so their dividends must be removed to isolate returns for ordinary shareholders.",
    "preamble": "Identify the payment made to a specific class of 'owners' who are treated like creditors in the reformulation process."
  },
  {
    "q": "In cash flow analysis, what does the 'Interest Coverage Ratio' specifically measure?",
    "options": [
      "$\\frac{\\text{Cash Flow from Operating Activities}}{\\text{Interest Payment}}$",
      "$\\frac{\\text{Net Income}}{\\text{Interest Payment}}$",
      "$\\frac{\\text{Operating Cash Flow}}{\\text{Total Debt}}$",
      "$\\frac{EBIT}{\\text{Interest Expense}}$"
    ],
    "answer": 0,
    "explanation": "This evaluates the firm's ability to service its interest obligations using cash generated from primary business operations.",
    "preamble": "Focus on the cash-based ability to pay periodic financing costs."
  },
  {
    "q": "According to the Gordon Growth Model, how is the Terminal Value ($TV$) calculated at the end of a forecast period?",
    "options": [
      "$TV = NOPAT \\times \\text{Growth Rate}$",
      "$TV = \\frac{FCF_{n}}{WACC - g}$",
      "$TV = FCF_{n} \\times (1 + WACC)^{n}$",
      "$TV = \\frac{FCF_{n}}{WACC + g}$"
    ],
    "answer": 1,
    "explanation": "This formula treats the final year's free cash flow as a perpetuity that grows at a constant rate $g$ into the future.",
    "preamble": "The calculation relies on the difference between the cost of capital and the long-term growth rate."
  },
  {
    "q": "In the Lev and Schwartz Model for Human Resource Accounting, the value of human capital is determined by which primary factor?",
    "options": [
      "The total cost of recruiting and training the employee.",
      "The present value of the individual's remaining earnings from employment.",
      "The replacement cost of the employee at current market rates.",
      "The bidding price offered by different departments within the firm."
    ],
    "answer": 1,
    "explanation": "This economic model values an employee based on the discounted stream of future income they are expected to receive until retirement.",
    "preamble": "This model treats an employee's future salary as a series of cash flows to be discounted."
  },
  {
    "q": "How is the 'Equity Multiplier' calculated for use in the DuPont identity?",
    "options": [
      "$\\frac{\\text{Average Total Assets}}{\\text{Average Total Equity}}$",
      "$\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$",
      "$\\frac{\\text{Total Debt}}{\\text{Total Equity}}$",
      "$\\frac{\\text{Sales}}{\\text{Average Total Equity}}$"
    ],
    "answer": 0,
    "explanation": "This ratio indicates the degree to which a firm uses debt to finance its asset base.",
    "preamble": "It measures how many dollars of assets are supported by each dollar of shareholder equity."
  },
  {
    "q": "The formula for 'Free Cash Flow ($FCF$)' typically starts with Net Operating Profit After Tax ($NOPAT$) and then makes which adjustments?",
    "options": [
      "Add Interest Expense and subtract Dividends.",
      "Add Accounts Receivable and subtract Accounts Payable.",
      "Add Depreciation, subtract Capital Expenditures, and subtract change in Working Capital.",
      "Subtract Depreciation, add Capital Expenditures, and add change in Working Capital."
    ],
    "answer": 2,
    "explanation": "Depreciation is added back as a non-cash expense, while cash outflows for assets and working capital are removed to find truly 'free' cash.",
    "preamble": "You must reverse non-cash items and account for the cash reinvested in the business."
  },
  {
    "q": "Market Value Added ($MVA$) is defined by which relationship?",
    "options": [
      "$MVA = \\text{Market Value of Equity} - \\text{Book Value of Equity}$",
      "$MVA = \\text{Total Assets} - \\text{Total Liabilities}$",
      "$MVA = \\text{Net Income} \\times \\text{Price-Earnings Ratio}$",
      "$MVA = \\text{Market Value of Company} - \\text{Invested Capital}$"
    ],
    "answer": 3,
    "explanation": "MVA measures the cumulative value created for shareholders over the life of the firm relative to the capital contributed.",
    "preamble": "It is the difference between what the company is worth in the market and what was put into it."
  },
  {
    "q": "What is the formula for 'Dividend Yield' as used in investment ratio analysis?",
    "options": [
      "$\\frac{\\text{Dividend Per Share}}{\\text{Market Value Per Share}}$",
      "$\\frac{\\text{Market Value Per Share}}{\\text{Dividend Per Share}}$",
      "$\\frac{\\text{Total Dividends}}{\\text{Net Income}}$",
      "$\\frac{\\text{Dividend Per Share}}{\\text{Earnings Per Share}}$"
    ],
    "answer": 0,
    "explanation": "This ratio shows the percentage return an investor receives from dividends relative to the current stock price.",
    "preamble": "Think about the return on the current price of the stock."
  },
  {
    "q": "In the context of 'Trend Analysis', how is the trend percentage for a specific year calculated?",
    "options": [
      "$\\text{Amount in Current Year} - \\text{Amount in Base Year}$",
      "$\\frac{\\text{Amount in Current Year}}{\\text{Amount in Previous Year}} \\times 100$",
      "$\\frac{\\text{Amount in Current Year}}{\\text{Amount in Base Year}} \\times 100$",
      "$\\frac{\\text{Amount in Current Year}}{\\text{Total Sales}} \\times 100$"
    ],
    "answer": 2,
    "explanation": "This formula indexes all subsequent years to a starting point (base year) to observe growth or decline over time.",
    "preamble": "You must compare the current figure to a fixed starting point in time."
  },
  {
    "q": "For a private company, the Altman Z-score model predicts 'Distress' if the calculated $Z$ value is below what threshold?",
    "options": [
      "$2.90$",
      "$2.99$",
      "$1.23$",
      "$1.81$"
    ],
    "answer": 2,
    "explanation": "For the 1983 private firm model, a Z-score below 1.23 indicates the company is in the distress zone.",
    "preamble": "The thresholds for private firms are different and generally lower than those for public firms."
  },
  {
    "q": "The formula for the 'Asset Turnover' ratio, a driver of operating profitability, is defined as:",
    "options": [
      "$\\frac{\\text{Gross Profit}}{\\text{Total Assets}}$",
      "$\\frac{\\text{Net Sales}}{\\text{Average Total Equity}}$",
      "$\\frac{\\text{Total Assets}}{\\text{Net Sales}}$",
      "$\\frac{\\text{Net Sales}}{\\text{Average Total Assets}}$"
    ],
    "answer": 3,
    "explanation": "This ratio measures how effectively management uses its assets to generate revenue.",
    "preamble": "Consider the relationship between revenue and the resources used to produce it."
  },
  {
    "q": "Which formula is used to calculate 'Earnings Per Share ($EPS$)'?",
    "options": [
      "$\\frac{\\text{Dividends Paid}}{\\text{Number of Ordinary Shares}}$",
      "$\\frac{\\text{Net Profit After Tax}}{\\text{Number of Ordinary Shares}}$",
      "$\\frac{\\text{Net Profit After Tax - Preference Dividend}}{\\text{Number of Ordinary Shares}}$",
      "$\\frac{\\text{Market Price}}{\\text{Net Income}}$"
    ],
    "answer": 2,
    "explanation": "This isolates the earnings that strictly belong to ordinary shareholders per unit of ownership.",
    "preamble": "Remember to remove the fixed 'liabilities-like' owner distributions from the net profit."
  },
  {
    "q": "How is the 'Weighted Average Cost of Capital ($WACC$)' fundamentally calculated?",
    "options": [
      "$WACC = \\frac{K_{d} + K_{e}}{2}$",
      "$WACC = K_{d} + K_{e}$",
      "$WACC = K_{d}(1-t) \\times (\\frac{D}{V}) + K_{e} \\times (\\frac{E}{V})$",
      "$WACC = (\\text{Net Income} - \\text{Interest}) \\times \\text{Tax Rate}$"
    ],
    "answer": 2,
    "explanation": "This formula averages the after-tax cost of debt and the cost of equity based on their respective proportions in the firm's total value ($V$).",
    "preamble": "It involves the proportions of debt and equity and includes a tax shield on debt."
  },
  {
    "q": "In the context of Valuation Principles, the 'Principle of Time Value of Money' implies that the value of an asset is equal to:",
    "options": [
      "The total sum of all future cash flows without adjustment.",
      "The historical cost of the asset adjusted for inflation.",
      "The present value of future cash flows discounted at an appropriate rate.",
      "The current market price of a similar substitute asset."
    ],
    "answer": 2,
    "explanation": "This principle recognizes that a cedi today is worth more than a cedi tomorrow, necessitating the use of discounting.",
    "preamble": "Focus on the mathematical process used to bring future money to the current day."
  },
  {
    "q": "What is the formula for the 'Inventory Turnover Ratio'?",
    "options": [
      "$\\frac{\\text{Average Inventory}}{\\text{Cost of Goods Sold}}$",
      "$\\frac{\\text{Opening Inventory} + \\text{Closing Inventory}}{\\text{Sales}}$",
      "$\\frac{\\text{Cost of Goods Sold}}{\\text{Average Inventory}}$",
      "$\\frac{\\text{Net Sales}}{\\text{Closing Inventory}}$"
    ],
    "answer": 2,
    "explanation": "This measures how many times a company's inventory is sold and replaced over a period.",
    "preamble": "It relates the cost of products sold to the typical amount of stock held."
  },
  {
    "q": "In the Capital Asset Pricing Model ($CAPM$), the formula for 'Cost of Equity ($K_{e}$)' is:",
    "options": [
      "$K_{e} = \\text{Risk Free Rate} + \\text{Beta}$",
      "$K_{e} = \\frac{\\text{Dividend}}{\\text{Price}} + g$",
      "$K_{e} = R_{m} + \\beta(R_{f})$",
      "$K_{e} = R_{f} + \\beta(R_{m} - R_{f})$"
    ],
    "answer": 3,
    "explanation": "This model calculates the required return by adding a risk-free rate to a risk premium adjusted by the asset's beta.",
    "preamble": "The formula involves a risk-free rate and a premium for systemic risk."
  },
  {
    "q": "The 'Operating Cash Flow after Interest / Total Debt' ratio is known as the:",
    "options": [
      "Interest Coverage Ratio",
      "Debt Coverage Ratio",
      "Cash Return on Assets",
      "Current Ratio"
    ],
    "answer": 1,
    "explanation": "This ratio indicates the extent to which net cash from operations can redeem existing debt principal.",
    "preamble": "It assesses the solvency of a firm by looking at its ability to pay off all borrowings."
  },
  {
    "q": "When performing 'Common-Size Statement' analysis for an Income Statement, what is used as the base ($100\\%$)?",
    "options": [
      "Gross Profit",
      "Net Income",
      "Net Sales",
      "Total Assets"
    ],
    "answer": 2,
    "explanation": "In vertical analysis, each line item on the income statement is expressed as a percentage of revenue to identify cost structures.",
    "preamble": "Every expense and profit figure is compared to the total revenue generated."
  },
  {
    "q": "Which formula is used to calculate 'Net Working Capital'?",
    "options": [
      "$\\text{Cash} + \\text{Marketable Securities}$",
      "$\\text{Total Assets} - \\text{Total Liabilities}$",
      "$\\text{Current Assets} - \\text{Current Liabilities}$",
      "$\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$"
    ],
    "answer": 2,
    "explanation": "Net working capital represents the liquidity available to a firm for its day-to-day operations after meeting short-term obligations.",
    "preamble": "It is the difference between short-term resources and short-term obligations."
  },
  {
    "q": "The 'Efficiency Ratio' used in Hermanson's Human Resource Accounting model is based on:",
    "options": [
      "The ratio of sales per employee divided by the industry average.",
      "The percentage of net income attributed to human capital investments.",
      "A weighted average of the ROI of the firm relative to all firms in the economy.",
      "The growth rate of employee salaries over a five-year period."
    ],
    "answer": 2,
    "explanation": "This ratio adjusts future wage streams to reflect how much more (or less) efficiently the firm's human resources are being used compared to the average.",
    "preamble": "The ratio compares the firm's accounting income on owned assets to the economy's average over several years."
  },
  {
    "q": "How is the 'Acid Test Ratio' (or Quick Ratio) calculated?",
    "options": [
      "$\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$",
      "$\\frac{\\text{Current Assets - Inventory}}{\\text{Current Liabilities}}$",
      "$\\frac{\\text{Current Assets - Liabilities}}{\\text{Inventory}}$",
      "$\\frac{\\text{Cash}}{\\text{Current Liabilities}}$"
    ],
    "answer": 1,
    "explanation": "By excluding inventory, this ratio provides a more stringent test of liquidity, focusing on assets that can be converted to cash immediately.",
    "preamble": "It measures liquidity while ignoring the least liquid component of current assets."
  },
  {
    "q": "The 'Price-Earnings ($P/E$) Ratio' is calculated using which formula?",
    "options": [
      "$\\frac{\\text{Market Value Per Share}}{\\text{Earnings Per Share}}$",
      "$\\frac{\\text{Net Income}}{\\text{Number of Shares}}$",
      "$\\frac{\\text{Earnings Per Share}}{\\text{Market Value Per Share}}$",
      "$\\frac{\\text{Market Value Per Share}}{\\text{Book Value Per Share}}$"
    ],
    "answer": 0,
    "explanation": "This ratio shows how much the market is willing to pay for each cedi of current earnings.",
    "preamble": "It relates the current stock price to the profit generated per unit of ownership."
  },
  {
    "q": "In the Altman model, what is the $X_{4}$ variable for a public company?",
    "options": [
      "$\\frac{\\text{Market Value of Equity}}{\\text{Total Assets}}$",
      "$\\frac{\\text{Market Value of Equity}}{\\text{Book Value of Total Debt}}$",
      "$\\frac{\\text{Book Value of Equity}}{\\text{Total Assets}}$",
      "$\\frac{\\text{Net Income}}{\\text{Total Debt}}$"
    ],
    "answer": 1,
    "explanation": "This variable adds a market value dimension to the leverage measure, showing how much asset value can drop before insolvency.",
    "preamble": "This variable compares the market's appraisal of the company's worth to its fixed legal obligations."
  },
  {
    "q": "The 'Debtor Turnover Ratio' is used to measure:",
    "options": [
      "The amount of bad debts relative to total debtors.",
      "How quickly credit sales are converted into cash.",
      "The percentage of sales that are made on credit.",
      "The average number of days it takes to pay suppliers."
    ],
    "answer": 1,
    "explanation": "A higher turnover indicates that the company is efficient in collecting its receivables.",
    "preamble": "Think about the speed of collecting money from customers."
  },
  {
    "q": "What is the result of the 'Combined Leverage' formula?",
    "options": [
      "Operating Leverage × Financial Leverage",
      "$\\frac{\\text{Operating Leverage}}{\\text{Financial Leverage}}$",
      "$DOL - DFL$",
      "Operating Leverage + Financial Leverage"
    ],
    "answer": 0,
    "explanation": "Combined leverage measures the total risk of the firm by showing how changes in sales impact earnings per share.",
    "preamble": "Total risk is the product of the risks associated with the cost structure and the capital structure."
  },

      { q: "The three main tools for analysing a company's financial statements are:", options: ["Ratio analysis, cash flow, and profit forecast","Economic analysis, industry analysis, and company analysis","SWOT, PESTLE, and Porter's Five Forces","Balance sheet, income statement, and cash flow statement"], answer: 1, explanation: "Corporate financial analysis uses a top-down approach: Economic Analysis (macroeconomic environment) → Industry Analysis (sector performance) → Company Analysis (specific firm evaluation)." },
      { q: "Corporate distress is best defined as:", options: ["A company with declining profits","A situation where a firm is unable to meet its debts — when total assets are insufficient to discharge external liabilities","A firm with surplus inventory","A company experiencing rapid growth"], answer: 1, explanation: "Corporate distress (or corporate sickness) is when the value of total assets is insufficient to discharge external liabilities, moving the company towards insolvency or bankruptcy." },
      { q: "Which of the following is an indicator of corporate distress?", options: ["Increasing sales revenue","Favourable liquidity position","Adverse long-term solvency position","Improving return on equity"], answer: 2, explanation: "Indicators of corporate distress include: unfavourable liquidity, adverse long-term solvency, outdated production processes, deteriorating sales, poor administrative setup, and overall adverse economic conditions." },
      { q: "What do financial statements NOT tell analysts?", options: ["Profitability trends","Management's integrity and future strategic intentions","Asset values","Debt levels"], answer: 1, explanation: "Financial statements show quantitative historical data. They do not disclose management's integrity, future plans, competitive positioning, or off-balance sheet risks." },
      { q: "Which ratio measures a company's ability to meet short-term obligations using only its most liquid assets?", options: ["Current ratio","Quick (acid-test) ratio","Debt-to-equity ratio","Return on assets"], answer: 1, explanation: "The Quick Ratio = (Current Assets − Inventory) ÷ Current Liabilities. It excludes inventory (the least liquid current asset) to give a more conservative view of liquidity." },
      { q: "The current ratio is calculated as:", options: ["Total Assets ÷ Total Liabilities","Current Assets ÷ Current Liabilities","Revenue ÷ Net Income","Equity ÷ Total Assets"], answer: 1, explanation: "Current Ratio = Current Assets ÷ Current Liabilities. A ratio above 1 indicates the company can cover its short-term obligations with current assets." },
      { q: "Return on Equity (ROE) is best described as:", options: ["Net income ÷ Total Assets","Net income ÷ Shareholders' Equity","Revenue ÷ Total Equity","Gross Profit ÷ Revenue"], answer: 1, explanation: "ROE = Net Income ÷ Shareholders' Equity. It measures how effectively management generates profits from the equity invested by shareholders." },
      { q: "The Debt-to-Equity ratio measures:", options: ["A company's short-term liquidity","The proportion of financing from debt relative to equity — financial leverage","Profitability of operations","Asset turnover efficiency"], answer: 1, explanation: "Debt/Equity Ratio = Total Debt ÷ Shareholders' Equity. A high ratio indicates greater financial leverage and higher financial risk." },
      { q: "Which analytical approach examines interest rates, GDP growth, and inflation affecting all companies?", options: ["Company analysis","Ratio analysis","Economic analysis","Industry analysis"], answer: 2, explanation: "Economic analysis examines macroeconomic factors — interest rates, inflation, GDP, exchange rates — that affect the overall investment environment and all companies." },
      { q: "An annual report differs from financial statements because it also includes:", options: ["Only the balance sheet","Management commentary, corporate governance disclosures, and strategic information","Tax computations","Audit working papers"], answer: 1, explanation: "An annual report contains the financial statements PLUS management discussion and analysis, corporate governance report, directors' report, and other narrative disclosures." },
      { q: "Which of the following is a limitation of financial statement analysis?", options: ["It provides too much information","Historical data may not predict future performance; accounting policies differ across companies","It is too expensive","It requires no specialist knowledge"], answer: 1, explanation: "Key limitations include: (1) Historical nature, (2) Different accounting policy choices between firms makes comparisons difficult, (3) Inflation distorts values, (4) Window dressing." },
      { q: "Gross profit margin is calculated as:", options: ["Net income ÷ Revenue","(Revenue − Cost of Sales) ÷ Revenue","Operating income ÷ Total Assets","Revenue ÷ Total Equity"], answer: 1, explanation: "Gross Profit Margin = (Revenue − Cost of Goods Sold) ÷ Revenue × 100. It measures the percentage of revenue retained after direct production costs." },
      { q: "Asset turnover ratio indicates:", options: ["How profitably a company uses its equity","How efficiently a company uses its assets to generate revenue","The company's debt management","Dividend payout efficiency"], answer: 1, explanation: "Asset Turnover = Revenue ÷ Total Assets. A higher ratio indicates the company generates more revenue per unit of assets — greater operational efficiency." },
      { q: "The DuPont analysis decomposes Return on Equity into:", options: ["Liquidity × Solvency × Growth","Profit margin × Asset turnover × Financial leverage (equity multiplier)","Revenue × Cost × Tax","Dividend × EPS × P/E"], answer: 1, explanation: "DuPont Analysis: ROE = Net Profit Margin × Asset Turnover × Equity Multiplier. This reveals whether performance is driven by profitability, efficiency, or leverage." },
      { q: "Industry analysis helps investors understand:", options: ["Individual company management quality","The competitive dynamics, regulation, and growth prospects of the sector","Only macroeconomic trends","Just the company's debt levels"], answer: 1, explanation: "Industry analysis examines sector-specific factors: competitive intensity (Porter's Five Forces), industry lifecycle stage, regulation, and barriers to entry — which affect all companies within the sector." }
    ]
  },

  // ─────────────────────────────────────────────
  // 4. ENTREPRENEURSHIP
  // ─────────────────────────────────────────────
  entrepreneur: {
    label: "Entrepreneurship",
    icon: "💡",
    color: "#fb923c",
    questions: [
      { q: "An entrepreneur is best described as:", options: ["Any employee of a large corporation","A person who identifies opportunities, takes risks, and creates new business ventures","A government official who regulates businesses","A consultant who advises existing businesses"], answer: 1, explanation: "An entrepreneur identifies opportunities, assumes the risks of creating and managing a new business venture, and innovates to create value in the marketplace." },
      { q: "Which characteristic is most associated with successful entrepreneurs?", options: ["Risk aversion","Comfort with ambiguity and willingness to take calculated risks","Preference for routine tasks","Dependence on formal structures"], answer: 1, explanation: "Successful entrepreneurs are comfortable with uncertainty and take calculated risks. They see uncertainty as opportunity rather than threat." },
      { q: "The entrepreneurial process begins with:", options: ["Obtaining finance","Identifying and evaluating an opportunity","Registering a business","Hiring employees"], answer: 1, explanation: "The entrepreneurial process starts with opportunity recognition — identifying a gap or need in the market before moving to evaluation, resource mobilization, and business plan development." },
      { q: "Which of the following best describes an 'intrapreneuship'?", options: ["Starting a new external business","Entrepreneurship practised within an existing organization","Government-funded entrepreneurship","Traditional farming entrepreneurship"], answer: 1, explanation: "Intrapreneurship (corporate entrepreneurship) is the practice of entrepreneurial behavior within an established organization — employees act entrepreneurially to create new products, processes, or ventures for their employer." },
      { q: "A business plan primarily serves to:", options: ["Replace the need for market research","Provide a roadmap for the business and attract investors/lenders by demonstrating viability","Guarantee business success","Satisfy legal registration requirements only"], answer: 1, explanation: "A business plan serves as an internal roadmap for the entrepreneur and an external communication tool to attract funding. It outlines the business concept, market, strategy, finances, and management team." },
      { q: "Which environmental factor directly affects entrepreneurship by controlling what businesses are allowed to do?", options: ["Economic environment","Legal environment","Competitive environment","Technological environment"], answer: 1, explanation: "The legal environment includes laws governing business registration, taxation, intellectual property, employment, and industry regulation — directly determining what businesses can and cannot do." },
      { q: "Firm resources include:", options: ["Only financial capital","Knowledge, physical assets, human capital, and other tangible and intangible factors owned and controlled by the business","Only physical equipment","Only human resources"], answer: 1, explanation: "Firm resources encompass all productive factors: financial, physical, human, informational, and technological resources — including intangibles like brand reputation and intellectual property." },
      { q: "What is the primary advantage of entrepreneurship?", options: ["Guaranteed income","Independence, personal fulfilment, and potential for unlimited financial gain","Job security","Fixed working hours"], answer: 1, explanation: "Key advantages of entrepreneurship include independence (being your own boss), personal fulfilment, potential for significant financial reward, and the ability to create employment for others." },
      { q: "A key disadvantage of small business entrepreneurship is:", options: ["Too much staff support","High personal financial risk and uncertainty of income","Unlimited resources","No competition"], answer: 1, explanation: "Key disadvantages include: high personal financial risk, income uncertainty, long working hours, administrative burden, difficulty accessing capital, and isolation from colleagues." },
      { q: "The term 'opportunity cost' in entrepreneurship refers to:", options: ["The cost of office space","The value of the next best alternative foregone when choosing to start a business","The total startup cost","The marketing budget"], answer: 1, explanation: "Opportunity cost is what the entrepreneur gives up by choosing one course of action over the next best alternative — e.g., the salary foregone by leaving employment to start a business." },
      { q: "Local resource mobilization by entrepreneurs refers to:", options: ["Importing all materials from abroad","Using locally available resources — raw materials, labour, and capital — to run the business","Hiring only international consultants","Entirely replacing technology with manual labour"], answer: 1, explanation: "Local resource mobilization involves identifying and using resources available within the local community and environment, reducing dependence on imported inputs and contributing to local economic development." },
      { q: "Which type of entrepreneur starts a business specifically to solve a social problem rather than primarily for profit?", options: ["Serial entrepreneur","Social entrepreneur","Lifestyle entrepreneur","Growth entrepreneur"], answer: 1, explanation: "A social entrepreneur applies entrepreneurial principles to create social value — addressing societal challenges like poverty, education, or healthcare — while the financial return is secondary to the social mission." },
      { q: "Bootstrapping in entrepreneurship means:", options: ["Taking a large bank loan","Funding the business using personal savings and revenue generated by the business, avoiding external funding","Seeking venture capital","Listing on the stock exchange"], answer: 1, explanation: "Bootstrapping refers to starting and growing a business using personal savings, sweat equity, and reinvested revenues without external investment — maintaining full ownership but limiting growth speed." },
      { q: "A feasibility study is conducted to:", options: ["Register the business","Determine if the business idea is viable before significant investment is committed","Train employees","File tax returns"], answer: 1, explanation: "A feasibility study assesses the technical, financial, market, and operational viability of a business concept BEFORE committing significant resources — it answers 'Should we proceed?'" }
    ]
  },

  // ─────────────────────────────────────────────
  // 5. PROJECT MANAGEMENT
  // ─────────────────────────────────────────────
  project: {
    label: "Trials for Project Management",
    icon: "📋",
    color: "#fbbf24",
    questions: [
  {
    "q": "Advertising, shipping and utilities are examples of project overhead cost.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "The process of tracking team member performance, providing feedback, resolving issues and managing team changes to optimize project performance is referred to as ___________.",
    "options": [
      "Human resource management",
      "Project team management",
      "Project team development",
      "Project team acquisition"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Which of the following stages clearly explain the processes involved in developing the human resource plan for a project? I. Specify the skill requirement II. Identify and document project roles and responsibilities III. Establish reporting relationships IV. Create staffing management plan",
    "options": [
      "I, III, IV and II",
      "II, I, III and IV",
      "III, IV, II and I",
      "I, II, III and IV"
    ],
    "answer": 3,
    "explanation": "The textbook presents these in order: specify skills \u2192 identify roles/responsibilities \u2192 reporting relationships \u2192 staffing management plan."
  },
  {
    "q": "Managing human resource of a project helps in the following ways EXCEPT ___________.",
    "options": [
      "Creating teams that are unsupportive of each other",
      "It gives the ability to resolve employee complaints",
      "It helps in knowing when and how team members should be added",
      "Identifying and engaging employees with a variety of skill levels"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Which of the following skills of a manager allows him/her to visualize the entire organisation and work with ideas and the relationships between abstract concepts?",
    "options": [
      "Abstract skills",
      "Conceptual skills",
      "Human skills",
      "Technical skills"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Unplanned costs incurred when steps are taken to speed up the project's completion are referred to as ___________.",
    "options": [
      "Expedited Costs",
      "Fixed Costs",
      "Variable Costs",
      "Normal Costs"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Business angels are examples of short-term project funding sources.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0,
    "explanation": "Business angels are listed under long-term project funding sources in the textbook."
  },
  {
    "q": "Which of the following is NOT an example of long-term sources of project funding?",
    "options": [
      "Venture Capital",
      "Bank overdraft",
      "Retained Profits",
      "Share Capital"
    ],
    "answer": 1,
    "explanation": "Bank overdrafts are a short-term funding source (repayable within one year)."
  },
  {
    "q": "Which of the classifications of procurement risk management are influenced by factors such as seasonality, taxation, product availability and price?",
    "options": [
      "Disruption risks",
      "Demand fluctuation",
      "Uncertain lead time",
      "Unreliable yield"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Project termination type where the needed resources to execute the project are either lacking or inadequately available is referred to as ___________.",
    "options": [
      "Project starvation",
      "Termination by extinction",
      "Termination by addition",
      "Termination by integration"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Project vision conflicts arise due to the differences in stakeholders' opinion and understanding of the overall outcome of the project.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "The conflict resolution approach where the person involved either physically or psychologically removes himself or herself from the conflict is referred to as ___________.",
    "options": [
      "Accommodation",
      "Avoidance",
      "Compromise",
      "Competition"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Which of the following is a key feature of the second phase of the project life cycle?",
    "options": [
      "A business case is made for the project",
      "Activities are outlined",
      "Opportunities are identified",
      "Monitoring and controlling deliverables"
    ],
    "answer": 1,
    "explanation": "The second phase is Project Planning, which involves outlining activities, tasks, dependencies and timeframes."
  },
  {
    "q": "Project cost associated with hiring and paying the various classification of workers involved in developing the project is classified as a service cost.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0,
    "explanation": "This is Labour Cost. Service Cost refers to work done by consultants, designers and subcontractors."
  },
  {
    "q": "Indirect costs associated with a project include the following EXCEPT ___________.",
    "options": [
      "Advertising",
      "Depreciation of equipment",
      "Insurance",
      "Materials"
    ],
    "answer": 3,
    "explanation": "Materials are a direct cost. Advertising, depreciation, and insurance are indirect costs."
  },
  {
    "q": "Which of the following is an example of an active stakeholder of a project?",
    "options": [
      "Competitors",
      "Persons indirectly affected by the project",
      "Project coordinators",
      "Public authorities"
    ],
    "answer": 2,
    "explanation": "The textbook lists project coordinators as active stakeholders; competitors, public authorities, and indirectly affected persons are passive."
  },
  {
    "q": "Which of the following is generally considered as a project?",
    "options": [
      "An organisation that strives to stay afloat",
      "Conducting research whose outcome is recorded",
      "Managing a product",
      "Protecting an organisation's sales territory"
    ],
    "answer": 1,
    "explanation": "The textbook defines a project as including 'a result, such as an outcome or document (e.g., a research project that develops knowledge)'."
  },
  {
    "q": "Scope, cost and risk are the most important traditional constraints of project management.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0,
    "explanation": "The three traditional constraints are Scope, Cost (budget), and Time (schedule) \u2014 not risk."
  },
  {
    "q": "The responsibilities of the project manager at the organisational level include the following EXCEPT ___________.",
    "options": [
      "Controlling budgets",
      "Creating overall project plan and forms project team members",
      "Linking between the strategy and project team",
      "Sharing progress reports with the sponsors and all stakeholders"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Which of the following best describe the interpersonal skills required by project managers? I. Leadership II. Team building III. Communication IV. Building trust",
    "options": [
      "I only",
      "I and II only",
      "I, II, III only",
      "I, II, III and IV"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "q": "The document that formally authorizes the existence of a project and provides the project manager with the authority to apply organisational resources to project activities is referred to as ___________.",
    "options": [
      "Project charter",
      "Project management plan",
      "Directing and controlling projects",
      "Project integrated change"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Any unique and verifiable product or the result of the capability to perform a service that is required to complete a process, phase or project is called ___________.",
    "options": [
      "Project outcome",
      "Project Deliverables",
      "Project service delivery",
      "Project execution"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "The power, urgency and legitimacy grid are also referred to as ___________.",
    "options": [
      "Influence and impact grid",
      "Salience model",
      "Stakeholder management grid",
      "Stakeholder model"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Which of the following environmental factors impacts project management and outcomes? I. Operational II. Cultural III. Ecological IV. Psychological",
    "options": [
      "I only",
      "I and II only",
      "II, III and IV only",
      "I, II, III and IV"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "q": "Which of the following is NOT considered an internal source of risk?",
    "options": [
      "Market or operational risk",
      "Poor understanding of the project manager's job",
      "Poorly organized project office",
      "Unrealistic planning and scheduling"
    ],
    "answer": 0,
    "explanation": "Market or operational risk is listed as an external risk in the textbook."
  },
  {
    "q": "The project risk management framework consists of six phases. Which of the following best arranges the phases in chronological order? I. Establish the context  II. Risk identification III. Risk analysis IV. Risk response planning V. Risk monitoring and control",
    "options": [
      "I, II, III, IV and V",
      "II, I, III, V and IV",
      "V, IV, III, II and I",
      "III, II, IV, V and I"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Which of the following is NOT true about the project communication plan?",
    "options": [
      "It allows the project manager to maintain control of the project and ensure all stakeholders",
      "Enables the project leader to lead the team to the desired project outcome",
      "It increases the inconsistencies of how the project is handled",
      "Ensures that all stakeholders have the same information on the project requirements and"
    ],
    "answer": 2,
    "explanation": "The textbook states the communication plan increases CONSISTENCY \u2014 so option C is false."
  },
  {
    "q": "Which of the following is NOT an item included in the risk register?",
    "options": [
      "Assessment of the likelihood of occurrence",
      "Data of identifications",
      "Historical data",
      "Section of project"
    ],
    "answer": 2,
    "explanation": "Historical data is not listed among the items on a risk register in the textbook."
  },
  {
    "q": "Which of the following best explains the processes involved in the risk scoring matrix?",
    "options": [
      "Identify all the risks, assign severity/impact if they should occur and assign a probability of",
      "Identify the impact/severity if they occur, assign a probability of likelihood of occurrence,",
      "Identify all risks, assign a probability of occurrence rates/values and assign",
      "Establish the organizational and project environment, assign severity/impact if they occur and"
    ],
    "answer": 2,
    "explanation": "Textbook procedure: (1) Identify risks, (2) assign probability/likelihood, (3) assign severity/impact."
  },
  {
    "q": "Which of the following is NOT a feature of a project?",
    "options": [
      "Repetitive process",
      "Temporal in nature",
      "Unique deliverables",
      "Defined beginning and end"
    ],
    "answer": 0,
    "explanation": "Projects are unique and temporary with defined start/end. Repetitive process describes operations, not projects."
  },
  {
    "q": "A project is considered successful when it meets ___________.",
    "options": [
      "Only the budget",
      "Only the schedule",
      "Scope, time, cost and quality objectives",
      "The expectations of the project team"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "q": "What does it mean when a project is temporary? It ___________.",
    "options": [
      "Has a definite start and end date",
      "Lasts forever",
      "Is repeated continuously",
      "Does not require resources"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Which of the following best describes the uniqueness of a project?",
    "options": [
      "All projects follow the same process",
      "Each project has distinct objectives and deliverables",
      "Projects do not require planning",
      "Projects are routine operations"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "A project is different from operations because ___________.",
    "options": [
      "A project is temporary, while operations are ongoing",
      "The project does not require management",
      "Operations do not have any objectives",
      "Operations are always unsuccessful"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "Which of the following is NOT considered a primary constraint in project management?",
    "options": [
      "Scope",
      "Cost",
      "Time",
      "Motivation"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "q": "The three primary constraints in project management are often referred to as the ___________.",
    "options": [
      "Triple Constraint",
      "Golden Triangle",
      "Project Cycle",
      "Management Pyramid"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "If a project faces budget cuts, which constraint is directly affected?",
    "options": [
      "Scope",
      "Cost",
      "Time",
      "Risk"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "If the project schedule is shortened, what is most likely to be impacted?",
    "options": [
      "Cost and scope",
      "Risk only",
      "Stakeholder interest",
      "Project vision"
    ],
    "answer": 0,
    "explanation": "Shortening the schedule typically requires more resources (increasing cost) or reducing deliverables (reducing scope)."
  },
  {
    "q": "Which of the following is an additional constraint beyond the traditional triple constraint?",
    "options": [
      "Quality",
      "Innovation",
      "Leadership style",
      "Market trends"
    ],
    "answer": 0,
    "explanation": "The textbook explicitly states quality standards have become an important additional constraint beyond the triple constraint."
  },
  {
    "q": "When project requirements increase but the deadline remains the same, what is most likely to happen? The ___________.",
    "options": [
      "Project team will need additional resources",
      "Cost will decrease",
      "Quality of work will improve automatically",
      "Project will be completed ahead of schedule"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "In project management, resource constraints typically refer to limitations in ___________.",
    "options": [
      "Financial budget",
      "Manpower, materials, and equipment",
      "Project goals and vision",
      "Market competition"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "What is the most common cause of project delays?",
    "options": [
      "Poor stakeholder engagement",
      "Excessive budgeting",
      "Early project completion",
      "Lack of competition"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "If a project is delayed due to a lack of necessary resources, which constraint is most directly affected?",
    "options": [
      "Scope",
      "Quality",
      "Cost",
      "Time"
    ],
    "answer": 3,
    "explanation": ""
  },
  {
    "q": "How can project managers reduce the impact of delays?",
    "options": [
      "Ignoring stakeholder concerns",
      "Increasing workload without proper planning",
      "Implementing risk management strategies",
      "Avoiding communication with the project team"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "q": "A delay in project approval from senior management is an example of what type of delay? ___________ delay.",
    "options": [
      "Internal",
      "External",
      "Technical",
      "Operational"
    ],
    "answer": 0,
    "explanation": "Senior management is internal to the organisation, making this an internal delay."
  },
  {
    "q": "What is a critical path in project management?",
    "options": [
      "The sequence of tasks that determines the minimum project duration",
      "The list of all non-essential project tasks",
      "A flexible schedule that allows for unlimited delays",
      "A strategy to increase project costs"
    ],
    "answer": 0,
    "explanation": ""
  },
  {
    "q": "If a project faces unexpected regulatory approvals that delay progress, what type of risk is this? ___________ risk.",
    "options": [
      "Financial",
      "Political",
      "Legal and compliance",
      "Technological"
    ],
    "answer": 2,
    "explanation": "Regulatory approvals fall under legal and compliance risk."
  },
  {
    "q": "What is the best strategy to manage delays caused by scope creep?",
    "options": [
      "Ignoring client requests",
      "Implementing a strict change control process",
      "Reducing the number of project team members",
      "Eliminating the risk management plan"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Obtaining information from prospective sellers on how project needs can be met is referred to as ___________.",
    "options": [
      "Procurement planning",
      "Project procurement",
      "Solicitation",
      "Source selection"
    ],
    "answer": 2,
    "explanation": ""
  },
  {
    "q": "Which of the following is an example of a project? I. Developing a new product, service or result II. Introducing a new product to a new market III. Conducting research whose outcome will be aptly recorded IV. Developing or acquiring a new or modified information system",
    "options": [
      "I only",
      "I, II only",
      "I, II, and III only",
      "I, II, III and IV"
    ],
    "answer": 3,
    "explanation": "All four are examples of projects as described in the textbook definition of a project."
  },
  {
    "q": "Which of the following is true about projects? I. Every project has specific starting and ending points II. The duration of projects is perpetual III. Projects are permanent in nature IV. The lifecycle of the product created by the project is automatically short",
    "options": [
      "I and II",
      "I and IV",
      "III and IV",
      "II and III"
    ],
    "answer": 1,
    "explanation": ""
  },
  {
    "q": "Total direct labour cost is calculated as ___________.",
    "options": [
      "The product of direct labour rate and total labour hours",
      "Total fixed cost multiplied by labour rate",
      "The product of preliminary market analysis and labour cost",
      "Sales cost plus logistics and direct labour cost"
    ],
    "answer": 0,
    "explanation": "The textbook formula: Total direct labour cost = (Direct labour rate) \u00d7 (Total labour hours)."
  },
  {
    "q": "Project variable cost accelerates or varies throughout the project life cycle whereas project fixed cost does not vary with respect to their usage throughout the project life cycle.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "explanation": "Both definitions match exactly what is stated in the textbook for variable and fixed costs."
  },
  {
    "q": "Advertising, shipping, salaries and insurance are examples of ___________.",
    "options": [
      "Accelerated cost",
      "Corporate cost",
      "Direct cost",
      "Overhead cost"
    ],
    "answer": 3,
    "explanation": "These fall under indirect costs (overhead/selling and administration), collectively referred to as overhead cost in this context."
  },
  {
    "q": "The third step in the project integration process involves ___________.",
    "options": [
      "Directing and managing project",
      "Developing a project charter",
      "Developing a project management plan",
      "Monitoring and controlling project work"
    ],
    "answer": 0,
    "explanation": "Integration steps: 1st = Develop Project Charter, 2nd = Develop Project Management Plan, 3rd = Direct and Manage Project Work."
  },
  {
    "q": "Which of the following is a key challenge in project integration management?",
    "options": [
      "Developing project plan",
      "Information dissemination when project teams are spread globally",
      "Developing performance reports",
      "Providing accurate forecasting figures"
    ],
    "answer": 1,
    "explanation": "The textbook specifically identifies globally spread teams as a key integration challenge causing information dissemination difficulties."
  },
  {
    "q": "Which of the following should be the FIRST document a project manager should consult when developing the project management plan?",
    "options": [
      "Outputs from other processes",
      "Organizational process assets",
      "Project charter",
      "Issue logs"
    ],
    "answer": 2,
    "explanation": "The project charter is the primary input for developing the project management plan."
  },
  {
    "q": "Which of the following outputs are likely to be realized when the project manager has successfully directed and managed project work?",
    "options": [
      "Change log",
      "Deliverables",
      "Project management plan updates",
      "Work performance reports"
    ],
    "answer": 1,
    "explanation": "The textbook states that Deliverables are the key output when directing and managing project work."
  },
  {
    "q": "Human skills are required for communication only.",
    "options": [
      "False",
      "True"
    ],
    "answer": 0,
    "explanation": "Human skills, also called human relation skills, require communication AND attention to relationships with others \u2014 not just communication."
  },
  {
    "q": "Which of the following is the FIRST phase of team development?",
    "options": [
      "Forming",
      "Storming",
      "Norming",
      "Performing"
    ],
    "answer": 0,
    "explanation": "The Tuckman ladder stages in order: Forming \u2192 Storming \u2192 Norming \u2192 Performing \u2192 Adjourning."
  },
  {
    "q": "At which phase of team development do team members begin to address the project work, take technical decisions and develop a management approach to the project?",
    "options": [
      "Forming",
      "Storming",
      "Norming",
      "Performing"
    ],
    "answer": 1,
    "explanation": "Storming is defined as the phase where the team begins to address project work and technical decisions."
  },
  {
    "q": "At which stage of the team development process do members begin to work together and adjust their work habits and behaviours in support of the team?",
    "options": [
      "Forming",
      "Storming",
      "Norming",
      "Performing"
    ],
    "answer": 2,
    "explanation": "Norming: team members begin to work together and adjust their work habits and behaviours to support the team."
  },
  {
    "q": "The following are examples of hard-copy documents used in managing project information EXCEPT ___________.",
    "options": [
      "Letters",
      "Memos",
      "E-mail",
      "Press release"
    ],
    "answer": 2,
    "explanation": "E-mail is an electronic communication tool, not a hard-copy document. Letters, memos, and press releases are hard-copy documents."
  },
  {
    "q": "When parties to a conflict come to an agreement through yielding or conforming to the positions of others, cooperating in an effort to create harmony even at the expense of their own ideas and values, which conflict resolution approach has been adopted?",
    "options": [
      "Accommodation",
      "Competition",
      "Compromise",
      "Collaboration"
    ],
    "answer": 0,
    "explanation": "This is the exact textbook definition of Accommodation \u2014 yielding to others' positions to maintain harmony."
  },
  {
    "q": "The phase of the project life cycle which involves the development of detailed plans to confirm the specifications in the project scope defined at the initial phase is referred to as ___________.",
    "options": [
      "Execution",
      "Initiation",
      "Planning",
      "Closure"
    ],
    "answer": 2,
    "explanation": "The Planning phase involves developing detailed plans to confirm specifications defined at initiation."
  }
]
  },

  // ─────────────────────────────────────────────
  // 6. INVESTMENT MANAGEMENT
  // ─────────────────────────────────────────────
  investment: {
    label: "Investment Management",
    icon: "💰",
    color: "#34d399",
    questions: [
      { q: "Investment is best defined as:", options: ["Spending money on current consumption","The commitment of current funds to assets expected to generate future income or appreciation","Borrowing money for business expansion","Holding cash as savings"], answer: 1, explanation: "Investment is the commitment of current resources (time, money) to earn future returns in the form of income, capital gains, or both. It involves sacrificing current consumption for future benefit." },
      { q: "The primary market is:", options: ["Where existing securities are traded among investors","Where new securities are issued and sold for the first time by the issuing entity to raise capital","Only for government bonds","Where commodities are traded"], answer: 1, explanation: "The Primary Market is where new issues of securities (IPOs, bond issues) are sold DIRECTLY from the issuer to investors to raise fresh capital. The issuer receives the proceeds." },
      { q: "The secondary market is:", options: ["The first sale of securities","A market where previously issued securities are traded between investors — the issuer receives no new funds","Only for derivatives","The market for physical goods"], answer: 1, explanation: "The Secondary Market is where already-issued securities trade between investors. The Ghana Stock Exchange is a secondary market. The issuing company receives no new capital from these trades." },
      { q: "The Ghana Stock Exchange (GSE) primarily functions as:", options: ["A primary market only","The main secondary market for buying and selling previously issued securities in Ghana","A money market institution","A commodity exchange"], answer: 1, explanation: "The GSE is Ghana's main secondary market, providing a regulated platform for buying and selling listed equities and bonds, ensuring price discovery and liquidity for investors." },
      { q: "Nominal return on an investment measures:", options: ["How much more goods and services you can buy","How much more money you have — unadjusted for inflation","The tax-adjusted return","The risk-adjusted return"], answer: 1, explanation: "Nominal return is the actual monetary percentage gain on an investment before adjusting for inflation. It tells you how much more money you have, but not its purchasing power." },
      { q: "Real rate of return is calculated using:", options: ["Nominal return + Inflation","(1 + Nominal rate) ÷ (1 + Inflation) − 1","Nominal return × Inflation","Revenue ÷ Capital invested"], answer: 1, explanation: "Real Rate of Return = [(1 + Nominal Rate) ÷ (1 + Inflation Rate)] − 1. It shows how much more purchasing power your investment generates after adjusting for inflation." },
      { q: "The risk-return trade-off states that:", options: ["Lower risk always generates higher returns","Higher expected returns are generally associated with higher risk","All investments carry the same risk","Government bonds offer the highest returns"], answer: 1, explanation: "The fundamental risk-return trade-off: investors demand higher returns to compensate for taking on higher risk. Government bonds (low risk) offer lower returns; equities (higher risk) offer higher potential returns." },
      { q: "Diversification reduces risk because:", options: ["It eliminates all investment risk","It spreads investments across uncorrelated assets, reducing the impact of any single asset's poor performance on the overall portfolio","It guarantees higher returns","It eliminates systematic risk"], answer: 1, explanation: "Diversification reduces unsystematic (specific) risk by combining assets whose returns do not move in perfect correlation. However, systematic (market) risk cannot be diversified away." },
      { q: "Systematic risk is:", options: ["Risk specific to one company or industry — diversifiable","Market-wide risk affecting all investments — non-diversifiable","The risk of default on a bond","Liquidity risk of a specific asset"], answer: 1, explanation: "Systematic (market) risk affects all investments — caused by macroeconomic factors like recessions, interest rate changes, or wars. It CANNOT be eliminated through diversification." },
      { q: "A bond's coupon rate is:", options: ["The market price of the bond","The fixed annual interest payment as a percentage of the bond's face value","The bond's yield to maturity","The inflation adjustment on the bond"], answer: 1, explanation: "The coupon rate is the fixed annual interest rate stated on the bond, expressed as a percentage of face (par) value. Coupon payment = Coupon rate × Face value." },
      { q: "When market interest rates rise, bond prices will:", options: ["Rise","Fall","Stay the same","Become more volatile but unchanged in the long run"], answer: 1, explanation: "Bond prices and interest rates move inversely. When market rates rise, new bonds offer higher coupons, making existing lower-coupon bonds less attractive — their prices fall to compensate." },
      { q: "The Yield to Maturity (YTM) of a bond is:", options: ["The bond's coupon rate","The total return anticipated on a bond if held until it matures, accounting for current price, all coupon payments, and the repayment of face value","The bond's credit rating","The annual coupon divided by face value"], answer: 1, explanation: "YTM is the total expected annual return of a bond if purchased at its current market price and held until maturity. It accounts for the current price, annual coupons, and face value repayment." },
      { q: "A brokerage firm primarily performs which function?", options: ["Issuing new securities","Acting as an intermediary that executes buy and sell orders on behalf of investors in securities markets","Regulating the stock exchange","Providing banking services"], answer: 1, explanation: "A brokerage firm acts as an agent between investors and the market — executing buy and sell orders, providing investment advice, and facilitating access to securities markets." },
      { q: "An investment objective is set based on:", options: ["Only the investor's age","The investor's financial goals, time horizon, risk tolerance, and liquidity needs","The performance of last year's investments","Only market conditions"], answer: 1, explanation: "Investment objectives are highly personal and depend on: (1) Financial goals (growth, income, capital preservation), (2) Time horizon, (3) Risk tolerance, and (4) Liquidity requirements." },
      { q: "Capital gain on an investment is:", options: ["Regular income paid annually","The increase in value of an investment above its purchase price — realised when sold","A guaranteed return","The coupon payment on a bond"], answer: 1, explanation: "A capital gain is the profit from selling an asset for more than its purchase price. It is only realised (and potentially taxable) upon sale of the investment." }
    ]
  },

  // ─────────────────────────────────────────────
  // 7. ADVANCE FINANCIAL REPORTING PASCO 2025 TRIAL
  // ─────────────────────────────────────────────
  acc402d: {
    label: "Advance Financial Reporting Pasco 2025 trial",
    icon: "🎓",
    color: "#a78bfa",
    questions: [
    {
        "q": "The unrealised profit on the sale is calculated as ____________.",
        "options": [
            "GH₵8,000,000",
            "GH₵4,000,000",
            "GH₵2,400,000",
            "GH₵1,600,000"
        ],
        "answer": 3,
        "explanation": "Selling price (Sweed → Premier) | GH₵12,000,000\nLess: Cost of goods to Sweed | (GH₵8,000,000)\nTotal profit on intragroup sale | GH₵4,000,000\nGoods still held by Premier at year-end (100% − 60% sold = 40% unsold) | × 40%\nUnrealised Profit (URP) to eliminate | GH₵1,600,000\n\nSweed is a subsidiary selling upstream to Premier (parent). Only unsold goods give rise to unrealised profit because the group has not yet recognised that profit externally. 40% of goods remain in Premier’s closing inventory, so 40% of the GH₵4M profit = GH₵1,600,000 is unrealised and must be eliminated on consolidation.",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH₵12,000,000. These goods had originally cost Sweed GH₵8,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH₵35,000,000, Sweed GH₵20,000,000."
    },
    {
        "q": "At what value will cost of sales appear in the consolidated statement of profit or loss?",
        "options": [
            "GH₵55,000,000",
            "GH₵47,000,000",
            "GH₵44,600,000",
            "GH₵41,400,000"
        ],
        "answer": 2,
        "explanation": "Premier’s cost of sales | GH₵35,000,000\nAdd: Sweed’s cost of sales | GH₵20,000,000\nCombined COS | GH₵55,000,000\nLess: Eliminate intragroup sale (Sweed’s revenue recorded in COS flow) | (GH₵12,000,000)\nAdd back: Unrealised profit adjustment (URP from Q1) | GH₵1,600,000\nConsolidated Cost of Sales | GH₵44,600,000\n\nIn consolidation, intragroup transactions are fully eliminated. Sweed’s GH₵12M sale to Premier is removed. However, the URP of GH₵1.6M must be added back to COS because it inflates the inventory value sitting in Premier’s books — the group’s COS must reflect the true cost of goods still held.",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH₵12,000,000. These goods had originally cost Sweed GH₵8,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH₵35,000,000, Sweed GH₵20,000,000."
    },
    {
        "q": "Paapa Ltd acquired 80% of the ordinary share capital of Maami Ltd on 30 August 2024. On 31 December 2024, the share capital and retained earnings of Maami Ltd were as follows:",
        "options": [
            "GH₵1,860,000",
            "GH₵1,800,000",
            "GH₵1,700,000",
            "GH₵1,600,000"
        ],
        "answer": 3,
        "explanation": "Acquisition date: 30 August 2024. Profit accrues evenly → time-apportion to acquisition (8 months out of 12).\nShare capital | GH₵1,200,000\nRetained earnings at 1 January 2024 | GH₵900,000\nProfit accrued Jan–Aug 2024: GH₵600,000 × 8/12 | GH₵400,000\nNet assets at acquisition date (A) | GH₵2,500,000\n\nUsing the goodwill formula:   Goodwill = Cost of Investment + NCI − Net Assets at Acquisition\nA bargain purchase means Goodwill is negative, i.e. Goodwill = −GH₵300,000\n−300,000 = Cost + 600,000 − 2,500,000 | \nCost = −300,000 + 2,500,000 − 600,000 | \nCost of Investment in Maami Ltd | GH₵1,600,000",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH₵12,000,000. These goods had originally cost Sweed GH₵8,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH₵35,000,000, Sweed GH₵20,000,000."
    },
    {
        "q": "The fair value gain on the 40% original investment to be recognised in consolidated statement of profit or loss on 1 January 2024 is:",
        "options": [
            "GH₵960,000",
            "GH₵640,000",
            "GH₵600,000",
            "GH₵400,000"
        ],
        "answer": 2,
        "explanation": "When Tinda acquires an additional 20% to achieve control (step acquisition), the pre-existing 40% associate interest is remeasured to fair value at the acquisition date. The resulting gain is recognised in consolidated profit or loss (IFRS 3).\nFair value of existing 40% holding on 1 January 2024 | GH₵4,200,000\nLess: Carrying amount (original cost) of 40% holding | (GH₵3,600,000)\nFair value gain recognised in consolidated P&L | GH₵600,000",
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH₵3,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH₵4,000,000 and GH₵3,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH₵2,800,000. On this date, the fair value of the existing holding in Bruce was GH₵4,200,000 and the retained earnings were GH₵4,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce’s net assets on 1 January 2024 was GH₵8,000,000."
    },
    {
        "q": "The value of goodwill on 1 January 2024 is calculated as _________.",
        "options": [
            "GH₵1,600,000",
            "GH₵2,200,000",
            "GH₵2,560,000",
            "GH₵3,160,000"
        ],
        "answer": 1,
        "explanation": "NCI is measured using proportion of net assets. Total post-acquisition interest = 60%; NCI = 40% × GH₵8,000,000 = GH₵3,200,000.",
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH₵3,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH₵4,000,000 and GH₵3,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH₵2,800,000. On this date, the fair value of the existing holding in Bruce was GH₵4,200,000 and the retained earnings were GH₵4,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce’s net assets on 1 January 2024 was GH₵8,000,000."
    },
    {
        "q": "Which capital maintenance concept focuses on maintaining productive capacity? __________ concept.",
        "options": [
            "Historical cost maintenance",
            "Financial capital maintenance",
            "Going concern",
            "Physical capital maintenance"
        ],
        "answer": 3,
        "explanation": "Physical capital maintenance defines profit only after ensuring the entity can maintain the same physical productive capacity (i.e., volume of goods/services produced). Financial capital maintenance, by contrast, focuses on maintaining the monetary value of net assets. Options A and C are not recognised capital maintenance concepts under the IASB Conceptual Framework.",
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH₵3,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH₵4,000,000 and GH₵3,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH₵2,800,000. On this date, the fair value of the existing holding in Bruce was GH₵4,200,000 and the retained earnings were GH₵4,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce’s net assets on 1 January 2024 was GH₵8,000,000."
    },
    {
        "q": "The gross replacement cost at 31 December 2024 would be ______.",
        "options": [
            "GH₵325,000",
            "GH₵265,909",
            "GH₵590,909",
            "GH₵400,000"
        ],
        "answer": 2,
        "explanation": "Under Current Cost Accounting (CCA), assets are restated to their current replacement cost using specific price indices. The gross replacement cost is the full cost to replace the asset at current prices, before deducting depreciation.",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH₵400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 — Index = 132; 31 December 2024 — Index = 195."
    },
    {
        "q": "The accumulated depreciation on the gross replacement cost at 31 December 2024 would be ____________.",
        "options": [
            "GH₵265,909",
            "GH₵325,000",
            "GH₵400,000",
            "GH₵590,909"
        ],
        "answer": 1,
        "explanation": "Asset purchased 30 June 2019. Reporting date: 31 December 2024. Age = 5 years and 6 months = 5.5 years.\nGross Replacement Cost (from Q7) | GH₵590,909\nYears of useful life elapsed (30 Jun 2019 → 31 Dec 2024) | 5.5 years\nTotal useful life | 10 years\nAccumulated Depreciation = GH₵590,909 × (5.5 ÷ 10) | GH₵325,000",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH₵400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 — Index = 132; 31 December 2024 — Index = 195."
    },
    {
        "q": "The net replacement cost at 31 December 2024 would be ________.",
        "options": [
            "GH₵590,909",
            "GH₵400,000",
            "GH₵325,000",
            "GH₵265,909"
        ],
        "answer": 3,
        "explanation": "",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH₵400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 — Index = 132; 31 December 2024 — Index = 195."
    },
    {
        "q": "Calculate the movement in inventories, for inclusion in the group statement of cash flows.",
        "options": [
            "GH₵375,000 decrease in inventory and increase in cash",
            "GH₵425,000 decrease in inventory and increase in cash",
            "GH₵375,000 increase in inventory and decrease in cash",
            "GH₵425,000 increase in inventory and decrease in cash"
        ],
        "answer": 3,
        "explanation": "For group cash flows, working capital movements are adjusted to exclude balances of subsidiaries acquired or disposed of during the year (these are shown separately as investing activities).",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory — 2024: GH₵1,500,000; 2023: GH₵1,100,000. Receivables — 2024: GH₵900,000; 2023: GH₵1,250,000. Payables — 2024: GH₵1,950,000; 2023: GH₵1,700,000. During 2024, Jak was acquired (Inventory: GH₵105,000; Receivables: GH₵160,000; Payables: GH₵180,000) and all shares in Bob were disposed of (Inventory: GH₵130,000; Receivables: GH₵140,000; Payables: GH₵120,000)."
    },
    {
        "q": "Calculate the movement in receivables and for inclusion in the group statement of cash flows.",
        "options": [
            "GH₵330,000 decrease in receivables and increase in cash flows",
            "GH₵330,000 increase in receivables and decrease in cash flows",
            "GH₵370,000 increase in receivables and decrease in cash flows",
            "GH₵370,000 decrease in receivables and increase in cash flows"
        ],
        "answer": 3,
        "explanation": "",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory — 2024: GH₵1,500,000; 2023: GH₵1,100,000. Receivables — 2024: GH₵900,000; 2023: GH₵1,250,000. Payables — 2024: GH₵1,950,000; 2023: GH₵1,700,000. During 2024, Jak was acquired (Inventory: GH₵105,000; Receivables: GH₵160,000; Payables: GH₵180,000) and all shares in Bob were disposed of (Inventory: GH₵130,000; Receivables: GH₵140,000; Payables: GH₵120,000)."
    },
    {
        "q": "Calculate the movement in payables for inclusion in the group statement of cash flows.",
        "options": [
            "GH₵190,000 increase in payables and increase in cash",
            "GH₵310,000 decrease in payables and decrease in cash",
            "GH₵310,000 increase in payable and increase in cash",
            "GH₵190,000 decrease in payables and decrease in cash"
        ],
        "answer": 0,
        "explanation": "",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory — 2024: GH₵1,500,000; 2023: GH₵1,100,000. Receivables — 2024: GH₵900,000; 2023: GH₵1,250,000. Payables — 2024: GH₵1,950,000; 2023: GH₵1,700,000. During 2024, Jak was acquired (Inventory: GH₵105,000; Receivables: GH₵160,000; Payables: GH₵180,000) and all shares in Bob were disposed of (Inventory: GH₵130,000; Receivables: GH₵140,000; Payables: GH₵120,000)."
    },
    {
        "q": "Which of the following statements is TRUE in a period of upward price level changes?",
        "options": [
            "Historical cost accounting understates profit.",
            "Net holding gains on monetary items arises when monetary assets exceed monetary liabilities.",
            "Net holding gains on monetary items arises when monetary liabilities exceed monetary assets.",
            "Depreciation charge to income statement based on historic cost of assets tends to be higher than the fair value of the usage of the asset in the period."
        ],
        "answer": 2,
        "explanation": "In a period of rising prices, owing money (monetary liabilities) becomes advantageous because you repay with money of lower real value than when borrowed. This real gain is called a net holding gain on monetary items and it arises when monetary liabilities exceed monetary assets.\nWhy the other options are wrong:\nA: HCA actually OVERSTATES profit because depreciation is based on lower historical cost, not the higher replacement cost of the asset consumed.\nB: Holding MORE monetary assets than liabilities in a period of inflation causes a LOSS in real value, not a gain.\nD: HCA depreciation is LOWER than the fair value of asset usage (since cost is lower than current value), not higher.",
        "preamble": ""
    },
    {
        "q": "Entity A has 80% preference shares in Entity B: Entity A has 40% equity shares in Entity C and Entity B has 30% equity shares in Entity C. Entity A controls both entities B and C and must therefore consolidate both entities.",
        "options": [
            "False",
            "True"
        ],
        "answer": 1,
        "explanation": "The statement asserts that Entity A controls both B and C. Under IFRS 10, control depends on power over the investee, exposure to variable returns, and ability to use that power to affect those returns. Preference shares can confer control where they carry voting rights or other mechanisms. The question explicitly states control exists, so consolidation of both entities is required. The statement is TRUE.",
        "preamble": ""
    },
    {
        "q": "Entity A has 40% equity shares in Entity B: Entity A has 40% equity shares in Entity C and Entity B has 30% equity shares in Entity C. Entity A controls entity C with total of 70% equity shares and must therefore consolidate Entity A.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1,
        "explanation": "The statement contains TWO errors:",
        "preamble": ""
    },
    {
        "q": "The following information has been extracted from the consolidated financial statements of WAGIM:",
        "options": [
            "GH₵800,000",
            "GH₵1,200,000",
            "GH₵3,600,000",
            "GH₵8,400,000"
        ],
        "answer": 1,
        "explanation": "NCI dividends reduce the NCI balance. We reconcile the NCI movement:\nOpening NCI balance (end of 2023) | GH₵27,600,000\nAdd: Profit attributable to NCI in 2024 | GH₵4,800,000\nLess: Closing NCI balance (end of 2024) | (GH₵31,200,000)\nDividend paid to NCI | GH₵1,200,000",
        "preamble": ""
    },
    {
        "q": "Given an entity’s share of associate’s profit after tax for the year to 31 December 2023 and 2024 as GH₵28,000 and GH₵30,000: Investment in associate balance for 2023 and 2024 as GH₵264,000 and GH₵276,000 respectively, the dividend received for the year to 31 December 2024 is calculated as ____________",
        "options": [
            "GH₵18,000",
            "GH₵16,000",
            "GH₵12,000",
            "GH₵10,000"
        ],
        "answer": 0,
        "explanation": "The investment in associate account is maintained under the equity method:\nOpening balance + Share of profit − Dividend received = Closing balance\nOpening investment in associate (2023 balance) | GH₵264,000\nAdd: Share of associate’s profit (2024) | GH₵30,000\nLess: Closing investment in associate (2024 balance) | (GH₵276,000)\nDividend received from associate (2024) | GH₵18,000",
        "preamble": ""
    },
    {
        "q": "Under Historical Cost Accounting (HCA), assets are recorded at the amounts at which they are acquired and liabilities at the amount at which they are contracted with a revision to reflect changes in their monetary value.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1,
        "explanation": "The statement is FALSE. Under HCA, assets ARE recorded at original acquisition cost and liabilities at the contracted amount — that part is correct. However, the statement adds “with a revision to reflect changes in their monetary value” which is INCORRECT. HCA does NOT revise values for changes in purchasing power or price levels. That feature belongs to current value methods such as CPP or CCA.",
        "preamble": ""
    },
    {
        "q": "The main difference between Current Purchasing Power (CPP) method and Current Cost Accounting (CCA) method is that CPP accounts for the effects of general price changes in goods and services whiles CCA accounts for the effects of specific price change in assets and liabilities in the underlying financial statements.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0,
        "explanation": "The statement is TRUE and correctly captures the core distinction: CPP uses a general price index (such as CPI) to restate all items uniformly, reflecting changes in general purchasing power. CCA, on the other hand, uses specific price indices relevant to each individual asset or liability held by the entity. This means CCA provides more entity-specific information about the cost of maintaining operating capacity.",
        "preamble": ""
    },
    {
        "q": "If environmental expenditure provides access to future economic benefits, it meets the IASB’s definition of an asset. It would normally be capitalised and depreciated over the useful life of the asset.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0,
        "explanation": "The statement is TRUE. Under the IASB Conceptual Framework, an asset is a present economic resource controlled by the entity as a result of past events from which future economic benefits are expected to flow. If environmental expenditure (e.g., pollution-control equipment, site restoration infrastructure) creates or gives access to future economic benefits, it satisfies this definition. It should be recognised as an asset on the balance sheet and depreciated over its useful economic life.\nSECTION A — ANSWER SUMMARY\nPrepared by Claude (Anthropic) for academic study — ACC402D Advanced Financial Reporting II, UCC 2024/2025",
        "preamble": ""
    }
]
  }

};
