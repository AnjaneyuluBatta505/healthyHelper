import { createSelector } from 'reselect';

const prepareData = ({ data }) => data
  .map(({ _id, name, instruction: { interactions } }) => ({ _id, name, interactions, expanded: false }));

const getData = createSelector(
  [prepareData],
  data => data,
);

export default getData;
