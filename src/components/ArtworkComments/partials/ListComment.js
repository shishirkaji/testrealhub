import React, { Fragment } from 'react'
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import moment from 'moment'
const ListComment = ({ classes, comments, markSeen }) => {
    // make an api call to mark it as seen let suppose we alter the master state as mark as seen for the item with id 
    const hitSeen = (id) => {
        //    I would first make an api call then after awaiting for respose i would hide the mark as seen button
        setTimeout(() => {
            // hit the global state function to reduce the no of unseen comments. 
            markSeen()
            document.getElementById(`${id}`).style.display = "none";
        }, 0)

    }
    const showComments = () => {
        let commentLength = comments.length;
        let counter = 1;
        return comments.map(comment => {
            let showHr = true
            console.log(counter)
            if (counter >= commentLength) showHr = false
            counter = counter + 1
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

                                    {comment.acknowledged ? null : <span id={comment.id}> <span > | </span> <Typography
                                        component="span"
                                        variant="body2"
                                        className="mark_seen"
                                        color="textSecondary"

                                        onClick={(e) => hitSeen(comment.id)}
                                    >
                                        <Button color="secondary" style ={{ textTransform  : "none"}}> Mark As Seen</Button>
                                    </Typography></span>}
                                </React.Fragment>
                            } />
                    </ListItem>
                    {showHr ? <hr className={classes.dashed} /> : null}

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
