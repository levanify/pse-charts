import React from 'react'
import * as Style from "./Header.styles";
import {
  Link
} from "react-router-dom";

export const Header = () => {
  return (
    <Style.AppHeader>
      <Style.CompanyName>
        SM Investment Corporations
      </Style.CompanyName>
      <Style.MarketDetails>
        <Style.MarketDetailItem>
          <Style.MarketDetailHeader>
            Price
          </Style.MarketDetailHeader>
          <Style.MarketDetailValue>
            811.66
          </Style.MarketDetailValue>
        </Style.MarketDetailItem>
        <Style.MarketDetailItem>
          <Style.MarketDetailHeader>
            Market Cap
          </Style.MarketDetailHeader>
          <Style.MarketDetailValue>
            779.1B
          </Style.MarketDetailValue>
        </Style.MarketDetailItem>
      </Style.MarketDetails>
      <Style.Sections>
        <Style.SectionLink to="/">
          Overall
        </Style.SectionLink>
        <Style.SectionLink to="/retail">
          Retail Stores
        </Style.SectionLink>
        <Style.SectionLink to="/banking">
          Banking Operations
        </Style.SectionLink>
      </Style.Sections>
    </Style.AppHeader>
  )
}