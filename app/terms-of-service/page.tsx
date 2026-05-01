import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for working with Raydesite.",
  alternates: { canonical: "https://raydesite.com/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <section
        className="py-32 px-6 relative overflow-hidden"
        aria-labelledby="terms-heading"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Header */}
          <div className="mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#F5A623]" />
              Legal
            </span>
            <h1
              id="terms-heading"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              Terms of <span className="text-[#F5A623]">Service</span>
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg">
                Last updated: May 2025
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="space-y-10"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                1. Agreement to terms
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                By engaging Raydesite for any software development service, you
                agree to these Terms of Service. These terms govern the
                relationship between Raydesite (Atlanta, Georgia, USA) and the
                client from the moment a project proposal is signed and
                accepted.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                2. Project proposal & approval
              </h2>
              <p className="text-[#8A8680] leading-relaxed mb-4">
                Before any development begins, Raydesite will provide the client
                with a written project proposal that includes:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Scope of work and deliverables",
                  "Project timeline and milestones",
                  "Pricing and payment schedule",
                  "Technical requirements and assumptions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#8A8680]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8A8680] leading-relaxed">
                The client must review, approve, and sign the proposal before
                work begins. By signing, the client confirms they have read,
                understood, and agreed to all terms and requirements outlined in
                the proposal.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-[#F5A623] rounded-2xl p-8 shadow-[4px_4px_0_#F5A623]">
              <div className="inline-flex items-center bg-[#F5A623] text-[#1A1A1A] font-mono text-xs px-3 py-1.5 rounded-lg mb-4 font-bold">
                ⚠️ Important
              </div>
              <h2
                className="mb-3 text-[#F4F3F0]"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                3. No refund policy
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                All sales are final. Raydesite does not offer refunds once a
                project proposal has been signed and accepted by the client. By
                approving the proposal, the client confirms satisfaction with
                the agreed scope, timeline, and terms. Any disputes regarding
                deliverables must be raised within the scope of the original
                proposal and resolved through direct communication with our team
                at{" "}
                <a
                  href="mailto:raydesite@gmail.com"
                  className="text-[#F5A623] font-bold underline underline-offset-4"
                >
                  raydesite@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                4. Payment terms
              </h2>
              <p className="text-[#8A8680] leading-relaxed mb-4">
                All prices are in US dollars (USD). Payment schedules are
                defined in the project proposal. Raydesite reserves the right to
                pause or stop work if payments are not received according to the
                agreed schedule.
              </p>
              <p className="text-[#8A8680] leading-relaxed">
                Late payments may incur a fee of 5% per month on the outstanding
                balance, as outlined in the project proposal.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                5. Scope changes
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                Any changes to the agreed scope of work must be requested in
                writing and approved by both parties. Scope changes may affect
                the timeline and cost of the project. Raydesite will provide an
                updated proposal for any significant changes before proceeding.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                6. Intellectual property
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                Upon receipt of full payment, the client receives full ownership
                of all custom code and assets developed specifically for their
                project. Raydesite retains the right to showcase the project in
                our portfolio unless the client requests otherwise in writing.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                7. Client responsibilities
              </h2>
              <p className="text-[#8A8680] leading-relaxed mb-4">
                The client agrees to:
              </p>
              <ul className="space-y-2">
                {[
                  "Provide all required content, assets, and access in a timely manner",
                  "Review and provide feedback within the agreed timeframes",
                  "Designate a single point of contact for project communication",
                  "Not use deliverables for any illegal or unethical purposes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#8A8680]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                8. Governing law
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                These terms are governed by the laws of the State of Georgia,
                United States. Any disputes will be resolved through good-faith
                negotiation. If unresolved, disputes will be subject to the
                jurisdiction of the courts of Georgia, USA.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-3"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                9. Contact
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                For any questions about these terms, contact us at{" "}
                <a
                  href="mailto:raydesite@gmail.com"
                  className="text-[#1A1A1A] font-bold underline underline-offset-4 hover:text-[#F5A623] transition-colors"
                >
                  raydesite@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
