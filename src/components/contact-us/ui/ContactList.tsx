import Link from 'next/link'
import React from 'react'
import { BsMailbox, BsPhone } from 'react-icons/bs'
import { CgLock } from 'react-icons/cg'
import { FaMapPin } from 'react-icons/fa'
import { getSite } from '@/sanity/lib/queries'

const ContactList = async () => {
	const { contactInfo } = await getSite()

	if (!contactInfo) return null;

	return (
		<ul className="flex flex-col gap-2">
			{contactInfo.phones && contactInfo.phones.map((phone) => (
				<li key={phone._key} className="flex items-center space-x-4">
					<BsPhone className="h-5 w-5 text-primary-600" />
					<Link href={`tel:${phone?.number}`}
								className="text-foreground-700 font-semibold hover:underline hover:text-primary transition-colors">{phone?.number}</Link>
				</li>
			))}
			{contactInfo.emails && contactInfo.emails.map((email) => (
				<li key={email._key} className="flex items-center space-x-4">
					<BsMailbox className="h-5 w-5 text-primary-600" />
					<Link href={`mailto:${email.email}`}
								className="text-foreground-700 font-semibold hover:underline hover:text-primary transition-colors">{email.email}</Link>
				</li>
			))}
			{contactInfo.address && contactInfo.address.map((address) => (
				<li key={address._key} className="flex items-center space-x-4">
					<FaMapPin className="h-5 w-5 text-primary-600" />
					<span className="text-foreground-700 font-semibold">{address.location}</span>
				</li>
			))}
			{contactInfo.workingHours && (
				<li className="flex items-center space-x-4">
					<CgLock className="h-5 w-5 text-primary-600" />
					<span className="text-foreground-700 font-semibold">Пн-Пт: 8:00 - 18:00</span>
				</li>
			)}
		</ul>
	)
}

export default ContactList