# $stringIs[Format] expressions

```
npm install @orioro/expression-string-validate
yarn add @orioro/expression-string-validate
```

A set of expressions based on [validator.js](https://github.com/validatorjs/validator.js/) to be used with [`@orioro/expression`](https://github.com/orioro/node-expression) module.

# API Docs

- [`$stringIsAlpha(options, str)`](#stringisalphaoptions-str)
- [`$stringIsAlphanumeric(options, str)`](#stringisalphanumericoptions-str)
- [`$stringIsAscii(str)`](#stringisasciistr)
- [`$stringIsBase32(str)`](#stringisbase32str)
- [`$stringIsBase58(str)`](#stringisbase58str)
- [`$stringIsBase64(options, str)`](#stringisbase64options-str)
- [`$stringIsBIC(str)`](#stringisbicstr)
- [`$stringIsCreditCard(str)`](#stringiscreditcardstr)
- [`$stringIsDataURI(str)`](#stringisdatauristr)
- [`$stringIsEmail(options, str)`](#stringisemailoptions-str)
- [`$stringIsFQDN(options, str)`](#stringisfqdnoptions-str)
- [`$stringIsHash(options, str)`](#stringishashoptions-str)
- [`$stringIsHexadecimal(str)`](#stringishexadecimalstr)
- [`$stringIsIBAN(str)`](#stringisibanstr)
- [`$stringIsIMEI(str, options)`](#stringisimeistr-options)
- [`$stringIsIP(str, options)`](#stringisipstr-options)
- [`$stringIsISBN(str)`](#stringisisbnstr)
- [`$stringIsISIN(str)`](#stringisisinstr)
- [`$stringIsISO31661Alpha2(str)`](#stringisiso31661alpha2str)
- [`$stringIsISO31661Alpha3(str)`](#stringisiso31661alpha3str)
- [`$stringIsISRC(str)`](#stringisisrcstr)
- [`$stringIsISSN(str)`](#stringisissnstr)
- [`$stringIsJWT(str)`](#stringisjwtstr)
- [`$stringIsLowercase(str)`](#stringislowercasestr)
- [`$stringIsMACAddress(str)`](#stringismacaddressstr)
- [`$stringIsMagnetURI(str)`](#stringismagneturistr)
- [`$stringIsMimeType(str)`](#stringismimetypestr)
- [`$stringIsNumeric(str)`](#stringisnumericstr)
- [`$stringIsUppercase(str)`](#stringisuppercasestr)
- [`$stringIsStrongPassword(str)`](#stringisstrongpasswordstr)
- [`$stringIsURL(str)`](#stringisurlstr)
- [`$stringIsUUID(str)`](#stringisuuidstr)

##### `$stringIsAlpha(options, str)`

- `options` {Object}
  - `locale` {String}
  - `ignore` {String}
- `str` {String}

##### `$stringIsAlphanumeric(options, str)`

- `options` {Object}
  - `locale` {String}
- `str` {String}

##### `$stringIsAscii(str)`

https://en.wikipedia.org/wiki/ASCII

- `str` {String}

##### `$stringIsBase32(str)`

https://en.wikipedia.org/wiki/Base32

- `str` {String}

##### `$stringIsBase58(str)`

https://tools.ietf.org/id/draft-msporny-base58-01.html

- `str` {String}

##### `$stringIsBase64(options, str)`

https://en.wikipedia.org/wiki/Base64

- `options` {Object}
  - `urlSafe` {Boolean}
- `str` {String}

##### `$stringIsBIC(str)`

Business Identifier Code (BIC)
BIC (Business Identifier Code) is an international standard for routing business transactions and identifying business parties.

https://www.swift.com/standards/data-standards/bic-business-identifier-code

- `str` {String}

##### `$stringIsCreditCard(str)`

Supported:
- MasterCard `xxxx xxxx xxxx xxxx`
- Visa (16 digits) `xxxx xxxx xxxx xxxx`
- American Express `xxxx xxxxxx xxxxx`
- Diners Club `xxxx xxxxxx xxxxx`
- Discover `xxxx xxxxxx xxxx`
- JCB `xxxx xxxx xxxx xxxx`

- `str` {String}

##### `$stringIsDataURI(str)`

`data:[<media type>][;base64],<data>`

https://en.wikipedia.org/wiki/Data_URI_scheme

- `str` {String}

##### `$stringIsEmail(options, str)`

`foo@bar.com`

- `options` {Object}
  - `allowDisplayName` {Boolean}
  - `requireDisplayName` {Boolean}
  - `allowUTF8LocalPart` {Boolean}
  - `requireTLD` {Boolean}
  - `allowIPDomain` {Boolean}
  - `domainSpecificValidation` {Boolean}
  - `blacklistedChars` {String}
- `str` {String}

##### `$stringIsFQDN(options, str)`

Fully Qualified Domain Name (FQDN)
`www.example.com`

- `options` {Object}
  - `requireTLD` {Boolean}
  - `allowUnderscores` {Boolean}
  - `allowTralingDot` {Boolean}
  - `allowNumericTLD` {Boolean}
- `str` {String}

##### `$stringIsHash(options, str)`

- `options` {Object}
  - `algorithm` {String}
- `str` {String}
- Returns: {Boolean} 

##### `$stringIsHexadecimal(str)`

https://en.wikipedia.org/wiki/Hexadecimal

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsIBAN(str)`

International Bank Account Number (IBAN)

https://www.iban.com/structure
`BR1500000000000010932840814P2`

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsIMEI(str, options)`

International Mobile Equipment Identity (IMEI)

https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity

- `str` {String}
- `options` {Object}
  - `allowHyphens` {Boolean}
- Returns: {Boolean} 

##### `$stringIsIP(str, options)`

- v4: `0.0.0.0`
- v6: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

- `str` {String}
- `options` {Object}
  - `version` {String}
- Returns: {Boolean} 

##### `$stringIsISBN(str)`

International Standard Book Number (ISBN)

`978-3-16-148410-0`
https://en.wikipedia.org/wiki/International_Standard_Book_Number

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsISIN(str)`

International Securities Identification Number (ISIN)

`US0378331005`
https://en.wikipedia.org/wiki/International_Securities_Identification_Number

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsISO31661Alpha2(str)`

Two letter country codes
ISO 3166-1 alpha-2
`BR`

https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsISO31661Alpha3(str)`

Three letter country codes
ISO 3166-1 alpha-3
`BRA`

https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsISRC(str)`

International Standard Recording Code (ISRC)
`USRC17607839`

https://en.wikipedia.org/wiki/International_Standard_Recording_Code

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsISSN(str)`

International Standard Serial Number (ISSN)
`2049-3630`

https://en.wikipedia.org/wiki/International_Standard_Serial_Number

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsJWT(str)`

JSON Web Token (JWT)

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
https://tools.ietf.org/html/rfc7519

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsLowercase(str)`

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsMACAddress(str)`

Media Access Control address (MAC address)
`06-00-00-00-00-00`

https://en.wikipedia.org/wiki/MAC_address

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsMagnetURI(str)`

https://en.wikipedia.org/wiki/Magnet_URI_scheme

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsMimeType(str)`

Media Type / Multipurpose Internet Mail Extensions or MIME type

`type/subtype;parameter=value`
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsNumeric(str)`

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsUppercase(str)`

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsStrongPassword(str)`

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsURL(str)`

Uniform Resource Locator (URL)
`http://www.example.com/index.html`

https://en.wikipedia.org/wiki/URL

- `str` {String}
- Returns: {Boolean} 

##### `$stringIsUUID(str)`

Universally Unique Identifier (UUID)
Globally Unique Identifier (GUID)

`123e4567-e89b-12d3-a456-426614174000`

https://en.wikipedia.org/wiki/Universally_unique_identifier

- `str` {String}
- Returns: {Boolean} 



# Design decisions

## Not all methods from validator.js are supported

Methods were selected considering a combination of the following criteria:
- Does the format have a technical standard?
- Can it be tested by using better suited / specialized modules (e.g. `$date` expressions)?
- Does it solve a common use scenario?
- Does the code use complex RegExps? Complex RegExps require detailed vetting
  to prevent [ReDoS vulnerabilities](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS).
