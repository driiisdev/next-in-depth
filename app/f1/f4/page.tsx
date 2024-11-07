"use client"

import Link from "next/link";

const F4Page = () => {
  return (
    <>
      <h1>F4 Page</h1>
      <Link className="text-blue-400 underline italic" href="/f1/f3">F3</Link> &nbsp;
      <Link className="text-blue-400 underline italic" href="/about">about</Link>
    </>
  )
}

export default F4Page;
