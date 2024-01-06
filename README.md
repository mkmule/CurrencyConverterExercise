This is a small project for assessment of tech part of the interview process for global payments company. Exercise can
be seen here: [exercise.pdf](exercise.pdf). Overall time spent on this exercise is ~_4 days_.

# Demo
You can check quick demo here: [exercise_demo.mp4](exercise_demo.mp4).

# Technical decisions
## Extra dependencies
- Used React Native typescript template _without Expo_ (less heavy dependencies)
- Typescript for type checking (already included in template)
- [React Native Paper](https://reactnativepaper.com/) for base components (Buttons, Inputs and Accordions)
- [React Navigation](https://reactnavigation.org/) router for screen and currency selection modal (makes it reusable in
  any part of application)
- Jest for unit testing (already included in template)

## API / Loaders
For the purpose of exercise stubbed values were used, however considering that relevant values are extracted into
variables/state it is easily integrable with data fetching hooks. Also, loaders can be achieved with usage of _disabled_
property of the buttons and inputs.

## Conversion logic
Conversion logic is based usage o a data set of _rates_ and _inverse rates_ that can be found in [api.stubs.ts](src%2Fservices%2Fapi.stubs.ts).
Conversion logic includes two fees: Service fee (5%) and VAT fee (5% of Service fee) which are deducted form sending amount.

## Things to improve
- Extract and cover with testing hooks and conversion logic
  in [TransferStartScreen.tsx](src%2Fscreens%2FTransferStartScreen.tsx)
- Optimise rendering of [CurrenciesListScreenByCountry.tsx](src%2Fscreens%2FCurrenciesListScreenByCountry.tsx) with lazy list item rendering
- Review conversion rounding behavior with Product Owner

# React Native

## Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the
following command to start your _iOS_ app:

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_
shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Xcode respectively.
