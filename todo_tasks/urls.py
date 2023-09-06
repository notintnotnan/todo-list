from django.urls import path
from rest_framework.documentation import include_docs_urls
from . import views

urlpatterns = [
    path('api/v1/',views.apiOverview,name='overview'),
    path('api/v1/list/',views.taskList,name='task-list'),
    path('api/v1/details/<str:task_id>/',views.taskView,name='task-details'),
    path('api/v1/create/',views.taskCreate,name='task-create'),
    path('api/v1/update/<str:task_id>/',views.taskUpdate,name='task-update'),
    path('api/v1/delete/<str:task_id>/',views.taskDelete,name='task-delete'),
    path('docs/',include_docs_urls(title="Tasks API"))
]