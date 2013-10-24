Package.describe({
  summary: 'An easy-to-use interface for managing your Meteor app'
});

Package.on_use(function (api) {
  api.use(['standard-app-packages', 'accounts-base', 'accounts-password'], ['client','server']);
  api.use(['iron-router', 'font-awesome', 'less', 'bootstrap3-less', 'alert'], 'client');
  // must use imply so that the parent app can use routes without explicitly adding it
//  api.imply(['standard-app-packages', 'accounts-base', 'accounts-password', 'accounts-ui-unstyled', 'iron-router', 'font-awesome', 'less', 'bootstrap3-less']);
  api.add_files([
    'client/subscriptions.js'
    ,'client/routes.js'
    ,'client/views/admin/forms/field.html'
    ,'client/views/admin/accounts/buttons.html'
    ,'client/views/admin/accounts/buttons.js'
    ,'client/views/admin/accounts/forgot.html'
    ,'client/views/admin/accounts/forgot.js'
    ,'client/views/admin/accounts/login.html'
    ,'client/views/admin/accounts/login.js'
    ,'client/views/admin/accounts/register.html'
    ,'client/views/admin/accounts/register.js'
    ,'client/views/admin/accounts/combo.html'
    ,'client/views/admin/accounts/combo.js'
    ,'client/views/admin/accounts/change.html'
    ,'client/views/admin/accounts/change.js'
    ,'client/views/admin/accounts/options.html'
    ,'client/views/admin/accounts/options.js'
    ,'client/views/admin/common/notAuthorized.html'
    ,'client/views/admin/common/notFound.html'
    ,'client/views/admin/common/loading.html'
    ,'client/views/admin/admin.html'
    ,'client/views/admin/admin.js'
    ,'client/views/admin/configs/configs.html'
    ,'client/views/admin/configs/configs.js'
    ,'client/views/admin/configs/config.html'
    ,'client/views/admin/configs/config.js'
    ,'client/views/admin/users/edit.html'
    ,'client/views/admin/users/users.html'
    ,'client/views/admin/users/users.js'
    ,'client/views/admin/users/user.html'
    ,'client/views/admin/users/user.js'
    ,'client/styles/admin.less'
    ,'public/images/bg.jpg'
    ], 'client');
  api.add_files([
    'lib/utility.js'
    ,'lib/collections.js'
    ], ['client','server']);
  api.add_files([
    'server/server.js'
    ,'server/publications.js'
    ,'server/security.js'
    ], 'server');
  api.export([
    'AdminController'
    ,'ConfigsController'
  ], 'client');
  api.export([
    '_admin'
  ], 'server');
  api.export('Configs', ['server', 'client']);
});
