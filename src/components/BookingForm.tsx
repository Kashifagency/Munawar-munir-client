import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { BookingFormClient } from "./BookingFormClient";

// Server wrapper: passes only the option labels to the client form so the
// full service/area copy never ships in the JS bundle.
export function BookingForm(props: { defaultService?: string; defaultArea?: string }) {
  return (
    <BookingFormClient
      serviceNames={services.map((s) => s.name)}
      areaNames={areas.map((a) => a.name)}
      {...props}
    />
  );
}
