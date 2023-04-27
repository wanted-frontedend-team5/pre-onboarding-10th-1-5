# pre-onboarding-10th-1-5

인턴쉽 1주차 과제

`npm install`
`npm start`
<div>
Best Practice로 향하는 리팩토링
  </div>
  <div>
Best Practice를 만들기 위해 아래와 같이 기준을 세우고 그에 따라 코드를 리팩토링하였습니다.
</div>
관심사의 분리

api 파일 분리
기존 Signup, Signin 컴포넌트 안에 있던 RestAPI 관련 요소들을 별도 파일로 분리하였습니다.

유지보수가 쉬운 코드
각 input 값의 value를 validation과정을 직관적으로 확인할 수 있게 component내에서 작성하였습니다.


사용자 경험을 좋게 만드는 코드
RestAPI 에러핸들링
각 통신의 fulfilled,rejected시의 상태를 try, catch구문을 이용하여 ux적으로 직관적이게 관리하였습니다.
