/**
 * Modern footer background with gradient mesh
 */
export const FooterBackground = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

    {/* Decorative orbs */}
    <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-accent/5 blur-3xl" />

    {/* Top border gradient */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
);
