# Scrumptious
A bakery web application, with ReactJS, Redux, and React-Router-Dom

## Initialisation
```
npx create-react-app my-app
npm install redux react-redux
```

## Development
![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/6f1847a3-09a5-44c6-a296-44f7ee21c6de)
<br/>
*Figure 1: File structure*
<br/>

- **Components**: Include reusable single components, that can be called throughout the project.
- **Data**: Dummy JSON data for the website.
- **Features**: Include multiple components and JSX elements to create compound sections and features.
- **Images**: Image assets for the website like icons.
- **Layout**: Page-layout components like navbars and footers.
- **Pages**: Consist of compound features and sections.
- **Redux**: Redux store for the web app, contains the cart object.
- **Styles**: Styles have a variable file that is imported or *Sass* Implementation.

## Features

![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/a58bcae7-cac1-4582-bedf-15f8420383fa)

*Figure 2: Landing Page*

### Responsiveness
- The website is designed to provide optimal user experience across a variety of devices and screen sizes.
- Implemented a responsive navbar with a hamburger menu icon to ensure smooth navigation on smaller screens.
- Utilized `variable.scss` to define common media query breakpoints, making it easier to maintain a consistent responsive design.
- Utilized CSS grid to create flexible grid layouts that adapt to different screen sizes.

![ezgif com-video-to-gif (4)](https://github.com/Eshaan-Y24/bakery/assets/76566992/3bda1cf9-919a-4c82-9a54-4a1d0d1cd1ca)

*Figure 3: Responsive behavior*

### Routing
- Integrated the popular `react-router-dom` library for client-side routing within the React application.
- Implemented nested routes to organize the product pages logically. For example, cakes, breads, and cookies each have their own sub-routes.
- This allows for a clean and intuitive URL structure and seamless navigation between different sections of the website.

![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/66c6d928-a4dc-44d9-928a-66a24399012f)

*Figure 4: Routes and sub-rutes*

### Redux Cart
- Developed a cart feature using Redux to manage the selection and removal of items.
- When adding or deleting items, the cart dynamically updates, reflecting the changes in the total bill of the website.
- The cart state is managed through a cart object in the Redux store, allowing for easy access and modification of the cart data.
- Exposed actions such as `ADD_TO_CART` and `REMOVE_FROM_CART` that can be dispatched to interact with the cart.

![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/c47e75e2-33a9-4fbd-a5b7-8c9edd4f2d04)
![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/0ff07582-acd3-4f87-8286-c4957ebf4135)
![image](https://github.com/Eshaan-Y24/bakery/assets/76566992/eca093ed-fdb2-4529-8668-8e31d4d08e93)

*Figure 5: Add to cart is implemented using a redux store*

### Search Functionality
- Implemented a search feature allowing users to search for bakery items by name or description.
- Utilized a debouncing technique to optimize the search functionality.
- Debouncing helps reduce excessive rerenders and improves performance by delaying the execution of the search function until the user pauses typing.
- This provides a smoother user experience, especially when dealing with fast typing or frequent changes in the search input.

![ezgif com-video-to-gif (5)](https://github.com/Eshaan-Y24/bakery/assets/76566992/f1c6fd81-8c96-42da-bd4b-ec6b287c8d26)

*Figure 6: Search with debounce*
