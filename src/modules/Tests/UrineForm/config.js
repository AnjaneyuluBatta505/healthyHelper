/* eslint-disable */
export const Indicators = {
  0: {
    id: 0,
    label: 'Физические свойства',
    value: 'physicalProperty',
    indicators: [
      {
        id: 0,
        label: 'Цвет',
        value: 'color',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'darkBrown',
            label: 'темно-бурый'
          },
          {
            id: 1,
            type: 'radio',
            value: 'redOrPink',
            label: 'красный или розовый'
          },
          {
            id: 2,
            type: 'radio',
            value: 'darkRed',
            label: 'темно-красный'
          },
          {
            id: 3,
            type: 'radio',
            value: 'black',
            label: 'черный'
          },
          {
            id: 4,
            type: 'radio',
            value: 'grayishWhite',
            label: 'серовато-белый'
          },
          {
            id: 5,
            type: 'radio',
            value: 'green',
            label: 'зеленый'
          },
          {
            id: 6,
            type: 'radio',
            value: 'blue',
            label: 'синий'
          },
        ],
      },
      {
        id: 1,
        label: 'Прозрачность',
        value: 'transparency',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'muddy',
            label: 'Мутная'
          },
          {
            id: 0,
            type: 'radio',
            value: 'transparent',
            label: 'прозрачная'
          },
        ]

      }
    ]

  },
  1: {
    id: 1,
    label: 'Химические свойства',
    value: 'chemicalProperty',
    indicators: [
      {
        id: 0,
        label: 'белок',
        value: 'protein',
        inputs: [
          {
            id: 'protein',
            type: 'input',
            label: '',
            unit: '%'
          }
        ]
      }
    ]

  }
};

 /* eslint-enable */

export const blank = () => {};
