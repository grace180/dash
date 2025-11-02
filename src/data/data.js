import {
    Home,
    CreditCard,
    Files,
} from "lucide-react";

export const revenueData = [
    { month: 'January', revenue: 4000 },
    { month: 'February', revenue: 3000 },
    { month: 'March', revenue: 5000 },
    { month: 'April', revenue: 7000 },
   
];

export const performanceData = [
    { name: 'CPU', value: 75 },
    { name: 'Memory', value: 60 },
    { name: 'Disk', value: 80 },
    { name: 'Network', value: 50 },
];

export const liveactivityData = [
    { user: 'User1', time: '10:00', activity: 20, type: 'purchase', month: 'January', category: 'bfko' },
    { user: 'User2', time: '10:05', activity: 35, type: 'refund', month: 'February', category: 'service' },
    { user: 'User3', time: '10:10', activity: 30, type: 'signup', month: 'January', category: 'cc' },
];

export const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, gradient: 'light-blue-500' },
    { id: 'BFKO', label: 'BFKO', icon: CreditCard, gradient: 'light-blue-500' },
    { id: 'CC Card', label: 'CC Card', icon: CreditCard, gradient: 'light-blue-500' },
    { id: 'Service', label: 'Service Fee', icon: CreditCard, gradient: 'light-blue-500' },
    { id: 'Documents', label: 'Documents', icon: Files, gradient: 'light-blue-500' },
];

export const TophotelsData = [ 
    { rank: 1, name: 'Hotel A', serviceFee: 'Rp 50M', transactions: 45, month: 'January', category: 'bfko' },
    { rank: 2, name: 'Hotel B', serviceFee: 'Rp 45M', transactions: 38, month: 'February', category: 'service' },
    { rank: 3, name: 'Hotel C', serviceFee: 'Rp 40M', transactions: 32, month: 'January', category: 'cc' },
    { rank: 4, name: 'Hotel D', serviceFee: 'Rp 35M', transactions: 28, month: 'March', category: 'bfko' },
    { rank: 5, name: 'Hotel E', serviceFee: 'Rp 30M', transactions: 25, month: 'February', category: 'service' },
];
export const TopDestinationData = [ 
    { rank: 1, name: 'Baubau-Makassar', serviceFee: 'Rp 60M', destination: 40, month: 'January', category: 'card1' },
    { rank: 2, name: 'Baubau-Makassar', serviceFee: 'Rp 45M', destination: 28, month: 'February', category: 'card1' },
    { rank: 3, name: 'Makassar-Bogor', serviceFee: 'Rp 40M', destination: 45, month: 'January', category: 'card2' },
    { rank: 4, name: 'Makassar-Baubua', serviceFee: 'Rp 35M', destination: 10, month: 'March', category: 'card2' },
];

 export const bfkoRevenueData = [
    { month: 'January', revenue: 6000 },
    { month: 'February', revenue: 5500 },
    { month: 'March', revenue: 7000 },
   
];

export const ccCard1Data = [
    { month: 'January', card1: 6000, card2: 4500 },
    { month: 'February', card1: 5500, card2: 5200 },
    { month: 'March', card1: 7000, card2: 5800 },
  
];