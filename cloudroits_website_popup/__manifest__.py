{
    'name': 'Website Popup Manager',
    'version': '15.0.1.0.0',
    'category': 'Website',
    'summary': 'Easily Create and Manage Popups Across Your Odoo Website',
    'author': 'Cloudroits',
    'depends': ['website'],
    'license': 'AGPL-3', 
    'data': [        
        'security/website_popup_security.xml',  # Security group
        'security/ir.model.access.csv', 
        'views/popup_image_view.xml',
        'views/website_popup_image.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'cloudroits_website_popup/static/src/js/popup.js',
            'cloudroits_website_popup/static/src/css/popup.css',
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': False,
}