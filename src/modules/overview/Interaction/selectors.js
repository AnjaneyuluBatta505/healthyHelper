import { createSelector } from 'reselect';

const prepareData = ({ drugs }) => drugs.data.map(({ saleNaming }) => (saleNaming))
  .reduce((sum, curr) => ([...sum, ...curr]))
  .map(({ name, instruction, id }) => ({
    id,
    name: name.toLowerCase(),
    interactions: instruction.interactions,
    expanded: false,
  }));

const getData = createSelector(
  [prepareData],
  data => data,
);

export default getData;
