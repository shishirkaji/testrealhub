import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./../style.css";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { GlobalContext } from "./../../../context/GlobalState";
import RemoveIcon from "@material-ui/icons/Remove";
import NotificationsIcon from "@material-ui/icons/Notifications"; import Badge from '@material-ui/core/Badge';
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
  const { state, toggleComments, getCommentData } = useContext(GlobalContext);
  const style = useStyles();
  useEffect(() => {
    getCommentData();
  }, [])
  let [hidebadge, setHideBadge] = useState({ hidebadge: false, bg: "#02b7e2", iconColor: "white", border: "1px solid #02b7e2" })
  useEffect(() => {
    if (state.unseen < 1) {
      setHideBadge({ hidebadge: true, bg: null, iconColor: "#404041", border: "1px solid rgba(0, 0, 0, 0.23)" })
      // setHideBadge({ hidebadge: true, bg: null })
    }
    else {
      setHideBadge({ hidebadge: false, bg: "#02b7e2", iconColor: "white", border: "1px solid #02b7e2" })
    }
  }, [state.unseen])
  return (
    <Grid
      container
      // style ={{display :"flex", justifyContent : "center"}}
      spacing={1}
    >
      <Grid className={style.grid} item xs={4}>
        <Button
          className={style.button}
          startIcon={<EmailIcon style={{ color: "#404041" }} />}
          variant="outlined"
          fullWidth
        >
          Share Proof
        </Button>
      </Grid>
      <Grid className={style.grid} item xs={6}>
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
          <Button style={{ color: "#404041" }} startIcon={<RemoveIcon />}></Button>
          <Button className={style.label} style={{ width: "312%" }}>150%</Button>
          <Button style={{ color: "#404041" }} startIcon={<AddIcon />}></Button>
        </ButtonGroup>
      </Grid>
      <Grid className={style.grid} item xs={2}>
        <div
          style={{
            border: hidebadge.border,
            background: hidebadge.bg,
            borderRadius: "9%",
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}  >
          <IconButton variant="outlined" onClick={() => { toggleComments() }} >
            <Badge badgeContent={state.unseen} color="secondary" invisible={hidebadge.hidebadge}>
              <NotificationsIcon style={{ color: hidebadge.iconColor }} />
            </Badge >
          </IconButton>
        </div>
      </Grid >
    </Grid >
  );
};

export default Header;
