import React from 'react'
import styled from "styled-components";
import OverallNetIncome from "../data/OverallNetIncome.json";
import OverallRevenue from "../data/OverallRevenue.json";
import {StackedColumnChart} from "../components/StackedColumnChart";

export const Overall = () => {
  return (
    <Container>
      <StackedColumnChart
        uniqueId={'overall-net-income'}
        title={'NET INCOME'}
        data={OverallNetIncome}
        xAxisLabel={'year'}
        yAxisLabels={{
          "retail": "Retail",
          "banking": "Banking",
          "property": "Property",
        }}
      />
      <StackedColumnChart
        uniqueId={'overall-revenue'}
        title={'REVENUE'}
        data={OverallRevenue}
        xAxisLabel={'year'}
        yAxisLabels={{
          "retail": "Retail",
          "banking": "Banking",
          "property": "Property",
        }}
      />
    </Container>
  )
}

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;