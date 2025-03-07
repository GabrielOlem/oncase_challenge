from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator

class Participant(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    participation = models.IntegerField(
        validators=[
            MinValueValidator(1, message="Participation must be at least 1%"),
            MaxValueValidator(100, message="Participation cannot exceed 100%"),
        ]
    )

    def clean(self):
        total_participation = sum(Participant.objects.values_list("participation", flat=True))
        if self.pk:
            total_participation -= Participant.objects.get(pk=self.pk).participation
        if total_participation + self.participation > 100:
            raise ValidationError("Total participation cannot exceed 100%")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
