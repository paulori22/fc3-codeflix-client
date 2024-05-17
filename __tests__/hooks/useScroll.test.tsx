import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useScroll } from '@/hooks/useScroll';

describe('useScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});
