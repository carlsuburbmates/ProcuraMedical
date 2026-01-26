interface OrderSummaryProps {
  productName: string;
  price: number;
  orderId: string;
  customerName: string;
  fundingType: string;
}

export function OrderSummary({ productName, price, orderId, customerName, fundingType }: OrderSummaryProps) {
  return (
    <div className="bg-white border border-black/5 p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-8 border-b border-black/5 pb-8">
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-widest text-muted mb-1">Order Reference</h2>
          <p className="text-xl font-medium">#{orderId}</p>
        </div>
        <div className="text-right">
           <h2 className="text-[13px] font-bold uppercase tracking-widest text-muted mb-1">Total Amount</h2>
           <p className="text-xl font-medium">${price.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-black mb-2">Item Details</h3>
          <p className="text-sm text-muted">{productName}</p>
          <p className="text-sm text-muted">Qty: 1</p>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-black mb-2">Customer</h3>
          <p className="text-sm text-muted">{customerName}</p>
          <p className="text-sm text-muted capitalize">{fundingType.replace("_", " ")}</p>
        </div>
      </div>
    </div>
  );
}
