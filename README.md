## Happeningbrite
[LIVE](https://happening-brite.herokuapp.com/#/)

### Summary 
Happeningbrite is a web application inspired by Eventbrite built using Ruby on Rails utilizing React.js + Redux architecture. It is also a Single-page-application with content delivered via ajax requests to static page.

Happeningbrite allows users to:
* Create and account 
* Log in/Log out
* Plan events
* Edit events
* Promote events 
* Sell/Purchase event tickets
* Save events
* Create/Show profile
* Filter events based on Category or Event Type

### Overall Structure 
**Back end** 

The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

**Front end**

The front end is built completely in React.js/Redux and JavaScript. React's virtual DOM allows for lightning-quick re-rendering without requiring new pages to be sent from the server.

**Libraries** 

* Ruby on Rails 
* PostgreSQL
* React 
* Redux 
* jQuery 
* Gems 
    * Paperclip 
    * Jbuilder 
    * BCrypt
    
### Code Guide 
If you'd like to take a closer look at the code behind Eventbrite, the best folders to link in are: 
* [root.jsx](https://github.com/emilylhansen/eventbrite/blob/master/frontend/components/root.jsx)
    * using React Router to keep UI in sync with the URL 
* [React components](https://github.com/emilylhansen/eventbrite/tree/master/frontend/components)
    * consists of [App](https://github.com/emilylhansen/eventbrite/blob/master/frontend/components/App.jsx) as a top component, [Auth Form](https://github.com/emilylhansen/eventbrite/blob/master/frontend/components/session_form), [Event Show](https://github.com/emilylhansen/eventbrite/blob/master/frontend/components/event_show), and [User Show](https://github.com/emilylhansen/eventbrite/blob/master/frontend/components/user_show).
* [Rails controllers](https://github.com/emilylhansen/eventbrite/tree/master/app/controllers)
* [Api Util](https://github.com/emilylhansen/eventbrite/tree/master/frontend/util)
  * handles all ajax requests 
* [DB Schema](https://github.com/emilylhansen/eventbrite/blob/master/db/schema.rb)
* [Rails Routes](https://github.com/emilylhansen/eventbrite/blob/master/config/routes.rb) 

### Primary Components 
**User Authorization**
* Passwords are digested using the BCrypt gem before being stored. Authentication uses BCrypt to match passwords to password digests. 

**Create/Update profile** 
* User can view saved events and purchased tickets for upcoming events

**Create/Update events**

**Filtering events** 

