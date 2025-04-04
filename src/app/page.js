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
      <section className="hero min-h-[90vh] bg-gradient-to-br from-base-200 to-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto px-4 py-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-primary text-primary-content px-4 py-2 rounded-full font-bold transform rotate-3">
                UAE Made
              </div>
              <Image
                src="/images/sock-1.webp"
                alt="Snooks Minimalist Socks"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-content px-4 py-2 rounded-full font-bold transform -rotate-3">
                6-Month Guarantee
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-primary">Snooks</span>: Simple Socks, 
              <span className="block mt-2">Sustainably Made in the UAE</span>
            </h1>
            <p className="py-6 text-lg">
              Experience the perfect blend of comfort and sustainability with our premium organic cotton socks. 
              Designed for those who appreciate quality, simplicity, and conscious living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-lg"
              >
                Join the Waitlist
              </button>
              <button 
                onClick={handleLearnMore}
                className="btn btn-outline btn-lg"
              >
                Learn More
              </button>
            </div>
            <div className="stats shadow mt-8">
              <div className="stat">
                <div className="stat-title">6-Month</div>
                <div className="stat-value text-primary">Hole-Free</div>
                <div className="stat-desc">Guarantee</div>
              </div>
              <div className="stat">
                <div className="stat-title">100%</div>
                <div className="stat-value text-primary">Organic</div>
                <div className="stat-desc">Cotton</div>
              </div>
              <div className="stat">
                <div className="stat-title">3 Pairs</div>
                <div className="stat-value text-primary">Monthly</div>
                <div className="stat-desc">Subscription</div>
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
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="card-title text-3xl mb-4">The Snooks Subscription</h2>
                  <p className="text-lg mb-6">Never run out of comfortable socks again!</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      <span>3 new pairs every month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Flexible subscription management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Free shipping on all subscription orders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      <span>Cancel or pause anytime</span>
                    </li>
                  </ul>
                  <div className="card-actions mt-6">
                    <button className="btn btn-accent btn-lg">Learn More</button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/sock-6.webp"
                    alt="Subscription Box"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-accent text-accent-content px-4 py-2 rounded-full font-bold">
                    Save 20%
                  </div>
                </div>
              </div>
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
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Sustainability</a>
          <a className="link link-hover">Careers</a>
        </div> 
        <div>
          <span className="footer-title">Product</span> 
          <a className="link link-hover">No-Show Socks</a>
          <a className="link link-hover">Ankle Socks</a>
          <a className="link link-hover">Quarter Socks</a>
          <a className="link link-hover">Subscription</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">Shipping Policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span> 
          <div className="form-control w-80">
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
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
