# Quick Order
A simple fullstack app that allows a user scan a QR code to view a menu then proceed to place an order.

[![Coverage Status](https://coveralls.io/repos/github/lateef-OG/quick-order/badge.svg?branch=main)](https://coveralls.io/github/lateef-OG/quick-order?branch=main)

## Built with
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [PostgresSQL](https://postgresql.org)

### How to set up
#### API
The API consists of the following endpoints.
- GET: **api/menu/**
List all menus.
- GET:  **api/menu/:id** 
Get a particular menu with the provided id.
- POST **api/order/** 
Create an order.

###### Installation
Ensure you have Node.js and npm installed.
Also [download](https://www.postgresql.org/download/) and install PostgreSQL.

Clone this repo
```bash
$ git clone https://github.com/lateef-OG/quick-order.git
```
Change directory to the api folder and Install Dependencies
```bash
cd api
npm install
```
Update the database configurations in the `config/config.json` file.
(Optional) if you didn't create a database when setting up postgres, run the following command to create a database based on your `config.json` file.
```bash
npm run db:create
```
Configure the database and populate with some seed data by running the commands below.

```bash
npm run db:migrate
npm run db:seed
```

Now you can start up your server.
```bash
npm start
```

The app should now be running on **http://localhost:5001**

###### Testing
To run tests and view test coverage, run the following command
```bash
npm test
```

#### Mobile application

###### Installation

Clone this repo
```bash
$ git clone https://github.com/lateef-OG/quick-order.git
```
Change directory to the api folder and Install Dependencies
```bash
cd quick_order_mobile
npm install
```

Run the command below to start up the application
```bash
npm start
```

To view the app on your physical device, scan the QR code displayed on your terminal.
For simulator/Emulator, Press `i` for iOS and `a` for Android.
if you don't already have [Expo Go](https://expo.dev/go) installed, following the step above would prompt you to install.

**N.B** Ensure that your physical device and the server are on the same (wifi)network.

###### How to demo
Below are some generated QR codes to test the app functionality
![Fast burgers](frame.png)
![Tina's kitchen](<frame (1).png>)
![Jollof corner](<frame (2).png>)
## Authors
* **Lateef Ogunbadejo**