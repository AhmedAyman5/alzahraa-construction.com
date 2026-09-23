import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/contact';
import { useT } from '@/i18n';

export function WhatsappFloat() {
	const t = useT();
	return (
		<a
			href={CONTACT.whatsapp}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-5 start-5 z-50 flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
			aria-label={t.whatsappLabel}
		>
			<MessageCircle className="size-5" strokeWidth={2.2} />
			{t.whatsappText}
		</a>
	);
}
