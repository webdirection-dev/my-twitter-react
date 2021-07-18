import React from "react";
import './post-add-form.css';

const PostAddForm = ({onAddCard}) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                type="text"
                placeholder='О чём вы думаете сейчас?'
                className='form-control new-post-label'
            />
            <button
                onClick={() => onAddCard('Hello!')}
                type='submit'
                className='btn btn-outline-secondary'
            >Добавить</button>
        </div>
    )
};

export default PostAddForm;