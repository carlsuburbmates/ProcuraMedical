# Final Invoice Standard (v1.1)

**Version:** v1.1  
**Last updated:** 2026-01-20  
**Applies:** Phase 0 + Post-registration (with GST handling)

---

## Purpose

Final invoice issued after payment confirmation and/or dispatch/delivery completion (per workflow).

---

## Mandatory Header Fields

```
═══════════════════════════════════════════════════════════
                    PROCURA MEDICAL
                    INVOICE

Supplier: Procura Medical (Sole trader)
ABN: 39 880 743 354
Document Type: INVOICE
(NOT "Tax Invoice" unless GST-registered)

═══════════════════════════════════════════════════════════
```

### Invoice Number & Dates

```
Invoice #: INV-2026-001
Issue Date: 2026-01-20
Dispatch Date: 2026-01-21
Delivery Date: [If known; otherwise "In transit"]
```

---

## Customer Details

```
BILL TO:
Name: [Customer Name]
Address: [Delivery Address]
Suburb/City: [Suburb], [State] [POSTCODE]
Phone: [Phone]
Email: [Email]

DELIVER TO:
[Same as above or alternative address if applicable]
```

---

## Plan Manager Details (if Plan-Managed)

```
PLAN MANAGER (Billing Contact):
Name: [Plan Manager Name]
Organization: [Plan Manager Organization]
Email: [Plan Manager Email]
Phone: [Plan Manager Phone]
Participant ID / Plan #: [If provided by customer]
```

---

## Line Items + Tracking

```
ITEMS SUPPLIED:

Item # | Product Name / Model | Qty | Unit Price | NDIS Code | Subtotal
─────────────────────────────────────────────────────────────────────
1      | [Product Name]       | 1   | AUD $XXX   | [Code]    | AUD $XXX
2      | [Product Name]       | 1   | AUD $XXX   | [Code]    | AUD $XXX
       |                      |     |            |           |
─────────────────────────────────────────────────────────────────────
                                          SUBTOTAL:  AUD $XXXX.XX

PAYMENT STATUS:
Payment Received: [Date] ✓
Payment Method: [Bank Transfer / Card / Other]

DELIVERY TRACKING:
Carrier: [Courier Name]
Tracking #: [Tracking Number]
Expected Delivery: [Date range]
Status: Dispatched / In Transit / Delivered
```

---

## GST Statement (Phase 0 vs Post-Registration)

### Phase 0 (NOT GST-Registered)

```
GST Treatment: 
As at [Issue Date], Procura Medical is not registered for GST.

Subtotal (shown above): AUD $XXXX.XX
───────────────────────────
TOTAL: AUD $XXXX.XX
```

### Post-Registration (IF GST-Registered)

```
IMPORTANT: Once Procura Medical is registered for GST, this section 
will be updated to show GST treatment.

Example format (post-registration):

Subtotal (excluding GST): AUD $XXXX.XX
GST (10%): AUD $XXXX.XX
───────────────────────────
TAX INVOICE TOTAL: AUD $XXXX.XX

Document Type: TAX INVOICE (when GST-registered)
```

---

## Plan Manager Footer (NDIS)

```
───────────────────────────────────────────────────────────────────

IMPORTANT NOTICE FOR PLAN MANAGERS:

This Invoice is intended to support plan manager processing 
for plan-managed participants. It should be read together with any 
requirements set by the NDIS or your plan manager.

Procura Medical is an [unregistered / NDIS-registered] assistive 
technology retailer. We serve self-managed and plan-managed 
participants via dropshipping supply.

Invoicing Status: FINAL (order dispatched / delivered)
───────────────────────────────────────────────────────────────────
```

---

## ACL Footer (Defensive)

```
CONSUMER GUARANTEES DISCLAIMER:

Our goods come with guarantees that cannot be excluded under the 
Australian Consumer Law. For major failures, you may be entitled to 
repair, replacement, or refund (depending on the nature of the failure).

For more information:
https://www.accc.gov.au/consumers/buying-products-and-services/warranties

Nothing in this invoice limits your rights under the Australian 
Consumer Law.

RETURNS POLICY:
Change-of-mind returns are subject to our Returns & Faults Policy 
(available on our website). Faulty or damaged items are covered under 
ACL remedies.
───────────────────────────────────────────────────────────────────
```

---

## Final Section

```
Thank you for your order.

For inquiries, returns, or support:
Email: [Contact Email]
Phone: [Contact Phone]
Website: [Website]

Procura Medical
─────────────────────────────────────────────────────────────────
```

---

## Implementation Notes

1. **Template file:** Save as `.docx` or `.pdf` template in shared system
2. **Variables:** Replace all `[Bracketed]` fields with actual data
3. **Sequence:**
   - Proforma issued → Awaiting payment
   - Payment received → Final invoice issued
   - Final invoice issued → Supplier begins dispatch
4. **Storage:** File final invoice in order folder; reference in **Order_Log.md**
5. **GST handling:** Once registered, update header to "TAX INVOICE" and include GST line
6. **Timing:** Final invoice issued after payment confirmed OR at dispatch (per workflow)
