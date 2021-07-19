import React, {Component} from "react";
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);

        this.buttons = [
            { name: 'all', lable: 'Все' },
            { name: 'like', lable: 'Понравилось' }
        ];

        this.state = {};
    }

    render() {
        const btns = this.buttons.map(({name, lable}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button
                    onClick={() => onFilterSelect(name)}
                    key={name}
                    type='button'
                    className={`btn ${clazz}`}
                >{lable}</button>
            )
        });
        return (
            <div className='btn-group'>
                {/*<Button color='info'>Все</Button>*/}
                {btns}
            </div>
        )
    }
};