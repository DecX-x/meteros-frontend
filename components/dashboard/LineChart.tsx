type LineChartProps = {
  values: number[];
  labels: string[];
};

function buildPoints(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1 || 1)) * 100;
      const y = 84 - ((value - min) / range) * 52;
      return `${x},${y}`;
    })
    .join(" ");
}

export function LineChart({ values, labels }: LineChartProps) {
  const points = buildPoints(values);

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/4 p-4">
      <div className="h-48 rounded-[1.2rem] border border-white/8 bg-[#11141d] p-4">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" aria-hidden="true">
            <path d="M 0 84 H 100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            <path d="M 0 58 H 100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <path d="M 0 32 H 100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
          <polyline
            fill="none"
              stroke="rgba(201,233,122,0.92)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
          {points.split(" ").map((point, index) => {
            const [x, y] = point.split(",");

            return (
              <circle
                key={`${labels[index]}-${point}`}
                cx={x}
                cy={y}
                r="2.6"
                fill="#141722"
                 stroke="rgba(201,233,122,0.92)"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="text-center text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white/38"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
