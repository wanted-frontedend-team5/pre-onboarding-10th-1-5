# pre-onboarding-10th-1-5

인턴쉽 1주차 과제

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
```
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
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/todo");
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

  const handleChange = (e) => {
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
	  const [email, isEmailSuccess, handleChangeEmail] = useInputValidation('', validationEmail);
	  const [password, isPasswordSuccess, handleChangePassword] = useInputValidation('', validationPassword);

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
