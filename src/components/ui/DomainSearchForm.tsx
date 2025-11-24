import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useAppStore } from '../../store/useAppStore';

interface Registry {
	code: string;
	name: string;
	placeholder: string;
	extension: string;
}

interface DomainSearchFormProps {
	registries: Registry[];
}

export default function DomainSearchForm({ registries }: DomainSearchFormProps) {
	const { selectedExtension, setSelectedExtension, selectedDomain, setSelectedDomain, placeholder, setPlaceholder, openModal, setOpenModal } = useAppStore();

	// Load saved extension preference and URL params on mount
	useEffect(() => {
		// Pre-fill from URL parameters
		const urlParams = new URLSearchParams(window.location.search);
		const domainParam = urlParams.get('domain');
		
		if (domainParam) {
			const parsed = parseDomain(domainParam, selectedExtension);
			setSelectedDomain(parsed.domain);
			
			if (parsed.extension) {
				setSelectedExtension(parsed.extension);
				const registry = registries.find(r => r.extension === parsed.extension);
				if (registry) {
					setPlaceholder(registry.placeholder);
				}
			}
		}
	}, [registries]);

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
		
	};

	// Handle form submission
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const trimmedInput = selectedDomain.trim();
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
		setSelectedDomain(domain);
		setSelectedExtension(extension);

		console.log('selectedDomain', selectedDomain);
		console.log('selectedExtension', selectedExtension);
		// Update URL without reloading the page
		const fullDomain = domain + extension;
		window.history.pushState({}, '', `/?domain=${encodeURIComponent(fullDomain)}`);
		if (!openModal) {
			setOpenModal(true);
		}
	};

	return (
		<form 
			onSubmit={handleSubmit}
			className="flex flex-col sm:flex-row gap-0 w-full max-w-2xl" 
			role="search" 
			aria-label="Recherche de domaine"
		>
			<div className="flex flex-1 bg-white border-2 border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none min-w-0">
				<label htmlFor="domain-search" className="sr-only">
					Chercher un domaine
				</label>
				<input 
					type="text" 
					id="domain-search"
					name="domain"
					value={selectedDomain}
					onChange={(e) => setSelectedDomain(e.target.value)}
					required
					minLength={2}
					maxLength={63}
					placeholder={placeholder}
					className="flex-1 min-w-0 px-3 sm:px-6 py-4 md:py-5 text-gray-700 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none rounded-tl-lg sm:rounded-l-lg transition-opacity duration-300 border-0"
					aria-label="Nom de domaine"
				/>
				<div className="relative flex items-center border-l-2 border-gray-300 shrink-0">
					<select 
						id="registry-select"
						value={selectedExtension}
						onChange={handleExtensionChange}
						className="appearance-none px-2 sm:px-4 py-4 md:py-5 text-gray-700 font-semibold text-sm sm:text-base md:text-lg bg-transparent cursor-pointer hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors pr-8 sm:pr-10 w-[80px] sm:w-auto sm:min-w-[100px]"
						aria-label="Sélectionner un registre de domaine"
					>
						{registries.map(registry => (
							<option key={registry.code} value={registry.extension}>
								{registry.extension}
							</option>
						))}
					</select>
					{/* Custom dropdown arrow */}
					<div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
						<svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</div>
			</div>
			<button 
				type="submit" 
				className="bg-(--color-primary) hover:bg-[#00c157] text-white px-6 sm:px-8 py-4 md:py-5 text-sm sm:text-base md:text-lg font-semibold rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-all duration-200 hover:shadow-lg active:scale-[0.98] shadow-xl shrink-0"
				aria-label="Rechercher le domaine"
			>
				Rechercher
			</button>
		</form>
	);
}


