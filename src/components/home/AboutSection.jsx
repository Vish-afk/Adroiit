import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Adroiit Technovations</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Adroiit Technovations is redefining education by building future-ready learning ecosystems through seamless integration of hands-on learning and experimentation with real-world applications to bridge the gap between academia and industry. We are transforming future with our innovative technological solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-8 rounded-full">
              <Lightbulb className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}