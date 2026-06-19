export function formatNumber(value, decimals = 0) {
  if (value === null || Number.isNaN(value)) return "—";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatCurrency(value, decimals = 0) {
  if (value === null || Number.isNaN(value)) return "—";
  return `$${formatNumber(value, decimals)}`;
}

export function formatMultiple(value, decimals = 2) {
  if (value === null || Number.isNaN(value)) return "—";
  return `${formatNumber(value, decimals)}x`;
}
