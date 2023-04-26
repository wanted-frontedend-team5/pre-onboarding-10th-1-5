module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-use-before-define': 2,
    'react/react-in-jsx-scope': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // 이벤트 처리기가 없는 비 대화형 엘리먼트에서 이벤트 처리기를 허용하는 규칙을 비활성화합니다.
    'jsx-a11y/no-noninteractive-element-interactions': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 0, // ESLint formatting 끔
    //  switch 문에서 default case를 사용하지 않을 때 경고를 끔으로써 default case가 필수적이지 않을 때 규칙을 비활성화합니다.
    'default-case': 2,
    'consistent-return': 0,
    'no-param-reassign': 2,
    'jsx-a11y/label-has-associated-control': 1,
    // 'react/require-default-props': 0,
    //  <abc />
    'react/self-closing-comp': 0, // 자식 컴포넌트 없을 때 닫기 태그
    // airbnb 기본 'no-restricted-syntax'
    // ForInStatement
    // ForOfStatement
    // LabeledStatement
    // WithStatement
    // 'no-restricted-syntax': 0,
    'prefer-destructuring': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
