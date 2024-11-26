# Hello Tractor E-commerce application with Django and Vite

This project involves the design and development of a secondary marketplace platform for buying and selling second-hand tractors and agricultural implements. The platform provided a seamless user experience for both buyers and sellers, integrating features like secure registration, intuitive search, filtering options, messaging system and secure payment integration with Paystack.

![plot](./client/src/assets/Screenshot%20from%202024-11-26%2008-09-32.png)

## Team Members
- ### Peter Nakitare

## Tech Sack Used
- `Vite`: React frontend framework
- `Django`: A high level python web framework tht encourages rapid development and clean, pragmatic design
- `Redis`:An in memory database, a memory cache, that can persist data on a disk, allowing fast data access and storage
- `Daphne`: Is a HTTP, HTTP2 and websocketts protocol server for ASGI and ASGI-HTTP, developed to power Django channels
- `Django-Channels`: Is a project that takes django and extends its abilities beyond HTTP-to handle websockets, chat protocols and more. It is built on a python specification called ASGI.
- `Tailwind css`: Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.
- `Reduxjs`: Redux is a predictable state container for javascript applications. Used for managing the state of the application, such as user interaactions, cat=rt functionalities and API responses
- `Djoser` : A python-based custom authentication library
- `DRF REST APIs`: Stateless and scalable APIs, allowing seamless communication between the frontend and backend

## Key Features

 ### Homepage

- User friendly interface showcasing:
     - Featured listings
     - Popular listings
     - Side friendly navigation

## User Registration
    - Secure Sign-Up Options with djoser

        -Email(Integrated with Mailtrap Email delivery)

    - Easy onboarding process for both buyers and sellers

### Registered Users Can 
1. All to Non-Registered Users
2. Add to Cart
4. See the Order Status
5. See Order History
6. Update Profile 
7. Change Password
8. Reset Password

## Tractor Listings
- Sellers can create detailed listings including:
    - Photos
    - Specifications(make, model, year, etc)
    - Loaction and asking price

## Profile Section for both Sellers and buyers
- Sellers and Buyers have their a profile sections with detailed descriptions like:
    - license number
    - profile photo
    - Gender
    - Social Accounts etc

## Secure Payment Integration with Paystack
- Buyers can purchase implements through the website and make transaction to a secure and centralised account incase of any purchase, reducing/eliminating any chances of been conned
- Secure gateway and fast feedbeck response of any purchase made through the website via the registeres email in paystack 

## Order model 
- Buyers can track their purchase implements at the Order page, and a generated receipt is sent through their mail when a purchase is complete

## Order model 
- Buyers can track their purchase implements at the Order page, and a generated receipt is sent through their mail when a purchase is complete

## Comment Section on Post Listings
-  Buyers and sellers can make comments on other user listings

## Admin Panel 
- Tools for platform administratorm:
    - Manage and approve featured listings
    - Oversee every transaction made
    - Maintain platform compliance standard

 ### Admin Users Can
1. Manage Category (Add, Update, Filter and Delete)
2. Manage Products (Add, Update, Filter and Delete)
3. Manage Users (Update, Filter and Delete)
4. Manage Orders (View and Process)

## Challenges 
 #### Deployment of the django application to render
- Dependancy conflicts and django setup on ASGI operations while using the gunicorn server
- Serving of mediafiles at the render backend application, read a documentation that render does not fully support serving of mediafiles with django, recommemdation is to serve mediafiles in a S3 Amazon bucket or user a different backend hosting platform

## Recommendation for the challenges
- Containerise the application using docker and serve the backend the client applications with a load balancer/proxy with nginx or apache to manage requests and for a highly scalable application

## Lessons Learnt

- Deployment of the applications on render, both static and the web service

## Frontend link
- https://render-frontend-kvxa.onrender.com/

## Backend Link Admin panel
- https://render-backend-58to.onrender.com/
    or 
- https://render-backend-58to.onrender.com/admin

## Youtube Link
- https://www.youtube.com/watch?v=8E4uYmEdYZs
