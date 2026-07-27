import { motion } from "framer-motion";
import { entranceVariant } from "./tokens";

function EntranceItem({
  as: Component = motion.div,
  children,
  className = "",
  ...props
}) {
  return (
    <Component
      className={className}
      variants={entranceVariant}
      {...props}
    >
      {children}
    </Component>
  );
}

export default EntranceItem;