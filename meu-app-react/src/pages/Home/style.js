import styled from 'styled-components';

export const Container = styled.h2`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const Body = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2rem;
    a {
        color: white;
        padding-bottom: 1rem;
        font-size: 100;
        &:hover {
            color: LimeGreen;
            opacity: 0.8;
        }
    }
`;

export const InitialText = styled.h2`
    background: ForestGreen;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Div = styled.div`
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        border-radius: 0.2rem;
        font-family: 'Poppins';
    }
    img {
        cursor: pointer;
    }
`;

export const List = styled.li`
    color: Gray;
    display: inline;
    float: left;
    padding-left: 6rem; 
    padding-right: 6rem;
    padding-top: 1rem;
    p {
        font-size: 17px;
    }
    span {
        font-size: 15px;
    }
    li {
        list-style-type: none;
    }
    a {
        font-size: 21px;
        color: LimeGreen;
        text-align: center;
        &:hover {
            color: Lime;
            opacity: 0.8;
        }
    }
`;