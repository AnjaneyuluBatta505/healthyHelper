import http from '../../index';

export const getDrugGroup = () => (
  http.get('overview/drugs')
);

export const getDrugsList = id => (
  http.get(`overview/drugs/${id}`)
);

export const getDrugInfo = id => (
  http.get(`overview/drugs/current/${id}`)
);

export const getDataBySubString = queryString => (
  http.post('overview/drugs/search', { queryString })
);
