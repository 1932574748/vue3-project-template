// eslint配置，用于校验代码
module.exports = {
    // env指定环境 支持的环境: browser node commonjs es6 es2016~es2022...
    // 环境很多，详情查看文档https://zh-hans.eslint.org/docs/latest/use/configure/language-options
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    // 使用插件配置
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    // "overrides": [
    //     {
    //         "env": {
    //             "node": true
    //         },
    //         "files": [
    //             ".eslintrc.{js,cjs}"
    //         ],
    //         "parserOptions": {
    //             "sourceType": "script"
    //         }
    //     }
    // ],
    // 配置支持的js语言选项
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
    // eslint第三方插件配置
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    // eslint规则配置，还有很多规则配置项，在官网查看 https://eslint.org/docs/latest/rules/
    "rules": {
        '@typescript-eslint/no-var-requires': 0, //解决报错：Require statement not part of import statement.
        'vue/multi-word-component-names': 'off', //关闭组件命名规则校验
        // => 前后有空格
        "arrow-spacing": [
            2,
            {
                before: true,
                after: true,
            },
        ],
        "block-spacing": [2, "always"],
        // 对象字面量项尾是否有逗号
        "comma-dangle": [2, "always-multiline"],
    }
}
