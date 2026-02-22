import React from "react";

export default function LicenseAgreementPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-display text-5xl font-bold text-primary mb-8">License Agreement</h1>
      <p className="text-muted-light text-lg mb-8">This page outlines the terms and conditions of licensing content on AfriCreate. Please review carefully before submitting or purchasing assets.</p>
      <section className="space-y-6">
        <h2 className="font-bold text-xl text-primary">1. Grant of License</h2>
        <p className="text-base text-muted-light">By purchasing or submitting content, you agree to the terms of use, including permitted and prohibited uses as defined by AfriCreate.</p>
        <h2 className="font-bold text-xl text-primary">2. Intellectual Property</h2>
        <p className="text-base text-muted-light">All copyrights remain with the creator. Licensees are granted limited rights as specified in the agreement.</p>
        <h2 className="font-bold text-xl text-primary">3. Restrictions</h2>
        <p className="text-base text-muted-light">Content may not be resold, redistributed, or used in unlawful ways. See full terms for details.</p>
      </section>
    </div>
  );
}
