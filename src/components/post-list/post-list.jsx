import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, deleteCardById, onToggleImportant, onToggleLiked}) => {

    const element = posts.map(item => {
        // проверяем пришел ли к нам именно объект
        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem
                        onDelete={() => deleteCardById(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                        {...itemProps}
                    />
                </li>
            )
        }
    });

    function isEmpty (item) {
        for (let i in item) return true;
        // for (let i in item) {
        //     console.log(typeof i);
        //     if (i !== false) return true;
        // }
        return false;
    }

    return (
       <ListGroup className='app-list'>
           {element}
       </ListGroup>
    )
};

export default PostList;