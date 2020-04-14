import React, { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import BarLoader from "../components/loaders/bars.svg";

function startLoader(e, cb, setClassName, setLoading, data) {
    e.preventDefault();
    setClassName("hidden");
    setTimeout(() => {
        setLoading(true);
        setClassName("visible");
        if (cb) {
            setTimeout(() => {
                cb(data);
                setLoading(false);
            }, 2000);
        }
    }, 1000);
}

export default function Front() {
    const [loading, setLoading] = useState(false);
    const [className, setClassName] = useState("visible");
    const [searchText, setSearchText] = useState("");

    return (
        <Frame>
            {loading ? (
                <img alt="loader" style={{ width: 40, paddingLeft: 7 }} src={BarLoader} />
            ) : (
                <SearchFrame onSubmit={e => startLoader(e, () => {}, setClassName, setLoading, null)} className={className}>
                    <Input
                        type="text"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        placeholder="Type in a phrase you want to search for..."
                    />
                    <Button type="submit">
                        <GoSearch size="16px" />
                    </Button>
                </SearchFrame>
            )}
        </Frame>
    );
}

const Button = styled.button`
    height: 22px;
    width: 22px;
    border: none;
    background: none;
    outline: none;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    flex-grow: 1;
    height: 20px;
    font-size: 14px;
    border: none;
    outline: none;
`;

const SearchFrame = styled.form`
    overflow: hidden;
    height: 22px;
    width: 80%;
    background-color: #fff;
    border-radius: 21px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: 1s all;

    &.hidden {
        width: 10%;
    }
`;
