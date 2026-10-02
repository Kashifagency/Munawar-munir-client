import type { SVGProps } from "react";

// Hand-rolled stroke icons (24px grid) — no icon library in the bundle.
const paths: Record<string, React.ReactNode> = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
      <path d="M2 21c0-3 1.9-5.4 5.2-6.1 2.4-.5 4.8-2 5.8-3.9" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  // Service icons
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      <path d="M5 18v2M19 18v2" />
    </>
  ),
  mattress: (
    <>
      <rect x="2" y="7" width="20" height="10" rx="2.5" />
      <path d="M2 12h20M7 7v10M12 7v10M17 7v10" />
    </>
  ),
  bed: (
    <>
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <path d="M4 10V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5" />
      <path d="M2 16h20" />
      <path d="M7 10V8h4v2M13 10V8h4v2" />
    </>
  ),
  wardrobe: (
    <>
      <rect x="4" y="2" width="16" height="18" rx="1.5" />
      <path d="M12 2v18M10 10v2M14 10v2M6 20v2M18 20v2" />
    </>
  ),
  dining: (
    <>
      <path d="M3 9h18" />
      <path d="M6 9v11M18 9v11" />
      <path d="M8 4h8" />
      <path d="M9 14h6" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M12 21 8 9l4-6 4 6z" />
    </>
  ),
  office: (
    <>
      <path d="M3 10h18" />
      <path d="M5 10v10M19 10v10" />
      <rect x="8" y="3" width="8" height="5" rx="1" />
      <path d="M12 8v2M14 14h3v6" />
    </>
  ),
  villa: (
    <>
      <path d="M2 21h20" />
      <path d="M4 21V10l6-4 6 4v11" />
      <path d="M16 13h4v8" />
      <path d="M8 21v-5h4v5M8 12h4" />
    </>
  ),
  truck: (
    <>
      <path d="M1 6h13v10H1z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="5.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </>
  ),
  trash: (
    <>
      <path d="M3 6h18" />
      <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  appliance: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M4 7h16" />
      <circle cx="12" cy="14" r="4" />
      <path d="M7 4.5h1M10 4.5h1" />
    </>
  ),
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
};

export type IconKey = keyof typeof paths;

export function Icon({ name, className = "size-5", ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zM12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8S18.5.2 12 .2z" />
    </svg>
  );
}
