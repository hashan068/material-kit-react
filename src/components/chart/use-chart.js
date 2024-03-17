import merge from 'lodash/merge';
import { alpha, useTheme } from '@mui/material/styles';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

type Label = {
  show: boolean;
  label: string;
  color: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
};

type BaseOptions = {
  // Colors
  colors: string[];

  // Chart
  chart: {
    toolbar: { show: boolean };
    zoom: { enabled: boolean };
    animations: { enabled: boolean };
    foreColor: string;
    fontFamily: string;
  };

  // States
  states: {
    hover: {
      filter: {
        type: string;
        value: number;
      };
    };
    active: {
      filter: {
        type: string;
        value: number;
      };
    };
  };

  // Fill
  fill: {
    opacity: number;
    gradient: {
      type: string;
      shadeIntensity: number;
      opacityFrom: number;
      opacityTo: number;
      stops: number[];
    };
  };

  // Datalabels
  dataLabels: {
    enabled: boolean;
  };

  // Stroke
  stroke: {
    width: number;
    curve: string;
    lineCap: string;
  };

  // Grid
  grid: {
    strokeDashArray: number;
    borderColor: string;
    xaxis: {
      lines: {
        show: boolean;
      };
    };
  };

  // Xaxis
  xaxis: {
    axisBorder: { show: boolean };
    axisTicks: { show: boolean };
  };

  // Markers
  markers: {
    size: number;
    strokeColors: string;
  };

  // Tooltip
  tooltip: {
    theme: boolean;
    x: {
      show: boolean;
    };
  };

  // Legend
  legend: {
    show: boolean;
    fontSize: number;
    position: string;
    horizontalAlign: string;
    markers: {
      radius: number;
    };
    fontWeight: number;
    itemMargin: {
      horizontal: number;
    };
    labels: {
      colors: string;
    };
  };

  // plotOptions
  plotOptions: {
    // Bar
    bar: {
      borderRadius: number;
      columnWidth: string;
      borderRadiusApplication: string;
      borderRadiusWhenStacked: string;
    };

    // Pie + Donut
    pie: {
      donut: {
        labels: {
          show: boolean;
          value: Label;
          total: Label;
        };
      };
    };

    // Radialbar
    radialBar: {
      track: {
        strokeWidth: string;
        background: string;
      };
      dataLabels: {
        value: Label;
        total: Label;
      };
    };

    // Radar
    radar: {
      polygons: {
        fill: { colors: string[] };
        strokeColors: string;
        connectorColors: string;
      };
    };

    // polarArea
    polarArea: {
      rings: {
        strokeColor: string;
      };
      spokes: {
        connectorColors: string;
      };
    };
  };

  // Responsive
  responsive: {
    breakpoint: number;
    options: {
      plotOptions: { bar: { columnWidth: string } };
    };
  }[];
};

export default function useChart(options: Partial<BaseOptions>) {
  const theme = useTheme();
  const smUp = useResponsive('up', 'sm');

  const labelTotal: Label = {
    show: true,
    label: 'Total',
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    lineHeight: theme.typography.lineHeight,
  };

  const labelValue: Label = {
    offsetY: 8,
    color: theme.palette.text.primary,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    lineHeight: theme.typography.lineHeight,
  };

  const baseOptions: BaseOptions = {
    // Colors
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
      theme.palette.warning.dark,
      theme.palette.success.darker,
      theme.palette.info.dark,
      theme.palette.info.darker,
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
