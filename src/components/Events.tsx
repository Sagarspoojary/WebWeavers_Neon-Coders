import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Plus, Edit, Trash2, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  organizer: string;
  photos: string[];
  registrations: number;
  maxRegistrations: number;
  createdBy: string;
  createdAt: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
    maxRegistrations: 50
  });
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    const savedEvents = localStorage.getItem('ieee-events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  };

  const saveEvents = (updatedEvents: Event[]) => {
    setEvents(updatedEvents);
    localStorage.setItem('ieee-events', JSON.stringify(updatedEvents));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + selectedPhotos.length > 6) {
      toast({
        title: "Too many photos",
        description: "Maximum 6 photos allowed per event",
        variant: "destructive"
      });
      return;
    }

    // Validate file types and sizes
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Only image files are allowed",
          variant: "destructive"
        });
        return false;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        toast({
          title: "File too large",
          description: "Maximum file size is 5MB",
          variant: "destructive"
        });
        return false;
      }
      return true;
    });

    setSelectedPhotos(prev => [...prev, ...validFiles]);

    // Create preview URLs
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreviewUrls(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setSelectedPhotos(prev => prev.filter((_, i) => i !== index));
    setPhotoPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || user.role !== 'office-bearer') {
      toast({
        title: "Access denied",
        description: "Only office bearers can create events",
        variant: "destructive"
      });
      return;
    }

    if (!formData.title || !formData.date || !formData.venue) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const eventData: Event = {
      id: editingEvent?.id || Date.now().toString(),
      title: formData.title,
      date: formData.date,
      venue: formData.venue,
      description: formData.description,
      organizer: user.name,
      photos: photoPreviewUrls, // Store as base64 strings for demo
      registrations: editingEvent?.registrations || 0,
      maxRegistrations: formData.maxRegistrations,
      createdBy: user.id,
      createdAt: editingEvent?.createdAt || new Date().toISOString()
    };

    let updatedEvents;
    if (editingEvent) {
      updatedEvents = events.map(event => 
        event.id === editingEvent.id ? eventData : event
      );
      toast({
        title: "Event updated",
        description: "Event has been updated successfully",
      });
    } else {
      updatedEvents = [eventData, ...events];
      
      // Notify all members about new event
      addNotification({
        title: 'New Event Created',
        message: `${eventData.title} - ${eventData.date}`,
        type: 'event'
      });
      
      toast({
        title: "Event created",
        description: "Event has been created and members have been notified",
      });
    }

    saveEvents(updatedEvents);
    resetForm();
    setShowCreateModal(false);
    setEditingEvent(null);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      venue: '',
      description: '',
      maxRegistrations: 50
    });
    setSelectedPhotos([]);
    setPhotoPreviewUrls([]);
  };

  const deleteEvent = (eventId: string) => {
    if (!user || user.role !== 'office-bearer') {
      toast({
        title: "Access denied",
        description: "Only office bearers can delete events",
        variant: "destructive"
      });
      return;
    }

    const updatedEvents = events.filter(event => event.id !== eventId);
    saveEvents(updatedEvents);
    toast({
      title: "Event deleted",
      description: "Event has been deleted successfully",
    });
  };

  const startEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      venue: event.venue,
      description: event.description,
      maxRegistrations: event.maxRegistrations
    });
    setPhotoPreviewUrls(event.photos);
    setShowCreateModal(true);
  };

  const registerForEvent = (eventId: string) => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to register for events",
        variant: "destructive"
      });
      return;
    }

    const updatedEvents = events.map(event => {
      if (event.id === eventId && event.registrations < event.maxRegistrations) {
        return { ...event, registrations: event.registrations + 1 };
      }
      return event;
    });

    saveEvents(updatedEvents);
    toast({
      title: "Registration successful",
      description: "You have been registered for the event",
    });
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl text-balance">
              Join our exciting workshops, seminars, and technical events designed to enhance your engineering journey.
            </p>
          </div>
          
          {user && user.role === 'office-bearer' && (
            <Button
              onClick={() => setShowCreateModal(true)}
              className="btn-ieee-primary"
            >
              <Plus className="mr-2 w-4 h-4" />
              Create Event
            </Button>
          )}
        </div>

        {/* Events List */}
        {events.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">No events scheduled</h3>
            <p className="text-muted-foreground">Check back soon for exciting upcoming events!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="card-ieee p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Event Photos */}
                  {event.photos.length > 0 && (
                    <div className="lg:w-1/3">
                      <div className="grid grid-cols-2 gap-2">
                        {event.photos.slice(0, 4).map((photo, idx) => (
                          <div key={idx} className="aspect-square rounded-xl overflow-hidden">
                            <img 
                              src={photo} 
                              alt={`${event.title} photo ${idx + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                              onClick={() => setSelectedEvent(event)}
                            />
                          </div>
                        ))}
                      </div>
                      {event.photos.length > 4 && (
                        <p className="text-center text-sm text-muted-foreground mt-2">
                          +{event.photos.length - 4} more photos
                        </p>
                      )}
                    </div>
                  )}

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-2xl mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm">Organized by {event.organizer}</p>
                      </div>
                      
                      {user && user.role === 'office-bearer' && user.id === event.createdBy && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => startEdit(event)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteEvent(event.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.registrations}/{event.maxRegistrations} registered</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-full bg-muted rounded-full h-2 max-w-xs">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(event.registrations / event.maxRegistrations) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {Math.round((event.registrations / event.maxRegistrations) * 100)}% full
                        </span>
                      </div>

                      <Button
                        onClick={() => registerForEvent(event.id)}
                        disabled={event.registrations >= event.maxRegistrations}
                        className="btn-ieee-primary"
                      >
                        {event.registrations >= event.maxRegistrations ? 'Event Full' : 'Register Now'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create/Edit Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-heading font-bold">
                {editingEvent ? 'Edit Event' : 'Create New Event'}
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingEvent(null);
                  resetForm();
                }}
                className="p-2 hover:bg-muted rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date & Time *</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="venue">Venue *</Label>
                  <Input
                    id="venue"
                    value={formData.venue}
                    onChange={(e) => setFormData(prev => ({ ...prev, venue: e.target.value }))}
                    placeholder="Event venue"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Event description"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="maxRegistrations">Maximum Registrations</Label>
                <Input
                  id="maxRegistrations"
                  type="number"
                  min="1"
                  value={formData.maxRegistrations}
                  onChange={(e) => setFormData(prev => ({ ...prev, maxRegistrations: parseInt(e.target.value) }))}
                />
              </div>

              <div>
                <Label>Event Photos (Max 6, 5MB each)</Label>
                <div className="mt-2">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center justify-center w-full p-6 border-2 border-dashed border-border rounded-2xl hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload photos or drag and drop
                      </p>
                    </div>
                  </label>
                </div>

                {photoPreviewUrls.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {photoPreviewUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingEvent(null);
                    resetForm();
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 btn-ieee-primary"
                >
                  {editingEvent ? 'Update Event' : 'Create Event'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Event Gallery Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-bold">{selectedEvent.title} - Gallery</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedEvent.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${selectedEvent.title} photo ${index + 1}`}
                  className="w-full aspect-square object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;