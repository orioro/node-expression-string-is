import { VALUE_EXPRESSIONS } from '@orioro/expression'
import { STRING_IS_EXPRESSIONS } from './'
import * as PUBLIC_API from './'
import * as crypto from 'crypto'
import { prepareEvaluateTestCases } from '@orioro/jest-util-expression'

const testAllCases = prepareEvaluateTestCases({
  ...VALUE_EXPRESSIONS,
  ...STRING_IS_EXPRESSIONS,
})

test('public api', () => {
  expect(Object.keys(PUBLIC_API)).toMatchSnapshot()
  expect(Object.keys(STRING_IS_EXPRESSIONS)).toMatchSnapshot()
})

describe('$stringIsAlpha', () => {
  testAllCases([
    ['Abcd', ['$stringIsAlpha'], true],
    ['123d', ['$stringIsAlpha'], false],
    ['Abc d e f g', ['$stringIsAlpha'], false],
    ['Abc d e f g', ['$stringIsAlpha', { ignore: ' ' }], true],
  ])
})

describe('$stringIsAlphanumeric', () => {
  testAllCases([
    ['Abcd', ['$stringIsAlphanumeric'], true],
    ['123d', ['$stringIsAlphanumeric'], true],
    ['Abc d e f g', ['$stringIsAlphanumeric'], false],
  ])
})

describe('$stringIsAscii', () => {
  testAllCases([
    ['Abcd(<>-+{', ['$stringIsAscii'], true],
    ['123d', ['$stringIsAscii'], true],
    ['Ãbaqw', ['$stringIsAscii'], false],
  ])
})

describe('$stringIsBase32', () => {
  testAllCases([
    ['Test string', ['$stringIsBase32'], false],
    ['KRSXG5BAON2HE2LOM4======', ['$stringIsBase32'], true],
  ])
})

describe('$stringIsBase58', () => {
  testAllCases([
    ['Test string', ['$stringIsBase58'], false],
    ['MvqLnZUGUgNbDx2', ['$stringIsBase58'], true],
  ])
})

describe('$stringIsBase64', () => {
  testAllCases([
    ['Test string', ['$stringIsBase64'], false],
    ['VGVzdCBzdHJpbmc=', ['$stringIsBase64'], true],
    ['VGVzdCBzdHJpbmc', ['$stringIsBase64'], false],
    ['VGVzdCBzdHJpbmc', ['$stringIsBase64', { urlSafe: true }], true],
  ])
})

describe('$stringIsBIC', () => {
  testAllCases([
    ['Test str', ['$stringIsBIC'], false],
    ['SMCOGB2LXXX', ['$stringIsBIC'], true],
  ])
})

describe('$stringIsCreditCard', () => {
  testAllCases([
    ['Test str', ['$stringIsCreditCard'], false],
    ['5546 2443 0914 0972', ['$stringIsCreditCard'], true], // MasterCard
    ['4539 4517 8759 9247', ['$stringIsCreditCard'], true], // Visa 16 Dígitos
    ['3474 863860 03894', ['$stringIsCreditCard'], true], // American Express
    ['3011 907919 0262', ['$stringIsCreditCard'], true], // Diners Club
    ['6011 9814 2000 0460', ['$stringIsCreditCard'], true], // Discover
    // ['2149 6895915 9013', ['$stringIsCreditCard'], true],   // enRoute
    ['3518 1412 7939 5710', ['$stringIsCreditCard'], true], // JCB
    // ['86994 3134 86608 7', ['$stringIsCreditCard'], true],  // Voyager
    // ['6062 8235 6363 4002', ['$stringIsCreditCard'], true], // HiperCard
    // ['5041 0245 1784 3215', ['$stringIsCreditCard'], true], // Aura
  ])
})

describe('$stringIsDataURI', () => {
  testAllCases([
    ['Test str', ['$stringIsDataURI'], false],
    [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      ['$stringIsDataURI'],
      true,
    ],
  ])
})

describe('$stringIsEmail', () => {
  testAllCases([
    ['joao@exemplo.com.br', ['$stringIsEmail', undefined], true],
    ['definitely-not-an-email', ['$stringIsEmail', undefined], false],

    ['joao@0.0.0.0', ['$stringIsEmail', undefined], false],
    ['joao@0.0.0.0', ['$stringIsEmail', { allowIPDomain: true }], true],
    ['João <joao@exemplo.com.br>', ['$stringIsEmail', undefined], false],
    [
      'João <joao@exemplo.com.br>',
      ['$stringIsEmail', { allowDisplayName: true }],
      true,
    ],
    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { allowDisplayName: true }],
      true,
    ],
    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { blacklistedChars: 'o' }],
      false,
    ],
    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { blacklistedChars: '+' }],
      true,
    ],

    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { allowDisplayName: new RegExp('/regexp_inject/') }],
      TypeError,
    ],
    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { blacklistedChars: new RegExp('/regexp_inject/') }],
      TypeError,
    ],
    [
      'joao@exemplo.com.br',
      ['$stringIsEmail', { unknownOpt: 'abc' }],
      TypeError,
    ],
  ])
})

describe('$stringIsFQDN', () => {
  testAllCases([
    ['Test str', ['$stringIsFQDN'], false],
    ['www.example.com', ['$stringIsFQDN'], true],
    ['example.com', ['$stringIsFQDN'], true],
  ])
})

describe('$stringIsHash', () => {
  const str = 'The quick brown fox jumps over the lazy dog'

  testAllCases([
    [str, ['$stringIsHash', { algorithm: 'sha1' }], false],
    [
      crypto.createHash('sha1').update(str).digest('hex'),
      ['$stringIsHash', { algorithm: 'sha1' }],
      true,
    ],
  ])
})

describe('$stringIsHexadecimal', () => {
  testAllCases([
    ['Test str', ['$stringIsHexadecimal'], false],
    [
      Buffer.from('hello world', 'utf8').toString('hex'),
      ['$stringIsHexadecimal'],
      true,
    ],
  ])
})

describe('$stringIsIBAN', () => {
  // https://www.iban.com/iban-checker
  testAllCases([
    ['Test str', ['$stringIsIBAN'], false],
    ['GB33BUKB20201555555555', ['$stringIsIBAN'], true],
    ['DE75512108001245126199', ['$stringIsIBAN'], true],
    ['FR7630006000011234567890189', ['$stringIsIBAN'], true],
  ])
})

describe('$stringIsIMEI', () => {
  // https://dyrk.org/tools/imei/
  // https://www.fakepersongenerator.com/imei-generator
  testAllCases([
    ['Test str', ['$stringIsIMEI'], false],
    ['012560798835962', ['$stringIsIMEI'], true],
    ['351755051580920', ['$stringIsIMEI'], true],
  ])
})

describe('$stringIsIP', () => {
  testAllCases([
    ['0.0.0.0', ['$stringIsIP'], true],
    ['1.1.1', ['$stringIsIP'], false],
    ['2001:0db8:85a3:0000:0000:8a2e:0370:7334', ['$stringIsIP'], true],
    [
      '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
      ['$stringIsIP', { version: '4' }],
      false,
    ],
    [
      '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
      ['$stringIsIP', { version: '6' }],
      true,
    ],
    ['0.0.0.0', ['$stringIsIP', { version: '6' }], false],
    ['0.0.0.0', ['$stringIsIP', { unknownOpt: 10 }], TypeError],
  ])
})

describe('$stringIsISBN', () => {
  // https://barcode.tec-it.com/en/ISBN13
  testAllCases([
    ['Test str', ['$stringIsISBN'], false],
    ['9781234567897', ['$stringIsISBN'], true],
    ['978-3-16-148410-0', ['$stringIsISBN'], true],
  ])
})

describe('$stringIsISIN', () => {
  // https://github.com/thomaschaplin/isin-generator
  testAllCases([
    ['Test str', ['$stringIsISIN'], false],
    ['US112091HZ96', ['$stringIsISIN'], true],
  ])
})

describe('$stringIsISO31661Alpha2', () => {
  testAllCases([
    ['Test str', ['$stringIsISO31661Alpha2'], false],
    ['BRA', ['$stringIsISO31661Alpha2'], false],
    ['BR', ['$stringIsISO31661Alpha2'], true],
  ])
})

describe('$stringIsISO31661Alpha3', () => {
  testAllCases([
    ['Test str', ['$stringIsISO31661Alpha3'], false],
    ['BRA', ['$stringIsISO31661Alpha3'], true],
    ['BR', ['$stringIsISO31661Alpha3'], false],
  ])
})

describe('$stringIsISRC', () => {
  testAllCases([
    ['Test str', ['$stringIsISRC'], false],
    ['USRC17607839', ['$stringIsISRC'], true],
  ])
})

describe('$stringIsISSN', () => {
  testAllCases([
    ['Test str', ['$stringIsISSN'], false],
    // https://en.wikipedia.org/wiki/International_Standard_Serial_Number
    ['2049-3630', ['$stringIsISSN'], true],
  ])
})

describe('$stringIsJWT', () => {
  testAllCases([
    ['Test str', ['$stringIsJWT'], false],
    [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      ['$stringIsJWT'],
      true,
    ],
  ])
})

describe('$stringIsLowercase', () => {
  testAllCases([
    ['Test str', ['$stringIsLowercase'], false],
    ['test str', ['$stringIsLowercase'], true],
  ])
})

describe('$stringIsMACAddress', () => {
  testAllCases([
    ['Test str', ['$stringIsMACAddress'], false],
    // ['9A87F4F91BD9', ['$stringIsMACAddress'], true],
    ['6C-DB-08-AD-CA-C3', ['$stringIsMACAddress'], true],
    ['27:67:CC:90:D7:47', ['$stringIsMACAddress'], true],
    ['48A3.68DC.8AD1', ['$stringIsMACAddress'], true],
  ])
})

describe('$stringIsMagnetURI', () => {
  testAllCases([
    ['Test str', ['$stringIsMagnetURI'], false],
    [
      'magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
      ['$stringIsMagnetURI'],
      true,
    ],
  ])
})

describe('$stringIsMimeType', () => {
  testAllCases([
    ['Test str', ['$stringIsMimeType'], false],
    ['application/octet-stream', ['$stringIsMimeType'], true],
  ])
})

describe('$stringIsNumeric', () => {
  testAllCases([
    ['Test str', ['$stringIsNumeric'], false],
    ['1', ['$stringIsNumeric'], true],
    ['10', ['$stringIsNumeric'], true],
    ['10.01', ['$stringIsNumeric'], true],
  ])
})

describe('$stringIsUppercase', () => {
  testAllCases([
    ['Test str', ['$stringIsUppercase'], false],
    ['TEST STR', ['$stringIsUppercase'], true],
  ])
})

describe('$stringIsStrongPassword', () => {
  testAllCases([
    ['Test str', ['$stringIsStrongPassword'], false],
    ['aB$45678', ['$stringIsStrongPassword'], true],
    ['12345678', ['$stringIsStrongPassword'], false],
    [
      '12345678',
      [
        '$stringIsStrongPassword',
        {
          minLength: 8,
          minLowercase: 0,
          minUppercase: 0,
          minNumbers: 1,
          minSymbols: 0,
        },
      ],
      true,
    ],
  ])
})

describe('$stringIsURL', () => {
  testAllCases([
    ['Test str', ['$stringIsURL'], false],
    ['www.example.com', ['$stringIsURL'], true],
    ['www.example.com', ['$stringIsURL', { requireProtocol: true }], false],
    [
      'https://www.example.com',
      ['$stringIsURL', { requireProtocol: true }],
      true,
    ],
    ['https://www.example.com', ['$stringIsURL'], true],
  ])
})

describe('$stringIsUUID', () => {
  testAllCases([
    ['Test str', ['$stringIsUUID'], false],
    ['123e4567-e89b-12d3-a456-426614174000', ['$stringIsUUID'], true],
  ])
})
