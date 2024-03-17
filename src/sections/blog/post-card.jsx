import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function PostCard({ post, index = 0 }) {
  const { cover, title, view, comment, share, author, createdAt } = post;

  const isLatestPostLarge = index === 0;
  const isLatestPost = index === 1 || index === 2;

  // ... rest of the code

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        { number: share, icon: 'eva:share-fill' },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            ...((isLatestPostLarge || isLatestPost) && {
              opacity: 0.48,
              color: 'common.white',
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">
            {fShortenNumber(info.number) || 0}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );

  // ... rest of the code

}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

PostCard.defaultProps = {
  index: 0,
};
