import React from 'react'
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'
const ListComment = ({ classes, comments }) => {
    const showComments = () => {
        return comments.map(comment => {
            var time = moment(comment.dates.created.date_time, 'DD/MM/YYYY').fromNow();

            return (
                <React.Fragment key={comment.id}>
                    <ListItem key={comment.id}>

                        <ListItemAvatar style={{ top: "-8px", position: "relative" }}>
                            <Avatar>
                                <img className={classes.thumbnail} src={comment.user.image.thumb_url} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                style={{ color: "#02b7e2" }}
                            >
                                {comment.user.full_name}
                            </Typography>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {comment.body}
                                    </Typography>
                                    <br></br>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textSecondary"
                                    >
                                        {time}
                                    </Typography>
                                </React.Fragment>
                            } />

                    </ListItem>
                    <hr className = {classes.dashed} />
                </React.Fragment>
            )
        })
    }
    return (
        <React.Fragment>
            {showComments()}
        </React.Fragment>
    )
}

export default ListComment
