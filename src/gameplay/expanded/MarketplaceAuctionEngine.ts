/**
 * Omniquest: Realm of Shadows - Marketplace, Merchant Economy & Auction House Engine
 * Dynamic merchant inventories, supply-and-demand price fluctuations, gold sinks, and auction bidding matrices.
 */

export interface MarketListing {
  listingId: string;
  sellerName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  startingBidGold: number;
  currentBidGold: number;
  buyoutPriceGold: number;
  highestBidderName?: string;
  timeRemainingSeconds: number;
}

export class MarketplaceAuctionEngine {
  private static instance: MarketplaceAuctionEngine;
  private activeListings: Map<string, MarketListing> = new Map();

  private constructor() {
    this.populateInitialListings();
  }

  public static getInstance(): MarketplaceAuctionEngine {
    if (!MarketplaceAuctionEngine.instance) {
      MarketplaceAuctionEngine.instance = new MarketplaceAuctionEngine();
    }
    return MarketplaceAuctionEngine.instance;
  }

  public getListings(): MarketListing[] {
    return Array.from(this.activeListings.values());
  }

  public placeBid(listingId: string, bidderName: string, bidAmount: number): { success: boolean; message: string } {
    const listing = this.activeListings.get(listingId);
    if (!listing) return { success: false, message: 'Listing expired or not found.' };

    if (bidAmount <= listing.currentBidGold) {
      return { success: false, message: `Bid must be higher than current bid of ${listing.currentBidGold} gold.` };
    }

    if (bidAmount >= listing.buyoutPriceGold) {
      this.activeListings.delete(listingId);
      return { success: true, message: `Buyout successful! You purchased ${listing.itemName} for ${listing.buyoutPriceGold} gold.` };
    }

    listing.currentBidGold = bidAmount;
    listing.highestBidderName = bidderName;
    return { success: true, message: `Bid of ${bidAmount} gold placed on ${listing.itemName}.` };
  }

  private populateInitialListings(): void {
    this.activeListings.set('list_001', {
      listingId: 'list_001',
      sellerName: 'Merchant Tobias',
      itemId: 'base_sword_02',
      itemName: '🔥 Flametongue Greatsword',
      itemRarity: 'Epic',
      startingBidGold: 300,
      currentBidGold: 350,
      buyoutPriceGold: 600,
      highestBidderName: 'WarriorThorne',
      timeRemainingSeconds: 3600
    });

    this.activeListings.set('list_002', {
      listingId: 'list_002',
      sellerName: 'Alchemist Sarah',
      itemId: 'relic_heart_of_sol',
      itemName: '🌟 Heart of the Eternal Sun',
      itemRarity: 'Mythic',
      startingBidGold: 1500,
      currentBidGold: 1800,
      buyoutPriceGold: 3500,
      timeRemainingSeconds: 7200
    });
  }
}
