# Order Log (v1.1)

**Version:** v1.1  
**Last updated:** 2026-01-20  
**Applies:** Operational log

---

## Template

| Order ID | Order Date | Customer Name | Funding Type (Self/Plan/Private) | Plan Manager Email | SKU | NDIS Code | Supplier | Status | Dispatch Date | Delivery Date | Proforma Issued | Invoice Issued | Payment Received Date | Supplier Cost | Sell Price | Gross Margin | Tracking |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ORD-001 | YYYY-MM-DD | [Name] | [Self/Plan/Private] | [Email] | [Product SKU] | [Code] | [Supplier Name] | [Pending/Dispatched/Delivered] | YYYY-MM-DD | YYYY-MM-DD | YYYY-MM-DD | YYYY-MM-DD | YYYY-MM-DD | AUD$ | AUD$ | $ | [Tracking#] |
| | | | | | | | | | | | | | | | | | |

---

## Instructions

1. **Order ID:** Assign sequential number (ORD-001, ORD-002, etc.)
2. **Order Date:** Date order was placed (YYYY-MM-DD)
3. **Customer Name:** Customer full name
4. **Funding Type:** Self-managed / Plan-managed / Private
5. **Plan Manager Email:** Plan manager email if plan-managed (else blank)
6. **SKU:** Product SKU/code
7. **NDIS Code:** NDIS support code (if applicable)
8. **Supplier:** Supplier name (from Supplier_Tracker)
9. **Status:** Pending / Dispatched / Delivered / Cancelled / Return
10. **Dispatch Date:** Date supplier dispatched (YYYY-MM-DD)
11. **Delivery Date:** Date customer received (YYYY-MM-DD)
12. **Proforma Issued:** Date proforma invoice sent (YYYY-MM-DD)
13. **Invoice Issued:** Date final invoice sent (YYYY-MM-DD)
14. **Payment Received Date:** Date payment confirmed (YYYY-MM-DD)
15. **Supplier Cost:** Wholesale cost paid to supplier (AUD)
16. **Sell Price:** Price charged to customer (AUD)
17. **Gross Margin:** Sell Price – Supplier Cost (AUD)
18. **Tracking:** Courier tracking number (if available)

---

## Linked Records

- Link to **Incident_Register.md** if issues occur
- Link to **Complaints_Register.md** if complaint received
- Store proforma + final invoice in order folder (evidence trail)

---

## Monthly Review

Aggregate by:
- Funding type (Self vs Plan vs Private)
- Supplier performance (dispatch lead times, delivery)
- Average margin per order
- Completion rates
