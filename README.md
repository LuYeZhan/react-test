# React Frontend Developer Technical Assignment

## Description

This assignment consists of creating a search field with autocomplete functionality.
As the user types, github users will show up in the autocomplete results.

## Use of this repository

After you clone this repository.

- **npm start** to run in your local development environment.
- **npm test** to run the tests and see the code coverage.
- **npm run testdev** to run the tests and watch changes on them.

## Devstacks

React Hooks, Axios, NodeJs, Sass. Jest, Enzyme for testing.

## Container

GithubPage: which handles the data proveeded by the github API, here we do a debounce, we only do a query if the user stops typing for more than 0.6 seconds

## Components

— Input: a input field where the user types search keywords. Here we handle the values that goes to the queries.

— Results: In this component we handle the data that's been passed from GithubPage. Here we define all the interactions that the users can do.

— Result Item: Here we render each item of the results

## Features

Keyboard accesible:

- Arrow ↓: highlight next autocomplete result. If the last one is highlighted,
  don’t do anything.
- Arrow ↑: highlight previous autocomplete result. If the first one is highlighted,
  don’t do anything.
- Enter ↩: go to the highlighted result’s user github profile page

Mouse accesible:

- onHover: highligh the item we hover on, we change the background and the color of the username
- onClick: go to the highlighted result’s user github profile page

## Responsive

It is a responsive web page, it works on desktop, mobile and table devices.

## Services

getUsersData: In this service we define the requests and we pass the input value as a parameter

## Hooks

Keypress: In this custom made hook we define the keyboard accesible features

### Demo link.

[Demo](https://react-frontend-assesment.herokuapp.com/)
