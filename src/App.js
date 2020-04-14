import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Front from "./pages/front";
import Article from "./pages/article";

function App() {
    return (
        <Frame>
            <Content>
                <Title>CEJE</Title>
                <Router>
                    <Route path="/" component={Front} />
                    <Route path="/article/search/:searchTerm" render={props => <Article title="HELLO" content="CONTENT" />} />
                </Router>
            </Content>
        </Frame>
    );
}

const Title = styled.h1`
    font-size: 42px;
    color: #fff;
`;

const Content = styled.div`
    flex-grow: 1;
    width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Frame = styled.div`
    height: calc(100vh - 150px);
    width: 100vw;
    background-color: coral;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
`;

export default App;
