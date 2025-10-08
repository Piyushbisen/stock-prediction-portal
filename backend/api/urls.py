from django.urls import path
from accounts import views as UserViews



urlpatterns = [
    # path('your-url/', your_view, name='your-name'),
    path('register/', UserViews.RegsterView.as_view()),
]