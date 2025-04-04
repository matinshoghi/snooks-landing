'use client';

import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLearnMore = () => {
    // Scroll to the features section
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[90vh] bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto px-4 py-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-2 right-0 bg-[#00ffd1] text-black px-4 py-2 rounded-full text-sm font-medium">
                UAE Made
              </div>
              <Image
                src="/images/sock-1.webp"
                alt="Snooks Minimalist Socks"
                width={500}
                height={400}
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-2 left-0 bg-[#00ffd1] text-black px-4 py-2 rounded-full text-sm font-medium">
                6-Month Guarantee
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-primary">Snooks</span>: Simple Socks, 
              <span className="block mt-2">Sustainably Made in the UAE</span>
            </h1>
            <p className="py-6 text-lg text-gray-600">
              Experience the perfect blend of comfort and sustainability with our premium organic cotton socks. 
              Designed for those who appreciate quality, simplicity, and conscious living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium"
              >
                Join the Waitlist
              </button>
              <button 
                onClick={handleLearnMore}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium"
              >
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-sm text-gray-500">6-Month</div>
                <div className="text-xl font-bold text-primary mt-1">Hole-Free</div>
                <div className="text-sm text-gray-500">Guarantee</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">100%</div>
                <div className="text-xl font-bold text-primary mt-1">Organic</div>
                <div className="text-sm text-gray-500">Cotton</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">3 Pairs</div>
                <div className="text-xl font-bold text-primary mt-1">Monthly</div>
                <div className="text-sm text-gray-500">Subscription</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Collection</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Minimalistic, comfortable, and sustainably made socks for every occasion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <Image
                  src="/images/sock-2.webp"
                  alt="No-Show Socks"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">No-Show Socks</h3>
                <p>Perfect for sneakers and loafers. Stay comfortable without showing your socks.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-primary">Best Seller</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <Image
                  src="/images/sock-3.webp"
                  alt="Ankle Socks"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Ankle Socks</h3>
                <p>Classic comfort with a modern twist. Ideal for everyday wear.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-secondary">New</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="px-6 pt-6">
                <Image
                  src="/images/sock-4.webp"
                  alt="Quarter Socks"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Quarter Socks</h3>
                <p>Versatile length that works with any casual outfit.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-accent">Popular</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Snooks?</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            We're committed to quality, sustainability, and your comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="card-title">Organic Cotton</h3>
                <p>Made from premium organic cotton, ensuring comfort and environmental responsibility.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🇦🇪</span>
                </div>
                <h3 className="card-title">UAE Made</h3>
                <p>Proudly crafted in the UAE, supporting local manufacturing and quality standards.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="card-title">6-Month Guarantee</h3>
                <p>Our commitment to quality with a hole-free guarantee for your peace of mind.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="card-title">Perfect Gift</h3>
                <p>Give the gift of comfort with our beautifully packaged sock sets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainability at Our Core</h2>
              <p className="text-lg mb-6">
                At Snooks, we believe in creating products that are not only comfortable but also environmentally responsible. Our commitment to sustainability goes beyond just using organic materials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">♻️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Eco-Friendly Packaging</h3>
                    <p>Our packaging is made from recycled materials and is fully recyclable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Reduced Carbon Footprint</h3>
                    <p>By manufacturing locally in the UAE, we minimize transportation emissions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Water Conservation</h3>
                    <p>Our production process uses significantly less water than conventional methods.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/sock-5.webp"
                alt="Sustainability"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-content p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">100%</p>
                <p>Organic Cotton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute top-8 right-8">
            <div className="bg-[#00ffd1] text-black px-6 py-2 rounded-full font-medium">
              Save 20%
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                The Snooks Subscription
              </h2>
              <p className="text-2xl text-gray-500 mb-12">
                Never run out of comfortable socks again!
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-3xl">🎁</div>
                  <h3 className="font-medium text-xl">Monthly Delivery</h3>
                  <p className="text-gray-500">3 pairs delivered to your door</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">⚡️</div>
                  <h3 className="font-medium text-xl">Flexible Plans</h3>
                  <p className="text-gray-500">Pause or cancel anytime</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🚚</div>
                  <h3 className="font-medium text-xl">Free Shipping</h3>
                  <p className="text-gray-500">On all subscription orders</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">💎</div>
                  <h3 className="font-medium text-xl">Premium Quality</h3>
                  <p className="text-gray-500">100% organic cotton</p>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#00ffd1] hover:bg-[#00e6bc] text-black px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all"
              >
                Join the Waitlist
                <span className="text-xl">→</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ffd1]/20 via-transparent to-primary/20 rounded-3xl"></div>
              <Image
                src="/images/sock-6.webp"
                alt="Subscription Box"
                width={600}
                height={400}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have experienced the Snooks difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rating rating-sm">
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  </div>
                  <span className="font-bold">5.0</span>
                </div>
                <p className="italic">"The most comfortable socks I've ever worn. The no-show style is perfect for my sneakers!"</p>
                <div className="card-actions justify-end mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <span>AH</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Ahmed H.</p>
                    <p className="text-sm">Dubai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  </div>
                  <span className="font-bold">5.0</span>
                </div>
                <p className="italic">"I love the subscription model! Fresh socks every month without having to remember to order."</p>
                <div className="card-actions justify-end mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <span>SK</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Sarah K.</p>
                    <p className="text-sm">Abu Dhabi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rating rating-sm">
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  </div>
                  <span className="font-bold">5.0</span>
                </div>
                <p className="italic">"The quality is outstanding. After 6 months of daily wear, they still look and feel like new!"</p>
                <div className="card-actions justify-end mt-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <span>MR</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Mohammed R.</p>
                    <p className="text-sm">Sharjah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Snooks Waitlist</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch! Join hundreds of others who are already waiting to experience 
            the comfort of Snooks.
          </p>
          <WaitlistForm />
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2024 Snooks. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
