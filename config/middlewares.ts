module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://cmt-tawny.vercel.app', 'http://localhost:3000' ], // Permite requisições deste domínio
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
      credentials: true,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://cmt-tawny.vercel.app", // frontend em produção
            "http://localhost:3000", // frontend em produção
            "https://strapi-production-1b18.up.railway.app" // backend
          ],
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
