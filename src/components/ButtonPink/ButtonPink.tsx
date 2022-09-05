import {Button, Paper} from "@mui/material"
import { styled } from '@mui/material/styles';

const ButtonPink = styled(Button)({
  background: "pink",
  color: "white",
  borderRadius: "50px"
});

const MyPaper = styled(Paper)({
  borderRadius: "50px",
  backgroundColor: "aquamarine",
  padding: "5em"
});

export {MyPaper};

export default ButtonPink;