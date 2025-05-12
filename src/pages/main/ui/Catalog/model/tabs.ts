export const tabs = [
  {
    value: 'all',
    label: 'All Plants',
  },
  {
    value: 'arrivals',
    label: 'New Arrivals',
  },
  {
    value: 'sale',
    label: 'Sale',
  },
] as const;

export const literalTabs = tabs.map((t) => t.value);
