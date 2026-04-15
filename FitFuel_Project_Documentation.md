FitFuel — Gym Diet Plan Maker
Project Documentation

---

Abstract

FitFuel is a comprehensive, web-based fitness and nutrition management application designed to address the growing challenge faced by gym-goers and health-conscious individuals who struggle to manage their diet, workouts, and daily habits in a single, unified platform. Rather than juggling multiple disconnected tools, users can rely on FitFuel as a one-stop solution that integrates calorie tracking, meal planning, exercise management, and daily task organization into a seamless and intuitive experience.

At its nutritional core, FitFuel implements the scientifically validated Mifflin-St Jeor equation to accurately calculate each user's Basal Metabolic Rate (BMR), Body Mass Index (BMI), and Total Daily Energy Expenditure (TDEE) based on personal metrics such as age, gender, weight, height, and activity level. These calculations drive goal-specific macro targets — whether the user aims for weight loss, muscle gain, or general fitness maintenance — automatically adjusting daily protein, carbohydrate, and fat recommendations accordingly.

The application is built entirely on modern client-side technologies including HTML5, CSS3, and JavaScript (ES6+), with no server infrastructure required beyond Firebase Authentication. Firebase handles secure user registration and login via both email/password credentials and Google OAuth, ensuring that each user's data remains isolated and protected across sessions. All application state, including saved meals, calendar entries, workout history, and personal preferences, is persisted via localStorage keyed by unique Firebase user identifiers.

FitFuel's feature set spans seven core modules: an authentication system, a real-time dashboard with SVG macro progress rings and a water intake tracker, a calorie calculator backed by a database of over 54 foods across eight categories, a monthly meal planning calendar, a to-do task manager with priority levels and filters, an exercise library of 48 exercises across nine muscle groups, and a profile module for BMR computation and target setting.

The user interface follows a premium glassmorphism design aesthetic, featuring soft translucent cards, ambient background orbs, smooth micro-animations, and a fully responsive layout that adapts seamlessly from desktop to mobile. A dark and light theme toggle further personalizes the experience. Together, these elements position FitFuel as a practical, visually engaging, and scientifically grounded tool for anyone committed to taking control of their health and fitness journey.

---

Table of Contents

  Section   Title                                          Page
  -------   -----                                          ----
            Abstract                                       I
            Table of Contents                              II
            List of Figures                                III
            List of Tables                                 IV
  Ch 1      Introduction                                   1
  1.1       Purpose of Project                             1
  1.2       Overview of Project                            1
  1.3       Objective                                      2
  1.4       Scope                                          2
  1.5       Literature Review                              3
  Ch 2      System Analysis                                4
  2.1       Software Requirements                          4
  2.2       Hardware Requirements                          4
  2.3       Functional Requirements                        5
  2.4       Non-Functional Requirements                    5
  2.5       Feasibility Study                              6
  2.6       Project Timeline                               7
  Ch 3      System Design                                  8
  3.1       Overall Architecture                           8
  3.2       UML Diagrams                                   9
  3.3       Database Design                                13
  3.4       Algorithm / Flowchart                          14
  Ch 4      Implementation                                 15
  4.1       Tools and Technologies Used                    15
  4.2       Module Description                             15
  4.3       Code Explanation (Important Modules)           16
  Ch 5      Testing                                        18
  5.1       Testing Strategy                               18
  5.2       Test Cases                                     18
  5.3       Test Results                                   19
  5.4       Performance Analysis                           19
  Ch 6      Results and Discussion                         20
  6.1       Output Screens                                 20
  6.2       Result Analysis                                21
  Ch 7      Conclusion and Future Scope                    22
  7.1       Conclusion                                     22
  7.2       Future Enhancements                            22

---

List of Figures

  Figure No.   Title
  ----------   -----
  Fig 3.1      Overall System Architecture Diagram
  Fig 3.2      Use Case Diagram
  Fig 3.3      Class Diagram
  Fig 3.4      Sequence Diagram — Meal Creation Flow
  Fig 3.5      Activity Diagram — User Workflow
  Fig 3.6      Entity Relationship Diagram (Database Design)
  Fig 3.7      Flowchart — BMR/BMI Calculation Algorithm
  Fig 6.1      Login / Signup Screen
  Fig 6.2      Dashboard Screen
  Fig 6.3      Calorie Calculator Screen
  Fig 6.4      Meal Calendar Screen
  Fig 6.5      To-Do List Screen
  Fig 6.6      Exercises Screen
  Fig 6.7      Profile & BMR Calculator Screen

---

List of Tables

  Table No.    Title
  ---------    -----
  Table 2.1    Software Requirements
  Table 2.2    Hardware Requirements
  Table 2.3    Functional Requirements
  Table 2.4    Non-Functional Requirements
  Table 2.5    Project Timeline (Gantt Chart)
  Table 3.1    Food Database Schema
  Table 3.2    Exercise Database Schema
  Table 3.3    Application State Schema
  Table 4.1    Tools and Technologies
  Table 5.1    Test Cases and Results

---

CHAPTER 1: INTRODUCTION

1.1 Purpose of Project

The purpose of FitFuel is to provide gym-goers and fitness enthusiasts with an all-in-one, accessible, and user-friendly web application for managing their diet and exercise routines. Many individuals struggle to maintain consistent fitness progress due to the complexity of tracking calories, macronutrients, and workout plans across multiple tools. FitFuel consolidates these needs into a single, cohesive platform that:

- Eliminates the need for multiple fitness apps by combining meal planning, calorie tracking, workout management, and task organization.
- Provides scientifically-backed calculations (Mifflin-St Jeor equation) for personalized nutritional targets.
- Offers BMI-driven workout and diet recommendations that dynamically adjust based on user body composition.
- Enables persistent, per-user data storage so progress is never lost across sessions.

1.2 Overview of Project

FitFuel is a single-page web application built with modern web technologies (HTML5, CSS3, JavaScript ES6+) and Firebase Authentication. The application follows a client-side architecture where all computation, rendering, and state management occur in the browser, with Firebase handling user authentication (email/password and Google OAuth).

Key modules include:

1. Authentication Module — Login, signup, and Google sign-in via Firebase Auth.
2. Dashboard Module — Real-time daily overview with calorie/macro progress rings, water tracker, and today's meal summary.
3. Calorie Calculator Module — Food database with 54+ items across 8 categories, search/filter functionality, custom food creation, meal builder with macro pie chart.
4. Meal Calendar Module — Monthly calendar view with meal assignment, daily workout info, and per-day to-do tasks.
5. To-Do List Module — Task management with priority levels (low/medium/high), due dates, filters, and completion tracking.
6. Exercise Module — Library of 48 exercises across 9 muscle groups with 3 difficulty levels; preset daily workouts for 3 fitness goals (Muscle Gain, Fat Loss, Stay Fit); custom workout builder with progress tracking.
7. Profile Module — Personal info management, BMR/BMI/TDEE calculator, macro target computation, and goal-based calorie adjustments.

1.3 Objective

The primary objectives of FitFuel are:

1. To design and develop a responsive web application that serves as a complete fitness and nutrition management tool.
2. To implement accurate BMR, BMI, and TDEE calculations using the Mifflin-St Jeor equation for personalized dietary recommendations.
3. To provide a comprehensive food database with macro-nutrient information and support for custom food entries.
4. To enable meal planning via an interactive calendar with meal assignment and daily nutritional summaries.
5. To offer pre-built workout routines tailored to fitness goals (muscle gain, fat loss, maintenance) with exercise tracking.
6. To implement secure user authentication using Firebase (email/password + Google OAuth) to support multi-user data isolation.
7. To deliver a premium, visually stunning user interface with glassmorphism design, dark/light theme toggle, and smooth animations.
8. To ensure cross-device compatibility through responsive design for desktop and mobile browsers.

1.4 Scope

In Scope:
- User registration and authentication (email/password, Google OAuth) via Firebase.
- Calorie and macronutrient calculation for 54+ foods with adjustable portion sizes.
- Custom food creation with user-defined nutritional values.
- Meal building, saving, and assignment to calendar dates.
- Monthly meal calendar with navigation, daily meal view, and per-day to-do tasks.
- BMR, BMI, and TDEE calculations with goal-based macro splitting.
- Daily water intake tracking (0–12 glasses, auto-reset daily).
- To-do list with priority levels, due dates, completion status, and filtering.
- Exercise library (48 exercises, 9 muscle groups, 3 difficulty levels).
- Preset daily workout plans for 3 fitness goals with 7-day rotation.
- Custom workout builder with exercise progress tracking.
- Dark/light theme toggle with localStorage persistence.
- Per-user data persistence via localStorage keyed by Firebase UID.

Out of Scope:
- Server-side data storage or cloud database synchronization.
- Social features (sharing meals, community forums, leaderboards).
- Real-time AI-powered meal suggestions or chatbot integration.
- Native mobile application (iOS/Android) versions.
- Integration with wearable devices or fitness trackers.
- Payment or subscription-based premium features.

1.5 Literature Review

The development of FitFuel was informed by research and analysis of existing fitness and nutrition applications, as well as established scientific formulas used in dietetics.

1. Mifflin-St Jeor Equation (1990):
The Mifflin-St Jeor equation is widely considered the most accurate formula for estimating BMR. Studies by Mifflin et al. demonstrated that this equation outperforms the Harris-Benedict equation, particularly for overweight and obese individuals. FitFuel implements this formula as:
- Males: BMR = (10 x weight_kg) + (6.25 x height_cm) - (5 x age) + 5
- Females: BMR = (10 x weight_kg) + (6.25 x height_cm) - (5 x age) - 161

2. MyFitnessPal (Under Armour):
A leading calorie-counting app with a database of millions of foods. FitFuel draws inspiration from its food search and meal logging features but differentiates itself by being fully client-side with no API dependencies.

3. Fitbit & Google Fit:
Wearable-connected platforms that integrate activity tracking with nutrition. FitFuel provides workout tracking without requiring hardware, making it more accessible.

4. JEFIT & Strong (Workout Trackers):
These apps focus on exercise logging with set/rep tracking. FitFuel combines this with nutrition planning, offering a holistic approach rather than workout-only functionality.

5. Firebase Authentication (Google):
Firebase provides a robust, scalable authentication service supporting multiple sign-in methods. FitFuel leverages Firebase Auth's email/password and Google OAuth capabilities for secure, hassle-free user management.

---

CHAPTER 2: SYSTEM ANALYSIS

2.1 Software Requirements

  Component                   Requirement
  ---------                   -----------
  Operating System            Windows 10/11, macOS, Linux (any OS with a modern browser)
  Web Browser                 Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+, Safari 14+
  Runtime                     No server runtime required (fully client-side)
  Authentication              Firebase Authentication SDK v10.12.2 (loaded via CDN)
  Font Service                Google Fonts (Inter typeface, weights 300–800)
  Code Editor (Development)   VS Code, Sublime Text, or any text editor
  Version Control             Git / GitHub

2.2 Hardware Requirements

  Component    Minimum                        Recommended
  ---------    -------                        -----------
  Processor    Dual-core 1.6 GHz              Quad-core 2.4 GHz+
  RAM          2 GB                           4 GB+
  Storage      10 MB (application files)      50 MB (with cache/localStorage)
  Display      1024x768 resolution            1920x1080 Full HD
  Network      Internet connection             Broadband connection
  Input        Keyboard, Mouse/Touchscreen    Keyboard, Mouse

2.3 Functional Requirements

  ID      Requirement              Description
  --      -----------              -----------
  FR-01   User Authentication      Users can register and log in using email/password or Google OAuth via Firebase.
  FR-02   Calorie Calculation      Users can search/filter foods, set portion sizes, and view calculated macros.
  FR-03   Meal Building            Users can add multiple food items to build a meal, name it, and save it.
  FR-04   Custom Foods             Users can create custom food items with user-defined nutritional values.
  FR-05   Meal Calendar            Users can assign saved meals to calendar dates and view daily nutritional summaries.
  FR-06   BMR/BMI/TDEE Calculator  Users can input personal stats to calculate BMR, BMI, TDEE, and macro targets.
  FR-07   Water Tracking           Users can log daily water intake (glasses consumed) with visual feedback.
  FR-08   To-Do List               Users can add, complete, delete, and filter tasks with priority levels.
  FR-09   Exercise Library         Users can browse 48 exercises filtered by muscle group and difficulty.
  FR-10   Preset Workouts          System provides daily workout presets based on the user's fitness goal.
  FR-11   Custom Workouts          Users can build custom workouts by selecting exercises from the library.
  FR-12   Theme Toggle             Users can switch between dark and light themes.
  FR-13   Data Persistence         All user data persists across sessions via localStorage keyed by user UID.

2.4 Non-Functional Requirements

Security
- User passwords are handled exclusively by Firebase Authentication; they are never stored or processed client-side.
- Firebase Auth uses industry-standard security practices including rate limiting (handles auth/too-many-requests).
- User data is isolated by Firebase UID — each user's localStorage key is unique (fitfuel_data_{uid}).
- XSS protection is implemented via the escapeHtml() utility function for user-generated content.

Reliability
- The application gracefully handles missing or corrupt localStorage data with fallback defaults.
- Water intake and exercise data auto-reset daily to prevent stale data accumulation.
- Firebase Auth state listener (onAuthStateChanged) ensures consistent authentication state.
- Error messages are user-friendly for all Firebase authentication error codes.

Usability
- Premium glassmorphism UI with Inter font for a clean, modern aesthetic.
- Responsive design supporting desktop (sidebar navigation) and mobile (hamburger menu).
- Toast notifications provide real-time feedback for all user actions.
- Contextual empty states guide users on what actions to take.
- Time-based greetings (Good Morning/Afternoon/Evening/Night) create a personalized experience.

Scalability
- Modular JavaScript architecture with separated initialization functions per module.
- Food and exercise databases are structured as extensible arrays of objects.
- Custom foods feature allows unlimited user-created items.
- The calendar system supports navigation across any month/year.
- localStorage-based storage can be migrated to a cloud database (e.g., Firestore) without architectural changes.

2.5 Feasibility Study

Technical Feasibility
The project uses well-established web technologies (HTML5, CSS3, ES6+ JavaScript) and Firebase Authentication, all of which are mature and widely supported. No server infrastructure is required beyond Firebase's free-tier authentication service. The application runs entirely in the browser, minimizing deployment complexity. Verdict: Technically Feasible.

Operational Feasibility
The target users (gym-goers, fitness enthusiasts) are familiar with mobile and web applications. The interface follows established UX patterns (sidebar navigation, card-based layouts, modals) that minimize the learning curve. Toast notifications and empty-state guidance ensure users understand available actions. Verdict: Operationally Feasible.

Economic Feasibility
Development uses entirely free and open-source tools. Firebase Authentication provides a generous free tier (50K monthly active users). Google Fonts are free. No server hosting costs are required when deploying as a static site (free on platforms like GitHub Pages, Netlify, or Vercel). Verdict: Economically Feasible.

Schedule Feasibility
The project scope is well-defined with clear module boundaries. A single developer can implement all features within 3–4 weeks using an iterative development approach. Verdict: Schedule Feasible.

2.6 Project Timeline

  Phase    Duration   Tasks
  -----    --------   -----
  Week 1   7 days     Requirements gathering, UI/UX design, project setup, HTML structure
  Week 2   7 days     Core CSS (glassmorphism theme, responsive layout), Firebase Auth integration
  Week 3   7 days     Dashboard, Calorie Calculator, Meal Builder, Calendar modules
  Week 4   7 days     To-Do List, Exercise Library, Profile/BMR Calculator, Testing & Polish

---

CHAPTER 3: SYSTEM DESIGN

3.1 Overall Architecture

Fig 3.1: Overall System Architecture Diagram (Text Representation)

┌──────────────────────────────────────────────────────────────┐
|                      CLIENT (Browser)                        |
|  ┌─────────────────────────────────────────────────────────┐ |
|  |                    index.html                           | |
|  |  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐  | |
|  |  |   Auth   | |Dashboard | |Calculator| | Calendar  |  | |
|  |  | Overlay  | |   Tab    | |   Tab    | |   Tab     |  | |
|  |  └──────────┘ └──────────┘ └──────────┘ └───────────┘  | |
|  |  ┌──────────┐ ┌──────────┐ ┌──────────┐                | |
|  |  |  To-Do   | |Exercises | | Profile  |                | |
|  |  |   Tab    | |   Tab    | |   Tab    |                | |
|  |  └──────────┘ └──────────┘ └──────────┘                | |
|  └─────────────────────────────────────────────────────────┘ |
|  ┌─────────────┐  ┌────────────────┐  ┌──────────────────┐  |
|  |  styles.css  |  |    app.js      |  |  localStorage    |  |
|  |  (2779 lines)|  |  (1832 lines)  |  |  (Per-user data) |  |
|  └─────────────┘  └────────────────┘  └──────────────────┘  |
└──────────────────────┬───────────────────────────────────────┘
                       | HTTPS (CDN)
          ┌────────────┴────────────┐
          |   Firebase Auth SDK     |
          |   (v10.12.2 compat)     |
          |   - Email/Password      |
          |   - Google OAuth        |
          └────────────┬────────────┘
                       |
          ┌────────────┴────────────┐
          |   Firebase Cloud        |
          |   (Authentication)      |
          └─────────────────────────┘

The architecture follows a client-side SPA (Single Page Application) pattern with tab-based navigation. All UI rendering, state management, and business logic reside in the browser. Firebase is used exclusively for authentication; all application data is stored in the browser's localStorage.

3.2 UML Diagrams

3.2.1 Use Case Diagram

Fig 3.2: Use Case Diagram (Text Representation)

                        ┌─────────────────────────────────────┐
                        |           FitFuel System            |
                        |                                     |
   ┌──────┐            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Register / Login         |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | View Dashboard           |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Search/Filter Foods      |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   | User |───────────>|  | Build & Save Meals       |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Plan Meals on Calendar   |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Track Water Intake       |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Manage To-Do Tasks       |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Browse/Do Exercises      |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Calculate BMR/BMI/TDEE   |        |
   |      |            |  └─────────────────────────┘        |
   |      |            |  ┌─────────────────────────┐        |
   |      |───────────>|  | Toggle Theme             |        |
   └──────┘            |  └─────────────────────────┘        |
                        |                                     |
                        |         ┌───────────────┐           |
                        |         |  Firebase Auth |           |
                        |         |   (External)   |           |
                        |         └───────────────┘           |
                        └─────────────────────────────────────┘

3.2.2 Class Diagram

Fig 3.3: Class Diagram (Text Representation)

┌──────────────────────────────┐     ┌───────────────────────────────┐
|          FoodItem            |     |         ExerciseItem          |
├──────────────────────────────┤     ├───────────────────────────────┤
| + id: number                 |     | + id: string                  |
| + name: string               |     | + name: string                |
| + category: string           |     | + muscle: string              |
| + emoji: string              |     | + difficulty: string          |
| + cal: number                |     | + equipment: string           |
| + protein: number            |     | + sets: number                |
| + carbs: number              |     | + reps: string                |
| + fat: number                |     | + emoji: string               |
└──────────────────────────────┘     | + description: string         |
                                     └───────────────────────────────┘
┌──────────────────────────────┐     ┌───────────────────────────────┐
|        MealItem              |     |        TodoItem               |
├──────────────────────────────┤     ├───────────────────────────────┤
| + foodId: number             |     | + id: string                  |
| + name: string               |     | + text: string                |
| + amount: number             |     | + priority: string            |
| + cal: number                |     | + completed: boolean          |
| + protein: number            |     | + createdAt: string           |
| + carbs: number              |     | + dueDate: string             |
| + fat: number                |     └───────────────────────────────┘
└──────────────────────────────┘
┌──────────────────────────────┐     ┌───────────────────────────────┐
|        SavedMeal             |     |        UserProfile            |
├──────────────────────────────┤     ├───────────────────────────────┤
| + id: string                 |     | + name: string                |
| + name: string               |     | + gender: string              |
| + items: MealItem[]          |     | + age: number                 |
| + totalCal: number           |     | + weight: number              |
| + totalProt: number          |     | + height: number              |
| + totalCarb: number          |     | + activityLevel: number       |
| + totalFat: number           |     | + goal: string                |
| + createdAt: string          |     | + preference: string          |
└──────────────────────────────┘     └───────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
|                       AppState                                   |
├──────────────────────────────────────────────────────────────────┤
| + currentTab: string            + exercises: Array               |
| + mealItems: MealItem[]         + exerciseMode: string           |
| + savedMeals: SavedMeal[]       + exerciseFilter: string         |
| + calendarMeals: Object         + exerciseDiffFilter: string     |
| + todos: TodoItem[]             + exerciseDate: string           |
| + waterIntake: number           + calendarTodos: Object          |
| + waterDate: string             + pendingCalendarDate: string    |
| + profile: UserProfile          + foodFilter: string             |
| + targets: MacroTargets         + todoFilter: string             |
| + calendarMonth: number         + customFoods: FoodItem[]        |
| + calendarYear: number                                           |
| + selectedDate: string                                           |
├──────────────────────────────────────────────────────────────────┤
| + saveState()    + loadState()    + resetState()                  |
└──────────────────────────────────────────────────────────────────┘

3.2.3 Sequence Diagram

Fig 3.4: Sequence Diagram — Meal Creation Flow (Text Representation)

User          UI (index.html)      app.js            localStorage
 |                |                   |                    |
 |  Click food    |                   |                    |
 |--------------->|  openFoodModal()  |                    |
 |                |------------------>|                    |
 |                |  Show modal       |                    |
 |                |<------------------|                    |
 |  Set amount    |                   |                    |
 |--------------->| updateModalCalc() |                    |
 |                |------------------>|                    |
 |                |  Update macros    |                    |
 |                |<------------------|                    |
 |  Click "Add"   |                   |                    |
 |--------------->| addFoodToMeal()   |                    |
 |                |------------------>|                    |
 |                | renderMealBuilder()|                    |
 |                |<------------------|                    |
 |  Click "Save"  |                   |                    |
 |--------------->|   saveMeal()      |                    |
 |                |------------------>|                    |
 |                |                   |  saveState()       |
 |                |                   |-------------------<|
 |                |                   |    saved            |
 |                |                   |<-------------------|
 |                |  showToast()      |                    |
 |                |<------------------|                    |

3.2.4 Activity Diagram

Fig 3.5: Activity Diagram — User Workflow (Text Representation)

        ┌─────────┐
        |  Start  |
        └────┬────┘
             v
     ┌───────────────┐
     |  Open FitFuel  |
     └───────┬───────┘
             v
     ┌───────────────┐     No     ┌──────────────┐
     |  Logged In?   |---------->| Login/Signup  |
     └───────┬───────┘           └──────┬───────┘
        Yes  |                          |
             v                          v
     ┌───────────────┐         ┌───────────────┐
     | Load Dashboard |<--------|  Auth Success |
     └───────┬───────┘         └───────────────┘
             v
     ┌───────────────────────────────┐
     |  Choose Module:               |
     |  ┌──────────┐ ┌──────────┐   |
     |  |Calculator| | Calendar |   |
     |  └──────────┘ └──────────┘   |
     |  ┌──────────┐ ┌──────────┐   |
     |  |  To-Do   | |Exercises |   |
     |  └──────────┘ └──────────┘   |
     |  ┌──────────┐                |
     |  | Profile  |                |
     |  └──────────┘                |
     └───────────┬──────────────────┘
                 v
     ┌───────────────────┐
     |  Perform Actions  |
     |  (CRUD operations)|
     └───────────┬───────┘
                 v
     ┌───────────────────┐
     |  Auto-Save to     |
     |  localStorage     |
     └───────────┬───────┘
                 v
         ┌─────────┐
         |   End   |
         └─────────┘

3.3 Database Design

FitFuel uses localStorage as its data persistence layer. Data is stored as a JSON-serialized object keyed by fitfuel_data_{firebase_uid}.

Fig 3.6: Entity Relationship Diagram (Text Representation)

┌─────────────┐       ┌──────────────┐       ┌─────────────────┐
|  UserProfile |       |  SavedMeal   |       |   CalendarDay   |
├─────────────┤       ├──────────────┤       ├─────────────────┤
| name         |       | id (PK)      |       | date (PK)       |
| gender       |  1:N  | name         |  N:M  | mealIds[]       |
| age          |------>| items[]      |<----->|                 |
| weight       |       | totalCal     |       └─────────────────┘
| height       |       | totalProt    |
| activityLevel|       | totalCarb    |       ┌─────────────────┐
| goal         |       | totalFat     |       |    TodoItem     |
| preference   |  1:N  | createdAt    |       ├─────────────────┤
└─────────────┘------>└──────────────┘       | id (PK)         |
                                              | text            |
┌─────────────┐       ┌──────────────┐       | priority        |
|  FoodItem   |       | ExerciseItem |       | completed       |
├─────────────┤       ├──────────────┤       | createdAt       |
| id (PK)      |       | id (PK)      |       | dueDate         |
| name         |       | name         |       └─────────────────┘
| category     |       | muscle       |
| cal          |       | difficulty   |       ┌─────────────────┐
| protein      |       | equipment    |       |  MacroTargets   |
| carbs        |       | sets         |       ├─────────────────┤
| fat          |       | reps         |       | calories        |
| emoji        |       | description  |       | protein         |
└─────────────┘       | emoji        |       | carbs           |
                       └──────────────┘       | fats            |
                                              └─────────────────┘

Table 3.1: Food Database Schema — 54 items across categories: Protein (14), Carbs (10), Fats (9), Vegetables (8), Fruits (6), Dairy (5), Supplements (4). Each item stores per-100g nutritional values.

Table 3.2: Exercise Database Schema — 48 exercises across: Chest (6), Triceps (6), Back (6), Biceps (6), Shoulders (6), Legs (6), Abs (6), Cardio (6). Equipment: Bodyweight, Yoga Mat, Dumbbells, Exercise Ball, Skipping Rope.

3.4 Algorithm / Flowchart

Fig 3.7: Flowchart — BMR/BMI Calculation Algorithm (Text Representation)

              ┌──────────────┐
              |    START     |
              └──────┬───────┘
                     v
          ┌──────────────────────┐
          | Input: age, weight,  |
          | height, gender,      |
          | activity, goal       |
          └──────────┬───────────┘
                     v
          ┌──────────────────────┐
          | BMI = weight /       |
          |       (height/100)^2 |
          └──────────┬───────────┘
                     v
          ┌──────────────────────┐
          | Gender == male?      |
          └────┬────────────┬────┘
           Yes |            | No
               v            v
    ┌────────────────┐ ┌────────────────┐
    | BMR = 10xW +   | | BMR = 10xW +   |
    | 6.25xH - 5xA   | | 6.25xH - 5xA   |
    | + 5            | | - 161          |
    └────────┬───────┘ └────────┬───────┘
             └────────┬─────────┘
                      v
          ┌──────────────────────┐
          | TDEE = BMR x activity|
          └──────────┬───────────┘
                     v
          ┌──────────────────────┐
          | Goal == weight-loss? |--Yes--> targetCal = TDEE - 500
          └──────────┬───────────┘         protMult = 2.2, fat% = 20%
                     | No
                     v
          ┌──────────────────────┐
          | Goal == muscle-gain? |--Yes--> targetCal = TDEE + 300
          └──────────┬───────────┘         protMult = 1.8, fat% = 25%
                     | No
                     v
          targetCal = TDEE (maintain)
          protMult = 2.0, fat% = 25%
                     |
                     v
          ┌──────────────────────┐
          | proteinG = W x mult  |
          | fatG = (cal x fat%)/9|
          | carbG = remainder/4  |
          └──────────┬───────────┘
                     v
              ┌──────────────┐
              |     END      |
              └──────────────┘

---

CHAPTER 4: IMPLEMENTATION

4.1 Tools and Technologies Used

  Tool/Technology     Purpose                                                   Version
  ---------------     -------                                                   -------
  HTML5               Application structure and semantic markup                  5
  CSS3                Styling, glassmorphism, animations, responsive design      3
  JavaScript (ES6+)   Application logic, DOM manipulation, state management      ES2015+
  Firebase Auth       User authentication (email/password, Google OAuth)         10.12.2
  Google Fonts        Typography (Inter typeface)                                —
  Canvas API          Macro pie chart rendering                                  Native
  localStorage API    Per-user data persistence                                  Native
  Git                 Version control                                            —

4.2 Module Description

Module 1: Authentication (initAuth)
Handles user login, signup, and Google OAuth sign-in using Firebase Auth. Manages auth state transitions via onAuthStateChanged listener. Displays login/signup overlay with card-flip animation.

Module 2: Dashboard (initDashboard, updateDashboard)
Renders daily nutrition overview with SVG progress rings for calories, protein, carbs, and fats. Includes water tracker (add/remove/reset glasses) and today's meals list with delete capability.

Module 3: Calorie Calculator (initCalculator, renderFoodGrid)
Provides food search with typeahead results, category filter chips (8 categories), clickable food grid, portion-size modal with live macro calculations, custom food creation form, and a meal builder with save/clear functionality. Includes a Canvas-drawn macro pie chart.

Module 4: Calendar (initCalendar, renderCalendar, renderDayDetail)
Displays a monthly calendar grid with meal indicators, day-of-week workout info, per-day to-do tasks, and meal assignment from saved meals. Supports month navigation and links to the calculator for adding meals on specific dates.

Module 5: To-Do List (initTodos, addTodo, renderTodos)
Full task management with text input, due date picker, priority selector (low/medium/high), filter chips (all/active/completed/by-priority), completion toggle, delete button, and "clear completed" bulk action.

Module 6: Exercises (initExercises, renderExerciseLibrary, renderActiveWorkout)
Two modes: Preset (loads daily workout based on fitness goal and day of week) and Custom (browse library with muscle group + difficulty filters, add individual exercises). Active workout panel with checklist, progress bar, completion tracking, and exercise stats.

Module 7: Profile (initProfile, calculateBMR)
Personal information form (name, fitness goal), BMR/TDEE calculator with gender toggle, age/weight/height inputs, activity level selector. Computes BMI with color-coded health recommendation, goal-based macro splitting, and "Apply as Daily Targets" feature.

4.3 Code Explanation (Important Modules)

BMR & Macro Calculation (calculateBMR function — app.js, lines 1483–1575)
This is the core algorithm of FitFuel. It implements the Mifflin-St Jeor equation and computes personalized macro targets:

    // Mifflin-St Jeor BMR Calculation
    if (gender === 'male') {
        bmr = (10 x weight) + (6.25 x height) - (5 x age) + 5;
    } else {
        bmr = (10 x weight) + (6.25 x height) - (5 x age) - 161;
    }
    const tdee = Math.round(bmr x activity);

    // Goal-based calorie adjustment
    if (goal === 'weight-loss') {
        targetCal = Math.round(tdee - 500);     // 500 cal deficit
        proteinMultiplier = 2.2;                 // High protein
        fatPercentage = 0.20;                    // Lower fat
    } else if (goal === 'muscle-gain') {
        targetCal = Math.round(tdee + 300);     // 300 cal surplus
        proteinMultiplier = 1.8;
        fatPercentage = 0.25;
    }

    // Macro calculation
    const proteinG = Math.round(weight x proteinMultiplier);
    const fatG = Math.round((targetCal x fatPercentage) / 9);
    const carbG = Math.max(0, Math.round((targetCal - proteinGx4 - fatGx9) / 4));

Workout Preset System (getWorkoutForDay — app.js, lines 143–185)
Three complete 7-day workout plans are defined for Muscle Gain, Fat Loss, and Stay Fit goals. Each day maps to specific exercises from the 48-exercise library:

    function getWorkoutForDay(dayOfWeek) {
        const pref = state.profile.preference || 'stay-fit';
        if (pref === 'muscle-gain') return WORKOUTS_MUSCLE_GAIN[dayOfWeek];
        if (pref === 'weight-loss') return WORKOUTS_FAT_LOSS[dayOfWeek];
        return WORKOUTS_MAINTAIN[dayOfWeek];
    }

Per-User Data Isolation (getStorageKey, saveState, loadState — app.js, lines 427–477)
Each authenticated user's data is stored under a unique localStorage key derived from their Firebase UID, ensuring complete data isolation between users on the same browser:

    function getStorageKey() {
        return fitfuel_data_{currentUser || 'anonymous'};
    }

---

CHAPTER 5: TESTING

5.1 Testing Strategy

The testing strategy for FitFuel follows a multi-layered approach:

1. Unit Testing — Individual functions tested in isolation (BMR calculation, macro splitting, date utilities).
2. Integration Testing — Module interactions tested (e.g., saving a meal and verifying it appears in the calendar).
3. UI/Functional Testing — Manual testing of all user-facing features via browser interaction.
4. Cross-Browser Testing — Verified on Chrome, Firefox, Edge, and Safari.
5. Responsive Testing — Tested on desktop (1920px), tablet (768px), and mobile (375px) viewports.

5.2 Test Cases

  TC ID   Module       Test Case                          Input                    Expected Output                          Status
  -----   ------       ---------                          -----                    ---------------                          ------
  TC-01   Auth         Login with valid email/password     Valid credentials         Auth overlay hides, dashboard loads      Pass
  TC-02   Auth         Login with invalid password         Wrong password           Toast: "Incorrect password"              Pass
  TC-03   Auth         Signup with mismatched passwords    pwd != confirm           Toast: "Passwords do not match"          Pass
  TC-04   Auth         Google OAuth sign-in                Google account           Auth overlay hides, name displayed       Pass
  TC-05   Calculator   Search for "chicken"                "chicken"                Shows Chicken Breast, Chicken Thigh      Pass
  TC-06   Calculator   Add food with 200g portion          200g chicken             330 kcal, 62g protein displayed          Pass
  TC-07   Calculator   Save meal with items                2+ food items            Meal appears in saved meals list         Pass
  TC-08   Calculator   Add custom food                     Name, macros             Food appears in grid and search          Pass
  TC-09   Calendar     Assign meal to date                 Select meal + date       Meal indicator shown on calendar         Pass
  TC-10   Calendar     Navigate months                     Click prev/next          Correct month/year displayed             Pass
  TC-11   Dashboard    Water tracker increment             Click "Add Glass"        Water level animates, count updates      Pass
  TC-12   Dashboard    Daily auto-reset                    New day                  Water and exercises reset to 0            Pass
  TC-13   Todo         Add task with high priority          Task text + High         Task appears with red indicator          Pass
  TC-14   Todo         Filter by completed                 Click "Completed"        Only completed tasks shown               Pass
  TC-15   Profile      BMR calculation (male)              25y, 70kg, 175cm         BMR approx 1674 kcal                     Pass
  TC-16   Profile      BMI classification                  BMI > 25                 "Overweight" label in red                Pass
  TC-17   Exercises    Load preset (Muscle Gain, Monday)   Goal: Muscle Gain        Chest & Triceps Heavy workout loaded     Pass
  TC-18   Exercises    Mark exercise complete               Click checkbox           Progress bar updates, stats change       Pass
  TC-19   Theme        Toggle to light mode                Click toggle             Light theme applied, saved               Pass
  TC-20   Data         Logout and re-login                 Logout then Login        All previous data restored               Pass

5.3 Test Results

All 20 test cases passed successfully. Key observations:
- Firebase authentication handles all error cases gracefully with user-friendly messages.
- The BMR calculation produces results consistent with established medical calculators.
- Data persistence across sessions is reliable with no data loss observed after multiple login/logout cycles.
- The responsive layout adapts correctly across all tested viewport sizes.
- Theme toggle state persists independently of user data.

5.4 Performance Analysis

  Metric                          Value
  ------                          -----
  Page Load Time (initial)        < 1.5 seconds
  Firebase Auth Response          < 2 seconds
  DOM Render (Dashboard)          < 100ms
  localStorage Read/Write         < 5ms
  CSS File Size                   55.9 KB
  JavaScript File Size            85.5 KB
  HTML File Size                  43.7 KB
  Total Application Size          approx 185 KB (excluding node_modules)

The application demonstrates excellent performance characteristics due to its client-side architecture. No server round-trips are required for data operations, and the lightweight asset sizes ensure fast loading even on slower connections.

---

CHAPTER 6: RESULTS AND DISCUSSION

6.1 Output Screens

Screen 1: Login / Signup Screen (Fig 6.1)
The authentication overlay presents a glassmorphism card with animated background orbs. Users see a logo ("FitFuel"), email/password fields, a "Login" button, a Google OAuth button with the official Google icon, and a toggle link to switch between login and signup forms. The signup form adds a "Confirm Password" field. Both forms include input validation with toast error messages.

Screen 2: Dashboard (Fig 6.2)
The main dashboard displays a personalized time-based greeting (e.g., "Good Afternoon, John"), the current date, and four summary cards with SVG progress rings showing: Calories, Protein, Carbs, and Fats. Each card shows current intake vs. daily target. Below, a water tracker with an animated bottle fill and today's meals list with individual meal details.

Screen 3: Calorie Calculator (Fig 6.3)
Split layout with a food search card (left) and meal builder card (right). The search card features a search bar with typeahead, 8 category filter chips, a scrollable food card grid (showing emoji, name, and kcal/100g), and a custom food form. The meal builder shows added items with per-item macros, running totals, a macro pie chart (drawn with Canvas API), and save/clear buttons.

Screen 4: Meal Calendar (Fig 6.4)
Left panel shows a monthly calendar grid with navigation arrows. Days with assigned meals display colored indicators. Today's date is highlighted. Right panel shows the selected day's detail: workout plan for that day, assigned meals with macro breakdown, per-day to-do tasks, and a meal assignment dropdown.

Screen 5: To-Do List (Fig 6.5)
Features a task input bar with text field, date picker, and priority dropdown. Below, filter chips (All, Active, Completed, High, Medium, Low) and a scrollable task list. Each task shows priority dot, text, due date, a completion checkbox, and a delete button. Footer shows task count and "Clear completed" button.

Screen 6: Exercises (Fig 6.6)
Mode toggle between "Today's Workout" (preset) and "Custom Workout". Preset mode shows the day's routine name (e.g., "Monday — Chest & Triceps Heavy") with a load button. Custom mode shows muscle group and difficulty filter chips with an exercise card grid. Right panel displays the active workout checklist with progress bar, completion checkboxes, exercise details (sets, reps, equipment), and stats.

Screen 7: Profile & BMR Calculator (Fig 6.7)
Personal info card (name, fitness goal selector). BMR calculator card with gender toggle, age/weight/height inputs, and activity level dropdown. Results card showing: BMI score with color-coded recommendation, BMR, TDEE, Target Calories, Protein/Carbs/Fats targets. "Apply as Daily Targets" button updates dashboard.

6.2 Result Analysis

FitFuel successfully achieves its design objectives:

1. Nutritional Accuracy: The Mifflin-St Jeor implementation produces BMR values within plus or minus 5% of established medical calculators, validating the formula implementation.

2. Goal-Based Personalization: Macro splits correctly adjust by fitness goal — weight loss users receive a 500-calorie deficit with high protein (2.2g/kg), while muscle gain users receive a 300-calorie surplus with moderate protein (1.8g/kg).

3. Comprehensive Food Database: 54 foods across 8 categories cover the most common gym-diet staples, with extensibility through custom foods.

4. Exercise Coverage: 48 exercises span all major muscle groups with 3 difficulty tiers and minimal equipment requirements (bodyweight, yoga mat, dumbbells, exercise ball, skipping rope).

5. User Experience: The glassmorphism UI with animations, progress rings, toast notifications, and contextual empty states delivers a premium feel that differentiates FitFuel from bare-minimum fitness trackers.

---

CHAPTER 7: CONCLUSION AND FUTURE SCOPE

7.1 Conclusion

FitFuel was successfully designed and developed as a comprehensive, web-based gym diet plan maker that integrates nutrition tracking, workout management, and progress monitoring into a single application. The project demonstrates the viability of building a feature-rich fitness application using modern web technologies (HTML5, CSS3, JavaScript ES6+) with Firebase Authentication — without requiring a traditional backend server.

Key accomplishments include:
- Implementation of scientifically-backed BMR/BMI/TDEE calculations with automatic macro target generation.
- A robust food database with 54+ items and support for custom foods.
- An interactive meal calendar enabling weekly/monthly meal planning.
- Three complete 7-day workout programs tailored to different fitness goals.
- Secure multi-user support with per-user data isolation via Firebase UID-keyed localStorage.
- A premium, responsive UI with dark/light theme support and modern glassmorphism design.

The application fulfills all functional and non-functional requirements outlined in the system analysis, providing a practical tool for gym-goers to plan, track, and optimize their fitness journey.

7.2 Future Enhancements

1. Cloud Database Migration: Replace localStorage with Firebase Firestore or Supabase for cross-device data synchronization and backup.
2. Progressive Web App (PWA): Add a service worker and manifest for offline functionality and "Add to Home Screen" capability.
3. AI-Powered Meal Suggestions: Integrate an AI model to suggest meals based on remaining daily macro targets and user preferences.
4. Barcode Scanner: Add camera-based barcode scanning to instantly look up food nutritional information.
5. Progress Charts & Analytics: Implement weekly/monthly charts showing calorie trends, weight progress, and workout consistency using Chart.js or D3.js.
6. Social Features: Add meal sharing, workout sharing, and community challenges to increase user engagement.
7. Wearable Integration: Connect with Google Fit or Apple Health APIs to sync step counts and calorie burn data.
8. Multi-Language Support: Add internationalization (i18n) for Hindi, Spanish, and other languages.
9. Meal Photo Logging: Allow users to photograph meals and attach images to meal entries.
10. Advanced Exercise Tracking: Add rep/set logging per exercise, weight tracking for progressive overload, and rest timer functionality.

---

Document prepared for: FitFuel — Gym Diet Plan Maker
Technology Stack: HTML5, CSS3, JavaScript (ES6+), Firebase Authentication
Date: April 2026
