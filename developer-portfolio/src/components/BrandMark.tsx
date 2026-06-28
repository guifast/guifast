import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/12 bg-[linear-gradient(145deg,#171b24,#090b10)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.22)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-grid opacity-20" />
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent-light shadow-[0_0_14px_rgba(96,165,250,0.85)]" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-6 w-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4 7.8H13.8C9.7 7.8 7.2 10.7 7.2 15.9C7.2 21.2 10.1 24.2 14.5 24.2H18.5"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7 16.1H22.7"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M22.7 16.1V24.2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M23.7 8.2L10.4 24.1"
          stroke="#60A5FA"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
