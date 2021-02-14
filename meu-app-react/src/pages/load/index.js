import React from 'react';
import Skeleton from "react-loading-skeleton";
import {Container, InitialText, Div, List} from '../Home/style';

function ComponentSkeleton() {
    return (
    <Container>
        <InitialText>
            <Skeleton height={40} width={300} />
        </InitialText>
        <Div>
            <Skeleton height={30} width={300} />
        </Div>
        <List>
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
            <Skeleton height={28} width={1000} />
        </List>         
    </Container> 
    );

}

export default ComponentSkeleton;