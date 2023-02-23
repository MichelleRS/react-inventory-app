# React Inventory App

## Table of Contents

- [Description](#description)
- [Project Status](#project-status)
- [Planning](#planning)
- [Problems and Solutions](#problems-and-solutions)
- [Acknowledgements](#acknowledgments)
- [Retrospective](#retrospective)

---

## Description

CRUD app for tracking personal inventory. Developed as a solution for tracking my bulk herbs.

Users can:

- add item to inventory and select stocked value: stocked or low stock
- view inventory sorted by stocked value
- change stocked value
- remove item from inventory

[Back to Table of Contents](#table-of-contents)

## Project Status

In progress:

- MVP app functionality complete
- beginning CSS

[Back to Table of Contents](#table-of-contents)

## Planning

Components:

- Header/
- Main/
  - Auth/ (not signed in)
    - SignIn/
    - SignUp/
  - Inventory/ (signed in users)
    - AddInventory/
    - EditInventory/
      - LowStock/
      - Stocked/
- Footer/

[Back to Table of Contents](#table-of-contents)

## Problems and Solutions

### Auth build

1. > Module not found: Error: Can't resolve '@supabase/supabase-js' in '...'

- Solution: Install Supabase library

2. > Attempted import error: 'Switch' is not exported from 'react-router-dom' (imported as 'Switch').

- Solution: Switch is deprecated in current react-router-dom version (^6.8.1). Install earlier version: npm i react-router-dom@5.30

3. Unable to sign in

- Solution: Sign in method deprecated in Supabase Version 2. Install version 1: npm i @supabase/supabase-js@1.28.5

4. When previewing my app in Netlify, an error pops up after an action is performed. Error reads:
   > Page Not Found. Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.

- Solution: In `public/`, create a `_redirects` file with this line of code: `/*    /index.html    200`
- Source: Top answer from Adwaith on [_Stack Overflow_](https://stackoverflow.com/questions/50752350/page-not-found-when-trying-to-access-a-site-deployed-on-netlify)

[Back to Table of Contents](#table-of-contents)

## Acknowledgments

[Back to Table of Contents](#table-of-contents)

## Retrospective

[Back to Table of Contents](#table-of-contents)
