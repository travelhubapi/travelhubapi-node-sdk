# TravelhubApi SDK - Hotel

Facilitator to call hotel endpoints

---


1. [Definitions](#definitions)
  - [Constructors](#constructors)
  - [Properties](#properties)
    - [Statics](#statics)
      - [homologHost](#homologhost)
      - [productionHost](#productionhost)
  - [Methods](#methods)
    - [getLocations](#getlocations)
    - [getAvailabilities](#getavailabilities)
    - [getHotel](#gethotel)
    - [getFacilities](#getfacilities)
    - [getImages](#getimages)
    - [getCancellationPolicies](#getcancellationpolicies)
    - [book](#book)
    - [getBooking](#getbooking)
    - [cancelBooking](#cancelbooking)
2. [Referencies](#referencies)
  - [Methods - Endpoints](#methods-endpoints)

## Definitions

### Constructors

#### `new TravelhubApiSDKHotel(settings, oauth);`

Create a Hotel instance

**Parameters**

Name        | Type          |  Description
----------- | ------------- | -----------
`settings`  | `object`      | Settings with environment and credentials
`oauth`     | [`TravelhubApiSDKOAuth`](../oauth/TravelhubApiSDKOAuth.js) | [OAuth Instance](../oauth/README.md)

### Properties

#### Statics

##### homologHost

Url homologation environment

##### productionHost

Url production environment

### Methods

All parameters are passed as a object

```
  getLocations({ description, limit });
```

Instead of

```
  getLocations(description, limit);
```

Hotel facilitator return a promise with object:

| Attribute     | Description
|:--------------|:------------
| content       | Related endpoint result object
| correlationId | Request/response correlation id
| statusCode    | Response status code
| headers       | Response headers

#### getLocations

Get the possible locations to availabilities of hotels filtering by description.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`description`| `string` | Description of a place, can be a part of the city or state name (minimum of 3 characters)
`limit`  | `int`  | Maximum number of items to be returned in response
`countryCode`  | `string`  | Filter locations by country code (ISO 3166)

**Return**

 Content                        | Description
 --------------------------- | -----------
 `Locations` | A list of locations

#### getAvailabilities

Check availability of hotels.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`locationId`| `string`  | Location ID from get locations api
`checkIn`   | `string`  | Check-in date (ISO 8601 date with YYYY-MM-DD format)
`checkOut`  | `string`  | Check-out date (ISO 8601 date with YYYY-MM-DD format)
`rooms`     | `array`   | Information about accommodation and guests
`currencyIso` | `string`  | Currency ISO in which they will be returned the hotel rate values
`hotelName` | `string`  | Filter the hotels by the part of name
`minimumStars`| `number`| Filter the hotels by minimum stars that hotel must have
`basicInfo`  | `bool`   | Get hotel basic (true) or complete (default or false) information
`bookingAvailability`| `string` | Booking availability type: <br>**`AvailableNow`** - Hotels available for booking <br> **`AvailableNowAndOnRequest`** - - Hotels available for booking and also booking on request

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Availabilities` | List of availabilities of hotel

#### getHotel

Get hotel informations.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`track`     | `string`  | Hotel track code

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Hotel`                     | Hotel Information

#### getFacilities

Get hotel Facilities.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`track`     | `string`  | Hotel track code

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Facilities`                | List of hotel Facilities

#### getImages

Get hotel Images.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`track`     | `string`  | Hotel track code

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Images`                    | List of hotel Images

#### getCancellationPolicies

Get hotel the cancellation policies.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`checkIn`   | `string`  | Check-in date (ISO 8601 date with YYYY-MM-DD format)
`checkOut`  | `string`  | Check-out date (ISO 8601 date with YYYY-MM-DD format)
`hotel`     | `object`  | Hotel that has the cancellation policies

**Return**

 Content                     | Description
 --------------------------- | -----------
 `CancellationPolicies`      | Hotel cancellation policies

#### book

Book a hotel without payment.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`bookRequest`| `object` | Booking to be created

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Booking`                   | Booking created with locators and expiration date

#### getBooking

Get booking information.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`bookingCode`| `string` | Booking code

**Return**

 Content                     | Description
 --------------------------- | -----------
 `Booking`                   | Booking information

#### cancelBooking

Cancel booking.

**Parameters**

Name        | Type      |  Description
----------- | --------- | -----------
`bookingCode`| `string` | Booking code
`vendorId`  | `string`  | Vendor Id

**Return**

 Content                     | Description
 --------------------------- | -----------
 `undefined`                 | Return statusCode 204


## Referencies

### Methods - Endpoints

| Method                        | verb | Endpoint
|:------------------------------|:-----|:------------------------------------------------
|`getLocations`      |`GET`| `/v1/locations/{{description}}`
|`getAvailabilities` |`GET`| `/v1/availabilities/{{locationId}}/{{checkIn}}/{{checkOut}}`
|`getHotel`          |`GET`| `/v1/hotels/{{track}}`
|`getFacilities`     |`GET`| `/v1/hotels/{{track}}/facilities`
|`getImages`         |`GET`| `/v1/hotels/{{track}}/images`
|`getCancellationPolicies` |`POST`| `/v1/bookings/{{checkIn}}/{{checkOut}}/cancellationPolicies`
|`book`              |`POST`| `/v1/bookings`
|`getBooking`        |`GET`| `/v1/bookings/{{track}}`
|`cancelBooking`      |`DELETE`| `/v1/bookings/{{track}}/{{vendorId}}`

---

*For more details about Hotel API, check the full [documentation](http://dev.travelhubapi.com.br/documents/hotels)*
