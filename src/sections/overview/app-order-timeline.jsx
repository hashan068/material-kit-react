import PropTypes from 'prop-types';
import React from 'react';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem from '@mui/lab/TimelineItem';
import { fDateTime } from 'src/utils/format-time';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

function OrderItem({ item }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.oneOf(['order1', 'order2', 'order3', 'order4']).isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

function AnalyticsOrderTimeline({ list, subheader = '', title = '', ...other }) {
  if (!list || !Array.isArray(list) || list.length === 0) {
    console.error('Missing required prop: list');
    return null;
  }

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Timeline
        sx={{
          m: 0,
          p: 3,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {list.map((item, index) => (
          <OrderItem key={item.id} item={item} lastTimeline={index === list.length - 1} />
        ))}
      </Timeline>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['order1', 'order2', 'order3', 'order4']).isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  subheader: PropTypes.string,
 
