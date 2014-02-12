Ext.define('MusicApp.view.Nav', {
    extend: 'Ext.panel.Panel',
    xtype: 'nav',
    title: 'Nav',
    height: Ext.getBody().getViewSize().height,
    lbar: [
        {
            text: 'Nav Item 1',
            width: 150
        },
        {
            text: 'Nav Item 2',
            width: 150
        }
    ]
});