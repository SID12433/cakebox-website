from django.contrib import admin
from cakeapp.models import Cakes,Carts,CakeCategory,CakeVarients,User,Offers,Reviews,Orders

# Register your models here.

admin.site.register(Cakes)
admin.site.register(Carts)
admin.site.register(CakeVarients)
admin.site.register(CakeCategory)
admin.site.register(User)
admin.site.register(Offers)
admin.site.register(Orders)
admin.site.register(Reviews)

