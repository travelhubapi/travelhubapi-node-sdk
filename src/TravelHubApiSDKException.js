export default class TravelHubApiSDKException extends Error {
  constructor(response) {
    super(response.body.message);

    this.correlationId = response.headers['x-correlation-id'];
    this.statusCode = response.statusCode;

    this.name = 'TravelHubApiSDKException';
  }
}
