import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, ButtonGroup } from '@mui/material';

export default function Avatars() {
  return (
    <Stack direction="row" spacing={2}>
    <ButtonGroup variant="container" arial-label="container button group" sx={{bgcolor: "transparent"}}>
      <Button size="large" ><Avatar size="small" sx={{ bgcolor: '#3A2D53', color: '#FBC02D' }}>M1</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: '#3A2D53', color: '#43A047' }}>M3</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: '#3A2D53', color: '#D81B60' }}>M2</Avatar></Button>
      <Button><Avatar sx={{ bgcolor: '#3A2D53', color: '#42A5F5' }}>M4</Avatar></Button>
      </ButtonGroup>
    </Stack>
  );
}
