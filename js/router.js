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
        description: 'This is the about page',
    },
    '/travel': {
        template: `${TEMPLATE_PATH}/travel.html`,
        title: 'Travel',
        description: 'This is the about page',
    },
    '/todo': {
        template: `${TEMPLATE_PATH}/todo.html`,
        title: 'Things To Do',
        description: 'This is the about page',
    },
    '/faqs': {
        template: `${TEMPLATE_PATH}/faqs.html`,
        title: 'FAQs',
        description: 'This is the about page',
    },
    '/rsvp': {
        template: `${TEMPLATE_PATH}/rsvp.html`,
        title: 'RSVP',
        description: 'This is the about page',
    },
};

const BASE_TITLE = "Gaby's & Sergio's Wedding";

document.addEventListener('click', event => {
    if (!event.target.matches('nav a')) {
        return;
    }

    event.preventDefault();

    route();
});

const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided

    event.preventDefault();

    window.history.pushState({}, '', event.target.href);

    locationHandler();
};

const locationHandler = async () => {
    const path = window.location.pathname;

    const { template, title, description } = ROUTES[path] ?? ROUTES['/'];

    const html = await fetch(template).then((response) => response.text());

    document.getElementById('page-content').innerHTML = html;

    document.title = title ? `${BASE_TITLE} - ${title}` : BASE_TITLE

    document.querySelector('meta[name="description"]')
        .setAttribute('content', description);
};

window.onpopstate = locationHandler;

window.route = route;

locationHandler();
