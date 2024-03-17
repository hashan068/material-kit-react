import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import { alpha, styled } from '@mui/material/styles';
import { bgBlur } from 'src/theme/css';

type ChartProps = {
  width: number;
  height: number;
  variant: 'light' | 'dark';
  className?: string;
  series: any[];
  categories: string[];
  options?: any;
  getSeriesColor?: (index: number) => string;
  getGridColor?: () => string;
  getBackgroundColor?: () => string;
  getBorderColor?: () => string;
  getTooltipBackgroundColor?: () => string;
  getTooltipBorderColor?: () => string;
  getTooltipColor?: () => string;
  getXAxisTooltipBackgroundColor?: () => string;
  getXAxisTooltipBorderColor?: () => string;
  getXAxisTooltipColor?: () => string;
  getLegendBackgroundColor?: () => string;
  getLegendTextColor?: () => string;
};

const Chart = ({
  width,
