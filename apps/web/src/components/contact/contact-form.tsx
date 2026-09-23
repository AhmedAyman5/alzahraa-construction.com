import { useState } from 'react';
import pocketbaseClient from '@/lib/pocketbase-client';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useT } from '@/i18n';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
	'w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold';

export function ContactForm() {
	const [status, setStatus] = useState<Status>('idle');
	const [errorMsg, setErrorMsg] = useState('');
	const t = useT();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		const name = String(data.get('name') ?? '').trim();
		const phone = String(data.get('phone') ?? '').trim();
		const projectType = String(data.get('project_type') ?? '');
		const area = String(data.get('area') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !phone || !projectType) {
			setErrorMsg(t.form.validationError);
			setStatus('error');
			return;
		}

		setStatus('sending');
		setErrorMsg('');

		try {
			await pocketbaseClient.collection('contact_requests').create({
				name,
				phone,
				project_type: projectType,
				area,
				message,
			});
			setStatus('success');
			form.reset();
		} catch {
			setErrorMsg(t.form.submitError);
			setStatus('error');
		}
	}

	if (status === 'success') {
		return (
			<div className="flex flex-col items-center border border-gold/40 bg-card p-12 text-center">
				<CheckCircle2 className="size-14 text-gold" strokeWidth={1.5} />
				<h2 className="mt-4 text-2xl font-extrabold text-navy">{t.form.successTitle}</h2>
				<p className="mt-2 leading-8 text-muted-foreground">
					{t.form.successBody}
				</p>
				<button
					type="button"
					onClick={() => setStatus('idle')}
					className="mt-6 min-h-11 rounded-sm border border-navy px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
				>
					{t.form.sendAnother}
				</button>
			</div>
		);
	}

	const projectTypes = [
		{ value: 'villa', label: t.form.projectTypes.villa },
		{ value: 'building', label: t.form.projectTypes.building },
		{ value: 'factory', label: t.form.projectTypes.factory },
		{ value: 'finishing', label: t.form.projectTypes.finishing },
		{ value: 'other', label: t.form.projectTypes.other },
	];

	return (
		<form onSubmit={handleSubmit} className="border border-border bg-card p-8" noValidate={false}>
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="flex flex-col gap-2">
					<label htmlFor="name" className="text-sm font-bold text-navy">{t.form.nameLabel}</label>
					<input id="name" name="name" type="text" required placeholder={t.form.namePlaceholder} className={inputClass} />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="phone" className="text-sm font-bold text-navy">{t.form.phoneLabel}</label>
					<input id="phone" name="phone" type="tel" required placeholder={t.form.phonePlaceholder} dir="ltr" className={inputClass} />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="project_type" className="text-sm font-bold text-navy">{t.form.projectTypeLabel}</label>
					<select id="project_type" name="project_type" required defaultValue="" className={inputClass}>
						<option value="" disabled>{t.form.projectTypePlaceholder}</option>
						{projectTypes.map(type => (
							<option key={type.value} value={type.value}>{type.label}</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="area" className="text-sm font-bold text-navy">{t.form.areaLabel}</label>
					<input id="area" name="area" type="text" placeholder={t.form.areaPlaceholder} className={inputClass} />
				</div>
				<div className="flex flex-col gap-2 sm:col-span-2">
					<label htmlFor="message" className="text-sm font-bold text-navy">{t.form.messageLabel}</label>
					<textarea id="message" name="message" rows={5} placeholder={t.form.messagePlaceholder} className={inputClass} />
				</div>
			</div>

			{status === 'error' ? (
				<p className="mt-4 flex items-center gap-2 text-sm font-bold text-destructive" role="alert">
					<AlertCircle className="size-4" />
					{errorMsg}
				</p>
			) : null}

			<button
				type="submit"
				disabled={status === 'sending'}
				className="mt-6 flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-base font-extrabold text-navy transition-transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
			>
				{status === 'sending' ? (
					<>
						<Loader2 className="size-5 animate-spin" />
						{t.form.sending}
					</>
				) : (
					<>
						<Send className="size-5" />
						{t.form.submit}
					</>
				)}
			</button>
		</form>
	);
}
