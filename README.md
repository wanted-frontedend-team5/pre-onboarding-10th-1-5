# 원티프 프리온보딩 인턴쉽 1주차 과제 5팀

[원티드 프리온보딩 프론트엔드 인턴쉽]([https://www.wanted.co.kr/events/pre_ob_fe_9?utm_source=email&utm_medium=braze_mkt&utm_campaign=learning_pre_ob_fe_9](https://www.wanted.co.kr/events/pre_ob_fe_10)) 1주차 과제입니다. [가이드라인](https://github.com/walking-sunset/selection-task)과 강의 자료 중 과제 피드백을 준수하였습니다.

## Install
```
npm install
```
## Start
```
npm start
```

### API

**api 사용에 필요한 파일들을 api 폴더에 별도로 분리**

auth.js
- 인증인가에 필요한 api 요청 함수들을 정리.
- 함수들을 객체로 담은 authApi를 default로 export.
- 추후 확장가능성을 고려한 구조.

axiosInstance.js 
- api를 활용하는 함수를 사용하기 위한 전처리 과정.
- 공통적으로 요청 시 사용하는 헤더부분을 axios.create으로 지정.
- axios의 interceptors 메서드를 통해 access_token이 필요한 경우의 api 설정을 처리.

constant/config.js
- axios의 baseURL이 되는 주소는 상수로서, constant 폴더 내 BASE_URL로 별도 분리 보관.

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
