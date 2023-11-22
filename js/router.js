const TEMPLATE_PATH = './templates';

const ROUTES = {
  '/': {
    template: `${TEMPLATE_PATH}/home.html`,
    // title: 'Home',
    description: 'This is the home page',
  },
  '/schedule': {
    template: `${TEMPLATE_PATH}/schedule.html`,
    title: 'Schedule',
    description: '',
  },
  '/travel': {
    template: `${TEMPLATE_PATH}/travel.html`,
    title: 'Travel',
    description: '',
  },
  '/todo': {
    template: `${TEMPLATE_PATH}/todo.html`,
    title: 'Things To Do',
    description: '',
  },
  '/faqs': {
    template: `${TEMPLATE_PATH}/faqs.html`,
    title: 'FAQs',
    description: '',
  },
  '/rsvp': {
    template: `${TEMPLATE_PATH}/rsvp.html`,
    title: 'RSVP',
    description: '',
  },
  '/playlist': {
    template: `${TEMPLATE_PATH}/playlist.html`,
    title: 'Playlist',
    description: '',
  },
};

const BASE_TITLE = "Gaby's & Sergio's Wedding";

function shouldHandleRoute(target) {
  return target.matches('nav a') || target.matches('a.nav');
}

document.addEventListener('click', event => {
  // if (!event.target.matches('nav a')) {
  // if (!Object.keys(ROUTES).includes(event.target.pathname)) {
  if (!shouldHandleRoute(event.target)) {
    return;
  }

  event.preventDefault();
  route();
});

function route(event) {
  event = event || window.event;

  event.preventDefault();

  window.history.pushState({}, '', event.target.href);

  locationHandler();
};

async function locationHandler() {
  const path = window.location.pathname;

  const {
    template,
    title,
    description
  } = ROUTES[path] ?? ROUTES['/'];

  const html = await fetch(template).then((response) => response.text());

  document.getElementById('page-content').innerHTML = html;
  document.title = title ? `${BASE_TITLE} - ${title}` : BASE_TITLE
  document.querySelector('meta[name="description"]').setAttribute('content', description);

  window.scrollTo(0, 0);
};

window.onpopstate = locationHandler;

window.route = route;

locationHandler();
