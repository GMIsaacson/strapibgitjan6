
  module.exports = ({ env }) => ({
    // ...
    usersPermissions: {
      jwtSecret: env('ADMIN_JWT_SECRET', 'JWT_SECRET'),
    },
  });
  