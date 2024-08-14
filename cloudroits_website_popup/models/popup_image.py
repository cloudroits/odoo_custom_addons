from odoo import models, fields

class WebsitePopupImage(models.Model):
    _name = 'website.popup.image'
    _description = 'Website Popup Image'

    name = fields.Char(string="Name", required=True)
    image = fields.Image(string="Popup Image", required=True)
    website_ids = fields.Many2many('website', string="Websites")
    button_text = fields.Char(string="Button Text", default="Click Here")
    button_link = fields.Char(string="Button Link")
    page_urls = fields.Text(string="Page URLs", help="Specify the URLs where the popup should be displayed, separated by commas. Leave empty to show on all pages.")