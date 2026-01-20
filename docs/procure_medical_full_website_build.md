**FULL BUILD-GRADE WEBSITE SPEC**
# Procura Medical

## Build-Grade Website Specification

**Version:** v1.0
**Status:** FINAL – Phase 1 execution
**Design system:** copy www.tesla.com
**Business model:** Invoice-first procurement platform (NDIS Plan-Managed primary)
**Website:** www.procuramedical.com

---

## 1. Non-Negotiable Architectural Rules

These are **hard constraints**.

1. **Storefront-first optics**

   * Browsing and PDPs must feel like a normal, premium online store.
   * No invoice language on homepage hero.

2. **Checkout is the logic container**

   * Funding logic, plan-type gating, invoicing, and compliance live **only inside `/buy/[slug]`**.

3. **Single-item purchase model**

   * No cart in v1.
   * One product = one procurement decision.

4. **Systems > Products**

   * Systems are the primary IA.
   * Products live under systems.

5. **Invoice is a primary conversion**

   * For plan-managed users, “success” = invoice generated.
   * Payment happens later, off-site (EFT).

6. **Visual restraint**

   * Follow supplied HTML exactly for:

     * colour
     * spacing
     * typography
   * No blue medical styling. No UI creativity.

---

## 2. Route Map (Authoritative)

### Core Commerce

| Route               | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `/`                 | Orientation, credibility, system entry      |
| `/systems`          | Systems index                               |
| `/systems/[system]` | Curated system collection                   |
| `/p/[slug]`         | Product detail (primary conversion surface) |
| `/buy/[slug]`       | Purchase + funding logic container          |
| `/order/[id]`       | Order / invoice status                      |
| `/search`           | Site search (basic acceptable)              |

---

### Trust & Identity

| Route           | Purpose                                |
| --------------- | -------------------------------------- |
| `/about`        | Why Procura exists, credibility        |
| `/contact`      | Support + supplier contact             |
| `/how-it-works` | High-level explanation of buying paths |
| `/faq`          | Reduce support load                    |

---

### Guidance (Differentiator)

| Route              | Purpose                     |
| ------------------ | --------------------------- |
| `/guidance`        | Guidance hub index          |
| `/guidance/[slug]` | Structured guidance article |

---

### Policies (Footer)

| Route       |
| ----------- |
| `/shipping` |
| `/returns`  |
| `/privacy`  |
| `/terms`    |

---

## 3. Global Components

### Header

* Logo
* Systems dropdown
* Search
* Support / Contact

### Footer

* Policy links
* About
* Contact
* ABN + business details

### Design enforcement

* Use spacing, font sizes, colour tokens from supplied HTML only.

---

## 4. Page Templates (STRUCTURAL, NOT COPY)

---

## 4.1 Home (`/`)

**Purpose:**
Establish trust, calm authority, and guide users into systems.

**Sections (in order):**

1. Hero

   * One declarative statement
   * System entry CTAs only
2. Systems Overview

   * 3 system cards
3. Wellness Guidance Hub

   * 4 pillar cards
   * Mini triage wizard (3–5 questions)
4. Featured Products

   * Curated (max 4)
5. How Procurement Works

   * 3 simple steps
6. Support Prompt

**Must NOT include**

* Pricing tables
* Invoice CTAs
* NDIS jargon blocks

---

## 4.2 Systems Index (`/systems`)

**Purpose:**
Replace category shopping with curated systems.

**Sections**

1. Intro (what systems mean)
2. System cards (Mobility, Hygiene, Rehab Tech)

---

## 4.3 System Page (`/systems/[system]`)

**Purpose:**
Curated selection, not catalog browsing.

**Sections**

1. System intro
2. Curated product list (3–6 max)
3. Light filters (spec-based only)

**No infinite scroll. No sorting dropdowns.**

---

## 4.4 Product Detail Page (`/p/[slug]`) — **CRITICAL**

**Purpose:**
Enable confident procurement decisions.

**Sections**

1. Product header

   * Product name (system-style naming)
   * Subheading: NDIS code (if applicable)
2. Image gallery
3. Purchase module

   * Price
   * Lead time
   * Primary CTA: **Proceed to purchase**
4. Key specs table (structured)
5. Inclusions vs options
6. Delivery & returns summary (links)
7. Support block (“Need help choosing?”)

**Important**

* No cart language
* No “Add to cart”

---

## 4.5 Buy Flow (`/buy/[slug]`) — **Logic Container**

**Stepper (max 4 steps)**

### Step 1 — Delivery Details

* Name
* Email
* Phone
* Address

---

### Step 2 — How Are You Paying? (HARD GATE)

Options:

* **Plan-Managed NDIS**
* **Self-Managed / Private**
* **NDIA-Managed** → disabled with explanation

---

### Step 3A — Plan-Managed Flow

Fields:

* Participant name
* NDIS number (format validation only)
* Plan manager name
* Plan manager email

CTA:

* **Generate Tax Invoice**

System actions:

* Generate PDF invoice
* Email to user + plan manager
* Create order with status `pending_payment`

---

### Step 3B — Self-Managed / Private Flow

* Card payment (Stripe)
* On success → order status `paid`

---

### Step 4 — Confirmation

Displays:

* Order reference
* Next steps
* Link to `/order/[id]`

---

## 4.6 Order / Invoice Status (`/order/[id]`)

**Purpose:**
Transparency + audit trail.

**Sections**

1. Status timeline

   * Pending payment → Paid → Shipped
2. Invoice download
3. Payment instructions (if pending)
4. Tracking block (once shipped)
5. Support link

---

## 4.7 Guidance Hub (`/guidance`)

**Purpose:**
Differentiate via education, not persuasion.

**Sections**

1. Intro
2. 4 pillar cards
3. Guides list (curated)

---

## 4.8 Guidance Page (`/guidance/[slug]`)

**Template**

* Who this is for
* Best for / Not ideal for
* Decision factors
* Specs to consider
* Linked systems/products
* “Information only” disclaimer (quiet)

---

## 5. Component Inventory

Reusable components only.

* `SystemCard`
* `ProductCard`
* `ProductPurchaseModule`
* `FundingSelector`
* `InvoiceDetailsForm`
* `OrderStatusTimeline`
* `WellnessPillarCard`
* `MiniTriageWizard`
* `GuideTile`

Each component:

* Stateless where possible
* Controlled by page container

---

## 6. Data Model (Minimal, Real)

### Products

```
id
name
slug
system
ndis_code (nullable)
price_base
price_gap (nullable)
lead_time_text
images[]
specs_json
metadata {
  goals[]
  mobility_level_fit[]
  space_constraint_fit[]
  risk_flags[]
}
```

### Orders

```
id
product_id
customer_name
customer_email
delivery_address
funding_type
participant_id (nullable)
plan_manager_email (nullable)
status
invoice_pdf_url
timestamps
```

---

## 7. State Machine (Critical)

```
viewing
→ intent_declared
→ invoice_generated OR paid
→ pending_payment (plan-managed)
→ paid
→ shipped
```

No shortcuts.
No mixed states.

---

## 8. MVP Build Order (DO NOT CHANGE)

1. Layout shell + header/footer
2. Policies + about + contact
3. Systems index + system pages
4. PDP template + 5–10 products
5. `/buy/[slug]` invoice flow (stubbed PDF OK initially)
6. Order status page
7. Guidance Hub + 3 guides
8. Card payments (optional later)

---

## 9. Acceptance Gates (Supplier-Ready)

You are **ready to approach suppliers** when:

* Homepage + systems + PDPs look complete
* Buy flow works end-to-end
* Invoice generates
* Policies live
* Contact page live

That is it.

---
