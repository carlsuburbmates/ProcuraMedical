import { CheckCircle, Circle, Clock } from "lucide-react";

export type OrderStatus = "invoice_generated" | "paid" | "processing" | "shipped";

interface StatusTimelineProps {
  status: OrderStatus;
}

export function StatusTimeline({ status }: StatusTimelineProps) {
  // Determine current active step index
  const getStepStatus = () => {
    switch (status) {
      case "invoice_generated": return 1; // Awaiting Payment
      case "paid": return 2; // Payment Received
      case "processing": return 2; // Processing
      case "shipped": return 3; // Dispatched
      default: return 1;
    }
  };

  const currentStep = getStepStatus();

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        
        {/* Step 1: Order Placed */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <CheckCircle className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-black">Order Placed</span>
        </div>

        <div className={`flex-1 h-px mx-4 ${currentStep >= 1 ? "bg-black" : "bg-black/10"}`} />

        {/* Step 2: Payment / Invoice */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
            currentStep >= 2 
              ? "bg-black text-white border-black" 
              : status === "invoice_generated" 
                ? "bg-amber-100 text-amber-700 border-amber-500 animate-pulse" 
                : "bg-white text-muted border-black/20"
          }`}>
             {currentStep >= 2 ? <CheckCircle className="w-5 h-5" /> : status === "invoice_generated" ? <Clock className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${status === "invoice_generated" ? "text-amber-700" : currentStep >= 2 ? "text-black" : "text-muted"}`}>
            {status === "invoice_generated" ? "Awaiting Payment" : "Payment Confirmed"}
          </span>
        </div>

        <div className={`flex-1 h-px mx-4 ${currentStep >= 3 ? "bg-black" : "bg-black/10"}`} />

        {/* Step 3: Dispatch */}
        <div className="flex flex-col items-center gap-2">
           <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
             currentStep >= 3 ? "bg-black text-white border-black" : "bg-white text-muted border-black/20"
           }`}>
             {currentStep >= 3 ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
           </div>
           <span className={`text-[10px] font-bold uppercase tracking-widest ${currentStep >= 3 ? "text-black" : "text-muted"}`}>
             Dispatched
           </span>
        </div>
      </div>
    </div>
  );
}
