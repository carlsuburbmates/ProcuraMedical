"use client";

import { useForm } from "react-hook-form";

export type PlanDetails = {
  participantName: string;
  ndisNumber: string;
  planManagerName: string;
  planManagerEmail: string;
};

interface PlanManagedFormProps {
  onSubmit: (data: PlanDetails) => void;
  isProcessing: boolean;
}

export function PlanManagedForm({ onSubmit, isProcessing }: PlanManagedFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PlanDetails>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto animate-fade-in-up">
      <div className="bg-white p-8 border border-black/5">
        <div className="mb-6 pb-6 border-b border-black/5">
          <h2 className="h2 text-xl mb-2">Invoice Details</h2>
          <p className="text-sm text-muted">This invoice will be sent to your Plan Manager.</p>
        </div>
        
        <div className="space-y-4">
           {/* Participant */}
           <div>
             <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Participant Name</label>
             <input 
               {...register("participantName", { required: "Required" })}
               className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               placeholder="NDIS Participant Full Name"
             />
             {errors.participantName && <span className="text-red-600 text-[11px] block mt-1">Required</span>}
           </div>

           <div>
             <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">NDIS Number</label>
             <input 
               {...register("ndisNumber", { required: "Required" })}
               className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               placeholder="430..."
             />
             {errors.ndisNumber && <span className="text-red-600 text-[11px] block mt-1">Required</span>}
           </div>

           {/* Plan Manager */}
           <div className="pt-4 mt-4 border-t border-black/5">
              <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Plan Manager Name / Company</label>
              <input 
                {...register("planManagerName", { required: "Required" })}
                className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors mb-4"
                placeholder="e.g. My Plan Manager"
              />
              
              <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Plan Manager Email (Invoices)</label>
              <input 
                {...register("planManagerEmail", { required: "Required", pattern: /^\S+@\S+$/i })}
                className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
                placeholder="invoices@planmanager.com.au"
              />
               {errors.planManagerEmail && <span className="text-red-600 text-[11px] block mt-1">Valid email required</span>}
           </div>
        </div>
      </div>

      <button disabled={isProcessing} type="submit" className="btn-primary w-full disabled:opacity-50">
        {isProcessing ? "Generating Invoice..." : "Generate Invoice & Order"}
      </button>
    </form>
  );
}
