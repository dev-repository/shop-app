import React, { useEffect, RefObject } from 'react';
import { applyEventListener } from '~/libs/browser/addEventListener';
import { getTargetElement } from '~/libs/browser/dom';

export function useAddActiveScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  topOffset = 0,
) {
  useEffect(() => {
    const ele = getTargetElement(ref);

    const handler = () => {
      if (window.scrollY > topOffset) {
        ele?.classList.add('is-scrolling');
      } else {
        ele?.classList.remove('is-scrolling');
      }
    };

    const listener = applyEventListener(document, 'scroll', handler, false);
    return () => {
      listener.remove();
    };
  }, []);
}
