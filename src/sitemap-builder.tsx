require('babel-register')({
    presets: ['es2020', 'react'],
});

const Sitemap = require('react-router-sitemap').default;

const router = [{ path: '/' }, { path: '/home' }, { path: '/story' }];

function generateSitemap(cureentRouter: any) {
    return new Sitemap(cureentRouter).build('https://www.hugiris.com').save('./public/sitemap.xml');
}

generateSitemap(router);

export {};
