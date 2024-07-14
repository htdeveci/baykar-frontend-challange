export default function ColoredPanel({
  children,
  bgColor,
  width,
  height,
  position,
  left,
  top,
  borderRadius = "30px",
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        position: position,
        left: left,
        top: top,
      }}
    >
      {children}
    </div>
  );
}
