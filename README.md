# 원티드 프리온보딩 인턴쉽 프론트엔드 과정 1주차 과제

---

원티드 프리온보딩 프론트엔드 인턴쉽 1주차 과제입니다. [가이드라인](https://github.com/walking-sunset/selection-task)과 강의 자료 중 과제 피드백을 준수하였습니다.

## 설치 및 실행

---

### 설치

`npm run install`

### 실행

`npm run start`

## 배포

---

🔗 : **[https://main--effortless-chaja-a46f94.netlify.app](https://main--effortless-chaja-a46f94.netlify.app/signin)**

```markdown
id : redpepper@naver.com
pw : 12345678
```

## 🤲 협업툴

---

- Github
- Discord
- Notion

## 📝 과제 목적

---

- Best practice 만들어 제출하기
- 동료 학습 및 협업 경험하기

## ✏️ 기술 스택

---

- React
- Javascript
- axios
- react-router-dom
- tailwind
- netlify

## 👉 과제 진행 방식

---

- 개발 전 기능별 bestpractice 공통 기준을 세운 후에 팀원 개개인이 구현하고, 구체화 시켰습니다.
- 기능 구현 후 브랜치에 Pull Request를 날린 후, 코드 리뷰를 통해 최고의 bestpractice를 채택했습니다.
- 서로의 코드를 리뷰하고 그 중에서 Best Practice를 결정한 다음 보완할 점을 의논하고, 리팩토링을 진행했습니다.
    
    

## 🎳 기능 구현 목록

---

- 회원가입 기능
- 로그인 기능
- todolist 페이지에 대한 사용자 접근권한 처리
- toDo 조회/ 추가 / 변경 / 삭제

## ✅ Best Practice 선정

---

### Best Practice 정의

1. 가독성 좋은 코드 & 문서
    - 너무 길지 않고 뜻이 명확한 변수/함수명
    - 띄어쓰기가 규칙에 맞게 잘 짜여진 통일성 있는 코드
    - 관심사의 분리가 잘 이뤄진 코드
    - 커밋 메시지만으로 버전의 변화를 파악할 수 있는 히스토리
2. 성능이 좋은 코드 
    - 컴포넌트 재사용을 통한 성능 개선
    - 유틸 함수 사용을 통한 반복 코드 제거
3. 확장 가능성이 있는 코드 
    - 추후에 유지보수하기 용이한 코드
4. 사용자 관점에서 사용성이 좋은 코드 
    - 에러메시지 안내

## 1. 가독성 좋은 코드 & 문서

---

### 코딩 컨벤션

> formatter와 linter 설정을 통해 통일성 있는 코드를 작성
> 
- Eslint
    - airbnb 규칙을 사용하였으며, 회의를 통해서 규칙을 수정
- Prettier
    - 팀에서 결정한 코드 포맷 옵션으로 저장 시 자동으로 포맷
 - Husky
    - 커밋 전에는 포맷을, 푸쉬 전에는 린팅을 강제하는 설정
    
    ```bash
    #pre-commit
    npx lint-staged
    ```
    
    ```bash
    #pre-commit
    npm run lint
    ```
    

### 커밋 컨벤션

> 다음과 같은 기준에 따라 말머리를 붙이고, oneline commit message를 작성하는 것을 컨벤션으로 정함.
> 

```tsx
- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.
```

### 절대 경로 설정

- src 폴더를 절대 경로로 설정해서 간결한 import 경로 설정 가능

### API 관련 파일 분리

**api 사용에 필요한 파일들을 api 폴더에 별도로 분리**

`auth.js`

- 인증인가에 필요한 api 요청 함수들을 정리.
- 함수들을 객체로 담은 `authApi`를 `default`로 `export`.
- 추후 확장가능성을 고려한 구조.

`axiosInstance.js`

```jsx
import axios from 'axios';
import { BASE_URL } from 'constant/config';
import { getUserTokenInLocalStorage } from 'utils/localTokenUtils';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosAuthInstance.interceptors.request.use(
  config => {
    const token = getUserTokenInLocalStorage();
    const configCopy = { ...config };
    configCopy.headers = { ...config.headers };
    configCopy.headers.Authorization = `Bearer ${token}`;
    return configCopy;
  },
  error => Promise.reject(error),
);
```

- api를 활용하는 함수를 사용하기 위한 전처리 과정.
- 공통적으로 요청 시 사용하는 헤더부분을 `axios.create`으로 지정.
- axios의 `interceptors` 메서드를 통해 `access_token`이 필요한 경우의 api 설정을 처리.

`constant/config.js`

- axios의 baseURL이 되는 주소는 상수로서, constant 폴더 내 `BASE_URL`로 별도 분리 보관.

### globalStyle 파일을 통한 일관된 스타일링 적용

`globalStyle` 파일을 통해 긴 클래스명을 객체 요소에 담았습니다. 이로 인해 코드의 가독성이 향상되었으며, 유지보수가 용이해졌습니다. 또한, 일관된 스타일링을 적용할 수 있게 되어 프로젝트의 전체적인 디자인 일관성을 유지할 수 있습니다.

**globalStyle.js**

```jsx
const globalStyle = {
  inputStyle:
    'py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent',
  buttonStyle:
    'border p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300',
};
export default globalStyle;`
```

```jsx
**Input.jsx**

<input
// ...
className={`${globalStyle.inputStyle}${		disabled ? 'bg-gray-100' : 'bg-white' } ${className}`}
/>
```

## 2. 성능이 좋은 코드 & 확장 가능성이 있는 코드

---

### 자주 사용하는 함수를 커스텀 훅을 활용해서 분리 및 재사용

`useInput.js`

```jsx
const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const setValue = useCallback((name, value) => {
    setForm(form => ({ ...form, [name]: value }));
  }, []);
```

`useInputValidation.js`

```jsx
import { useState } from 'react';

const useInputValidation = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    isSuccess: false,
    errorMessage: '',
  });

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validationFunction(inputValue, setValidation);
  };

  return [value, validation, handleChange];
};
```

`useInputValidation`과 같은 커스텀 훅을 사용하여 상태 관리와 유효성 검사 로직을 분리했습니다. 이로 인해 컴포넌트가 더 깔끔하고 간결해졌으며, 로직이 재사용 가능해졌습니다.

**SignIn.jsx**

```jsx
// ...

	function SignUp() {
	  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation('', validationEmail);
	  const [password, isPasswordSuccess, handleChangePassword] = useInputValidation('', validationPassword);

  // ...
}
```

### Router

- 파일을 모듈화 해서 관리
- router 객체 내부에서 토큰을 검사하는 component 사용

### 유틸리티 함수 활용

**유효성 검증함수**

- 정규식을 통한 검증과 String 내장 함수 중에서 추후 확장 가능성을 고려하여 정규식을 통한 검증을 채택
- 문자열 검증 검증에 대한 확장, 변화에 대한 유연한 대처가 가능.

**로컬스토리지 토큰저장**

- 토큰을 로컬에 저장할 때, 토큰명을 각각 써넣게 되면 휴먼 에러가 발생할 가능성이 있음.
- 차후에 수정이 필요하면 `localTokenUtils.js` 파일만 변경하면 되도록 코드 분리.

```jsx
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

## 3. 사용자 관점에서 좋은 사용자 경험을 제공하는 코드

---

### **빠른 사용자 피드백**

- 유효성 검사를 입력 과정에서 실시함으로써 사용자가 올바른 형식의 값을 입력하는지 바로 확인할 수 있음. 이를 통해 사용자가 어떤 값이 잘못되었는지 즉시 알 수 있어, 편리한 사용자 경험을 제공.

![https://user-images.githubusercontent.com/97998938/234895262-00a43111-ac3e-4ac5-8362-4bfa356e2bee.png](https://user-images.githubusercontent.com/97998938/234895262-00a43111-ac3e-4ac5-8362-4bfa356e2bee.png)

## 📙 파일 구조

---

```jsx
📦src
 ┣ 📂api
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂HOC
 ┃ ┃ ┗ 📂auth
 ┃ ┣ 📂input
 ┃ ┣ 📂todo
 ┣ 📂constant
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂NotFound
 ┃ ┣ 📂SignIn
 ┃ ┣ 📂SignUp
 ┃ ┗ 📂Todo
 ┣ 📂router
 ┗ 📂utils
```
