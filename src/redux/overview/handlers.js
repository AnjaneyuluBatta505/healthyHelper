const initialState = {
  data: [
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Лечебные средства',
      iconName: 'medicine',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Проверка взаимодействия',
      iconName: 'interactivity',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Лечебные тесты',
      iconName: 'test',
    },
    {
      id: `$_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Альтернативная медицина',
      iconName: 'alternativemedicine',
    },
    // {
    //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
    //   name: 'Диагностическая информация',
    //   iconName: 'stethoscope',
    // },
    // {
    //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
    //   name: 'Медицинские калькуляторы',
    //   iconName: 'calculator',
    // },
    // {
    //   id: `$_${Math.random().toString(36).substr(2, 9)}`,
    //   name: 'Идентификация таблетки',
    //   iconName: 'drugs',
    // },
  ],
};

export const setInitialState = () => ({ ...initialState });

export default initialState;
