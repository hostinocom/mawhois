import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DomainSearchForm from '../ui/DomainSearchForm';
import Loading from '../ui/Loading';
import { useAppStore } from '../../store/useAppStore';

interface Registry {
	code: string;
	name: string;
	placeholder: string;
	extension: string;
}

interface DomainResult {
	domain: string;
	available: boolean;
	price?: string;
	info?: {
		'Domain Name'?: string;
		'Domain Status'?: string;
		'Registrar'?: string;
		'Creation Date'?: string;
		'Registry Expiry Date'?: string;
		'Registrar Registration Expiration Date'?: string;
		'Updated Date'?: string;
		'Registrant Name'?: string;
		'Admin Name'?: string;
		'Admin Phone'?: string;
		'Admin Email'?: string;
		'Tech Name'?: string;
		'Tech Phone'?: string;
		'Tech Email'?: string;
		'Name Server'?: string | string[];
		[key: string]: any;
	};
}

interface SearchResultsModalProps {
	registries: Registry[];
	defaultRegistry: Registry;
}

// Format date from ISO string to YYYY-MM-DD
function formatDate(dateString: string): string {
	if (!dateString) return '';
	try {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	} catch (error) {
		return dateString;
	}
}

export default function SearchResultsModal({ 
	registries }: SearchResultsModalProps) {
	const { selectedDomain, setSelectedDomain, openModal, setOpenModal } = useAppStore();
	const [result, setResult] = useState<DomainResult | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const apiUrl = import.meta.env.PUBLIC_API_URL;

	// Fetch domain data when domain changes
	useEffect(() => {
		if (!selectedDomain) return;

		setIsLoading(true);
		setResult(null);
		
		fetch(`${apiUrl}/api/whois?domain=${selectedDomain}`)
			.then(res => res.json())
			.then(data => {
				setResult(data);
				setIsLoading(false);
			})
			.catch(err => {
				console.error('Error fetching domain data:', err);
				setIsLoading(false);
			});
	}, [selectedDomain]);

	// Manage body scroll and background blur
	useEffect(() => {
		const backgroundContent = document.getElementById('background-content');
		
		if (openModal) {
			document.body.style.overflow = 'hidden';
			if (backgroundContent) {
				backgroundContent.style.filter = 'blur(2px)';
				backgroundContent.style.pointerEvents = 'none';
				backgroundContent.style.userSelect = 'none';
			}
		} else {
			document.body.style.overflow = '';
			if (backgroundContent) {
				backgroundContent.style.filter = '';
				backgroundContent.style.pointerEvents = '';
				backgroundContent.style.userSelect = '';
			}
		}

		return () => {
			document.body.style.overflow = '';
			if (backgroundContent) {
				backgroundContent.style.filter = '';
				backgroundContent.style.pointerEvents = '';
				backgroundContent.style.userSelect = '';
			}
		};
	}, [openModal]);

	const handleClose = () => {
		// Update URL without reloading
		window.history.pushState({}, '', '/');
		setOpenModal(false);
		setSelectedDomain('');
		setResult(null);
	};

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	const handleEscapeKey = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleEscapeKey);
		return () => document.removeEventListener('keydown', handleEscapeKey);
	}, []);

	// Don't render modal if not open or no domain
	if (!openModal || !selectedDomain) {
		return null;
	}

	return (
		<AnimatePresence>
			{/* Modal Overlay */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
				aria-hidden="true"
				onClick={handleOverlayClick}
			/>

			{/* Modal Content */}
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
				<motion.div 
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 10 }}
					transition={{ 
						type: "spring",
						damping: 25,
						stiffness: 300,
						duration: 0.3
					}}
					className="relative w-[95vw] h-[95vh] bg-white shadow-2xl overflow-hidden pointer-events-auto"
				>
					{/* Close Button */}
					<motion.button
						onClick={handleClose}
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2"
						aria-label="Close and return to home"
						title="Close (ESC)"
					>
						<svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</motion.button>

					{/* Scrollable Content */}
					<div className="overflow-y-auto h-full custom-scrollbar">
						{/* Header with Logo and Search Form - Always Visible */}
						<div className="px-6 py-6 md:py-8 md:px-12 lg:px-16 sticky top-0 z-10">
							<div className="max-w-6xl mx-auto">
								<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
									{/* Logo */}
									<div className="shrink-0">
										<a href="/" aria-label="WHOIS Maroc Home">
											<img src="/logo-dark.png" alt="WHOIS Maroc Logo" className="h-8 md:h-10" />
										</a>
									</div>
									
									{/* Search Form */}
									<div className="flex-1 w-full">
										<DomainSearchForm registries={registries} />
									</div>
								</div>
							</div>
						</div>

						{/* Results Section - Shows Loading or Results */}
						<section className="bg-white px-6 py-12 md:px-12 lg:px-16">
							{isLoading ? (
								<Loading message="Recherche des informations du domaine..." size="lg" />
							) : !result ? (
								<Loading message="Aucun résultat trouvé..." size="md" />
							) : (
								<div className="max-w-4xl mx-auto">
									{result.available ? (
										// Domain Available
										<motion.div 
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2, duration: 0.4 }}
											className="text-center py-12"
										>
										<div className="mb-8">
											<motion.div 
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ type: "spring", delay: 0.3, stiffness: 200, damping: 15 }}
												className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
											>
												<svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
												</svg>
											</motion.div>
											<motion.h2 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.4 }}
												className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
											>
												Le domaine <span className="font-semibold">{selectedDomain}</span> est disponible!
											</motion.h2>
											<motion.p 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.5 }}
												className="text-lg text-gray-600"
											>
												Vous pouvez enregistrer ce domaine dès maintenant.
											</motion.p>
										</div>
										
										<motion.div 
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 }}
											className="flex justify-center gap-4"
										>
											<motion.button 
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="px-8 py-4 text-lg bg-(--color-primary) hover:bg-[#00c157] text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
											>
												Enregistrer maintenant
											</motion.button>
										</motion.div>
									</motion.div>
								) : (
									// Domain Not Available
									<motion.div 
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2, duration: 0.4 }}
										className="py-8"
									>
										<div className="text-center mb-12">
											<motion.div 
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ type: "spring", delay: 0.3, stiffness: 200, damping: 15 }}
												className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4"
											>
												<svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
												</svg>
											</motion.div>
											<motion.h2 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.4 }}
												className="text-2xl md:text-3xl font-light text-gray-900"
											>
												Malheureusement, le domaine <span className="font-semibold">{selectedDomain}</span> est déjà enregistré.
											</motion.h2>
										</div>

										{/* WHOIS Information */}
										{result.info && (
											<motion.div 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.5, duration: 0.4 }}
												className="space-y-8"
											>
												{/* Domain Information */}
												<div className="bg-[#d4e8d4] rounded-lg overflow-hidden">
													<div className="divide-y divide-white">
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Domain Name</div>
															<div className="text-gray-900">{result.info['Domain Name'] || result.info.domain}</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Status</div>
															<div className="text-gray-900">
																{(() => {
																	try {
																		const status = result.info['Domain Status'] || result.info.status || '';
																		return status.toLowerCase().includes('active') ? 'Actif' : 'Inactif';
																	} catch (error) {
																		return 'Inconnu';
																	}
																})()}
															</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Registrar</div>
															<div className="text-gray-900">{result.info.Registrar || result.info.registrar}</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Creation Date</div>
															<div className="text-gray-900">{formatDate(result.info['Creation Date'] || result.info.created)}</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Expiration Date</div>
															<div className="text-gray-900">{formatDate(result.info['Registry Expiry Date'] || result.info['Registrar Registration Expiration Date'] || result.info.expires)}</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Last Update Date</div>
															<div className="text-gray-900">{formatDate(result.info['Updated Date'] || result.info.updated)}</div>
														</div>
													</div>
												</div>

												{/* Contact Information */}
												<div className="bg-[#d4e8d4] rounded-lg overflow-hidden">
													<div className="divide-y divide-white">
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Registrant</div>
															<div className="text-gray-900">{result.info['Registrant Name'] || result.info.registrant}</div>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Administrative Contact</div>
															<div className="text-gray-900">{result.info['Admin Name'] || result.info.admin}</div>
														</div>
														{result.info['Admin Phone'] && (
															<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																<div className="font-semibold text-gray-900"></div>
																<div className="text-gray-900">{result.info['Admin Phone']}</div>
															</div>
														)}
														{result.info['Admin Email'] && (
															<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																<div className="font-semibold text-gray-900"></div>
																<div className="text-gray-900">{result.info['Admin Email']}</div>
															</div>
														)}
														<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
															<div className="font-semibold text-gray-900">Technical Contact</div>
															<div className="text-gray-900">{result.info['Tech Name'] || result.info.tech}</div>
														</div>
														{result.info['Tech Phone'] && (
															<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																<div className="font-semibold text-gray-900"></div>
																<div className="text-gray-900">{result.info['Tech Phone']}</div>
															</div>
														)}
														{result.info['Tech Email'] && (
															<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																<div className="font-semibold text-gray-900"></div>
																<div className="text-gray-900">{result.info['Tech Email']}</div>
															</div>
														)}
													</div>
												</div>

												{/* Name Servers */}
												{result.info['Name Server'] && (
													<div className="bg-[#d4e8d4] rounded-lg overflow-hidden">
														<div className="divide-y divide-white">
															{Array.isArray(result.info['Name Server']) ? (
																result.info['Name Server'].map((ns: string, index: number) => (
																	<div key={index} className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																		<div className="font-semibold text-gray-900">NS{index + 1}</div>
																		<div className="text-gray-900">{ns}</div>
																	</div>
																))
															) : (
																<div className="grid grid-cols-1 md:grid-cols-2 px-6 py-3">
																	<div className="font-semibold text-gray-900">NS1</div>
																	<div className="text-gray-900">{result.info['Name Server']}</div>
																</div>
															)}
														</div>
													</div>
												)}
											</motion.div>
										)}

										{/* Actions */}
										<motion.div 
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 }}
											className="mt-8 text-center"
										>
											<motion.button 
												onClick={handleClose}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="inline-flex items-center px-8 py-4 text-lg bg-(--color-primary) hover:bg-[#00c157] text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
											>
												<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
												</svg>
												Nouvelle recherche
											</motion.button>
											</motion.div>
										</motion.div>
									)}
								</div>
							)}
						</section>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

