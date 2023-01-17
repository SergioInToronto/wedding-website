const TEMPLATE_PATH = './templates';

const ROUTES = {
    '/': {
        template: `${TEMPLATE_PATH}/index.html`,
        title: 'Home',
        description: 'This is the home page',
    },
    '/schedule': {
        template: `${TEMPLATE_PATH}/schedule.html`,
        title: 'Wedding Schedule',
        description: 'This is the about page',
    },
    '/travel': {
        template: `${TEMPLATE_PATH}/travel.html`,
        title: 'Travel',
        description: 'This is the about page',
    },
    '/to-do': {
        template: `${TEMPLATE_PATH}/to-do.html`,
        title: 'To Do',
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
    const location = window.location.pathname;

    const routeName = location.length !== 0 ? location : '/';

    const { template, title, description } = ROUTES[routeName] ?? ROUTES['404'];

    const html = await fetch(template)
        .then((response) => response.text());

    document.getElementById('page-content').innerHTML = html;

    document.title = title;

    document.querySelector('meta[name="description"]')
        .setAttribute('content', description);
};

window.onpopstate = locationHandler;

window.route = route;

locationHandler();
