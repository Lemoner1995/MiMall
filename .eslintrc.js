module.exports = {
  root: true,
  env: {
    es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
    node: true, // Node.js 全局变量和 Node.js 作用域
    browser: true, // 浏览器全局变量
    jquery: true, // jQuery 全局变量
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "camelcase": ["error", { "allow": ["aa_bb"] }],
    "no-param-reassign": [2, { props: false }],
    // indent: [2, 4], // 强制使用一致的缩进
    eqeqeq: [2, 'always'], // 要求使用 === 和 !==
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
    quotes: [2, 'single'], // 强制使用一致的反勾号、双引号或单引号
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ]
  }
}
