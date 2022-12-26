Feature('HomePage');

Scenario('사용자는 서비스의 타이틀을 볼 수 있습니다.', ({ I }) => {
  I.amOnPage('/');
  I.see('당신만의 등산로를 찾아드립니다!');
});

Scenario('사용자는 시작 버튼을 누를 수 있습니다. ', ({ I }) => {
  I.amOnPage('/');
  I.click('Start');
});
