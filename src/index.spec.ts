import { evaluate, VALUE_EXPRESSIONS } from '@orioro/expression'
import { STRING_IS_EXPRESSIONS } from './'
import * as PUBLIC_API from './'
import * as crypto from 'crypto'

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
    default:
      return arg + ''
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

test('public api', () => {
  expect(Object.keys(PUBLIC_API)).toMatchSnapshot()
  expect(Object.keys(STRING_IS_EXPRESSIONS)).toMatchSnapshot()
})

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

describe('$stringIsBase32', () => {
  _expTests('$stringIsBase32', [
    ['Test string', false],
    ['KRSXG5BAON2HE2LOM4======', true],
  ])
})

describe('$stringIsBase58', () => {
  _expTests('$stringIsBase58', [
    ['Test string', false],
    ['MvqLnZUGUgNbDx2', true],
  ])
})

describe('$stringIsBase64', () => {
  _expTests('$stringIsBase64', [
    ['Test string', false],
    ['VGVzdCBzdHJpbmc=', true],
    ['VGVzdCBzdHJpbmc', false],
    ['VGVzdCBzdHJpbmc', { urlSafe: true }, true],
  ])
})

describe('$stringIsBIC', () => {
  _expTests('$stringIsBIC', [
    ['Test str', false],
    ['SMCOGB2LXXX', true],
  ])
})

describe('$stringIsCreditCard', () => {
  _expTests('$stringIsCreditCard', [
    ['Test str', false],
    ['5546 2443 0914 0972', true], // MasterCard
    ['4539 4517 8759 9247', true], // Visa 16 Dígitos
    ['3474 863860 03894', true], // American Express
    ['3011 907919 0262', true], // Diners Club
    ['6011 9814 2000 0460', true], // Discover
    // ['2149 6895915 9013', true],   // enRoute
    ['3518 1412 7939 5710', true], // JCB
    // ['86994 3134 86608 7', true],  // Voyager
    // ['6062 8235 6363 4002', true], // HiperCard
    // ['5041 0245 1784 3215', true], // Aura
  ])
})

describe('$stringIsDataURI', () => {
  _expTests('$stringIsDataURI', [
    ['Test str', false],
    [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      true,
    ],
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

describe('$stringIsFQDN', () => {
  _expTests('$stringIsFQDN', [
    ['Test str', false],
    ['www.example.com', true],
    ['example.com', true],
  ])
})

describe('$stringIsHash', () => {
  const str = 'The quick brown fox jumps over the lazy dog'
  _expTests('$stringIsHash', [
    [str, { algorithm: 'sha1' }, false],
    [
      crypto.createHash('sha1').update(str).digest('hex'),
      { algorithm: 'sha1' },
      true,
    ],
  ])
})

describe('$stringIsHexadecimal', () => {
  _expTests('$stringIsHexadecimal', [
    ['Test str', false],
    [Buffer.from('hello world', 'utf8').toString('hex'), true],
  ])
})

describe('$stringIsIBAN', () => {
  // https://www.iban.com/iban-checker
  _expTests('$stringIsIBAN', [
    ['Test str', false],
    ['GB33BUKB20201555555555', true],
    ['DE75512108001245126199', true],
    ['FR7630006000011234567890189', true],
  ])
})

describe('$stringIsIMEI', () => {
  // https://dyrk.org/tools/imei/
  // https://www.fakepersongenerator.com/imei-generator
  _expTests('$stringIsIMEI', [
    ['Test str', false],
    ['012560798835962', true],
    ['351755051580920', true],
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

describe('$stringIsISBN', () => {
  // https://barcode.tec-it.com/en/ISBN13
  _expTests('$stringIsISBN', [
    ['Test str', false],
    ['9781234567897', true],
    ['978-3-16-148410-0', true],
  ])
})

describe('$stringIsISIN', () => {
  // https://github.com/thomaschaplin/isin-generator
  _expTests('$stringIsISIN', [
    ['Test str', false],
    ['US112091HZ96', true],
  ])
})

describe('$stringIsISO31661Alpha2', () => {
  _expTests('$stringIsISO31661Alpha2', [
    ['Test str', false],
    ['BRA', false],
    ['BR', true],
  ])
})

describe('$stringIsISO31661Alpha3', () => {
  _expTests('$stringIsISO31661Alpha3', [
    ['Test str', false],
    ['BRA', true],
    ['BR', false],
  ])
})

describe('$stringIsISRC', () => {
  _expTests('$stringIsISRC', [
    ['Test str', false],
    ['USRC17607839', true],
  ])
})

describe('$stringIsISSN', () => {
  _expTests('$stringIsISSN', [
    ['Test str', false],
    // https://en.wikipedia.org/wiki/International_Standard_Serial_Number
    ['2049-3630', true],
  ])
})

describe('$stringIsJWT', () => {
  _expTests('$stringIsJWT', [
    ['Test str', false],
    [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      true,
    ],
  ])
})

describe('$stringIsLowercase', () => {
  _expTests('$stringIsLowercase', [
    ['Test str', false],
    ['test str', true],
  ])
})

describe('$stringIsMACAddress', () => {
  _expTests('$stringIsMACAddress', [
    ['Test str', false],
    // ['9A87F4F91BD9', true],
    ['6C-DB-08-AD-CA-C3', true],
    ['27:67:CC:90:D7:47', true],
    ['48A3.68DC.8AD1', true],
  ])
})

describe('$stringIsMagnetURI', () => {
  _expTests('$stringIsMagnetURI', [
    ['Test str', false],
    [
      'magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
      true,
    ],
  ])
})

describe('$stringIsMimeType', () => {
  _expTests('$stringIsMimeType', [
    ['Test str', false],
    ['application/octet-stream', true],
  ])
})

describe('$stringIsNumeric', () => {
  _expTests('$stringIsNumeric', [
    ['Test str', false],
    ['1', true],
    ['10', true],
    ['10.01', true],
  ])
})

describe('$stringIsUppercase', () => {
  _expTests('$stringIsUppercase', [
    ['Test str', false],
    ['TEST STR', true],
  ])
})

describe('$stringIsStrongPassword', () => {
  _expTests('$stringIsStrongPassword', [
    ['Test str', false],
    ['aB$45678', true],
    ['12345678', false],
    [
      '12345678',
      {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      },
      true,
    ],
  ])
})

describe('$stringIsURL', () => {
  _expTests('$stringIsURL', [
    ['Test str', false],
    ['www.example.com', true],
    ['www.example.com', { requireProtocol: true }, false],
    ['https://www.example.com', { requireProtocol: true }, true],
    ['https://www.example.com', true],
  ])
})

describe('$stringIsUUID', () => {
  _expTests('$stringIsUUID', [
    ['Test str', false],
    ['123e4567-e89b-12d3-a456-426614174000', true],
  ])
})
