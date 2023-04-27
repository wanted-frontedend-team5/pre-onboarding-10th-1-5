# pre-onboarding-10th-1-5

인턴쉽 1주차 과제

`npm install`
`npm start`
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
