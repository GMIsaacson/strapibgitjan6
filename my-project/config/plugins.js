
  module.exports = ({ env }) => ({
    // ...
    usersPermissions: {
      jwtSecret: env('JWT_SECRET'),
      admin: {
        jwtSecret: env('ADMIN_JWT_SECRET'),
      },
    },
  });
  