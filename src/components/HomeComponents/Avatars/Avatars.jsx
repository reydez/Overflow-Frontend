import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { orderByModule } from "../../../redux/actions/questions";


export default function Avatars({ orderByModule }) {
  return (
    <Stack direction="row" spacing={2} sx={{ display: "inline" }}>
      <ButtonGroup
        variant="container"
        arial-label="container button group"
        sx={{ bgcolor: "background.default" }}
      >
        <Button size="large">
          <Avatar
            onClick={orderByModule}
            size="small"
            sx={{ bgcolor: "background.violet", color: "#FBC02D" }}
          >
            M1
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: "background.violet", color: "#43A047" }}
          >
            M2
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: "background.violet", color: "#D81B60" }}
          >
            M3
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={orderByModule}
            sx={{ bgcolor: "background.violet", color: "#42A5F5" }}
          >
            M4
          </Avatar>
        </Button>
      </ButtonGroup>
      {/* <Button disableRipple >Hacer una pregunta</Button> */}
    </Stack>
  );
}
