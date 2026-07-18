import Link from "next/link";
import { buttonVariants } from "@heroui/styles";
import { cn } from "@/lib/cn";

/**
 * Button — bọc HeroUI Button, bo góc theo thiết kế TrustID (rounded-xl).
 * Nếu truyền `href` sẽ render Next.js Link mang style nút; ngược lại render <button>.
 */
export const Button = ({
  href = undefined,
  variant = "primary",
  size = "md",
  className = undefined,
  children,
  ...rest
}: any) => {
  const classes = cn(buttonVariants({ variant, size }), "!rounded-xl", className);

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
