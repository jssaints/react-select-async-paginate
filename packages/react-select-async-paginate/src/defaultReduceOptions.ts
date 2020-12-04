import type {
  ReduceOptions,
} from './types';

export const defaultReduceOptions: ReduceOptions<any, any> = (
  prevOptions,
  loadedOptions,
) => [...prevOptions, ...loadedOptions];
