import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import * as Style from './App.styles'

const theme = {
  color: {
    white: '#FFFFFF',
    primary: '#323232'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Style.Section>
            Overall Stats
          </Style.Section>
          <Style.Section>
            Retail Stores
          </Style.Section>
          <Style.Section>
            Banking Operations
          </Style.Section>
        </Style.Sections>
      </Style.AppHeader>
    </ThemeProvider>
  );
}

export default App;