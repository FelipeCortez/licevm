from django import template
import markdown

register = template.Library()

@register.filter(name='markdown')
def markdownize(value):
    return markdown.markdown(value)
