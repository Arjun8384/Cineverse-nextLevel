"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export default function ClientOnly({
  children,
}) {
  const isClient =
    useSyncExternalStore(
      subscribe,
      () => true,
      () => false
    );

  if (!isClient) {
    return null;
  }

  return children;
}