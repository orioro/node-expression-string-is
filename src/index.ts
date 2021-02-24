import { interpreter } from '@orioro/expression'

import isAlpha from 'validator/lib/isAlpha'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import isAscii from 'validator/lib/isAscii'
import isBase32 from 'validator/lib/isBase32'
import isBase58 from 'validator/lib/isBase58'
import isBase64 from 'validator/lib/isBase64'
import isBIC from 'validator/lib/isBIC'
import isCreditCard from 'validator/lib/isCreditCard'
import isDataURI from 'validator/lib/isDataURI'
import isEmail from 'validator/lib/isEmail'
import isFQDN from 'validator/lib/isFQDN'
import isHash from 'validator/lib/isHash'
import isHexadecimal from 'validator/lib/isHexadecimal'
import isIBAN from 'validator/lib/isIBAN'
import isIMEI from 'validator/lib/isIMEI'
import isIP from 'validator/lib/isIP'
import isISBN from 'validator/lib/isISBN'
import isISIN from 'validator/lib/isISIN'
import isISO31661Alpha2 from 'validator/lib/isISO31661Alpha2'
import isISO31661Alpha3 from 'validator/lib/isISO31661Alpha3'
import isISRC from 'validator/lib/isISRC'
import isISSN from 'validator/lib/isISSN'
import isJWT from 'validator/lib/isJWT'
import isLowercase from 'validator/lib/isLowercase'
import isMACAddress from 'validator/lib/isMACAddress'
import isMagnetURI from 'validator/lib/isMagnetURI'
import isMimeType from 'validator/lib/isMimeType'
import isNumeric from 'validator/lib/isNumeric'
import isUppercase from 'validator/lib/isUppercase'
import isStrongPassword from 'validator/lib/isStrongPassword'
import isURL from 'validator/lib/isURL'
import isUUID from 'validator/lib/isUUID'

/**
 * https://github.com/validatorjs/validator.js
 * validator@13.5.1
 *
 *
 * ✗ contains(str, seed [, options ]): use comparison expressions
 * ✗ equals(str, comparison): use comparison expressions
 * ✗ isAfter(str [, date]): use date expressions
 * ✓ isAlpha(str [, locale, options])
 * ✓ isAlphanumeric(str [, locale])
 * ✓ isAscii(str)
 * ✓ isBase32(str)
 * ✓ isBase58(str)
 * ✓ isBase64(str [, options])
 * ✗ isBefore(str [, date]): use date expressions
 * ✓ isBIC(str)
 * ✗ isBoolean(str)
 * ✗ isBtcAddress(str)
 * ✗ isByteLength(str [, options])
 * ✓ isCreditCard(str)
 * ✗ isCurrency(str [, options]): Complex RegExp usage; requires further analysis
 * ✓ isDataURI(str)
 * ✗ isDate(input [, options]): use date expressions
 * ✗ isDecimal(str [, options])
 * ✗ isDivisibleBy(str, number): use math expressions
 * ✗ isEAN(str)
 * ✓ isEmail(str [, options])
 * ✗ isEmpty(str [, options]): use comparison expressions
 * ✗ isEthereumAddress(str)
 * ✗ isFloat(str [, options])
 * ✓ isFQDN(str [, options])
 * ✗ isFullWidth(str)
 * ✗ isHalfWidth(str)
 * ✓ isHash(str, algorithm)
 * ✓ isHexadecimal(str)
 * ✗ isHexColor(str): other color-related tests are not included, for consistency,
 *                    drop HexColor as well
 * ✗ isHSL(str): Complex RegExp usage; requires further analysis
 * ✓ isIBAN(str)
 * ✗ isIdentityCard(str [, locale]): Not universal, prefer specific modules by country
 * ✓ isIMEI(str [, options]))
 * ✗ isIn(str, values): use comparison expressions
 * ✗ isInt(str [, options]): use number expressions
 * ✓ isIP(str [, version])
 * ✗ isIPRange(str)
 * ✓ isISBN(str [, version])
 * ✓ isISIN(str)
 * ✗ isISO8601(str): use date expressions
 * ✓ isISO31661Alpha2(str)
 * ✓ isISO31661Alpha3(str)
 * ✓ isISRC(str)
 * ✓ isISSN(str [, options])
 * ✗ isJSON(str [, options])
 * ✓ isJWT(str)
 * ✗ isLatLong(str [, options])
 * ✗ isLength(str [, options])
 * ✗ isLicensePlate(str [, locale]): not universal
 * ✗ isLocale(str)
 * ✓ isLowercase(str)
 * ✓ isMACAddress(str)
 * ✓ isMagnetURI(str)
 * ✗ isMD5(str): use isHash
 * ✓ isMimeType(str)
 * ✗ isMobilePhone(str [, locale [, options]]): Hard to standardize, prefer specific locale code
 * ✗ isMongoId(str)
 * ✗ isMultibyte(str)
 * ✓ isNumeric(str [, options])
 * ✗ isOctal(str): no octals are expected as input
 * ✗ isPassportNumber(str, countryCode): not universal
 * ✗ isPort(str): use math expressions
 * ✗ isPostalCode(str, locale): not universal
 * ✗ isRFC3339(str): use date expressions
 * ✗ isRgbColor(str [, includePercentValues]): RegExp, requires further analysis
 * ✗ isSemVer(str): complex RegExp
 * ✗ isSurrogatePair(str)
 * ✓ isUppercase(str)
 * ✗ isSlug: RegExp, requires further analysis
 * ✓ isStrongPassword(str [, options])
 * ✗ isTaxID(str, locale): not universal
 * ✓ isURL(str [, options])
 * ✓ isUUID(str [, version])
 * ✗ isVariableWidth(str)
 * ✗ isVAT(str, countryCode)
 * ✗ isWhitelisted(str, chars)
 * ✗ matches(str, pattern [, modifiers])
 * ✗ blacklist(input, chars)
 * ✗ escape(input)
 * ✗ ltrim(input [, chars])
 * ✗ normalizeEmail(email [, options])
 * ✗ rtrim(input [, chars])
 * ✗ stripLow(input [, keep_new_lines])
 * ✗ toBoolean(input [, strict])
 * ✗ toDate(input)
 * ✗ toFloat(input)
 * ✗ toInt(input [, radix])
 * ✗ trim(input [, chars])
 * ✗ unescape(input)
 * ✗ whitelist(input, chars)
 */

type PlainObject = { [key: string]: any }

const _transposeObject = (map, obj) =>
  Object.keys(map).reduce(
    (acc, key) => ({
      ...acc,
      [key]: obj[map[key]],
    }),
    {}
  )

const _is = (method, optionsTypeMap?) => {
  return optionsTypeMap
    ? interpreter(
        (options: PlainObject = {}, str: string): boolean =>
          method(str, options),
        [optionsTypeMap, 'string']
      )
    : interpreter((str: string): boolean => method(str), ['string'])
}

/**
 * @todo docs Add expression documentation
 * @function $stringIsAlpha
 * @param {Object} [options={}]
 * @param {String} options.locale
 * @param {String} options.ignore
 * @param {String} str
 */
export const $stringIsAlpha = _is(
  (str: string, { locale, ...options }: PlainObject): boolean =>
    isAlpha(str, locale, options),
  [
    'undefined',
    {
      locale: ['undefined', 'string'],
      ignore: ['undefined', 'string'],
    },
  ]
)

/**
 * @function $stringIsAlphanumeric
 * @param {Object} [options={}]
 * @param {String} options.locale
 * @param {String} str
 */
export const $stringIsAlphanumeric = _is(
  (str: string, { locale }: PlainObject): boolean =>
    isAlphanumeric(str, locale),
  [
    'undefined',
    {
      locale: ['undefined', 'string'],
    },
  ]
)

/**
 * @function $stringIsAscii
 * @param {String} str
 */
export const $stringIsAscii = _is(isAscii)

/**
 * @function $stringIsBase32
 * @param {String} str
 */
export const $stringIsBase32 = _is(isBase32)

/**
 * @function $stringIsBase58
 * @param {String} str
 */
export const $stringIsBase58 = _is(isBase58)

/**
 * @function $stringIsBase64
 * @param {Object} [options={}]
 * @param {Boolean} [options.urlSafe=false]
 * @param {String} str
 */
export const $stringIsBase64 = _is(isBase64, [
  'undefined',
  {
    urlSafe: ['undefined', 'boolean'],
  },
])

/**
 * @function $stringIsBIC
 * @param {String} str
 */
export const $stringIsBIC = _is(isBIC)

/**
 * Supported:
 * - MasterCard
 * - Visa (16 digits)
 * - Diners Club
 * - Discover
 * - JCB
 *
 * @todo $stringIsCreditCard Check support for: enRoute, Voyager, HiperCard and
 *                           Aura (https://www.4devs.com.br/gerador_de_numero_cartao_credito)
 * @function $stringIsCreditCard
 * @param {String} str
 */
export const $stringIsCreditCard = _is(isCreditCard)

/**
 * @function $stringIsDataURI
 * @param {String} str
 */
export const $stringIsDataURI = _is(isDataURI)

/**
 * @function $stringIsEmail
 * @param {Object} [options={}]
 * @param {Boolean} [options.allow_display_name=false]
 * @param {Boolean} [options.require_display_name=false]
 * @param {Boolean} [options.allow_utf8_local_part=false]
 * @param {Boolean} [options.require_tld=false]
 * @param {Boolean} [options.allow_ip_domain=false]
 * @param {Boolean} [options.domain_specific_validation=false]
 * @param {String} str
 */
export const $stringIsEmail = _is(
  (str: string, options: PlainObject) =>
    isEmail(
      str,
      _transposeObject(
        {
          allow_display_name: 'allowDisplayName',
          require_display_name: 'requireDisplayName',
          allow_utf8_local_part: 'allowUTF8LocalPart',
          require_tld: 'requireTLD',
          allow_ip_domain: 'allowIPDomain',
          domain_specific_validation: 'domainSpecificValidation',
          blacklisted_chars: 'blacklistedChars',
        },
        options
      )
    ),
  [
    'undefined',
    {
      allowDisplayName: ['undefined', 'boolean'],
      requireDisplayName: ['undefined', 'boolean'],
      allowUTF8LocalPart: ['undefined', 'boolean'],
      requireTLD: ['undefined', 'boolean'],
      allowIPDomain: ['undefined', 'boolean'],
      domainSpecificValidation: ['undefined', 'boolean'],
      blacklistedChars: ['undefined', 'string'],
    },
  ]
)

/**
 * @todo $stringIsFQDN Standardize options to camelCase
 * @function $stringIsFQDN
 */
export const $stringIsFQDN = _is(isFQDN, [
  'undefined',
  {
    require_tld: ['undefined', 'boolean'],
    allow_underscores: ['undefined', 'boolean'],
    allow_trailing_dot: ['undefined', 'boolean'],
    allow_numeric_tld: ['undefined', 'boolean'],
  },
])

/**
 * @function $stringIsHash
 */
export const $stringIsHash = _is(
  (str: string, { algorithm }: PlainObject) => isHash(str, algorithm),
  { algorithm: 'string' }
)

/**
 * @function $stringIsHexadecimal
 */
export const $stringIsHexadecimal = _is(isHexadecimal)

/**
 * @function $stringIsIBAN
 */
export const $stringIsIBAN = _is(isIBAN)

/**
 * @function $stringIsIMEI
 */
export const $stringIsIMEI = _is(
  (str: string, options: PlainObject) =>
    isIMEI(
      str,
      _transposeObject(
        {
          allow_hyphens: 'allowHyphens',
        },
        options
      )
    ),
  [
    'undefined',
    {
      allowHyphens: ['undefined', 'boolean'],
    },
  ]
)

/**
 * @function $stringIsIP
 */
export const $stringIsIP = _is(
  (str: string, { version }: PlainObject): boolean => isIP(str, version),
  [
    'undefined',
    {
      version: ['undefined', 'string'],
    },
  ]
)

/**
 * @function $stringIsISBN
 */
export const $stringIsISBN = _is(
  (str: string, { version }: PlainObject) => isISBN(str, version),
  [
    'undefined',
    {
      version: ['undefined', 'string'],
    },
  ]
)

/**
 * @function $stringIsISIN
 */
export const $stringIsISIN = _is(isISIN)

/**
 * @function $stringIsISO31661Alpha2
 */
export const $stringIsISO31661Alpha2 = _is(isISO31661Alpha2)

/**
 * @function $stringIsISO31661Alpha3
 */
export const $stringIsISO31661Alpha3 = _is(isISO31661Alpha3)

/**
 * @function $stringIsISRC
 */
export const $stringIsISRC = _is(isISRC)

/**
 * @todo $stringIsISSN Standardize options to camelCase
 * @function $stringIsISSN
 */
export const $stringIsISSN = _is(isISSN, [
  'undefined',
  {
    case_sensitive: ['undefined', 'boolean'],
    require_hyphen: ['undefined', 'boolean'],
  },
])

/**
 * @function $stringIsJWT
 */
export const $stringIsJWT = _is(isJWT)

/**
 * @function $stringIsLowercase
 */
export const $stringIsLowercase = _is(isLowercase)

/**
 * @todo $stringIsMACAddress Check for macaddess without any separators
 * @function $stringIsMACAddress
 */
export const $stringIsMACAddress = _is(isMACAddress)

/**
 * @function $stringIsMagnetURI
 */
export const $stringIsMagnetURI = _is(isMagnetURI)

/**
 * @function $stringIsMimeType
 */
export const $stringIsMimeType = _is(isMimeType)

/**
 * @function $stringIsNumeric
 */
export const $stringIsNumeric = _is(
  (str: string, options: PlainObject) =>
    isNumeric(
      str,
      _transposeObject(
        {
          noSymbols: 'no_symbols',
        },
        options
      )
    ),
  [
    'undefined',
    {
      noSymbols: ['boolean', 'undefined'],
    },
  ]
)

/**
 * @function $stringIsUppercase
 */
export const $stringIsUppercase = _is(isUppercase)

/**
 * @function $stringIsStrongPassword
 */
export const $stringIsStrongPassword = _is(isStrongPassword, [
  'undefined',
  {
    minLength: ['undefined', 'number'],
    minLowercase: ['undefined', 'number'],
    minUppercase: ['undefined', 'number'],
    minNumbers: ['undefined', 'number'],
    minSymbols: ['undefined', 'number'],
  },
])

/**
 * @todo $stringIsURL Standardize options to camelCase
 * @function $stringIsURL
 */
export const $stringIsURL = _is(isURL, [
  'undefined',
  {
    require_protocol: ['undefined', 'boolean'],
    require_valid_protocol: ['undefined', 'boolean'],
    protocols: ['undefined', 'array'],
    require_host: ['undefined', 'boolean'],
    require_port: ['undefined', 'boolean'],
    allow_protocol_relative_urls: ['undefined', 'boolean'],
    validate_length: ['undefined', 'boolean'],
  },
])

/**
 * @function $stringIsUUID
 */
export const $stringIsUUID = _is(
  (str: string, { version }: PlainObject): boolean => isUUID(str, version),
  [
    'undefined',
    {
      version: ['undefined', 'string'],
    },
  ]
)

export const STRING_IS_EXPRESSIONS = {
  $stringIsAlpha,
  $stringIsAlphanumeric,
  $stringIsAscii,
  $stringIsBase32,
  $stringIsBase58,
  $stringIsBase64,
  $stringIsBIC,
  $stringIsCreditCard,
  $stringIsDataURI,
  $stringIsEmail,
  $stringIsFQDN,
  $stringIsHash,
  $stringIsHexadecimal,
  $stringIsIBAN,
  $stringIsIMEI,
  $stringIsIP,
  $stringIsISBN,
  $stringIsISIN,
  $stringIsISO31661Alpha2,
  $stringIsISO31661Alpha3,
  $stringIsISRC,
  $stringIsISSN,
  $stringIsJWT,
  $stringIsLowercase,
  $stringIsMACAddress,
  $stringIsMagnetURI,
  $stringIsMimeType,
  $stringIsNumeric,
  $stringIsUppercase,
  $stringIsStrongPassword,
  $stringIsURL,
  $stringIsUUID,
}
