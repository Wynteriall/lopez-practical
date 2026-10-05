# Implementation Plan: Team Directory App (Sliced Delivery)

## Goal Description
Build a barebones React Team Directory application with functionality prioritized over design. The implementation will be delivered in isolated, incremental slices so each milestone can be verified and committed to Git individually.

## Process Rule
* **Continuous Updates**: This plan must be continuously updated whenever a slice gets finished, marking completed milestones and their verification status.

---

## Slice Breakdown (Step-by-Step Milestones)

### Slice 1: Documentation & Dependency Setup [Finished]
* **Goal**: Establish project documentation in the repository and install routing dependencies.
* **Status**: Finished
* **Changes**:
  * Save `architecture.md` and `implementation_plan.md` in repository root.
  * Install `react-router-dom`.
* **Verification**: Verify `package.json` contains `react-router-dom` and the project runs `npm run build` or `npm run dev` cleanly.
* **Stop Point**: Commit to Git.

---

### Slice 2: Local User Data & Base UI Components [Finished]
* **Goal**: Prepare the static dataset and foundational standalone components.
* **Status**: Finished
* **Changes**:
  * `src/data/users.js`: 8 user objects (`id`, `name`, `email`, `company`, `role`).
  * `src/components/Button.jsx`: Props: `label`, `onClick`, `variant` (`primary` | `danger`), and `children`.
  * `src/components/Loader.jsx`: Renders loading indicator.
  * `src/components/ErrorMessage.jsx`: Renders message prop/text.
* **Verification**: Components export properly with correct props.
* **Stop Point**: Commit to Git.

---

### Slice 3: Global Context (Theme & Favorites) [Finished]
* **Goal**: Provide application-level state for theme (dark/light) and favorites array without external APIs.
* **Status**: Finished
* **Changes**:
  * `src/context/AppContext.jsx`: Creates `AppContext` & `AppProvider` managing `theme` and `favorites`.
* **Verification**: Verify provider wraps components and exports custom hook / consumer.
* **Stop Point**: Commit to Git.

---

### Slice 4: Shell, Routes, Navbar & Placeholder Pages [Finished]
* **Goal**: Set up `react-router-dom` routing and navigation shell.
* **Status**: Finished
* **Changes**:
  * Pages: `Home.jsx`, `About.jsx`, `NotFound.jsx`, stub `Users.jsx`, stub `UserDetails.jsx`.
  * `src/components/Navbar.jsx`: Uses `NavLink` with active link styling, shows favorite count from context, theme toggle button.
  * `src/App.jsx`: Sets up `BrowserRouter`, `Routes`, layout theme wrapper.
* **Verification**: Navigate through `/`, `/about`, `/users`, and invalid URLs (`*`). Ensure active links change styles, page does not refresh, theme toggle updates context.
* **Stop Point**: Commit to Git.

---

### Slice 5: UserCard Component & Users Page (Async Load, Search, Favorites)
* **Goal**: Implement the user directory with simulated delay, search filter, document title, and favorite toggling.
* **Status**: Finished
* **Changes**:
  * `src/components/UserCard.jsx`: Props: `name`, `email`, `company`, `isFavorite`, `onToggleFavorite`. Renders `Button` and detail link to `/users/:id`.
  * `src/pages/Users.jsx`:
    * `useEffect` (empty deps) with 1s `setTimeout` setting user state.
    * Controlled search input filtering users by name.
    * `Loader` while loading; `ErrorMessage` ("No users found") if filter matches 0.
    * `document.title` dynamic update: `Users (n)`.
* **Verification**:
  * 1-second delay shows `Loader`.
  * Cards render with accurate info.
  * Searching filters properly in real-time.
  * Favorites count in Navbar increments/decrements when clicking card button.
  * Tab title updates.
* **Stop Point**: Commit to Git.

---

### Slice 6: UserDetails Page (Dynamic Routing & Document Title)
* **Goal**: Implement individual user view with route parameters and not-found handling.
* **Status**: Finished
* **Changes**:
  * `src/pages/UserDetails.jsx`:
    * `useParams` to read `id`.
    * `useEffect` re-running on `id` change to find user.
    * Displays `name`, `email`, `company`, `role`.
    * Shows "User not found" and a back link to `/users` if missing.
    * `document.title` set to user's name when found.
* **Verification**:
  * Navigate from card to `/users/:id`.
  * Verify info displayed and title set.
  * Test invalid ID (e.g., `/users/999`) shows error message and back link.
* **Stop Point**: Commit to Git.
