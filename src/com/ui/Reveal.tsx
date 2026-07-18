import { cn } from "@/lib/cn";

/** Khối nội dung có hiệu ứng xuất hiện khi tải trang (data-reveal). */
export const Reveal = ({ as: Tag = "div", className = undefined, children, ...rest }: any) => {
  return (
    <Tag data-reveal className={className} {...rest}>
      {children}
    </Tag>
  );
};

/** Nhãn kicker in hoa màu vàng đứng trên tiêu đề mục. */
export const Kicker = ({ children, className = undefined }: any) => (
  <div
    className={cn(
      "text-[12.5px] font-bold uppercase tracking-[0.2em] text-gold",
      className
    )}
  >
    {children}
  </div>
);

export default Reveal;
