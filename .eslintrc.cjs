
const path = require('path')

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "ecmaFeatures": {
            jsx: true
        }
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "settings": {
        'import/resolver': {
            typescript: {
                project: path.resolve(__dirname, './tsconfig.json')
            }
        }
    },
    "rules": {
        'vue/multi-word-component-names': 0,
        'no-undef': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0
    }
}
