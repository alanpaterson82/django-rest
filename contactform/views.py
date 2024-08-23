from rest_framework import viewsets
from .models import ContactForm
from .serializers import ContactFormSerializer

class ContactFormViewSet(viewsets.ModelViewSet):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer