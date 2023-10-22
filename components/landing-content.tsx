"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    avatar: "JS",
    title: "Data Scientist",
    description: "This application is absolutely outstanding!",
  },
  {
    name: "David Reynolds",
    avatar: "D",
    title: "Designer",
    description: "I rely on this app every day to create fresh photos.",
  },
  {
    name: "Emily Chang",
    avatar: "E",
    title: "Cloud Solutions Architect",
    description: "My life has been transformed by this app; I can't fathom working without it.",
  },
  {
    name: "Alex Patel",
    avatar: "A",
    title: "CFO",
    description: "Top-notch quality, unquestionably justifying the premium subscription.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}