
  module.exports = ({ env }) => ({
    // ...
    usersPermissions: {
      jwtSecret: env('JWT_SECRET', 'EzrU48j70Z4WfrZ95udgzg=='),
      admin: {
        jwtSecret: env('ADMIN_JWT_SECRET', '/jYQHwq3mjQ2wCg30+4PNQ=='),
      },
    },
  });
  