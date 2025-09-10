import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { SnctmContent } from '@/components/SnctmContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <SnctmContent />
    </div>
  );
};

export default Index;
