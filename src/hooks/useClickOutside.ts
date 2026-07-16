'use client';

import { useEffect, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside a referenced element
 *
 * @param ref - React ref object attached to the element
 * @param handler - Callback function to execute when click outside occurs
 * @param enabled - Optional flag to enable/disable the listener (default: true)
 *
 * @example
 * const dropdownRef = useRef<HTMLDivElement>(null);
 * useClickOutside(dropdownRef, () => setIsOpen(false));
 *
 * return <div ref={dropdownRef}>Dropdown content</div>
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
) {
  useEffect(() => {
    // Early return if not enabled
    if (!enabled) {
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!element || element.contains(event.target as Node)) {
        return;
      }

      // Call handler only if clicked outside
      handler(event);
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]); // Re-run if ref, handler, or enabled changes
}
