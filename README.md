<p align="center">
  <h3 align="center">JS Debugger</h3>

  <p align="center">
    Simple techniques to make JavaScript debugging easier. The repository includes utility modules which you can use directly in your project to make debugging easier and faster.
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Coding for Debugging](#coding-for-debugging)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)


<!-- ABOUT THE PROJECT -->
## About The Project

This project contains utility scripts and functions to make JavaScript debugging easier.


### Built With
This project is designed with technologies listed below - 
* JavaScript


<!-- GETTING STARTED -->
## Getting Started

These utility functions have no dependency. You just have to add the script to your project to start working with it.

* **deb** - Simple small debugger for JavaScript to run in browser. It can be included in NodeJS project but debugger will work only in browser on client side.

* **node-deb** - JavaScript debugger which works both in browser as well as in NodeJS.

* **interceptor** - Simple function wrapper to intercept JavaScript function.

## Coding for Debugging

Follow below tips to make your code easy to test and debug:

* Understand the problem.
* Split problem into small sub-problems.
* Convert sub-problems into very small pure functions (pure function returns same output for same input.)
* Use functional programming `compose()` utility to solve complex problems using small functions. [Click here](https://github.com/amit08255/functional-tdd)
* Write functional code with function composition and pure small functions. [Click here](https://github.com/amit08255/functional-tdd)
* Use functional programming and function composition with factory pattern and dependency injection. [Click here](https://github.com/amit08255/testable-nodejs-code)
* Functions should be as small as possible and should do single thing.
* Do not directly modify objects (received as arguments) in your functions instead clone them and modify clone object and return the modified clone object from function. It helps you keep track of changes in function making your code easy to debug [Click here](https://github.com/amit08255/klona)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Amit Kumar - [@amit08255](https://twitter.com/amit08255) - amitcute3@gmail.com

Project Link: [https://github.com/amit08255/js-debugger](https://github.com/amit08255/js-debugger)

