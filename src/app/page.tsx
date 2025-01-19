"use client";

import { MultiSelect } from "@/components/multi-select";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

import React from "react";

const Page = () => {

 const languages = [
   {
     value: "python",
     label: "Python",
     description:
       "A versatile language known for its simplicity and readability",
   },
   {
     value: "javascript",
     label: "JavaScript",
     description:
       "The language of the web, powering frontend and backend development",
   },
   {
     value: "java",
     label: "Java",
     description:
       "A class-based, object-oriented programming language designed for portability",
   },
   {
     value: "rust",
     label: "Rust",
     description:
       "A systems language focusing on safety and performance without garbage collection",
   },
   {
     value: "golang",
     label: "Go",
     description:
       "A fast, statically typed language designed for simplicity and efficiency",
   },
 ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/belikeabhayx" },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/belikeabhayx",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/belikeabhayx",
    },
  ];

  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            Shadcn Multi-Select Component
          </h1>
          <p className="text-gray-400 text-sm">
            Powered by shadcn/ui select primitives
          </p>
        </div>
        <Card className="border-none shadow-2xl bg-gradient-to-b from-gray-900/90 to-black backdrop-blur-sm border border-gray-800">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-white" />
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                Language Selection
              </CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Choose your preferred coding languages from the list below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <MultiSelect
              options={languages}
              value={selected}
              onChange={setSelected}
              placeholder="Select languages..."
            />
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">
                Selected languages: {selected.length} of {languages.length}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.map((value) => (
                  <Badge
                    key={value}
                    variant="secondary"
                    className="px-3 py-1 rounded-md bg-gray-800 text-gray-200"
                  >
                    {languages.find((f) => f.value === value)?.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-800 mt-6">
            <div className="w-full flex items-center justify-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
