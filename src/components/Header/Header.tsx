import React from 'react';
import * as Style from './Header.styles';

export const Header = () => {
  return (
    <Style.AppHeader>
      <Style.CompanyName>SM Investment Corporations</Style.CompanyName>
      <Style.MarketDetails>
        <Style.MarketDetailItem>
          <Style.MarketDetailHeader>Price</Style.MarketDetailHeader>
          <Style.MarketDetailValue>811.66</Style.MarketDetailValue>
        </Style.MarketDetailItem>
        <Style.MarketDetailItem>
          <Style.MarketDetailHeader>Market Cap</Style.MarketDetailHeader>
          <Style.MarketDetailValue>779.1B</Style.MarketDetailValue>
        </Style.MarketDetailItem>
      </Style.MarketDetails>
      <Style.Sections>
        <Style.SectionLink
          exact
          to="/"
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          Overall
        </Style.SectionLink>
        <Style.SectionLink
          exact
          to="/retail"
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          Retail Stores
        </Style.SectionLink>
        <Style.SectionLink
          exact
          to="/banking"
          activeStyle={{
            textDecoration: 'underline',
          }}
        >
          Banking Operations
        </Style.SectionLink>
      </Style.Sections>
    </Style.AppHeader>
  );
};
