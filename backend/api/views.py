import json
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import ConsultationBooking, CompanyOverview, TimelineEvent, MissionVision, StatCard, LeadershipMember, Service, Product, ProductShowcase, Project, CaseStudy, PartnerType, Resource

@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        try:
            uploaded_file = request.FILES['file']
            public_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'public'))
            uploads_dir = os.path.join(public_dir, 'uploads')
            if not os.path.exists(uploads_dir):
                os.makedirs(uploads_dir)
            
            file_path = os.path.join(uploads_dir, uploaded_file.name)
            with open(file_path, 'wb+') as destination:
                for chunk in uploaded_file.chunks():
                    destination.write(chunk)
                    
            relative_url = f"/uploads/{uploaded_file.name}"
            return JsonResponse({'url': relative_url})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)



@csrf_exempt
@require_http_methods(["POST"])
def analyze_requirements(request):
    try:
        data = json.loads(request.body)
        industry = data.get('industry')
        budget = data.get('budget')
        timeline = data.get('timeline')
        project_goals = data.get('projectGoals', '')

        if not all([industry, budget, timeline]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        # Generate recommendation dynamically (no hardcoded/seeded db values, just evaluate requested input)
        recommendation = ''
        components = []

        if industry in ['Architecture', 'Engineering']:
            recommendation = 'Deploy Sustainability Design Smart Advisor (SDSA) and the Compliance Chatbot.'
            components = ['Revit CodeCheck API integration', 'Green Mark carbon envelope validation', 'SG BCA regulations package']
        elif industry == 'Construction':
            recommendation = 'Deploy AI Assistant for Bid Preparation and Open BIM AI.'
            components = ['Historical tender scanning algorithms', 'Quantity takeoffs compiler', 'IFC metadata cleanser']
        else:
            recommendation = 'Deploy AI-Enhanced CMMS and Aptiv8 Cortex sensory twin interfaces.'
            components = ['Vibration/Thermal sensor endpoints', 'Predictive ticket dispatch systems', 'strata title allocation automation']

        est_setup_time = '6-8 Weeks' if timeline == 'Under 3 Months' else '10-12 Weeks'
        sovereignty = 'Private Local Sandbox Sandbox Deployment recommended.'

        return JsonResponse({
            'id': 1,
            'recommendation': recommendation,
            'components': components,
            'estSetupTime': est_setup_time,
            'sovereignty': sovereignty
        }, status=201)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def book_consultation(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        company = data.get('company')
        email = data.get('email')
        phone = data.get('phone')
        date = data.get('date')
        time = data.get('time')
        details = data.get('details', '')

        if not all([name, company, email, phone, date, time]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        booking = ConsultationBooking.objects.create(
            name=name,
            company=company,
            email=email,
            phone=phone,
            date=date,
            time=time,
            details=details
        )

        return JsonResponse({
            'id': booking.id,
            'message': 'Consultation booked successfully!'
        }, status=201)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def get_admin_data(request):
    try:
        bookings = list(ConsultationBooking.objects.all().order_by('-created_at').values())
        return JsonResponse({
            'bookings': bookings,
            'analyses': []
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_booking(request, id):
    try:
        ConsultationBooking.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Booking deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def get_about_content(request):
    try:
        # Auto-seed CompanyOverview
        if CompanyOverview.objects.count() == 0:
            CompanyOverview.objects.create(
                block_key='overview',
                title='AI-Powered Innovation for the Built Environment',
                paragraph_1='Aptiv8 IT Solutions Pte Ltd builds and commercializes Generative AI and Agentic AI advisor products for the Built Environment (BE) sector.',
                paragraph_2='Our tools automate compliance, optimize engineering, and elevate facilities management across Singapore and Malaysia.',
                paragraph_3='Our priority is delivering widely adopted, revenue-generating tools that practitioners use in their daily work.'
            )
            CompanyOverview.objects.create(
                block_key='challenges',
                title='Unlocking Efficiency Across the Built Environment Value Chain',
                paragraph_1='The BE value chain — from design, through tendering, construction, operations & maintenance, and real estate management — is characterized by significant pain points.',
                paragraph_2='They are regulatory complexity, fragmented and non-standardized data, abortive work from late-stage rejections, and low productivity in compliance.',
                paragraph_3='Aptiv8 positions Agentic AI to relieve these bottlenecks at scale.'
            )
            CompanyOverview.objects.create(
                block_key='adaptability',
                title='Building Industry-Ready Gen AI & Agentic AI Solutions',
                paragraph_1='Aptiv8 acts as an engineering delivery partner, co-developing Gen AI / Agentic AI projects with domain experts.',
                paragraph_2='Some projects are proofs-of-concept already built by Aptiv8; others are in active development or seeking partners.',
                paragraph_3='We also apply our Agentic platform to customer service, telecommunications, and aerospace MRO solutions.'
            )

        # Auto-seed TimelineEvent
        if TimelineEvent.objects.count() == 0:
            TimelineEvent.objects.create(
                year='2018',
                title='Company Founded',
                description='Aptiv8 was incorporated in 2018 and Singapore based. It is led by built environment domain experts with decades of experience in the built environment across the value chain and lifecycle.'
            )
            TimelineEvent.objects.create(
                year='2020',
                title='Digital Transformation Expansion',
                description='Expanded operational scope to assist public and private stakeholders integrate custom cloud systems, metadata standards, and paperless site records.'
            )
            TimelineEvent.objects.create(
                year='2022',
                title='AI Product Development Focus',
                description='Launched our dedicated AI research group to develop advanced predictive algorithms tailored for BCA code checking and construction risk classification.'
            )
            TimelineEvent.objects.create(
                year='2024',
                title='Built Environment AI Integration',
                description='Began commercial deployment of our featured AI solutions including Sustainability Advisor (SDSA), Compliance Chatbot, and CMMS sensors.'
            )
            TimelineEvent.objects.create(
                year='2026',
                title='BexAsia Showcase',
                description='Positioned as the leading, trusted AI partner in Southeast Asia, proudly presenting our full software suite at the Sands Expo BexAsia event.'
            )

        # Auto-seed MissionVision
        if MissionVision.objects.count() == 0:
            MissionVision.objects.create(
                vision_text='To be the trusted AI partner in the AEC and FM sectors in Singapore and SE Asia.',
                mission_text='To drive AI transformation and innovation in the built environment.'
            )

        # Auto-seed StatCard
        if StatCard.objects.count() == 0:
            StatCard.objects.create(label='Projects Completed', value='150+')
            StatCard.objects.create(label='AI Solutions', value='12+')
            StatCard.objects.create(label='Industries Served', value='7')
            StatCard.objects.create(label='Years Experience', value='8')

        # Auto-seed LeadershipMember
        if LeadershipMember.objects.count() == 0:
            LeadershipMember.objects.create(
                name='Dr. Aaron Chen',
                role='Chief Executive Officer',
                bio='Former senior BIM director at Bentley Systems with 15+ years engineering expertise.',
                icon_name='Briefcase'
            )
            LeadershipMember.objects.create(
                name='Sarah Lim',
                role='Chief AI Architect',
                bio='PhD in Cognitive Architecture from NUS. Leads training of local building compliance models.',
                icon_name='Cpu'
            )
            LeadershipMember.objects.create(
                name='Devin Marcus',
                role='Head of Product Operations',
                bio='Former Autodesk integration lead. Manages CMMS and BIM pipeline API distributions.',
                icon_name='Settings'
            )

        overview = list(CompanyOverview.objects.all().values())
        timeline = list(TimelineEvent.objects.all().order_by('year').values())
        
        mv_obj = MissionVision.objects.first()
        mission_vision = {
            'vision_text': mv_obj.vision_text,
            'mission_text': mv_obj.mission_text
        } if mv_obj else None

        stats = list(StatCard.objects.all().values())
        leadership = list(LeadershipMember.objects.all().values())

        return JsonResponse({
            'overview': overview,
            'timeline': timeline,
            'mission_vision': mission_vision,
            'stats': stats,
            'leadership': leadership
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_company_overview(request):
    try:
        data = json.loads(request.body)
        block_key = data.get('block_key')
        title = data.get('title')
        p1 = data.get('paragraph_1', '')
        p2 = data.get('paragraph_2', '')
        p3 = data.get('paragraph_3', '')

        if not block_key or not title:
            return JsonResponse({'error': 'block_key and title are required'}, status=400)

        overview, created = CompanyOverview.objects.update_or_create(
            block_key=block_key,
            defaults={
                'title': title,
                'paragraph_1': p1,
                'paragraph_2': p2,
                'paragraph_3': p3
            }
        )
        return JsonResponse({'message': 'Company Overview updated successfully', 'block_key': overview.block_key})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_timeline_event(request):
    try:
        data = json.loads(request.body)
        event_id = data.get('id')
        year = data.get('year')
        title = data.get('title')
        description = data.get('description')

        if not all([year, title, description]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        if event_id:
            event = TimelineEvent.objects.filter(id=event_id).first()
            if event:
                event.year = year
                event.title = title
                event.description = description
                event.save()
            else:
                return JsonResponse({'error': 'Timeline event not found'}, status=404)
        else:
            event = TimelineEvent.objects.create(
                year=year,
                title=title,
                description=description
            )

        return JsonResponse({
            'message': 'Timeline event saved successfully',
            'id': event.id,
            'year': event.year,
            'title': event.title,
            'description': event.description
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_timeline_event(request, id):
    try:
        TimelineEvent.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Timeline event deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_mission_vision(request):
    try:
        data = json.loads(request.body)
        vision_text = data.get('vision_text')
        mission_text = data.get('mission_text')

        if not vision_text or not mission_text:
            return JsonResponse({'error': 'vision_text and mission_text are required'}, status=400)

        mv, created = MissionVision.objects.update_or_create(
            id=1,
            defaults={
                'vision_text': vision_text,
                'mission_text': mission_text
            }
        )
        return JsonResponse({'message': 'Mission & Vision updated successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_stat_card(request):
    try:
        data = json.loads(request.body)
        stat_id = data.get('id')
        label = data.get('label')
        value = data.get('value')

        if not label or not value:
            return JsonResponse({'error': 'label and value are required'}, status=400)

        if stat_id:
            stat = StatCard.objects.filter(id=stat_id).first()
            if stat:
                stat.label = label
                stat.value = value
                stat.save()
            else:
                return JsonResponse({'error': 'Stat card not found'}, status=404)
        else:
            stat = StatCard.objects.create(label=label, value=value)

        return JsonResponse({
            'message': 'Stat card saved successfully',
            'id': stat.id,
            'label': stat.label,
            'value': stat.value
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_stat_card(request, id):
    try:
        StatCard.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Stat card deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_leadership(request):
    try:
        data = json.loads(request.body)
        member_id = data.get('id')
        name = data.get('name')
        role = data.get('role')
        bio = data.get('bio')
        icon_name = data.get('icon_name', 'Briefcase')

        if not all([name, role, bio]):
            return JsonResponse({'error': 'name, role and bio are required'}, status=400)

        if member_id:
            member = LeadershipMember.objects.filter(id=member_id).first()
            if member:
                member.name = name
                member.role = role
                member.bio = bio
                member.icon_name = icon_name
                member.save()
            else:
                return JsonResponse({'error': 'Leadership member not found'}, status=404)
        else:
            member = LeadershipMember.objects.create(
                name=name,
                role=role,
                bio=bio,
                icon_name=icon_name
            )

        return JsonResponse({
            'message': 'Leadership member saved successfully',
            'id': member.id,
            'name': member.name,
            'role': member.role,
            'bio': member.bio,
            'icon_name': member.icon_name
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_leadership(request, id):
    try:
        LeadershipMember.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Leadership member deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["GET"])
def get_cms_content(request):
    try:
        # Seed Services
        if Service.objects.count() == 0:
            Service.objects.create(
                service_id="co-development",
                title="Gen AI / Agentic AI Co-Development Partnership",
                badge="Joint Innovation",
                description="Aptiv8 works as an engineering delivery partner alongside domain experts to scope, build, and validate Gen AI advisors for real workflows.",
                color="from-blue-500 to-cyan-500",
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                highlights="Proof-of-concept validation,Domain expert collaboration,Custom workflow mapping,Scale-ready deployment"
            )
            Service.objects.create(
                service_id="om-bundling",
                title="Operations & Maintenance Solution Bundling",
                badge="Converged Infrastructure",
                description="Aptiv8 converges digital twin modelling, agentic AI (Aptiv8 Cortex), IoT and BMS data, smart energy management, and thermal comfort into a single integrated layer.",
                color="from-purple-500 to-indigo-500",
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                highlights="Aptiv8 Cortex reasoning,Aptiv8 energy optimization,BMS & IoT telemetry,Thermal comfort monitoring"
            )
            Service.objects.create(
                service_id="advisory",
                title="AI Advisory & Roadmapping",
                badge="Strategic Planning",
                description="Advisory engagements that assess an existing operational platform and produce a phased AI adoption roadmap.",
                color="from-amber-500 to-orange-500",
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
                highlights="Operational platform audit,Adoption roadmap sequencing,Quick-win agent identification,Predictive feasibility scoring"
            )
            Service.objects.create(
                service_id="enterprise-dev",
                title="Enterprise Generative AI Application Development",
                badge="Low-Code & Custom Code",
                description="Design and build of enterprise Gen AI applications: LLM orchestration flows, autonomous agents, Cognitive Search connection.",
                color="from-emerald-500 to-teal-500",
                image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
                highlights="LLM Chatflow orchestration,Cognitive Search integration,Vector database configuration,API SDK & Widget exports"
            )
            Service.objects.create(
                service_id="compliance",
                title="Compliance & Regulatory Data Structuring",
                badge="Deterministic Reasoning",
                description="Building deterministic-plus-agentic systems that ingest and structure regulatory content (codes, directives, bulletins, standards).",
                color="from-red-500 to-pink-500",
                image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                highlights="Regulatory content ingestion,BCA code mapping,Fire-safety mentor backend,MRO compliance integration"
            )

        # Seed Products
        if Product.objects.count() == 0:
            Product.objects.create(
                product_id="compliance-chatbot",
                title="Gen AI Chatbot & Assistant for Regulatory and Codes Compliance",
                category="Planning & Design",
                status="Proof-of-concept completed",
                description="Helps consultants navigate rules, regulations, codes and circulars across Singapore CORENET X submission regime.",
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            )
            Product.objects.create(
                product_id="fire-safety-advisor",
                title="Gen AI Specialist Advisor for Fire Safety and Protection Compliance",
                category="Planning & Design",
                status="Exploring with partner",
                description="A mentor-style tool guiding project teams through SCDF fire-safety regulatory requirements.",
                image="gen_ai.png"
            )
            Product.objects.create(
                product_id="pe-ge-checker-mentor",
                title="Gen AI Mentor for Professional Engineers, Geotechnical Engineers and Accredited Checkers",
                category="Planning & Design",
                status="Seeking partners",
                description="Eurocode structural/geotechnical guidance and digital submission coaching.",
                image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
            )
            Product.objects.create(
                product_id="greensip",
                title="GreenSIP — Green Mark Sustainability Intelligence Platform",
                category="Planning & Design",
                status="Phase 1 live; Phase 2 in progress",
                description="BCA Green Mark V7 co-pilot with Malaysia GBI/GreenRE extensions planned.",
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
            )

        # Seed Showcases
        if ProductShowcase.objects.count() == 0:
            ProductShowcase.objects.create(
                title="GenAI DC Design",
                video="/DC_design.mp4",
                poster="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                category="Infrastructure & Design",
                description="Intelligent workflows automating data center layouts, cooling simulations, and validation against strict engineering codes."
            )
            ProductShowcase.objects.create(
                title="GenAI for Construction Contract Management",
                video="/construction.mp4",
                poster="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
                category="Operations & Procurement",
                description="Automated analysis, risk screening, and regulatory mapping for construction agreements."
            )

        # Seed Projects
        if Project.objects.count() == 0:
            Project.objects.create(
                project_id="a8-ai-powered-cmms",
                title="A8 AI Powered CMMS",
                category="Built Environment",
                status="Cost Saving",
                description="Aptiv8's Computerized Maintenance Management System for asset lifecycle maintenance.",
                client_industry="Government (BCA, JTC, HDB), Data Centres, Building Contractors.",
                key_features="Analyzing maintenance documents, pilot projects proposed.",
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            )

        # Seed Case Studies
        if CaseStudy.objects.count() == 0:
            CaseStudy.objects.create(
                case_id="case-arch",
                industry="Architecture",
                title="Automating BCA Code Compliance for Marina Bay High-Rises",
                problem="Architectural checks for Singapore BCA compliance consumed up to 6 weeks per design iteration.",
                solution="Deployed the Aptiv8 Gen AI Chatbot & Assistant for Regulatory Compliance.",
                implementation="Trained model on SG regulatory documents to verify structural dimensions and clearances.",
                results="Compliance check times reduced from 6 weeks to 4 hours.",
                impact="Saved $240K in developer drafting overheads and fast-tracked final BCA design permits.",
                before="6 Weeks Manual Check",
                after="4 Hours Automated Check",
                image="planning",
                video_url="https://www.w3schools.com/html/mov_bbb.mp4"
            )

        # Seed Partner Types
        if PartnerType.objects.count() == 0:
            PartnerType.objects.create(
                title="Technology Partners",
                description="Integrators extending our model distributions into Revit, IFC, and Autodesk environments.",
                partners="Autodesk Developer,Bentley Systems Dev,OpenAI API Network,Microsoft Cloud Partner"
            )

        # Seed Resources
        if Resource.objects.count() == 0:
            Resource.objects.create(
                resource_id="res-1",
                title="Singapore BCA Green Mark Platinum: A Design Guide using AI Advisors",
                category="White Papers",
                summary="An in-depth guide demonstrating how model orientation variables and glass envelope ratios are checked.",
                image="sustainability",
                date="Aug 12, 2026",
                trending=True,
                featured=True,
                read_time="12 min read"
            )

        services = list(Service.objects.all().values())
        products = list(Product.objects.all().values())
        showcases = list(ProductShowcase.objects.all().values())
        projects = list(Project.objects.all().values())
        case_studies = list(CaseStudy.objects.all().values())
        partners = list(PartnerType.objects.all().values())
        resources = list(Resource.objects.all().values())

        return JsonResponse({
            'services': services,
            'products': products,
            'showcases': showcases,
            'projects': projects,
            'case_studies': case_studies,
            'partners': partners,
            'resources': resources
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_service(request):
    try:
        data = json.loads(request.body)
        sid = data.get('id')
        service_id = data.get('service_id')
        title = data.get('title')
        badge = data.get('badge')
        description = data.get('description')
        color = data.get('color', 'from-blue-500 to-cyan-500')
        image = data.get('image')
        highlights = data.get('highlights')

        if sid:
            obj = Service.objects.filter(id=sid).first()
        else:
            obj, _ = Service.objects.get_or_create(service_id=service_id)
        
        obj.title = title
        obj.badge = badge
        obj.description = description
        obj.color = color
        obj.image = image
        obj.highlights = highlights
        obj.save()
        return JsonResponse({'message': 'Service saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_service(request, id):
    try:
        Service.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_product(request):
    try:
        data = json.loads(request.body)
        pid = data.get('id')
        product_id = data.get('product_id')
        title = data.get('title')
        category = data.get('category')
        status = data.get('status')
        description = data.get('description')
        image = data.get('image')

        if pid:
            obj = Product.objects.filter(id=pid).first()
        else:
            obj, _ = Product.objects.get_or_create(product_id=product_id)
        
        obj.title = title
        obj.category = category
        obj.status = status
        obj.description = description
        obj.image = image
        obj.save()
        return JsonResponse({'message': 'Product saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_product(request, id):
    try:
        Product.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_showcase(request):
    try:
        data = json.loads(request.body)
        sid = data.get('id')
        title = data.get('title')
        video = data.get('video')
        poster = data.get('poster')
        category = data.get('category')
        description = data.get('description')

        if sid:
            obj = ProductShowcase.objects.filter(id=sid).first()
        else:
            obj = ProductShowcase()
        
        obj.title = title
        obj.video = video
        obj.poster = poster
        obj.category = category
        obj.description = description
        obj.save()
        return JsonResponse({'message': 'Showcase saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_showcase(request, id):
    try:
        ProductShowcase.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_project(request):
    try:
        data = json.loads(request.body)
        pid = data.get('id')
        project_id = data.get('project_id')
        title = data.get('title')
        category = data.get('category')
        status = data.get('status')
        description = data.get('description')
        client_industry = data.get('client_industry')
        key_features = data.get('key_features')
        image = data.get('image')

        if pid:
            obj = Project.objects.filter(id=pid).first()
        else:
            obj, _ = Project.objects.get_or_create(project_id=project_id)
        
        obj.title = title
        obj.category = category
        obj.status = status
        obj.description = description
        obj.client_industry = client_industry
        obj.key_features = key_features
        obj.image = image
        obj.save()
        return JsonResponse({'message': 'Project saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_project(request, id):
    try:
        Project.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_casestudy(request):
    try:
        data = json.loads(request.body)
        cid = data.get('id')
        case_id = data.get('case_id')
        industry = data.get('industry')
        title = data.get('title')
        problem = data.get('problem')
        solution = data.get('solution')
        implementation = data.get('implementation')
        results = data.get('results')
        impact = data.get('impact')
        before = data.get('before')
        after = data.get('after')
        image = data.get('image', 'planning')
        video_url = data.get('video_url', '')

        if cid:
            obj = CaseStudy.objects.filter(id=cid).first()
        else:
            obj, _ = CaseStudy.objects.get_or_create(case_id=case_id)
        
        obj.industry = industry
        obj.title = title
        obj.problem = problem
        obj.solution = solution
        obj.implementation = implementation
        obj.results = results
        obj.impact = impact
        obj.before = before
        obj.after = after
        obj.image = image
        obj.video_url = video_url
        obj.save()
        return JsonResponse({'message': 'Case study saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_casestudy(request, id):
    try:
        CaseStudy.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_partner(request):
    try:
        data = json.loads(request.body)
        pid = data.get('id')
        title = data.get('title')
        description = data.get('description')
        partners = data.get('partners')

        if pid:
            obj = PartnerType.objects.filter(id=pid).first()
        else:
            obj = PartnerType()
        
        obj.title = title
        obj.description = description
        obj.partners = partners
        obj.save()
        return JsonResponse({'message': 'Partner type saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_partner(request, id):
    try:
        PartnerType.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def save_resource(request):
    try:
        data = json.loads(request.body)
        rid = data.get('id')
        resource_id = data.get('resource_id')
        title = data.get('title')
        category = data.get('category')
        summary = data.get('summary')
        image = data.get('image', 'sustainability')
        date = data.get('date')
        trending = data.get('trending', False)
        featured = data.get('featured', False)
        read_time = data.get('read_time')

        if rid:
            obj = Resource.objects.filter(id=rid).first()
        else:
            obj, _ = Resource.objects.get_or_create(resource_id=resource_id)
        
        obj.title = title
        obj.category = category
        obj.summary = summary
        obj.image = image
        obj.date = date
        obj.trending = trending
        obj.featured = featured
        obj.read_time = read_time
        obj.save()
        return JsonResponse({'message': 'Resource saved successfully', 'id': obj.id})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_resource(request, id):
    try:
        Resource.objects.filter(id=id).delete()
        return JsonResponse({'message': 'Deleted successfully'})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
