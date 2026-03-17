export const PATH = {
    home: '/home',
    dashboard: '/dashboard',
    marketplace: '/dashboard/marketplace',
    movieDetails: '/dashboard/movie-details',
    soundEffects: '/dashboard/sound-effects',
    cover: '/dashboard/cover',
    editing: '/dashboard/editing',
    platformPricing: '/dashboard/platform-pricing',
    marketingMaterials: '/dashboard/marketing-materials',
    earlyReviews: '/dashboard/early-reviews',
} as const;

export type Path = typeof PATH;