import styled from "styled-components";

export const MarketDetailValue = styled.div`
  font-weight: bold;
`;

export const MarketDetailHeader = styled.div`
  font-size: 0.8rem;
`;

export const MarketDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const MarketDetails = styled.div`
  display: flex;
  justify-content: center;
`;

export const CompanyName = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const AppHeader = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Sections = styled.div`
  display: flex;
  overflow: scroll;
`;

export const Section = styled.div`
  flex-shrink: 0;
  margin: 1rem;
`;