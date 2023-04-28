# 원티프 프리온보딩 인턴쉽 1주차 과제 5팀

[원티드 프리온보딩 프론트엔드 인턴쉽](<[https://www.wanted.co.kr/events/pre_ob_fe_9?utm_source=email&utm_medium=braze_mkt&utm_campaign=learning_pre_ob_fe_9](https://www.wanted.co.kr/events/pre_ob_fe_10)>) 1주차 과제입니다. [가이드라인](https://github.com/walking-sunset/selection-task)과 강의 자료 중 과제 피드백을 준수하였습니다.

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

# 원티프 프리온보딩 인턴쉽 1주차 과제

[원티드 프리온보딩 프론트엔드 인턴쉽](https://www.wanted.co.kr/events/pre_ob_fe_10) 1주차 과제입니다.
[가이드라인](https://github.com/walking-sunset/selection-task)과 강의 자료 중 과제 피드백을 준수하였습니다.

## 🤲협업 툴

- 디스코드
- notion
- github

## 📝과제 목적

- Best practice 만들어 제출하기
- 동료 학습 및 협업 체계 만들기

## 🔗[배포주소]()

## ⚙️설치 및 실행 가이드

#### Install

```
npm install
```

#### Start

```
npm start
```

## ✨기술 스택

- React
- Javascript
- axios
- react-router-dom
- tailwind

## ✅과제 진행

<ul>
<li>기능을 팀원 개개인이 구현을 먼저 했습니다.</li>
<li>구현 후 진행된 코드를 통해 모여서 토론을 진행하였습니다.</li>
<li>서로의 코드를 리뷰하고 그 중에서 Best Practice를 결정한 다음 보완할 점을 의논 하였습니다.</li>
</ul>
<div>기능 구현 목록</div>
<ul>
<li>Sign In / Sign Up</li>
<li>CRUD - Todo</li>
</ul>

## ✅ Best Practice Process

### Best Practice 정의

가독성 좋은 코드

- 너무 길지 않고 뜻이 명확한 변수/함수명
- 띄어쓰기가 규칙에 맞게 잘 이뤄진 코드
- 관심사의 분리가 잘 이뤄진 코드

성능이 좋은 코드

- 컴포넌트 재사용을 통한 성능 개선
- 유틸 함수 사용을 통한 반복 코드 제거

확장 가능성이 있는 코드

- 추후에 유지보수하기 용이한 코드

사용자 관점에서 사용성이 좋은 코드

- 에러메시지 안내

### 코딩 컨벤션

- Eslint
  - airbnb 규칙을 사용하였으며, 회의를 통해서 규칙을 수정
- Prettier
  - 팀에서 결정한 코드 포맷 옵션으로 저장 시 자동으로 포맷

### 커밋 컨벤션

> 다음과 같은 기준에 따라 말머리를 붙이고, oneline commit message를 작성하는 것을 컨벤션으로 정하였습니다.

- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.

## [경로설정] Best Practice 요소

- src 폴더를 절대 경로로 설정해서 간결한 import 경로 설정 가능

## [Api] Best Practice 요소

**api 사용에 필요한 파일들을 api 폴더에 별도로 분리**

- 인증인가에 필요한 api 요청 함수들을 정리.
- 함수들을 객체로 담은 authApi를 default로 export.
- 추후 확장가능성을 고려한 구조.
  **axiosInstance.js**
- api를 활용하는 함수를 사용하기 위한 전처리 과정.
- 공통적으로 요청 시 사용하는 헤더부분을 axios.create으로 지정.
- axios의 interceptors 메서드를 통해 access_token이 필요한 경우의 api 설정을 처리.

## [auth] Best Practice 요소

- 인증인가에 필요한 api 요청 함수들을 정리.
- 함수들을 객체로 담은 authApi를 default로 export.
- 추후 확장가능성을 고려한 구조.

## [유틸리티 ] Best Practice 요소

검증 : 정규식

- 문자열 검증 검증에 대한 확장, 변화에 대한 유연한 대처가 가능하다.

로컬스토리지 토큰저장

````
`const { localStorage } = window;

const tokenKey = 'accessToken';

export const putUserTokenInLocalStorage = token => {
  localStorage.setItem(tokenKey, token);
};

export const getUserTokenInLocalStorage = () => localStorage.getItem(tokenKey);

`npm install`
`npm start`

## [Router, ProtectedRoute] Best Practice 요소
- React Router v4.6 최신버전을 사용함으로써 추후 클라이언트 측 라우팅과 같은 새로운 기술 도입이 가능합니다.
- protectedRoute를 사용함으로써 인증된 사용자만 특정 경로로 접근할 수 있으며 보안과 관련된 이슈로, 일부 페이지나 기능에 대해 권한이 없는 사용자가 접근을 막아줄 수 있습니다.
- protectedRoute를 컴포넌트로 분리하여 Router.jsx에서 사용함으로써 가독성이 좋습니다.
```jsx
// Router.jsx
 {
    path: '/todo',
    element: (
      <ProtectedRoute>
        <Todo />
      </ProtectedRoute>
    ),
  },
````

```jsx
// protectedRoute.jsx
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
}
```

## [`redirect` 메서드를 통한 성능 향상 useEffect vs redirect] Best Practice 요소

기존 코드는 페이지마다 useEffect를 사용해서 로컬스토리지에 토큰이 있을 때 todo 페이지로 리다이렉트 되도록 작성했습니다.
해당 코드는 아래와 같은 단점이 있습니다.

- 개별 컴포넌트에서 useEffect를 사용하면 해당 컴포넌트가 렌더링되고 난 후에 리다이렉션이 발생하므로 불필요한 렌더링이 발생해서 성능이슈가 발생할 수 있습니다.
- 어느 페이지에서 useEffect를 사용했는지 알 수 없기 때문에 에러핸들링이 어렵고 유지보수성, 가독성 떨어진다는 단점이 있었습니다.

```jsx
// 기존 코드
// SignIn.jsx, SignUp.jsx 중복 코드
useEffect(() => {
  const token = localStorage.getItem('access_token');
  if (token) {
    navigate('/todo');
  }
}, [navigate]);
```

따라서 아래와 같이 react-router v6.4에서 지원하는 로더(Loader)에서 `redirect`를 사용하여 개선하였습니다.

- 로더(Loader)에서 `redirect`를 사용하면 컴포넌트를 렌더링하기 전에 바로 리다이렉트가 수행되므로 불필요한 렌더링을 방지할 수 있습니다.
- 로더에서 `redirect`를 사용함으로써 리다이렉트 로직을 한 곳에 모아서 유지보수가 쉽습니다.

```jsx
// 개선 코드
// Router.jsx
const token = getUserTokenInLocalStorage();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" />,
    errorElement: <NotFound />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    loader: () => {
      if (token) {
        throw redirect('/todo');
      }
      return null;
    },
  },
  {
    path: '/signup',
    element: <SignUp />,
    loader: () => {
      if (token) {
        throw redirect('/todo');
      }
      return null;
    },
  },
  {
    path: '/todo',
    element: (
      <ProtectedRoute>
        <Todo />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
```

## [Form, Style] Best Practice 요소

### **빠른 사용자 피드백**

유효성 검사를 입력 과정에서 실시함으로써 사용자가 올바른 형식의 값을 입력하는지 바로 확인할 수 있습니다. 이를 통해 사용자가 어떤 값이 잘못되었는지 즉시 알 수 있어, 편리한 사용자 경험을 제공합니다.

<img width="475" alt="스크린샷 2023-04-27 오후 7 23 36" src="https://user-images.githubusercontent.com/97998938/234895262-00a43111-ac3e-4ac5-8362-4bfa356e2bee.png">

### **커스텀 훅 사용**

**`useInputValidation`**과 같은 커스텀 훅을 사용하여 상태 관리와 유효성 검사 로직을 분리했습니다. 이로 인해 컴포넌트가 더 깔끔하고 간결해졌으며, 로직이 재사용 가능해졌습니다.

useInputValidation.js

```jsx
import { useState } from 'react';

const useInputValidation = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    isSuccess: false,
    errorMessage: '',
  });

  const handleChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validationFunction(inputValue, setValidation);
  };

  return [value, validation, handleChange];
};
```

SignIn.jsx

```jsx
// ...

function SignUp() {
  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation(
    '',
    validationEmail,
  );
  const [password, isPasswordSuccess, handleChangePassword] =
    useInputValidation('', validationPassword);

  // ...
}
```

### **가독성 좋은 코드**

`globalSytle` 파일을 통해 긴 클래스명을 객체 요소에 담았습니다. 이로 인해 코드의 가독성이 향상되었으며, 유지보수가 용이해졌습니다. 또한, 일관된 스타일링을 적용할 수 있게 되어 프로젝트의 전체적인 디자인 일관성을 유지할 수 있습니다.

globalStyle.js

```jsx
const globalStyle = {
  inputStyle:
    'py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent',
  buttonStyle:
    'border p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300',
};
export default globalStyle;
```

Input.jsx

```jsx
<input
  // ...

  className={`${globalStyle.inputStyle}${
    disabled ? 'bg-gray-100' : 'bg-white'
  } ${className}`}
/>
```

## 🗂️파일 구조

```
public
src
├── api // 서버 함수
│   ├── auth
│   ├── axiosInstance
│   └── todo
├── components // 재사용 컴포넌트
│   ├── HOC
│   ├── Button
│   ├── ErrorMessage
│   └── Input
├── constants // BASE_URL
├── contexts // 전역 state
├── hooks // 커스텀 훅
│
└── pages // 페이지 컴포넌트
    ├── NotFound
    ├── SignIn
    ├── SignUp
    └── Todo
```
