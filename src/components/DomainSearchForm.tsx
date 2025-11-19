import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';

interface Registry {
	code: string;
	name: string;
	placeholder: string;
	extension: string;
}

interface DomainSearchFormProps {
	registries: Registry[];
	defaultRegistry: Registry;
}

export default function DomainSearchForm({ registries, defaultRegistry }: DomainSearchFormProps) {
	const [domainInput, setDomainInput] = useState('');
	const [selectedExtension, setSelectedExtension] = useState(defaultRegistry.extension);
	const [placeholder, setPlaceholder] = useState(defaultRegistry.placeholder);

	// Load saved extension preference and URL params on mount
	useEffect(() => {
		// Check for saved preference
		const savedExtension = localStorage.getItem('selectedExtension');
		if (savedExtension) {
			const registry = registries.find(r => r.extension === savedExtension);
			if (registry) {
				setSelectedExtension(registry.extension);
				setPlaceholder(registry.placeholder);
			}
		}

		// Pre-fill from URL parameters
		const urlParams = new URLSearchParams(window.location.search);
		const domainParam = urlParams.get('domain');
		
		if (domainParam) {
			const parsed = parseDomain(domainParam, defaultRegistry.extension);
			setDomainInput(domainParam);
			
			if (parsed.extension) {
				setSelectedExtension(parsed.extension);
				const registry = registries.find(r => r.extension === parsed.extension);
				if (registry) {
					setPlaceholder(registry.placeholder);
				}
			}
		}
	}, [registries, defaultRegistry]);

	// Parse domain to extract extension if present
	const parseDomain = (input: string, fallbackExtension: string): { domain: string; extension: string } => {
		const trimmed = input.trim().toLowerCase();
		
		// Check if input has any valid extension
		for (const registry of registries) {
			if (trimmed.endsWith(registry.extension)) {
				return {
					domain: trimmed.slice(0, -registry.extension.length),
					extension: registry.extension
				};
			}
		}
		
		// No extension found, use fallback
		return {
			domain: trimmed,
			extension: fallbackExtension
		};
	};

	// Validate domain name
	const validateDomain = (domain: string): { valid: boolean; error?: string } => {
		const validDomainPattern = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i;
		
		if (domain.length < 2) {
			return { valid: false, error: 'Le nom de domaine doit contenir au moins 2 caractères' };
		}
		
		if (domain.length > 63) {
			return { valid: false, error: 'Le nom de domaine ne peut pas dépasser 63 caractères' };
		}
		
		if (!validDomainPattern.test(domain)) {
			return { valid: false, error: 'Le nom de domaine ne peut contenir que des lettres, chiffres et tirets' };
		}
		
		return { valid: true };
	};

	// Handle extension change
	const handleExtensionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newExtension = e.target.value;
		setSelectedExtension(newExtension);
		
		const registry = registries.find(r => r.extension === newExtension);
		if (registry) {
			setPlaceholder(registry.placeholder);
		}
		
		// Save preference
		localStorage.setItem('selectedExtension', newExtension);
	};

	// Handle form submission
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const trimmedInput = domainInput.trim();
		if (!trimmedInput) {
			return;
		}
		
		// Parse domain and extension
		const { domain, extension } = parseDomain(trimmedInput, selectedExtension);
		
		// Validate domain
		const validation = validateDomain(domain);
		if (!validation.valid) {
			alert(validation.error);
			return;
		}
		
		// Redirect with full domain in URL
		window.location.href = `/?domain=${encodeURIComponent(domain + extension)}`;
	};

	return (
		<form 
			onSubmit={handleSubmit}
			className="flex flex-col sm:flex-row gap-0 max-w-2xl" 
			role="search" 
			aria-label="Recherche de domaine"
		>
			<div className="flex flex-1 bg-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none shadow-xl">
				<label htmlFor="domain-search" className="sr-only">
					Chercher un domaine
				</label>
				<input 
					type="text" 
					id="domain-search"
					name="domain"
					value={domainInput}
					onChange={(e) => setDomainInput(e.target.value)}
					required
					minLength={2}
					maxLength={63}
					placeholder={placeholder}
					className="flex-1 px-6 py-4 md:py-5 text-gray-700 placeholder:text-gray-400 text-base md:text-lg focus:outline-none rounded-tl-lg sm:rounded-l-lg transition-opacity duration-300"
					aria-label="Nom de domaine"
				/>
				<div className="relative flex items-center border-l border-gray-200">
					<select 
						id="registry-select"
						value={selectedExtension}
						onChange={handleExtensionChange}
						className="appearance-none px-4 py-4 md:py-5 text-gray-700 font-semibold text-base md:text-lg bg-transparent cursor-pointer hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors pr-10 min-w-[100px]"
						aria-label="Sélectionner un registre de domaine"
					>
						{registries.map(registry => (
							<option key={registry.code} value={registry.extension}>
								{registry.extension}
							</option>
						))}
					</select>
					{/* Custom dropdown arrow */}
					<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
						<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</div>
			</div>
			<button 
				type="submit" 
				className="bg-[#00d563] hover:bg-[#00c157] text-white px-8 py-4 md:py-5 text-base md:text-lg font-semibold rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-all duration-200 hover:shadow-lg active:scale-[0.98] shadow-xl"
				aria-label="Rechercher le domaine"
			>
				Rechercher
			</button>
		</form>
	);
}

