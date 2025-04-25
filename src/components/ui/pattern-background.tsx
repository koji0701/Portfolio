import React from 'react';

type PatternType = 'circuit' | 'dots' | 'waves' | 'hexagons';

interface PatternBackgroundProps {
  pattern: PatternType;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

export function PatternBackground({ 
  pattern, 
  primaryColor = '#6366f1', 
  secondaryColor = '#4f46e5',
  className = ''
}: PatternBackgroundProps) {
  // Base styles
  const baseClasses = `w-full h-full ${className}`;
  
  // Choose pattern
  switch (pattern) {
    case 'circuit':
      return (
        <div 
          className={baseClasses}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: `
              radial-gradient(${secondaryColor} 2px, transparent 2px),
              linear-gradient(to right, ${secondaryColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${secondaryColor} 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px, 10px 10px, 10px 10px',
            backgroundPosition: '10px 10px, 0 0, 0 0',
            opacity: 0.6
          }}
        />
      );
    case 'dots':
      return (
        <div 
          className={baseClasses}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: `radial-gradient(${secondaryColor} 1px, transparent 1px)`,
            backgroundSize: '10px 10px',
            opacity: 0.6
          }}
        />
      );
    case 'waves':
      return (
        <div 
          className={baseClasses}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: `repeating-linear-gradient(
              45deg, 
              ${secondaryColor} 0, 
              ${secondaryColor} 1px, 
              ${primaryColor} 0, 
              ${primaryColor} 50%
            )`,
            backgroundSize: '10px 10px',
            opacity: 0.6
          }}
        />
      );
    case 'hexagons':
    default:
      return (
        <div 
          className={baseClasses}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: `
              linear-gradient(30deg, ${secondaryColor} 12%, transparent 12.5%, transparent 87%, ${secondaryColor} 87.5%, ${secondaryColor}),
              linear-gradient(150deg, ${secondaryColor} 12%, transparent 12.5%, transparent 87%, ${secondaryColor} 87.5%, ${secondaryColor}),
              linear-gradient(30deg, ${secondaryColor} 12%, transparent 12.5%, transparent 87%, ${secondaryColor} 87.5%, ${secondaryColor}),
              linear-gradient(150deg, ${secondaryColor} 12%, transparent 12.5%, transparent 87%, ${secondaryColor} 87.5%, ${secondaryColor}),
              linear-gradient(60deg, ${secondaryColor}77 25%, transparent 25.5%, transparent 75%, ${secondaryColor}77 75%, ${secondaryColor}77),
              linear-gradient(60deg, ${secondaryColor}77 25%, transparent 25.5%, transparent 75%, ${secondaryColor}77 75%, ${secondaryColor}77)
            `,
            backgroundSize: '20px 35px',
            backgroundPosition: '0 0, 0 0, 10px 17.5px, 10px 17.5px, 0 0, 10px 17.5px',
            opacity: 0.6
          }}
        />
      );
  }
}