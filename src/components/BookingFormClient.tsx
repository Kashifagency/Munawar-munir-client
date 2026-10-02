"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./Icon";

// No backend needed: the form composes a structured WhatsApp message so the
// enquiry lands directly in the business WhatsApp with all details attached.

const field =
  "w-full rounded-xl border border-line bg-cream/60 px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 outline-none transition focus:border-forest focus:bg-white focus:ring-4 focus:ring-forest/10";

export function BookingFormClient({
  serviceNames,
  areaNames,
  defaultService = "",
  defaultArea = "",
}: {
  serviceNames: string[];
  areaNames: string[];
  defaultService?: string;
  defaultArea?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const lines = [
      "Hi TakeJunk, I'd like to book furniture / junk removal.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Service: ${get("service") || "Not sure"}`,
      `Area: ${get("area") || "Not listed"}`,
      `Property: ${get("property")}`,
      get("date") ? `Preferred date: ${get("date")}` : null,
      get("items") ? `Items: ${get("items")}` : null,
      "",
      "I'll send photos of the items here.",
    ].filter((l) => l !== null);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="booking-note">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Phone</span>
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" className={field} placeholder="+971 5x xxx xxxx" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Service</span>
          <select name="service" defaultValue={defaultService} className={field}>
            <option value="">Not sure / multiple</option>
            {serviceNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Area</span>
          <select name="area" defaultValue={defaultArea} className={field}>
            <option value="">Select your area</option>
            {areaNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Property type</span>
          <select name="property" defaultValue="Villa" className={field}>
            <option>Villa</option>
            <option>Townhouse</option>
            <option>Apartment</option>
            <option>Penthouse</option>
            <option>Office</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Preferred date</span>
          <input name="date" type="date" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">What needs removing?</span>
        <textarea
          name="items"
          rows={3}
          className={field}
          placeholder="e.g. 3-seater sofa, king bed with mattress, 2 wardrobes. 2nd floor, lift available."
        />
      </label>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:brightness-110"
      >
        <WhatsAppIcon className="size-5" />
        Send booking request on WhatsApp
      </button>
      <p id="booking-note" className="text-center text-sm text-stone" role="status">
        {sent
          ? "WhatsApp opened in a new tab — attach a few photos and hit send."
          : "Opens WhatsApp with your details pre-filled. Add photos for the fastest reply."}
      </p>
    </form>
  );
}
