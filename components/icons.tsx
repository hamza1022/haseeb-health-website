type IconProps = {
  size?: number;
  className?: string;
};

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.4-4.2A8.5 8.5 0 1 1 8.2 19.6L3 21z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .6 0 1-.5.8-1l-.7-1.5c-.2-.4-.6-.5-1-.3l-.8.4a5 5 0 0 1-2.9-2.9l.4-.8c.2-.4.1-.8-.3-1L8.5 7.7c-.5-.2-1 .2-1 .8v1z" />
    </svg>
  );
}
