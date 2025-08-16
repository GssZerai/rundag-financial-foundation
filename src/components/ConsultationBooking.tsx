import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";
import { getSupabase } from "@/integrations/supabase/client";

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}

const ConsultationBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.preferred_date) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from('consultations')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            preferred_date: formData.preferred_date,
            preferred_time: formData.preferred_time,
            message: formData.message,
            status: 'pending'
          }
        ]);

      if (error) {
        console.error('Error saving consultation:', error);
        toast.error("Failed to book consultation. Please try again.");
        return;
      }

      toast.success("Consultation booked successfully! We'll contact you soon.");
      
      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferred_date: "",
        preferred_time: "",
        message: ""
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="rundag-cta" size="lg" className="gap-2">
          <Calendar className="h-5 w-5" />
          Book Free Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-rundag-blue">Book Your Free Consultation</DialogTitle>
          <DialogDescription>
            Schedule a personalized consultation with our business experts. We'll discuss your needs and how we can help your business grow.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cons-name">Full Name *</Label>
              <Input
                id="cons-name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cons-email">Email Address *</Label>
              <Input
                id="cons-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cons-phone">Phone Number</Label>
              <Input
                id="cons-phone"
                name="phone"
                type="tel"
                placeholder="+251 XXX XXX XXX"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cons-service">Service of Interest *</Label>
              <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial-consulting">Financial Consulting</SelectItem>
                  <SelectItem value="business-planning">Business Planning</SelectItem>
                  <SelectItem value="tax-advisory">Tax Advisory</SelectItem>
                  <SelectItem value="investment-advisory">Investment Advisory</SelectItem>
                  <SelectItem value="risk-management">Risk Management</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cons-date">Preferred Date *</Label>
              <Input
                id="cons-date"
                name="preferred_date"
                type="date"
                value={formData.preferred_date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cons-time">Preferred Time</Label>
              <Select onValueChange={(value) => handleSelectChange('preferred_time', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cons-message">Additional Message</Label>
            <Textarea
              id="cons-message"
              name="message"
              placeholder="Tell us about your business needs or specific topics you'd like to discuss..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <Button 
            type="submit" 
            variant="rundag-cta" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationBooking;