## 1) Summary (SUPPORTED)

**“Design system: copy [www.tesla.com”](http://www.tesla.com”)** is treated as **design language + tone + restraint**, not literal copying. The SSOT below is **single canonical**: **full sitemap + navigation labels + header behaviour + 3 systems + page templates + workflows/state machines + key microcopy + guidance hub pillars + system intros + component inventory + data model + constraints + must-not-exist list + initial 6-SKU slate**. It is implementation-ready for custom Next.js with **no follow-up questions**: **systems-led, storefront-first optics, invoice-first procurement for plan-managed, card only for self-managed/private, NDIA-managed blocked**.

---

## 2) Detailed Breakdown

# Procura Medical — Website SSOT (Build-Grade Spec)

**Version:** v1.1 (canonical)
**Language:** Australian English only
**Tone (frontend):** minimalist, authoritative, high-trust, non-medical, non-“caring”, Tesla-like clarity
**Policies:** locked neutral/consumer-law-safe tone (not Tesla-tone)
**Business model:** procurement platform (not conventional ecommerce)
**Primary conversion:** plan-managed invoice generated (order created as `pending_payment`)
**Secondary conversion:** card payment for self-managed/private (optional to enable)
**NDIA-managed:** blocked
**Website:** [www.procuramedical.com](http://www.procuramedical.com)

---

# A) Non-Negotiable Rules (Hard Constraints)

1. **Storefront-first optics**

* Looks like a premium store. Does not feel like forms.
* **No invoice/funding/NDIS language in homepage hero.**

2. **Systems > products**

* Top-level IA is Systems. Products live under Systems.
* Systems are your 3 categories.

3. **No cart model in v1**

* Single-item procurement decision.
* **No cart UI. No add-to-cart language anywhere.**

4. **Funding logic lives inside purchase flow**

* Funding selection, consents, invoicing, compliance language live only in:

  * **`/buy/[slug]`** (full logic), and
  * **`/how-it-works`** (high-level explanation only)

5. **Plan-managed users never pushed to card**

* Plan-managed flow = invoice generation + `pending_payment`.
* No card steps inside plan-managed.

6. **Policies are locked**

* Policies remain neutral/ACL-safe; do not apply “Tesla-tone” to policies.

7. **Minimal text, maximal structure**

* Any explanation must be scannable in **<10 seconds**.

---

# B) Information Architecture (Full Sitemap)

## Core

* `/` Home
* `/systems` Systems Index
* `/systems/hygiene` System Page: Hygiene
* `/systems/mobility` System Page: Mobility
* `/systems/rehab` System Page: Rehab
* `/p/[slug]` Product Detail Page (PDP)
* `/buy/[slug]` Proceed to Purchase (logic container)
* `/order/[id]` Order / Invoice Status

## Trust

* `/how-it-works` How it works (full copy)
* `/faq` FAQ
* `/about` About
* `/contact` Contact / Support

## Guidance

* `/guidance` Guidance Hub
* `/guidance/[slug]` Guidance Article Template

## Search

* `/search` Search results

## Policies (locked tone)

* `/shipping`
* `/returns`
* `/privacy`
* `/terms`

---

# C) Exact Navigation Labels + Header Behaviour

## Header labels (desktop)

* **Systems** (dropdown)

  * Hygiene
  * Mobility
  * Rehab
* **Guidance**
* **How it works**
* **Support**
* Search icon (expands to input)

## Header behaviour

* Home top: transparent
* After scroll: solid/blur background, high-contrast text
* Always readable on any background
* Mobile: hamburger menu with same labels and order

---

# D) The 3 Systems (Names + One-line Descriptors + Intro Copy)

## 1) Hygiene

**Descriptor:** Bathroom and daily living infrastructure for safe routine care.
**System intro (system page lead):**
Hygiene equipment built for stability, clearance, and cleanability—spec-led, fit-checked, procurement-ready.

## 2) Mobility

**Descriptor:** Mobility and transfer infrastructure for controlled movement and support.
**System intro:**
Mobility equipment selected for load, geometry, and adjustability—built to reduce friction in daily movement.

## 3) Rehab

**Descriptor:** Rehabilitation infrastructure for structured home and clinic programs.
**System intro:**
Rehab tools chosen for repeatability and safety—clear requirements, clear limits, no inflated claims.

---

# E) Homepage — Components in Exact Order + Behaviour

**Route:** `/`
**Core intent:** premium storefront-first brand presence; systems > products; no cart; no invoice language in hero

## Screen 1 — Hero (brand only)

* Image: minimalist chair image (no people)
* Eyebrow: Procura Medical
* Headline: **Advanced Care Infrastructure**
* Subcopy: one sentence max (impactful, factual)
* Primary CTA: **Explore systems** (scroll to Systems section)
* Secondary CTA: **How it works** (link)

**Must NOT:** invoice/payment language, pricing pressure, NDIS jargon blocks

## Screen 2 — Systems Overview

* Title: Systems
* 3 system cards (Hygiene, Mobility, Rehab)
* Each card links to `/systems/[system]`
* Microcopy per card: 1 line descriptor only

## Screen 3 — Guidance Preview (Decision Framework)

* Title: Decision framework
* Pillar tiles (see section I)
* Links to `/guidance` or pillar-specific `/guidance/[slug]`

## Screen 4 — Featured Products (curated)

* Title: Featured products
* 4 max product cards
* CTA per card: **View details**

## Screen 5 — Procurement Process (high-level)

* Title: Procurement process
* 4 steps (ultra-short):

  1. Select product
  2. Confirm fit
  3. Choose funding
  4. Track status
* CTA: **Proceed** (links to `/systems`)

## Footer

* Policies + About + Support + ABN/business details

---

# F) System Page Structure (`/systems/[system]`)

## Sections (in order)

1. System header

* System name + one-line descriptor

2. System intro (2–3 sentences max)

* Emphasise specs + fit + procurement readiness

3. Curated product list (3–6 max)

* ProductCard grid (no infinite scroll)

4. Light filters (spec-driven only)

* Examples: SWL range, width/clearance, indoor/outdoor (system dependent)

5. Guidance prompt

* Link into relevant guidance

6. Support prompt

* Link to Support

**Must NOT:** marketplace sorting, endless catalogue browsing, promo banners, discount badges

---

# G) Product Page Structure (`/p/[slug]`) + CTA Microcopy (Locked)

## Sections (in order)

1. Header

* Product name
* System label
* NDIS code badge (if applicable)

2. Gallery

* 3–6 images max

3. Purchase module

* Price (or “From $X” if used)
* Lead time text (range)
* Primary CTA: **Proceed to purchase**
* Quiet helper line: **“Funding is selected in the next step.”**

4. Specs table (structured; no prose wall)
5. Inclusions vs options
6. Fit guardrails (short)

* “May not be suitable if…” (bullets)

7. Delivery & returns summary (links only)
8. Support block

**Must NOT:** “Add to cart”, “Checkout now”, urgency language, “limited stock” unless verified

---

# H) Proceed to Purchase Flow (`/buy/[slug]`) — Full Workflow Copy + Behaviour

## Page heading

**Proceed to purchase**
Intro: Confirm delivery details and choose how this order is funded.

### Step 1 — Delivery details

Fields: name, email, phone, address
Microcopy: “Used to confirm fit, delivery, and documentation.”
Footer note: “No payment is taken at this step.”

### Step 2 — Funding pathway (hard gate)

Heading: **How will this order be funded?**
Options:

* **Plan-managed NDIS** — “Generate an invoice for your plan manager.”
* **Self-managed / Private** — “Pay by card and proceed to dispatch.”
* **NDIA-managed** (disabled) — “Agency-managed purchases are not supported.”

### Step 3A — Plan-managed

Fields: participant name, NDIS number, plan manager name, plan manager email
CTA: **Generate invoice**
System actions:

* Create order `pending_payment`
* Generate invoice PDF
* Email invoice to customer + plan manager

Confirmation microcopy:
**“Invoice generated and sent. Dispatch begins after payment is received.”**

### Step 3B — Self-managed / Private

Card payment block (Stripe optional to enable now or later)
CTA: **Pay by card**
System actions:

* Create order `paid` on success

### Step 4 — Confirmation

Heading: **Order created**
Displays:

* Order reference
* Next steps (contextual)
  CTA: **View order status**

---

# I) Guidance Hub — Pillar Titles + One-liners + Structure

## `/guidance` page structure

1. Header: Guidance
2. Pillars grid (4 tiles)
3. Guides list (curated; not a blog)
4. Support prompt

## Pillars (titles + one-liners)

1. **Fit & Clearance** — Know the measurements that prevent the wrong purchase.
2. **Safety & Load** — Match load ratings and stability to real use.
3. **Daily Workflow** — Choose what works every day, not just on paper.
4. **Future Proofing** — Select adjustability and serviceability that lasts.

## Guidance article template (`/guidance/[slug]`) — Full wording

**Title**
**One-line summary** (what this guide decides)

Sections:

* **Who this is for** (participant / plan manager / clinician / carer)
* **Best for** (bullets)
* **Not ideal for** (bullets)
* **What to confirm** (structured checklist)
* **Specs that matter** (bullets, measurable)
* **Common mistakes** (bullets)
* **Recommended products** (2–4 linked)
* **Support** CTA: “Get support”
* Disclaimer (quiet): “Information only. For complex needs, consult an appropriate clinician.”

Tone: factual, minimal, no counselling language.

---

# J) Order / Invoice Status Page (`/order/[id]`) — All States Wording + Behaviour

## Persistent header

* Order reference
* Product name
* Funding type
* Support link

## Status timeline labels

* Pending payment
* Paid
* Shipped
* Cancelled

### State: Pending payment

Body: “Awaiting payment from the nominated plan manager.”
Actions:

* Download invoice
* Payment instructions
* Contact support
  Footer: “Dispatch begins after payment is received.”

### State: Paid

Body: “Payment received. Preparing dispatch.”
Actions:

* View order details
* Contact support

### State: Shipped

Body: “Dispatched. Tracking available below.”
Actions:

* View tracking
* View order details
* Contact support

### State: Cancelled

Body: “This order has been cancelled.”
Actions:

* Contact support

---

# K) How it Works Page (`/how-it-works`) — Full Copy (Canonical)

**Title:** How it works

Intro:
“Procura Medical enables procurement without forcing upfront payment for plan-managed orders.”

Steps:

1. **Select** — Browse systems and review specifications.
2. **Confirm** — Confirm fit, clearance, and load requirements.
3. **Choose funding** — Plan-managed invoice or self-managed/private payment.
4. **Complete** — Plan-managed: invoice issued immediately. Card: payment confirms the order.
5. **Track** — Track documentation and dispatch from one page.

Closing note:
“Procura Medical supplies infrastructure, not clinical advice.”

---

# L) Component Inventory (Reusable)

Global:

* `HeaderNav`
* `Footer`
* `SearchOverlay`
* `SystemCard`
* `ProductCard`
* `SpecTable`
* `Badge`
* `CTAButton`

Home:

* `HeroSection`
* `SystemsOverview`
* `GuidancePreview`
* `FeaturedProducts`
* `ProcurementProcess`

System:

* `SystemIntro`
* `SpecFiltersLight`
* `CuratedProductGrid`

PDP:

* `ProductGallery`
* `PurchaseModule`
* `FitGuardrails`
* `DeliveryReturnsLinks`
* `SupportBlock`

Buy flow:

* `Stepper`
* `DeliveryForm`
* `FundingSelector`
* `PlanManagedForm`
* `CardPaymentBlock`
* `ConfirmationPanel`

Order:

* `OrderStatusTimeline`
* `InvoiceDownload`
* `PaymentInstructions`
* `TrackingBlock`

Guidance:

* `PillarTile`
* `GuideTile`
* `GuideTemplateLayout`

---

# M) Data Model (Minimal but Real)

## Products

* `id`
* `name`
* `slug`
* `system` (hygiene|mobility|rehab)
* `ndis_code` (nullable)
* `price_base`
* `price_gap` (nullable)
* `lead_time_text`
* `images[]`
* `specs_json`
* `metadata`:

  * `goals[]`
  * `mobility_level_fit[]`
  * `space_constraint_fit[]`
  * `risk_flags[]`

## Orders

* `id`
* `product_id`
* `customer_name`
* `customer_email`
* `customer_phone`
* `delivery_address`
* `funding_type` (plan|self|private)
* `participant_id` (nullable)
* `plan_manager_name` (nullable)
* `plan_manager_email` (nullable)
* `status` (pending_payment|paid|shipped|cancelled)
* `invoice_pdf_url` (nullable)
* `tracking_url` (nullable)
* timestamps

---

# N) Workflows (State Machines)

## Primary (plan-managed)

`viewing → intent_declared → pending_payment (invoice_generated) → paid → shipped`

## Secondary (card)

`viewing → intent_declared → paid → shipped`

## NDIA-managed

Blocked at funding selector (no order creation)

---

# O) Must NOT Exist (Stop-the-line list)

* Shopping cart / add-to-cart UI
* Checkout-first browsing (no forcing payment pages from PDP)
* Homepage hero mentioning invoices/NDIS jargon
* “Medical blue” aesthetic or “caring” language on frontend
* Discounts, promo banners, “save $”, countdowns
* Reviews/testimonials (until controlled sourcing)
* Marketplace filters/sorting/infinite scroll catalogue
* Any wording implying ACL rights are excluded (policies already handle this)

---

# P) 6-SKU Initial Catalogue (Session SSOT)

**Systems are the categories. Two products per system.**
(Where unverified, do not publish until supplier evidence exists.)

## Hygiene (2)

* Tilt-in-space shower commode (supported concept)
* Height-adjustable over-toilet aid (supported concept)

## Mobility (2)

* Forearm support walker (supported concept)
* Manual tilt-in-space wheelchair (**UNVERIFIED:** base config + price gate)

## Rehab (2)

* Upper-limb home therapy device (SUPPORTED concept; claims must be controlled)
* Balance/weight-shift training platform (**UNVERIFIED**)

---

# Q) “Next build-ready options” — Answered (No questions)

1. Homepage final copy: defined by sections/constraints in E; hero headline locked; no invoice language.
2. System page product cards: CTA is **View details**; conversion CTA lives on PDP as **Proceed to purchase**.
3. Support page: `/contact` minimal intake, no clinical advice, routes to email/phone/form.

---

## 3) Sources

Primary: your pasted session SSOT draft + your additional consolidated SSOT block in this message (merged verbatim where compatible).
No external sources used (not required for SSOT synthesis).

---

## Integrity Footer (mandatory)

**Known vs inferred**

* **KNOWN:** systems-led IA; invoice-first for plan-managed; card only for self-managed/private; NDIA-managed blocked; no cart; `/buy/[slug]` is logic container; policies locked; tone is authoritative/minimal/non-caring on frontend.
* **INFERRED:** none required; this is direct consolidation.

**Key assumptions**

* None beyond explicit constraints.

**Failure points**

* Reintroducing cart/checkout-first patterns
* Invoice language creeping into homepage hero
* Tone leaking into policies

**Fastest verification**

* Implement route skeletons + smoke-test:

  * Plan-managed: generates invoice + order `pending_payment`
  * Self/private: card path works or is explicitly disabled without breaking flow
  * NDIA-managed: blocked with explanation
