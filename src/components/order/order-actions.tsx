import Link from "next/link";
import { Download, Printer, Home } from "lucide-react";

interface OrderActionsProps {
  isInvoice: boolean;
}

export function OrderActions({ isInvoice }: OrderActionsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
      {isInvoice && (
        <button className="btn-primary w-full md:w-auto">
          <Download className="w-4 h-4 mr-2" /> Download Invoice (PDF)
        </button>
      )}
      
      <button className="btn-secondary w-full md:w-auto">
        <Printer className="w-4 h-4 mr-2" /> Print Confirmation
      </button>

      <Link href="/" className="btn-secondary w-full md:w-auto">
        Return Home
      </Link>
    </div>
  );
}
