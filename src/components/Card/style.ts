import styled from 'styled-components';
import imageUrl from './../../assets/img.jpg';

export const Cards = styled.div`
    border-radius: 25px;
    margin: 40px 50px;
    padding: 10px;
    height: 400px;
    width: 270px;
    background: url(${imageUrl});
    background-size: 470px;
    background-repeat: no-repeat;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.629);
`;

export const CardsName = styled.h3`
    color: rgb(238, 238, 238);
    margin-top: 260px;
`;

export const CardsDetails = styled.h6`
    color: rgb(238, 238, 238);
    margin-top: 5px;
    margin-bottom: 5px;
`;

