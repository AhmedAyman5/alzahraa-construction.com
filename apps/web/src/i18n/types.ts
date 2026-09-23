/** Shape of every translation dictionary — both ar.ts and en.ts must satisfy it. */
export interface Translations {
	meta: {
		homeTitle: string;
		homeDescription: string;
		aboutTitle: string;
		aboutDescription: string;
		servicesTitle: string;
		servicesDescription: string;
		projectsTitle: string;
		projectsDescription: string;
		equipmentTitle: string;
		equipmentDescription: string;
		contactTitle: string;
		contactDescription: string;
	};

	siteName: string;
	siteShortName: string;
	nav: {
		home: string;
		about: string;
		services: string;
		projects: string;
		equipment: string;
		contact: string;
	};
	langSwitch: string;
	openMenu: string;
	closeMenu: string;
	mainNav: string;
	mobileNav: string;

	freeQuote: string;
	freeQuoteLong: string;

	whatsappLabel: string;
	whatsappText: string;

	quickLinks: string;
	contactUs: string;
	footerTagline: string;
	footerCopyright: string;
	logoAlt: string;

	hero: {
		badge: string;
		titleMain: string;
		titleAccent: string;
		subtitle: string;
		ctaPrimary: string;
		ctaSecondary: string;
		imageAlt: string;
	};

	stats: {
		experience: string;
		projects: string;
		clients: string;
		equipment: string;
		ariaLabel: string;
	};

	aboutPreview: {
		kicker: string;
		title: string;
		body: string;
		cta: string;
		imageAlt: string;
	};

	servicesHome: {
		kicker: string;
		title: string;
		description: string;
		detailsLink: string;
	};

	process: {
		kicker: string;
		title: string;
		steps: { title: string; text: string }[];
	};

	beforeAfter: {
		kicker: string;
		title: string;
		description: string;
		beforeAlt: string;
		afterAlt: string;
		beforeCaption: string;
		afterCaption: string;
	};

	whyUs: {
		kicker: string;
		title: string;
		reasons: { title: string; text: string }[];
	};

	ctaBanner: {
		title: string;
		subtitle: string;
		cta: string;
		bannerAlt: string;
	};

	aboutPage: {
		kicker: string;
		heroTitle: string;
		storyKicker: string;
		storyTitle: string;
		storyBody: string;
		teamImageAlt: string;
		values: { title: string; text: string }[];
		teamKicker: string;
		teamTitle: string;
		teamList: string[];
		scaffoldingAlt: string;
	};

	servicesPage: {
		kicker: string;
		heroTitle: string;
		heroSubtitle: string;
		requestQuote: string;
	};

	services: {
		id: string;
		title: string;
		summary: string;
		details: string;
		points: string[];
		imageAlt: string;
	}[];

	projectsPage: {
		kicker: string;
		heroTitle: string;
		heroSubtitle: string;
		sampleBadge: string;
	};

	projects: {
		title: string;
		location: string;
		category: string;
		imageAlt: string;
	}[];

	equipmentPage: {
		kicker: string;
		heroTitle: string;
		heroSubtitle: string;
		galleryKicker: string;
		galleryTitle: string;
	};

	equipment: {
		name: string;
		count: string;
		description: string;
	}[];
	equipmentGallery: {
		alt: string;
		caption: string;
	}[];

	contactPage: {
		kicker: string;
		heroTitle: string;
		heroSubtitle: string;
		contactInfoTitle: string;
		whatsappCta: string;
		workingHoursTitle: string;
		workingHoursBody: string;
		siteVisitNote: string;
	};

	form: {
		nameLabel: string;
		namePlaceholder: string;
		phoneLabel: string;
		phonePlaceholder: string;
		projectTypeLabel: string;
		projectTypePlaceholder: string;
		areaLabel: string;
		areaPlaceholder: string;
		messageLabel: string;
		messagePlaceholder: string;
		submit: string;
		sending: string;
		successTitle: string;
		successBody: string;
		sendAnother: string;
		validationError: string;
		submitError: string;
		projectTypes: {
			villa: string;
			building: string;
			factory: string;
			finishing: string;
			other: string;
		};
	};

	error: {
		oops: string;
		generic: string;
		notFound: string;
		errorWord: string;
	};

	jsonLd: {
		addressLocality: string;
	};
}
