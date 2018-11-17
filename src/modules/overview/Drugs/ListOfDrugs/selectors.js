import { createSelector } from 'reselect';

const getInfo = ({ drugs, id }) => drugs.data.filter(el => el.id === id)[0];

const getListOfDrugs = createSelector(
  [getInfo],
  listOfDrugs => listOfDrugs,
);

export default getListOfDrugs;
