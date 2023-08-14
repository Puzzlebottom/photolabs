# Photolabs

A demonstration project built for Lighthouse Labs web development bootcamp.  Photolabs implements a modern React frontend, Postgresql persistence layer and a simple Express API server to organize and display a photo collection. 

## Getting Started

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

### [Backend] Running Backend Servier

Read [backend/readme](/backend/README.md) for further setup details.

```sh
cd backend
npm start
```

## Dependencies

- Pg
- Express
- React
- Node
- Axios

## Features

### An elegant UI experience for the sophisticated photo-phile

Check out the stylish nav bar!

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/nav-bar.png?raw=true" alt="a screenshot of the photolabs navigation bar" height="100%" width="100%"><br/>

Click on a photo to view it uncropped.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/photo-details-modal-selected.png?raw=true" alt="a screenshot of the photo details modal displaying the selected photo" height="50%" width="50%"><br/>

View similar photos in the same modal! Just click the button to open the view.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/photo-details-modal-similar.png?raw=true" alt="a screenshot of the photo details modal displaying photos similar to the one selected" height="50%" width="50%">

---

### Credit where credit is due: Photographer details

Each photo lists the photographers details.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/photo-list-item.png?raw=true" alt="a screenshot of a photo list item with the photographer's info shown" height="50%" width="50%">

---

### Filter your vast, unwieldy collection by subject matter

On first load, the app show every photo in your collection.  That's alot!<br/>
Use the topics from the nav-bar to view only photos matchihng a theme. <br/>
The line over the topic tells you it's currently selected.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/topic-selected.png?raw=true" alt="a screenshot of a topic icon with a line over it indication selected status" height="10%" width="10%"><br/>

You can view your whole collection again by clicking the PhotoLabs logo on the left side of the nav-bar.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/logo.png?raw=true" alt="a screenshot ofthe photolabs logo" height="15%" width="15%">

---

### They can't all be winners: Keep track of favourites with a simple click

Toggle the heart icon on each photo to mark it as a favourite.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/photo-fav-button.png?raw=true" alt="a screenshot of the photo favourite button appearing on each photo list item" height="20%" width="20%">

Clicking the icon in your nav-bar will filter all currently viewed images for any that you've marked as favourites.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/fav-badge.png?raw=true" alt="a screenshot of a heart-shaped icon" height="7.5%" width="7.5%">

---

### Congratulate yourself on impeccable taste while you peruse the gems of your collection

Clicking the heart icon on the right side of your nav-bar will display any visible photos marked as favourites.

<img src="https://github.com/Puzzlebottom/photolabs/blob/main/frontend/docs/favourites-filtered.png?raw=true" alt="a screenshot of a pair of photos that have been favourited" height="100%" width="100%">

---


