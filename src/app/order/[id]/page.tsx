import { notFound } from "next/navigation";
import { StatusTimeline, type OrderStatus } from "@/components/order/status-timeline";
import { OrderSummary } from "@/components/order/order-summary";
import { OrderActions } from "@/components/order/order-actions";

type Props = {
  params: Promise<{ id: string }>;
};

// MOCK ORDER DB
// In a real app, this would fetch from Supabase
const getMockOrder = (id: string) => {
  if (id === "12345") {
    return {
      id,
      productName: "Tilt-in-Space Shower Commode",
      price: 2450,
      customerName: "Jane Doe (Participant)",
      fundingType: "plan_managed",
      status: "invoice_generated" as OrderStatus,
      message: "Order received. Invoice #INV-2024-001 has been emailed to My Plan Manager."
    };
  }
  
  if (id === "67890") {
    return {
      id,
      productName: "Forearm Support Walker",
      price: 890,
      customerName: "John Smith",
      fundingType: "self_managed",
      status: "paid" as OrderStatus,
      message: "Payment successful. Your order is being prepared for dispatch."
    };
  }

  return null;
};

export default async function OrderPage(props: Props) {
  const params = await props.params;
  const order = getMockOrder(params.id);

  if (!order) {
    notFound();
  }

  return (
    <div className="container-wide py-12 md:py-24 bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-12 animate-scale-in">
        <h1 className="h1 text-3xl mb-4">
          {order.status === "invoice_generated" ? "Order Pending Payment" : "Order Confirmed"}
        </h1>
        <p className="text-muted max-w-lg mx-auto leading-relaxed">
          {order.message}
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <StatusTimeline status={order.status} />
        <OrderSummary 
          productName={order.productName}
          price={order.price}
          orderId={order.id}
          customerName={order.customerName}
          fundingType={order.fundingType}
        />
        <OrderActions isInvoice={order.status === "invoice_generated"} />
      </div>
    </div>
  );
}
