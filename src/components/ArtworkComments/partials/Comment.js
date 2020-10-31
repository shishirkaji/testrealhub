import React, { useContext, useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import ListComment from './ListComment'
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "./../../../context/GlobalState";
import './style.css'
const Comment = () => {
    const { state, getCommentData, markSeen } = useContext(GlobalContext);
    useEffect(() => {
        getCommentData();
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
        return <List className={`fade-in ${fadein && 'visible'}`}>
            <ListComment classes={classes} comments={state.comments} markSeen={markSeen} />
        </List>
    }
    const showLoading = () => {
        return <strong>loading.....</strong>
    }
    return (
        <div className={classes.comment_content}>
            {state.loading ? showLoading() : showList()}

        </div>
    )
}

export default Comment
