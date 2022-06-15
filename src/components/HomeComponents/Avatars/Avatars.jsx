import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, ButtonGroup } from "@mui/material";

export default function Avatars({ orderByModule }) {
  return (
    <Stack direction="row" spacing={1} sx={{ display: "inline" }}>
      <ButtonGroup
        variant="container"
        arial-label="container button group"
        sx={{ bgcolor: "background.default" }}
      >
        <Button size="large">
          <Avatar
            onClick={orderByModule}
            size="small"
            sx={{ bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#392E57" : "#5a4e7c", color: "#FBC02D" }}
          >
              M1
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#392E57" : "#5a4e7c", color: "#43A047" }}
          >
              M2
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#392E57" : "#5a4e7c", color: "#D81B60" }}
          >
              M3
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#392E57" : "#5a4e7c", color: "#42A5F5" }}
          >
              M4
          </Avatar>
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
