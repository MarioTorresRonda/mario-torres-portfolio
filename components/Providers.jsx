'use client';

import LocalizationContextProvider from "@/store/location-context";

export default function Providers({ children }) {
  return (
      <LocalizationContextProvider>{children}</LocalizationContextProvider>
  );
}