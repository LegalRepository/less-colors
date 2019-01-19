# LESS Implementation
This is an implementation of the amazing [colors](https://github.com/mrmrs/colors) package by murmurs. The project was designed by them to create a better set of default web colors that are visually more appealing and better suited for UX. This is an attempt to simplify the creation and management of the colors as a utility in your next project. Each color will be assigned a variable, along with a set that can be used to make any HTML or CSS object.

## Details
The project uses the following libraries/utilities:
1. [LESS](https://github.com/less/less.js) (currently using version 3.9.0)
2. [Colors](https://github.com/mrmrs/colors)

## Installation Instructions
To use this implementation of colors you can directly use the `.css` or `.min.css` files. They can be found in the `dist` folder. Alternatively, to compile the `.less` files you can simply use the gulp utility attached as a dependency in the `package.json` file.

First, make sure that you have node js and NPM installed on your machine. Then run the following commands:
```javascript
npm install --global gulp-cli
cd /to/less/folder
npm install
npm start
```

## Reusability
This library focuses on reusability of variables and dependencies. The list of colors and the associated set is provided as below:
```less
// Variables
@aqua:  #7FDBFF;
@blue:  #0074D9;
@navy:  #001F3F;
@teal:  #39CCCC;
@green: #2ECC40;
@olive: #3D9970;
@lime:  #01FF70;
@yellow:  #FFDC00;
@orange:  #FF851B;
@red:     #FF4136;
@fuchsia: #F012BE;
@purple:  #B10DC9;
@maroon:  #85144B;
@white:  #FFFFFF;
@silver: #DDDDDD;
@gray:   #AAAAAA;
@black: #111111;

// Set
@colors: {
  aqua: @aqua;
  blue: @blue;
  navy: @navy;
  teal: @teal;
  olive: @olive;
  green: @green;
  lime: @lime;
  yellow: @yellow;
  orange: @orange;
  red: @red;
  maroon: @maroon;
  fuchsia: @fuchsia;
  purple: @purple;
  black: @black;
  grey: @gray;
  silver: @silver;
}
```
As you can see from above the set is dependent directly on the variables of each color.

Then we can simply use a loop to create the required classes and/or objects as required:
```less
each(@colors, {
  .@{key} { // The name of the object as defined by the key
    some-rule: @value; // The associated value for the rule
  }
});
```

## Licensing
This library is available under the MIT license and is available as under the terms of the agreement without any warranty.
