// I've made a few minor changes from the original boilerplate on
https://www.npmjs.com/package/react-native-template-typescript-jest

# React Native with TypeScript

Included in the template:

* [TypeScript][typescript] support

* [ts-jest][ts-jest] support

* Initializes empty Git repository with hooks from [husky][husky]

  * `postmerge`: Will update dependencies based on `yarn.lock`

  * `precommit`: Lints, type checks and runs tests on project

## Use the Template

```sh
react-native init AwesomeTSProject --template typescript-jest --skip-jest
```

Run as usual!

[typescript]: https://github.com/Microsoft/TypeScript
[ts-jest]: https://github.com/kulshekhar/ts-jest
[husky]: https://github.com/typicode/husky
