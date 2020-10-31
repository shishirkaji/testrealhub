import React, { useContext, useEffect } from 'react'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "./../../../context/GlobalState";
const Comment = () => {
    const { state, getCommentData } = useContext(GlobalContext);
    useEffect(() => {
        getCommentData();
        console.log(state.comments)
    }, [])
    useEffect(() => {

        console.log(state.comments)
    }, [state.comments])
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        thumbnail:
        {
            position: "absolute",
            width: "100%"

        },
        dashed: {
            borderTop: "1px dashed #bbb",
            marginLeft: "14px",
            marginRight: "14px"
        },
        comment_content:
        {
            height: "80%",
            overflow: "auto"

        }
    }
    ));
    const classes = useStyles();
    return (
        <div className={classes.comment_content}>
            <List >
                <ListItem>
                    <ListItemAvatar style={{ top: "-8px", position: "relative" }}>
                        <Avatar>
                            <img className={classes.thumbnail} src="https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_200x200.jpg?1490158017" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            style={{ color: "#02b7e2" }}
                        >
                            Frank Greeff
                        </Typography>}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Also, the address is 79/104 New Order Road not 78 bl
                                    w Order Road not 78 bl
                                </Typography>
                                <br></br>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textSecondary"
                                >
                                    5 mins ago
                                    </Typography>
                            </React.Fragment>
                        } />
                </ListItem>
                <hr className={classes.dashed} />
                <ListItem>
                    <ListItemAvatar style={{ top: "-8px", position: "relative" }}>
                        <Avatar>
                            <img className={classes.thumbnail} src="https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_200x200.jpg?1490158017" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            style={{ color: "#02b7e2" }}
                        >
                            Frank Greeff
                        </Typography>}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Also, the address is 79/104 New Order Road not 78 bl
                                    w Order Road not 78 bl
                                </Typography>
                                <br></br>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textSecondary"
                                >
                                    5 mins ago
                                    </Typography>
                            </React.Fragment>
                        } />
                </ListItem>
                <hr className={classes.dashed} />
                <ListItem>
                    <ListItemAvatar style={{ top: "-8px", position: "relative" }}>
                        <Avatar>
                            <img className={classes.thumbnail} src="https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_200x200.jpg?1490158017" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            style={{ color: "#02b7e2" }}
                        >
                            Frank Greeff
                        </Typography>}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Also, the address is 79/104 New Order Road not 78 bl
                                    w Order Road not 78 bl
                                </Typography>
                                <br></br>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textSecondary"
                                >
                                    5 mins ago
                                    </Typography>
                            </React.Fragment>
                        } />
                </ListItem>
                <hr className={classes.dashed} />
                <ListItem>
                    <ListItemAvatar style={{ top: "-8px", position: "relative" }}>
                        <Avatar>
                            <img className={classes.thumbnail} src="https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_200x200.jpg?1490158017" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            style={{ color: "#02b7e2" }}
                        >
                            Frank Greeff
                        </Typography>}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Also, the address is 79/104 New Order Road not 78 bl
                                    w Order Road not 78 bl
                                </Typography>
                                <br></br>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textSecondary"
                                >
                                    5 mins ago
                                    </Typography>
                            </React.Fragment>
                        } />
                </ListItem>
                <hr className={classes.dashed} />

            </List></div>
    )
}

export default Comment
