# Proforma Invoice Standard (v1.1)

**Version:** v1.1  
**Last updated:** 2026-01-20  
**Applies:** Phase 0 + Post-registration (format rules persist)

---

## Purpose

Pre-authorisation document for plan-managed purchases.

---

## Mandatory Header Fields

```
═══════════════════════════════════════════════════════════
                    PROCURA MEDICAL
                    PROFORMA INVOICE

Supplier: Procura Medical (Sole trader)
ABN: 39 880 743 354
Document Type: PROFORMA INVOICE

═══════════════════════════════════════════════════════════
```

### Invoice Number & Dates

```
Proforma Invoice #: PRO-2026-001
Issue Date: 2026-01-20
Validity: 14 days (pricing & stock reserved until [DATE])
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

## Line Items

```
ITEMS:

Item # | Product Name / Model | Qty | Unit Price | NDIS Code | Subtotal
─────────────────────────────────────────────────────────────────────
1      | [Product Name]       | 1   | AUD $XXX   | [Code]    | AUD $XXX
2      | [Product Name]       | 1   | AUD $XXX   | [Code]    | AUD $XXX
       |                      |     |            |           |
─────────────────────────────────────────────────────────────────────
                                          SUBTOTAL:  AUD $XXXX.XX
```

### Notes / Product Specs

```
NOTES / INCLUDED ITEMS:

[Include key specifications, included accessories, warranty summary if applicable]
```

---

## GST Statement (Future-Proof)

```
GST Treatment: 
As at [Issue Date], Procura Medical is not registered for GST. 
GST treatment will be shown consistent with our registration status 
at the time of issue.

Subtotal (shown above): AUD $XXXX.XX
GST: Not applicable (Phase 0)
───────────────────────────
TOTAL: AUD $XXXX.XX
```

---

## Payment Terms & Bank Details

```
PAYMENT TERMS:

Payment Reference: [Invoice Number, e.g., PRO-2026-001]
Payment Method: Bank Transfer (EFT)

Bank Details:
Bank: [Bank Name]
Account Name: [Account Name]
BSB: [BSB]
Account Number: [Account Number]

Please include the Invoice Number in the payment reference line.
Payment due within [7] business days of this proforma.
```

---

## Plan Manager Footer (NDIS)

```
───────────────────────────────────────────────────────────────────

IMPORTANT NOTICE FOR PLAN MANAGERS:

This Proforma Invoice is intended to support plan manager processing 
for plan-managed participants. It should be read together with any 
requirements set by the NDIS or your plan manager.

Procura Medical is an unregistered assistive technology retailer 
(as at January 2026). We serve self-managed and plan-managed 
participants via dropshipping supply.

Invoicing Status: PRE-AUTHORIZATION (not yet dispatched)
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
───────────────────────────────────────────────────────────────────
```

---

## Final Section

```
Thank you for your order.

For inquiries, contact:
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
   - Proforma issued → Awaiting customer payment approval
   - Payment received → Final invoice issued
   - Final invoice issued → Supplier notified to dispatch
4. **Storage:** File proforma in order folder; reference in **Order_Log.md**
5. **Validity:** Proforma typically valid 14 days; extend if negotiated with plan manager
