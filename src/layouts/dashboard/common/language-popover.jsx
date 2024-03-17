import { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/ic_flag_de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/ic_flag_fr.svg',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);
  const [selectedLang, setSelectedLang] = useState(LANGS[0].value);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
    setSelectedLang(LANGS[0].value);
  };

  const handleChange = (event) => {
    setSelectedLang(event.target.value);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img src={LANGS.find(lang => lang.value === selectedLang)?.icon} alt={LANGS.find(lang => lang.value === selectedLang)?.label} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
        keyboard
        disablePortal
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            selected={option.value === selectedLang}
            onClick={handleChange}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon
