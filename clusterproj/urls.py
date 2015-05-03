from django.conf.urls import include, url
from django.contrib import admin
from pheatmap.views import baseView

urlpatterns = [
    # Examples:
    # url(r'^$', 'clusterproj.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url('^$', baseView.as_view()),

    url(r'^admin/', include(admin.site.urls)),
]
