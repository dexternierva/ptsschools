import styled from "styled-components";

export const BucketsWrapper = styled.div`
    color: #FAFCFE;

    @media screen and (min-width: 960px) {
        display: flex;
    }
`
export const Bucket = styled.div`
    margin-bottom: 1px;
    padding: 2rem;
    background-color: #4F81BD;

    @media screen and (min-width: 960px) {
        flex: 0 0 33.333%;
        margin-bottom: 0;
        border-right: 1px solid #FFFFFF;
    }
`;

export const BucketIcon = styled.div`
    color: #FAFCFE;
    font-size: 3em;
`;

export const BucketHeader = styled.h3`
    color: #FAFCFE;
`;

export const BucketText = styled.p`
    margin-top: .5rem;
    color: #FAFCFE;
`;
