# Simple-React-Project

This project is a demonstration of proficiency in Typescript and React. It consists of a standard React App that can be run using `npm start`. The project includes three functional components: `App.tsx`, `Counter.tsx`, and `TrafficLight.tsx`.

## `Counter.tsx`

The component achieves the following:
- Manages its own state for its count
- Ability to increment / decrement
- Ability to have a callback to be used in parent components

## `TrafficLight.tsx`

This component achieves the following:
- Holds a TrafficLightState object
- Depending on the values in the TrafficLightState, it displays a traffic light state of Red, Yellow, or Green

## `App.tsx`

This component achieves the following:
- Renders the Counter and TrafficLight components
- Manages the total count from the two counters
- Manages what state the TrafficLight should be

### Some thoughts

- I made the counter manage its own state in order for each component to be standalone, with the added ability to "listen" into what is happening that component via the callback function
- TrafficLightState was explicitly typed to hard code values into 0, 1, or 2 and labels as "Green", "Red", "Yellow" in order to keep state predictable
- There is world where certain functions could have been simplified into 1 function, but for readability I maintained them as separate functions
