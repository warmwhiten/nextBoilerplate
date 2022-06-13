export function debounce<F extends (...args: any[]) => any>(
  callback: F,
  delay: number
): (...args: Parameters<F>) => Promise<ReturnType<F>> {
  let timer: NodeJS.Timeout | undefined;

  return (...args: Parameters<F>) => {
    if (timer) {
      clearTimeout(timer);
    }
    return new Promise<ReturnType<F>>((resolve) => {
      timer = setTimeout(() => {
        const returnValue = callback(...args) as ReturnType<F>;
        resolve(returnValue);
      }, delay);
    });
  };
}

export function throttle<F extends (...args: any[]) => any>(
  callback: F,
  delay: number
): (...args: Parameters<F>) => Promise<ReturnType<F>> {
  let timer: NodeJS.Timeout | undefined;

  return (...args: Parameters<F>) => {
    return new Promise<ReturnType<F>>((resolve) => {
      if (!timer) {
        timer = setTimeout(() => {
          const returnValue = callback(...args) as ReturnType<F>;
          resolve(returnValue);
        }, delay);
      }
    });
  };
}
