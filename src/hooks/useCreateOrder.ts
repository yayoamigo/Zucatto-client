import { useEffect, useRef, useCallback } from "react";

const useCreateOrder = (callback: () => void, dependencies: any[]) => {
  const hasCreatedOrder = useRef(false);

  const memoizedCallback = useCallback(callback, [callback, ...dependencies]);

  useEffect(() => {
    if (!hasCreatedOrder.current) {
      memoizedCallback();
      hasCreatedOrder.current = true;
    }
  }, [memoizedCallback]);
};

export default useCreateOrder;
