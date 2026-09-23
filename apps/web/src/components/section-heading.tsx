interface SectionHeadingProps {
	index: string;
	kicker: string;
	title: string;
	description?: string;
	align?: 'start' | 'center';
}

export function SectionHeading({ index, kicker, title, description, align = 'start' }: SectionHeadingProps) {
	const centered = align === 'center';

	return (
		<div className={centered ? 'text-center' : ''}>
			<div className={`flex items-end gap-4 ${centered ? 'justify-center' : ''}`}>
				<span className="index-number text-6xl sm:text-7xl" aria-hidden="true">{index}</span>
				<div className="pb-1">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{kicker}</p>
					<h2 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
				</div>
			</div>
			{description ? (
				<p className={`mt-4 max-w-2xl leading-8 text-muted-foreground ${centered ? 'mx-auto' : ''}`}>
					{description}
				</p>
			) : null}
		</div>
	);
}
