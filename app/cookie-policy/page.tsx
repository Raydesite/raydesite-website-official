import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Raydesite uses cookies on its website.",
  alternates: { canonical: "https://raydesite.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />
      <section
        className="py-32 px-6 relative overflow-hidden"
        aria-labelledby="cookie-heading"
      >
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
          <div className="mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8A8680] flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#F5A623]" />
              Legal
            </span>
            <h1
              id="cookie-heading"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
              }}
            >
              Cookie <span className="text-[#F5A623]">Policy</span>
            </h1>
            <div className="mt-4">
              <div className="inline-flex items-center bg-[#1A1A1A] text-[#F5A623] font-mono text-xs px-3 py-1.5 rounded-lg">
                Last updated: May 2025
              </div>
            </div>
          </div>

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
                1. What are cookies?
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                Cookies are small text files stored on your device when you
                visit a website. They are widely used to make websites work
                properly and to provide basic functionality like remembering
                your preferences.
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
                2. How we use cookies
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                Raydesite uses only essential technical cookies necessary for
                the website to function correctly. We do{" "}
                <strong className="text-[#1A1A1A]">not</strong> use cookies for
                advertising, marketing, behavioral tracking, or any third-party
                analytics at this time.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 hover:shadow-[4px_4px_0_#1A1A1A] transition-all duration-200">
              <h2
                className="mb-4"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                }}
              >
                3. Types of cookies we use
              </h2>
              <div className="space-y-4">
                {[
                  {
                    type: "Essential cookies",
                    color: "#D4E8C2",
                    textColor: "#2D5A1B",
                    desc: "Required for the website to function. These include session cookies set by the browser and cookies used by our hosting provider (Vercel) for basic site delivery. You cannot opt out of these.",
                  },
                ].map((c) => (
                  <div
                    key={c.type}
                    className="border border-[#E5E5E5] rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2"
                        style={{
                          backgroundColor: c.color,
                          color: c.textColor,
                          borderColor: c.textColor,
                        }}
                      >
                        {c.type}
                      </span>
                    </div>
                    <p className="text-[#8A8680] text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
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
                4. Third-party cookies
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                We currently do not use any third-party cookies, including from
                Google Analytics, Meta, or any advertising network. If this
                changes in the future, this policy will be updated accordingly
                and you will be notified via a cookie consent banner.
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
                5. Managing cookies
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                You can control and delete cookies through your browser
                settings. Please note that disabling essential cookies may
                affect the functionality of the website. For more information on
                how to manage cookies, visit your browser&apos;s help
                documentation.
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
                6. Changes to this policy
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                We may update this Cookie Policy as our website evolves. Any
                changes will be posted on this page with an updated date. We
                recommend reviewing this page periodically.
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
                7. Contact
              </h2>
              <p className="text-[#8A8680] leading-relaxed">
                Questions about our cookie practices? Reach us at{" "}
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
