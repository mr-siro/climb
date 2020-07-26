const listIntro = [
  {
    id: '1',
    icon: 'comment',
    title: 'About yourself',
    data: [
      {
        idData: '1',
        titleData:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
      },
    ],
    type: 1,
  },

  {
    id: '2',
    icon: 'graduation-cap',
    title: 'Education',
    data: [
      {idData: '1', titleData: 'London Hight Shool', isGrad: true},
      {idData: '2', titleData: 'London University', isGrad: false},
    ],
    type: 2,
  },
  {
    id: '3',
    icon: 'book',
    title: 'Work Experience',
    data: [
      {
        idData: '1',
        valueDefault: 'Employee',
        titleData: 'Hani Software',
        year: '2009',
      },
      {
        idData: '2',
        valueDefault: 'Manage',
        titleData: 'Gruby Company',
        year: '2010',
      },
      {
        idData: '3',
        valueDefault: 'Manage',
        titleData: 'Mina Company',
        year: '2017',
      },
    ],
    type: 3,
  },
];

export {listIntro};
