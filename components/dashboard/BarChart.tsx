type BarChartItem = {
  label: string;
  value: number;
};

type BarChartProps = {
  items: BarChartItem[];
};

export function BarChart({ items }: BarChartProps) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <div className="surface-muted flex h-52 items-end gap-3 rounded-[1.3rem] p-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-1 flex-col items-center justify-end gap-3">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/42">
            {item.value}
          </span>
          <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-[#ece6f2]">
            <div
              className="w-full rounded-full bg-[linear-gradient(180deg,#272c3b_0%,#8c77d8_100%)]"
              style={{ height: `${(item.value / max) * 100}%` }}
            />
          </div>
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-black/42">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
