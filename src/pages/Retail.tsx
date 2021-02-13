import React from 'react';
import styled from 'styled-components';
import { StackedColumnChart } from '../components/StackedColumnChart';
import NumberOfRetailStores from '../data/NumberOfRetailStores.json';
import RetailFootprint from '../data/RetailFootprint.json';

export const Retail = () => {
  return (
    <Container>
      <StackedColumnChart
        uniqueId={'retail-number'}
        title={'Number of Retail Stores'}
        data={NumberOfRetailStores}
        xAxisLabel={'year'}
        yAxisLabels={{
          'Metro Manila': 'Metro Manila',
          Luzon: 'Luzon',
          Visayas: 'Visayas',
          Mindanao: 'Mindanao',
          Others: 'Others',
        }}
        format={'#.'}
      />
      <StackedColumnChart
        uniqueId={'retail-footprint'}
        title={'Retail Footprint'}
        data={RetailFootprint}
        xAxisLabel={'year'}
        yAxisLabels={{
          'Metro Manila': 'Metro Manila',
          Luzon: 'Luzon',
          Visayas: 'Visayas',
          Mindanao: 'Mindanao',
          Others: 'Others',
        }}
      />
    </Container>
  );
};

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;
