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
- [`$stringIsFQDN()`](#stringisfqdn)
- [`$stringIsHash()`](#stringishash)
- [`$stringIsHexadecimal()`](#stringishexadecimal)
- [`$stringIsIBAN()`](#stringisiban)
- [`$stringIsIMEI()`](#stringisimei)
- [`$stringIsIP()`](#stringisip)
- [`$stringIsISBN()`](#stringisisbn)
- [`$stringIsISIN()`](#stringisisin)
- [`$stringIsISO31661Alpha2()`](#stringisiso31661alpha2)
- [`$stringIsISO31661Alpha3()`](#stringisiso31661alpha3)
- [`$stringIsISRC()`](#stringisisrc)
- [`$stringIsISSN()`](#stringisissn)
- [`$stringIsJWT()`](#stringisjwt)
- [`$stringIsLowercase()`](#stringislowercase)
- [`$stringIsMACAddress()`](#stringismacaddress)
- [`$stringIsMagnetURI()`](#stringismagneturi)
- [`$stringIsMimeType()`](#stringismimetype)
- [`$stringIsMobilePhone()`](#stringismobilephone)
- [`$stringIsNumeric()`](#stringisnumeric)
- [`$stringIsUppercase()`](#stringisuppercase)
- [`$stringIsStrongPassword()`](#stringisstrongpassword)
- [`$stringIsURL()`](#stringisurl)
- [`$stringIsUUID()`](#stringisuuid)

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

- `str` {String}

##### `$stringIsBase32(str)`

- `str` {String}

##### `$stringIsBase58(str)`

- `str` {String}

##### `$stringIsBase64(options, str)`

- `options` {Object}
  - `urlSafe` {Boolean}
- `str` {String}

##### `$stringIsBIC(str)`

- `str` {String}

##### `$stringIsCreditCard(str)`

- `str` {String}

##### `$stringIsDataURI(str)`

- `str` {String}

##### `$stringIsEmail(options, str)`

- `options` {Object}
  - `allow_display_name` {Boolean}
  - `require_display_name` {Boolean}
  - `allow_utf8_local_part` {Boolean}
  - `require_tld` {Boolean}
  - `allow_ip_domain` {Boolean}
  - `domain_specific_validation` {Boolean}
- `str` {String}

##### `$stringIsFQDN()`



##### `$stringIsHash()`



##### `$stringIsHexadecimal()`



##### `$stringIsIBAN()`



##### `$stringIsIMEI()`



##### `$stringIsIP()`



##### `$stringIsISBN()`



##### `$stringIsISIN()`



##### `$stringIsISO31661Alpha2()`



##### `$stringIsISO31661Alpha3()`



##### `$stringIsISRC()`



##### `$stringIsISSN()`



##### `$stringIsJWT()`



##### `$stringIsLowercase()`



##### `$stringIsMACAddress()`



##### `$stringIsMagnetURI()`



##### `$stringIsMimeType()`



##### `$stringIsMobilePhone()`



##### `$stringIsNumeric()`



##### `$stringIsUppercase()`



##### `$stringIsStrongPassword()`



##### `$stringIsURL()`



##### `$stringIsUUID()`
