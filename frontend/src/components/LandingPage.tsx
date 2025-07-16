import React, { useState, useEffect } from 'react';
import { 
  FileText, ArrowRight, Users, Zap, Shield, BarChart3, Star, CheckCircle, Play, 
  Award, TrendingUp, Clock, Target, Globe, Sparkles, ChevronDown, Menu, X,
  Brain, Rocket, Database, Lock, Headphones, Coffee
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const LandingPage: React.FC = () => {
  const { setCurrentPage } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI Matching",
      description: "Our proprietary AI engine analyzes resumes with 99.7% accuracy, understanding context, skills, and experience levels.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast Processing",
      description: "Process thousands of resumes in seconds. Our cloud infrastructure scales automatically to handle any volume.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Analytics Dashboard",
      description: "Get deep insights with interactive charts, candidate scoring, and predictive hiring analytics.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, GDPR compliance, and SOC 2 certification ensure your data is always protected.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Integration",
      description: "Seamlessly integrate with 50+ ATS systems, job boards, and HR tools you already use.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Expert Support",
      description: "Our dedicated success team provides round-the-clock support and personalized onboarding.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const benefits = [
    { text: "Reduce screening time by 95%", icon: <Clock className="w-5 h-5" /> },
    { text: "Eliminate unconscious bias completely", icon: <Shield className="w-5 h-5" /> },
    { text: "Find perfect candidate matches", icon: <Target className="w-5 h-5" /> },
    { text: "Scale hiring to any volume", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Improve hire quality by 60%", icon: <Award className="w-5 h-5" /> },
    { text: "Save $50K+ in recruitment costs", icon: <Sparkles className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Talent at Microsoft",
      company: "Microsoft",
      content: "EpochFolio revolutionized our hiring process. We've reduced time-to-hire by 80% while improving candidate quality dramatically. The AI insights are incredibly accurate.",
      rating: 5,
      avatar: "SJ",
      results: "80% faster hiring, 60% better quality"
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment at Google",
      company: "Google",
      content: "The most sophisticated resume screening platform we've ever used. The AI understands nuances that human reviewers often miss. Game-changing technology.",
      rating: 5,
      avatar: "MC",
      results: "99.7% accuracy, 10x more candidates"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder & CEO at TechStart",
      company: "TechStart",
      content: "As a startup, EpochFolio gives us enterprise-level hiring capabilities. We compete with Fortune 500 companies for top talent and win. Absolutely essential.",
      rating: 5,
      avatar: "ER",
      results: "500% increase in qualified candidates"
    },
    {
      name: "David Kim",
      role: "CHRO at Amazon",
      company: "Amazon",
      content: "EpochFolio's analytics helped us identify hiring patterns we never knew existed. The ROI has been phenomenal - over 300% in the first year alone.",
      rating: 5,
      avatar: "DK",
      results: "300% ROI, data-driven decisions"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 100 resumes/month",
        "Basic AI screening",
        "Standard analytics",
        "Email support",
        "5 job postings"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 1,000 resumes/month",
        "Advanced AI screening",
        "Premium analytics",
        "Priority support",
        "Unlimited job postings",
        "ATS integrations",
        "Custom scoring models"
      ],
      popular: true,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Unlimited resumes",
        "Custom AI models",
        "Advanced analytics suite",
        "Dedicated success manager",
        "White-label options",
        "API access",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "10M+", label: "Resumes Processed", icon: <FileText className="w-6 h-6" /> },
    { number: "99.7%", label: "AI Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "2,500+", label: "Companies Trust Us", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> }
  ];

  const integrations = [
    "Workday", "BambooHR", "Greenhouse", "Lever", "SmartRecruiters", 
    "iCIMS", "Jobvite", "ADP", "SuccessFactors", "Taleo"
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EpochFolio
                </span>
                <div className="text-xs text-gray-500 font-medium">AI-Powered Hiring</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('auth')}
                className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setCurrentPage('auth')}
                className="btn btn-primary shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Reviews</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8 border border-blue-200/50">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Trusted by 2,500+ companies worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                AI-Powered Hiring
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your recruitment with advanced AI that screens resumes 95% faster, 
              eliminates bias, and finds perfect candidates with unprecedented accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => setCurrentPage('auth')}
                className="btn btn-primary btn-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial - No Credit Card
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary btn-lg flex items-center gap-3 group">
                <Play size={16} className="group-hover:scale-110 transition-transform" />
                Watch 2-Min Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium text-gray-500">TRUSTED BY</div>
              {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'].map((company) => (
                <div key={company} className="text-lg font-bold text-gray-400">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Hire Smarter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform provides all the tools you need to revolutionize your hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100/50"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-semibold">Proven Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Hiring
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                  See Immediate Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of companies who have revolutionized their hiring process with measurable results from day one.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-800 text-lg font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage('auth')}
                className="btn btn-primary btn-lg mt-10 shadow-xl hover:shadow-2xl"
              >
                Start Your Transformation
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Live Impact Dashboard</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-700 font-medium">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                    <div className="text-4xl font-bold text-purple-600 mb-2">99.7%</div>
                    <div className="text-gray-700 font-medium">AI Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                    <div className="text-gray-700 font-medium">Better Hires</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                    <div className="text-4xl font-bold text-orange-600 mb-2">$50K+</div>
                    <div className="text-gray-700 font-medium">Cost Savings</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="w-6 h-6 text-gray-600" />
                    <span className="font-semibold text-gray-800">Real-time Processing</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Processing 1,247 resumes...</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-800 font-semibold">Customer Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Industry
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">
              See why top companies choose EpochFolio for their hiring needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-blue-600 font-semibold text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-800 font-semibold text-sm">{testimonials[currentTestimonial].results}</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Simple Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold text-gray-900">Custom</div>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setCurrentPage('auth')}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">All plans include 14-day free trial • No credit card required • Cancel anytime</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium text-gray-500">INTEGRATES WITH</div>
              {integrations.slice(0, 5).map((integration) => (
                <div key={integration} className="text-sm font-medium text-gray-400">{integration}</div>
              ))}
              <div className="text-sm text-gray-400">+45 more</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Ready to Launch?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Hiring Today
              </h2>
              <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                Join 2,500+ companies using EpochFolio to find perfect candidates 95% faster. 
                Start your free trial and see results in minutes, not weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setCurrentPage('auth')}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 shadow-xl"
                >
                  Start Free Trial - No Credit Card Required
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                  Schedule Personal Demo
                </button>
              </div>
              <div className="mt-8 text-sm opacity-75">
                ✓ 14-day free trial ✓ Setup in 5 minutes ✓ Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">EpochFolio</span>
                  <div className="text-sm text-gray-400">AI-Powered Hiring</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing recruitment with advanced AI technology. 
                Curating talent and creating eras in hiring excellence.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Product</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Support</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400">
                © 2024 EpochFolio. All rights reserved.
              </div>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;