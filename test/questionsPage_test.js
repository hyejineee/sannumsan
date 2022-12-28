Feature('QuestionsPage');

const questions = [
  '지역을 선택해 주세요.',
  '나의 등산 실력은 어느 정도인가요?',
  '어떤 계절의 산을 원하나요?',
  '산에서 무엇을 하고 싶으세요?',
];

const options = [
  [
    '서울',
    '부산', '인천', '대구', '광주', '대전', '울산',
    '세종', '제주도',
    '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도',
  ],
  ['초보자', '중급자', '상급자'],
  ['봄', '여름', '가을', '겨울'],
  ['열심히 등산하기', '경치 구경하기', '금강산도 식후경', '술에 취하기'],
];

Scenario('사용자는 각 단계에서 질문과 질문에 해당하는 옵션을 봅니다.', ({ I }) => {
  I.amOnPage('/questions');
  questions.forEach((question) => {
    I.see(question);
  });

  options.flat().forEach((option) => {
    I.see(option);
  });
});

Scenario('사용자는 각 질문에서 옵션을 선택할 수 있습니다.', ({ I }) => {
  I.amOnPage('/questions');

  options.flat().forEach((option) => {
    I.checkOption(option);
  });
});
