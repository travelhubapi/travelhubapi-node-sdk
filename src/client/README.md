# TravelhubApi SDK

Client to call endpoints with authentication and provide facilitators

---

1. [Definitions](#definitions)
  - [Constructors](#constructors)
  - [Properties](#properties)
    - [Instance](#instance)
      - [hotel](#hotel)
      - [oauth](#oauth)
  - [Methods](#methods)
    - [request](#request)
    - [get](#get)
    - [post](#post)
    - [del](#del)

## Definitions

### Constructors

#### `new TravelhubApiSDK(settings)`

Create a TravelHubApiClient instance

**Parameters**

Name        | Type          |  Description
----------- | ------------- | -----------
`settings`  | `object`      | Settings with environment and credentials

### Properties

#### Instance

##### hotel

Facilitator to call hotel endpoints, see [documentation](../hotel/README.md) for more details

##### oauth

Facilitator to call authorized endpoints, see [documentation](../oauth/README.md) for more details

### Methods

#### request(method, uri, options);

Request any travelhubapi endpoint.

**Parameters**

Name        | Type          |  Description
----------- | ------------- | -----------
`method`    | `string`      | Http method
`uri`       | `string`      | Travelhubapi endpoint
`options`   | `object`      | [request-promise](https://github.com/request/request-promise) options

**Return**

 Promise with                | Description
 --------------------------- | -----------
 `object`                    | Http response object

#### get

  `request('GET', uri, option);`

#### post

  `request('POST', uri, option);`

#### del

  `request('DELETE', uri, option);`

---

*For more details about API, check the full [documentation](http://dev.travelhubapi.com.br/)*
