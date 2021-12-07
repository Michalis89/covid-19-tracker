<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.skuld.com/contentassets/c0d30d7bf2c64c67b5c0a29dbccf1ebe/covid-19_coronavirus_design_logo-shutterstock_1663374028.jpg">
    <img src="images/covid logo.png" alt="Logo" width="339" height="149">
  </a>

  <h3 align="center">Covid 19 Tracker</h3>

  <p align="center">
    This is a Reactjs app for tracking the Covid 19 cases worldwide.
    <br />
    <br />
    <a href="https://covid-19-tracker-591a6.web.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Michalis89/covid-19-tracker/issuess">Report Bug</a>
    ·
    <a href="https://github.com/Michalis89/covid-19-tracker/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api-usage">API Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://covid-19-tracker-591a6.web.app/)

At this Covid 19 Tracker App you are able to to see:

- Worldwide and per country Covid cases
- Worldwide and per country Covid recovered
- Worldwide and per country Covid deaths

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Below you will find all the tenchologies that i used to to boostrap and deploy the project.

- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Set up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

For starters if don't have NodeJs at your local machine you have to install <a href="https://nodejs.org/en/download/">from here</a>

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Michalis89/covid-19-tracker
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run start script
   ```
   npm run start or yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Deployment

In order to deploy the app at firebase you have to:

1. Build the app
   ```sh
   npm build or yarn build
   ```
2. You should have firebase account and setup the project at the [Firebase](https://firebase.google.com/) GUI)

3. You should install firebase CLI.

   ```sh
   npm install -g firebase-tools
   ```

4. At the project's terminal you should login to the firebase
   ```sh
   firebase login
   ```
5. At the project's terminal you should run the following command in order to deploy the project
   ```sh
   firebase deploy
   ```

<!-- API Usage -->

## API Usage

Here is the [API](https://disease.sh/docs/#/)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- [Michalis Mouzakitis](https://www.linkedin.com/in/michalis-mouzakitis-b80891126/)
- [Portfolio Link - TBD](TBD)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Michalis89/covid-19-tracker.svg?style=for-the-badge
[contributors-url]: https://github.com/Michalis89/covid-19-tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Michalis89/covid-19-tracker.svg?style=for-the-badge
[forks-url]: https://github.com/Michalis89/covid-19-tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/Michalis89/covid-19-tracker.svg?style=for-the-badge
[stars-url]: https://github.com/Michalis89/covid-19-tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/Michalis89/covid-19-tracker.svg?style=for-the-badge
[issues-url]: https://github.com/Michalis89/covid-19-tracker/issues
[license-shield]: https://img.shields.io/github/license/Michalis89/covid-19-tracker.svg?style=for-the-badge
[license-url]: https://github.com/Michalis89/covid-19-tracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michalis-mouzakitis-b80891126/
[product-screenshot]: images/screenshot.png
