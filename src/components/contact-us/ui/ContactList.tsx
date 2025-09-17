import Link from 'next/link';
import React from 'react'
import { BsMailbox, BsPhone } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import { FaMapPin } from 'react-icons/fa';

const ContactList = () => {
	return (
		<ul className="flex flex-col gap-2">
			<li className="flex items-center space-x-4">
				<BsPhone className="h-5 w-5 text-primary-600" />
				<Link href="tel:+375295916386" className="text-foreground-700 font-semibold hover:underline hover:text-primary transition-colors">+375 (29) 591 63 86</Link>
			</li>
			<li className="flex items-center space-x-4">
				<BsMailbox className="h-5 w-5 text-primary-600" />
				<Link href="mailto:info@rs-service.by" className="text-foreground-700 font-semibold hover:underline hover:text-primary transition-colors">info@rs-service.by</Link>
			</li>
			<li className="flex items-center space-x-4">
				<FaMapPin className="h-5 w-5 text-primary-600" />
				<span className="text-foreground-700 font-semibold">123 Restoration Way, Auto City, AC 12345</span>
			</li>
			<li className="flex items-center space-x-4">
				<CgLock className="h-5 w-5 text-primary-600" />
				<span className="text-foreground-700 font-semibold">Пн-Пт: 8:00 - 18:00</span>
			</li>
		</ul>
	)
}

export default ContactList;