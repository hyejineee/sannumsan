const questions = [
  {
    id: 1,
    category: 'region',
    question: '지역을 선택해 주세요.',
    options: [
      { id: 1, option: '서울' },
      { id: 2, option: '부산' },
      { id: 3, option: '대구' },
      { id: 4, option: '인천' },
      { id: 5, option: '광주' },
      { id: 6, option: '대전' },
      { id: 7, option: '울산' },
      { id: 8, option: '세종' },
      { id: 9, option: '제주도' },
      { id: 10, option: '경기도' },
      { id: 11, option: '강원도' },
      { id: 12, option: '충청북도' },
      { id: 13, option: '충청남도' },
      { id: 14, option: '전라북도' },
      { id: 15, option: '전라남도' },
      { id: 16, option: '경상북도' },
      { id: 17, option: '경상남도' },
    ],
  },
  {
    id: 2,
    category: 'climbingLevel',
    question: '나의 등산 실력은 어느 정도인가요?',
    options: [
      { id: 1, option: '초보자' },
      { id: 2, option: '중급자' },
      { id: 3, option: '상급자' },
    ],
  },
  {
    id: 3,
    category: 'season',
    question: '어떤 계절의 산을 원하나요?',
    options: [
      { id: 1, option: '봄' },
      { id: 2, option: '여름' },
      { id: 3, option: '가을' },
      { id: 4, option: '겨울' },
    ],
  },
  {
    id: 4,
    category: 'activity',
    question: '산에서 무엇을 하고 싶으세요?',
    options: [
      { id: 1, option: '열심히 등산하기' },
      { id: 2, option: '경치 구경하기' },
      { id: 3, option: '금강산도 식후경' },
      { id: 4, option: '술에 취하기' },
    ],
  },
];

export default questions;
