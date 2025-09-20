import * as React from "react";
import styles from "./Badge.module.scss";


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <div className={`${styles.badge} ${styles[variant]} ${className || ""}`} {...props} />;
}

export { Badge };
