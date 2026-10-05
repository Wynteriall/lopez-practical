# Team Directory Architecture

## 1. Route Pages

The application utilizes `react-router-dom` to manage client-side navigation without full page reloads.

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home` | Landing page of the application. |
| `/users` | `Users` | Displays a list of all users as cards. Includes a search filter and simulates a network delay. |
| `/users/:id` | `UserDetails` | Displays detailed information about a specific user. |
| `/about` | `About` | Contains a brief explanation of the Team Directory lab activity. |
| `*` | `NotFound` | Catch-all 404 page displayed when a user navigates to an undefined route. |

## 2. Global State Management (React Context)

To avoid prop drilling, we use React Context (`AppContext`) to manage global application state:
* **Favorites**: An array of user IDs that have been favorited. Shared between the `Navbar` (to display the count) and the `UserCard` (to toggle the status).
* **Theme**: A boolean or string representing Light/Dark mode state (`light` or `dark`). Shared between the `Navbar` (toggle switch) and the root layout (applying CSS classes).

## 3. Component Hierarchy

* `App` (Sets up Context Providers and routing)
  * `Navbar` (Displays navigation links, favorite count, theme toggle)
  * `Routes`
    * `Route path="/"` -> `Home`
    * `Route path="/users"` -> `Users`
      * `input` (Search filter)
      * `Loader` (Displayed during 1s delay)
      * `UserCard` (Mapped over filtered users)
        * `Button` (Toggle favorite, View details)
      * `ErrorMessage` (Displayed if no users match search)
    * `Route path="/users/:id"` -> `UserDetails`
    * `Route path="/about"` -> `About`
    * `Route path="*"` -> `NotFound`

## 4. Reusable UI Components

* `Navbar`: Main navigation header. Uses `NavLink` for active styling.
* `Button`: Accepts `label`, `onClick`, `variant` ("primary" | "danger"), and `children`.
* `UserCard`: Displays `name`, `email`, `company`. Accepts `isFavorite` boolean and `onToggleFavorite` function. Includes a view details link.
* `Loader`: Simple visual indicator while fetching users.
* `ErrorMessage`: Simple text component for empty states or "not found" scenarios.

## 5. Data Source

* `src/data/users.js`: A local JS file exporting an array of at least 8 static user objects with the following schema:
  * `id`: Unique Number (1, 2, 3, ...)
  * `name`: String (Full name of the user)
  * `email`: String (Email address)
  * `company`: String (Company name)
  * `role`: String (Job role)
