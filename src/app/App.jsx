import { Suspense } from "react";

import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <Suspense fallback={null}>
      <AppLayout />
    </Suspense>
  );
}