import * as React from 'react';
import './App.scss';
import TopNavBar from "./components/layout/TopNavBar";
import RouterView from "./router/RouterView";
import Footer from "./components/layout/Footer";
import Menu from "./components/menu/Menu";
import Music from "./components/music/Music"

function App() {
    return (
        <div className="box">
            {/*顶部导航栏*/}
            <TopNavBar></TopNavBar>
            {/*内容*/}
            <RouterView></RouterView>
            {/*底部*/}
            <Footer></Footer>
            {/*底部菜单*/}
            <Menu></Menu>
            {/*音乐盒*/}
            <Music></Music>
        </div>
    );
}

export default App;
