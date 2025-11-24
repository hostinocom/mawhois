import { create } from 'zustand';
import { registries } from '../config/registries';

interface AppState {
    selectedExtension: string;
    setSelectedExtension: (extension: string) => void;
    selectedDomain: string;
    setSelectedDomain: (domain: string) => void;
    placeholder: string;
    setPlaceholder: (placeholder: string) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    selectedExtension: registries[0].extension,
    setSelectedExtension: (extension) => set({ selectedExtension: extension }),
    selectedDomain: '',
    setSelectedDomain: (domain) => set({ selectedDomain: domain }),
    placeholder: registries[0].placeholder,
    setPlaceholder: (placeholder) => set({ placeholder }),
    openModal: false,
    setOpenModal: (open) => set({ openModal: open }),
}));