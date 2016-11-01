# TravelhubApi SDK

**Node.js Sdk for [TravelhubApi](#)**

[![Dependencies Status](https://david-dm.org/travelhubapi/travelhubapi-node-sdk.svg)](https://david-dm.org/travelhubapi/travelhubapi-node-sdk)
[![Build Status](https://travis-ci.org/travelhubapi/travelhubapi-node-sdk.svg)](https://travis-ci.org/travelhubapi/travelhubapi-node-sdk)
[![Issue Count](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/badges/issue_count.svg)](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk)
[![Test Coverage](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/badges/coverage.svg)](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/coverage)

---

1. [Installation](#installation)
2. [Usage](#usage)
  - [Creating Client](#creating-client)
    - [Options](#options)
    - [Example](#example)
  - [Using as request-promise](#using-as-request-promise)
  - [Using facilitators](#using-facilitators)
    - [HotelSDK](#hotelSDK)

## Installation

```
npm install travelhubapi-sdk
```

## Usage

### Creating client

#### Options

The TravelhubApiSDK instance accepts these options upon initialization

| Param                            | Description     |required   |Default         |
|:---------------------------------|:----------------|:----------|:---------------|
|clientId                          |Your client id.  |```true``` | ```undefined```|
|clientSecret                    |Your client secret.|```true``` | ```undefined```|
|enviroment | flag to use production URls or staging |```false```|```staging```     |
|language                      | default language for messages |```false```| ```pt-BR```       |

#### Example

```js
const TravelhubApiSDK = require('travelhubapi-sdk');

const thubSDK = new TravelhubApiSDK({
  clientId: process.env.TRAVELHUBAPI_CLIENT_ID,
  clientSecret: process.env.TRAVELHUBAPI_CLIENT_SECRET,
  enviroment: process.env.NODE_ENV === 'production' ? 'production' : 'staging', //default: will use staging urls
});
```

### <a name="using-as-request-promise"></a> Using as [request-promise](https://github.com/request/request-promise)

```js
const options = {
  qs: {
    limit: 2,
  },
};
thubSDK.get('http://hotel.stg.travelhubapi.com.br/v1/locations/sao', options)
  .then((response) => {
    const locations = response.body;
  });
```

[See documentation](https://github.com/travelhubapi/travelhubapi-node-sdk/tree/master/src/client/README.md)

### Using facilitators

#### HotelSDK

Example

```js
//sending a booking request

// #1 search locations with hotels in São Paulo
thubSDK.hotel.getLocations({description: 'sao paulo', limit: 1})
  .then(function (result) {
    const locations = result.content;
    const location = locations.items[0];
    const params = {
      locationId: location.id,
      checkIn: '2016-08-30',
      checkOut: '2016-08-31',
      rooms: [
        {
          adt: 1,
          chd: 1,
          bed: 'Double',
          chdAges: [3]
        }
      ]
    };
// #2 search availability of hotels as needs
    return thubSDK.hotel.getAvailabilities(params);
  })
  .then(function (result) {
    const availabilities = result.content;
    const hotel = availabilities.items[0].hotels.items[0];
    const accommodation = hotel.accommodations.items[0];

    accommodation.guests = {
      "items": [
        {
          "firstName": "Fulano",
          "lastName": "de Tal",
          "document": {
            "type": "IndividualRegistrationCode",
            "number": "12345678910"
          },
          "gender": "Male",
          "guestType": "Adt",
          "birthDate": "1988-07-27"
        },
        {
          "firstName": "Siclana",
          "lastName": "de Tal",
          "gender": "Female",
          "guestType": "Chd",
          "birthDate": "2013-11-20"
        }
      ]
    };
    hotel.accommodations.items = [accommodation];
    const booking = {
      checkIn: '2016-08-30',
      checkOut: '2016-08-31',
      hotel: hotel,
      vendor: {
        id: "marcos.rava@flytour.com.br"
      },
    };
// #3 send a booking request for the selected hotel
    return thubSDK.hotel.book(booking)
  })
  .then(function (result) {
    console.log(result);
    return result;
  })
  .catch(function (err) {
    console.error(err.statusCode);
    throw err;
  });
```

[See documentation](https://github.com/travelhubapi/travelhubapi-node-sdk/tree/master/src/hotel/README.md)

For more details please check the full [documentation](http://dev.travelhubapi.com.br)





