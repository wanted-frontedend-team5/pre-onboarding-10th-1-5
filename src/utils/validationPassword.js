const validationPassword = (value, setIsPasswordSuccess) => {
  if (value.length === 0) {
    setIsPasswordSuccess({
      isSuccess: false,
      errorMessage: '필수 정보입니다.',
    });
  } else if (value.length >= 8) {
    setIsPasswordSuccess({ isSuccess: true, errorMessage: '' });
  } else {
    setIsPasswordSuccess({
      isSuccess: false,
      errorMessage: '8자 이상으로 작성해주세요.',
    });
  }
};

export default validationPassword;
