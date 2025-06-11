
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Users } from 'lucide-react';

export default function PartnershipSection() {
  const handleReachOut = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Partner with us</h2>
            <p className="text-xl mb-8">Together, let's shape the future</p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={handleReachOut}
            >
              Reach Out
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-20 p-8 rounded-full">
              <Users className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
