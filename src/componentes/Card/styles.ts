import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: 10px;
    font-family: "Poppins", "Arial";
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 48px 32px 48px 48px;
    box-sizing: border-box;
    width: 553px;
`;

export const CardHeader = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardFooter = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const CardActions = styled.div`
    display: flex;
    gap: 24px;
`;

export const CardTitle = styled.h2`
    color: #EB9B00;
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
`;

export const CardSubTitle = styled.h3`
    color: #002F52;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
`;

export const CardCommonText = styled.p`
    font-size: 14px;
    line-height: 21px;
`;

export const CardValueControl = styled.div``;

export const ValueLabel = styled.label`
    font-size: 14px;
    line-height: 21px;
    color: #00000054;
`;

export const CardPrice = styled.h3`
    color: #002F52;
    font-size: 36px;
    line-height: 54px;
    font-weight: 700;
`;