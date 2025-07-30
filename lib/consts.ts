export const defaultHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Retro Builder – AI Website Builder</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        background: #0f1117;
      }
      .glass {
        background: rgba(35, 36, 42, 0.75);
        border-radius: 20px;
        backdrop-filter: blur(12px);
      }
      .neon {
        text-shadow: 0 0 3px #ffe066;
      }
    </style>
  </head>
  <body class="text-white font-sans">

    <!-- NAV -->
    <header class="sticky top-0 z-50 bg-[#0f1117] border-b border-neutral-800">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-yellow-400">Retro Builder</h1>
        <nav class="hidden md:flex space-x-6 text-sm text-neutral-300">
          <a href="#features" class="hover:text-yellow-400">Features</a>
          <a href="#pricing" class="hover:text-yellow-400">Pricing</a>
          <a href="#testimonials" class="hover:text-yellow-400">Testimonials</a>
          <a href="#contact" class="hover:text-yellow-400">Contact</a>
        </nav>
        <a
          href="#"
          class="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
        >
          Start Free
        </a>
      </div>
    </header>

    <!-- HERO -->
    <section class="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div class="max-w-3xl glass p-10">
        <span class="inline-block text-xs text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full mb-4 bg-[#23242a]">
          🚀 Build with AI
        </span>
        <h2 class="text-4xl md:text-6xl font-extrabold neon">
          Launch your website in seconds.
        </h2>
        <p class="text-neutral-400 mt-4 mb-6 text-lg">
          Describe your idea. Let AI code, design, and deploy it for you.
        </p>
        <a
          href="#"
          class="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Try for Free
        </a>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="px-6 py-20 bg-[#181a20] text-center">
      <h3 class="text-3xl font-bold mb-10 neon">Why Retro Builder?</h3>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-[#23242a] p-6 rounded-xl">
          <h4 class="text-xl font-semibold mb-2 text-yellow-300">AI-Powered Builder</h4>
          <p class="text-neutral-400">Generate full websites with text prompts. No coding required.</p>
        </div>
        <div class="bg-[#23242a] p-6 rounded-xl">
          <h4 class="text-xl font-semibold mb-2 text-yellow-300">Fully Customizable</h4>
          <p class="text-neutral-400">Edit sections, colors, and layouts with a live visual editor.</p>
        </div>
        <div class="bg-[#23242a] p-6 rounded-xl">
          <h4 class="text-xl font-semibold mb-2 text-yellow-300">1-Click Hosting</h4>
          <p class="text-neutral-400">Instant deployment to the cloud with a custom subdomain.</p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials" class="px-6 py-20 text-center">
      <h3 class="text-3xl font-bold mb-10 neon">What users say</h3>
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div class="bg-[#23242a] p-6 rounded-xl">
          <p class="text-neutral-300">"I built my portfolio in 3 minutes. The AI nailed the layout and text!"</p>
          <span class="block mt-4 font-semibold text-yellow-400">— Sarah, Designer</span>
        </div>
        <div class="bg-[#23242a] p-6 rounded-xl">
          <p class="text-neutral-300">"This is the fastest way to validate startup ideas. It’s genius."</p>
          <span class="block mt-4 font-semibold text-yellow-400">— Jamal, Startup Founder</span>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="px-6 py-20 bg-[#181a20] text-center">
      <h3 class="text-3xl font-bold mb-10 neon">Simple Pricing</h3>
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div class="bg-[#23242a] p-8 rounded-xl border border-yellow-400/20">
          <h4 class="text-2xl font-bold text-yellow-300 mb-4">Free Plan</h4>
          <p class="text-neutral-400 mb-6">Best for testing and personal sites</p>
          <ul class="text-sm text-neutral-400 space-y-2 mb-6">
            <li>✓ 1 Website</li>
            <li>✓ Basic AI features</li>
            <li>✓ Free .retro.site subdomain</li>
          </ul>
          <a href="#" class="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300">Get Started</a>
        </div>
        <div class="bg-[#23242a] p-8 rounded-xl border border-yellow-400/40">
          <h4 class="text-2xl font-bold text-yellow-300 mb-4">Pro Plan</h4>
          <p class="text-neutral-400 mb-6">Best for businesses and agencies</p>
          <ul class="text-sm text-neutral-400 space-y-2 mb-6">
            <li>✓ Unlimited websites</li>
            <li>✓ Full AI features</li>
            <li>✓ Custom domains</li>
            <li>✓ Priority support</li>
          </ul>
          <a href="#" class="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300">Subscribe Now</a>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="px-6 py-20 text-center">
      <div class="max-w-3xl mx-auto glass p-10">
        <h3 class="text-2xl md:text-3xl font-bold neon mb-4">Start building your website today</h3>
        <p class="text-neutral-400 mb-6">Try Retro Builder free — no credit card required</p>
        <a href="#" class="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Get Started Now</a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer id="contact" class="bg-[#0f1117] px-6 pt-12 pb-8 text-sm text-neutral-400">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 class="text-white font-bold text-lg mb-3">Retro Builder</h4>
          <p>AI-powered web development, simplified.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-2">Product</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-yellow-400">Features</a></li>
            <li><a href="#" class="hover:text-yellow-400">Pricing</a></li>
            <li><a href="#" class="hover:text-yellow-400">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-2">Company</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-yellow-400">About</a></li>
            <li><a href="#" class="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" class="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-2">Legal</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-yellow-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-10 border-t border-neutral-800 pt-6">
        © 2025 Retro Builder. All rights reserved.
      </div>
    </footer>

  </body>
</html>
`;
