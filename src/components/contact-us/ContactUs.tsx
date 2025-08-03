import Pretitle from "@/ui/Pretitle"
import { Badge, Button, Card, CardBody, CardHeader, Input, Textarea } from "@heroui/react"
import { BsArrowRight, BsCheckCircle, BsMailbox, BsPhone } from "react-icons/bs"
import { CgLock } from "react-icons/cg"
import { FaMapPin } from "react-icons/fa"

export default function ContactUs() {
	return (
		<section id="contact" className="py-20 bg-background">
			<div className="container">
				<div className="text-center mb-16">
					<Pretitle >Contact Us</Pretitle>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
						Get Your Free Quote Today
					</h2>
					<p className="text-foreground-500 text-lg max-w-3xl mx-auto">
						Ready to restore your car's leather interior? Contact us for a free consultation
						and detailed quote tailored to your vehicle's needs.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<Card className="bg-card border-border">
							<CardHeader>
								<h3 className="text-foreground">Send us a message</h3>
								<p className="text-muted-foreground">
									Fill out the form below and we'll get back to you within 24 hours.
								</p>
							</CardHeader>
							<CardBody className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<Input
										placeholder="Your Name"
										// value={formData.name}
										// onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										className="bg-background"
									/>
									<Input
										placeholder="Email"
										type="email"
										// value={formData.email}
										// onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className="bg-background"
									/>
								</div>
								<Input
									placeholder="Phone Number"
									// value={formData.phone}
									// onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									className="bg-background"
								/>
								<Textarea
									placeholder="Tell us about your vehicle and restoration needs..."
									// value={formData.message}
									// onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="min-h-32 bg-background"
								/>
								<Button color="primary" className="w-full brand-gradient">
									Send Message
									<BsArrowRight size={16} />
								</Button>
							</CardBody>
						</Card>
					</div>

					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<BsPhone className="h-5 w-5 text-primary" />
									<span className="text-foreground">(555) 123-4567</span>
								</div>
								<div className="flex items-center space-x-4">
									<BsMailbox className="h-5 w-5 text-primary" />
									<span className="text-foreground">info@luxeleatherpro.com</span>
								</div>
								<div className="flex items-center space-x-4">
									<FaMapPin className="h-5 w-5 text-primary" />
									<span className="text-foreground">123 Restoration Way, Auto City, AC 12345</span>
								</div>
								<div className="flex items-center space-x-4">
									<CgLock className="h-5 w-5 text-primary" />
									<span className="text-foreground">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">15+ years of experience</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">Factory-trained technicians</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">100% satisfaction guarantee</span>
								</div>
								<div className="flex items-center space-x-3">
									<BsCheckCircle className="h-5 w-5 text-primary" />
									<span className="text-muted-foreground">Premium materials only</span>
								</div>
							</div>
						</div>

						<Card className="bg-primary/10 border-primary/20">
							<CardBody className="p-6">
								<h4 className="font-semibold text-foreground mb-2">Free Consultation</h4>
								<p className="text-muted-foreground text-sm">
									Get a detailed assessment of your vehicle's interior and personalized restoration plan at no cost.
								</p>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}