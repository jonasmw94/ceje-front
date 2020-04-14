import React from "react";
import styled from "styled-components";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.content
 */
export default function Article({ title, content }) {
    return (
        <Frame bgColor="#FFF">
            <Title>{title}</Title>
            <Paragraph>{content}</Paragraph>
        </Frame>
    );
}

const Title = styled.h1`
    font-size: 28px;
    color: black;
    margin-top: 35px;
    margin-bottom: 25px;
`;

const Paragraph = styled.p`
    width: 100%;
    text-align: left;
`;

const Frame = styled.div`
    flex-grow: 1;
    background-color: ${props => props.bgColor || "transparent"};
    width: 100%;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
`;
