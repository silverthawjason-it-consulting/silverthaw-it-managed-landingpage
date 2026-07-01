import { Suspense } from "react";
import BookingTest from "./BookingTest";

// Temporary, unlisted diagnostic route (delete after the attribution experiment).
export const metadata = {
  title: "Booking test (internal)",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingTest />
    </Suspense>
  );
}
