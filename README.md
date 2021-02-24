# expressionStringValidate

```
npm install @orioro/expression-string-validate
yarn add @orioro/expression-string-validate
```

# Design decisions

## Not all methods from validator.js are supported

Validator.js has some methods that accept RegExps, thus we've opted for manually
checking each of its methods and write corresponding bindings to avoid exposing
any access to RegExps.

This library is intended for usage with end-user provided input, thus should not
expose any RegExp constructors.

Methods are also selected according to usage in most common scenarios and the
complexity of their options (the more complex the more delayed their integration).

# API Docs
