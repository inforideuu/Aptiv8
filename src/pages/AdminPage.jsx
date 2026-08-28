import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Layers, Clock, Mail, Phone, Trash2, Plus, Save,
  Sparkles, RefreshCw, BarChart3, Database, ShieldAlert, Award, 
  Lock, Eye, EyeOff, FileText, Users, Heart, Edit3, X, Play, Video,
  ChevronRight, Network
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [bookings, setBookings] = useState([]);
  
  // CMS Content States
  const [overviews, setOverviews] = useState({
    overview: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' },
    challenges: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' },
    adaptability: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' }
  });
  const [timeline, setTimeline] = useState([]);
  const [missionVision, setMissionVision] = useState({ vision_text: '', mission_text: '' });
  const [stats, setStats] = useState([]);
  const [leadership, setLeadership] = useState([]);

  // Seperate page CMS arrays
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [showcases, setShowcases] = useState([]);
  const [projects, setProjects] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [partners, setPartners] = useState([]);
  const [resources, setResources] = useState([]);

  // Form states for inputs
  const [newEvent, setNewEvent] = useState({ year: '', title: '', description: '' });
  const [newStat, setNewStat] = useState({ label: '', value: '' });
  const [newLeader, setNewLeader] = useState({ name: '', role: '', bio: '', icon_name: 'Briefcase' });

  const [newService, setNewService] = useState({ service_id: '', title: '', badge: '', description: '', color: 'from-blue-500 to-cyan-500', image: '', highlights: '' });
  const [newProduct, setNewProduct] = useState({ product_id: '', title: '', category: 'Planning & Design', status: '', description: '', image: '' });
  const [newShowcase, setNewShowcase] = useState({ title: '', video: '', poster: '', category: '', description: '' });
  const [newProject, setNewProject] = useState({ project_id: '', title: '', category: 'Built Environment', status: '', description: '', client_industry: '', key_features: '', image: '' });
  const [newCaseStudy, setNewCaseStudy] = useState({ case_id: '', industry: '', title: '', problem: '', solution: '', implementation: '', results: '', impact: '', before: '', after: '', image: 'planning', video_url: '' });
  const [newPartner, setNewPartner] = useState({ title: '', description: '', partners: '' });
  const [newResource, setNewResource] = useState({ resource_id: '', title: '', category: 'Articles', summary: '', image: 'sustainability', date: '', trending: false, featured: false, read_time: '' });

  // Editing state indicators
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingStatId, setEditingStatId] = useState(null);
  const [editingLeaderId, setEditingLeaderId] = useState(null);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingShowcaseId, setEditingShowcaseId] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editingCaseStudyId, setEditingCaseStudyId] = useState(null);
  const [editingPartnerId, setEditingPartnerId] = useState(null);
  const [editingResourceId, setEditingResourceId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // timeline | stat | leader | service | product | showcase | project | casestudy | partner | resource

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    resetForms();
  };

  const resetForms = () => {
    setEditingEventId(null);
    setNewEvent({ year: '', title: '', description: '' });
    
    setEditingStatId(null);
    setNewStat({ label: '', value: '' });
    
    setEditingLeaderId(null);
    setNewLeader({ name: '', role: '', bio: '', icon_name: 'Briefcase' });
    
    setEditingServiceId(null);
    setNewService({ service_id: '', title: '', badge: '', description: '', color: 'from-blue-500 to-cyan-500', image: '', highlights: '' });
    
    setEditingProductId(null);
    setNewProduct({ product_id: '', title: '', category: 'Planning & Design', status: '', description: '', image: '' });
    
    setEditingShowcaseId(null);
    setNewShowcase({ title: '', video: '', poster: '', category: '', description: '' });
    
    setEditingProjectId(null);
    setNewProject({ project_id: '', title: '', category: 'Built Environment', status: '', description: '', client_industry: '', key_features: '', image: '' });
    
    setEditingCaseStudyId(null);
    setNewCaseStudy({ case_id: '', industry: '', title: '', problem: '', solution: '', implementation: '', results: '', impact: '', before: '', after: '', image: 'planning', video_url: '' });
    
    setEditingPartnerId(null);
    setNewPartner({ title: '', description: '', partners: '' });
    
    setEditingResourceId(null);
    setNewResource({ resource_id: '', title: '', category: 'Articles', summary: '', image: 'sustainability', date: '', trending: false, featured: false, read_time: '' });
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Navigation tabs
  const [activeTab, setActiveTab] = useState('bookings'); // bookings | cms-editor
  const [cmsSubTab, setCmsSubTab] = useState('about'); // about | services | products | showcases | projects | casestudies | partners | resources

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setLoginError('');
      fetchData();
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const adminRes = await fetch('http://localhost:8000/api/admin-data/');
      if (adminRes.ok) {
        const adminData = await adminRes.json();
        setBookings(adminData.bookings || []);
      }

      // Fetch About content
      const aboutRes = await fetch('http://localhost:8000/api/about/');
      if (aboutRes.ok) {
        const aboutData = await aboutRes.json();
        const ovData = {
          overview: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' },
          challenges: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' },
          adaptability: { title: '', paragraph_1: '', paragraph_2: '', paragraph_3: '' }
        };
        (aboutData.overview || []).forEach(item => {
          if (ovData[item.block_key]) ovData[item.block_key] = item;
        });
        setOverviews(ovData);
        setTimeline(aboutData.timeline || []);
        if (aboutData.mission_vision) setMissionVision(aboutData.mission_vision);
        setStats(aboutData.stats || []);
        setLeadership(aboutData.leadership || []);
      }

      // Fetch dynamic CMS data
      const cmsRes = await fetch('http://localhost:8000/api/cms/');
      if (cmsRes.ok) {
        const cmsData = await cmsRes.json();
        setServices(cmsData.services || []);
        setProducts(cmsData.products || []);
        setShowcases(cmsData.showcases || []);
        setProjects(cmsData.projects || []);
        setCaseStudies(cmsData.case_studies || []);
        setPartners(cmsData.partners || []);
        setResources(cmsData.resources || []);
      }

    } catch (err) {
      setError('Cannot connect to Django backend. Make sure it is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  // Actions for Bookings
  const handleDeleteBooking = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/bookings/${id}/`, { method: 'DELETE' });
      if (response.ok) setBookings(prev => prev.filter(b => b.id !== id));
    } catch (err) { console.error(err); }
  };

  // Company Overview Action
  const handleSaveOverview = async (blockKey) => {
    try {
      const block = overviews[blockKey];
      const response = await fetch('http://localhost:8000/api/about/overview/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ block_key: blockKey, ...block })
      });
      if (response.ok) alert(`${blockKey.toUpperCase()} overview section saved!`);
    } catch (err) { console.error(err); }
  };

  // Timeline Actions
  const handleAddTimeline = async (e) => {
    e.preventDefault();
    try {
      const payload = editingEventId ? { id: editingEventId, ...newEvent } : newEvent;
      const response = await fetch('http://localhost:8000/api/about/timeline/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const saved = await response.json();
        if (editingEventId) {
          setTimeline(prev => prev.map(item => item.id === editingEventId ? saved : item).sort((a,b) => a.year.localeCompare(b.year)));
        } else {
          setTimeline(prev => [...prev, saved].sort((a,b) => a.year.localeCompare(b.year)));
        }
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteTimeline = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/about/timeline/${id}/`, { method: 'DELETE' });
      if (response.ok) {
        setTimeline(prev => prev.filter(i => i.id !== id));
        if (editingEventId === id) setEditingEventId(null);
      }
    } catch (err) { console.error(err); }
  };

  // Mission & Vision Action
  const handleSaveMissionVision = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/about/mission-vision/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(missionVision)
      });
      if (response.ok) alert('Mission & Vision updated!');
    } catch (err) { console.error(err); }
  };

  // Stat Card Actions
  const handleAddStat = async (e) => {
    e.preventDefault();
    try {
      const payload = editingStatId ? { id: editingStatId, ...newStat } : newStat;
      const response = await fetch('http://localhost:8000/api/about/stats/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const saved = await response.json();
        if (editingStatId) {
          setStats(prev => prev.map(i => i.id === editingStatId ? saved : i));
        } else {
          setStats(prev => [...prev, saved]);
        }
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteStat = async (id) => {
    if (!window.confirm('Delete this stat?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/about/stats/${id}/`, { method: 'DELETE' });
      if (response.ok) setStats(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Leadership Actions
  const handleAddLeader = async (e) => {
    e.preventDefault();
    try {
      const payload = editingLeaderId ? { id: editingLeaderId, ...newLeader } : newLeader;
      const response = await fetch('http://localhost:8000/api/about/leadership/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const saved = await response.json();
        if (editingLeaderId) {
          setLeadership(prev => prev.map(i => i.id === editingLeaderId ? saved : i));
        } else {
          setLeadership(prev => [...prev, saved]);
        }
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteLeader = async (id) => {
    if (!window.confirm('Delete member?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/about/leadership/${id}/`, { method: 'DELETE' });
      if (response.ok) setLeadership(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Service Actions
  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      const payload = editingServiceId ? { id: editingServiceId, ...newService } : newService;
      const response = await fetch('http://localhost:8000/api/cms/services/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Service saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/services/${id}/`, { method: 'DELETE' });
      if (response.ok) setServices(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Product Actions
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = editingProductId ? { id: editingProductId, ...newProduct } : newProduct;
      const response = await fetch('http://localhost:8000/api/cms/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Product saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/products/${id}/`, { method: 'DELETE' });
      if (response.ok) setProducts(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Showcase Actions
  const handleSaveShowcase = async (e) => {
    e.preventDefault();
    try {
      const payload = editingShowcaseId ? { id: editingShowcaseId, ...newShowcase } : newShowcase;
      const response = await fetch('http://localhost:8000/api/cms/showcases/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Showcase saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteShowcase = async (id) => {
    if (!window.confirm('Delete this showcase?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/showcases/${id}/`, { method: 'DELETE' });
      if (response.ok) setShowcases(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Project Actions
  const handleSaveProject = async (e) => {
    e.preventDefault();
    try {
      const payload = editingProjectId ? { id: editingProjectId, ...newProject } : newProject;
      const response = await fetch('http://localhost:8000/api/cms/projects/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Project saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/projects/${id}/`, { method: 'DELETE' });
      if (response.ok) setProjects(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Case Study Actions
  const handleSaveCaseStudy = async (e) => {
    e.preventDefault();
    try {
      const payload = editingCaseStudyId ? { id: editingCaseStudyId, ...newCaseStudy } : newCaseStudy;
      const response = await fetch('http://localhost:8000/api/cms/casestudies/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Case Study saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteCaseStudy = async (id) => {
    if (!window.confirm('Delete this case study?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/casestudies/${id}/`, { method: 'DELETE' });
      if (response.ok) setCaseStudies(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Partner Actions
  const handleSavePartner = async (e) => {
    e.preventDefault();
    try {
      const payload = editingPartnerId ? { id: editingPartnerId, ...newPartner } : newPartner;
      const response = await fetch('http://localhost:8000/api/cms/partners/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Partner category saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeletePartner = async (id) => {
    if (!window.confirm('Delete this partner category?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/partners/${id}/`, { method: 'DELETE' });
      if (response.ok) setPartners(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Resource Actions
  const handleSaveResource = async (e) => {
    e.preventDefault();
    try {
      const payload = editingResourceId ? { id: editingResourceId, ...newResource } : newResource;
      const response = await fetch('http://localhost:8000/api/cms/resources/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Resource saved successfully!');
        fetchData();
        closeModal();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteResource = async (id) => {
    if (!window.confirm('Delete this resource?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/cms/resources/${id}/`, { method: 'DELETE' });
      if (response.ok) setResources(prev => prev.filter(i => i.id !== id));
    } catch (err) { console.error(err); }
  };

  // Render Login Page
  if (!isAuthenticated) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.015 }}
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          className="w-full max-w-md bg-white/90 backdrop-blur-md border border-accent/30 rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10 hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] hover:border-accent transition-all duration-500"
        >
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-accent/5 border border-accent/20 text-accent rounded-2xl mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold font-display text-slate-900 leading-tight">Admin Authentication</h2>
            <p className="text-xs text-slate-500 mt-1">Access the Aptiv8 secure backend logs portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">Username</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                placeholder="Enter admin username"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm transition-all"
                  placeholder="Enter secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {loginError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-accent font-semibold bg-accent/5 p-3.5 rounded-xl border border-accent/20"
              >
                {loginError}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent-hover transition-colors shadow-lg hover:shadow-[0_10px_25px_rgba(239,68,68,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Sign In <Sparkles className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col md:flex-row relative overflow-hidden pt-20">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-72 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0 z-10 shadow-sm">
        <div className="flex flex-col gap-8">
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] font-semibold uppercase tracking-wider mb-3 font-mono shadow-sm">
              <Database className="h-3 w-3" />
              Aptiv8 Command Console
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900 leading-tight">Admin Dashboard</h2>
            <p className="text-[10px] text-slate-500 mt-1">Live Database Synchronization</p>
          </div>

          <nav className="flex flex-col gap-2.5">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex flex-row items-center gap-3.5 px-5 py-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Calendar className="h-5 w-5 shrink-0" />
              <span>Bookings ({bookings.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('cms-editor')}
              className={`flex flex-row items-center gap-3.5 px-5 py-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'cms-editor'
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Edit3 className="h-5 w-5 shrink-0" />
              <span>Page Contents CMS</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
          <button
            onClick={fetchData}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-slate-200 hover:border-accent hover:bg-accent/5 font-semibold text-xs uppercase tracking-wider font-mono text-slate-600 hover:text-accent transition-all duration-300"
          >
            <RefreshCw className={`h-4.5 w-4.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
          <div className="text-[9px] text-slate-400 font-mono text-center">
            Database Status: <span className="text-green-600 font-bold">ONLINE</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto max-h-[calc(100vh-80px)]">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400 font-mono text-sm gap-3">
            <RefreshCw className="h-8 w-8 animate-spin text-accent" />
            <span>Fetching secure database records...</span>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            
            {/* BOOKINGS VIEW */}
            {activeTab === 'bookings' && (
              <motion.div
                key="bookings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h3 className="text-2xl font-bold font-display text-slate-900">Consultation Bookings</h3>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {bookings.length === 0 ? (
                    <div className="col-span-2 text-center py-16 bg-white border border-slate-200 rounded-3xl text-slate-400">
                      No bookings found.
                    </div>
                  ) : (
                    bookings.map((booking) => (
                      <div key={booking.id} className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1">Corporate Booking</span>
                              <h4 className="text-2xl font-bold font-display text-slate-900">{booking.company}</h4>
                            </div>
                            <button onClick={() => handleDeleteBooking(booking.id)} className="p-2.5 rounded-xl bg-accent/5 border border-accent/10 text-accent hover:bg-accent hover:text-white transition-all cursor-pointer">
                              <Trash2 className="h-4.5 w-4.5" />
                            </button>
                          </div>

                          <div className="space-y-3.5 text-slate-600 text-sm border-t border-slate-100 pt-4 mb-6">
                            <div>Representative: <strong className="text-slate-900">{booking.name}</strong></div>
                            <div>Email: <a href={`mailto:${booking.email}`} className="hover:underline hover:text-accent">{booking.email}</a></div>
                            <div>Phone: {booking.phone}</div>
                            <div>Date & Time: <strong className="text-slate-900">{booking.date} at {booking.time}</strong></div>
                          </div>

                          {booking.details && (
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 italic">
                              {booking.details}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* UNIFIED CMS EDITOR */}
            {activeTab === 'cms-editor' && (
              <motion.div
                key="cms-editor"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                {/* CMS Page Sub-navigation */}
                <div className="border-b border-slate-200 pb-4 flex flex-wrap gap-2.5">
                  {[
                    { id: 'about', label: 'About Us' },
                    { id: 'services', label: 'Services' },
                    { id: 'products', label: 'Products' },
                    { id: 'showcases', label: 'Showcases' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'casestudies', label: 'Case Studies' },
                    { id: 'partners', label: 'Partners' },
                    { id: 'resources', label: 'Resources' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setCmsSubTab(tab.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                        cmsSubTab === tab.id
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* --- ABOUT US SUB-EDITOR --- */}
                {cmsSubTab === 'about' && (
                  <div className="space-y-12">
                    {/* 1. COMPANY OVERVIEW */}
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-8">
                      <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                        <FileText className="h-5 w-5 text-accent" /> Company Overview Section
                      </h4>
                      {['overview', 'challenges', 'adaptability'].map((key) => (
                        <div key={key} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                          <span className="text-xs font-mono font-bold text-accent uppercase">{key} Block</span>
                          <div className="grid grid-cols-1 gap-4">
                            <input
                              type="text"
                              value={overviews[key]?.title || ''}
                              onChange={(e) => setOverviews(prev => ({
                                ...prev,
                                [key]: { ...prev[key], title: e.target.value }
                              }))}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm"
                              placeholder="Block Title"
                            />
                            <textarea
                              value={overviews[key]?.paragraph_1 || ''}
                              onChange={(e) => setOverviews(prev => ({
                                ...prev,
                                [key]: { ...prev[key], paragraph_1: e.target.value }
                              }))}
                              className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm"
                              placeholder="Bullet point / Detail 1"
                              rows="2"
                            />
                            <textarea
                              value={overviews[key]?.paragraph_2 || ''}
                              onChange={(e) => setOverviews(prev => ({
                                ...prev,
                                [key]: { ...prev[key], paragraph_2: e.target.value }
                              }))}
                              className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm"
                              placeholder="Bullet point / Detail 2"
                              rows="2"
                            />
                            <textarea
                              value={overviews[key]?.paragraph_3 || ''}
                              onChange={(e) => setOverviews(prev => ({
                                ...prev,
                                [key]: { ...prev[key], paragraph_3: e.target.value }
                              }))}
                              className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm"
                              placeholder="Bullet point / Detail 3"
                              rows="2"
                            />
                          </div>
                          <button
                            onClick={() => handleSaveOverview(key)}
                            className="px-4 py-2 bg-accent text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer"
                          >
                            <Save className="h-4 w-4" /> Save {key} block
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* 2. COMPANY HISTORY TIMELINE */}
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-accent" /> Company History Timeline
                        </h4>
                        <button
                          onClick={() => { resetForms(); openModal('timeline'); }}
                          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                        >
                          <Plus className="h-4 w-4" /> Add Event
                        </button>
                      </div>
                      <div className="space-y-3">
                        {timeline.map(event => (
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={event.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center">
                            <div>
                              <span className="font-mono font-bold text-accent mr-3">[{event.year}]</span>
                              <strong className="text-slate-900">{event.title}</strong>
                              <p className="text-xs text-slate-500 mt-1">{event.description}</p>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => { setEditingEventId(event.id); setNewEvent({ year: event.year, title: event.title, description: event.description }); openModal('timeline'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs">
                                <Edit3 className="h-4 w-4" /> Edit
                              </button>
                              <button onClick={() => handleDeleteTimeline(event.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer">
                                <Trash2 className="h-4.5 w-4.5" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 3. MISSION & VISION */}
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                      <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                        <Heart className="h-5 w-5 text-accent" /> Mission & Vision Statement
                      </h4>
                      <form onSubmit={handleSaveMissionVision} className="space-y-4">
                        <textarea value={missionVision.vision_text} onChange={(e) => setMissionVision(prev => ({ ...prev, vision_text: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm" rows="2" placeholder="Vision Statement" required />
                        <textarea value={missionVision.mission_text} onChange={(e) => setMissionVision(prev => ({ ...prev, mission_text: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm" rows="2" placeholder="Mission Statement" required />
                        <button type="submit" className="px-6 py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center gap-1.5 cursor-pointer">
                          <Save className="h-4.5 w-4.5" /> Save Statements
                        </button>
                      </form>
                    </div>

                    {/* 4. STATISTICS CARDS */}
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-accent" /> Statistics counters
                        </h4>
                        <button
                          onClick={() => { resetForms(); openModal('stat'); }}
                          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                        >
                          <Plus className="h-4 w-4" /> Add Stat
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map(stat => (
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={stat.id} className="p-5 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm">
                            <div>
                              <span className="text-2xl font-bold text-accent block">{stat.value}</span>
                              <span className="text-xs text-slate-500 uppercase font-semibold">{stat.label}</span>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => { setEditingStatId(stat.id); setNewStat({ label: stat.label, value: stat.value }); openModal('stat'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer text-xs">Edit</button>
                              <button onClick={() => handleDeleteStat(stat.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 5. LEADERSHIP TEAM */}
                    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" /> Leadership Board Editor
                        </h4>
                        <button
                          onClick={() => { resetForms(); openModal('leader'); }}
                          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                        >
                          <Plus className="h-4 w-4" /> Add Member
                        </button>
                      </div>
                      <div className="space-y-3">
                        {leadership.map(member => (
                          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={member.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                            <div>
                              <strong className="text-slate-900">{member.name}</strong>
                              <span className="text-[10px] text-accent uppercase ml-3 font-semibold">({member.role})</span>
                              <p className="text-xs text-slate-500 mt-1">{member.bio}</p>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => { setEditingLeaderId(member.id); setNewLeader({ name: member.name, role: member.role, bio: member.bio, icon_name: member.icon_name }); openModal('leader'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs">Edit</button>
                              <button onClick={() => handleDeleteLeader(member.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}



                {/* --- SERVICES SUB-EDITOR --- */}
                {cmsSubTab === 'services' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Services Offered</h4>
                      <button
                        onClick={() => { resetForms(); openModal('service'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Service
                      </button>
                    </div>
                    <div className="space-y-3">
                      {services.map(srv => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={srv.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{srv.title}</strong>
                            <span className="text-xs text-accent uppercase font-semibold ml-2">({srv.badge})</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingServiceId(srv.id); setNewService({ ...srv, highlights: Array.isArray(srv.highlights) ? srv.highlights.join(',') : srv.highlights }); openModal('service'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteService(srv.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- PRODUCTS SUB-EDITOR --- */}
                {cmsSubTab === 'products' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Products List</h4>
                      <button
                        onClick={() => { resetForms(); openModal('product'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Product
                      </button>
                    </div>
                    <div className="space-y-3">
                      {products.map(prod => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={prod.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{prod.title}</strong>
                            <span className="text-xs text-slate-500 font-mono ml-2">[{prod.category}]</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingProductId(prod.id); setNewProduct(prod); openModal('product'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteProduct(prod.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- SHOWCASES SUB-EDITOR --- */}
                {cmsSubTab === 'showcases' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Showcases List</h4>
                      <button
                        onClick={() => { resetForms(); openModal('showcase'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Showcase
                      </button>
                    </div>
                    <div className="space-y-3">
                      {showcases.map(sh => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={sh.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{sh.title}</strong>
                            <span className="text-xs text-accent font-semibold ml-2">({sh.category})</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingShowcaseId(sh.id); setNewShowcase(sh); openModal('showcase'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteShowcase(sh.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- PROJECTS SUB-EDITOR --- */}
                {cmsSubTab === 'projects' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Projects List</h4>
                      <button
                        onClick={() => { resetForms(); openModal('project'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Project
                      </button>
                    </div>
                    <div className="space-y-3">
                      {projects.map(pj => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={pj.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{pj.title}</strong>
                            <span className="text-xs text-slate-500 font-mono ml-2">[{pj.category}]</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingProjectId(pj.id); setNewProject(pj); openModal('project'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteProject(pj.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- CASE STUDIES SUB-EDITOR --- */}
                {cmsSubTab === 'casestudies' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Case Studies List</h4>
                      <button
                        onClick={() => { resetForms(); openModal('casestudy'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Case Study
                      </button>
                    </div>
                    <div className="space-y-3">
                      {caseStudies.map(cs => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={cs.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{cs.title}</strong>
                            <span className="text-xs text-slate-500 font-mono ml-2">[{cs.industry}]</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingCaseStudyId(cs.id); setNewCaseStudy(cs); openModal('casestudy'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteCaseStudy(cs.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4.5 w-4.5" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- PARTNERS SUB-EDITOR --- */}
                {cmsSubTab === 'partners' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Partners & Alliances</h4>
                      <button
                        onClick={() => { resetForms(); openModal('partner'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Partner Category
                      </button>
                    </div>
                    <div className="space-y-3">
                      {partners.map(pt => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={pt.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{pt.title}</strong>
                            <p className="text-xs text-slate-400 mt-1">{pt.partners}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingPartnerId(pt.id); setNewPartner(pt); openModal('partner'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeletePartner(pt.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- RESOURCES SUB-EDITOR --- */}
                {cmsSubTab === 'resources' && (
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-6">
                      <h4 className="text-lg font-bold text-slate-900">Resource Materials</h4>
                      <button
                        onClick={() => { resetForms(); openModal('resource'); }}
                        className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs uppercase font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                      >
                        <Plus className="h-4 w-4" /> Add Resource
                      </button>
                    </div>
                    <div className="space-y-3">
                      {resources.map(res => (
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={res.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-xs">
                          <div>
                            <strong className="text-slate-900">{res.title}</strong>
                            <span className="text-xs text-slate-500 font-mono ml-2">[{res.category}]</span>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => { setEditingResourceId(res.id); setNewResource(res); openModal('resource'); }} className="p-2 text-slate-400 hover:text-accent cursor-pointer flex items-center gap-1 text-xs"><Edit3 className="h-4 w-4" /> Edit</button>
                            <button onClick={() => handleDeleteResource(res.id)} className="p-2 text-slate-400 hover:text-accent cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            )}

          </AnimatePresence>
        )}

      </main>

      {/* MODAL OVERLAY FOR EDITOR FORMS */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto z-10 text-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-slate-950 hover:bg-slate-100 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 border-b border-slate-100 pb-3">
                <h3 className="text-xl font-bold font-display text-slate-900">
                  {editingEventId || editingStatId || editingLeaderId || editingServiceId || editingProductId || editingShowcaseId || editingProjectId || editingCaseStudyId || editingPartnerId || editingResourceId ? 'Edit Data Record' : 'Create New Record'}
                </h3>
                <p className="text-xs text-slate-500 mt-1 uppercase font-semibold tracking-wider font-mono">
                  Module: {modalType}
                </p>
              </div>

              {/* 1. TIMELINE FORM */}
              {modalType === 'timeline' && (
                <form onSubmit={handleAddTimeline} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Year</label>
                      <input type="text" value={newEvent.year} onChange={(e) => setNewEvent(prev => ({ ...prev, year: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="e.g. 2026" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input type="text" value={newEvent.title} onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea value={newEvent.description} onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Description" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full px-5 py-3.5 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4.5 w-4.5" /> {editingEventId ? 'Save Event' : 'Add Event'}
                  </button>
                </form>
              )}

              {/* 2. STAT FORM */}
              {modalType === 'stat' && (
                <form onSubmit={handleAddStat} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Label</label>
                      <input type="text" value={newStat.label} onChange={(e) => setNewStat(prev => ({ ...prev, label: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Label" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Value</label>
                      <input type="text" value={newStat.value} onChange={(e) => setNewStat(prev => ({ ...prev, value: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Value (e.g. 150+)" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full px-5 py-3.5 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4.5 w-4.5" /> Save Stat
                  </button>
                </form>
              )}

              {/* 3. LEADER FORM */}
              {modalType === 'leader' && (
                <form onSubmit={handleAddLeader} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Name</label>
                      <input type="text" value={newLeader.name} onChange={(e) => setNewLeader(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Name" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Role</label>
                      <input type="text" value={newLeader.role} onChange={(e) => setNewLeader(prev => ({ ...prev, role: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Role" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Icon Type</label>
                      <select value={newLeader.icon_name} onChange={(e) => setNewLeader(prev => ({ ...prev, icon_name: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="Briefcase">Briefcase</option>
                        <option value="Cpu">Cpu</option>
                        <option value="Settings">Settings</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Bio</label>
                      <textarea value={newLeader.bio} onChange={(e) => setNewLeader(prev => ({ ...prev, bio: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Bio" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full px-5 py-3.5 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4.5 w-4.5" /> Save Profile
                  </button>
                </form>
              )}

              {/* 4. SERVICE FORM */}
              {modalType === 'service' && (
                <form onSubmit={handleSaveService} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Service ID</label>
                      <input type="text" value={newService.service_id} onChange={(e) => setNewService(prev => ({ ...prev, service_id: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Unique ID" required disabled={!!editingServiceId} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input type="text" value={newService.title} onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Badge</label>
                      <input type="text" value={newService.badge} onChange={(e) => setNewService(prev => ({ ...prev, badge: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Badge" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Image URL</label>
                      <input type="text" value={newService.image} onChange={(e) => setNewService(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Image URL" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Gradient Theme Class</label>
                      <input type="text" value={newService.color} onChange={(e) => setNewService(prev => ({ ...prev, color: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="e.g. from-blue-500 to-cyan-500" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Highlights (comma separated)</label>
                      <input type="text" value={newService.highlights} onChange={(e) => setNewService(prev => ({ ...prev, highlights: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Highlight 1, Highlight 2" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea value={newService.description} onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Description content" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Service
                  </button>
                </form>
              )}

              {/* 5. PRODUCT FORM */}
              {modalType === 'product' && (
                <form onSubmit={handleSaveProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Product ID</label>
                      <input type="text" value={newProduct.product_id} onChange={(e) => setNewProduct(prev => ({ ...prev, product_id: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Unique ID" required disabled={!!editingProductId} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input type="text" value={newProduct.title} onChange={(e) => setNewProduct(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                      <select value={newProduct.category} onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="Planning & Design">Planning & Design</option>
                        <option value="Pre-Construction">Pre-Construction</option>
                        <option value="Construction">Construction</option>
                        <option value="Operations & Maintenance">Operations & Maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Status Badge</label>
                      <input type="text" value={newProduct.status} onChange={(e) => setNewProduct(prev => ({ ...prev, status: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="e.g. Seeking Partners" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Image URL</label>
                      <input type="text" value={newProduct.image} onChange={(e) => setNewProduct(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Image URL" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea value={newProduct.description} onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Description content" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Product
                  </button>
                </form>
              )}

              {/* 6. SHOWCASE FORM */}
              {modalType === 'showcase' && (
                <form onSubmit={handleSaveShowcase} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input type="text" value={newShowcase.title} onChange={(e) => setNewShowcase(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Showcase Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                      <input type="text" value={newShowcase.category} onChange={(e) => setNewShowcase(prev => ({ ...prev, category: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Category" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Video URL / Path</label>
                      <input type="text" value={newShowcase.video} onChange={(e) => setNewShowcase(prev => ({ ...prev, video: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="e.g. /DC_design.mp4" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Poster Image URL</label>
                      <input type="text" value={newShowcase.poster} onChange={(e) => setNewShowcase(prev => ({ ...prev, poster: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Poster Image URL" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea value={newShowcase.description} onChange={(e) => setNewShowcase(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Description content" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Showcase
                  </button>
                </form>
              )}

              {/* 7. PROJECT FORM */}
              {modalType === 'project' && (
                <form onSubmit={handleSaveProject} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Project ID</label>
                      <input type="text" value={newProject.project_id} onChange={(e) => setNewProject(prev => ({ ...prev, project_id: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Project ID" required disabled={!!editingProjectId} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Project Name</label>
                      <input type="text" value={newProject.title} onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Project Name" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                      <select value={newProject.category} onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="Built Environment">Built Environment</option>
                        <option value="Public & Other Sectors">Public & Other Sectors</option>
                        <option value="Media & Storyboards">Media & Storyboards</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Status Label</label>
                      <input type="text" value={newProject.status} onChange={(e) => setNewProject(prev => ({ ...prev, status: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Status Label" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Client Industry</label>
                      <input type="text" value={newProject.client_industry} onChange={(e) => setNewProject(prev => ({ ...prev, client_industry: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Client Industry" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Key Features Summary</label>
                      <input type="text" value={newProject.key_features} onChange={(e) => setNewProject(prev => ({ ...prev, key_features: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Key Features" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Image URL</label>
                      <input type="text" value={newProject.image} onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Image URL" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea value={newProject.description} onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Description content" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Project
                  </button>
                </form>
              )}

              {/* 8. CASE STUDY FORM */}
              {modalType === 'casestudy' && (
                <form onSubmit={handleSaveCaseStudy} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Case Study ID</label>
                      <input type="text" value={newCaseStudy.case_id} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, case_id: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Case Study ID" required disabled={!!editingCaseStudyId} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Industry</label>
                      <input type="text" value={newCaseStudy.industry} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, industry: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Industry" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Headline / Title</label>
                      <input type="text" value={newCaseStudy.title} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Headline / Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Metrics Before</label>
                      <input type="text" value={newCaseStudy.before} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, before: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Metrics Before" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Metrics After</label>
                      <input type="text" value={newCaseStudy.after} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, after: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Metrics After" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Video URL</label>
                      <input type="text" value={newCaseStudy.video_url} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, video_url: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Video URL" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Image Representation</label>
                      <select value={newCaseStudy.image} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="planning">planning (Architectural Vector)</option>
                        <option value="fireSafety">fireSafety (Flame Safety Icon)</option>
                        <option value="compliance">compliance (Authority Shield)</option>
                        <option value="strata">strata (Strata Blueprint)</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Problem Details</label>
                      <textarea value={newCaseStudy.problem} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, problem: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Problem Details" rows="2" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Solution Details</label>
                      <textarea value={newCaseStudy.solution} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, solution: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Solution Details" rows="2" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Implementation Steps</label>
                      <textarea value={newCaseStudy.implementation} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, implementation: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Implementation Steps" rows="2" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Results Summary</label>
                      <textarea value={newCaseStudy.results} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, results: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Results summary" rows="2" required />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Impact Statement</label>
                      <textarea value={newCaseStudy.impact} onChange={(e) => setNewCaseStudy(prev => ({ ...prev, impact: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Impact statement" rows="2" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Case Study
                  </button>
                </form>
              )}

              {/* 9. PARTNER FORM */}
              {modalType === 'partner' && (
                <form onSubmit={handleSavePartner} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category Title</label>
                      <input type="text" value={newPartner.title} onChange={(e) => setNewPartner(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Technology Partners" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Affiliated Companies (comma separated)</label>
                      <input type="text" value={newPartner.partners} onChange={(e) => setNewPartner(prev => ({ ...prev, partners: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Google, Microsoft, AWS" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category Scope Description</label>
                      <textarea value={newPartner.description} onChange={(e) => setNewPartner(prev => ({ ...prev, description: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Category Scope Description" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Partner Type
                  </button>
                </form>
              )}

              {/* 10. RESOURCE FORM */}
              {modalType === 'resource' && (
                <form onSubmit={handleSaveResource} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Resource ID</label>
                      <input type="text" value={newResource.resource_id} onChange={(e) => setNewResource(prev => ({ ...prev, resource_id: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Resource ID" required disabled={!!editingResourceId} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Resource Title</label>
                      <input type="text" value={newResource.title} onChange={(e) => setNewResource(prev => ({ ...prev, title: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Resource Title" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                      <select value={newResource.category} onChange={(e) => setNewResource(prev => ({ ...prev, category: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="Articles">Articles</option>
                        <option value="White Papers">White Papers</option>
                        <option value="Research Papers">Research Papers</option>
                        <option value="Tech Docs">Tech Docs</option>
                        <option value="Insights">Insights</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Publish Date</label>
                      <input type="text" value={newResource.date} onChange={(e) => setNewResource(prev => ({ ...prev, date: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Aug 12, 2026" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Read Time</label>
                      <input type="text" value={newResource.read_time} onChange={(e) => setNewResource(prev => ({ ...prev, read_time: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="e.g. 10 min read" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Representation Icon</label>
                      <select value={newResource.image} onChange={(e) => setNewResource(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm">
                        <option value="sustainability">sustainability (Leaf)</option>
                        <option value="fireSafety">fireSafety (Fire)</option>
                        <option value="compliance">compliance (Shield)</option>
                        <option value="strata">strata (Strata)</option>
                        <option value="cortex">cortex (Mind)</option>
                        <option value="bidPrep">bidPrep (Chart)</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-6 py-2 col-span-2">
                      <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                        <input type="checkbox" checked={newResource.trending} onChange={(e) => setNewResource(prev => ({ ...prev, trending: e.target.checked }))} className="rounded border-slate-300 text-accent focus:ring-accent" /> Trending Card
                      </label>
                      <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                        <input type="checkbox" checked={newResource.featured} onChange={(e) => setNewResource(prev => ({ ...prev, featured: e.target.checked }))} className="rounded border-slate-300 text-accent focus:ring-accent" /> Featured Card
                      </label>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Summary Content</label>
                      <textarea value={newResource.summary} onChange={(e) => setNewResource(prev => ({ ...prev, summary: e.target.value }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm" placeholder="Summary Content" rows="3" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-white font-semibold rounded-xl text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer">
                    <Save className="h-4 w-4" /> Save Resource
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
