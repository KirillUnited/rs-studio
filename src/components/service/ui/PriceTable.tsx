'use client'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import React from 'react'
import { BiLoader } from 'react-icons/bi';

export default function PriceTable({ data }: { data: any }) {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return <BiLoader />;
	}

	if (!Array.isArray(data) || data.length === 0) {
		return null;
	}

	return (
		<Table aria-label="Блок цен">
			<TableHeader>
				<TableColumn>УСЛУГА</TableColumn>
				<TableColumn>СРОКИ</TableColumn>
				<TableColumn>ЦЕНА</TableColumn>
			</TableHeader>
			<TableBody>
				{
					data.map((item: any) => (
						<TableRow key={item._key}>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.estimate}</TableCell>
							<TableCell>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'BYN' }).format(item.value)}</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
	)
}
