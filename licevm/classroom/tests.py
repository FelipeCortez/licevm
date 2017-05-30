from django.test import TestCase
from classroom.models import Topic

class AnimalTestCase(TestCase):
    def setUp(self):
        Topic.objects.create(name="Primeira Guerra Mundial",
                             description="Foi um grande evento")

    def testar(self):
        """testar"""
        pass
        #lion = Animal.objects.get(name="lion")
        #cat = Animal.objects.get(name="cat")
        #self.assertEqual(lion.speak(), 'The lion says "roar"')
        #self.assertEqual(cat.speak(), 'The cat says "meow"')
