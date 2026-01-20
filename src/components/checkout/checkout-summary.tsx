import { Product } from "@/lib/data";

export function CheckoutSummary({ product }: { product: Product }) {
  return (
    <div className="sticky top-24 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      
      <div className="flex gap-4 mb-6 pb-6 border-b border-zinc-200">
        <div className="h-20 w-20 bg-white rounded-lg border border-zinc-200 shrink-0" />
        <div>
          <h4 className="font-medium text-zinc-900 line-clamp-2">{product.name}</h4>
          <span className="text-sm text-zinc-500 block mt-1">Qty: 1</span>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-zinc-600">
          <span>Subtotal</span>
          <span>${product.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-zinc-600">
          <span>Shipping</span>
          <span className="text-emerald-600 font-medium">Free</span>
        </div>
        <div className="pt-4 border-t border-zinc-200 flex justify-between font-bold text-lg text-zinc-900">
          <span>Total</span>
          <span>${product.price.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6 p-3 bg-white rounded-lg border border-zinc-200 text-xs text-zinc-500">
        <p className="mb-1 font-medium text-zinc-900">NDIS Participants</p>
        Payment is only processed after you approve the invoice or your plan manager authorizes it.
      </div>
    </div>
  );
}
