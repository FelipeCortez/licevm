from django.db import models
from django.contrib.auth.models import User
from django.core.validators import validate_slug
from django.dispatch import receiver

class Topic(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    content = models.TextField(blank=True)
    parent = models.ForeignKey('self', blank=True, null=True)

    def __str__(self):
        #parent_str = " [{}]".format(Topic.objects.get(id=self.parent).name) if self.parent else ""
        parent_str = " [{}]".format(self.parent.name) if self.parent is not None else ""
        if self.start_date.year != self.end_date.year:
            date = "{} - {}".format(self.start_date.year, self.end_date.year)
        else:
            date = "{}".format(self.start_date.year)
        return "{} ({}){}".format(self.name, date, parent_str)

class Quiz(models.Model):
    explanation = models.TextField(blank=True) # explicação opcional da resposta
    content = models.TextField() # texto que será manipulado por JavaScript
    topic = models.ForeignKey(Topic)

# ver opção 2
# https://simpleisbetterthancomplex.com/tutorial/2016/07/22/how-to-extend-django-user-model.html#onetoone
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    ADMIN = 'AD'
    STUDENT = 'ST'
    TEACHER = 'TE'
    USER_TYPE = (
        (ADMIN, 'Admin'),
        (STUDENT, 'Student'),
        (TEACHER, 'Teacher'),
    )
    user_type = models.CharField(max_length=2,
                                 choices=USER_TYPE,
                                 default=STUDENT,
    )

    def __str__(self):
        return "{} - {}".format(self.user.username, self.get_user_type_display())

@receiver(models.signals.post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(models.signals.post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
