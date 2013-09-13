Package.describe({
  summary: 'An easy-to-use interface for managing your Meteor app'
});

Package.on_use(function (api) {
  api.use(['accounts-base', 'accounts-password', 'underscore', 'standard-app-packages'], ['client','server']);
  api.use(['bootstrap', 'jquery', 'iron-router'], 'client');
  api.add_files([
    'client/subscriptions.js'
    ,'client/routes.js'
    ,'client/layouts.html'
    ,'client/views/admin/admin.js'
    ,'client/views/admin/admin.html'
    ,'client/views/admin/adminHeader.js'
    ,'client/views/admin/adminHeader.html'
    ,'client/views/admin/sidebar.html'
    ,'client/views/admin/plans/plans.js'
    ,'client/views/admin/plans/plans.html'
    ,'client/views/admin/plans/plan.js'
    ,'client/views/admin/plans/plan.html'
    ,'client/views/admin/users/users.js'
    ,'client/views/admin/users/users.html'
    ,'client/views/admin/users/user.html'
    ], 'client');
  api.add_files([
    'lib/models.js'
    ], ['client','server']);
  api.add_files([
    'server/admin.js'
    ,'server/publications.js'
    ,'server/security.js'
    ], 'server');
  api.export('_admin', 'server');
});