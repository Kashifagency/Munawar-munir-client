import Link from "next/link";
import { Container, WhatsAppButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="max-w-2xl text-center">
        <p className="font-display text-7xl text-brass">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium">This page has been cleared</h1>
        <p className="mt-4 text-lg text-stone">The page you&apos;re looking for doesn&apos;t exist. Try one of these instead:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-forest px-6 py-3.5 font-semibold text-cream">Home</Link>
          <Link href="/services" className="rounded-full border border-line bg-white px-6 py-3.5 font-semibold">Services</Link>
          <WhatsAppButton />
        </div>
      </Container>
    </section>
  );
}
