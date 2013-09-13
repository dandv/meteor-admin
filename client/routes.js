Router.map(function() {
  this.route('admin', {
    renderTemplates: {
      'adminHeader': {to: 'header'}
    },
    template: 'admin'
  });
});
