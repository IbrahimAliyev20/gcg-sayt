
"use client";

import React, { useState } from "react"; 
import { useForm } from "react-hook-form";
import {  ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactType } from "@/types/alltype";
import { submitContactForm } from "@/lib/contact-form"; 

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage({ contact }: { contact: ContactType }) {
  // Uğurlu və ya xətalı cavabları göstərmək üçün state
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormData>();

  async function onSubmit(values: IFormData) {
    setFormStatus({ message: '', type: '' }); 

    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        note: values.message 
      };
      
      const response = await submitContactForm(payload);
      
      if (response.status) {
        setFormStatus({ message: 'Mesajınız uğurla göndərildi!', type: 'success' });
        reset(); 
      } else {
        setFormStatus({ message: response.message || 'Xəta baş verdi.', type: 'error' });
      }
    } catch (error: unknown) {
  if (error instanceof Error) {
    setFormStatus({ message: error.message || 'Server xətası. Zəhmət olmasa, bir az sonra yenidən cəhd edin.', type: 'error' });
  } else {
    setFormStatus({ message: 'An unknown error occurred.', type: 'error' });
  }
}
  }

  const safeContact = contact || { phone: '', email: '', address: '', map_url: '' };

  return (
    <div className="container mx-auto px-2 py-16">
        <div className="bg-card p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">We Are Just a Message Away</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div><label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full name</label><Input id="name" placeholder="Enter your full name" {...register("name", { required: "Ad mütləqdir." })} />{errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}</div>
              <div><label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label><Input id="email" type="email" placeholder="Enter your email" {...register("email", { required: "Email mütləqdir." })} />{errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}</div>
              <div><label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label><Input id="phone" type="tel" placeholder="Enter your phone number" {...register("phone", { required: "Nömrə mütləqdir." })} />{errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}</div>
              <div><label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label><Textarea id="message" placeholder="Enter your message" rows={5} {...register("message", { required: "Mesaj mütləqdir." })} />{errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}</div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#53B8B8] py-6 text-white">
                {isSubmitting ? "Göndərilir..." : "Send a message"} 
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              
              {formStatus.message && (
                <p className={`mt-4 text-sm font-medium ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {formStatus.message}
                </p>
              )}
            </form>
            <div className="relative w-full h-64 lg:h-auto rounded-lg overflow-hidden">
              <iframe src={safeContact.map} width="100%" height="100%" loading="lazy" className="border-0"></iframe>
            </div>
          </div>
        </div>
      </div>
  );
}