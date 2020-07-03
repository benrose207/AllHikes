# AllHikes

[Live Site Link](http://all-hikes.herokuapp.com/)

## About
AllHikes is an AllTrails.com clone, on which users can find detailed information about hikes they are interested in, as well as add reviews and photos of hikes they have completed. A given hike page includes information about the hike itself, including any notable features, distance, route type, and a map of the route itself. Users can read, create, edit, and remove reviews about any hike, as well as upload photos to document their experience for others. 

The AllHikes backend is built using the Ruby on Rails framework, a PostgreSQL database, and AWS S3 storage for user-submitted photos. The frontend of the site it built using React and CSS3, with Redux managing the front-end state. The site makes use of the Mapbox GL JS library and Directions API to generate and display the maps of hikes; jQuery's $.ajax() function is used for all AJAX calls on the site.

## Features

### Re-usable Reviews and Photos components
On AllHikes, users can view reviews and photos for any given hike, but can also view their own reviews and photo uploads in their user profiles. Because the core UI/UX of both of these component versions was the same, and in order to minimize repeated code, I created a set of components for reviews and for photos, and made adjustments to the relevant API calls and redux cycle steps so that these could be reused, and would fetch the appropriate data depending on the page in question.

For example, on the pages that house the photos feeds, I pass in a `contentId` and `idType` to the component: 
```js
Hike Show page
...
 {activeUserContent === "reviews" ? (
   <ReviewFeed reviews={this.props.reviews} />
   ) : <PhotoFeedContainer contentId={hike.id} idType="hikeId"/>}
...

User Profile page
...
 {this.state.currentTab === "Photos" ? 
    <PhotoFeedContainer contentId={this.props.user.id} idType="userId"/> 
    : null}
...
```
This allows me to filter my reviews dynamically using a single container... 
```js
  Object.values(state.entities.photos).filter(photo => photo[ownProps.idType] === ownProps.contentId)
```
and ultimately make keep a single presentational component with one AJAX call that responds to either page:
```js
Photos Feed component
...
  componentDidMount() {
    let contentType

    if (this.props.location.pathname.includes("hikes")){
        contentType = "hikes";
    } else {
        contentType = "users";
    }
        
    this.props.fetchPhotos(contentType, this.props.match.params[this.props.idType])
 }

PhotosAPIUtil
export const fetchPhotos = (contentType, id) => {
    return $.ajax({
        url: `/api/${contentType}/${id}/photos`,
        method: "GET"
    })
}
```


### Photos Storage
AllHikes allows users to upload individual or multiple photos for any given hike. These photos are then displayed on the hike page, and are also accessible within a user's profile, where they can see all the photos they have uploaded to the site. This flexibility presented an initial challenge when designing the database schema for this project, as the AWS photos could not simply be stored as direct relationship to an individual table. To solve this, I created a separate table in the database specifically to store each image uploaded to the site. This design also only allows 1 photo to be associated with each row in the photos table, which means that relevant metadata can easily be stored for each photo (e.g. captions), and selections of photos can be queried easily by referencing the foreign keys for hikes and users. Additionally, because the photos are directly associated with a hike or a user, I can initially load hike pages and user profiles without including any of the more taxing photo loading until the user specifically clicks on the tab to display photos. Separating the concerns into different tables and storage ultimately allows the pages to be more performant, more detailed data to be stored, and photo components to be re-used more easily across the site. 

In practice: users can upload multiple photos with individual captions:

![photos feature part 1](/demo/photos_feature_1.gif)




Those photos can then be viewed on that hike page, or in the user's profile along with the other photos they have uploaded to the site: 

![photos feature part 1](/demo/photos_feature_2.gif)

---
### Future Features
* Parks - containing data about the park itself, as well as a filterable list of hikes in that park
* Search - both text and map-based search to find any given hike
