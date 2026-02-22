import React from "react";

export default function CopyrightInformationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-display text-5xl font-bold text-primary mb-8">Copyright Information</h1>
      <p className="text-muted-light text-lg mb-8">Learn about copyright ownership, protection, and how AfriCreate supports creators' rights.</p>
      <section className="space-y-6">
        <h2 className="font-bold text-xl text-primary">1. Ownership</h2>
        <p className="text-base text-muted-light">All content uploaded to AfriCreate remains the property of the original creator. We respect and enforce copyright laws.</p>
        <h2 className="font-bold text-xl text-primary">2. Reporting Infringement</h2>
        <p className="text-base text-muted-light">If you believe your work has been used without permission, contact our support team for resolution.</p>
      </section>
    </div>
  );
}
