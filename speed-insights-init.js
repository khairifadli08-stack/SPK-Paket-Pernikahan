// Vercel Speed Insights Initialization
// This script manually injects the Speed Insights tracking script
(function() {
  'use strict';
  
  // Initialize the queue
  if (!window.si) {
    window.si = function() {
      window.siq = window.siq || [];
      window.siq.push(Array.from(arguments));
    };
  }
  
  // Check if script is already loaded
  const scriptSrc = '/_vercel/speed-insights/script.js';
  if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
    return;
  }
  
  // Create and inject the script
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.defer = true;
  
  // Add SDK metadata
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '2.0.0';
  
  // Error handler
  script.onerror = function() {
    console.log(
      '[Vercel Speed Insights] Failed to load script from ' + scriptSrc + 
      '. Please check if any content blockers are enabled and try again.'
    );
  };
  
  // Append to head
  document.head.appendChild(script);
})();
