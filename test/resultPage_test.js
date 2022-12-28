Feature('ResultPage');

Scenario('사용자는 선택한 옵션들을 볼 수 있습니다. ', ({ I }) => {
  I.amOnPage('/result');

  I.see('서울');
  I.see('초보자');
  I.see('경치 구경하기');
  I.see('가을');
});

Scenario('사용자는 선택한 옵션에 맞는 등산코스 리스트를 봅니다. ', ({ I }) => {
  I.amOnPage('/result');

  I.see('공주봉 코스');
  I.see('소요산');
});

Scenario('사용자는 등산코스 아이템 선택시 지도에 그려진 등산코스를 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/result');

  I.click('공주봉 코스');

  I.seeElement('#react-naver-map');
});
