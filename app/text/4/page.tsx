'use client'
import React from 'react';
import { TrueFocus } from "@/components/focus";

const TrueFocusComponent: React.FC = () => {
  return (
    <TrueFocus 
      sentence="This is Cool"
      manualMode={false}
      blurAmount={5}
      borderColor="red"
      animationDuration={1}
      pauseBetweenAnimations={1}
    />
  );
};

export default TrueFocusComponent 
