import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./../style.css";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import CssBaseline from "@material-ui/core/CssBaseline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles({
  button: {
    textTransform: "none",
    // color: "white",
    // fontSize: "0.59rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  label: {
    // width : "80px"
  },
});

const Header = () => {
  const style = useStyles();

  return (
    <Grid
      container
      // style ={{display :"flex", justifyContent : "center"}}
      spacing={1}
    >
      <Grid className={style.grid} item xs={4}>
        <Button
          className={style.button}
          startIcon={<EmailIcon />}
          variant="outlined"
          fullWidth
        >
          Share Proof
        </Button>
      </Grid>
      <Grid className={style.grid} item xs={6}>
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
          <Button startIcon={<AddIcon />}></Button>
          <Button className={style.label}>150%</Button>
          <Button startIcon={<RemoveIcon />}></Button>
        </ButtonGroup>
      </Grid>
      <Grid className={style.grid} item xs={2}>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "9%",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <IconButton variant="outlined">
            <NotificationsIcon style  ={{color :"black"}} />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
