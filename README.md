# React-Components-Insta-Clone

## Composing React Components and Passing Data Via Props

## Introduction

- For this project, you'll be building a simple Instagram clone using React.
- There is a file provided called `dummy-data.js` that contains some mock data. Each object in the mock data represents a faux Instagram post.
- Your React application will receive faux post data and render each as a separate Instagram post.

## Instructions

### Task 1: Project Setup

This project was put together using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [x]  Create a forked copy of this project.
- [x]  Add your team lead as collaborator on Github.
- [x]  Clone your OWN version of the repository in your terminal
- [x]  CD into the project base directory `cd React-Components-Insta-Clone`
- [x]  Download project dependencies by running `npm install`
- [x]  Start up the app using `npm start`
- [x]  Create a new branch: git checkout -b `<firstName-lastName>`. Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x]  Push commits: git push origin `<firstName-lastName>`.

### Task 2a: MVP

- [ ]  This app can be broken down to two main sections that you'll need to implement for this project: the Search Bar and the Posts.
- [ ]  To complete this project there will be a single instance of the Search Bar being rendered at the top of the page, as well as a Posts component that renders an individual Post for every object inside the `dummy-data.js` array.
- [ ]  Use what you learned yesterday to set up state to keep track of the posts.
- [ ]  You will implement a callback to increase the "likes count" on posts, and hand it through props several levels down into a nested component.
- [ ]  Look through the code before you start. There are a lot of files. Not all of them need code added to them. Start in the App.js file and read the instructions there.

---

Your project should end up looking like [this](https://tk-assets.lambdaschool.com/228297b1-2407-4e39-9704-3926767e4ac7_insta-clone.png)

### Task 2b: Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/tk2kpwyLDYBJkCG6n/A8TyNmvCG9JaJn).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3: Stretch Goals

- [ ]  Create more dummy data in the dummy-data.js file and add search functionality to the search bar. One way to do this is with a filter method.
- [ ]  Implement the ability to add comments to a post using an input.
- [ ]  Finish styling all of the application and get your instagram clone to closely resemble the given design spec.

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
- [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your TL
