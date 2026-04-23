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
    label: "Intro to Project Management",
    icon: "📋",
    color: "#fbbf24",
    questions: [
      { q: "A project is best defined as:", options: ["A temporary, unique endeavor with a defined beginning and end to create a specific outcome", "A permanent, routine ongoing operation", "A department within a company", "A long-term business strategy"], answer: 0, explanation: "A project is temporary (has a defined start and end), unique (creates a unique product, service, or result), and purposeful (aimed at achieving specific objectives within constraints)." },
      { q: "Which of the following is NOT a characteristic of a project?", options: ["Repetitive and ongoing", "Specific objective", "Temporary nature", "Requires resources"], answer: 0, explanation: "Projects are NOT repetitive and ongoing — that describes operations. Projects are temporary, unique, goal-oriented, and complex." },
      { q: "The Triple Constraint in project management consists of:", options: ["Quality, Risk, and Stakeholders", "Time, Cost, and Scope", "Initiation, Planning, and Closure", "Budget, Resources, and Communication"], answer: 1, explanation: "The Triple Constraint (Iron Triangle) is Time (schedule), Cost (budget), and Scope (deliverables). Changing any one constraint affects the others." },
      { q: "What is the correct sequence of the Project Life Cycle?", options: ["Initiation → Execution → Planning → Closure", "Initiation → Planning → Execution & Control → Closure", "Planning → Execution → Initiation → Closure", "Execution → Planning → Initiation → Closure"], answer: 1, explanation: "The Project Life Cycle follows: Initiation → Planning → Execution & Controls → Termination/Closure. Each phase has specific deliverables and decision points." },
      { q: "A project stakeholder is:", options: ["Only the project's end users", "Only the project team", "Any individual or organization who may have an interest in and be actively involved in the project", "Only the project sponsor"], answer: 2, explanation: "Stakeholders include all individuals and organizations with an interest in the project outcome — sponsors, customers, team members, suppliers, regulators, and the public." },
      { q: "Which document formally authorizes a project and appoints the project manager?", options: ["Risk register", "Project charter", "Project scope statement", "Gantt chart"], answer: 1, explanation: "The Project Charter formally authorizes the existence of the project, defines its objectives, scope, and constraints, and appoints the project manager with the authority to use organizational resources." },
      { q: "A Gantt chart is primarily used to:", options: ["Show the project schedule with activities and their durations displayed against a timeline", "Track project costs", "Manage stakeholder relationships", "Identify project risks"], answer: 0, explanation: "A Gantt chart is a bar chart showing project tasks plotted against time. It visually represents the project schedule, showing start/end dates, durations, dependencies, and progress." },
      { q: "The Critical Path in a project network is:", options: ["The longest sequence of dependent tasks through the project — determining the minimum project duration", "The path with the least activities", "The most expensive set of activities", "Activities the project manager finds most critical"], answer: 0, explanation: "The Critical Path is the longest sequence of dependent activities. Any delay on the critical path delays the entire project. It determines the minimum possible project duration." },
      { q: "What does 'float' (or 'slack') mean in project scheduling?", options: ["The contingency budget", "The project buffer time at the end", "The amount of time a task can be delayed without delaying the project completion date", "The number of resources on standby"], answer: 2, explanation: "Float (slack) is the amount of time a non-critical activity can be delayed without affecting the project's final deadline. Critical path activities have zero float." },
      { q: "The Work Breakdown Structure (WBS) is:", options: ["A stakeholder analysis diagram", "A risk assessment tool", "A bar chart showing the project schedule", "A hierarchical decomposition of the total project scope into smaller, manageable work packages"], answer: 3, explanation: "The WBS decomposes the project scope into progressively smaller work packages — making the scope manageable, assignable, and measurable. It is the foundation for cost and schedule planning." },
      { q: "A project delay is defined as:", options: ["Any scope change", "The inability of a project team to complete all stipulated activities within the estimated duration", "Finishing one day after the planned completion", "Having too many resources"], answer: 1, explanation: "Project delay is the team's inability to complete all project activities within the originally planned timeframe. Delays can be critical (affecting overall completion) or non-critical." },
      { q: "An 'excusable' delay is one:", options: ["Due to underestimated task durations", "Caused by poor planning by the contractor", "Caused by events beyond the contractor's control — such as natural disasters or client-caused delays", "Caused by scope creep"], answer: 2, explanation: "Excusable delays result from unforeseeable events outside the contractor's control — acts of God, government actions, client-caused delays. The contractor is typically granted a time extension but no additional compensation." },
      { q: "Which conflict resolution strategy seeks a win-win outcome?", options: ["Forcing/Competing", "Problem solving/Collaborating", "Avoidance/Withdrawal", "Smoothing/Accommodating"], answer: 1, explanation: "Problem Solving (Collaborating) seeks a win-win outcome by addressing the root cause of the conflict. It is the most effective long-term conflict resolution strategy in project management." },
      { q: "Risk management in a project involves:", options: ["Identifying, analyzing, and developing responses to potential events that could affect project objectives", "Assigning all risks to the client", "Only managing financial risks", "Ignoring low-probability risks"], answer: 0, explanation: "Project risk management is a systematic process of identifying, analyzing (probability × impact), planning responses (avoid, transfer, mitigate, accept), and monitoring risks throughout the project lifecycle." },
      { q: "The role of a Project Sponsor is to:", options: ["Manage the day-to-day schedule", "Conduct risk assessments", "Provide strategic direction, secure resources, remove high-level obstacles, and be the project's executive champion", "Do detailed project work"], answer: 2, explanation: "The Project Sponsor is the senior executive who owns the project at the organizational level — providing funding, strategic direction, removing obstacles, making high-level decisions, and accepting the final deliverable." },
      {
            "q": "According to the source material, which characteristic primarily distinguishes the 'temporary' nature of a project?",
            "options": [
                  "The activities must have a specific starting and ending point.",
                  "The product or service created by the project will have a short life cycle.",
                  "The project must be completed using only internal organizational resources.",
                  "The duration of the project must be short in terms of calendar days."
            ],
            "answer": 0,
            "explanation": "Temporary nature indicates that project activities must be commenced and completed within a specified period or specific longevity.",
            "preamble": "Consider the relationship between the project effort and its timeline for completion."
      },
      {
            "q": "Which of the following would be classified as a 'passive' stakeholder in a project environment?",
            "options": [
                  "The project manager",
                  "Public authorities and competitors",
                  "The project sponsor",
                  "The project coordinator"
            ],
            "answer": 1,
            "explanation": "Passive stakeholders consist of those affected indirectly or those who have an interest but are not directly involved in project execution.",
            "preamble": "Think about groups that are affected by the project outcome but do not participate in the daily work."
      },
      {
            "q": "In the context of the 'Triple Constraint,' which three factors have traditionally been seen as the primary competing project constraints?",
            "options": [
                  "Safety, Environment, and Ethics",
                  "Risk, Quality, and Resources",
                  "Scope, Time (Schedule), and Cost (Budget)",
                  "Communication, Stakeholders, and Procurement"
            ],
            "answer": 2,
            "explanation": "The traditional triple constraint triangle focuses on the balance between what work is done, how long it takes, and what it costs.",
            "preamble": "Look for the basic operational elements that often require trade-offs in project planning."
      },
      {
            "q": "Which conflict resolution approach focuses on coming to an agreement through yielding to the positions of others to maintain harmony?",
            "options": [
                  "Accommodation",
                  "Avoidance",
                  "Compromise",
                  "Collaboration"
            ],
            "answer": 0,
            "explanation": "Accommodation prioritizes relationships over goals, often resulting in one party yielding their ideas to preserve group harmony.",
            "preamble": "This strategy is often used when the relationship is considered much more important than the project goals."
      },
      {
            "q": "When a project is terminated because the organization creates a new operating group out of the project organization, it is known as termination by:",
            "options": [
                  "Extinction",
                  "Addition",
                  "Starvation",
                  "Integration"
            ],
            "answer": 1,
            "explanation": "Termination by addition occurs when a successful project is transitioned into a permanent part of the organization as a new department or group.",
            "preamble": "Consider the scenario where a project becomes its own permanent business unit."
      },
      {
            "q": "What distinguishes an 'excusable' delay from a 'non-excusable' delay in project management?",
            "options": [
                  "Excusable delays are those caused by the project manager's poor planning.",
                  "Excusable delays are events outside the project team's control, such as natural calamities.",
                  "Excusable delays only apply to non-critical path activities.",
                  "Excusable delays are those that save the project money."
            ],
            "answer": 1,
            "explanation": "Excusable delays involve 'force majeure' events or client-driven issues that entitle the team to extensions or compensation.",
            "preamble": "Think about who is responsible for the cause of the delay and whether it was preventable."
      },
      {
            "q": "In project cost management, 'indirect costs' are best described as:",
            "options": [
                  "Costs generally linked to overhead, such as utilities, taxes, and insurance.",
                  "Costs clearly assigned to a specific task, such as labor hours for a technician.",
                  "Costs that vary directly with the amount of project work produced.",
                  "Costs associated with hiring external consultants for a specific phase."
            ],
            "answer": 0,
            "explanation": "Indirect costs are shared across the organization and cannot be traced to a single specific project activity or work package.",
            "preamble": "Consider costs that would exist even if a specific project task were not being performed."
      },
      {
            "q": "What is the primary purpose of creating a Work Breakdown Structure (WBS)?",
            "options": [
                  "To establish the communication channels between the team and the client.",
                  "To identify all project stakeholders and their interests.",
                  "To subdivide project deliverables and work into smaller, manageable components.",
                  "To calculate the final budget and cost baseline for the project."
            ],
            "answer": 2,
            "explanation": "The WBS is a hierarchical decomposition of the total scope of work to be carried out to achieve project objectives.",
            "preamble": "Think about how a project manager organizes the total scope into manageable 'units of work'."
      },
      {
            "q": "In Project Time Management, how does a 'milestone' differ from a regular 'activity'?",
            "options": [
                  "Milestones are optional while activities are always mandatory.",
                  "Milestones involve physical labor while activities involve only planning.",
                  "Activities are only defined after the project is completed.",
                  "Milestones have a zero-day duration because they represent a significant moment in time."
            ],
            "answer": 3,
            "explanation": "A milestone is a significant point or event that signifies the completion of a major phase or deliverable and has no duration.",
            "preamble": "Reflect on the duration and significance of a major project checkpoint."
      },
      {
            "q": "Which stage of project team development is characterized by members beginning to work together and adjust their habits to support the team?",
            "options": [
                  "Storming",
                  "Performing",
                  "Norming",
                  "Adjourning"
            ],
            "answer": 2,
            "explanation": "Norming is the phase where team members resolve their differences and establish ground rules and cooperative habits.",
            "preamble": "This stage follows the period of initial conflict and precedes the period of high performance."
      },
      {
            "q": "A project manager calculates project risk by determining the likelihood of an event and the severity of its impact. If Probability is $P$ and Severity is $S$, the risk exposure is mathematically defined as:",
            "options": [
                  "$R = P \\times S$",
                  "$R = P + S$",
                  "$R = P^{S}$",
                  "$R = \\frac{P}{S}$"
            ],
            "answer": 0,
            "explanation": "The source material defines risk exposure as the function of the likelihood (probability) and the consequences (severity).",
            "preamble": "The calculation involves the interaction between how likely something is and how bad it would be if it happened."
      },
      {
            "q": "In Project Quality Management, the concept of 'Prevention over Inspection' suggests that:",
            "options": [
                  "Inspection is the only way to guarantee a product is fit for use.",
                  "Quality should be planned, designed, and built into the project rather than inspected into it.",
                  "Project managers should ignore small errors to save time on the schedule.",
                  "It is better to catch mistakes at the end of the project through rigorous testing."
            ],
            "answer": 1,
            "explanation": "The cost of preventing mistakes is significantly lower than the cost of correcting them after they are found during inspection.",
            "preamble": "Think about the financial and time benefits of getting things right the first time."
      },
      {
            "q": "According to the source, what is the 'Salience model' used for in Stakeholder Management?",
            "options": [
                  "To calculate the total budget needed for stakeholder meetings.",
                  "To group stakeholders based on their power, urgency, and legitimacy.",
                  "To track the communication frequency between the team and the client.",
                  "To identify which stakeholders are internal versus external."
            ],
            "answer": 1,
            "explanation": "The Salience model uses these three specific parameters to classify stakeholders and prioritize management effort.",
            "preamble": "Focus on the three specific parameters used to determine the importance of a stakeholder."
      },
      {
            "q": "What is the primary output of the 'Develop Project Charter' process?",
            "options": [
                  "The final list of all project deliverables accepted by the client.",
                  "A document that formally authorizes the project and gives the manager authority.",
                  "The detailed Project Management Plan",
                  "A Work Breakdown Structure dictionary."
            ],
            "answer": 1,
            "explanation": "The Project Charter establishes the project and authorizes the manager to apply organizational resources to project activities.",
            "preamble": "This document is the 'birth certificate' of a project."
      },
      {
            "q": "Which of the following is an example of 'Sale and Leaseback' as a long-term project funding source?",
            "options": [
                  "Selling an asset to a financial institution and then renting it back for a set term.",
                  "Receiving a grant from a government agency that does not require repayment.",
                  "Taking out a high-interest short-term loan from a commercial bank.",
                  "Issuing shares to the public to raise capital for project expansion."
            ],
            "answer": 0,
            "explanation": "This method releases capital tied up in assets while allowing the project to continue using the equipment or facility.",
            "preamble": "This process involves converting a fixed asset into liquid capital while maintaining its use."
      },
      {
            "q": "In project risk management, the strategy of 'Transfer' involves:",
            "options": [
                  "Moving the liability or management of the risk to a third party, such as an insurance firm.",
                  "Acknowledging the risk but deciding not to take any action until it occurs.",
                  "Reducing the probability or impact of the risk to an acceptable level.",
                  "Eliminating the cause of the risk entirely through planning."
            ],
            "answer": 0,
            "explanation": "Risk transfer moves the responsibility and impact to another party that is better equipped to handle it.",
            "preamble": "Think about hiring another company to take on the risk on your behalf."
      },
      {
            "q": "Which tool in Project Quality Management is also known as a 'Fishbone' or 'Ishikawa' diagram?",
            "options": [
                  "Control Chart",
                  "Cause-and-Effect Diagram",
                  "Pareto Diagram",
                  "Check Sheet"
            ],
            "answer": 1,
            "explanation": "The fishbone diagram is used to trace a problem's sources back to its actionable root causes.",
            "preamble": "This tool helps project managers find the root source of a specific quality problem."
      },
      {
            "q": "The 'Integrated Change Control' process is primarily concerned with:",
            "options": [
                  "Reviewing all change requests and approving or rejecting them while managing the impact.",
                  "Managing the hiring and firing of project team members.",
                  "Communicating the project's final success to the external media.",
                  "Preventing any changes from ever occurring during the project life cycle."
            ],
            "answer": 0,
            "explanation": "This process ensures that changes are documented and their impact on the integrated plan is fully assessed.",
            "preamble": "This process coordinates changes across all project knowledge areas."
      },
      {
            "q": "According to the source, which of the following is a common problem associated with Project Scope Management?",
            "options": [
                  "Ambiguity, where the scope leads to unnecessary work and confusion.",
                  "The project ends exactly when the schedule says it should.",
                  "Using too many stakeholders during the requirements collection phase.",
                  "Too much detail in the WBS dictionary."
            ],
            "answer": 0,
            "explanation": "The source identifies ambiguity as a primary cause of confusion and wasted effort in projects.",
            "preamble": "Look for a term that implies a lack of clarity in definitions."
      },
      {
            "q": "In the communication model, why is feedback considered essential?",
            "options": [
                  "It is only required for external communication with government agencies.",
                  "It allows the sender to charge more for the project services.",
                  "It ensures the message has been received and correctly understood.",
                  "It prevents stakeholders from asking any further questions."
            ],
            "answer": 2,
            "explanation": "The source mentions communication necessitates feedback to ensure information flow and stakeholder satisfaction.",
            "preamble": "Think about the sender's need to verify that their message worked as intended."
      },
      {
            "q": "Which of the following is a characteristic of a 'Project' as defined in the module?",
            "options": [
                  "It requires an unlimited budget and infinite resources.",
                  "It is only related to construction and industrial plant building.",
                  "It is customer-focused and undertaken to create a unique outcome.",
                  "It is a continuous process without a defined end."
            ],
            "answer": 2,
            "explanation": "The definition states projects are temporary, planned, and customer-focused endeavors to create unique products or services.",
            "preamble": "Focus on the goal-oriented and non-repetitive nature of the work."
      },
      {
            "q": "What happens during the 'Storming' phase of project team development?",
            "options": [
                  "The project is closed and team members are reassigned.",
                  "The team reaches its peak efficiency and requires little supervision.",
                  "The team is first brought together and members are polite.",
                  "Conflict occurs as members jockey for position and struggle with power."
            ],
            "answer": 3,
            "explanation": "Storming involves individuals testing boundaries and challenging the leader's authority or other members' roles.",
            "preamble": "This stage is named after the 'turbulence' that occurs when different personalities first clash."
      },
      {
            "q": "In project risk analysis, what is the 'Risk Factor ($RF$)' formula used to compare average probability ($P_f$) and average consequence ($C_f$)?",
            "options": [
                  "$RF = P_f + C_f$",
                  "$RF = P_f \\times 100$",
                  "$RF = P_f + C_f - (P_f)(C_f)$",
                  "$RF = \\frac{P_f}{C_f}$"
            ],
            "answer": 2,
            "explanation": "This formula allows for a standardized way to evaluate risk factors for projects or project phases.",
            "preamble": "The formula combines the two variables while subtracting their interaction to normalize the score."
      },
      {
            "q": "A 'Pareto Diagram' is used in quality management primarily to:",
            "options": [
                  "Allocate funding to the most expensive project phases.",
                  "Track the project's adherence to the critical path.",
                  "Identify the 20% of causes that are responsible for 80% of the problems.",
                  "Ensure that every team member receives equal training."
            ],
            "answer": 2,
            "explanation": "Pareto analysis identifies the 'vital few' sources that cause the majority of problem effects.",
            "preamble": "This tool is based on the 80/20 rule."
      },
      {
            "q": "Which procurement contract type involves a fixed price for a well-defined product or service?",
            "options": [
                  "Time and Materials Contract",
                  "Fixed Cost Contract",
                  "Cost Reimbursement Contract",
                  "Unit Price Contract"
            ],
            "answer": 1,
            "explanation": "In a fixed cost contract, the price is set at the beginning and does not change regardless of the vendor's costs.",
            "preamble": "Think of the contract that provides the most price certainty for the buyer."
      },
      {
            "q": "The 'Seven Basic Quality Tools (7QC)' includes a 'Check Sheet.' What is its primary function?",
            "options": [
                  "To rank the most common defects from highest to lowest frequency.",
                  "To show the relationship between two different variables.",
                  "To organize facts in a manner that facilitates the effective collection of useful data.",
                  "To map the operational details of procedures in a value chain."
            ],
            "answer": 2,
            "explanation": "Check sheets (tally sheets) are used for real-time data collection at the location where the data is generated.",
            "preamble": "It is often used as a simple tally sheet during the data gathering process."
      },
      {
            "q": "What is the key benefit of the 'Monitor and Control Project Work' process?",
            "options": [
                  "It releases the project team for their next assignment.",
                  "It allows for the tracking and reporting of progress against performance objectives.",
                  "It creates the legal contracts between the buyer and the seller.",
                  "It identifies all stakeholders at the start of the project."
            ],
            "answer": 1,
            "explanation": "This process ensures that the project stays aligned with the plan and objectives defined in the Project Management Plan.",
            "preamble": "This process compares actual performance with the planned baseline throughout the project."
      },
      {
            "q": "In Human Resource Management, which skill allows a manager to visualize the entire organization and work with abstract ideas?",
            "options": [
                  "Conceptual skills",
                  "Technical skills",
                  "Human skills",
                  "Operational skills"
            ],
            "answer": 0,
            "explanation": "Conceptual skills involve the ability to see the big picture and understand how various parts of the organization relate to one another.",
            "preamble": "Think about the 'big picture' thinking required at higher levels of management."
      },
      {
            "q": "The 'Power/Interest Grid' suggests that stakeholders with High Power and High Interest should be:",
            "options": [
                  "Monitored with minimal effort",
                  "Kept satisfied by meeting their basic needs",
                  "Managed closely",
                  "Kept informed through regular reports"
            ],
            "answer": 2,
            "explanation": "Stakeholders with both high influence and high concern for the project outcome require the most intense management engagement.",
            "preamble": "This group has the most ability to help or hinder the project and the most desire to do so."
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
            "GH\u20b58,000,000",
            "GH\u20b54,000,000",
            "GH\u20b52,400,000",
            "GH\u20b51,600,000"
        ],
        "answer": 3,
        "explanation": "Selling price (Sweed \u2192 Premier) | GH\u20b512,000,000\nLess: Cost of goods to Sweed | (GH\u20b58,000,000)\nTotal profit on intragroup sale | GH\u20b54,000,000\nGoods still held by Premier at year-end (100% \u2212 60% sold = 40% unsold) | \u00d7 40%\nUnrealised Profit (URP) to eliminate | GH\u20b51,600,000\n\nSweed is a subsidiary selling upstream to Premier (parent). Only unsold goods give rise to unrealised profit because the group has not yet recognised that profit externally. 40% of goods remain in Premier\u2019s closing inventory, so 40% of the GH\u20b54M profit = GH\u20b51,600,000 is unrealised and must be eliminated on consolidation.",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH\u20b512,000,000. These goods had originally cost Sweed GH\u20b58,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH\u20b535,000,000, Sweed GH\u20b520,000,000."
    },
    {
        "q": "At what value will cost of sales appear in the consolidated statement of profit or loss?",
        "options": [
            "GH\u20b555,000,000",
            "GH\u20b547,000,000",
            "GH\u20b544,600,000",
            "GH\u20b541,400,000"
        ],
        "answer": 2,
        "explanation": "Premier\u2019s cost of sales | GH\u20b535,000,000\nAdd: Sweed\u2019s cost of sales | GH\u20b520,000,000\nCombined COS | GH\u20b555,000,000\nLess: Eliminate intragroup sale (Sweed\u2019s revenue recorded in COS flow) | (GH\u20b512,000,000)\nAdd back: Unrealised profit adjustment (URP from Q1) | GH\u20b51,600,000\nConsolidated Cost of Sales | GH\u20b544,600,000\n\nIn consolidation, intragroup transactions are fully eliminated. Sweed\u2019s GH\u20b512M sale to Premier is removed. However, the URP of GH\u20b51.6M must be added back to COS because it inflates the inventory value sitting in Premier\u2019s books \u2014 the group\u2019s COS must reflect the true cost of goods still held.",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH\u20b512,000,000. These goods had originally cost Sweed GH\u20b58,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH\u20b535,000,000, Sweed GH\u20b520,000,000."
    },
    {
        "q": "Paapa Ltd acquired 80% of the ordinary share capital of Maami Ltd on 30 August 2024. On 31 December 2024, the share capital and retained earnings of Maami Ltd were as follows:",
        "options": [
            "GH\u20b51,860,000",
            "GH\u20b51,800,000",
            "GH\u20b51,700,000",
            "GH\u20b51,600,000"
        ],
        "answer": 3,
        "explanation": "Acquisition date: 30 August 2024. Profit accrues evenly \u2192 time-apportion to acquisition (8 months out of 12).\nShare capital | GH\u20b51,200,000\nRetained earnings at 1 January 2024 | GH\u20b5900,000\nProfit accrued Jan\u2013Aug 2024: GH\u20b5600,000 \u00d7 8/12 | GH\u20b5400,000\nNet assets at acquisition date (A) | GH\u20b52,500,000\n\nUsing the goodwill formula:   Goodwill = Cost of Investment + NCI \u2212 Net Assets at Acquisition\nA bargain purchase means Goodwill is negative, i.e. Goodwill = \u2212GH\u20b5300,000\n\u2212300,000 = Cost + 600,000 \u2212 2,500,000 | \nCost = \u2212300,000 + 2,500,000 \u2212 600,000 | \nCost of Investment in Maami Ltd | GH\u20b51,600,000",
        "preamble": "Premier has owned 90% of Sweed for many years. During the year, Sweed sold goods to Premier for GH\u20b512,000,000. These goods had originally cost Sweed GH\u20b58,000,000. Premier sold 60% of these goods by the year-end. The cost of sales figures for the two companies were as follows: Premier GH\u20b535,000,000, Sweed GH\u20b520,000,000."
    },
    {
        "q": "The fair value gain on the 40% original investment to be recognised in consolidated statement of profit or loss on 1 January 2024 is:",
        "options": [
            "GH\u20b5960,000",
            "GH\u20b5640,000",
            "GH\u20b5600,000",
            "GH\u20b5400,000"
        ],
        "answer": 2,
        "explanation": "When Tinda acquires an additional 20% to achieve control (step acquisition), the pre-existing 40% associate interest is remeasured to fair value at the acquisition date. The resulting gain is recognised in consolidated profit or loss (IFRS 3).\nFair value of existing 40% holding on 1 January 2024 | GH\u20b54,200,000\nLess: Carrying amount (original cost) of 40% holding | (GH\u20b53,600,000)\nFair value gain recognised in consolidated P&L | GH\u20b5600,000",
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH\u20b53,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH\u20b54,000,000 and GH\u20b53,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH\u20b52,800,000. On this date, the fair value of the existing holding in Bruce was GH\u20b54,200,000 and the retained earnings were GH\u20b54,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce\u2019s net assets on 1 January 2024 was GH\u20b58,000,000."
    },
    {
        "q": "The value of goodwill on 1 January 2024 is calculated as _________.",
        "options": [
            "GH\u20b51,600,000",
            "GH\u20b52,200,000",
            "GH\u20b52,560,000",
            "GH\u20b53,160,000"
        ],
        "answer": 1,
        "explanation": "NCI is measured using proportion of net assets. Total post-acquisition interest = 60%; NCI = 40% \u00d7 GH\u20b58,000,000 = GH\u20b53,200,000.",
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH\u20b53,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH\u20b54,000,000 and GH\u20b53,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH\u20b52,800,000. On this date, the fair value of the existing holding in Bruce was GH\u20b54,200,000 and the retained earnings were GH\u20b54,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce\u2019s net assets on 1 January 2024 was GH\u20b58,000,000."
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
        "preamble": "Tinda is a parent and also holds a 40% investment in Bruce at GH\u20b53,600,000, measured at cost in the individual financial statement on 1 January 2020. On that date, share capital and retained earnings of Bruce were GH\u20b54,000,000 and GH\u20b53,040,000 respectively. A further 20% of shares were acquired on 1 January 2024 in Bruce for GH\u20b52,800,000. On this date, the fair value of the existing holding in Bruce was GH\u20b54,200,000 and the retained earnings were GH\u20b54,000,000. Non-controlling interest is measured using proportion of net assets method. The fair value of Bruce\u2019s net assets on 1 January 2024 was GH\u20b58,000,000."
    },
    {
        "q": "The gross replacement cost at 31 December 2024 would be ______.",
        "options": [
            "GH\u20b5325,000",
            "GH\u20b5265,909",
            "GH\u20b5590,909",
            "GH\u20b5400,000"
        ],
        "answer": 2,
        "explanation": "Under Current Cost Accounting (CCA), assets are restated to their current replacement cost using specific price indices. The gross replacement cost is the full cost to replace the asset at current prices, before deducting depreciation.",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH\u20b5400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 \u2014 Index = 132; 31 December 2024 \u2014 Index = 195."
    },
    {
        "q": "The accumulated depreciation on the gross replacement cost at 31 December 2024 would be ____________.",
        "options": [
            "GH\u20b5265,909",
            "GH\u20b5325,000",
            "GH\u20b5400,000",
            "GH\u20b5590,909"
        ],
        "answer": 1,
        "explanation": "Asset purchased 30 June 2019. Reporting date: 31 December 2024. Age = 5 years and 6 months = 5.5 years.\nGross Replacement Cost (from Q7) | GH\u20b5590,909\nYears of useful life elapsed (30 Jun 2019 \u2192 31 Dec 2024) | 5.5 years\nTotal useful life | 10 years\nAccumulated Depreciation = GH\u20b5590,909 \u00d7 (5.5 \u00f7 10) | GH\u20b5325,000",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH\u20b5400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 \u2014 Index = 132; 31 December 2024 \u2014 Index = 195."
    },
    {
        "q": "The net replacement cost at 31 December 2024 would be ________.",
        "options": [
            "GH\u20b5590,909",
            "GH\u20b5400,000",
            "GH\u20b5325,000",
            "GH\u20b5265,909"
        ],
        "answer": 3,
        "explanation": "",
        "preamble": "A company bought an item of plant on 30 June 2019 at a cost of GH\u20b5400,000. Its expected useful life was ten years, with a nil value at the end. An identical model of plant is no longer available, but the following specific price indices are considered suitable: 30 June 2019 \u2014 Index = 132; 31 December 2024 \u2014 Index = 195."
    },
    {
        "q": "Calculate the movement in inventories, for inclusion in the group statement of cash flows.",
        "options": [
            "GH\u20b5375,000 decrease in inventory and increase in cash",
            "GH\u20b5425,000 decrease in inventory and increase in cash",
            "GH\u20b5375,000 increase in inventory and decrease in cash",
            "GH\u20b5425,000 increase in inventory and decrease in cash"
        ],
        "answer": 3,
        "explanation": "For group cash flows, working capital movements are adjusted to exclude balances of subsidiaries acquired or disposed of during the year (these are shown separately as investing activities).",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory \u2014 2024: GH\u20b51,500,000; 2023: GH\u20b51,100,000. Receivables \u2014 2024: GH\u20b5900,000; 2023: GH\u20b51,250,000. Payables \u2014 2024: GH\u20b51,950,000; 2023: GH\u20b51,700,000. During 2024, Jak was acquired (Inventory: GH\u20b5105,000; Receivables: GH\u20b5160,000; Payables: GH\u20b5180,000) and all shares in Bob were disposed of (Inventory: GH\u20b5130,000; Receivables: GH\u20b5140,000; Payables: GH\u20b5120,000)."
    },
    {
        "q": "Calculate the movement in receivables and for inclusion in the group statement of cash flows.",
        "options": [
            "GH\u20b5330,000 decrease in receivables and increase in cash flows",
            "GH\u20b5330,000 increase in receivables and decrease in cash flows",
            "GH\u20b5370,000 increase in receivables and decrease in cash flows",
            "GH\u20b5370,000 decrease in receivables and increase in cash flows"
        ],
        "answer": 3,
        "explanation": "",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory \u2014 2024: GH\u20b51,500,000; 2023: GH\u20b51,100,000. Receivables \u2014 2024: GH\u20b5900,000; 2023: GH\u20b51,250,000. Payables \u2014 2024: GH\u20b51,950,000; 2023: GH\u20b51,700,000. During 2024, Jak was acquired (Inventory: GH\u20b5105,000; Receivables: GH\u20b5160,000; Payables: GH\u20b5180,000) and all shares in Bob were disposed of (Inventory: GH\u20b5130,000; Receivables: GH\u20b5140,000; Payables: GH\u20b5120,000)."
    },
    {
        "q": "Calculate the movement in payables for inclusion in the group statement of cash flows.",
        "options": [
            "GH\u20b5190,000 increase in payables and increase in cash",
            "GH\u20b5310,000 decrease in payables and decrease in cash",
            "GH\u20b5310,000 increase in payable and increase in cash",
            "GH\u20b5190,000 decrease in payables and decrease in cash"
        ],
        "answer": 0,
        "explanation": "",
        "preamble": "The following are extracts from the group statement of financial position of Kayla as at 31 December: Inventory \u2014 2024: GH\u20b51,500,000; 2023: GH\u20b51,100,000. Receivables \u2014 2024: GH\u20b5900,000; 2023: GH\u20b51,250,000. Payables \u2014 2024: GH\u20b51,950,000; 2023: GH\u20b51,700,000. During 2024, Jak was acquired (Inventory: GH\u20b5105,000; Receivables: GH\u20b5160,000; Payables: GH\u20b5180,000) and all shares in Bob were disposed of (Inventory: GH\u20b5130,000; Receivables: GH\u20b5140,000; Payables: GH\u20b5120,000)."
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
            "GH\u20b5800,000",
            "GH\u20b51,200,000",
            "GH\u20b53,600,000",
            "GH\u20b58,400,000"
        ],
        "answer": 1,
        "explanation": "NCI dividends reduce the NCI balance. We reconcile the NCI movement:\nOpening NCI balance (end of 2023) | GH\u20b527,600,000\nAdd: Profit attributable to NCI in 2024 | GH\u20b54,800,000\nLess: Closing NCI balance (end of 2024) | (GH\u20b531,200,000)\nDividend paid to NCI | GH\u20b51,200,000",
        "preamble": ""
    },
    {
        "q": "Given an entity\u2019s share of associate\u2019s profit after tax for the year to 31 December 2023 and 2024 as GH\u20b528,000 and GH\u20b530,000: Investment in associate balance for 2023 and 2024 as GH\u20b5264,000 and GH\u20b5276,000 respectively, the dividend received for the year to 31 December 2024 is calculated as ____________",
        "options": [
            "GH\u20b518,000",
            "GH\u20b516,000",
            "GH\u20b512,000",
            "GH\u20b510,000"
        ],
        "answer": 0,
        "explanation": "The investment in associate account is maintained under the equity method:\nOpening balance + Share of profit \u2212 Dividend received = Closing balance\nOpening investment in associate (2023 balance) | GH\u20b5264,000\nAdd: Share of associate\u2019s profit (2024) | GH\u20b530,000\nLess: Closing investment in associate (2024 balance) | (GH\u20b5276,000)\nDividend received from associate (2024) | GH\u20b518,000",
        "preamble": ""
    },
    {
        "q": "Under Historical Cost Accounting (HCA), assets are recorded at the amounts at which they are acquired and liabilities at the amount at which they are contracted with a revision to reflect changes in their monetary value.",
        "options": [
            "True",
            "False"
        ],
        "answer": 1,
        "explanation": "The statement is FALSE. Under HCA, assets ARE recorded at original acquisition cost and liabilities at the contracted amount \u2014 that part is correct. However, the statement adds \u201cwith a revision to reflect changes in their monetary value\u201d which is INCORRECT. HCA does NOT revise values for changes in purchasing power or price levels. That feature belongs to current value methods such as CPP or CCA.",
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
        "q": "If environmental expenditure provides access to future economic benefits, it meets the IASB\u2019s definition of an asset. It would normally be capitalised and depreciated over the useful life of the asset.",
        "options": [
            "True",
            "False"
        ],
        "answer": 0,
        "explanation": "The statement is TRUE. Under the IASB Conceptual Framework, an asset is a present economic resource controlled by the entity as a result of past events from which future economic benefits are expected to flow. If environmental expenditure (e.g., pollution-control equipment, site restoration infrastructure) creates or gives access to future economic benefits, it satisfies this definition. It should be recognised as an asset on the balance sheet and depreciated over its useful economic life.\nSECTION A \u2014 ANSWER SUMMARY\nPrepared by Claude (Anthropic) for academic study \u2014 ACC402D Advanced Financial Reporting II, UCC 2024/2025",
        "preamble": ""
    }
]
  }

};
