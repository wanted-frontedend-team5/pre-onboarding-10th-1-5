# pre-onboarding-10th-1-5

인턴쉽 1주차 과제

`npm install`
`npm start`

### 유틸리티

검증 : 정규식 vs ~~String 내장함수~~

- 문자열 검증 검증에 대한 확장, 변화에 대한 유연한 대처가 가능하다.

로컬스토리지 토큰저장

```tsx
const { localStorage } = window;

const tokenKey = 'accessToken';

export const putUserTokenInLocalStorage = token => {
  localStorage.setItem(tokenKey, token);
};

export const getUserTokenInLocalStorage = () => localStorage.getItem(tokenKey);

export const removeUserTokenInLocalStorage = () => {
  localStorage.removeItem(tokenKey);
};
```

- 토큰을 로컬에 저장할 때, 토큰명을 각각 써넣게 되면 개발자의 실수를 유발할 수 있을 가능성이 있다.
- 차후에 수정이 필요하면 `localTokenUtils` 파일만 변경하면 된다.
