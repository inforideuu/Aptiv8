from django.db import models

class ConsultationBooking(models.Model):
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    time = models.CharField(max_length=50)
    details = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.company} on {self.date}"


class CompanyOverview(models.Model):
    block_key = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=255)
    paragraph_1 = models.TextField(blank=True, null=True)
    paragraph_2 = models.TextField(blank=True, null=True)
    paragraph_3 = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Overview: {self.block_key} - {self.title}"


class TimelineEvent(models.Model):
    year = models.CharField(max_length=10)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f"{self.year}: {self.title}"


class MissionVision(models.Model):
    vision_text = models.TextField()
    mission_text = models.TextField()

    def __str__(self):
        return "Mission & Vision Content"


class StatCard(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.label}: {self.value}"


class LeadershipMember(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    bio = models.TextField()
    icon_name = models.CharField(max_length=50, default='Briefcase')

    def __str__(self):
        return f"{self.name} - {self.role}"


# ServicePage models
class Service(models.Model):
    service_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=255)
    badge = models.CharField(max_length=100)
    description = models.TextField()
    color = models.CharField(max_length=100, default='from-blue-500 to-cyan-500')
    image = models.CharField(max_length=500)
    highlights = models.TextField() # Comma-separated list of values

    def __str__(self):
        return self.title


# ProductsPage models
class Product(models.Model):
    product_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=500)

    def __str__(self):
        return self.title


class ProductShowcase(models.Model):
    title = models.CharField(max_length=255)
    video = models.CharField(max_length=500)
    poster = models.CharField(max_length=500)
    category = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title


# ProjectsPage models
class Project(models.Model):
    project_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    description = models.TextField()
    client_industry = models.TextField()
    key_features = models.TextField()
    image = models.CharField(max_length=500)

    def __str__(self):
        return self.title


# CaseStudiesPage models
class CaseStudy(models.Model):
    case_id = models.CharField(max_length=100, unique=True)
    industry = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    problem = models.TextField()
    solution = models.TextField()
    implementation = models.TextField()
    results = models.TextField()
    impact = models.TextField()
    before = models.CharField(max_length=255)
    after = models.CharField(max_length=255)
    image = models.TextField() # holds svg string or image url
    video_url = models.CharField(max_length=500)

    def __str__(self):
        return self.title


# PartnersPage models
class PartnerType(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    partners = models.TextField() # Comma-separated list

    def __str__(self):
        return self.title


# ResourcesPage models
class Resource(models.Model):
    resource_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    summary = models.TextField()
    image = models.TextField() # holds svg string or image url
    date = models.CharField(max_length=100)
    trending = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    read_time = models.CharField(max_length=50)

    def __str__(self):
        return self.title
