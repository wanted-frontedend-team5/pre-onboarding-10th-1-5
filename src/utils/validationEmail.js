const emailRegex = /.*@.*/;

const validateEmail = email => emailRegex.test(email);

const validationEmail = (value, setIsEmailSuccess) => {
  if (value.length === 0) {
    setIsEmailSuccess({
      isSuccess: false,
      errorMessage: '필수 정보입니다.',
    });
  } else if (validateEmail(value)) {
    setIsEmailSuccess({ isSuccess: true, errorMessage: '' });
  } else {
    setIsEmailSuccess({
      isSuccess: false,
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    });
  }
};

export default validationEmail;
