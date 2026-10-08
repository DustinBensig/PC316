# BSIT Attendance Management System

A frontend-only BSIT attendance prototype built with HTML5, CSS3, and vanilla JavaScript. It uses in-memory sample data only; it does not include PHP, a database, or authentication services.

## Run

Open `index.html` in a browser. Choose a demo workspace, enter any non-empty username and password, and sign in. The role selector is for demonstrating the Admin, Teacher, and Student views; it does not authenticate users.

## Pages

- `index.html`: demo sign-in
- `admin/`: dashboard, students, teachers, sections, subjects, schedules, enrollments, attendance, attendance history, reports, and settings
- `teacher/`: dashboard, classes, attendance, reports, and profile
- `student/`: dashboard, profile, subjects, schedule, and attendance

## Frontend interactions

Sample data is declared in `assets/js/script.js`. Tables support search and relevant filters; student, teacher, section, subject, and schedule forms edit the current page's in-memory data. Attendance status controls, report tabs, attendance history filters and pagination, responsive navigation, print actions, theme switching, and toast notifications are also client-side demonstrations. Reloading a page restores the original sample data.

## Structure

```text
index.html
admin/
teacher/
student/
assets/
  css/style.css
  js/script.js
  images/
```

The shared layout and page renderer keep the HTML entry points ready for later integration with a server-side application, without implementing any backend behavior here.