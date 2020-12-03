import styled from "styled-components";
import numbersBg from "../../assets/in-numbers.jpg";

export const Numbers = styled.div`
    margin-top: 3rem;
    padding: 2rem 0;
    background: linear-gradient(0deg, rgba(79, 129, 189, 0.8), rgba(15, 33, 80, 0.8)), url(${numbersBg});
    background-size: cover;
    background-position: center;
    color: #FAFCFE;

    @media screen and (min-width: 991px) {
        padding: 4rem 0;
    }

    @media screen and (mid-width: 1200px) {
        padding: 8rem 0;
    }
`;

export const NumbersTitle = styled.h2`
    font-size: 1.625em;
    font-weight: 500;
    text-align: center;
    line-height: 1.15384615;
    letter-spacing: -.02em;

    @media screen and (min-width: 768px) {
        font-size: 2em;
        line-height: 1.25;
    }

    @media screen and (min-width: 991px) {
        font-size: 2.25em;
        line-height: 1.25;
    }
`;

export const List = styled.ul`
    margin-top: 2rem;

    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    margin-top: 1rem;
    background: rgba(255, 255, 255, .1);
    border: 1px solid rgba(255, 255, 255, .2);

    @media screen and (min-width: 991px) {
        flex: 0 0 33%;
    }
`;

export const ListItemIcon = styled.div`
    font-size: 3em;
`;

export const ListItemHeader = styled.h3`
    margin-top: 2rem;
    font-size: 3em;
    font-weight: 500;
`;

export const ListItemSubHeader = styled.h4`
    font-size: 1.125em;
    font-weight: 500;
    text-transform: uppercase;
`;
