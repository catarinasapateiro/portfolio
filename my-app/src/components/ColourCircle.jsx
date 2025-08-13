export const ColourCircle = ({
  size,
  color,
  text,
  rotate,
  textX,
  textY,
  number,
}) => (
  <svg
    width={size}
    height={size}
    style={{ display: "block" }}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={text || "decorative circle"}
    role="img"
  >
    <path
      fill={color}
      d="M63.2,-31.9C77.1,-12.3,80.4,18,68.1,39.9C55.8,61.7,27.9,75,4.1,72.7C-19.8,70.3,-39.5,52.3,-47.1,33.1C-54.8,14,-50.3,-6.3,-40.5,-23.5C-30.6,-40.8,-15.3,-55.1,4.7,-57.8C24.6,-60.5,49.2,-51.6,63.2,-31.9Z"
      transform={`translate(100 100) ${rotate}`}
    />
    {text && (
      <text
        x={textX}
        y={textY}
        texAnchor="middle"
        dominantBaseline="middle"
        fontSize={size / number}
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="rgb(255, 255, 255)"
      >
        {text}
      </text>
    )}
  </svg>
);
