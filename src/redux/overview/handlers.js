const initialState = {
  data: [
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Лечебные средства',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Проверка взаимодействия',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Лечебные тесты',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Альтернативная медицина',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Диагностическая информация',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Медицинские калькуляторы',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Идентификация таблетки',
    },
  ],
};

export const setInitialState = () => ({ ...initialState });

export default initialState;
