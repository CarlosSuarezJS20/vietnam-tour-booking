"use client";

import { FiShoppingCart } from "react-icons/fi";
import { useReactiveVar } from "@apollo/client/react";
import { cartDrawerOpenVar } from "@/lib/cartDrawerVar";
import { useGetCartQuery } from "@/graphql/hooks";
import IconButton from "@/components/ui/IconButton";

interface Props {
  dark?:        boolean;
  hoverEffect?: boolean;
}

const CartIconButton = ({ dark, hoverEffect }: Props) => {
  const { data } = useGetCartQuery();
  const itemCount = data?.itemCount ?? 0;
  useReactiveVar(cartDrawerOpenVar);

  return (
    <div className="relative">
      <IconButton dark={dark} hoverEffect={hoverEffect} onClick={() => cartDrawerOpenVar(true)}>
        <FiShoppingCart className="w-5 h-5" />
      </IconButton>
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-brand text-white text-[9px] font-bold flex items-center justify-center font-sans pointer-events-none">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIconButton;
