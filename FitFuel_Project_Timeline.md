FitFuel — Project Development Timeline
February 1, 2026 to April 15, 2026

This document records the day-by-day development progress of the FitFuel Gym Diet Plan Maker project,
spanning approximately 2.5 months of design, development, testing, and refinement.

---

FEBRUARY 2026

Feb 01 (Sun)
  Project kick-off. Defined the core concept: a gym-focused diet planner with calorie tracking, meal
  planning, and exercise management. Drafted initial project requirements. Listed all proposed modules.

Feb 02 (Mon)
  Researched existing fitness applications (MyFitnessPal, JEFIT, Fitbit). Identified gaps and features
  to differentiate FitFuel. Studied the Mifflin-St Jeor BMR equation and macro calculation formulas.

Feb 03 (Tue)
  Compiled the initial food database list. Sourced nutritional values per 100g for proteins, carbs,
  fats, vegetables, fruits, and dairy. Documented values in a spreadsheet for later integration.

Feb 04 (Wed)
  Busy day — no development work.

Feb 05 (Thu)
  Designed the overall application architecture. Decided on a client-side SPA approach using vanilla
  HTML, CSS, and JavaScript. Chose Firebase Authentication for user management. Planned localStorage
  strategy for per-user data isolation.

Feb 06 (Fri)
  Created the project folder structure. Initialized Git repository. Set up index.html, styles.css, and
  app.js as the three core files. Linked stylesheet and script in the HTML.

Feb 07 (Sat)
  Researched glassmorphism design patterns. Collected color palette references. Decided on Inter font
  from Google Fonts. Sketched a rough wireframe for the sidebar layout and tab-based navigation.

Feb 08 (Sun)
  Busy day — no development work.

Feb 09 (Mon)
  Built the foundational HTML skeleton. Added the sidebar nav structure with links for Dashboard,
  Calculator, Calendar, To-Do, Exercises, and Profile tabs. Added the main content wrapper.

Feb 10 (Tue)
  Began writing the CSS design system. Defined CSS custom properties (variables) for the color palette:
  dark backgrounds, accent cyan, accent green, accent red, accent yellow. Set base font styles.

Feb 11 (Wed)
  Styled the sidebar navigation — glassmorphism card effect, logo area, nav link hover states,
  active tab highlights, and the bottom user info + theme toggle footer section.

Feb 12 (Thu)
  Added ambient background orb animations using CSS keyframes. Implemented the responsive mobile
  hamburger menu and mobile header bar. Tested layout at different viewport widths.

Feb 13 (Fri)
  Busy day — no development work.

Feb 14 (Sat)
  Implemented dark/light theme toggle logic in CSS. Added .light-theme class overrides for all
  background, card, and text color variables. Tested theme switching visually.

Feb 15 (Sun)
  Set up Firebase project (fitfuel-70cb8). Enabled Email/Password and Google OAuth sign-in providers
  in Firebase console. Copied SDK configuration into app.js.

Feb 16 (Mon)
  Built the authentication overlay HTML — glassmorphism login card with email/password fields, login
  button, Google sign-in button, and a link to switch to signup.

Feb 17 (Tue)
  Built the signup form card. Added email, password, and confirm password fields with validation.
  Styled both auth cards with animated background orbs and the FitFuel logo at the top.

Feb 18 (Wed)
  Implemented Firebase authentication logic: email/password login, email/password signup, and Google
  OAuth popup sign-in. Wired up Firebase onAuthStateChanged as the central auth state listener.

Feb 19 (Thu)
  Busy day — no development work.

Feb 20 (Fri)
  Added user-friendly Firebase error message mapping (getFirebaseErrorMsg). Implemented logout
  functionality. Connected auth state to show/hide the main app vs the auth overlay.

Feb 21 (Sat)
  Designed and built the Dashboard tab HTML. Added the 4 summary cards (Calories, Protein, Carbs,
  Fats) each with SVG progress rings. Added the page header with greeting text and date display.

Feb 22 (Sun)
  Busy day — no development work.

Feb 23 (Mon)
  Implemented the Dashboard JavaScript logic (initDashboard, updateDashboard). Wired up SVG ring
  stroke-dashoffset calculations for calorie and macro progress. Added time-based greeting function.

Feb 24 (Tue)
  Built the Water Intake Tracker section in the Dashboard. Created the animated water bottle SVG/CSS
  fill effect. Implemented add, remove, and reset glass buttons with daily auto-reset logic.

Feb 25 (Wed)
  Added Today's Meals list to the Dashboard. Implemented logic to read today's calendar meals and
  display them with individual macro breakdowns and a remove button. State saves to localStorage.

Feb 26 (Thu)
  Started the Calorie Calculator tab. Built the food search bar with typeahead dropdown and the
  category filter chips. Coded the renderFoodGrid function to display food cards in a responsive grid.

Feb 27 (Fri)
  Compiled the complete FOOD_DB array in app.js with 54 food items across 8 categories (Protein,
  Carbs, Fats, Vegetables, Fruits, Dairy, Supplements). Assigned IDs, emojis, and nutritional values.

Feb 28 (Sat)
  Built the Food Detail Modal. Implemented openFoodModal, updateModalCalc, and addFoodToMeal functions.
  Modal shows per-100g values and dynamically recalculates macros based on user-entered portion size.

---

MARCH 2026

Mar 01 (Sun)
  Busy day — no development work.

Mar 02 (Mon)
  Built the Meal Builder panel. Implemented renderMealBuilder to display added items with per-item
  macros, running total calories/protein/carbs/fats, and Save Meal / Clear buttons.

Mar 03 (Tue)
  Implemented the saveMeal function. Meals are saved with a generated ID, name, items array, and
  aggregated macro totals. Added the meal name input field to the Meal Builder card.

Mar 04 (Wed)
  Added the Custom Food section. Built the form for entering name, calories, protein, carbs, and fat
  per 100g. Custom foods are stored in state.customFoods and merged with FOOD_DB for all searches.

Mar 05 (Thu)
  Added the macro pie chart using the Canvas API. Implemented drawPieChart to visualize protein/carbs/
  fat ratio of the current meal. Added a color legend below the chart.

Mar 06 (Fri)
  Busy day — no development work.

Mar 07 (Sat)
  Started the Calendar tab. Built the monthly calendar grid rendering logic (renderCalendar). Added
  month navigation (prev/next arrow buttons) and highlighted today's date.

Mar 08 (Sun)
  Implemented day click functionality. Clicking a calendar day shows the Day Detail Panel on the right
  with that day's meals, workout info, and a dropdown to assign saved meals.

Mar 09 (Mon)
  Built the meal assignment flow. Implemented populateMealSelect and assignMealBtn logic to add a
  saved meal to a specific calendar date. Days with meals now show an indicator dot on the grid.

Mar 10 (Tue)
  Added per-day to-do tasks to the Calendar Day Detail Panel. Implemented renderDayTodos, addDayTodo,
  and toggleDayTodo functions. Each calendar date stores its own independent task list.

Mar 11 (Wed)
  Added the workout info section in the Day Detail Panel. Clicking a date shows the preset workout
  routine for that day of the week, based on the user's current fitness goal preference.

Mar 12 (Thu)
  Busy day — no development work.

Mar 13 (Fri)
  Built the To-Do List tab HTML — input bar, due date picker, priority dropdown, filter chips,
  and the scrollable task list card with stats footer.

Mar 14 (Sat)
  Implemented To-Do List JavaScript (initTodos, addTodo, renderTodos). Tasks have ID, text, priority
  (low/medium/high), due date, completed flag, and creation timestamp.

Mar 15 (Sun)
  Added filter functionality to the To-Do List. Filter chips for All, Active, Completed, High, Medium,
  and Low priority. Implemented completion toggle and individual task deletion.

Mar 16 (Mon)
  Added "Clear Completed" bulk action button. Implemented todo stats display (total count). Added
  priority dot color indicators (red/yellow/green) and due date display per task.

Mar 17 (Tue)
  Busy day — no development work.

Mar 18 (Wed)
  Reviewed and refactored the To-Do and Calendar modules. Fixed edge cases around empty task lists
  and missing calendar dates. Ensured full integration with saveState/loadState.

Mar 19 (Thu)
  Started the Exercise tab. Built the mode toggle (Preset vs Custom Workout). Compiled the full
  EXERCISE_DB array — 48 exercises across 9 muscle groups with difficulty and equipment data.

Mar 20 (Fri)
  Built the 3 weekly workout presets: WORKOUTS_MUSCLE_GAIN, WORKOUTS_FAT_LOSS, WORKOUTS_MAINTAIN.
  Each maps 7 days of the week to specific exercises from the library.

Mar 21 (Sat)
  Busy day — no development work.

Mar 22 (Sun)
  Implemented loadPresetWorkout function. Pressing "Load Today's Workout" reads the current day of
  the week and the user's goal preference, then populates the active workout checklist.

Mar 23 (Mon)
  Built the Exercise Library view for Custom mode. Implemented renderExerciseLibrary with muscle group
  and difficulty filter chips. Exercise cards show emoji, name, sets/reps, equipment, and difficulty.

Mar 24 (Tue)
  Implemented addExerciseToWorkout function. Users can click any exercise card in the library to add
  it to their active workout list. Duplicate detection prevents adding the same exercise twice.

Mar 25 (Wed)
  Built the Active Workout Panel with checklist. Implemented renderActiveWorkout to display each
  exercise as a checkbox item with completion toggle and a remove button.

Mar 26 (Thu)
  Busy day — no development work.

Mar 27 (Fri)
  Added the workout progress bar. It calculates the percentage of completed exercises and animates
  the fill. Added the "Clear Done" and "Reset All" action buttons with their handler functions.

Mar 28 (Sat)
  Added exercise stats display (completed / total exercises count). Implemented exerciseDate tracking
  so the workout checklist resets automatically when a new day begins.

Mar 29 (Sun)
  Busy day — no development work.

Mar 30 (Mon)
  Started the Profile tab. Built the HTML for the Personal Information card (name input, fitness
  goal dropdown with 5 options) and the BMR/TDEE Calculator card.

Mar 31 (Tue)
  Implemented the gender toggle buttons (Male/Female). Built the input fields for Age, Weight (kg),
  Height (cm), and Activity Level dropdown with 5 levels from Sedentary to Extra Active.

---

APRIL 2026

Apr 01 (Wed)
  Busy day — no development work.

Apr 02 (Thu)
  Implemented the core calculateBMR function. Applied the Mifflin-St Jeor equation for both male
  and female formulas. Added goal-based calorie adjustment logic (deficit/surplus/maintain).

Apr 03 (Fri)
  Added the macro split calculation: protein (g/kg based on goal), fat (% of total calories), and
  carbohydrates (caloric remainder). Implemented the BMI calculation with color-coded health label.

Apr 04 (Sat)
  Built the Results card. Displays BMR, TDEE, Target Calories, Protein, Carbs, and Fats with units.
  Added the "Apply as Daily Targets" button to push computed values into state.targets.

Apr 05 (Sun)
  Implemented saveProfileInfo and restoreProfileUI. Profile changes persist across sessions via
  localStorage. Name updates reflect immediately in the sidebar and dashboard greeting.

Apr 06 (Mon)
  Busy day — no development work.

Apr 07 (Tue)
  Full integration and cross-module testing session. Verified that applying BMR targets correctly
  updates the dashboard rings. Verified that goal preference changes update the exercise preset.

Apr 08 (Wed)
  Began expanding the food database. Researched Indian food nutritional values. Added 40 Indian food
  items including Poha, Idli, Dosa, Naan, Butter Chicken, Biryani, and various dals and curries.
  Added the Indian Foods filter chip to the calculator category filters.

Apr 09 (Thu)
  Busy day — no development work.

Apr 10 (Fri)
  CSS polish pass. Refined card spacing, border radii, and glassmorphism blur values. Improved the
  food grid card hover animations. Adjusted progress ring stroke widths and colors for clarity.

Apr 11 (Sat)
  Mobile responsiveness improvements. Tested layout on 375px, 414px, and 768px breakpoints. Fixed
  sidebar open/close animation on mobile. Adjusted food grid to 2 columns on small screens.

Apr 12 (Sun)
  Busy day — no development work.

Apr 13 (Mon)
  Conducted complete functional testing across all 7 modules. Ran 20 test cases covering authentication,
  calorie calculation, meal saving, calendar assignment, to-do management, exercises, and BMR results.
  All tests passed. Documented results in the project test log.

Apr 14 (Tue)
  Wrote full project documentation: Abstract, Table of Contents, Chapters 1 through 7 including
  UML diagrams, flowcharts, system analysis, implementation details, test cases, and future scope.

Apr 15 (Wed)
  Final review and cleanup. Refined the Abstract to 350 words. Reformatted documentation to plain
  text. Created this development timeline. Project submission ready.

---

Summary

  Total Duration         :  75 days (February 1 to April 15, 2026)
  Active Development Days:  ~55 days
  Busy / Rest Days       :  ~20 days
  Total Lines of Code    :  ~4,640 lines (HTML: 803, CSS: 2,779, JS: 1,832+)
  Food Items             :  94 items across 9 categories (including 40 Indian foods)
  Exercise Items         :  48 exercises across 9 muscle groups
  Modules Built          :  7 (Auth, Dashboard, Calculator, Calendar, To-Do, Exercises, Profile)
  Test Cases Run         :  20 (all passed)
