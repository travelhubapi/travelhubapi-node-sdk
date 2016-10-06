# TravelhubApi SDK

**Node.js Sdk for [TravelhubApi](#)**

![work: in progress](https://img.shields.io/badge/work-in%20progress-orange.svg)
[![Dependencies Status](https://david-dm.org/travelhubapi/travelhubapi-node-sdk.svg)](https://david-dm.org/travelhubapi/travelhubapi-node-sdk)
[![Build Status](https://travis-ci.org/travelhubapi/travelhubapi-node-sdk.svg)](https://travis-ci.org/travelhubapi/travelhubapi-node-sdk)
[![Issue Count](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/badges/issue_count.svg)](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk)
[![Test Coverage](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/badges/coverage.svg)](https://codeclimate.com/github/travelhubapi/travelhubapi-node-sdk/coverage)

## Installation

```
npm install travelhubapi-sdk
```

## Usage

```js
var TravelhubApiSDK = require('travelhubapi-sdk');

var thubSDK = new TravelhubApiSDK({
      clientId: process.env.TRAVELHUBAPI_CLIENT_ID,
      clientSecret: process.env.TRAVELHUBAPI_CLIENT_SECRET,
      enviroment: process.env.NODE_ENV === 'production' ? 'production' : 'staging', //default: will use staging urls
    });
```

### Hotels

```js
//sending a booking request

// #1 search locations with hotels in São Paulo
thubSDK.hotel.getLocations({description: 'sao paulo', limit: 1})
  .then(function (locations) {
    var location = locations.items[0];
    var params = {
      destination: location.city.id,
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
  .then(function (availabilities) {
    var hotel = availabilities.items[0].hotels.items[0];
    var accommodation = hotel.accommodations.items[0];

    accommodation.guests = {
      "items": [
        {
          "firstName": "Fulano",
          "lastName": "de Tal",
          "document": {
            "type": "Cpf",
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
    var booking = {
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

## Options

The TravelhubApiSDK instance accepts these options upon initialization

| Param                            | Description     |required   |Default         |
|:---------------------------------|:----------------|:----------|:---------------|
|clientId                          |Your client id.  |```true``` | ```undefined```|
|clientSecret                    |Your client secret.|```true``` | ```undefined```|
|enviroment | flag to use production URls or staging |```false```|```staging```     |
|version                      | travelhubapi version |```false```| ```v1```       |

## Methods - Endpoints

### Hotels

| Method                        | verb | Endpoint                                        |
|:------------------------------|:-----|:------------------------------------------------|
|```.hotel.getLocations```      |```GET```| [```/{{version}}/locations/{{description}}```](#) |
|```.hotel.getAvailabilities``` |```GET```| [```/{{version}}/availabilities/{{destination}}/{{checkIn}}/{{checkOut}}```](#) |
|```.hotel.get```               |```GET```| [```/{{version}}/hotels/{{hotelCode}}/{{broker}}```](#) |
|```.hotel.getFacilities```     |```GET```| [```/{{version}}/hotels/{{hotelCode}}/{{broker}}/facilities```](#) |
|```.hotel.getImages```         |```GET```| [```/{{version}}/hotels/{{hotelCode}}/{{broker}}/images```](#) |
|```.hotel.getCancellationPolicies``` |```POST```| [```/{{version}}/bookings/{{checkIn}}/{{checkOut}}/cancellationPolicies```](#) |
|```.hotel.book```              |```POST```| [```/{{version}}/bookings```](#) |
|```.hotel.getHighlights```     |```GET```| [```/{{version}}/hotels/all/highlights```](#) |
|```.hotel.getNationalHighlights``` |```GET```| [```/{{version}}/hotels/national/highlights```](#) |
|```.hotel.getInternationalHighlights``` |```GET```| [```/{{version}}/hotels/international/highlights```](#) |

For more details please check the full [documentation](#)





