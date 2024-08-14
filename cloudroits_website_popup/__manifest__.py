{
    'name': 'Website Popup Manager',
    'version': '14.0.1.0.0',
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
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': False,
}