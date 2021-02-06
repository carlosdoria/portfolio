module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
      'arrow-spacing': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    // 'array-bracket-newline': [ 'error', 'always' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ], // stroustrup
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'computed-property-spacing': [ 'error', 'always' ],
    'default-case-last': 'error',
    'generator-star-spacing': [ 'error', { 'before': true, 'after': true } ],
    'indent': [ 'error', 2, { 'VariableDeclarator': 1 } ], // https://eslint.org/docs/rules/indent
    'keyword-spacing': [ 'error', { 'overrides': {
      'if': { 'after': true },
      'for': { 'after': true },
      'while': { 'after': true }
    } } ],
    'key-spacing': [ 'error', { 'beforeColon': false } ],
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'no-multi-spaces': [ 'error', { 'ignoreEOLComments': false } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'rest-spread-spacing': [ 'error', 'never' ],
    'semi': [ 'error', 'never' ], // https://eslint.org/docs/rules/semi
    'space-infix-ops': [ 'error', { 'int32Hint': false } ],
    'spaced-comment': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    } ],
    'switch-colon-spacing': 'error',
    'valid-typeof': [ 'error', 'never' ],
    }
}
