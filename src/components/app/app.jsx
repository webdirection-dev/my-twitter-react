import React from "react";

// по умолчанию Webpack в уазанной дирректории ищет index.js
// поэтому from "../app-header" === from "../app-header/index.js"
import AppHeader from "../app-header";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import style from './App.module.scss';
// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.postsId = 0;

        this.randomMumId = () => {
            return +(++this.postsId + +Math.random()).toString().replace(/\./, '');
        };

        this.state = {
            dataCards: [
                { label: 'Going to learn React', important: false, like: false, id: this.randomMumId() },
                { label: 'That is so funny', important: false, like: false, id: this.randomMumId() },
                { label: 'I need a break...', important: false, like: false, id: this.randomMumId() }
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.changeStateForCard = this.changeStateForCard.bind(this);
    }

    deleteItem(idDeletetCard) {
        this.postsId--;
        this.setState(({dataCards}) => {
            // Вариант I
            // const index = dataCards.findIndex(elem => elem.id === idDeletetCard);
            // const before = dataCards.slice(0, index);
            // const after = dataCards.slice(index+1);
            // const newArr = [...before, ...after]

            // Вариант II
            const newArr = [];

            // всегда глубокая копия state иначе ошибки
            JSON.parse(JSON.stringify(dataCards)).forEach(item => {
                if (item.id !== idDeletetCard) newArr.push(item);
            });

            return {
                dataCards: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.randomMumId()
        };

        this.setState(({dataCards}) => {
            const newArr = [...dataCards, newItem];
            return {
                dataCards: newArr
            };
        });
    }

    changeStateForCard(id, elem) {
        this.setState(({dataCards}) => {
            // всегда глубокая копия state иначе ошибки
            const newArr =
                JSON.parse(JSON.stringify(dataCards))
                    .map((item) => {
                        if (item.id === id) {
                            item[elem] = !item[elem];
                            return item;
                        } else return  item;
                    });

            return {
                dataCards: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.changeStateForCard(id, 'important')
    }

    onToggleLiked(id) {
        // Вариант I
        // this.setState(({dataCards}) => {
        //     // Вариант I
        //     // const index = dataCards.findIndex(item => item.id === id);
        //     // const old = dataCards[index]
        //     // const newItem = {...old, like: !old.like}
        //     // const newArr = [...dataCards.slice(0, index), newItem, ...dataCards.slice(index +1)];
        //
        //     // Вариант II
        //     // всегда глубокая копия state иначе ошибки
        //     const newArr =
        //         JSON.parse(JSON.stringify(dataCards))
        //             .map(item => {
        //                 if (item.id === id) {
        //                     item.like = !item.like;
        //                     return item;
        //                 } else return  item;
        //             });
        //
        //     return {
        //         dataCards: newArr
        //     }
        // });
        // Вариант II
        this.changeStateForCard(id, 'like')
    }

    render() {
        // Вариант I
        const {dataCards} = this.state;
        const allPosts = dataCards.length;
        const likedPostCurrentCount = dataCards.filter(item => item.like).length;

        // Вариант II
        // const allPosts = this.state.dataCards.length;
        // const likedPostCurrentCount = this.state.dataCards.filter(item => {
        //     return item.like === true;
        // }).length;

        return (
            <AppBlock>
                <AppHeader
                    allPosts = {allPosts}
                    likedPostCurrentCount = {likedPostCurrentCount}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts = {this.state.dataCards}
                    deleteCardById = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm
                    onAddCard = {this.addItem}
                />
            </AppBlock>
        )
    }
}