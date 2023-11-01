import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CopyButton({handelCopyClick}) {
    function clickedButton(){
        handelCopyClick();
    }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" className='cpButton' onClick={clickedButton}>Copy</Button>
    </Stack>
  );
}