'use client';

import { useEffect } from 'react';

export default function HydrationFix() {
  useEffect(() => {
    // Extra attributes remove karo jo extensions add karte hain
    const html = document.documentElement; // <html> tag

    // webcrx attribute
    if (html.hasAttribute('webcrx')) {
      html.removeAttribute('webcrx');
    }

    // Common dusre extensions ke attributes bhi (safe side)
    if (html.hasAttribute('cz-shortcut-listen')) {
      html.removeAttribute('cz-shortcut-listen');
    }
    if (html.hasAttribute('data-new-gr-c-s-check-loaded')) {
      html.removeAttribute('data-new-gr-c-s-check-loaded');
    }
    if (html.hasAttribute('data-gr-ext-installed')) {
      html.removeAttribute('data-gr-ext-installed');
    }

    // MutationObserver se future mein add hone se rok do
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'webcrx') {
            html.removeAttribute('webcrx');
          }
          // aur dusre attributes ke liye bhi add kar sakte ho
        }
      });
    });

    observer.observe(html, { attributes: true });
  }, []);

  return null; // Kuch render nahi karna
}