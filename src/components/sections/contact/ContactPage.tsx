"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactType } from "@/types/alltype";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage({ contact }: { contact: ContactType }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormData>();

  function onSubmit(values: IFormData) {
    console.log("Form məlumatları:", values);
    reset();
    alert("Mesajınız uğurla göndərildi!");
  }

  const safeContact = contact || { phone: '', email: '', address: '', map_url: '' };

  return (
    <div className="container mx-auto px-2 py-16">
      <div>
        <span className="text-[#1C746F] text-sm font-medium">Contact Us</span>
        <h2 className="text-3xl font-medium mb-4">Get in Touch</h2>
      </div>
      <div className="bg-[#f5fbfd] mx-auto p-4 md:p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground"><Phone className="w-8 h-8" /></div>
            <div>
              <p className="text-sm text-muted-foreground">Phone number</p>
              <p className="text-lg font-semibold text-foreground">{safeContact.phone}</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground"><Mail className="w-8 h-8" /></div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg font-semibold text-foreground">{safeContact.email}</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground"><MapPin className="w-8 h-8" /></div>
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="text-lg font-semibold text-foreground">{safeContact.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">We Are Just a Message Away</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div><label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full name</label><Input id="name" placeholder="Enter your full name" {...register("name", { required: "Ad mütləqdir." })} />{errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}</div>
              <div><label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label><Input id="email" type="email" placeholder="Enter your email" {...register("email", { required: "Email mütləqdir." })} />{errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}</div>
              <div><label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label><Input id="phone" type="tel" placeholder="Enter your phone number" {...register("phone", { required: "Nömrə mütləqdir." })} />{errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}</div>
              <div><label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label><Textarea id="message" placeholder="Enter your message" rows={5} {...register("message", { required: "Mesaj mütləqdir." })} />{errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}</div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#53B8B8] py-6 text-white">Send a message <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
            </form>
            
            <div className="relative w-full h-64 lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src={safeContact.map}
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}