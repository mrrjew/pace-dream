const PRICING_FREQUENCY = {
    // please do inform the backend team if you need a new pricing frequency
    // because there is a strict frequency check present in the backend.
    MONTH: "monthly",
    HOUR: "hourly",
    YEAR: "yearly",
    WEEK: "weekly",
    DAY: "daily",
    CUSTOM: "custom",
    ONCE: "once",
  } as const;
  
   const RENTABLE_ITEM_TYPE = {
    // add new items as you need.
    // please do inform the backend team when a new type is added
    // because there is a strict item_type check present in the backend.
    ROOM: "room",
    PROPERTY: "property",
    ROOMMATE_AD: "roommate_ad",
    EXPERIENCE: "experience",
    PARKING: "parking",
    EV_PARKING: "ev_parking",
    REST_ROOM: "rest_room",
    GEAR: "gear",
    CAR: "car",
    PRICE_INFO: "price_info",
    LOCATION_INFO: "location_info",
  } as const;
  
  const PRICING_TYPE = {
    // add new items as you need.
    // please do inform the backend team when a new type is added
    // because there is a strict pricing_type check present in the backend.
    BASE: "base",
    UTILS: "utils",
  } as const;
  
  export const RENTAL_STATUS = {
    ACTIVE: "active",
    ENDED: "ENDED",
    NEED_PAYMENT: "need_payment",
    OVERDUE: "overdue",
  } as const;
  
  export type PricingFrequency =
    (typeof PRICING_FREQUENCY)[keyof typeof PRICING_FREQUENCY];
  
  export type RentableItemType =
    (typeof RENTABLE_ITEM_TYPE)[keyof typeof RENTABLE_ITEM_TYPE];
  
  export type PricingType = (typeof PRICING_TYPE)[keyof typeof PRICING_TYPE];
  
  // export type RentalStatus = (typeof RENTAL_STATUS)[keyof typeof RENTAL_STATUS];
  export type RentalStatus = 'draft' | 'published'
  
  export type Discount = {
    /** Either use amount off (i.e. $50 off) */
    amount_off: number;
    /** or use percent off (i.e. 10% off). Do no use strings or numbers use floats. 10% = 10/100 = 0.1 */
    percent_off: number;
    start: Date;
    /** Not having the end date mean this discount is for the entire life time of this product. */
    end: Date | null;
  };
  
  export type Price = {
    pricing_type: PricingType;
    amount: number;
    currency: string;
    frequency: PricingFrequency;
    grace_period: number;
    /** recurring days is only required when the frequency is set to custom. this field is required if the use wants to have a different pricing schedule. otherwise skip it. */
    recurring_days: number;
    discounts: Discount[];
  };
  
  export type Location = {
    country: string;
    state: string;
    city: string;
    street_address: string;
    googlemap_link?: string;
    latitude?: number;
    longitude?: number;
    zipcode?: string;
    address: string;
  };
  
  export type Gallery = {
    thumbnail?: string; // if the thumbnail is not provided then the first image from the `images` will be the thumbnail
    images?: string[];
    videos?: string[];
  };
  
  export type Attachment = {
    link: string;
    description: string;
    mime_type: string;
  };
  
  export type UserInfoTruncated = {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
  };

  export type Roommate = {
    gender?: string;
    age?: number;
    life_style?: string;
 }


 // hourly rental time and date
  export type HourRentalDateTime = {
    startDate?: Date | null;
    endDate?: Date | null;
    startTime?: string;
    endTime?: string;
    };
  
  export type PropertyDetails = {
    /** This description field can store valid "Markdown" string. Later this markdown can be parsed into HTML using markdown parser. */
    description: string;
    bedroom_count: number;
    bathroom_count: number;
    rule_description?: string;
    /** this list is in lowercase only to prevent any irregular formatting. Use loadash.startCase() to convert the lowercase amenities into sentence case */
    amenities: string[];
    property_type: string; // bungalow, studio, single_room, etc.
    room_type: "any type" | "long term" | "short term" | "guest house" | "hostel",
    room_mate?: Roommate;
    hourly_rental_time?: HourRentalDateTime;
  };

  export type PropertyCategory = 'room_stays' | 'time_based' | 'hourly_rental_gear' | 'find_roommate' |'last_minutes' | 'experience'
  
  export type RentableItem = {
    _id: string;
    /** Id of the user who created the rentable item. */
    owner: string;
    /** Title of the rentable item */
    title: string;
    /** A short summary for rental further details can be added in the `details` section. */
    summary: string;
    item_type: RentableItemType;
    /** The actual shape depends on `item_type`. For example, a room will have different details than a DSLR */
    details: Record<string, any> | PropertyDetails;
    category: PropertyCategory;
    /**
     * Prices for the rentable item. An item can have multiple pricing schema for example monthly, weekly, or hourly.
     * Each pricing can have different discounts. For example, yearly pricing can have a 20% discount while monthly pricing can have 5% discount.
     */
    price: Price[];
    /** Auto generated by the server. */
    rating: number;
    location: Location;
    /** Gallery stores images and videos of a property or product. */
    gallery: Gallery;
    /**
     * Store the rules for a rentable item here. Rules are not predefined because there can be countless rules for a given rentable item.
     * all kind of rentable item can have rules.
     * For example properties can have -> `{ "Smoking": false, "Pets": false }`
     * DSLRs can have -> `{ "Use in rain": false, "Change battery": false }`
     * Hotels can have -> `{ "Guests": false }`
     */
    rules: { [rule: string]: boolean };
    /** If the user wants to upload any rental terms or document for their rentable items then they can upload them as an attachment with a description attached to it. */
    attachments: Attachment[];
    /** When a room or gear is rented by someone this filed will become false, indicating the rentableitem is not available for rent. */
    available?: boolean;
    /** Owners can unlist/hide their rentable items when there are no ongoing rent. */
    hidden?: boolean;
    deleted?: boolean;
    archived?: boolean;
    status?: RentalStatus;
    // following two fields will be auto generated in the server.
    createdAt: Date;
    updatedAt: Date;
  };

 
  
  export type Rental = {
    /** The owner of the rentable item (room/gear/stuff) */
    lessor: UserInfoTruncated;
    /** The first tenant */
    tenant: UserInfoTruncated;
    /** List of other tenants who shares the bills */
    sharing_tenants: string[];
    status?: RentalStatus;
    /** The chosen price configuration */
    price: Price;
    rental_start: Date;
    /** if the rental_end is null then it means the rent is for the entire life time of the product until either parties stops the rent. */
    rental_end: Date | null;
    autorenew: boolean;
    /**
     * The item that is rented. Please note that this item is a snapshot of when the rent started.
     * If you need to get the latest then use the `item.original_id` to fetch the latest info. We are saving
     * a snapshot to prevent discrepancies as the owner changes/deleted the rented item after the rent has started.
     */
    item: RentableItem;
    deleted: boolean;
    archived: boolean;
  };