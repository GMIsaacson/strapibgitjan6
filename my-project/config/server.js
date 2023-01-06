module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['ERde9C52l4mZsDgfdOOfiA==', 'EXTOb/pTICDeDGuDUQVyug==', '7qN53VQrkPzm2ClYe4KK8g==', 'xrf6PUiTFAfLkIMghXsXBg==']),
    
  },
});

