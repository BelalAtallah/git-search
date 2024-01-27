import React from 'react';

// Mock Next.js Image component
// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ));

