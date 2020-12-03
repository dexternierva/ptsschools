import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #ECF1F4;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.05);
    overflow: hidden;
    position: relative;
    padding-top: 4rem;
    transition: all 250ms ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
    }

    @media screen and (min-width: 991px) {
        flex: 0 1 32%;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 2rem;
    padding-top: 4rem;
    border-top: 1px solid #ECF1F4;
    /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
`;

export const Title = styled.h4`
    font-size: 1.125em;
    font-weight: 500;
    line-height: 1.111;
`;

export const Text = styled.p`
    margin-top: .5rem;
    line-height: 1.25;
    color: #6c757d;
`;

export const Image = styled.img`
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    width: 80px;
    height: 80px;
    border: 1px solid #EAEBEC;
    border-radius: 50%;
    background: #ECF1F4;
`;

export const Button = styled.button`
    cursor: pointer;
    margin-top: 1.5rem;
    width: fit-content;
    color: #59AD15;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid #59AD15;
    background: transparent;
    padding: .5rem 1rem;
    font-family: 'Work Sans', sans-serif;
    font-size: 0.875em;
    line-height: 1.5;
    border-radius: 2px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        background-color: #59AD15;
        color: #FAFCFE;
    }
`;
