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
 * https://en.wikipedia.org/wiki/ASCII
 *
 * @function $stringIsAscii
 * @param {String} str
 */
export const $stringIsAscii = _is(isAscii)

/**
 * https://en.wikipedia.org/wiki/Base32
 *
 * @function $stringIsBase32
 * @param {String} str
 */
export const $stringIsBase32 = _is(isBase32)

/**
 * https://tools.ietf.org/id/draft-msporny-base58-01.html
 *
 * @function $stringIsBase58
 * @param {String} str
 */
export const $stringIsBase58 = _is(isBase58)

/**
 * https://en.wikipedia.org/wiki/Base64
 *
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
 * Business Identifier Code (BIC)
 * BIC (Business Identifier Code) is an international standard for routing business transactions and identifying business parties.
 *
 * https://www.swift.com/standards/data-standards/bic-business-identifier-code
 *
 * @function $stringIsBIC
 * @param {String} str
 */
export const $stringIsBIC = _is(isBIC)

/**
 * Supported:
 * - MasterCard `xxxx xxxx xxxx xxxx`
 * - Visa (16 digits) `xxxx xxxx xxxx xxxx`
 * - American Express `xxxx xxxxxx xxxxx`
 * - Diners Club `xxxx xxxxxx xxxxx`
 * - Discover `xxxx xxxxxx xxxx`
 * - JCB `xxxx xxxx xxxx xxxx`
 *
 * @todo $stringIsCreditCard Check support for: enRoute, Voyager, HiperCard and
 *                           Aura (https://www.4devs.com.br/gerador_de_numero_cartao_credito)
 * @function $stringIsCreditCard
 * @param {String} str
 */
export const $stringIsCreditCard = _is(isCreditCard)

/**
 * `data:[<media type>][;base64],<data>`
 *
 * https://en.wikipedia.org/wiki/Data_URI_scheme
 *
 * @function $stringIsDataURI
 * @param {String} str
 */
export const $stringIsDataURI = _is(isDataURI)

/**
 * `foo@bar.com`
 *
 * @function $stringIsEmail
 * @param {Object} [options={}]
 * @param {Boolean} [options.allowDisplayName=false]
 * @param {Boolean} [options.requireDisplayName=false]
 * @param {Boolean} [options.allowUTF8LocalPart=false]
 * @param {Boolean} [options.requireTLD=false]
 * @param {Boolean} [options.allowIPDomain=false]
 * @param {Boolean} [options.domainSpecificValidation=false]
 * @param {String} [options.blacklistedChars=false]
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
 * Fully Qualified Domain Name (FQDN)
 * `www.example.com`
 *
 * @function $stringIsFQDN
 * @param {Object} [options={}]
 * @param {Boolean} [options.requireTLD=false]
 * @param {Boolean} [options.allowUnderscores=false]
 * @param {Boolean} [options.allowTralingDot=false]
 * @param {Boolean} [options.allowNumericTLD=false]
 * @param {String} str
 */
export const $stringIsFQDN = _is(
  (str: string, options: PlainObject) =>
    isFQDN(
      str,
      _transposeObject(
        {
          require_tld: 'requireTLD',
          allow_underscores: 'allowUnderscores',
          allow_trailing_dot: 'allowTralingDot',
          allow_numeric_tld: 'allowNumericTLD',
        },
        options
      )
    ),
  [
    'undefined',
    {
      requireTLD: ['undefined', 'boolean'],
      allowUnderscores: ['undefined', 'boolean'],
      allowTralingDot: ['undefined', 'boolean'],
      allowNumericTLD: ['undefined', 'boolean'],
    },
  ]
)

/**
 * @function $stringIsHash
 * @param {Object} options
 * @param {String} options.algorithm `md4`, `md5`, `sha1`, `sha256`, `sha384`, `sha512`, `ripemd128`, `ripemd160`, `tiger128`, `tiger160`, `tiger192`, `crc32`, `crc32b`
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsHash = _is(
  (str: string, { algorithm }: PlainObject) => isHash(str, algorithm),
  { algorithm: 'string' }
)

/**
 * https://en.wikipedia.org/wiki/Hexadecimal
 *
 * @function $stringIsHexadecimal
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsHexadecimal = _is(isHexadecimal)

/**
 * International Bank Account Number (IBAN)
 *
 * https://www.iban.com/structure
 * `BR1500000000000010932840814P2`
 *
 * @function $stringIsIBAN
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsIBAN = _is(isIBAN)

/**
 * International Mobile Equipment Identity (IMEI)
 *
 * https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity
 *
 * @function $stringIsIMEI
 * @param {String} str
 * @param {Object} [options={}]
 * @param {Boolean} [options.allowHyphens=false]
 * @returns {Boolean}
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
 * - v4: `0.0.0.0`
 * - v6: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
 *
 * @function $stringIsIP
 * @param {String} str
 * @param {Object} options
 * @param {String} options.version `4`, `6`
 * @returns {Boolean}
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
 * International Standard Book Number (ISBN)
 *
 * `978-3-16-148410-0`
 * https://en.wikipedia.org/wiki/International_Standard_Book_Number
 *
 * @function $stringIsISBN
 * @param {String} str
 * @returns {Boolean}
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
 * International Securities Identification Number (ISIN)
 *
 * `US0378331005`
 * https://en.wikipedia.org/wiki/International_Securities_Identification_Number
 *
 * @function $stringIsISIN
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsISIN = _is(isISIN)

/**
 * Two letter country codes
 * ISO 3166-1 alpha-2
 * `BR`
 *
 * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 *
 * @function $stringIsISO31661Alpha2
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsISO31661Alpha2 = _is(isISO31661Alpha2)

/**
 * Three letter country codes
 * ISO 3166-1 alpha-3
 * `BRA`
 *
 * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
 *
 * @function $stringIsISO31661Alpha3
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsISO31661Alpha3 = _is(isISO31661Alpha3)

/**
 * International Standard Recording Code (ISRC)
 * `USRC17607839`
 *
 * https://en.wikipedia.org/wiki/International_Standard_Recording_Code
 *
 * @function $stringIsISRC
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsISRC = _is(isISRC)

/**
 * International Standard Serial Number (ISSN)
 * `2049-3630`
 *
 * https://en.wikipedia.org/wiki/International_Standard_Serial_Number
 *
 * @function $stringIsISSN
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsISSN = _is(
  (str: string, options: PlainObject) =>
    isISSN(
      str,
      _transposeObject(
        {
          case_sensitive: 'caseSensitive',
          require_hyphen: 'requireHyphen',
        },
        options
      )
    ),
  [
    'undefined',
    {
      caseSensitive: ['undefined', 'boolean'],
      requireHyphen: ['undefined', 'boolean'],
    },
  ]
)

/**
 * JSON Web Token (JWT)
 *
 * `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
 * https://tools.ietf.org/html/rfc7519
 *
 * @function $stringIsJWT
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsJWT = _is(isJWT)

/**
 * @function $stringIsLowercase
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsLowercase = _is(isLowercase)

/**
 * Media Access Control address (MAC address)
 * `06-00-00-00-00-00`
 *
 * https://en.wikipedia.org/wiki/MAC_address
 *
 * @todo $stringIsMACAddress Check for macaddess without any separators
 * @function $stringIsMACAddress
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsMACAddress = _is(isMACAddress)

/**
 * https://en.wikipedia.org/wiki/Magnet_URI_scheme
 *
 * @function $stringIsMagnetURI
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsMagnetURI = _is(isMagnetURI)

/**
 * Media Type / Multipurpose Internet Mail Extensions or MIME type
 *
 * `type/subtype;parameter=value`
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * @function $stringIsMimeType
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsMimeType = _is(isMimeType)

/**
 * @function $stringIsNumeric
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsNumeric = _is(
  (str: string, options: PlainObject) =>
    isNumeric(
      str,
      _transposeObject(
        {
          no_symbols: 'noSymbols',
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
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsUppercase = _is(isUppercase)

/**
 * @function $stringIsStrongPassword
 * @param {String} str
 * @returns {Boolean}
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
 * Uniform Resource Locator (URL)
 * `http://www.example.com/index.html`
 *
 * https://en.wikipedia.org/wiki/URL
 *
 * @function $stringIsURL
 * @param {String} str
 * @returns {Boolean}
 */
export const $stringIsURL = _is(
  (str: string, options: PlainObject) =>
    isURL(
      str,
      _transposeObject(
        {
          require_protocol: 'requireProtocol',
          require_valid_protocol: 'requireValidProtocol',
          protocols: 'protocols',
          require_host: 'requireHost',
          require_port: 'requirePort',
          allow_protocol_relative_urls: 'allowProtocolRelativeUrls',
          validate_length: 'validateLength',
        },
        options
      )
    ),
  [
    'undefined',
    {
      requireProtocol: ['undefined', 'boolean'],
      requireValidProtocol: ['undefined', 'boolean'],
      protocols: ['undefined', 'array'],
      requireHost: ['undefined', 'boolean'],
      requirePort: ['undefined', 'boolean'],
      allowProtocolRelativeUrls: ['undefined', 'boolean'],
      validateLength: ['undefined', 'boolean'],
    },
  ]
)

/**
 * Universally Unique Identifier (UUID)
 * Globally Unique Identifier (GUID)
 *
 * `123e4567-e89b-12d3-a456-426614174000`
 *
 * https://en.wikipedia.org/wiki/Universally_unique_identifier
 *
 * @function $stringIsUUID
 * @param {String} str
 * @returns {Boolean}
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
