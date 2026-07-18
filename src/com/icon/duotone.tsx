import { duotoneData } from "./duotoneData";

/**
 * DuotoneIcon — icon hai tông màu (Streamline Flex Flat).
 * Truyền `color` cho lớp đậm và `secondaryColor` cho lớp nhạt (tô qua biến CSS).
 */
export const DuotoneIcon = ({
  name,
  size = 24,
  color = "#2859c5",
  secondaryColor = "#8fbffa",
  className = undefined,
  style = undefined,
  ...rest
}: any) => {
  const glyph = duotoneData[name];
  if (!glyph) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={glyph.viewBox}
      role="img"
      aria-hidden={rest["aria-label"] ? undefined : true}
      className={className}
      style={{
        display: "inline-block",
        flex: "none",
        ["--dtc-primary" as any]: color,
        ["--dtc-secondary" as any]: secondaryColor,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: glyph.body }}
      {...rest}
    />
  );
};

export default DuotoneIcon;
