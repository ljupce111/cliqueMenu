# Project TODOs

## Completed
- [x] Fix cards UI
- [x] Change the JS for the item modal (update for dietary info)
- [x] Fix modal UI
- [x] Remove either the vegan or the vegetarian filter (no need for both)
- [x] Put the correct links in the social icons
- [x] Add the Clique phone number to the site
- [x] Display a message `"No items"` if there are no items in the category
- [x] Add hover effects on cards/buttons
- [x] Add an icon for the iphone store app too
- [x] Option to make an item unavailable (show a warning on the item card that it’s unavailable)
- [x] Add “Extras” category
- [x] Store menu items in JSON files (either in the project folder or hosted externally)
- [x] Add multi-language support
- [x] On mobile, when scrolling through items, only the category buttons and filter buttons stick to the top; the header does not
- [x] Adapt site layout and UI for mobile
- [x] make the cards be horizontali longer when in mobile mode so it can fit more items in the full vh of the phone
- [x] add unavailable items ui
- [x] add all menu items in json
- [x] add a button so when a mobile and tablet user scrolls a little arrow or somekind of a button is added to the screen that takes the user to the top of the page so the user doesn have to scroll to get to the top
- [x] fix: from 760px screen to 1024px the header sticks to the top instead of just the categories and filters
- [x] add correct filters
- [x] fix modal ui for extras and drinks so when u open the modal it doesnt say ingredients dietary its just the name and price
- [x] add a funtion that will check if the item has any ingredients or dietary info and if it doesnt it removes the text from the module
- [x] add fading to the bottom of the page on mobile and tablet mode(add the effect on the ingredients on mobile when they dont fit, description for mobile)
- [x] add fading to the bottom of the page on mobile and tablet mode(add the effect on the ingredients on mobile when they dont fit, description for mobile)
- [x] on mobile and tablet make it so when the desc is too long instead of growing it stayes inside the box and the user can scroll down
- [x] fix bug when clique app module is opened the sites view goes to the top of the page it should stay where it is
- [x] when a module is opened if the user scrolls the background doesnt, when a module is opened the background freezes for better ux
- [x] make it so when the user switches categories it always brings him to the top of the page
- [x] make it so when a user switches categories the filter is selected as all
## Medium / Moderate








      
## future fixes
- [ ] on mobile make the phone sticker not stick at the bottom right (its in view of the footer)make it sit at the bottom right but when the footer pops up it goes up with it(it sticks at the bottom right of #menu)
- [ ] add shading effect where the categories and filters are

Menu App / SmartUI Project Overview
Project Purpose

This project is a modular, flexible menu application designed for cafés, restaurants, or similar businesses. Its goal is to allow business owners to manage menus, track orders, and customize the app’s user interface while giving the developer (admin) centralized control over features, subscriptions, and layouts. The system is designed to be scalable, customizable, and monetizable as a SaaS product.

1️⃣ Item Layouts

Each menu item can have predefined card layouts (ItemCardLayout) for displaying items in a list or grid, and module layouts (ItemModuleLayout) for detailed item views.

Layouts display the same core data (name, price, ingredients, modifiers, etc.) but have different visual styles.

Admin can choose which layout is applied per item, and changing the layout updates all instances automatically.

Optional premium layouts can be offered as add-ons for clients for an extra monthly fee.

2️⃣ Full-Page Theming & App Layouts

The entire app supports predefined page layouts/themes including:

Header

Navigation / menu container

Main content area

Footer

Admin can select a theme for the whole app, and clients can edit text, colors, and branding elements.

Premium themes can be offered as paid upgrades.

3️⃣ Tiered Versions & Subscriptions

The app has tiered versions to suit different client needs:

MVP / V1: Basic menu management and orders

V2: Adds employee management, inventory, analytics, and more advanced features

V3: Adds premium features like custom dashboards, integrations, AI recommendations, and advanced reporting

Clients can mix features from higher tiers into lower versions with custom quotes, giving flexibility in pricing and functionality.

Each tier can include a base layout/theme, with optional add-ons available.

4️⃣ Admin Panel Features

Manage all clients (owners) from a centralized dashboard

Assign subscription version per client (V1, V2, V3)

Select which layouts each client can use (card layouts, module layouts, full-page themes)

Track and manage premium add-ons (optional layouts, themes, or features)

Upgrade or downgrade clients at any time; changes apply instantly to the client interface

5️⃣ Flexible Pricing & Monetization

Base subscription: includes core features and default layouts/themes

Optional premium layouts/themes: small monthly add-on fees ($5–$10/month)

Customizable versions: clients can choose specific features from higher tiers → custom pricing

Supports both one-time setup fees and recurring monthly subscriptions

6️⃣ Technical Approach

Uses component-based frontend frameworks (e.g., React, Vue, or Svelte) for modular UI

All layouts pull from the same core data, ensuring consistency and reducing bugs

Themes and layouts are stored as configurable objects in the database, making it easy to add new templates or customize for individual clients

Admin panel acts as the single source of truth for subscription, layouts, and add-ons

💡 Summary:
This menu app framework is designed to be flexible, scalable, and client-friendly, allowing business owners to choose features, layouts, and themes that match their brand, while giving the developer a centralized system to manage subscriptions, add-ons, and app customization. The architecture supports future expansions, additional premium layouts, and tiered subscription models for maximum monetization.


























