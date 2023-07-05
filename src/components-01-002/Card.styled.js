// 3. библиотека для добавления классов styled-components
import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: #808080; */
    background-color: ${({isHide}) => (isHide?'blue':'red')};
    width: 300px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    
`;

export const Picture = styled.img`
    width: 300px;
`;