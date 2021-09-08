import { useEffect, useLayoutEffect } from 'react';

/**
 * useIsomorphicEffect
 * Resolves to useEffect when "window" is not in scope and useLayout effect in the browser
 * @param {function} callback Callback function to be called on mount
 */
const useIsomorphicEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default useIsomorphicEffect;
