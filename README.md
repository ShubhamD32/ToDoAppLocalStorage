# **Live URL : https://ShubhamD32.github.io/ToDoAppLocalStorage**

This is a To-Do list application made using React. This is one of the numerous applications that I built while I was learning React JS.

**This project uses local Storage to persist the To-Do list items so that they persist between page reloads on the browser.**

The design for the application was inspired by CodeSpot's video on Youtube. However, that project did not implement any technique to store the data items. 

**The localStorage persistence of the To-Do items is an enhancement I did to make the project suitable for practical use cases.**


* Scope of improvements in the future : 

  * Implement a drag-and-drop functionality to move the To-Do items in a specific order. ([This library](https://react-dnd.github.io/react-dnd/) may be used for this) 
  
  * Add functionality to add items at the start of the array to signify tasks of a higher importance. (Can be implemented by using Array.unshift() method)
  
  * The animation effects may be used with a library other than 'react-flip-move' since this library has some outdated dependencies.

 

# To run this project, follow these steps :

* Clone this project and use `cd` to move into the project directory

* Use `yarn install` to download the dependencies.

* Use `yarn start` to run the project on the dev server.

* Use `yarn build` to generate a production ready version of the project under the build sub-directory of the project directory.
