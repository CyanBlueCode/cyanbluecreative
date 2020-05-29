// custom hook to attach event listeners

import { useEffect } from 'react';

export default function useEvent(event, handler, passive = false) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // clean up the event every time component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
}
