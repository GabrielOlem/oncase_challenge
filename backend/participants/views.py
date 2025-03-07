from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Participant
from .serializers import ParticipantSerializer
from django.http import JsonResponse
import json

@api_view(['GET'])
def get_data(request):
    participants = Participant.objects.all().order_by("participation")
    serializer = ParticipantSerializer(participants, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_data(request):
    serializer = ParticipantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        participants = Participant.objects.all().order_by("participation")
        serialized_data = ParticipantSerializer(participants, many=True)
        return Response(serialized_data.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
