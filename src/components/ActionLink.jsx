import { motion } from "motion/react";

function ActionLink({ href, children, icon, variant = "primary", newTab = false, download = false, className = "" }) {
  return (
    <motion.a
      href={href}
      download={download || undefined}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`action-link action-link--${variant} ${className}`}
    >
      {icon && <span className="action-link__icon" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      <span className="action-link__arrow" aria-hidden="true">↗</span>
    </motion.a>
  );
}

export default ActionLink;
