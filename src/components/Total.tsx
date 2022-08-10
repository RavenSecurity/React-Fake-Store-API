import React, { useMemo } from "react";
import { ArticleType } from "../types";

type TotalProps = {
  cart: ArticleType[];
};

export const Total = ({ cart }: TotalProps) => {
  const totalPrice = useMemo(() => {
    if (!cart.length) {
      return 0;
    }
    return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  }, [cart]);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center p-3 text-orange-300">
        Total: {totalPrice}
      </h3>
    </div>
  );
};
