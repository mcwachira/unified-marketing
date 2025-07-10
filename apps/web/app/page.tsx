'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Send,
  Users,
  BarChart3,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  MessageSquare,
  Target,
  Clock,
  Shield,
  Globe,
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Mail,
      title: 'Email Campaigns',
      description:
        'Drag-and-drop editor with responsive templates and HTML editing capabilities',
    },
    {
      icon: MessageSquare,
      title: 'SMS Marketing',
      description:
        'Direct text messaging with personalization and compliance features',
    },
    {
      icon: Users,
      title: 'Contact Management',
      description:
        'Import contacts, create segments, and build opt-in forms effortlessly',
    },
    {
      icon: Target,
      title: 'Smart Automation',
      description:
        'Trigger-based campaigns, drip sequences, and perfect timing',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track opens, clicks, deliveries, and campaign performance',
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description:
        'Generate subject lines, optimize send times, and A/B test campaigns',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 contacts',
        '5,000 emails/month',
        '500 SMS credits',
        'Basic templates',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$79',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        '50,000 emails/month',
        '2,000 SMS credits',
        'Advanced templates',
        'Automation workflows',
        'A/B testing',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Pro',
      price: '$199',
      description: 'For established businesses',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        '10,000 SMS credits',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated support',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content:
        'Unified Marketing transformed our email marketing. Open rates increased 40% and our SMS campaigns are converting like crazy!',
      rating: 5,
    },
    {
      name: 'Mike Rodriguez',
      role: 'E-commerce Owner',
      company: 'Urban Threads',
      content:
        'The automation features saved us hours every week. Our abandoned cart recovery alone pays for the entire platform.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'Creative Director',
      company: 'Bloom Agency',
      content:
        'Beautiful templates, intuitive interface, and the AI suggestions are spot-on. Our clients love the results.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Send className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Unified Marketing
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Reviews
                </a>
              </nav>
              <Button
                variant="outline"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Business with
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Smart Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Send beautiful email campaigns and SMS messages that convert. Our
              AI-powered platform helps small businesses and creators reach
              their audience effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3"
                onClick={() => (window.location.href = '/dashboard')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-500">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-700">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-400 rounded-full opacity-25"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you create, send, and track
              campaigns that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-purple-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include our
              core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-purple-600 scale-105 bg-gradient-to-b from-white to-purple-50'
                    : 'bg-white/80 backdrop-blur-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">
                      /month
                    </span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    onClick={() => (window.location.href = '/dashboard')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by thousands of businesses
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Unified Marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using Unified Marketing to reach their
            customers and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => (window.location.href = '/dashboard')}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Unified Marketing</span>
              </div>
              <p className="text-gray-400">
                The complete marketing platform for small businesses and
                creators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Unified Marketing. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
