import React, { useContext, useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import ListComment from './ListComment'
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "./../../../context/GlobalState";
import './style.css'
const Comment = () => {
    const { state, getCommentData, markSeen } = useContext(GlobalContext);
    useEffect(() => {
        document.title = "Comments"
    }, [])
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

        },
        list: {
            transition: "opacity 0.4s ease-in-out",
            opacity: 1,
        },

    }
    ));
    const [fadein, setFadein] = useState(false)
    const classes = useStyles();
    const showList = () => {
        setTimeout(() => {
            setFadein(true);
        }, 0)
        return (
            // <div style={{ border: "1px solid rgba(0, 0, 0, 0.23)" }}>
                <List  className={`fade-in ${fadein && 'visible'}`}>
                    <ListComment classes={classes} comments={state.comments} markSeen={markSeen} />
                </List>
            // </div>
        )
    }
    const showLoading = () => {
        return <strong>loading.....</strong>
    }
    return (
        <div 
        // style={{ border: "1px solid rgba(0, 0, 0, 0.23)" ,overflow:"auto", height :"300px"}}
        //  className={classes.comment_content}
        className = "comment-list"
         >
            {!state.comments ? null : state.comments.length < 1 ? showLoading() : showList()}

        </div>
    )
}

export default Comment
