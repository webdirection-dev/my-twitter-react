import React from "react";

// по умолчанию Webpack в уазанной дирректории ищет index.js
// поэтому from "../app-header" === from "../app-header/index.js"
import AppHeader from "../app-header";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {
    return (
        <div className='app'>
            <AppHeader />
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;