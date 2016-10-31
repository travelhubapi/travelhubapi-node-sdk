import Promise from 'bluebird';

export default class TravelhubApiSDKCommon {

  static parseResponse(response) {
    const result = {
      content: response.body,
      statusCode: response.statusCode,
      headers: Object.assign({}, response.headers),
      correlationId: response.headers['x-correlation-id'],
    };
    return Promise.resolve(result);
  }
}
