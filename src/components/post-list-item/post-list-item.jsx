import React, {Component} from "react";
import './post-list-item.scss';

export default class PostListItem extends Component {
    // Конструктор был нужен на первом этапе
    //Сейчас мы в класс спускаем функции из app.jsx, поэтому стйти конструктор больше не нужны
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // }
    //
    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }));
    // }
    //
    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }));
    // }

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        // const {important, like} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) classNames += ' important';
        if (like) classNames += ' like';

        return (
            <div className={classNames}>
            <span
                className='app-list-item-label'
                // onClick={this.onLike}
                onClick={onToggleLiked}
            >
                {label}
            </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-star btn-sm'
                        // onClick={this.onImportant}
                        onClick={onToggleImportant}
                    >
                        <i className='fa fa-star'></i>
                    </button>

                    <button
                        onClick={onDelete}
                        className='btn-trash btn-sm'
                        type='button'
                    >
                        <i className='far fa-trash-alt'></i>
                    </button>

                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}