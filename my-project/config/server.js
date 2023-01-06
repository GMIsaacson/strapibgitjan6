module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['ERde9C52l4mZsDgfdOOfiA==', 'EXTOb/pTICDeDGuDUQVyug==', '7qN53VQrkPzm2ClYe4KK8g==', 'xrf6PUiTFAfLkIMghXsXBg==']),
    ADMIN_JWT_SECRET: env('ADMIN_JWT_SECRET', '/jYQHwq3mjQ2wCg30+4PNQ=='),
    JWT_SECRET: env('JWT_SECRET', 'EzrU48j70Z4WfrZ95udgzg=='),
  },
});

