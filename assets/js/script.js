const students = [
  { id: 'BSIT-2024-001', name: 'Alyssa Mae Santos', year: '1st Year', section: 'BSIT 1A', email: 'alyssa.santos@campus.edu', status: 'Active' },
  { id: 'BSIT-2024-002', name: 'Joshua Reyes', year: '1st Year', section: 'BSIT 1A', email: 'joshua.reyes@campus.edu', status: 'Active' },
  { id: 'BSIT-2024-014', name: 'Mikaela Cruz', year: '1st Year', section: 'BSIT 1B', email: 'mikaela.cruz@campus.edu', status: 'Active' },
  { id: 'BSIT-2023-008', name: 'Gabriel Mendoza', year: '2nd Year', section: 'BSIT 2A', email: 'gabriel.mendoza@campus.edu', status: 'Active' },
  { id: 'BSIT-2023-021', name: 'Sofia Lim', year: '2nd Year', section: 'BSIT 2A', email: 'sofia.lim@campus.edu', status: 'Active' },
  { id: 'BSIT-2023-029', name: 'Paolo Garcia', year: '2nd Year', section: 'BSIT 2B', email: 'paolo.garcia@campus.edu', status: 'Active' },
  { id: 'BSIT-2022-006', name: 'Nicole Flores', year: '3rd Year', section: 'BSIT 3A', email: 'nicole.flores@campus.edu', status: 'Active' },
  { id: 'BSIT-2021-003', name: 'Daniel Villanueva', year: '4th Year', section: 'BSIT 4A', email: 'daniel.villanueva@campus.edu', status: 'Active' }
];
const teachers = [
  { id: 'TCH-001', name: 'Maria Dela Cruz', email: 'm.delacruz@campus.edu', subjects: 'Database Management, Web Development', status: 'Active' },
  { id: 'TCH-002', name: 'Rafael Bautista', email: 'r.bautista@campus.edu', subjects: 'Programming, Introduction to Computing', status: 'Active' },
  { id: 'TCH-003', name: 'Anne Mercado', email: 'a.mercado@campus.edu', subjects: 'Networking, Information Assurance', status: 'Active' }
];
const sections = [
  { year: '1st Year', name: 'BSIT 1A', count: 32, adviser: 'Rafael Bautista', status: 'Active' },
  { year: '1st Year', name: 'BSIT 1B', count: 29, adviser: 'Anne Mercado', status: 'Active' },
  { year: '2nd Year', name: 'BSIT 2A', count: 28, adviser: 'Maria Dela Cruz', status: 'Active' },
  { year: '2nd Year', name: 'BSIT 2B', count: 26, adviser: 'Rafael Bautista', status: 'Active' },
  { year: '3rd Year', name: 'BSIT 3A', count: 24, adviser: 'Anne Mercado', status: 'Active' },
  { year: '3rd Year', name: 'BSIT 3B', count: 25, adviser: 'Maria Dela Cruz', status: 'Active' },
  { year: '4th Year', name: 'BSIT 4A', count: 22, adviser: 'Rafael Bautista', status: 'Active' },
  { year: '4th Year', name: 'BSIT 4B', count: 20, adviser: 'Anne Mercado', status: 'Active' }
];
const subjects = [
  { code: 'IT101', name: 'Introduction to Computing', units: 3, year: '1st Year', description: 'Computing concepts and digital systems' },
  { code: 'IT102', name: 'Programming', units: 3, year: '1st Year', description: 'Programming logic and fundamentals' },
  { code: 'IT203', name: 'Database Management', units: 3, year: '2nd Year', description: 'Relational data modeling and SQL concepts' },
  { code: 'IT204', name: 'Web Development', units: 3, year: '2nd Year', description: 'Modern web design and development' },
  { code: 'IT305', name: 'Networking', units: 3, year: '3rd Year', description: 'Computer networks and infrastructure' },
  { code: 'IT401', name: 'Systems Integration', units: 3, year: '4th Year', description: 'Enterprise systems and integration' }
];
const schedules = [
  { subject: 'Database Management', teacher: 'Maria Dela Cruz', section: 'BSIT 2A', room: 'Computer Laboratory 1', day: 'Monday', start: '8:00 AM', end: '10:00 AM' },
  { subject: 'Web Development', teacher: 'Maria Dela Cruz', section: 'BSIT 2A', room: 'Room 204', day: 'Monday', start: '10:30 AM', end: '12:00 PM' },
  { subject: 'Web Development', teacher: 'Maria Dela Cruz', section: 'BSIT 2A', room: 'Room 204', day: 'Tuesday', start: '10:30 AM', end: '12:00 PM' },
  { subject: 'Programming', teacher: 'Rafael Bautista', section: 'BSIT 1A', room: 'Computer Laboratory 2', day: 'Tuesday', start: '8:00 AM', end: '10:00 AM' },
  { subject: 'Networking', teacher: 'Anne Mercado', section: 'BSIT 3A', room: 'Networking Lab', day: 'Wednesday', start: '1:00 PM', end: '3:00 PM' },
  { subject: 'Introduction to Computing', teacher: 'Rafael Bautista', section: 'BSIT 1B', room: 'Room 101', day: 'Thursday', start: '9:00 AM', end: '10:30 AM' },
  { subject: 'Systems Integration', teacher: 'Anne Mercado', section: 'BSIT 4A', room: 'Room 305', day: 'Friday', start: '1:00 PM', end: '3:00 PM' }
];
const attendance = [
  { date: '2026-10-06', student: 'Gabriel Mendoza', id: 'BSIT-2023-008', subject: 'Database Management', section: 'BSIT 2A', status: 'Present', remarks: 'On time' },
  { date: '2026-10-06', student: 'Sofia Lim', id: 'BSIT-2023-021', subject: 'Database Management', section: 'BSIT 2A', status: 'Late', remarks: 'Arrived 10 minutes late' },
  { date: '2026-10-06', student: 'Paolo Garcia', id: 'BSIT-2023-029', subject: 'Database Management', section: 'BSIT 2B', status: 'Absent', remarks: 'No notice' },
  { date: '2026-10-05', student: 'Alyssa Mae Santos', id: 'BSIT-2024-001', subject: 'Programming', section: 'BSIT 1A', status: 'Present', remarks: 'On time' },
  { date: '2026-10-05', student: 'Joshua Reyes', id: 'BSIT-2024-002', subject: 'Programming', section: 'BSIT 1A', status: 'Excused', remarks: 'Medical certificate' },
  { date: '2026-10-02', student: 'Nicole Flores', id: 'BSIT-2022-006', subject: 'Networking', section: 'BSIT 3A', status: 'Present', remarks: 'On time' },
  { date: '2026-10-02', student: 'Daniel Villanueva', id: 'BSIT-2021-003', subject: 'Systems Integration', section: 'BSIT 4A', status: 'Late', remarks: 'Arrived 5 minutes late' },
  { date: '2026-10-01', student: 'Mikaela Cruz', id: 'BSIT-2024-014', subject: 'Introduction to Computing', section: 'BSIT 1B', status: 'Present', remarks: 'On time' }
];
let enrollments = [
  { student: 'Gabriel Mendoza', section: 'BSIT 2A', subject: 'Database Management', schedule: 'Mon · 8:00 AM', status: 'Enrolled' },
  { student: 'Sofia Lim', section: 'BSIT 2A', subject: 'Web Development', schedule: 'Mon · 10:30 AM', status: 'Enrolled' },
  { student: 'Alyssa Mae Santos', section: 'BSIT 1A', subject: 'Programming', schedule: 'Tue · 8:00 AM', status: 'Enrolled' }
];
let historySource = [];
let historyFiltered = [];
let historyPage = 1;
const historyPageSize = 5;

const roleMenus = {
  admin: [['Overview', 'dashboard.html', '⌂'], ['Students', 'students.html', '▤'], ['Teachers', 'teachers.html', '♙'], ['Sections', 'sections.html', '▦'], ['Subjects', 'subjects.html', '▧'], ['Schedules', 'schedules.html', '◷'], ['Enrollments', 'enrollments.html', '⇄'], ['Attendance', 'attendance.html', '✓'], ['Attendance history', 'history.html', '↺'], ['Reports', 'reports.html', '▥'], ['Settings', 'settings.html', '⚙']],
  teacher: [['Overview', 'dashboard.html', '⌂'], ['My Classes', 'classes.html', '▦'], ['Attendance', 'attendance.html', '✓'], ['Reports', 'reports.html', '▥'], ['Profile', 'profile.html', '♙']],
  student: [['Overview', 'dashboard.html', '⌂'], ['My Profile', 'profile.html', '♙'], ['My Subjects', 'subjects.html', '▧'], ['My Schedule', 'schedule.html', '◷'], ['My Attendance', 'attendance.html', '✓']]
};
const titles = { dashboard: 'Dashboard', students: 'Student management', teachers: 'Teacher directory', sections: 'Section management', subjects: 'Subject catalog', schedules: 'Class schedules', enrollments: 'Enrollments', attendance: 'Attendance', history: 'Attendance history', reports: 'Attendance reports', classes: 'My classes', profile: 'My profile', schedule: 'My schedule', settings: 'Settings' };
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const badge = status => `<span class="badge badge-${String(status).toLowerCase()}">${esc(status)}</span>`;
const initials = name => name.split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase();
const role = document.body.dataset.role;
const page = document.body.dataset.page;

function init() {
  if (page === 'login') return initLogin();
  if (!role || !page) return;
  renderShell();
  bindGlobalEvents();
  renderPage();
  drawCharts();
}

function renderShell() {
  const menu = roleMenus[role];
  const base = role === 'admin' ? 'admin' : role;
  const displayRole = role[0].toUpperCase() + role.slice(1);
  const activeFile = `${page}.html`;
  document.getElementById('app').innerHTML = `
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <a class="brand" href="${role === 'admin' ? 'dashboard.html' : 'dashboard.html'}"><span class="brand-mark">N</span><span><strong>Northstar</strong><small>BSIT ATTENDANCE</small></span></a>
        <div class="side-label">WORKSPACE</div>
        <nav class="side-nav">${menu.map(([label, file, icon]) => `<a class="nav-link ${activeFile === file ? 'active' : ''}" href="${file}"><span class="nav-icon">${icon}</span><span>${label}</span>${label === 'Attendance' ? '<span class="nav-dot"></span>' : ''}</a>`).join('')}</nav>
        <div class="sidebar-bottom"><div class="help-panel"><span class="help-icon">?</span><strong>Need a hand?</strong><small>Contact your system administrator.</small></div><div class="user-mini"><span class="avatar">${role === 'student' ? 'GM' : role === 'teacher' ? 'MD' : 'AD'}</span><span class="user-copy"><strong>${role === 'student' ? 'Gabriel Mendoza' : role === 'teacher' ? 'Maria Dela Cruz' : 'Admin User'}</strong><small>${displayRole} account</small></span><button class="icon-button logout" title="Log out" aria-label="Log out">↗</button></div></div>
      </aside>
      <div class="workspace"><header class="topbar"><button class="icon-button menu-toggle" aria-label="Toggle navigation">☰</button><div class="breadcrumbs"><span>BSIT Attendance</span><span class="crumb-divider">/</span><strong>${esc(titles[page] || 'Dashboard')}</strong></div><div class="top-actions"><span class="today-label">${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span><button class="icon-button theme-toggle" aria-label="Toggle color theme" title="Toggle theme">◐</button><button class="notification-button" aria-label="Notifications">♧<i></i></button><div class="top-user"><span class="avatar">${role === 'student' ? 'GM' : role === 'teacher' ? 'MD' : 'AD'}</span><span><strong>${role === 'student' ? 'Gabriel M.' : role === 'teacher' ? 'Maria D.' : 'Admin'}</strong><small>${displayRole}</small></span></div></div></header><main class="main-content"><div id="page-content"></div><footer class="page-footer">Northstar · BSIT Attendance Management <span>Frontend prototype · 2026</span></footer></main></div>
      <div class="sidebar-scrim" id="sidebar-scrim"></div><div class="toast-region" id="toast-region" aria-live="polite"></div>
    </div>`;
}

function pageHeading(eyebrow, title, description, action = '') {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div>${action ? `<div class="heading-actions">${action}</div>` : ''}</div>`;
}
function statCard(label, value, note, icon, trend = '') {
  return `<article class="stat-card"><div class="stat-top"><span class="stat-icon">${icon}</span>${trend ? `<span class="trend">${trend}</span>` : ''}</div><div class="stat-value">${value}</div><div class="stat-label">${label}</div><div class="stat-note">${note}</div></article>`;
}
function sectionTitle(title, detail, action = '') { return `<div class="section-title"><div><h2>${title}</h2>${detail ? `<p>${detail}</p>` : ''}</div>${action}</div>`; }
function tableWrap(table, extra = '') { return `<div class="table-wrap ${extra}">${table}</div>`; }

function renderPage() {
  const views = {
    dashboard: renderDashboard, students: renderStudents, teachers: renderTeachers, sections: renderSections, subjects: renderSubjects,
    schedules: renderSchedules, enrollments: renderEnrollments, attendance: role === 'student' ? renderStudentAttendance : renderAttendance,
    reports: renderReports, history: renderHistory, classes: renderClasses, profile: role === 'teacher' ? renderTeacherProfile : renderProfile, schedule: renderStudentSchedule, settings: renderSettings
  };
  if (page === 'subjects') views.subjects = role === 'student' ? renderStudentSubjects : renderSubjects;
  const view = views[page] || renderDashboard;
  document.getElementById('page-content').innerHTML = view();
  syncDashboardDay();
  bindPageEvents();
}

function syncDashboardDay() {
  if (page !== 'dashboard') return;
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const dateLabel = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  if (role === 'admin' || role === 'teacher') {
    const eyebrow = document.querySelector('.page-heading .eyebrow');
    if (eyebrow) eyebrow.textContent = dateLabel.toUpperCase();
  }
  if (role === 'admin') {
    const card = [...document.querySelectorAll('.stat-card')].find(item => item.querySelector('.stat-label')?.textContent === "Today's classes");
    if (card) card.querySelector('.stat-value').textContent = schedules.filter(item => item.day === day).length;
  }
  if (role === 'teacher') {
    const classes = schedules.filter(item => item.teacher === 'Maria Dela Cruz' && item.day === day);
    const card = [...document.querySelectorAll('.stat-card')].find(item => item.querySelector('.stat-label')?.textContent === "Today's classes");
    if (card) {
      card.querySelector('.stat-value').textContent = classes.length;
      card.querySelector('.stat-note').textContent = classes.length ? `First class at ${classes[0].start}` : 'No classes scheduled today';
    }
    const section = [...document.querySelectorAll('.section-title')].find(item => item.querySelector('h2')?.textContent === "Today's classes");
    if (section) section.querySelector('p').textContent = `${day} · ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
    const body = section?.closest('.panel').querySelector('tbody');
    if (body) body.innerHTML = classes.map((item, index) => `<tr><td><strong>${item.start}</strong><small class="cell-sub">${item.end}</small></td><td><strong>${esc(item.subject)}</strong></td><td>${esc(item.section)}</td><td>${esc(item.room)}</td><td>${index === 0 ? badge('Completed') : '<span class="muted">Not started</span>'}</td><td><a class="text-link" href="attendance.html">${index === 0 ? 'Review' : 'Take attendance'} →</a></td></tr>`).join('') || '<tr><td colspan="6">No classes scheduled today.</td></tr>';
  }
  if (role === 'student') {
    const section = [...document.querySelectorAll('.section-title')].find(item => item.querySelector('h2')?.textContent === "Today's schedule");
    if (section) {
      section.querySelector('p').textContent = `${day} · ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
      const classes = schedules.filter(item => item.section === 'BSIT 2A' && item.day === day);
      section.closest('.panel').querySelector('.class-list').innerHTML = classes.map(scheduleItem).join('') || '<div class="empty-state">No classes scheduled today.</div>';
    }
  }
}

function renderDashboard() {
  if (role === 'admin') return adminDashboard();
  if (role === 'teacher') return teacherDashboard();
  return studentDashboard();
}
function adminDashboard() {
  const todayClasses = schedules.filter(item => item.day === 'Monday' || item.day === 'Tuesday').length;
  return `${pageHeading('MONDAY, OCTOBER 6, 2026', 'Good morning, Admin', 'Here’s your campus attendance snapshot for today.', '<button class="button button-secondary" data-action="export"><span>↓</span> Export overview</button><a class="button button-primary" href="attendance.html"><span>＋</span> Take attendance</a>')}
    <div class="stat-grid">${statCard('Total students', '206', 'Across 8 active sections', '♙', '+12 this term')}${statCard('Total teachers', '14', '11 classes assigned today', '♧', '+2 this term')}${statCard('Active sections', '8', 'Across 4 year levels', '▦')}${statCard('Active subjects', '24', '6 scheduled this week', '▧')}${statCard("Today's classes", String(todayClasses), 'Across 5 sections', '◷')}${statCard('Attendance records', '1,284', 'Records this semester', '✓', '+8.4% this month')}</div>
    <div class="dashboard-grid"><section class="panel chart-panel">${sectionTitle('Attendance overview', 'Daily attendance rate · This week', '<select class="compact-select" aria-label="Chart period"><option>This week</option><option>This month</option></select>')}<div class="chart-legend"><span><i class="legend-dot blue"></i>Present</span><span><i class="legend-dot amber"></i>Late</span><span><i class="legend-dot red"></i>Absent</span></div><div class="bar-chart" data-chart="attendance"><div class="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="chart-bars">${[78, 88, 69, 94, 84, 63, 91].map((height, index) => `<div class="bar-group"><div class="stacked-bar"><i style="height:${height * .78}%"></i><i style="height:${height * .12}%"></i><i style="height:${height * .10}%"></i></div><span>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span></div>`).join('')}</div></div></section><section class="panel activity-panel">${sectionTitle('Recent activity', 'Latest attendance updates', '<a class="text-link" href="attendance.html">View all →</a>')}<div class="activity-list">${attendance.slice(0, 4).map(record => `<div class="activity-row"><span class="activity-mark ${record.status.toLowerCase()}">${record.status === 'Present' ? '✓' : record.status === 'Late' ? '◷' : '!'}</span><div><strong>${esc(record.student)}</strong><small>${esc(record.subject)} · ${esc(record.section)}</small></div><div class="activity-side">${badge(record.status)}<small>${record.date === '2026-10-06' ? 'Today' : 'Yesterday'}</small></div></div>`).join('')}</div></section></div>
    <div class="dashboard-grid lower-grid"><section class="panel">${sectionTitle('Recently added students', 'Newest student profiles', '<a class="text-link" href="students.html">All students →</a>')}${tableWrap(`<table><thead><tr><th>Student</th><th>Year & section</th><th>Status</th></tr></thead><tbody>${students.slice(0, 4).map(student => `<tr><td><div class="person-cell"><span class="avatar avatar-small">${initials(student.name)}</span><span><strong>${esc(student.name)}</strong><small>${esc(student.id)}</small></span></div></td><td>${esc(student.year)}<small class="cell-sub">${esc(student.section)}</small></td><td>${badge(student.status)}</td></tr>`).join('')}</tbody></table>`)}</section><section class="panel">${sectionTitle('Upcoming classes', 'Next on the timetable', '<a class="text-link" href="schedules.html">Full schedule →</a>')}<div class="class-list">${schedules.slice(0, 4).map(scheduleItem).join('')}</div></section></div>`;
}
function teacherDashboard() {
  return `${pageHeading('MONDAY, OCTOBER 6, 2026', 'Good morning, Maria', 'Your teaching day at a glance.', '<a class="button button-primary" href="attendance.html"><span>＋</span> Take attendance</a>')}<div class="stat-grid stat-grid-six">${statCard('Assigned subjects', '4', 'Across 3 year levels', '▧')}${statCard('Assigned sections', '3', 'BSIT 1A, 2A and 3B', '▦')}${statCard("Today's classes", '3', 'First class at 8:00 AM', '◷')}${statCard('Total students', '84', 'Across all your classes', '♙')}${statCard("Today's attendance", '62', 'Students marked so far', '✓')}${statCard('Attendance average', '91.8%', 'Across this semester', '↗', '+2.1% this month')}</div><section class="panel table-panel">${sectionTitle("Today's classes", 'Monday · October 6', '<a class="text-link" href="classes.html">View all classes →</a>')}${tableWrap(`<table><thead><tr><th>Time</th><th>Subject</th><th>Section</th><th>Room</th><th>Attendance</th><th></th></tr></thead><tbody>${schedules.filter(item => item.teacher === 'Maria Dela Cruz').concat(schedules[2]).map((item, index) => `<tr><td><strong>${item.start}</strong><small class="cell-sub">${item.end}</small></td><td><strong>${esc(item.subject)}</strong></td><td>${esc(item.section)}</td><td>${esc(item.room)}</td><td>${index === 0 ? badge('Completed') : '<span class="muted">Not started</span>'}</td><td><a class="text-link" href="attendance.html">${index === 0 ? 'Review' : 'Take attendance'} →</a></td></tr>`).join('')}</tbody></table>`)}</section><div class="notice-strip"><span class="notice-icon">i</span><span><strong>Attendance reminder</strong> Complete attendance for every class before the end of the day.</span><a href="attendance.html">Open attendance →</a></div>`;
}
function studentDashboard() {
  const counts = { Present: 17, Late: 2, Absent: 1, Excused: 0 };
  const pct = Math.round((counts.Present + counts.Late) / 20 * 100);
  return `${pageHeading('STUDENT PORTAL · FIRST SEMESTER 2026–2027', 'Welcome back, Gabriel', 'Your classes and attendance, all in one place.', '<a class="button button-secondary" href="profile.html">View profile →</a>')}<section class="student-hero"><div class="student-hero-copy"><span class="hero-kicker">STUDENT PROFILE</span><h2>Gabriel Mendoza</h2><p>BSIT 2A <span>·</span> Second Year <span>·</span> BSIT-2023-008</p><div class="hero-meta"><span><small>PROGRAM</small><strong>Bachelor of Science in Information Technology</strong></span><span><small>ACADEMIC YEAR</small><strong>2026–2027</strong></span></div></div><div class="attendance-ring" style="--progress:${pct}%"><div><strong>${pct}%</strong><small>ATTENDANCE</small></div></div></section><div class="stat-grid student-stats">${statCard('Total subjects', '6', 'This semester', '▧')}${statCard('Present', '17', 'Of 20 class meetings', '✓')}${statCard('Late', '2', 'Of 20 class meetings', '◷')}${statCard('Absent', '1', 'Of 20 class meetings', '!')}</div><div class="dashboard-grid"><section class="panel">${sectionTitle("Today's schedule", 'Monday · October 6', '<a class="text-link" href="schedule.html">Full schedule →</a>')}<div class="class-list">${schedules.filter(item => item.section === 'BSIT 2A').map(scheduleItem).join('')}</div></section><section class="panel student-chart-panel">${sectionTitle('Attendance summary', 'Your semester at a glance')}<div class="donut-wrap"><div class="donut" style="--present:85%;--late:10%;"><div><strong>20</strong><small>CLASSES</small></div></div><div class="donut-legend"><span><i class="legend-dot blue"></i>Present <strong>17</strong></span><span><i class="legend-dot amber"></i>Late <strong>2</strong></span><span><i class="legend-dot red"></i>Absent <strong>1</strong></span><span><i class="legend-dot gray"></i>Excused <strong>0</strong></span></div></div></section></div><section class="panel table-panel">${sectionTitle('Recent attendance', 'Your latest class records', '<a class="text-link" href="attendance.html">Attendance history →</a>')}${tableWrap(attendance.filter(item => item.student === 'Gabriel Mendoza' || item.section === 'BSIT 2A').slice(0, 4).map(record => `<div class="history-row"><span class="history-date"><strong>${new Date(`${record.date}T00:00`).getDate()}</strong><small>${new Date(`${record.date}T00:00`).toLocaleDateString('en-US', { month: 'short' })}</small></span><span><strong>${esc(record.subject)}</strong><small>${esc(record.section)}</small></span><span>${new Date(`${record.date}T00:00`).toLocaleDateString('en-US', { weekday: 'long' })}</span>${badge(record.status)}</div>`).join('') || '<div class="empty-state">No recent records.</div>', 'history-list')}</section>`;
}
function scheduleItem(item) { return `<div class="class-row"><span class="class-time"><strong>${item.start}</strong><small>${item.end}</small></span><span class="class-rule"></span><span class="class-info"><strong>${esc(item.subject)}</strong><small>${esc(item.section)} · ${esc(item.room)}</small></span><a href="${role === 'teacher' ? 'attendance.html' : 'schedule.html'}" class="row-arrow" aria-label="Open class">→</a></div>`; }

function renderStudents() {
  return `${pageHeading('DIRECTORY', 'Students', 'Manage BSIT student profiles and section assignments.', '<button class="button button-primary" data-modal="student"><span>＋</span> Add student</button>')}<section class="panel table-panel">${tableToolbar(['All year levels', '1st Year', '2nd Year', '3rd Year', '4th Year'], ['All sections', ...sections.map(item => item.name)])}<div id="entity-table">${studentTable()}</div></section>`;
}
function studentTable() {
  return tableWrap(`<table data-sortable><thead><tr><th data-sort="id">Student ID <span>↕</span></th><th data-sort="name">Student</th><th data-sort="year">Year level</th><th data-sort="section">Section</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead><tbody>${students.map((student, i) => `<tr data-year="${student.year}" data-section="${student.section}" data-search="${esc(`${student.id} ${student.name} ${student.email}`.toLowerCase())}"><td class="mono">${esc(student.id)}</td><td><div class="person-cell"><span class="avatar avatar-small color-${i % 4}">${initials(student.name)}</span><strong>${esc(student.name)}</strong></div></td><td>${esc(student.year)}</td><td>${esc(student.section)}</td><td>${esc(student.email)}</td><td>${badge(student.status)}</td><td>${rowActions('student', student.id)}</td></tr>`).join('')}</tbody></table>`);
}
function renderTeachers() {
  return `${pageHeading('FACULTY DIRECTORY', 'Teachers', 'Manage teacher accounts and assigned subjects.', '<button class="button button-primary" data-modal="teacher"><span>＋</span> Add teacher</button>')}<section class="panel table-panel">${tableToolbar()}<div id="entity-table">${teacherTable()}</div></section>`;
}
function teacherTable() { return tableWrap(`<table data-sortable><thead><tr><th>Teacher ID</th><th>Teacher</th><th>Email</th><th>Assigned subjects</th><th>Status</th><th>Actions</th></tr></thead><tbody>${teachers.map((teacher, i) => `<tr data-search="${esc(`${teacher.id} ${teacher.name} ${teacher.email} ${teacher.subjects}`.toLowerCase())}"><td class="mono">${teacher.id}</td><td><div class="person-cell"><span class="avatar avatar-small color-${i % 4}">${initials(teacher.name)}</span><strong>${esc(teacher.name)}</strong></div></td><td>${esc(teacher.email)}</td><td>${esc(teacher.subjects)}</td><td>${badge(teacher.status)}</td><td>${rowActions('teacher', teacher.id)}</td></tr>`).join('')}</tbody></table>`); }
function renderSections() {
  return `${pageHeading('ACADEMIC STRUCTURE', 'Sections', 'Organize BSIT students by year level and class section.', '<button class="button button-primary" data-modal="section"><span>＋</span> Add section</button>')}<div class="section-summary">${['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year, index) => `<div class="year-chip"><span class="year-number">0${index + 1}</span><span><strong>${year}</strong><small>${sections.filter(item => item.year === year).length} sections · ${sections.filter(item => item.year === year).reduce((sum, item) => sum + item.count, 0)} students</small></span></div>`).join('')}</div><section class="panel table-panel">${sectionTitle('All sections', 'Eight active cohorts · 2026–2027')}${tableWrap(`<table data-sortable><thead><tr><th>Year level</th><th>Section name</th><th>Students</th><th>Adviser</th><th>Status</th><th>Actions</th></tr></thead><tbody>${sections.map((item, i) => `<tr data-search="${esc(`${item.year} ${item.name} ${item.adviser}`.toLowerCase())}"><td>${item.year}</td><td><strong>${item.name}</strong></td><td><span class="count-pill">${item.count}</span></td><td>${item.adviser}</td><td>${badge(item.status)}</td><td>${rowActions('section', item.name)}</td></tr>`).join('')}</tbody></table>`)}</section>`;
}
function renderSubjects() {
  return `${pageHeading('CURRICULUM', 'Subjects', 'Browse and maintain the BSIT subject catalog.', '<button class="button button-primary" data-modal="subject"><span>＋</span> Add subject</button>')}<section class="panel table-panel">${tableToolbar(['All year levels', '1st Year', '2nd Year', '3rd Year', '4th Year'])}<div id="entity-table">${subjectTable()}</div></section>`;
}
function subjectTable() { return tableWrap(`<table data-sortable><thead><tr><th>Code</th><th>Subject name</th><th>Units</th><th>Year level</th><th>Description</th><th>Actions</th></tr></thead><tbody>${subjects.map(subject => `<tr data-year="${subject.year}" data-search="${esc(`${subject.code} ${subject.name} ${subject.description}`.toLowerCase())}"><td class="mono">${subject.code}</td><td><strong>${esc(subject.name)}</strong></td><td>${subject.units}</td><td>${subject.year}</td><td>${esc(subject.description)}</td><td>${rowActions('subject', subject.code)}</td></tr>`).join('')}</tbody></table>`); }
function tableToolbar(yearOptions = [], sectionOptions = []) {
  return `<div class="table-toolbar"><label class="search-field"><span>⌕</span><input type="search" class="table-search" placeholder="Search ${page === 'students' ? 'students' : page === 'teachers' ? 'teachers' : page === 'subjects' ? 'subjects' : 'records'}..." aria-label="Search"></label>${yearOptions.length ? `<select class="table-filter year-filter"><option value="">${yearOptions[0]}</option>${yearOptions.slice(1).map(value => `<option>${value}</option>`).join('')}</select>` : ''}${sectionOptions.length ? `<select class="table-filter section-filter"><option value="">${sectionOptions[0]}</option>${sectionOptions.slice(1).map(value => `<option>${value}</option>`).join('')}</select>` : ''}<span class="result-count">Showing <strong>${page === 'students' ? students.length : page === 'teachers' ? teachers.length : subjects.length}</strong> records</span></div>`;
}
function rowActions(type, id) { return `<div class="row-actions"><button class="action-link" data-view="${type}" data-id="${esc(id)}">View</button><button class="action-link" data-edit="${type}" data-id="${esc(id)}">Edit</button><button class="action-link danger-link" data-delete="${type}" data-id="${esc(id)}" aria-label="Delete ${esc(id)}">Delete</button></div>`; }

function renderSchedules() {
  const filter = (label, key, values) => `<label class="filter-control"><span>${label}</span><select data-schedule-filter="${key}"><option value="">All ${label.toLowerCase()}s</option>${values.map(value => `<option>${esc(value)}</option>`).join('')}</select></label>`;
  return `${pageHeading('ACADEMIC CALENDAR', 'Class schedules', 'View class meetings across all sections and year levels.', '<button class="button button-primary" data-modal="schedule"><span>＋</span> Add schedule</button>')}<section class="panel schedule-panel"><div class="schedule-filters">${filter('Year level', 'year', ['1st Year', '2nd Year', '3rd Year', '4th Year'])}${filter('Section', 'section', sections.map(item => item.name))}${filter('Subject', 'subject', subjects.map(item => item.name))}${filter('Teacher', 'teacher', teachers.map(item => item.name))}${filter('Day', 'day', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])}</div><div id="schedule-list">${scheduleTable()}</div></section>`;
}
function scheduleTable() { return tableWrap(`<table><thead><tr><th>Day & time</th><th>Subject</th><th>Teacher</th><th>Section</th><th>Room</th><th></th></tr></thead><tbody>${schedules.map((item, i) => `<tr data-schedule="${i}" data-year="${sections.find(section => section.name === item.section)?.year}" data-section="${item.section}" data-subject="${item.subject}" data-teacher="${item.teacher}" data-day="${item.day}"><td><strong>${item.day}</strong><small class="cell-sub">${item.start} – ${item.end}</small></td><td><strong>${item.subject}</strong></td><td>${item.teacher}</td><td>${item.section}</td><td>${item.room}</td><td><button class="icon-button small-button" data-edit="schedule" data-id="${i}" aria-label="Edit schedule">⋯</button></td></tr>`).join('')}</tbody></table>`); }
function renderEnrollments() {
  return `${pageHeading('STUDENT SUBJECTS', 'Enrollments', 'Connect students to sections, subjects, and class schedules.', '<button class="button button-primary" data-action="show-enrollment-form"><span>＋</span> New enrollment</button>')}<section class="panel enrollment-form hidden" id="enrollment-form">${sectionTitle('Create enrollment', 'Select the student and class details')}<form id="enrollment-create" class="inline-form"><label>Student<select name="student" required>${students.map(item => `<option>${item.name}</option>`).join('')}</select></label><label>Section<select name="section" required>${sections.map(item => `<option>${item.name}</option>`).join('')}</select></label><label>Subject<select name="subject" required>${subjects.map(item => `<option>${item.name}</option>`).join('')}</select></label><label>Schedule<select name="schedule" required>${schedules.map(item => `<option>${item.day.slice(0, 3)} · ${item.start}</option>`).join('')}</select></label><button class="button button-primary" type="submit">Add enrollment</button></form></section><section class="panel table-panel">${sectionTitle('Enrolled students', `${enrollments.length} active enrollments`)}<div class="table-toolbar"><label class="search-field"><span>⌕</span><input class="table-search" type="search" placeholder="Search enrollments..."></label></div><div id="entity-table">${enrollmentTable()}</div></section>`;
}
function enrollmentTable() { return tableWrap(`<table><thead><tr><th>Student</th><th>Section</th><th>Subject</th><th>Schedule</th><th>Status</th><th>Action</th></tr></thead><tbody>${enrollments.map((item, index) => `<tr data-search="${esc(`${item.student} ${item.section} ${item.subject}`.toLowerCase())}"><td><strong>${esc(item.student)}</strong></td><td>${item.section}</td><td>${esc(item.subject)}</td><td>${item.schedule}</td><td>${badge(item.status)}</td><td><button class="action-link danger-link" data-remove-enrollment="${index}">Remove</button></td></tr>`).join('') || '<tr><td colspan="6"><div class="empty-state">No enrollments yet.</div></td></tr>'}</tbody></table>`); }

function renderAttendance() {
  const currentSection = 'BSIT 2A';
  return `${pageHeading('CLASS ROSTER', 'Take attendance', 'Record attendance for a scheduled class meeting.', '<button class="button button-secondary" data-action="print"><span>▤</span> Print roster</button>')}<section class="panel attendance-selector"><div class="attendance-controls"><label>Subject<select id="attendance-subject">${subjects.map(item => `<option ${item.name === 'Database Management' ? 'selected' : ''}>${item.name}</option>`).join('')}</select></label><label>Section<select id="attendance-section">${sections.map(item => `<option ${item.name === currentSection ? 'selected' : ''}>${item.name}</option>`).join('')}</select></label><label>Date<input id="attendance-date" type="date" value="2026-10-06"></label><label>Schedule<select id="attendance-schedule">${schedules.map(item => `<option>${item.day} · ${item.start}–${item.end}</option>`).join('')}</select></label></div></section><section class="panel table-panel attendance-roster">${sectionTitle('Student roster', '<span id="roster-count">2 students</span>', '<button class="button button-small button-secondary" data-action="mark-all">✓ Mark all present</button>')}<div id="attendance-roster">${attendanceRoster(currentSection)}</div><div class="attendance-footer"><span><span class="save-indicator"></span> Changes are not saved yet</span><div><button class="button button-quiet" data-action="reset-attendance">Reset</button><button class="button button-primary" data-action="save-attendance">Save attendance</button></div></div></section><div class="notice-strip"><span class="notice-icon">i</span><span>Attendance changes on this page are a browser-only demonstration.</span></div>`;
}
function attendanceRoster(section) {
  const roster = students.filter(student => student.section === section);
  return tableWrap(`<table><thead><tr><th>Student ID</th><th>Student name</th><th>Status</th><th>Remarks</th><th>Action</th></tr></thead><tbody>${roster.map((student, index) => `<tr data-student-id="${student.id}"><td class="mono">${student.id}</td><td><div class="person-cell"><span class="avatar avatar-small color-${index % 4}">${initials(student.name)}</span><strong>${student.name}</strong></div></td><td><select class="status-select" aria-label="Attendance status for ${student.name}"><option>Present</option><option>Late</option><option>Absent</option><option>Excused</option></select></td><td><input class="remarks-input" type="text" placeholder="Add a remark" aria-label="Remarks for ${student.name}"></td><td><button class="action-link" data-action="mark-present">Mark present</button></td></tr>`).join('') || '<tr><td colspan="5"><div class="empty-state">No students are assigned to this section.</div></td></tr>'}</tbody></table>`);
}
function renderStudentAttendance() {
  const stats = calculateStudentStats();
  return `${pageHeading('MY RECORD', 'My attendance', 'Review your attendance record for the current semester.')}<div class="stat-grid">${statCard('Total classes', stats.total, 'Recorded this semester', '▤')}${statCard('Present', stats.present, 'Attended on time', '✓')}${statCard('Late', stats.late, 'Arrived after class began', '◷')}${statCard('Absent', stats.absent, 'Unexcused absences', '!')}${statCard('Excused', stats.excused, 'Approved absences', '＋')}${statCard('Attendance rate', `${stats.percentage}%`, 'Present and late attendance', '↗')}</div><section class="panel table-panel">${sectionTitle('Attendance history', 'All of your recorded class meetings')}<div class="table-toolbar"><label class="search-field"><span>⌕</span><input class="table-search" type="search" placeholder="Search by subject..."></label><select class="attendance-status-filter table-filter"><option value="">All statuses</option>${['Present', 'Late', 'Absent', 'Excused'].map(item => `<option>${item}</option>`).join('')}</select></div><div id="entity-table">${historyTable(attendance.filter(item => item.student === 'Gabriel Mendoza' || item.section === 'BSIT 2A'))}</div></section>`;
}
function calculateStudentStats() {
  const values = { Present: 17, Late: 2, Absent: 1, Excused: 0 };
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);
  return { ...{ present: values.Present, late: values.Late, absent: values.Absent, excused: values.Excused }, total, percentage: Math.round((values.Present + values.Late) / total * 100) };
}
function renderReports() {
  return `${pageHeading('ANALYTICS', 'Attendance reports', 'Review attendance trends across dates, sections, and subjects.', '<button class="button button-secondary" data-action="print"><span>▤</span> Print report</button><button class="button button-primary" data-action="export"><span>↓</span> Export</button>')}<section class="panel report-controls"><div class="report-tabs" role="tablist"><button class="report-tab active" data-report-tab="Daily">Daily</button><button class="report-tab" data-report-tab="Weekly">Weekly</button><button class="report-tab" data-report-tab="Monthly">Monthly</button><button class="report-tab" data-report-tab="Student">Student</button><button class="report-tab" data-report-tab="Section">Section</button><button class="report-tab" data-report-tab="Subject">Subject</button></div><div class="report-filters"><label>Date range<input type="date" value="2026-10-06"></label><label>Year level<select><option>All year levels</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select></label><label>Section<select><option>All sections</option>${sections.map(item => `<option>${item.name}</option>`).join('')}</select></label><label>Subject<select><option>All subjects</option>${subjects.map(item => `<option>${item.name}</option>`).join('')}</select></label></div></section><div class="stat-grid report-stats">${statCard('Total classes', '48', 'In selected period', '▤')}${statCard('Present', '42', '87.5% of records', '✓')}${statCard('Late', '3', '6.3% of records', '◷')}${statCard('Absent', '2', '4.2% of records', '!')}${statCard('Excused', '1', '2.1% of records', '＋')}${statCard('Attendance rate', '93.8%', 'Present + late', '↗')}</div><div class="dashboard-grid"><section class="panel chart-panel">${sectionTitle('Attendance trend', 'Daily rate · October 2026')}<div class="line-chart"><div class="line-grid">${[0, 1, 2, 3].map(() => '<span></span>').join('')}</div><svg viewBox="0 0 600 190" preserveAspectRatio="none" aria-label="Attendance rate line chart"><polyline points="0,128 80,100 160,112 240,67 320,83 400,43 480,66 600,28" fill="none" stroke="#2578e8" stroke-width="3"/><polygon points="0,128 80,100 160,112 240,67 320,83 400,43 480,66 600,28 600,190 0,190" fill="url(#areaFill)"/><defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2578e8" stop-opacity=".2"/><stop offset="1" stop-color="#2578e8" stop-opacity="0"/></linearGradient></defs></svg><div class="line-labels"><span>Oct 1</span><span>Oct 3</span><span>Oct 5</span><span>Oct 7</span><span>Oct 9</span><span>Oct 11</span></div></div></section><section class="panel">${sectionTitle('Report breakdown', 'By year level')}<div class="breakdown-list">${[['1st Year', 94, 58], ['2nd Year', 91, 49], ['3rd Year', 96, 44], ['4th Year', 93, 36]].map(([label, val, count]) => `<div class="breakdown-item"><div><strong>${label}</strong><span>${count} classes</span><b>${val}%</b></div><div class="progress-track"><i style="width:${val}%"></i></div></div>`).join('')}</div></section></div><section class="panel table-panel">${sectionTitle('Attendance records', 'Sample records for the selected report')}<div id="entity-table">${historyTable(attendance)}</div></section>`;
}
function renderHistory() {
  const filter = (label, key, values) => `<label class="history-filter"><span>${label}</span><select data-history-filter="${key}"><option value="">All ${label.toLowerCase()}s</option>${values.map(value => `<option>${esc(value)}</option>`).join('')}</select></label>`;
  return `${pageHeading('RECORD ARCHIVE', 'Attendance history', 'Filter and review previous student attendance records.', '<button class="button button-secondary" data-action="print"><span>▤</span> Print history</button>')}<section class="panel table-panel">${sectionTitle('Previous records', 'Sample attendance history')}<div class="history-filter-grid"><label class="history-filter"><span>Student</span><select data-history-filter="student"><option value="">All students</option>${[...new Set(attendance.map(item => item.student))].map(name => `<option>${esc(name)}</option>`).join('')}</select></label>${filter('Section', 'section', sections.map(item => item.name))}${filter('Subject', 'subject', subjects.map(item => item.name))}<label class="history-filter"><span>Date</span><input type="date" data-history-filter="date"></label><label class="history-filter"><span>Attendance status</span><select data-history-filter="status"><option value="">All statuses</option>${['Present', 'Late', 'Absent', 'Excused'].map(item => `<option>${item}</option>`).join('')}</select></label><label class="search-field history-search"><span>⌕</span><input class="table-search" type="search" placeholder="Search records..."></label></div><div id="entity-table">${historyTable(attendance)}</div></section>`;
}
function historyTable(records) {
  historySource = records.slice();
  historyFiltered = historySource.slice();
  historyPage = 1;
  return `<div class="table-wrap"><table id="history-table" data-sortable><thead><tr><th>Date</th><th>Student</th><th>Subject</th><th>Section</th><th>Status</th><th>Remarks</th></tr></thead><tbody>${historyRowsMarkup(historyFiltered.slice(0, historyPageSize))}</tbody></table></div>${historyPager()}`;
}
function renderClasses() { return `${pageHeading('TEACHING LOAD', 'My classes', 'Your assigned classes and upcoming meetings.', '<a class="button button-primary" href="attendance.html">＋ Take attendance</a>')}<section class="panel table-panel">${sectionTitle('Assigned classes', 'First semester · 2026–2027')}${tableWrap(`<table><thead><tr><th>Subject</th><th>Section</th><th>Schedule</th><th>Room</th><th>Students</th><th></th></tr></thead><tbody>${schedules.filter(item => item.teacher === 'Maria Dela Cruz').map(item => `<tr><td><strong>${item.subject}</strong></td><td>${item.section}</td><td>${item.day}, ${item.start}–${item.end}</td><td>${item.room}</td><td>${students.filter(student => student.section === item.section).length}</td><td><a class="text-link" href="attendance.html">Open class →</a></td></tr>`).join('')}</tbody></table>`)}</section>`; }
function renderStudentSchedule() { return `${pageHeading('WEEKLY TIMETABLE', 'My schedule', 'Your weekly BSIT 2A class timetable.')}<section class="panel table-panel">${sectionTitle('Weekly schedule', 'First semester · 2026–2027')}${tableWrap(`<table><thead><tr><th>Day</th><th>Time</th><th>Subject</th><th>Room</th><th>Teacher</th></tr></thead><tbody>${schedules.filter(item => item.section === 'BSIT 2A').map(item => `<tr><td><strong>${item.day}</strong></td><td>${item.start}–${item.end}</td><td><strong>${item.subject}</strong></td><td>${item.room}</td><td>${item.teacher}</td></tr>`).join('')}</tbody></table>`)}</section>`; }
function renderStudentSubjects() { const assigned = subjects.filter(item => item.year === '2nd Year'); return `${pageHeading('CURRENT ENROLLMENT', 'My subjects', 'Your active subjects for the first semester of 2026–2027.')}<div class="section-summary">${assigned.map((item, index) => `<article class="year-chip"><span class="year-number">${String(index + 1).padStart(2, '0')}</span><span><strong>${item.code} · ${item.name}</strong><small>${item.units} units · BSIT 2A · Maria Dela Cruz</small></span></article>`).join('')}</div><section class="panel table-panel">${sectionTitle('Subject details', `${assigned.length} active subjects · 6 total this semester`)}${tableWrap(`<table><thead><tr><th>Subject code</th><th>Subject</th><th>Units</th><th>Schedule</th><th>Instructor</th><th>Status</th></tr></thead><tbody>${assigned.map(item => { const meeting = schedules.find(schedule => schedule.subject === item.name && schedule.section === 'BSIT 2A'); return `<tr><td class="mono">${item.code}</td><td><strong>${item.name}</strong><small class="cell-sub">${item.description}</small></td><td>${item.units}</td><td>${meeting ? `${meeting.day}, ${meeting.start}–${meeting.end}` : 'Schedule pending'}</td><td>Maria Dela Cruz</td><td>${badge('Enrolled')}</td></tr>`; }).join('')}</tbody></table>`)}</section>`; }
function renderProfile() { const student = students[3]; return `${pageHeading('STUDENT INFORMATION', 'My profile', 'Your personal and academic details.', '<button class="button button-secondary" data-action="profile-edit">Edit profile</button>')}<section class="panel profile-panel"><div class="profile-banner"><span class="avatar profile-avatar">GM</span><div><h2>Gabriel Mendoza</h2><p>BSIT-2023-008 <span>·</span> Active student</p></div>${badge(student.status)}</div><div class="profile-details"><div><small>PROGRAM</small><strong>Bachelor of Science in Information Technology</strong></div><div><small>YEAR LEVEL</small><strong>2nd Year</strong></div><div><small>SECTION</small><strong>BSIT 2A</strong></div><div><small>EMAIL ADDRESS</small><strong>gabriel.mendoza@campus.edu</strong></div><div><small>ACADEMIC YEAR</small><strong>2026–2027</strong></div><div><small>ADVISER</small><strong>Maria Dela Cruz</strong></div></div></section>`; }
function renderTeacherProfile() { return `${pageHeading('FACULTY INFORMATION', 'My profile', 'Your faculty account and teaching assignment details.')}<section class="panel profile-panel"><div class="profile-banner"><span class="avatar profile-avatar">MD</span><div><h2>Maria Dela Cruz</h2><p>TCH-001 <span>·</span> Faculty member</p></div>${badge('Active')}</div><div class="profile-details"><div><small>EMAIL ADDRESS</small><strong>m.delacruz@campus.edu</strong></div><div><small>DEPARTMENT</small><strong>Bachelor of Science in Information Technology</strong></div><div><small>ASSIGNED SUBJECTS</small><strong>Database Management, Web Development</strong></div><div><small>ASSIGNED SECTIONS</small><strong>BSIT 2A, BSIT 3B</strong></div><div><small>ACADEMIC YEAR</small><strong>2026–2027</strong></div><div><small>ACCOUNT STATUS</small><strong>Active</strong></div></div></section>`; }
function renderSettings() { return `${pageHeading('PREFERENCES', 'Settings', 'Review the academic settings used in this frontend prototype.')}<section class="panel profile-panel">${sectionTitle('Academic structure', 'BSIT program configuration')}<div class="profile-details"><div><small>PROGRAM</small><strong>Bachelor of Science in Information Technology</strong></div><div><small>ACADEMIC YEAR</small><strong>2026–2027</strong></div><div><small>YEAR LEVELS</small><strong>1st, 2nd, 3rd, and 4th Year</strong></div><div><small>SECTIONS</small><strong>BSIT 1A–4B · 8 active sections</strong></div><div><small>ATTENDANCE STATUS OPTIONS</small><strong>Present, Late, Absent, Excused</strong></div><div><small>DISPLAY</small><strong>Use the appearance control in the top bar to switch themes.</strong></div></div></section>`; }

function initLogin() {
  const form = document.getElementById('login-form');
  const password = document.getElementById('password');
  document.querySelector('[data-toggle-password]').addEventListener('click', event => {
    const visible = password.type === 'password';
    password.type = visible ? 'text' : 'password';
    event.currentTarget.textContent = visible ? 'Hide' : 'Show';
    event.currentTarget.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  });
  document.getElementById('forgot-password').addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('login-error').textContent = 'Password recovery is not available in this frontend demo.';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('username');
    const error = document.getElementById('login-error');
    if (!username.value.trim() || !password.value) {
      error.textContent = !username.value.trim() && !password.value ? 'Enter your username and password to continue.' : !username.value.trim() ? 'Enter your username to continue.' : 'Enter your password to continue.';
      (!username.value.trim() ? username : password).focus();
      return;
    }
    error.textContent = '';
    const selectedRole = document.getElementById('login-role').value;
    window.location.href = `${selectedRole}/dashboard.html`;
  });
}

function bindGlobalEvents() {
  document.querySelector('.menu-toggle')?.addEventListener('click', () => document.body.classList.toggle('nav-open'));
  document.getElementById('sidebar-scrim')?.addEventListener('click', () => document.body.classList.remove('nav-open'));
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    showToast(document.body.classList.contains('dark-mode') ? 'Dark appearance enabled' : 'Light appearance enabled');
  });
  document.querySelector('.logout')?.addEventListener('click', () => { window.location.href = '../index.html'; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); document.body.classList.remove('nav-open'); } });
}
function bindPageEvents() {
  document.querySelectorAll('[data-modal]').forEach(button => button.addEventListener('click', () => openEntityModal(button.dataset.modal)));
  document.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => openEntityModal(button.dataset.edit, button.dataset.id)));
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => viewEntity(button.dataset.view, button.dataset.id)));
  document.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', () => deleteEntity(button.dataset.delete, button.dataset.id)));
  document.querySelectorAll('.table-search').forEach(input => input.addEventListener('input', filterRows));
  document.querySelectorAll('.table-filter, .year-filter, .section-filter, .attendance-status-filter').forEach(select => select.addEventListener('change', filterRows));
  document.querySelectorAll('[data-history-filter]').forEach(control => control.addEventListener('change', filterHistory));
  bindHistoryPagination();
  document.querySelectorAll('[data-schedule-filter]').forEach(select => select.addEventListener('change', filterSchedules));
  document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', event => handleAction(button.dataset.action, event)));
  document.querySelectorAll('[data-report-tab]').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-report-tab]').forEach(item => item.classList.toggle('active', item === tab));
    showToast(`${tab.dataset.reportTab} report selected`);
  }));
  document.querySelectorAll('[data-sort]').forEach(th => th.addEventListener('click', () => sortTable(th)));
  document.getElementById('enrollment-create')?.addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    enrollments.unshift({ ...data, status: 'Enrolled' });
    document.getElementById('entity-table').innerHTML = enrollmentTable();
    event.currentTarget.reset();
    showToast('Enrollment added');
  });
  document.querySelectorAll('[data-remove-enrollment]').forEach(button => button.addEventListener('click', () => {
    if (!window.confirm('Remove this enrollment from the sample list?')) return;
    enrollments.splice(Number(button.dataset.removeEnrollment), 1);
    renderPage();
    showToast('Enrollment removed');
  }));
  bindStatusSelects();
  document.getElementById('attendance-section')?.addEventListener('change', event => {
    document.getElementById('attendance-roster').innerHTML = attendanceRoster(event.target.value);
    document.getElementById('roster-count').textContent = `${students.filter(item => item.section === event.target.value).length} students`;
    bindStatusSelects();
    document.querySelectorAll('#attendance-roster [data-action="mark-present"]').forEach(button => button.addEventListener('click', clickEvent => handleAction('mark-present', clickEvent)));
  });
}
function bindStatusSelects() {
  document.querySelectorAll('.status-select').forEach(select => select.addEventListener('change', () => {
    select.closest('tr').classList.add('row-changed');
    document.querySelector('.save-indicator')?.classList.add('unsaved');
  }));
}
function filterRows(event) {
  if (event.target.closest('.panel')?.querySelector('#history-table')) {
    filterHistory(event);
    return;
  }
  const toolbar = event.target.closest('.panel') || document;
  const search = toolbar.querySelector('.table-search')?.value.toLowerCase() || '';
  const year = toolbar.querySelector('.year-filter')?.value || '';
  const section = toolbar.querySelector('.section-filter')?.value || '';
  const status = toolbar.querySelector('.attendance-status-filter')?.value || '';
  const rows = document.querySelectorAll('#entity-table tbody tr');
  let visible = 0;
  rows.forEach(row => {
    const matches = (row.dataset.search || row.textContent.toLowerCase()).includes(search) && (!year || row.dataset.year === year) && (!section || row.dataset.section === section) && (!status || row.dataset.status === status);
    row.hidden = !matches;
    if (matches) visible++;
  });
  const count = toolbar.querySelector('.result-count');
  if (count) count.innerHTML = `Showing <strong>${visible}</strong> records`;
}
function historyRowsMarkup(records) {
  return records.map(item => `<tr data-date="${item.date}" data-student="${esc(item.student)}" data-section="${esc(item.section)}" data-subject="${esc(item.subject)}" data-status="${item.status}" data-search="${esc(`${item.student} ${item.id} ${item.subject} ${item.section} ${item.remarks}`.toLowerCase())}"><td>${new Date(`${item.date}T00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td><td><strong>${esc(item.student)}</strong><small class="cell-sub mono">${item.id}</small></td><td>${esc(item.subject)}</td><td>${item.section}</td><td>${badge(item.status)}</td><td>${esc(item.remarks)}</td></tr>`).join('');
}
function historyPager() {
  const start = historyFiltered.length ? (historyPage - 1) * historyPageSize + 1 : 0;
  const end = Math.min(historyPage * historyPageSize, historyFiltered.length);
  const pages = Math.max(1, Math.ceil(historyFiltered.length / historyPageSize));
  return `<div class="pagination" id="history-pagination"><span>Showing <strong>${start}–${end}</strong> of ${historyFiltered.length}</span><div><button class="page-button" data-history-page="prev" ${historyPage <= 1 ? 'disabled' : ''} aria-label="Previous page">←</button><span class="page-number">${historyPage} / ${pages}</span><button class="page-button" data-history-page="next" ${historyPage >= pages ? 'disabled' : ''} aria-label="Next page">→</button></div></div>`;
}
function bindHistoryPagination() {
  document.querySelectorAll('[data-history-page]').forEach(button => button.addEventListener('click', () => {
    historyPage += button.dataset.historyPage === 'next' ? 1 : -1;
    document.querySelector('#history-table tbody').innerHTML = historyRowsMarkup(historyFiltered.slice((historyPage - 1) * historyPageSize, historyPage * historyPageSize));
    document.getElementById('history-pagination').outerHTML = historyPager();
    bindHistoryPagination();
  }));
}
function filterHistory(event) {
  const panel = event.target.closest('.panel');
  const search = panel.querySelector('.table-search')?.value.toLowerCase() || '';
  const filters = [...panel.querySelectorAll('[data-history-filter]')].map(control => [control.dataset.historyFilter, control.value]);
  const status = panel.querySelector('.attendance-status-filter')?.value || '';
  historyFiltered = historySource.filter(item => `${item.student} ${item.id} ${item.subject} ${item.section} ${item.remarks}`.toLowerCase().includes(search) && (!status || item.status === status) && filters.every(([key, value]) => !value || item[key] === value));
  historyPage = 1;
  document.querySelector('#history-table tbody').innerHTML = historyRowsMarkup(historyFiltered.slice(0, historyPageSize));
  document.getElementById('history-pagination').outerHTML = historyPager();
  bindHistoryPagination();
}
function filterSchedules() {
  const filters = [...document.querySelectorAll('[data-schedule-filter]')].map(select => [select.dataset.scheduleFilter, select.value]);
  document.querySelectorAll('#schedule-list tbody tr').forEach(row => {
    row.hidden = filters.some(([key, value]) => value && row.dataset[key] !== value);
  });
}
function sortTable(header) {
  const table = header.closest('table');
  const index = [...header.parentElement.children].indexOf(header);
  const rows = [...table.querySelectorAll('tbody tr')];
  const ascending = header.dataset.order !== 'asc';
  rows.sort((a, b) => a.children[index].textContent.localeCompare(b.children[index].textContent, undefined, { numeric: true }) * (ascending ? 1 : -1));
  rows.forEach(row => table.querySelector('tbody').appendChild(row));
  header.dataset.order = ascending ? 'asc' : 'desc';
}
function handleAction(action, event) {
  if (action === 'mark-all') {
    document.querySelectorAll('.status-select').forEach(select => { select.value = 'Present'; select.closest('tr').classList.add('row-changed'); });
    document.querySelector('.save-indicator')?.classList.add('unsaved');
    showToast('All students marked present');
  } else if (action === 'mark-present') {
    const select = event.currentTarget.closest('tr').querySelector('.status-select');
    select.value = 'Present'; select.dispatchEvent(new Event('change', { bubbles: true }));
  } else if (action === 'save-attendance') {
    document.querySelector('.save-indicator')?.classList.remove('unsaved');
    document.querySelectorAll('.row-changed').forEach(row => row.classList.remove('row-changed'));
    showToast('Attendance saved for this demonstration');
  } else if (action === 'reset-attendance') {
    document.querySelectorAll('.status-select').forEach(select => select.value = 'Present');
    document.querySelectorAll('.remarks-input').forEach(input => input.value = '');
    document.querySelector('.save-indicator')?.classList.remove('unsaved');
    showToast('Roster reset');
  } else if (action === 'print') window.print();
  else if (action === 'export') showToast('Export is a frontend placeholder');
  else if (action === 'show-enrollment-form') document.getElementById('enrollment-form')?.classList.toggle('hidden');
  else if (action === 'profile-edit') showToast('Profile editing will be available in a future version');
}
function entityData(type, id) {
  if (type === 'student') return students.find(item => item.id === id);
  if (type === 'teacher') return teachers.find(item => item.id === id);
  if (type === 'section') return sections.find(item => item.name === id);
  if (type === 'subject') return subjects.find(item => item.code === id);
  if (type === 'schedule') return schedules[Number(id)];
}
function entityFields(type) {
  const fields = {
    student: [['id', 'Student ID'], ['name', 'Full name'], ['year', 'Year level', ['1st Year', '2nd Year', '3rd Year', '4th Year']], ['section', 'Section', sections.map(item => item.name)], ['email', 'Email address'], ['status', 'Status', ['Active', 'Inactive']]],
    teacher: [['id', 'Teacher ID'], ['name', 'Full name'], ['email', 'Email address'], ['subjects', 'Assigned subjects'], ['status', 'Status', ['Active', 'Inactive']]],
    section: [['year', 'Year level', ['1st Year', '2nd Year', '3rd Year', '4th Year']], ['name', 'Section name'], ['count', 'Number of students'], ['adviser', 'Adviser'], ['status', 'Status', ['Active', 'Inactive']]],
    subject: [['code', 'Subject code'], ['name', 'Subject name'], ['units', 'Units'], ['year', 'Year level', ['1st Year', '2nd Year', '3rd Year', '4th Year']], ['description', 'Description']],
    schedule: [['subject', 'Subject', subjects.map(item => item.name)], ['teacher', 'Teacher', teachers.map(item => item.name)], ['section', 'Section', sections.map(item => item.name)], ['room', 'Room'], ['day', 'Day', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']], ['start', 'Start time'], ['end', 'End time']]
  };
  return fields[type] || [];
}
function openEntityModal(type, id = '') {
  const existing = id ? entityData(type, id) : null;
  const title = `${existing ? 'Edit' : 'Add'} ${type}`;
  const fields = entityFields(type).map(([key, label, options]) => {
    const value = existing?.[key] ?? '';
    if (options) return `<label>${label}<select name="${key}" required>${options.map(option => `<option ${String(option) === String(value) ? 'selected' : ''}>${esc(option)}</option>`).join('')}</select></label>`;
    return `<label>${label}<input name="${key}" value="${esc(value)}" ${key === 'email' ? 'type="email"' : key === 'count' || key === 'units' ? 'type="number" min="0"' : 'type="text"'} required></label>`;
  }).join('');
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'entity-modal';
  modal.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-heading"><div><div class="eyebrow">${type.toUpperCase()} DETAILS</div><h2 id="modal-title">${title}</h2></div><button class="icon-button" data-close-modal aria-label="Close">×</button></div><form id="entity-form"><div class="modal-fields">${fields}</div><div class="modal-actions"><button type="button" class="button button-quiet" data-close-modal>Cancel</button><button type="submit" class="button button-primary">${existing ? 'Save changes' : `Add ${type}`}</button></div></form></section>`;
  document.body.appendChild(modal);
  modal.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  modal.querySelector('#entity-form').addEventListener('submit', event => {
    event.preventDefault();
    const value = Object.fromEntries(new FormData(event.currentTarget));
    const collection = { student: students, teacher: teachers, section: sections, subject: subjects, schedule: schedules }[type];
    if (existing) Object.assign(existing, value);
    else collection.unshift(value);
    closeModal();
    renderPage();
    showToast(`${type[0].toUpperCase() + type.slice(1)} ${existing ? 'updated' : 'added'}`);
  });
  modal.querySelector('input,select')?.focus();
}
function closeModal() { document.getElementById('entity-modal')?.remove(); }
function viewEntity(type, id) {
  const data = entityData(type, id);
  if (!data) return;
  const details = Object.entries(data).map(([key, value]) => `<div><small>${esc(key.replace(/[A-Z]/g, letter => ` ${letter}`).toUpperCase())}</small><strong>${esc(value)}</strong></div>`).join('');
  const modal = document.createElement('div'); modal.className = 'modal-backdrop'; modal.id = 'entity-modal';
  modal.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><div class="modal-heading"><div><div class="eyebrow">RECORD DETAILS</div><h2>${esc(data.name || data.subject || data.code || id)}</h2></div><button class="icon-button" data-close-modal aria-label="Close">×</button></div><div class="profile-details view-details">${details}</div><div class="modal-actions"><button class="button button-primary" data-close-modal>Done</button></div></section>`;
  document.body.appendChild(modal); modal.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
}
function deleteEntity(type, id) {
  if (!window.confirm(`Delete ${type} “${id}”? This action only changes the sample data in this page.`)) return;
  const lookup = { student: [students, 'id'], teacher: [teachers, 'id'], section: [sections, 'name'], subject: [subjects, 'code'] }[type];
  if (!lookup) { showToast('This record cannot be deleted from this view'); return; }
  const index = lookup[0].findIndex(item => item[lookup[1]] === id);
  if (index >= 0) lookup[0].splice(index, 1);
  renderPage(); showToast(`${type[0].toUpperCase() + type.slice(1)} deleted`);
}
function showToast(message) {
  const region = document.getElementById('toast-region');
  if (!region) return;
  const toast = document.createElement('div'); toast.className = 'toast-message'; toast.innerHTML = `<span class="toast-check">✓</span>${esc(message)}`;
  region.appendChild(toast); window.setTimeout(() => toast.remove(), 3200);
}
function drawCharts() { document.querySelectorAll('.stacked-bar').forEach(bar => { [...bar.children].forEach(segment => segment.style.height = `${parseFloat(segment.style.height)}%`); }); }

document.addEventListener('DOMContentLoaded', init);
