# Chicago Public Data API Research

## Explaination

The City of Chicago has a ton of interesting data put out at the Chicago Data Portal. For this application the most intersting data is going to be the street closure data.

## Registering Application

Many requests can be made without a application token, but it is suggested to register the application and use it's token on all requests. With that you'll avoid throttles and will make "Unlimited Requests" so long as you're not a jerk about it. I'll have to dive in on what that means. Filling a database/cache would probably be advisable. Anyway the login can be found here:

[Login Page](https://data.cityofchicago.org/login)

## Documentation

The docs here look to be of high quality will likely need to take a deep dive once the http request framework is up and running.

[Documentation](https://dev.socrata.com/foundry/data.cityofchicago.org/erhc-fkv9)

## Example Request

Taking a quick peek below explains the general type of request I'll need to make.

```
https://data.cityofchicago.org/resource/erhc-fkv9.json?streetname=BELLE%20PLAINE
```
