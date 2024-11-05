"use client"

import { useRouter } from "next/navigation";

const Order = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    // router.push("/destination");
    // router.replace("/");
    router.back();

  }
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>place order</button>
    </>
  )
}

export default Order;
