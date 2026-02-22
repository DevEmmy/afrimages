"use client";
import React, { useState } from 'react';
import { Star1, Crown, Flash, User, ArrowDown2 } from 'iconsax-react';
import { Check } from 'lucide-react';
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: User,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started with African photography',
      features: [
        'Up to 50 downloads per month',
        'Standard quality images',
        'Basic search and filters',
        'Community support',
        'Watermarked previews'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Flash,
      price: { monthly: 9.99, yearly: 99.99 },
      description: 'For creators who need more content and features',
      features: [
        'Unlimited downloads',
        'High-resolution images',
        'Advanced search and filters',
        'Priority support',
        'No watermarks',
        'Commercial usage rights',
        'Download history',
        'Custom collections'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 29.99, yearly: 299.99 },
      description: 'For teams and businesses with advanced needs',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Usage analytics',
        'White-label options',
        'Advanced licensing'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const savings = billingCycle === 'yearly' ? 17 : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Nav
      />
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star1 size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">Choose the perfect plan for your needs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get access to millions of authentic African images with flexible plans that grow with you
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1.5">
              <div className="flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Yearly
                  {billingCycle === 'yearly' && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save {savings}%
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const price = billingCycle === 'yearly' 
              ? plan.price.yearly 
              : plan.price.monthly;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-orange-500 shadow-2xl scale-105'
                    : 'border-gray-100 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <IconComponent size={32} className="text-white" />
                  </div> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {
                      <div>
                        <div className="text-4xl font-bold text-gray-900">
                          ${price}
                          <span className="text-lg text-gray-500 font-normal">
                            /{billingCycle === 'yearly' ? 'year' : 'month'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && price > 0 && (
                          <div className="text-sm text-green-600 mt-1">
                            Save ${(plan.price.monthly * 12 - price).toFixed(2)} per year
                          </div>
                        )}
                      </div>
                    }
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:shadow-xl hover:-translate-y-1'
                      : plan.id === 'free'
                      ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans. All payments are processed securely.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-16 md:p-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators and businesses who trust Afrimages for their visual content needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <Footer
      />
    </div>
  );
};

export default PricingPage; 