"use client";

import React from "react"

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("[v0] Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-medium opacity-70 uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
              Let&apos;s Discuss Your Investment Goals
            </h2>
            <p className="mt-6 opacity-80 leading-relaxed">
              Whether you&apos;re seeking investment opportunities, looking for a venture 
              partner, or exploring financing solutions, our team is ready to help 
              you achieve your objectives.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p className="text-sm opacity-70">info@alphacapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Investment Opportunities</p>
                  <p className="text-sm opacity-70">investments@alphacapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Venture Studio</p>
                  <p className="text-sm opacity-70">ventures@alphacapital.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="mt-1"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="mt-1 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
