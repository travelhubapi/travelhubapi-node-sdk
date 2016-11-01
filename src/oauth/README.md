# TravelhubApi SDK - OAuth

Http client to call endpoints with authentication

---

1. [Definitions](#definitions)
  - [Constructors](#constructors)
  - [Properties](#properties)
    - [Statics](#statics)
      - [homologHost](#homologhost)
      - [productionHost](#productionhost)
    - [Instance](#instance)
      - [host](#host)
  - [Methods](#methods)
    - [request](#request)

## Definitions

### Constructors

#### `new TravelhubApiSDKOAuth(settings)`

Create a OAuth instance

**Parameters**

Name        | Type          |  Description
----------- | ------------- | -----------
`settings`  | `object`      | Settings with environment and credentials

### Properties

#### Statics

##### homologHost

Url homologation environment

##### productionHost

Url production environment

#### Instance

##### host

Url used in authentication

### Methods

#### request

Request any travelhubapi endpoint.

**Parameters**

##### request(options)

See full documentation and options attributes for [request-promise](https://github.com/request/request-promise)

---

*For more details about authentication API, check the full [documentation](http://dev.travelhubapi.com.br/documents/auth)*
