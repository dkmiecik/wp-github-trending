export interface IFilter {
  onChange: (value: string) => void;
  value: string;
}

export interface IFilterOptions {
  label: string;
  value: Filters;
}

export enum Filters {
  'Daily' = 'daily',
  'Weekly' = 'weekly',
  'Monthly' = 'monthly',
}
