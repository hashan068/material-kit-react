import { alpha } from '@mui/material/styles';
import { grey } from './palette';

const transparencies = [0.2, 0.14, 0.12];

export function shadows() {
  return ['none', ...transparencies.map((transparency, index) => {
    const [a, b, c] = transparencies.slice(index);
    return `0px 2px ${2 + index}px -1px ${alpha(grey[500], a)},
             0px 1px ${1 + index}px 0px ${alpha(grey[500], b)},
             0px 1px ${3 + index}px 0px ${alpha(grey[500], c)}`;
  })];
}
