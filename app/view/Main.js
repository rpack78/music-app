Ext.define('MusicApp.view.Main', {
  extend: 'Ext.container.Container',
  xtype: 'app-main',

  requires: [
    'Ext.layout.container.Column'
  ],

  layout: {
    type: 'hbox'
  },
  items: [{
    xtype: 'nav',
    width: 150
  }, {
    xtype: 'staff',
    flex: 1
  }]
});