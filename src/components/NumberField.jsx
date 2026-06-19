export default function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm font-medium text-primary">
        {label}
        <span className="font-display text-sm font-bold text-accent-dim">
          {prefix}
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-accent"
      />
    </label>
  );
}
