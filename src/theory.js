import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function WhoAmI (props) {
    return (
        <React.Fragment>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </React.Fragment>
    )
}

function WhoAmI2 ({name, surname, link}) {
    return (
        <React.Fragment>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </React.Fragment>
    )
}

const All = () => {
    return(
        <>
            <WhoAmI2 name='Joe' surname='Doe' link='facebook.com'/>
            <WhoAmI2 name='Iv' surname='Cond' link='facebook2.com'/>
            <WhoAmI2 name='Alex' surname='Shepard' link='facebook3.com'/>

            <WhoAmIClass name='AlexClass' surname='ShepardClass' link='facebookClass.com'/>
            <WhoAmIClass name='IvClass' surname='CondClass' link='facebookClass.com'/>
        </>
    )
};

class WhoAmIClass extends React.Component {
    constructor(props) {
        super(props);  // Вытягиваем свойства объекта из React.Component
        // И превращаем props в state для дальнейшей динамической модификации state
        this.state = {
            years: 26,
            skill: 'web-dev'
        }
        // привязываем метод nextYear к контексту нового объекта
        // Способ 1 через bind
        this.nextYear = this.nextYear.bind(this);
        // Способ 2: прописать функцию прямо внутри конструктора
        // this.nextYear = () => {
        //     this.setState(item => ({
        //         years: ++item.years
        //     }));
        // };
    }

    nextYear() {
        // Перезапишем объект state с помощью метода setState()
        this.setState(item => ({
            years: ++item.years
        }));
    }

    render() {
        const {name, surname, link} = this.props;
        return(
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}. Years = {this.state.years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <WhoAmI name='JohnStart' surname='SmithStart' link='facebook.com'/>
        <All />
    </React.StrictMode>,
    document.getElementById('root')
);