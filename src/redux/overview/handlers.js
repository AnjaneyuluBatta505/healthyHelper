const initialState = {
  data: [
    {
      id: '0',
      name: 'Лечебные средства',
    },
    {
      id: '1',
      name: 'Проверка взаимодействия',
    },
    {
      id: '2',
      name: 'Лечебные тесты',
    },
    {
      id: '3',
      name: 'Альтернативная медицина',
    },
    {
      id: '4',
      name: 'Диагностическая информация',
    },
    {
      id: '5',
      name: 'Медицинские калькуляторы',
    },
    {
      id: '6',
      name: 'Идентификация таблетки',
    },
  ],
};

export const setInitialState = () => ({ ...initialState });

export default initialState;
