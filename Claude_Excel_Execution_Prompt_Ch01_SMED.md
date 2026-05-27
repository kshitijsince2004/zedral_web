# MASTER PROMPT: Claude Excel Execution Engine — Chapter 1: Setup Time & Changeover Analysis (SMED)

**Project:** Hero Steels Consulting Execution Engine v4.0
**Chapter:** 1 — Setup Time & Changeover Analysis (SMED)
**Framework:** SMED (Single Minute Exchange of Die)
**Primary Datasets:** D1, D2, D3 | **Secondary:** D4, D6, D9 | **Optional:** D7, D5

---

## INSTRUCTIONS FOR CLAUDE

You are the **primary execution engine** for a consulting-grade operational efficiency analysis. Your job is to read the attached playbook chapter (Chapter 1: Setup Time & Changeover Analysis — SMED) and execute it **end-to-end in Excel**, producing a fully functional, consulting-grade workbook.

**Do not summarise. Do not explain theory. Execute.**

Read the attached file thoroughly — it is a 22-section consulting playbook. Then follow every instruction below exactly.

---

## PHASE 0: READ & UNDERSTAND THE ATTACHED PLAYBOOK

Before doing anything else:

1. Read the entire attached document: `HeroSteels_Consulting_Execution_Engine_v4.docx`
2. Pay special attention to these sections:
   - **Section 6** — Data Mapping Layer (which datasets, which columns, how they join)
   - **Section 7** — KPI Master List (all 51 KPIs with exact formulas)
   - **Section 8** — KPI Dependency Tree (calculation order)
   - **Section 9** — KPI Calculation Logic (step-by-step Excel instructions)
   - **Section 12** — Execution SOP (the 14-sheet workbook structure and step-by-step execution)
   - **Section 14** — Validation and Error Checks (expected ranges, cross-checks)
   - **Section 17** — Output Templates (formatting standards)
   - **Section 19** — Advanced Analysis (sensitivity tables, scenario analysis)

---

## PHASE 1: CREATE THE EXCEL WORKBOOK STRUCTURE

Create a workbook named `Ch01_SMED_Analysis_Master.xlsx` with exactly **14 sheets** in this order:

| Sheet # | Sheet Name | Purpose | Tab Colour |
|---------|-----------|---------|------------|
| 1 | 1_Raw_Data_D1 | Raw D1 data (20 machines × 7 cause columns, Jan + Feb) pasted without modification | RED |
| 2 | 2_Raw_Data_D2 | Raw D2 delay events (1,768 rows: LINE, DATE, SHIFT, TIME IN MIN, REASON) + add STD_REASON column | RED |
| 3 | 3_Standardisation | Reason code mapping table + standardised data from D2/D3 | ORANGE |
| 4 | 4_DT_KPIs | Cluster A — Downtime Magnitude KPIs (DT-01 to DT-08) | BLUE |
| 5 | 5_Setup_KPIs | Cluster B — Per-Machine Setup KPIs (ST-01 to ST-10) with ranking | BLUE |
| 6 | 6_OEE_KPIs | Cluster C — OEE & Availability KPIs (OE-01 to OE-09) | BLUE |
| 7 | 7_Delay_KPIs | Cluster D — Delay Reason KPIs (DR-01 to DR-10) from pivot of D2/D3 | BLUE |
| 8 | 8_Breakdown_KPIs | Cluster E — Breakdown & Reliability KPIs (BK-01 to BK-06) from D4/D5 | BLUE |
| 9 | 9_Financial_KPIs | Cluster F — Financial Impact KPIs (FI-01 to FI-08) + sensitivity analysis | GREEN |
| 10 | 10_Pareto_Chart | Machine setup time Pareto chart (bar + cumulative % line) | GREEN |
| 11 | 11_Delay_Pareto | Delay reason Pareto chart (horizontal bars, sorted descending) | GREEN |
| 12 | 12_Trend_Analysis | Month-on-month comparison (Jan vs Feb) side-by-side | GREEN |
| 13 | 13_Summary | Executive summary — all key findings on ONE page | GOLD |
| 14 | 14_Data_Notes | Data quality issues log, assumptions, anomalies | GREY |

---

## PHASE 2: DATA PREPARATION

### Sheet 3 — Reason Code Standardisation

The delay log (D2/D3) has **free-text REASON codes with inconsistent naming**. Before any analysis, create this mapping table:

**Column A: Original Reason** → **Column B: Standard Category**

Apply these mandatory mappings:

| Original (from D2/D3) | Standard Category |
|----------------------|-------------------|
| SETTING CHANGE | SETUP |
| SETTING CHANGED | SETUP |
| SETTING | SETUP |
| SETTING CHANGE + DINNER | SETUP (flag meal overlap) |
| LUNCH / SETTING CHANGED | SETUP (flag meal overlap) |
| R.M.S | RMS |
| R.M.S (Raw Material Shortage) | RMS |
| RMS | RMS |
| POWER FAILURE | POWER_FAILURE |
| POWER CUT | POWER_FAILURE |
| M.P.S | MANPOWER |
| MANPOWER SHORTAGE | MANPOWER |
| W/R CHANGE | WR_CHANGE |
| WORK ROLL CHANGE | WR_CHANGE |
| LUNCH | MEAL_BREAK |
| DINNER | MEAL_BREAK |
| TEA BREAK | MEAL_BREAK |

Then add a column `STD_REASON` to the D2/D3 data using:
```
=VLOOKUP([@REASON], Mapping_Table, 2, FALSE)
```

If any REASON code does not match, flag it as `UNCLASSIFIED` and document in Sheet 14_Data_Notes.

### Data Quality Checks (Apply to ALL datasets before analysis)

Run these 6 checks from the playbook's Section A.3:

1. **Completeness**: Count total rows vs expected. Check for blanks in key columns (LINE, DATE, TIME IN MIN, REASON). Flag if >5% missing.
2. **Consistency**: After standardisation, verify all REASON codes map to a standard category. No orphans.
3. **Accuracy**: SUM of D2 daily delays per machine per month should be within 10% of D1 monthly totals. If >10% gap, document.
4. **Timeliness**: Verify data covers Jan–Feb 2026.
5. **Validity**: Check for impossible values — negative time, >44,640 min/month (Jan) or >40,320 min/month (Feb), >100% availability.
6. **Uniqueness**: Check for duplicate records (same LINE + DATE + SHIFT + TIME + REASON). Deduplicate, keep most complete record.

Document ALL findings in Sheet 14_Data_Notes.

---

## PHASE 3: CALCULATE ALL 51 KPIs

Follow the **KPI Dependency Tree** — calculate in this exact order:

### Calculation Phase 1 — Raw Data KPIs (no dependencies)

**Cluster A — Downtime Magnitude (Sheet 4_DT_KPIs)**

Format: Col A = KPI ID | Col B = KPI Name | Col C = Formula Used | Col D = Jan-26 Value | Col E = Feb-26 Value

| KPI | Name | Formula | Unit |
|-----|------|---------|------|
| DT-01 | Total Downtime (All Causes) | `=SUM(D1.TotalDT)` for all 20 machines | Minutes |
| DT-02 | Total Setup/Operational Delay | `=SUM(D1.SetupDelay)` for all 20 machines | Minutes |
| DT-03 | Total Electrical Downtime | `=SUM(D1.Electrical)` for all 20 machines | Minutes |
| DT-04 | Total Mechanical Downtime | `=SUM(D1.Mechanical)` for all 20 machines | Minutes |
| DT-05 | Total Power Failure Downtime | `=SUM(D1.PowerFailure)` for all 20 machines | Minutes |
| DT-06 | Total PM Downtime | `=SUM(D1.PM)` for all 20 machines | Minutes |

**Cluster B — Setup Per Machine (Sheet 5_Setup_KPIs)**

Create a table: Col A = Machine Name | Col B = Setup Time (min) | Col C = Available Time | Col D = Setup % of Available

| KPI | Name | Formula | Unit |
|-----|------|---------|------|
| ST-01 | Setup Time per Machine (min/month) | Direct read from D1.SetupDelay per machine | Minutes |
| ST-02 | Average Setup Time per Machine | `=DT-02 / 20` | Minutes |
| ST-03 | Max Setup Time Machine | `=MAX(D1.SetupDelay)` → return machine name + value | Machine + min |
| ST-04 | Min Setup Time Machine | `=MIN(D1.SetupDelay)` → return machine name + value | Machine + min |
| ST-05 | Setup % of Available Time per Machine | `=Machine.SetupDelay / Machine.AvailableTime × 100` | % |

Available Time: January = 31 × 24 × 60 = **44,640 min**. February = 28 × 24 × 60 = **40,320 min**.

Sort by Setup Time descending. Add a Cumulative % column for Pareto.

**Cluster D — Delay Reasons (Sheet 7_Delay_KPIs)**

Build from Pivot Table of standardised D2/D3 data. Rows = STD_REASON, Values = SUM(TIME IN MIN) + COUNT.

| KPI | Name | Formula | Unit |
|-----|------|---------|------|
| DR-01 | Total Setting Change Time | `=SUMIFS(D2.TIME, STD_REASON, "SETUP")` | Minutes |
| DR-02 | Total R.M.S. Time | `=SUMIFS(D2.TIME, STD_REASON, "RMS")` | Minutes |
| DR-03 | Total Power Failure Time | `=SUMIFS(D2.TIME, STD_REASON, "POWER_FAILURE")` | Minutes |
| DR-04 | Total Meal Break Overlap Time | `=SUMIFS(D2.TIME, STD_REASON, "MEAL_BREAK")` | Minutes |
| DR-05 | Total Manpower Shortage Time | `=SUMIFS(D2.TIME, STD_REASON, "MANPOWER")` | Minutes |
| DR-06 | Total W/R Change Time | `=SUMIFS(D2.TIME, STD_REASON, "WR_CHANGE")` | Minutes |
| DR-08 | Unique Delay Reason Count | `=COUNTA(UNIQUE(STD_REASON))` | Count |

**Cluster E — Breakdown & Reliability (Sheet 8_Breakdown_KPIs)**

| KPI | Name | Formula | Source |
|-----|------|---------|--------|
| BK-01 | Mechanical Breakdown Frequency | Monthly count from D5 per machine | D5 |
| BK-02 | MTBF (Mean Time Between Failures) | Direct from D4 per machine | D4 |
| BK-03 | MTTR (Mean Time To Repair) | Direct from D4 per machine | D4 |
| BK-04 | Equipment Availability % | `=MTBF / (MTBF + MTTR) × 100` | D4 |
| BK-05 | Breakdown Trend (YoY) | Compare D5 monthly data 2025 vs 2026 | D5 |
| BK-06 | PM-to-CM Ratio | `=COUNT(PM orders) / COUNT(CM orders)` from D10 | D10 |

**NOTE:** D4 covers only Sept–Oct 2025. Document this limitation in Sheet 14.

### Calculation Phase 2 — Derived Ratios

| KPI | Name | Formula |
|-----|------|---------|
| DT-07 | Setup % of Total Downtime | `=DT-02 / DT-01 × 100` |
| DT-08 | Downtime % of Available Time | `=DT-01 / (20 × AvailableMinPerMachine) × 100` |
| ST-06 | Setup Time Spread (Range) | `=ST-03 value − ST-04 value` |
| ST-07 | Setup Concentration (Top 5) | `=SUM(Top 5 setup) / DT-02 × 100` |
| ST-08 | Month-on-Month Setup Change | `=(Feb DT-02 − Jan DT-02) / Jan DT-02 × 100` — normalise for days (31 vs 28) |
| ST-09 | Setup Events per Shift | `=COUNTIFS(STD_REASON, "SETUP") / total shifts` |
| ST-10 | Avg Duration per Setup Event | `=SUMIFS(TIME, STD_REASON, "SETUP") / COUNTIFS(STD_REASON, "SETUP")` |
| DR-07 | Top 5 Reasons % of Total | `=SUM(Top 5 reason mins) / SUM(all mins) × 100` |
| DR-09 | Setup Time per Machine per Day | `=SUMIFS(TIME, STD_REASON, "SETUP", LINE, X) / days` |
| DR-10 | Setup Time Variability (Std Dev) | `=STDEV(TIME where STD_REASON="SETUP" and LINE=X)` |
| OE-01 | Availability Rate per Machine | `=(AvailTime − TotalDT) / AvailTime × 100` |
| OE-02 | Availability WITHOUT Setup | `=(AvailTime − DT_excl_setup) / AvailTime × 100` where DT_excl_setup = Elec + Mech + Power + PM + Others |
| FI-01 | Production Rate (MT/hour) | `=D6.AvgMonthlyMT / ((TotalAvailMin − DT-01) / 60 / 20)` |

### Calculation Phase 3 — Composite KPIs

| KPI | Name | Formula |
|-----|------|---------|
| OE-03 | Availability Gap (Setup Impact) | `=OE-02 − OE-01` per machine (this quantifies setup's impact) |
| OE-04 | Performance Rate (estimated) | `=Actual MT / (Running hours × Rated MT/hr)` — requires machine specs; if unavailable, use best-month as proxy and note in assumptions |
| OE-05 | Quality Rate | `=(Dispatched − Returns) / Dispatched × 100` from D7 |
| OE-06 | Overall OEE | `=OE-01 × OE-04 × OE-05` (all as DECIMALS, not percentages) |
| OE-07 | Best Machine Availability | `=MAX(OE-01)` across all machines |
| OE-08 | Worst Machine Availability | `=MIN(OE-01)` across all machines |
| OE-09 | Plant Average Availability | `=AVERAGE(OE-01)` across all 20 machines |
| FI-03 | Production Value Lost to Setup (₹/month) | `=DT-02 / 60 × FI-01 × FI-02` |
| FI-07 | R.M.S. Cost of Lost Production | `=DR-02 / 60 × FI-01 × FI-02` |
| FI-08 | Quality Return Cost | `=D7.ReturnMT × (₹49,000 − ₹19,000)` (selling price minus O-grade recovery) |

### Calculation Phase 4 — Final / Board-Level KPIs

| KPI | Name | Formula |
|-----|------|---------|
| FI-02 | Contribution Margin per MT | Use **₹10,000/MT** as base estimate (range: ₹8K–₹12K) |
| FI-04 | Realistic Recovery (₹/month) | `=FI-03 × 0.30` (30% recovery = SMED Year 1 industry standard) |
| FI-05 | Annual Benefit Potential | `=FI-04 × 12` |
| FI-06 | Benefit per 1% OEE Improvement | `=D6.AvgMonthlyMT × FI-02 × 0.01` |

---

## PHASE 4: SENSITIVITY & SCENARIO ANALYSIS (Sheet 9_Financial_KPIs)

### 4A — Sensitivity Table (3×3 Matrix)

Create this exact table:

|  | Margin ₹8,000/MT | Margin ₹10,000/MT | Margin ₹12,000/MT |
|--|------------------|-------------------|-------------------|
| **20% Recovery** | `=DT-02/60 × FI-01 × 8000 × 0.20 × 12` | `=DT-02/60 × FI-01 × 10000 × 0.20 × 12` | `=DT-02/60 × FI-01 × 12000 × 0.20 × 12` |
| **30% Recovery (BASE)** | `=DT-02/60 × FI-01 × 8000 × 0.30 × 12` | **`=DT-02/60 × FI-01 × 10000 × 0.30 × 12`** | `=DT-02/60 × FI-01 × 12000 × 0.30 × 12` |
| **40% Recovery** | `=DT-02/60 × FI-01 × 8000 × 0.40 × 12` | `=DT-02/60 × FI-01 × 10000 × 0.40 × 12` | `=DT-02/60 × FI-01 × 12000 × 0.40 × 12` |

Highlight the BASE CASE cell (30% recovery, ₹10K margin) in **yellow**.

### 4B — Scenario Analysis (3 Scenarios)

| Scenario | Scope | Recovery | Margin | Timeline |
|----------|-------|----------|--------|----------|
| **Conservative** | SMED on top 3 machines only | 20% | ₹8,000/MT | 6 months |
| **Base** | SMED on top 5 machines + R.M.S. resolution | 30% | ₹10,000/MT | 4 months |
| **Aggressive** | SMED on all 20 machines + R.M.S. + meal-break elimination | 40% | ₹12,000/MT | 12 months |

Calculate annual benefit for each scenario.

---

## PHASE 5: CHARTS & VISUALISATION

### Chart 1 — Machine Setup Time Pareto (Sheet 10_Pareto_Chart)
- Bar chart: X-axis = Machine names (sorted by setup time descending), Y-axis = Setup time (min)
- Secondary Y-axis: Cumulative % line
- Highlight Top 5 machines in darker colour
- Title: "Machine Setup Time Pareto — [Month] [Year]"
- Source note: "Source: D1 Downtime Cause Analysis"

### Chart 2 — Delay Reason Pareto (Sheet 11_Delay_Pareto)
- Horizontal bar chart: Y-axis = STD_REASON (sorted by total minutes descending), X-axis = Minutes
- Add cumulative % line
- Title: "Delay Reason Pareto — [Month] [Year]"
- Source note: "Source: D2/D3 Daily Delay Log (Standardised)"

### Chart 3 — Availability Comparison (Sheet 6_OEE_KPIs)
- Grouped bar chart per machine: OE-01 (with setup) vs OE-02 (without setup)
- The GAP between them = OE-03 (setup impact on availability)
- Title: "Availability: Actual vs Without Setup — By Machine"

### Chart 4 — Downtime Waterfall (Sheet 4_DT_KPIs)
- Waterfall chart: Available Time → minus each loss category → = Running Time
- Categories: Setup, Electrical, Mechanical, Power Failure, PM, Others
- Title: "Downtime Composition Waterfall — [Month]"

### Chart 5 — Month-on-Month Trend (Sheet 12_Trend_Analysis)
- Side-by-side bar chart: Jan vs Feb setup time per machine
- Title: "Setup Time Trend: January vs February 2026"

---

## PHASE 6: EXECUTIVE SUMMARY (Sheet 13_Summary)

This sheet must fit on **ONE printed page**. Include:

1. **Title:** "Setup Time & Changeover Analysis — Hero Steels — [Month/Year]"

2. **3 Headline KPIs** (large font, prominent):
   - DT-07: Setup % of Total Downtime
   - FI-05: Annual Benefit Potential (₹ Crore/year)
   - ST-07: Top 5 Machine Concentration %

3. **1 Pareto Chart** — Machine setup time ranking (small, embedded)

4. **5 Key Insights** — Each in FINDING / SO WHAT / NOW WHAT format:
   - Example: "FINDING: DT-07 = 82%. SO WHAT: Equipment is reliable — the problem is operational (changeover procedures, material readiness). NOW WHAT: Deploy SMED on top 5 machines starting Week 3."

5. **5 Prioritised Actions** — Each with: Target Machine, Expected Impact, Timeline, Owner

6. **Footer:** Data source, date, prepared by

---

## PHASE 7: FORMATTING STANDARDS

Apply these formatting rules **consistently** across all sheets:

### Tables
- Font: Arial, 10pt for data, 11pt for headers
- Header row: Navy background (#1B3A6B), white text, bold
- Alternating row shading: White / Light blue (#EBF4FF)
- Borders: Light grey (#CCCCCC), 1pt
- Numbers: Right-aligned, Indian comma format (1,23,456), max 1 decimal
- Percentages: 1 decimal + % symbol
- Currency: ₹ symbol, Lakh/Crore notation for large numbers

### Colour Coding
- **Input cells** (raw data): Light blue background (#D6EAF8)
- **Calculation cells** (formulas): White background, blue font
- **Output/Result cells**: Light green background (#D5F5E3), bold
- **Assumption cells**: Light yellow background (#FEF9E7)
- **Error/Flag cells**: Light red background (#FADBD8)

### Charts
- Title: Bold, 14pt, above chart
- Axis labels: 10pt, grey
- Data labels: Show values on bars
- Colour palette: Navy (#1B3A6B), Steel (#607D8B), Accent (#2E86C1), Green (#27AE60), Red (#E74C3C)
- Legend: Bottom
- Source citation below chart

---

## PHASE 8: VALIDATION & CROSS-CHECKS

Before finalising, run ALL of these checks:

### Expected Ranges

| KPI | Expected Range | If Below → Check | If Above → Check |
|-----|---------------|-------------------|-------------------|
| DT-01 | 200,000–400,000 min/month | Missing machines or blank cells | Double-counting or wrong available time |
| DT-07 | 70%–90% | Setup may be split across columns; check "Others" | Almost all DT is setup — verify classification |
| ST-05 | 5%–90% per machine | Efficient machine or data issue | Extreme outlier (CTL-3 at 87% — verify if operational) |
| OE-01 | 10%–95% per machine | Major problem or data error | Almost no downtime — verify |
| OE-03 | 5%–60% per machine | Setup not significant for this machine | Setup destroying availability — SMED priority |
| FI-05 | ₹3–8 Crore/year | Check FI-01 and FI-02 inputs | Check if DT-02 includes non-setup delays |

### Mandatory Cross-Checks

1. `SUM(D2 all delay mins, all machines, Jan)` ≈ `DT-01 from D1` (within 10%)
2. Available time: Jan = 44,640 min/machine. Feb = 40,320 min/machine
3. Running time = Available − Total DT → must be positive for ALL machines
4. `Elec + Mech + Setup + Power + PM + Others` = Total DT (per machine)
5. FI-01 (production rate) must be between 1.5–4.0 MT/hr

### Common Errors to Avoid

- Do NOT mix "with setup" and "without setup" columns in D1
- Do NOT use un-standardised reason codes in any pivot or SUMIFS
- Use 31 days for January, 28 for February — never assume 30
- Exclude non-operational machines from plant averages (verify CTL-3)
- Use DECIMAL OEE legs when multiplying (0.65, not 65%)
- "SETTING CHANGE + DINNER" includes BOTH setup AND meal break — don't double-count

---

## PHASE 9: DATA NOTES & ASSUMPTIONS (Sheet 14_Data_Notes)

Document the following in a structured table:

### Assumptions Table
| ID | Assumption | Basis | Sensitivity | How to Validate |
|----|-----------|-------|-------------|-----------------|
| A01 | All 20 machines operational full month | D1 available time | If CTL-3 down, reduces total by ~39K min | Ask plant manager |
| A02 | Contribution margin = ₹10,000/MT | Grant Thornton range (₹8K–12K) | ±20% swing on FI-05 | Get from SAP FI/CO |
| A03 | 30% recovery rate (Year 1 SMED) | Industry standard | At 20%: lower; at 40%: higher | Measure after 3 months |
| A04 | Production rate ≈ 2.5 MT/hr | 12-month avg / estimated running hrs | ±0.5 MT/hr → ±20% on FI-05 | Calculate per-machine |
| A05 | R.M.S. = material planning failure | D2 coding | If 50% are quality holds, recoverable time halves | Cross-check D11(QM) |
| A06 | D2/D3 is complete | Supervisor daily log | If events missed, actual DT higher | Compare D2 sum vs D1 total |
| A07 | Jan–Feb 2026 is representative | D6 shows ±6% monthly variance | Seasonal effects possible | Repeat after 6 months |
| A08 | "Setup" = machine-stop time only | D1 definition | If includes idle/waiting, SMED targets change | Verify with plant |

### Missing Data Log
| KPI(s) Affected | What's Missing | Why Needed | How to Acquire | Priority |
|-----------------|---------------|-----------|---------------|----------|
| ST-09, ST-10, DR-10 | Per-event changeover log with activity breakdown | SMED Stages 0–2 need activity-level data | Deploy Changeover Log Form on top 5 machines | CRITICAL |
| OE-04 | Rated speed per machine (MT/hr) | Performance leg of OEE | Machine spec plates or LINE SPECIFICATION doc | HIGH |
| OE-05 per machine | Per-machine quality defect rate | Machine-level OEE | Request from Quality dept | MEDIUM |
| FI-02 | Actual margin per MT by grade | Grade-specific financial impact | Request from Finance | MEDIUM |
| DR-01 accuracy | Standardised reason code master | Clean Pareto analysis | Create mapping table (done in Phase 2) | HIGH |

---

## PHASE 10: REVIEW CHECKLIST

Before considering the workbook complete, verify **every single item**:

| # | Check Item | Status |
|---|-----------|--------|
| 1 | All required datasets (D1, D2, D3, D4, D5, D6, D7) collected and pasted into raw data sheets | ☐ |
| 2 | Reason codes standardised — mapping table created, STD_REASON column populated | ☐ |
| 3 | All 6 data quality checks (completeness, consistency, accuracy, timeliness, validity, uniqueness) applied and documented | ☐ |
| 4 | All 51 KPIs calculated — every KPI in Clusters A–F has a value for Jan; Feb where available | ☐ |
| 5 | KPI dependency order followed: Phase 1 → 2 → 3 → 4 | ☐ |
| 6 | All 5 cross-checks from Phase 8 verified and passed | ☐ |
| 7 | All assumptions documented in Sheet 14_Data_Notes | ☐ |
| 8 | All missing data items flagged with acquisition plan | ☐ |
| 9 | Machine Pareto chart (Sheet 10) created with cumulative % line | ☐ |
| 10 | Delay Reason Pareto chart (Sheet 11) created | ☐ |
| 11 | Minimum 5 insights written in FINDING / SO WHAT / NOW WHAT format | ☐ |
| 12 | Minimum 5 prioritised actions with machine, timeline, impact, owner | ☐ |
| 13 | Financial impact calculated — FI-05 with 3×3 sensitivity table | ☐ |
| 14 | 3 scenario analyses (Conservative, Base, Aggressive) complete | ☐ |
| 15 | Executive summary (Sheet 13) fits one printed page | ☐ |
| 16 | All formatting follows Section 17 standards (navy headers, alternating rows, Indian commas) | ☐ |
| 17 | Cross-linkages to other chapters noted (Ch2 OEE, Ch3 Breakdown, Ch36 RMS, etc.) | ☐ |
| 18 | CTL-3 anomaly (87% setup time) investigated and documented | ☐ |
| 19 | 4Hi(R) spike to 35 breakdowns in Jan-26 flagged for investigation | ☐ |
| 20 | All data quality issues, assumptions, and anomalies documented in Sheet 14 | ☐ |

---

## CRITICAL REMINDERS

1. **Do NOT make random assumptions.** If data is missing, highlight it in yellow, write "DATA NEEDED" in the cell, and document in Sheet 14.

2. **Do NOT skip any KPI.** All 51 KPIs must be calculated. If a KPI cannot be calculated due to missing data, enter "N/A — [reason]" and document.

3. **CRITICAL INSIGHT TO WATCH FOR:** If DR-02 (R.M.S. time) > DR-01 (Setup time), this means raw material shortage is a BIGGER problem than changeover time. Flag this prominently — it changes the priority of intervention.

4. **CTL-3 Anomaly:** CTL-3 shows ~87% of available time as "setup." This is almost certainly NOT all changeover. Investigate. Likely includes idle/waiting time miscategorised as setup.

5. **The "setup" column in D1 is a catch-all.** It includes true changeover time PLUS R.M.S., manpower shortage, and other operational delays. The D2/D3 drill-down is essential to separate these.

6. **This is a VALIDATION exercise.** The goal is not just to produce numbers, but to test whether the playbook methodology actually works end-to-end. If you find gaps, logic errors, or steps that are unclear — document them prominently in Sheet 14 under a section called "PLAYBOOK GAPS IDENTIFIED."

---

## DATASETS REQUIRED (Attach these alongside the playbook)

You will need to provide Claude with:

| Dataset | File Description | Key Columns |
|---------|-----------------|-------------|
| **D1** | Downtime by Cause Analysis (Jan + Feb 2026) | Process Stage, Electrical, Mechanical, Setup/Op Delay, Power Failure, PM, Others, Total DT, Available Time |
| **D2** | Daily Production & Delay Log — January 2026 | LINE, DATE, SHIFT, TIME IN MIN, AGENCY, REASON |
| **D3** | Daily Production & Delay Log — February 2026 | Same as D2 |
| **D4** | MTTR/MTBF Table + Electricity (Sept–Oct 2025) | Machine, Delay min, Frequency, MTBF hrs, MTTR hrs, Availability %, KWH, KWH/TON |
| **D5** | Mechanical Breakdown Frequency (Jan 2025–Feb 2026) | Machine, Monthly breakdown count (14 months) |
| **D6** | Monthly Production Summary (Mar 2025–Feb 2026) | Month, Production MT |
| **D7** | Quality Complaints & Returns (FY 2025-26) | Complaint date, Customer, Grade, Thickness, Defect type, Return qty, Disposition |

**Attach all dataset files when prompting Claude. Without the actual data, Claude can only build the template structure with placeholder formulas.**

---

*Prompt Version: 1.0 | Based on: HeroSteels_Consulting_Execution_Engine_v4.docx — Chapter 1 | Prepared: April 2026 | Zedral Internal*
