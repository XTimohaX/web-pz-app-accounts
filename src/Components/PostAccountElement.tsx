import React, {FC, useState} from "react";
import {PostAccount} from "../model/types";
import ModalWindEdit from "./ModalEdit";
import {exists} from "fs";
import axios from "axios";


interface MyComponentProps {
    postAccount: PostAccount;
}

const PostAccountElement: FC<MyComponentProps> = ({postAccount }) => {
    const deletePost=()=>{
        axios.delete(`http://localhost:3000/post/${postAccount.id}`)

    .then(() => {
        console.log('Deleted')
    })
        .catch(() => {
            console.log('Error delete')
        })
    }

    return (
        <div className="postaccount">
            <div onClick={() => window.location.href = `/profile/${postAccount.id}`} className="meanName">{postAccount.name}</div>
            <div className="meanAc">{postAccount.accountName}</div>
            <div className="meanEmail">{postAccount.email}</div>
            <div className="status">
                {postAccount.status}
            </div>
            <div className="meanStartDate">{JSON.stringify(postAccount.startDate).split("T")[0]}</div>
            <div className="meanExpirationDate">{JSON.stringify(postAccount.expirationDate).split("T")[0]}</div>
            <div className="func">
            <ModalWindEdit oldPost={postAccount} />
                <div  className="delete" onClick={() => deletePost()}>
                    Delete
                </div>
            </div>
        </div>    )
}
export default PostAccountElement;