module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // 禁用语法规则，使用eslint检测代码时，忽略方法后不加空格问题
    'space-before-function-paren': 0,
    //禁止console报错检查
    'no-console':'off',
    // 禁止空格报错检查
    'no-irregular-whitespace':'off'
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
