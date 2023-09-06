from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import TaskSerializer
from .models import Task

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "viewList":"api/v1/list/",
        "viewTask":"",
        "createTask":"",
        "updateTask":"",
        "deleteTask":"",
    }

    return Response(api_urls)

@api_view(['GET'])
def taskList(request):
    tasks = TaskSerializer(Task.objects.all(),many=True).data
    return Response(tasks)

@api_view(['GET'])
def taskView(request,task_id):
    tasks = TaskSerializer(Task.objects.get(id=task_id),many=False).data
    return Response(tasks)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def taskUpdate(request, task_id):
    task = Task.objects.get(id=task_id)
    serializer = TaskSerializer(instance=task,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request, task_id):
    task = Task.objects.get(id=task_id)
    task.delete()

    return Response({"status":200})