import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { orderByModule } from "../../../redux/actions/questionsActions";

export default function Avatars() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(orderByModule(e.target.innerText));
  };

  return (

    <Stack direction="row" spacing={2} sx={{ display:'inline' }}>
      <ButtonGroup
        variant="container"
        arial-label="container button group"
        sx={{ bgcolor: "transparent" }}
      >
        <Button size="large">
          <Avatar
            onClick={handleClick}
            size="small"
            sx={{ bgcolor: "#3A2D53", color: "#FBC02D" }}
          >
            M1
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={handleClick}
            sx={{ bgcolor: "#3A2D53", color: "#43A047" }}
          >
            M2
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={handleClick}
            sx={{ bgcolor: "#3A2D53", color: "#D81B60" }}
          >
            M3
          </Avatar>
        </Button>
        <Button>
          <Avatar
            onClick={handleClick}
            sx={{ bgcolor: "#3A2D53", color: "#42A5F5" }}
          >
            M4
          </Avatar>
        </Button>


      </ButtonGroup>
      {/* <Button disableRipple >Hacer una pregunta</Button> */}
    </Stack>
  );
}

