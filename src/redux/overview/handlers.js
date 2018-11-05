const initialState = {
  data: [
    {
      id: '0',
      name: 'Витамины',
      saleNaming: [
        {
          id: '0',
          name: 'АЕВИТ',
          manufacturer: 'Белмедпрепараты РУП, Республика Беларусь',
          applicant: 'Белмедпрепараты РУП, Республика Беларусь',
          certificateNumber: '15/10/159',
          registrationDate: '01.10.2015',
          validity: '01.10.2020',
          instruction: {
            pharmacologicalProperties: {},
            indicationsForUse: {},
            methodOfApplication: {},
            sideEffect: {},
            contraindications: {
            },
          },
        },
      ],
    },
    {
      id: '2',
      name: 'Гомеопатическое лекарственное средство',
    },
    {
      id: '3',
      name: 'Иммунобиологическое лекарственное средство',
    },
    {
      id: '4',
      name: 'Иммунобиологическое лекарственное средство (вакцины)',
    },
    {
      id: '5',
      name: 'Лекарственное растительное сырье и сборы из него',
    },
    {
      id: '6',
      name: 'Лекарственное средство',
    },
    {
      id: '7',
      name: 'Радиофармацевтическое лекарственное средство',
    },
    {
      id: '8',
      name: 'Фармацевтическая субстанция',
    },
    {
      id: '9',
      name: 'Фармацевтическая субстанция по заявке отечеств. производителя',
    },
  ],
};

// export const action = state => ({ ...state });

export const setInitialState = () => ({ ...initialState });

export default initialState;
