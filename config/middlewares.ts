module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://cmt-tawny.vercel.app' ], // Permite requisições deste domínio
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
            "https://strapi-n86r.onrender.com" // backend
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
