# Top 100 Podcasts

[![Netlify Status](https://api.netlify.com/api/v1/badges/449d1cbd-4ebf-4f90-ad25-5de96f94e1d2/deploy-status)](https://app.netlify.com/sites/aquamarine-pastelito-b19eb5/deploys)

## Description
This application shows top 100 podcasts according to apple iTunes.

### Component composition

1. The main view components:

 ![page_01](https://user-images.githubusercontent.com/15796607/222983020-47d74dfa-8185-4c21-9fd2-8af12f19fb5c.png)


2. Podcast details components:

 ![page_02](https://user-images.githubusercontent.com/15796607/222983049-4d96e5c8-eb25-42b8-8399-e65b820aaf0d.png)

    
3. Podcast chapters components:

![page_03](https://user-images.githubusercontent.com/15796607/222983059-e6aecb7e-7139-461a-8079-ff35ab9863fe.png)


## Installation

### Prerequisites
While developing the following stack was used:

| Technology | Version | Description      |
|------------|---------|------------------|
| Node JS    | 19.7.0  | JS engine        |
| TypeScript | 5.0.2   | TypeScript       |
| React      | 18.2.0  | Main tech stack  |
| Axios      | 1.3.4   | Requests         |
| PropTypes  | 15.8.1  | Handle types     |
| Sass       | 1.58.3  | CSS              |
| Zustand    | 4.35.5  | State management |
| ESLint     | 8.0.1   | Code formatter   |
| Jest       | 29.4.3  | Testing          |
| Yarn       | 1.22.19 | Package manager  |

### Steps to start the project locally (dev):

- `yarn` (install deps)
- `yarn start` (start up local server and view/use app)

### Production version

For deployment & minification **[NETLIFY](https://www.netlify.com)** service is used

See prod version >> [click here](https://aquamarine-pastelito-b19eb5.netlify.app) <<

Minify JS and CSS:

![image](https://user-images.githubusercontent.com/15796607/222984613-f9785083-d00a-4a3d-8278-8f77a672ccfa.png)

#### The CORS issue

For getting podcast details we need to overcome CORS problem.
It's resolved with Netlify config. See `netlify.toml` file in the project root.

If you still notice that some chapters/episodes of podcasts are not shown
you can use this Chrome extension: _[Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)_

### Tests

There're also some tests in the project.
For running them just execute: 

`yarn test`

![image](https://user-images.githubusercontent.com/15796607/222985322-6e0b83c5-d0e1-4157-bdbd-48ca759bec00.png)


