export const Indicators = {
  0: {
    id: 0,
    label: 'Физические свойства',
    value: 'physicalProperty',
    indicators: [
      {
        id: 'COL',
        label: 'Цвет',
        value: 'color',
        reference: 'Желтый',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'yellow',
            label: '1. Cоломенно-желтый - желтый.',
            info: 'Cоломенно-желтый - желтый цвет мочи является референсным. Вам не о чем беспокоиться.',
          },
          {
            id: 1,
            type: 'radio',
            value: 'darkYellow',
            label: '2. Темно-желтый',
            info: 'Практически безобидная ситуация. Причина заключается в высокой концентрации мочи, обусловленной недостатком жидкости в организме. Кроме того, такой цвет может спровоцировать морковь в рационе питания. Также существует мнение, что темно-желтая моча может быть проявлением заболеваний сердца и печени, а также недостаточного питания.',
          },
          {
            id: 2,
            type: 'radio',
            value: 'brownishOrGreenish',
            label: '3. Коричневатая или зеленоватая',
            info: 'Свидетельствует о большом количестве билирубина, который выступает проявлением механической желтухи. Помимо этого, моча таких оттенков может быть маркером гемолитической анемии и проблем с печенью. \n Вам следует обратиться к врачу.',
          },
          {
            id: 3,
            type: 'radio',
            value: 'dirtyRed',
            label: '4. Грязно-красная',
            info: 'Явный признак примеси крови в моче. Привести к этому может гемолитический криз, использование для переливания неправильной группы крови, порфирия. \n Вам следует обратиться к врачу.',
          },
          {
            id: 4,
            type: 'radio',
            value: 'bluish',
            label: '5. Синеватая',
            info: 'Показатель усиленных процессов гниения в кишечнике. Такой оттенок проявляется из-за попадания в мочу индоксилсерной кислоты в большом количестве. \n Вам следует обратиться к врачу.',
          },
          {
            id: 5,
            type: 'radio',
            value: 'black',
            label: '6. Черная',
            info: 'Гемолитическая анемия, меланома, меланосаркома. Проявление образуется из-за попадания в мочу определенных веществ – гемоглобина, меланина и прочих.\n Вам следует обратиться к врачу.',
          },
          {
            id: 6,
            type: 'radio',
            value: 'pink',
            label: '7. Розовая',
            info: 'Указывает на то, что щелочная реакция в определенном месте организма привела к попаданию в организм фенолфталеина.\n Вам следует обратиться к врачу.',
          },
          {
            id: 7,
            type: 'radio',
            value: 'greenishYellow',
            label: '7. Зеленовато-желтая',
            info: 'Гнойные вкрапления в моче. \n Вам следует обратиться к врачу.',
          },
        ],
      },
      {
        id: 'CLA',
        label: 'Прозрачность',
        value: 'transparency',
        reference: 'Прозрачная',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'fullTransparency',
            label: '1. Полная прозрачность',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'incompleteTransparency',
            label: '2. Неполная прозрачность',
            info: '.',
          },
          {
            id: 2,
            type: 'radio',
            value: 'muddy',
            label: '3. Мутная',
            info: '',
          },
        ]
      },
      {
        id: 'рН',
        label: 'Щелочная реакция',
        value: 'reaction',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'lessThan5',
            label: '1. pH менее 5.0',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'normal',
            label: '2. pH 5.0 – 7.0',
            info: '',
          },
          {
            id: 2,
            type: 'radio',
            value: 'greater Than5',
            label: '3. pH более 7.0',
            info: '',
          },
        ]
      },
      {
        id: 'SG',
        label: '',
        value: 'relativeDensity',
        inputs: [
          {
            id: 'relativeDensityField',
            type: 'input',
            label: 'Относительная плотность',
            unit: 'гр/л',
            ifMore: 'Повышенный показатель может говорить о сахарном диабете, инфекционных процессах в мочевыводящих путях. У беременных – свидетельствует о токсикозе. Также плотность может быть повышена из-за недостаточного потребления жидкости или ее потери.',
            ifLess: 'Пониженный показатель свидетельствует о почечной недостаточности, несахарном диабете. Может также возникать при обильном питье или приеме мочегонных лекарств.',
            limits: {
              man: {
                maxLimit: 1025,
                minLimit: 1000,
              },
              woman: {
                maxLimit: 1025,
                minLimit: 1000,
              },
            },
          }
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
        id: 'PRO',
        label: 'Белок',
        value: 'protein',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notFound',
            label: '1. Не обнаружен (или не более 0,033 г/л)',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружен',
            info: '',
          },
        ]
      },
      {
        id: 'GLU',
        label: 'Глюкоза',
        value: 'glucose',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notFound',
            label: '1. Не обнаружена',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружена',
            info: '',
          },
        ]
      },
      {
        id: 'KET',
        label: 'Кетоновые тела',
        value: 'ketoneBodies',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notFound',
            label: '1. Не обнаружены',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружена',
            info: '',
          },
        ]
      },
      {
        id: 'BIL',
        label: 'Билирубин',
        value: 'bilirubin',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notFound',
            label: '1. Не обнаружен',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружен',
            info: '',
          },
        ]
      },
      {
        id: 'UBG',
        label: 'Уробилин',
        value: 'urobilin',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notFound',
            label: '1. Не обнаружен',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'traces',
            label: '2. В утренней порции следы',
            info: '',
          },
          {
            id: 2,
            type: 'radio',
            value: 'moreNormdetected',
            label: '2. Обнаружен больше нормы',
            info: '',
          },
        ]
      },
    ]
  },
  2: {
    id: 2,
    label: 'Микроскопическое исследование',
    value: 'microscopicExamination',
    indicators: [
      {
        id: 0,
        label: 'Эпителий плоский',
        value: 'squamousEpithelium',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'normal',
            label: '1. 0-3 в поле зрения',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'aboveNormal',
            label: '2. Повышенное содержание',
            info: '',
          },
        ]
      },
      {
        id: 1,
        label: 'Эпителий переходный',
        value: 'epitheliumTransitional',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'normal',
            label: '1. Единичный в препарате',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'aboveNormal',
            label: '2. Повышенное содержание',
            info: '',
          },
        ]
      },
      {
        id: 2,
        label: 'Эпителий почечный',
        value: 'renalEpithelium',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'normal',
            label: '1. Не обнаружен',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'aboveNormal',
            label: '2. Обнаружен',
            info: '',
          },
        ]
      },
      {
        id: 3,
        label: '',
        value: 'erythrocytes',
        inputs: [
          {
            id: 'erythrocytesField',
            type: 'input',
            label: 'Эритроциты',
            unit: '%',
            ifMore: '',
            ifLess: '',
            limits: {
              man: {
                maxLimit: 7,
                minLimit: 5,
              },
              woman: {
                maxLimit: 7,
                minLimit: 5,
              },
            },
          }
        ]
      },
      {
        id: 4,
        label: '',
        value: 'leukocytes',
        inputs: [
          {
            id: 'leukocytesField',
            type: 'input',
            label: 'Лейкоциты',
            unit: '%',
            ifMore: '',
            ifLess: '',
            limits: {
              man: {
                maxLimit: 7,
                minLimit: 5,
              },
              woman: {
                maxLimit: 7,
                minLimit: 5,
              },
            },
          }
        ]
      },
      {
        id: 5,
        label: 'Цилиндры',
        value: 'cylinders',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notDetected',
            label: '1. Не обнаружены',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'Hyaline(1-2)',
            label: '2. Гиалиновые (1-2 в препарате)',
            info: '',
          },
          {
            id: 2,
            type: 'radio',
            value: 'HyalineMoreThan3',
            label: '3. Гиалиновые (3 и более)',
            info: '',
          },
          {
            id: 3,
            type: 'radio',
            value: 'granular',
            label: '4. Зернистые',
            info: '',
          },
          {
            id: 4,
            type: 'radio',
            value: 'waxy',
            label: '5. Восковидные',
            info: '',
          },
          {
            id: 5,
            type: 'radio',
            value: 'erythrocytic',
            label: '6. Эритроцитарные',
            info: '',
          },
          {
            id: 6,
            type: 'radio',
            value: 'leukocytic',
            label: '7. Лейкоцитарные',
            info: '',
          },
          {
            id: 7,
            type: 'radio',
            value: 'epithelial',
            label: '8. Эпителиальные',
            info: '',
          },
          {
            id: 8,
            type: 'radio',
            value: 'cylinders',
            label: '9. Цилиндроиды',
            info: '',
          },
        ]
      },
      {
        id: 6,
        label: 'Соли',
        value: 'sols',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notDetected',
            label: '1. Не обнаружены',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'few',
            label: '2. В небольшом количестве',
            info: '',
          },
          {
            id: 2,
            type: 'radio',
            value: 'increasedLevel',
            label: '3. Повышенное содержание',
            info: '',
          },
        ]
      },
      {
        id: 7,
        label: 'Бактерии',
        value: 'bacteria',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notDetected',
            label: '1. Не обнаружены',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружены',
            info: '',
          },
        ]
      },
      {
        id: 8,
        label: 'Слизь',
        value: 'mucus',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'notDetected',
            label: '1. Не обнаружена',
            info: '',
          },
          {
            id: 1,
            type: 'radio',
            value: 'detected',
            label: '2. Обнаружена',
            info: '',
          },
        ]
      },
    ],
  },
  3: {
    id: 2,
    label: 'Данные о пациенте',
    value: 'patientData',
    indicators: [
      {
        id: 0,
        label: 'Пол',
        value: 'sex',
        inputs: [
          {
            id: 0,
            type: 'radio',
            value: 'man',
            label: '1. Мужской'
          },
          {
            id: 1,
            type: 'radio',
            value: 'woman',
            label: '2. Женский'
          },
        ]
      }
    ]
  }
};

 /* eslint-enable */

export const blank = () => {};
