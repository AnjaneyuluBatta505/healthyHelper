/* eslint-disable */
export const Indicators = [
  {
    id: 'TP',
    unit: 'г/л',
    label: 'Общий белок',
    ifMore: 'Повышению концентрации общего белка в сыворотке крови может способствовать прием некоторых лекарственных препаратов (например, кортикотропин, кортикостероиды, мисклерон, бромсульфалеин и клофибрат).\n\nПовышение уровня общего белка (гиперпротеинемия) обычно характерно для обезвоживания. Такое повышение белка является относительным (то есть на фоне уменьшения жидкой части крови концентрация белка кажется повышенной) и может наблюдаться при высокой температуре, неукротимой рвоте, диарее, усиленном потоотделении, несахарном диабете, тяжелых и обширных ожогах, генерализованных перитонитах. Употребления достаточного количества жидкости обычно достаточно для предотвращения обезвоживания, но в тяжелых случаях необходимо обращаться в больницу.\n\nАбсолютная гиперпротеинемия (при неизменном объеме крови уровень белка повышается) – сравнительно редкое явление, наблюдается при:\n\nострых и хронических инфекционных заболеваниях (за счет глобулинов);\nаутоиммунной патологии (системная красная волчанка, ревматоидный артрит, ревматизм и т. д);\nонкологических заболеваниях с гиперпродукцией патологических белков.\nВысокопротеиновая диета не вызывает повышение общего белка в организме.',
    ifLess: 'Пониженный уровень общего белка\n\nСнижение концентрации общего белка (гипопротеинемия) в сыворотке крови может быть относительным и абсолютным.\n\nОтносительная гипопротеинемия, как правило, связана с увеличением объема жидкости в кровеносном русле и может наблюдаться у женщин в последние месяцы беременности и в период лактации, при длительной физической нагрузке, при длительном постельном режиме, при водной нагрузке, внутривенных вливаниях, при уменьшении диуреза (олигурии).\n\nАбсолютная гипопротеинемия наблюдается при:\n\nнедостаточности поступления белков в организм вследствие голодания, недоедания, сужения (стриктуры) пищевода, нарушения целостности и функции желудочно-кишечного тракта, при продолжительных воспалительных процессах в стенке кишечника и других состояниях, сопровождающихся ухудшением переваривания и всасывания белков;\nнарушении синтеза белков в организме вследствие нарушения белковосинтетической функции печени (циррозы, гепатиты, карцинома и метастазы опухолей в печень, токсическое поражение);\nповышенных потерях белка организмом вследствие острых и хронических кровотечений, обширных ожогов, хронических заболеваний почек с нефротическим синдромом;\nусиленном катаболизме (распаде) белка вследствие продолжительной гипертермии, термических ожогов, тиреотоксикоза, длительных физических нагрузок, онкологических заболеваний;\nперераспределении белка (выход белка из сосудистого русла и образование экссудатов и транссудатов).',
    limits: {
      man: {
        maxLimit: 84,
        minLimit: 64,
      },
      woman: {
        maxLimit: 84,
        minLimit: 64,
      },
    },
  },
  {
    id: 'hemoglobin',
    unit: 'г/л',
    label: 'Гемоглобин',
    ifMore: '',
    ifLess: '',
    limits: {
      man: {
        maxLimit: 160,
        minLimit: 130,
      },
      woman: {
        maxLimit: 150,
        minLimit: 120,
      },
    },
  },
  {
    id: 'haptoglobin',
    unit: 'мг/л',
    label: 'Гаптоглобин',
    ifMore: '',
    ifLess: '',
    limits: {
      man: {
        maxLimit: 2000,
        minLimit: 150,
      },
      woman: {
        maxLimit: 200,
        minLimit: 150,
      },
    },
  },
  {
    id: 'glucose',
    unit: 'ммоль/л',
    label: 'Глюкоза',
    ifMore: 'Наиболее частым показателем углеводного обмена является содержание сахара в крови. Его кратковременное повышение возникает при эмоциональном возбуждении, стрессовых реакциях, болевых приступах, после приема пищи. Норма — 3,5—5,5 ммоль/л (тест на толерантность к глюкозе, тест с сахарной нагрузкой). \n Сахар повышен – диабет, эндокринные нарушения, панкреатит, опухоль поджелудочной железы, кровоизлияние в мозг, хронические поражения печени и почек, инфаркт миокарда, муковисцидоз.',
    ifLess: 'Наиболее частым показателем углеводного обмена является содержание сахара в крови. Его кратковременное повышение возникает при эмоциональном возбуждении, стрессовых реакциях, болевых приступах, после приема пищи. Норма — 3,5—5,5 ммоль/л (тест на толерантность к глюкозе, тест с сахарной нагрузкой). \n Сахар понижен – поражения печени и поджелудочной железы, гипотиреоз, рак желудка или надпочечников, отравление мышьяком или некоторыми лекарственными препаратами, алкогольная интоксикация.',
    limits: {
      man: {
        maxLimit: 5.5,
        minLimit: 3.3,
      },
      woman: {
        maxLimit: 5.5,
        minLimit: 3.3,
      },
    },
  },
  {
    id: 'creatinine',
    unit: 'мкмоль/л',
    label: 'Креатинин',
    ifMore: 'Данное вещество, как и мочевина, является продуктом белкового обмена и тоже выводится почками. Креатинин – продукт обменных процессов, происходящих в скелетных мышцах, и в меньшей степени в головном мозге. Соответственно, его уровень будет зависеть от состояния почек и мышц.\nПовышенный креатинин отмечается при почечной недостаточности, тяжелых травмах с повреждением мышц, при усиленной функции щитовидной железы, после применения некоторых противовоспалительных и антибактериальных средств. Умеренно высокий креатинин обнаруживают у спортсменов.',
    ifLess: 'Данное вещество, как и мочевина, является продуктом белкового обмена и тоже выводится почками. Креатинин – продукт обменных процессов, происходящих в скелетных мышцах, и в меньшей степени в головном мозге. Соответственно, его уровень будет зависеть от состояния почек и мышц.\n Понижение уровня креатинина:\nголодание, снижение мышечной массы;\nприём кортикостероидов;\nбеременность (особенно 1 и 2 триместр);\nвегетарианская диета;\nгипергидратация;\nмиодистрофии.',
    limits: {
      man: {
        maxLimit: 115,
        minLimit: 62,
      },
      woman: {
        maxLimit: 97,
        minLimit: 53,
      },
    },
  },
  {
    id: 'urea',
    unit: 'ммоль/л.',
    label: 'Мочевина',
    ifMore: 'Является следствием распада белков. В крови у человека допустимое количество указанного вещества меняется с возрастом. Зачастую уровень мочевины зашкаливает у пациентов, что имеют патологии в работе почек: доктора назначают подобный анализ крови для диагностики, прогнозирования недуга.',
    ifLess: 'Снижение уровня мочевины в крови может быть спровоцировано причинами, что имеют физиологическую (беременность, голодание, чрезмерные физнагрузки), патологическую природу (целиакия, цирроз печени, отравление тяжелыми металлами).',
    limits: {
      man: {
        maxLimit: 8.3,
        minLimit: 2.5,
      },
      woman: {
        maxLimit: 8.3,
        minLimit: 2.5,
      },
    },
  },
  {
    id: 'cholesterol',
    unit: 'ммоль/л',
    label: 'Холестерин',
    ifMore: 'Компонент жирового обмена, участвует в построении мембран клеток, синтезе половых гормонов и витамина D. Бывает общий холестерин, холестерин липопротеинов низкой плотности (ЛПНП) и высокой плотности (ЛПВП).\n\nСтепени повышения холестерина в крови:\n\n5,2-6,5 ммоль/л – легкая степень повышения вещества, зона риска атеросклероза;\n6,5-8,0 ммоль/л – умеренное повышение, которое корректируется диетой;\nсвыше 8,0 ммоль/л – высокий уровень, требующий лекарственного вмешательства.\nПовышение уровня холестерина в сыворотке или плазме крови — аргумент в пользу атеросклероза, гипотиреоза (низкой активности щитовидной железы), хронического гепатита, декомпенсированного сахарного диабета, механической желтухи.',
    ifLess: 'Компонент жирового обмена, участвует в построении мембран клеток, синтезе половых гормонов и витамина D. Бывает общий холестерин, холестерин липопротеинов низкой плотности (ЛПНП) и высокой плотно\nСнижается этот показатель при:\n\nзлокачественные опухоли печени;\nцирроз печени;\nревматоидный артрит;\nгиперфункция щитовидной и паращитовидных желез;\nголодание;\nнарушение всасывания веществ;\nхронические обструктивные заболевания легких.',
    limits: {
      man: {
        maxLimit: 6.5,
        minLimit: 3.5,
      },
      woman: {
        maxLimit: 6.5,
        minLimit: 3.5,
      },
    },
  },
  {
    id: 'bilirubin',
    unit: 'мкмоль/л',
    label: 'Билирубин',
    ifMore: 'Билирубин представляет собой желто-красный пигмент, который образуется при распаде гемоглобина в селезенке, печени и костном мозгу. Норма его в крови у детей и взрослых 3,4–20,5 мкмоль/л.\n\nЕсли таблица с результатами обследования содержит завышенный уровень билирубина, то врач может диагностировать у взрослых одно из следующих заболеваний:\n\nжелчекаменная болезнь;\nопухоли поджелудочной железы;\nвоспалительные заболевания желчевыводящих путей.',
    ifLess: 'Билирубин представляет собой желто-красный пигмент, который образуется при распаде гемоглобина в селезенке, печени и костном мозгу. Норма его в крови у детей и взрослых 3,4–20,5 мкмоль/л.\nЕсли билирубин ниже нормы, то у пациента может присутствовать одно из представленных заболевания:\n\nострый вирусный гепатит;\nбактериальное поражение печени (лептоспироз, бруцеллез и др.);\nтоксический гепатит;\nлекарственный препарат;\nновообразования в печени и первичном билиарном циррозе;\nгемолитическая анемия различной этиологии.\nБилирубин, образовавшийся в результате распада гемоглобина (непрямой), выходит в кровь, где связывается с альбуминами и переносится в печень. В клетках печени билирубин соединяется с глюкуроновой кислотой. Данный билирубин, связанный с глюкуроновой кислотой, называется прямой.',
    limits: {
      man: {
        maxLimit: 20,
        minLimit: 5,
      },
      woman: {
        maxLimit: 20,
        minLimit: 5,
      },
    },
  },
  {
    id: 'ALT',
    unit: 'ед/л',
    label: 'АлАТ (АЛТ)',
    ifMore: 'В зависимости от причины повышения, АЛТ может лишь немного превышать норму либо возрастать в несколько, иногда в десятки раз. Не стоит забывать, что АЛТ может быть повышена и по физиологическим причинам, после устранения которых, биохимия крови нормализуется, и лечение не требуется.\n\nПовышение АЛТ менее чем в два раза (или около того) допустимо, и само по себе не является причиной для беспокойства, при нормальных значениях остальных показателей крови и отсутствии жалоб. Повышение активности АЛТ может быть вызвано приемом некоторых лекарственных средств (большей частью вследствие токсического влияния на печень). Поэтому врач должен знать об употреблении подобных препаратов. АЛТ содержится не только в печени, но и в мышцах, и может повышаться после интенсивных физических нагрузок (при исключении других причин повышения АЛТ).\n\nКоличество АЛТ в крови считается повышенным, если оно превышает установленную норму, особенно в десятки, а в некоторых случаях и в сотни раз. Например, гепатит А, В и С провоцирует увеличение АЛТ в крови в десятки раз, алкогольный гепатит – приблизительно в 6 раз, жировая дистрофия печени – в 2-3 раза, при остром панкреатите показатели увеличиваются в 3-5 раз.',
    ifLess: 'Низкий уровень АЛТ обычно не является показателем какой-либо проблемы со здоровьем. Полное отсутствие или мизерное содержание АЛТ может быть связано с недостатком витамина В6, который входит в состав данного фермента, иногда со сложными воспалительными процессами в печени.',
    limits: {
      man: {
        maxLimit: 45,
        minLimit: 0,
      },
      woman: {
        maxLimit: 31,
        minLimit: 0,
      },
    },
  },
  {
    id: 'АСТ',
    unit: 'ед/л',
    label: 'АсАТ (АСТ)',
    ifMore: 'Повышение АСТ имеет свою градацию, так как фермент может быть незначительно превышен, а может быть увеличен средне или сильно.\n\nСтабильное незначительное повышение АСТ (примерно до 5 раз) может говорить о наличии жировых отложений на печени или быть вызвано приемом некоторых лекарственных средств (большей частью вследствие токсического влияния на печень). Даже прием аспирина незадолго до сдачи анализов может показать превышение показателя.\n\nПри средних превышенных показателях АСТ (от 5 до 10 раз от нормы) обычно диагностируется инфаркт либо сердечная недостаточность, мононуклеоз или аутоиммунные заболевания, в которых были повреждены мышцы.\n\nВысокий уровень повышения в плазме АСТ (более чем в 10 раз выше нормы) может говорить об опухоли, большом количестве поражений печени разного размера, вирусных гепатитах, бывает при долговременном приеме серьезных медикаментов. Самый высокий уровень АСТ обычно наблюдается в начале активной фазы заболевания.\n\nВысокий уровень АСТ не всегда свидетельствует о повреждениях печени. Высокий АСТ и нормальный АЛТ может означать, что его повышение произошло в результате повреждения других тканей, например, сердца или мышц. АСТ преобладает в клетках сердечной мышцы, поэтому его повышение является маркером разрушения миокарда (при инфаркте миокарда АСТ возрастает примерно в 8-10 раз).',
    ifLess: 'Пониженный уровень АСТ может свидетельствовать о недостатке или отсутствии витамина В6. Некоторые лекарства могут снизить уровень АСТ, например трифлуоперазин (также известный как Стелазин, антипсихотический препарат) и метронидазол (также известный как Флагил, антибиотик).',
    limits: {
      man: {  
        maxLimit: 45,
        minLimit: 0,
      },
      woman: {
        maxLimit: 31,
        minLimit: 0,
      },
    },
  },
  {
    id: 'lipase',
    unit: 'ед/л',
    label: 'Липаза',
    ifMore: '',
    ifLess: '',
    limits: {
      man: {
        maxLimit: 190,
        minLimit: 0,
      },
      woman: {
        maxLimit: 190,
        minLimit: 0,
      },
    },
  },
  {
    id: 'alphaAmylase',
    unit: 'ед/л',
    label: 'Альфа-амилаза',
    ifMore: '',
    ifLess: '',
    limits: {
      man: {
        maxLimit: 100,
        minLimit: 28,
      },
      woman: {
        maxLimit: 100,
        minLimit: 28,
      },
    },
  },
  {
    id: 'pancreaticAmylase',
    unit: 'ед/л',
    label: 'Панкреатическая амилаза',
    ifMore: '',
    ifLess: '',
    limits: {
      man: {
        maxLimit: 50,
        minLimit: 0,
      },
      woman: {
        maxLimit: 50,
        minLimit: 0,
      },
    },
  },
];

 /* eslint-enable */

export const blank = () => {};