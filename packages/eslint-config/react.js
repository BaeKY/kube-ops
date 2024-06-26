module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['@tbf/eslint-config'],
    rules: {
        'react/no-danger': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off'
    }
}
