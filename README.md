
# Student Management Application

This is a **single-page Angular application** designed to manage student details. The application is divided into two main parts:

## Part 1: Student Details Form
- Built using **Angular Material components** for a clean and responsive user interface.
- Includes the following fields:
  - **Name**: Text input (required).
  - **Email**: Email input with validation (required).
  - **Gender**: Radio buttons (Male, Female, Other) (required).
  - **Course**: Select box (Math, Science, History) (required).
  - **Hobbies**: Checkboxes (Reading, Sports, Music).
  - **City**: Autocomplete field with predefined city options.
- A **Submit button** is provided to save the student details.

## Part 2: Student Entries Table
- Displays the student details submitted through the form in an **Angular Material table**.
- Each row in the table includes:
  - **Edit Button**: Allows editing of student details.
  - **Delete Button**: Allows deletion of student details.
- The table is dynamically updated to reflect changes (add, edit, delete).

## Key Features
- **Data Persistence**: Student details are stored in **local storage** for persistence across page reloads.
- **Validation**: Form fields are validated to ensure accurate data entry.
- **Responsive Design**: The application is designed to work seamlessly on different screen sizes.

## Technologies Used
- **Angular**: Framework for building the application.
- **Angular Material**: UI components for a modern and consistent design.
- **TypeScript**: Programming language for Angular development.
- **HTML/CSS**: For structuring and styling the application.


------------------------------------------------------------------------------------------------------------------------

## Development server

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.2.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
