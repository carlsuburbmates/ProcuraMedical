"use client";

import { useForm } from "react-hook-form";

export type DeliveryDetails = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
};

interface DeliveryFormProps {
  initialData?: Partial<DeliveryDetails>;
  onSubmit: (data: DeliveryDetails) => void;
}

export function DeliveryForm({ initialData, onSubmit }: DeliveryFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<DeliveryDetails>({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto animate-fade-in-up">
      <div className="bg-white p-8 border border-black/5">
        <h2 className="h2 text-xl mb-6">Delivery Details</h2>
        
        <div className="space-y-4">
           {/* Full Name */}
           <div>
             <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Full Name</label>
             <input 
               {...register("fullName", { required: "Full Name is required" })}
               className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               placeholder="Recipient Name"
             />
             {errors.fullName && <span className="text-red-600 text-[11px] mt-1 block">{errors.fullName.message}</span>}
           </div>

           {/* Contact */}
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Email</label>
               <input 
                 {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                 className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
                 placeholder="name@example.com"
               />
               {errors.email && <span className="text-red-600 text-[11px] mt-1 block">{errors.email.message}</span>}
             </div>
             <div>
               <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Phone</label>
               <input 
                 {...register("phone", { required: "Phone is required" })}
                 className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
                 placeholder="0400 000 000"
               />
               {errors.phone && <span className="text-red-600 text-[11px] mt-1 block">{errors.phone.message}</span>}
             </div>
           </div>

           {/* Address */}
           <div>
             <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Address</label>
             <input 
               {...register("address", { required: "Address is required" })}
               className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               placeholder="Street Address"
             />
             {errors.address && <span className="text-red-600 text-[11px] mt-1 block">{errors.address.message}</span>}
           </div>

           <div className="grid grid-cols-3 gap-4">
             <div>
               <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">City</label>
               <input 
                 {...register("city", { required: "Required" })}
                 className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               />
               {errors.city && <span className="text-red-600 text-[11px] mt-1 block">{errors.city.message}</span>}
             </div>
             <div>
               <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">State</label>
               <select 
                 {...register("state", { required: "Required" })}
                 className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors appearance-none"
               >
                 <option value="">Select</option>
                 <option value="VIC">VIC</option>
                 <option value="NSW">NSW</option>
                 <option value="QLD">QLD</option>
                 <option value="WA">WA</option>
                 <option value="SA">SA</option>
                 <option value="TAS">TAS</option>
                 <option value="ACT">ACT</option>
                 <option value="NT">NT</option>
               </select>
               {errors.state && <span className="text-red-600 text-[11px] mt-1 block">{errors.state.message}</span>}
             </div>
             <div>
               <label className="text-xs font-bold uppercase tracking-widest text-black block mb-2">Postcode</label>
               <input 
                 {...register("postcode", { required: "Required" })}
                 className="w-full h-11 px-4 border border-black/10 bg-alabaster focus:border-black focus:outline-none transition-colors"
               />
               {errors.postcode && <span className="text-red-600 text-[11px] mt-1 block">{errors.postcode.message}</span>}
             </div>
           </div>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Continue to Funding
      </button>

      <p className="text-center text-[11px] text-muted">
        No payment is taken at this step.
      </p>
    </form>
  );
}
