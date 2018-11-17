import { createSelector } from 'reselect';

const getInfo = ({ drugs, groupId, drugId }) => drugs.data.filter(el => el.id === groupId)[0]
  .saleNaming.filter(el => el.id === drugId)[0];

const getDrugInfo = createSelector(
  [getInfo],
  drugInfo => drugInfo,
);

export default getDrugInfo;
