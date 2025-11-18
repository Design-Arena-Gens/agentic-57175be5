"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Brain, Zap, Lock, BarChart3, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const ParticleNetwork = dynamic(() => import("@/components/ParticleNetwork"), {
  ssr: false,
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-vault-darker text-vault-platinum overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-vault-darker/80 backdrop-blur-xl border-b border-vault-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text tracking-tight">ACCRUE FLOW</div>
          <div className="flex items-center gap-8">
            <a href="#platform" className="text-sm hover:text-vault-gold transition-colors">Platform</a>
            <a href="#guarantee" className="text-sm hover:text-vault-gold transition-colors">Guarantee</a>
            <a href="#pricing" className="text-sm hover:text-vault-gold transition-colors">Pricing</a>
            <button className="px-6 py-2 bg-vault-gold text-vault-darker font-semibold rounded-sm hover:bg-vault-gold/90 transition-all text-sm">
              Member Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleNetwork />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
              Your Private Equity<br />
              <span className="gradient-text">Cash Flow. Visualized.</span><br />
              Guaranteed.
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-vault-platinum/80 max-w-3xl mx-auto font-light">
              AI that watches your capital calls 24/7. Forecasts cash needs 90 days out. Guarantees zero defaults.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-vault-dark/50 border border-vault-gold/30 rounded-sm text-lg focus:outline-none focus:border-vault-gold backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-10 py-4 bg-vault-gold text-vault-darker font-bold rounded-sm hover:bg-vault-gold/90 transition-all text-lg flex items-center justify-center gap-2 group"
              >
                {submitted ? "Secured ✓" : "Secure My Portfolio"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-sm text-vault-platinum/50">
              200 founding member spots remaining • $15,000/year
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-vault-gold/50"
          >
            <div className="w-6 h-10 border-2 border-vault-gold/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-vault-gold/50 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 bg-vault-dark/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">The $12M Problem</h2>
            <p className="text-2xl text-vault-platinum/70 max-w-3xl mx-auto">
              The average UHNW investor with $50M in PE commitments loses $500K+ annually to cash drag and missed opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Capital Call Chaos",
                description: "14 different funds. 47 capital calls per year. Each with 10-14 days notice. Manual tracking in spreadsheets."
              },
              {
                icon: TrendingUp,
                title: "Cash Drag Cancer",
                description: "$2M sitting idle earning 0.5% because you can't predict next month's capital needs."
              },
              {
                icon: Shield,
                title: "Default Risk",
                description: "Miss one $500K call. Lose your stake. Blacklisted from future allocations. Career-ending."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 vault-border rounded-sm bg-vault-dark/50 backdrop-blur-sm vault-glow"
              >
                <item.icon className="w-12 h-12 text-vault-gold mb-4" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-vault-platinum/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Neural Liquidity Engine</h2>
            <p className="text-2xl text-vault-platinum/70 max-w-3xl mx-auto">
              Military-grade AI that predicts your capital needs with 97.3% accuracy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                title: "Predictive Capital Intelligence",
                features: [
                  "90-day rolling cash forecast updated hourly",
                  "Machine learning trained on 10,000+ PE funds",
                  "Automatic capital call extraction from emails",
                  "SMS alerts 72 hours before deadlines"
                ]
              },
              {
                icon: Zap,
                title: "Automated Yield Optimization",
                features: [
                  "Auto-sweep excess cash to 5.2% T-bills",
                  "Maintain zero balance at all times",
                  "Capture $400K+ hidden yield annually",
                  "One-click wire execution to funds"
                ]
              },
              {
                icon: Lock,
                title: "Swiss Vault Security",
                features: [
                  "Bank-level 256-bit encryption",
                  "Read-only bank connections",
                  "SOC 2 Type II certified",
                  "Zero access to your capital"
                ]
              },
              {
                icon: BarChart3,
                title: "Portfolio Command Center",
                features: [
                  "Real-time net worth tracking",
                  "IRR calculation across 40+ funds",
                  "Tax optimization scenarios",
                  "LP statement auto-parsing"
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-10 vault-border rounded-sm bg-vault-dark/30 backdrop-blur-sm"
              >
                <item.icon className="w-14 h-14 text-vault-gold mb-6" />
                <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-vault-gold flex-shrink-0 mt-1" />
                      <span className="text-vault-platinum/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-32 px-6 bg-vault-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-20 h-20 text-vault-gold mx-auto mb-8" />
            <h2 className="text-5xl font-bold mb-8">The Zero-Default Guarantee</h2>
            <div className="p-12 vault-border rounded-sm bg-vault-dark/50 backdrop-blur-sm vault-glow">
              <p className="text-3xl font-bold text-vault-gold mb-6">
                We guarantee you'll never miss a capital call.
              </p>
              <p className="text-xl text-vault-platinum/80 mb-8">
                If our system fails to alert you 72 hours before any capital call deadline, resulting in a missed payment, we'll cover the capital call up to $5M and refund your annual membership.
              </p>
              <p className="text-sm text-vault-platinum/60">
                Claims processed within 48 hours. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Trusted By Legacy Builders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Recovered $680K in yield in year one. Paid for itself 45x over.",
                author: "Michael R.",
                title: "Family Office Principal, $120M AUM"
              },
              {
                quote: "Finally sleep at night knowing I'll never miss a capital call. Worth every penny.",
                author: "Jennifer K.",
                title: "Tech Founder, $40M PE Portfolio"
              },
              {
                quote: "The predictive forecasting alone saves my team 20 hours per month.",
                author: "David T.",
                title: "Multi-Family Office CIO"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 vault-border rounded-sm bg-vault-dark/30 backdrop-blur-sm"
              >
                <p className="text-lg mb-6 text-vault-platinum/90 italic">"{testimonial.quote}"</p>
                <div className="border-t border-vault-gold/20 pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-vault-platinum/60">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-vault-dark/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-12">Founding Member Pricing</h2>
            <div className="p-12 vault-border rounded-sm bg-vault-dark/50 backdrop-blur-sm vault-glow">
              <div className="mb-8">
                <div className="text-6xl font-bold gradient-text mb-2">$15,000</div>
                <div className="text-xl text-vault-platinum/60">per year</div>
              </div>

              <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
                {[
                  "Full platform access",
                  "Zero-default guarantee",
                  "Unlimited capital call tracking",
                  "90-day cash forecasting",
                  "Automated yield optimization",
                  "White-glove onboarding",
                  "Priority support via SMS",
                  "Lifetime price lock"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vault-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-6 py-4 bg-vault-dark/50 border border-vault-gold/30 rounded-sm text-lg focus:outline-none focus:border-vault-gold"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-vault-gold text-vault-darker font-bold rounded-sm hover:bg-vault-gold/90 transition-all text-lg"
                >
                  {submitted ? "Application Received ✓" : "Apply for Founding Membership"}
                </button>
              </form>

              <p className="mt-6 text-sm text-vault-platinum/50">
                Minimum net worth: $20M • 187/200 spots remaining
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center">Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How does the guarantee work?",
                  a: "If our system fails to alert you 72 hours before a capital call deadline and you miss the payment, we cover the call up to $5M and refund your membership. Simple."
                },
                {
                  q: "Do you access my bank accounts?",
                  a: "We use read-only connections via Plaid (same tech as Venmo). We can see balances and transactions but cannot move money."
                },
                {
                  q: "How long does onboarding take?",
                  a: "30 minutes. Connect your email, link your bank accounts, and our AI automatically extracts your historical capital calls. You're live within an hour."
                },
                {
                  q: "What if I have fewer than 10 funds?",
                  a: "Still worth it. The cash optimization alone generates $100K+ annually for most members, regardless of fund count."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. Full refund within 90 days if you're not capturing at least $50K in additional yield."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-8 vault-border rounded-sm bg-vault-dark/20 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-3 text-vault-gold">{faq.q}</h3>
                  <p className="text-vault-platinum/80">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-vault-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Never Miss Another Capital Call
            </h2>
            <p className="text-2xl text-vault-platinum/70 mb-12">
              Join 13 founding members already capturing $6.4M in recovered yield
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-vault-dark/50 border border-vault-gold/30 rounded-sm text-lg focus:outline-none focus:border-vault-gold"
                required
              />
              <button
                type="submit"
                className="px-10 py-4 bg-vault-gold text-vault-darker font-bold rounded-sm hover:bg-vault-gold/90 transition-all text-lg whitespace-nowrap"
              >
                {submitted ? "Secured ✓" : "Secure My Spot"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-vault-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold gradient-text">ACCRUE FLOW</div>
          <div className="flex gap-8 text-sm text-vault-platinum/60">
            <a href="#" className="hover:text-vault-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-vault-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-vault-gold transition-colors">Security</a>
            <a href="#" className="hover:text-vault-gold transition-colors">Contact</a>
          </div>
          <div className="text-sm text-vault-platinum/60">
            © 2025 Accrue Flow LLC
          </div>
        </div>
      </footer>
    </main>
  );
}
