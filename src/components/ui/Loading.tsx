import { motion } from 'framer-motion';

interface LoadingProps {
	message?: string;
	size?: 'sm' | 'md' | 'lg';
}

export default function Loading({ message = 'Recherche en cours...', size = 'md' }: LoadingProps) {
	const sizeClasses = {
		sm: 'h-8 w-8 border-2',
		md: 'h-12 w-12 border-b-2',
		lg: 'h-16 w-16 border-b-3'
	};

	return (
		<motion.div 
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="text-center py-12"
		>
			<motion.div 
				animate={{ rotate: 360 }}
				transition={{ 
					duration: 1,
					repeat: Infinity,
					ease: "linear"
				}}
				className={`${sizeClasses[size]} rounded-full border-(--color-primary) mx-auto`}
			/>
			{message && (
				<motion.p 
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mt-4 text-gray-600"
				>
					{message}
				</motion.p>
			)}
		</motion.div>
	);
}

