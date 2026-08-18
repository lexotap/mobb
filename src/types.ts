export type Platform =
  | 'Instagram'
  | 'TikTok'
  | 'User Generated Content'
  | 'YouTube'
  | 'Twitter'
  | 'Twitch'
  | 'Amazon'
  | 'Snapchat';

export interface ServicePackage {
  id: string;
  title: string;
  price: number;
  description: string;
  deliveryTime: string;
}

export interface ReviewBadge {
  avatar: string;
  comment: string;
  rating?: number;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  cardImage: string;
  location: string;
  bio: string;
  platform: Platform;
  followers: string;
  followersCount: number;
  following?: string;
  engagementRate: string;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  tags: string[];
  portfolioImages: string[];
  packages: ServicePackage[];
  verified?: boolean;
  reviewBadges?: ReviewBadge[];
}

export interface FilterOption {
  id: string;
  label: string;
  iconName: string;
  tagValue?: string;
  maxPrice?: number;
}
