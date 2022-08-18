# i-want-to-feel

- Project 1 group assignment for BCU Bootcamp due 18-08-22
- Developers: Haruka Hashimoto, Ashleigh Chevannes, Jess Onacko
- Deployed URL: https://nxtera.github.io/I-Want-To-Feel/

Gif of deployed web page:

![me](https://github.com/nxtera/I-Want-To-Feel/blob/main/demo.gif)

Contents:

1. Concept: User Story & Motivation
2. Process: CSS, API, Task Delegation
3. Key features & Functionality
4. Issues Encountered
5. Future Development
6. Credits

## 1. Concept: User Story & Motivation

This project was undertaken as a submission for a Birmingham City Bootcamp assignment, with a brief to design and create an application from scratch in a group, using Github collaboratively to realise the concept together.  The project requirements are below:

![image](https://user-images.githubusercontent.com/106882755/185477936-04129873-1883-4b86-bf89-05cb9e09eb69.png)

The User Story is as follows:

- AS A music lover

- I WANT to quickly and easily get song recommendations based on the mood I want to feel

- SO THAT I can expand on my music taste

Our motivation for this project was to make the use of available API data combinations, in order to create something unique and fun for our submission.  For our API calls we used LastFM and YouTube.

## 2. Process: CSS, API, Task Delegation

- CSS: The interface was intended to be a simple, clean and polished.  CSS styling was used to create a simple central box with an image related to the tags 'music' or 'mood' which changes when the user refreshes the page - this was intended to keep the application, which is simple in its nature, fresh and user-friendly.  A dropdown 'select' element was used for the mood selection function using 'Semantic-UI'.  iframes were embedded within the HTML and linked to the YouTube results.  The application was optimised for smartphone using media query.

- APS's: we made an API call trhough LastFM which, based on the mood tag selected, returned a list of song artist names and titles that included this tag.  We then made an API call to YouTube to retrieve the video link for these songs, and generate the 5-song playlist in the form of embedded videos on the webpage.

- Task delegation: the project was divided into the following roles: application mock-up, HTML/CSS styling, media queries, iframe embedding, API calls, Github admin, presentation and readme file.  These roles were assignmed based on strengths/preferences.  We feel our successes as a team included effective collaboration, successful github management and effective communication.


## 3. Key features & Functionality

- a clean, user-friendly interface, in which the core image changes on refresh, that has also been optimised for smartphone
- an easy-to-use search function that utilises a drop-down menu and find button
- API calls to LastFM & YouTube that generate a playlist in the form of embedded YouTube videos for easy user access
- potential to expand exponentially for further development

## 4. Issues encountered
- one group member lost a few days into the project.  We overcame this by re-delegating tasks and dividing the workload.
- we originally used 'musixmatch' for our API call to retrieve the songs of the user's mood but after developing the application using this API, it stopped returning results for a reason unknown to us.  In order to overcome this we had to find and switch to another API that returns data based on a mood fetch and had to rewrite the code using this API instead.

## 5. Future development
- TODO: increase selection of moods that the user can search by
- TODO: create a mood search by user input as an alternative to dropdown
- TODO: combine other criteria with mode to increase scope of the application
- TODO: optimise for other devices such as tablet

## 6. Credits
- photo credits: https://unsplashed.com 
- development framework: https://semantic-ui.com
- API documentation: LastFM: https://last.fm/api Youtube: https://developers.google.com/youtube/v3


