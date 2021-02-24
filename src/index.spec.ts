import { evaluate, VALUE_EXPRESSIONS } from '@orioro/expression'
import { STRING_IS_EXPRESSIONS } from './'

const interpreters = {
  ...VALUE_EXPRESSIONS,
  ...STRING_IS_EXPRESSIONS,
}

const _tests = (cases, fn, label) => {
  cases.forEach((case_) => {
    const result = case_[case_.length - 1]
    const args = case_.slice(0, case_.length - 1)

    if (
      result === Error ||
      Object.prototype.isPrototypeOf.call(Error, result) || // see https://eslint.org/docs/rules/no-prototype-builtins
      result instanceof Error
    ) {
      // eslint-disable-next-line jest/valid-title
      test(label(args, result), () => {
        expect(() => fn(args)).toThrow(result)
      })
    } else {
      // eslint-disable-next-line jest/valid-title
      test(label(args, result), () => expect(fn(args)).toEqual(result))
    }
  })
}

const _objectLabel = (obj) =>
  Object.keys(obj).reduce(
    (acc, key) =>
      acc
        ? `${acc}, ${key}: ${_argLabel(obj[key])}`
        : `${key}: ${_argLabel(obj[key])}`,
    null
  )

const _argLabel = (arg) => {
  switch (typeof arg) {
    case 'string':
      return `'${arg}'`
    case 'object':
      return _objectLabel(arg)
  }
}

const _expressionLabel = (expression, args, result) =>
  `${expression}(${args.map(_argLabel).join(', ')}) -> ${result}`

const _expTests = (exp, cases) =>
  _tests(
    cases,
    ([input, ...args]) =>
      evaluate(
        {
          interpreters,
          scope: { $$VALUE: input },
        },
        [exp, ...args]
      ),
    (args, result) => _expressionLabel(exp, args, result)
  )

describe('$stringIsAlpha', () => {
  _expTests('$stringIsAlpha', [
    ['Abcd', true],
    ['123d', false],
    ['Abc d e f g', false],
    ['Abc d e f g', { ignore: ' ' }, true],
  ])
})

describe('$stringIsAlphanumeric', () => {
  _expTests('$stringIsAlphanumeric', [
    ['Abcd', true],
    ['123d', true],
    ['Abc d e f g', false],
  ])
})

describe('$stringIsAscii', () => {
  _expTests('$stringIsAscii', [
    ['Abcd(<>-+{', true],
    ['123d', true],
    ['Ãbaqw', false],
  ])
})

describe('$stringIsEmail', () => {
  _expTests('$stringIsEmail', [
    ['joao@exemplo.com.br', undefined, true],
    ['definitely-not-an-email', undefined, false],

    ['joao@0.0.0.0', undefined, false],
    ['joao@0.0.0.0', { allowIPDomain: true }, true],
    ['João <joao@exemplo.com.br>', undefined, false],
    ['João <joao@exemplo.com.br>', { allowDisplayName: true }, true],
    ['joao@exemplo.com.br', { allowDisplayName: true }, true],
    ['joao@exemplo.com.br', { blacklistedChars: 'o' }, false],
    ['joao@exemplo.com.br', { blacklistedChars: '+' }, true],

    [
      'joao@exemplo.com.br',
      { allowDisplayName: new RegExp('/regexp_inject/') },
      TypeError,
    ],
    [
      'joao@exemplo.com.br',
      { blacklistedChars: new RegExp('/regexp_inject/') },
      TypeError,
    ],
    ['joao@exemplo.com.br', { unknownOpt: 'abc' }, TypeError],
  ])
})

describe('$stringIsIP', () => {
  _expTests('$stringIsIP', [
    ['0.0.0.0', true],
    ['1.1.1', false],
    ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', true],
    ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', { version: '4' }, false],
    ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', { version: '6' }, true],
    ['0.0.0.0', { version: '6' }, false],
    ['0.0.0.0', { unknownOpt: 10 }, TypeError],
  ])
})
