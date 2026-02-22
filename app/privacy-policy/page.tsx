import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-display text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
      <p className="text-muted-light text-lg mb-8">Your privacy is important to us. This page explains how AfriCreate collects, uses, and protects your information.</p>
      <section className="space-y-6">
        <h2 className="font-bold text-xl text-primary">1. Data Collection</h2>
        <p className="text-base text-muted-light">We collect information to provide better services and enhance your experience. See our full policy for details.</p>
        <h2 className="font-bold text-xl text-primary">2. Usage</h2>
        <p className="text-base text-muted-light">Your data is used for account management, analytics, and communication. We never sell your information.</p>
        <h2 className="font-bold text-xl text-primary">3. Security</h2>
        <p className="text-base text-muted-light">We implement industry-standard security measures to protect your data.</p>
      </section>
    </div>
  );
}
