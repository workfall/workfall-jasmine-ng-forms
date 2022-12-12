export type DomainData = Record<string, Domain>;

export type Domain = {
  domain: string,
  url: string,
  country_code: string,
  site_id: number,
  tpid: number,
  eapid: number,
  currency: string,
  supported_locales: Record<string, SupportedLocale>,
}
export type SupportedLocale = {
  key: string,
  language_code?: null,
  language_id: number,
}


export type RegionData = {
  data: Region[],
  query: string,
}

export type Region = {
  '@type': string,
  index: string,
  gaiaId: string,
  type: string,
  regionNames: RegionNames,
  essId: EssId,
  coordinates: Coordinates,
  hierarchyInfo: HierarchyInfo,
}
export type RegionNames = {
  fullName: string,
  shortName: string,
  displayName: string,
  primaryDisplayName: string,
  secondaryDisplayName: string,
  lastSearchName: string,
}
export type EssId = {
  sourceName: string,
  sourceId: string,
}
export type Coordinates = {
  lat: string,
  long: string,
}
export type HierarchyInfo = {
  country: Country
}
export type Country = {
  name: string,
  isoCode2: string,
  isoCode3: string,
}

export type SearchHotelParams =  {
  domain: string,
  sort_order: string,
  locale: string,
  checkout_date: string,
  region_id: string,
  adults_number: string,
  checkin_date: string,
  available_filter?: string,
  meal_plan?: string,
  guest_rating_min?: string,
  price_min?: string,
  page_number?: string,
  children_ages?: string,
  amenities?: string,
  price_max?: string,
  lodging_type?: string,
  payment_type?: string,
  star_rating_ids?: string,
}

export interface HotelData {
  __typename: string;
  filterMetadata: FilterMetadata;
  universalSortAndFilter: UniversalSortAndFilter;
  properties?: (PropertiesEntity)[] | null;
  propertySearchListings?: (PropertySearchListingsEntity)[] | null;
  summary: Summary;
  searchCriteria: SearchCriteria;
  shoppingContext: ShoppingContext;
  map: Map;
  clickstream: Clickstream;
}
export interface FilterMetadata {
  __typename: string;
  amenities?: (AmenitiesEntity)[] | null;
  neighborhoods?: (NeighborhoodsEntity)[] | null;
  priceRange: PriceRange;
}
export interface AmenitiesEntity {
  __typename: string;
  id: number;
}
export interface NeighborhoodsEntity {
  __typename: string;
  name: string;
  regionId: string;
}
export interface PriceRange {
  __typename: string;
  max: number;
  min: number;
}
export interface UniversalSortAndFilter {
  __typename: string;
  toolbar: Toolbar;
  revealAction: RevealAction;
  applyAction: ApplyAction;
  filterSections?: (FilterSectionsEntity)[] | null;
  sortSections?: (SortSectionsEntity)[] | null;
}
export interface Toolbar {
  __typename: string;
  primary: string;
  actions: Actions;
}
export interface Actions {
  __typename: string;
  primary: Primary;
  secondaries?: (SecondariesEntity)[] | null;
}
export interface Primary {
  __typename: string;
  primary?: null;
  action: Action;
}
export interface Action {
  __typename: string;
  actionType: string;
  accessibility?: null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics {
  __typename: string;
  linkName: string;
  referrerId: string;
}
export interface SecondariesEntity {
  __typename: string;
  primary: string;
  disabled: boolean;
  action: Action1;
}
export interface Action1 {
  __typename: string;
  actionType: string;
  accessibility: string;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface RevealAction {
  __typename: string;
  primary: string;
  action: Action;
  accessibility: string;
  badge: number;
  disabled: boolean;
  icon: Icon;
}
export interface Icon {
  __typename: string;
  id: string;
  description: string;
  size?: null;
  token: string;
  theme?: null;
}
export interface ApplyAction {
  __typename: string;
  primary: string;
  action: Action;
  accessibility: string;
  badge?: null;
  disabled: boolean;
  icon?: null;
}
export interface FilterSectionsEntity {
  __typename: string;
  title: string;
  fields?: (FieldsEntity)[] | null;
}
export interface FieldsEntity {
  __typename: string;
  primary?: string | null;
  secondary?: null;
  action?: Action2 | null;
  id?: string | null;
  label?: null;
  placeholder?: string | null;
  selected?: null;
  typeaheadInfo?: TypeaheadInfo | null;
  icon?: Icon1 | null;
  analytics?: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics1 | null;
  expando?: Expando | null;
  multiSelectionOptions?: (MultiSelectionOptionsEntity)[] | null;
  range?: Range | null;
  options?: (OptionsEntityOrMultiSelectionOptionsEntityOrTileMultiSelectionOptionsEntityOrDropdownFilterOptionsEntity)[] | null;
  tileMultiSelectionOptions?: (TileMultiSelectionOptionsEntity)[] | null;
}
export interface Action2 {
  __typename: string;
  actionType: string;
  accessibility?: null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface TypeaheadInfo {
  __typename: string;
  client: string;
  isDestination: boolean;
  lineOfBusiness: string;
  maxNumberOfResults: number;
  packageType?: null;
  personalize: boolean;
  regionType: number;
  typeaheadFeatures: string;
}
export interface Icon1 {
  __typename: string;
  id: string;
  description: string;
  size?: null;
  token: string;
  theme?: null;
}
export interface AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics1 {
  __typename: string;
  linkName: string;
  referrerId: string;
}
export interface Expando {
  __typename: string;
  threshold: number;
  collapseLabel: string;
  expandLabel: string;
  collapseAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  expandAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface MultiSelectionOptionsEntity {
  __typename: string;
  id: string;
  primary: string;
  secondary?: string | null;
  icon?: null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  value: string;
  description?: string | null;
  selected: boolean;
  disabled: boolean;
  default: boolean;
  selectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  deselectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface Range {
  __typename: string;
  id: string;
  primary: string;
  secondary?: null;
  icon?: null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  selected: Selected;
  characteristics: Characteristics;
}
export interface Selected {
  __typename: string;
  id: string;
  min: number;
  max: number;
}
export interface Characteristics {
  __typename: string;
  min: number;
  max: number;
  step: number;
  labels?: (LabelsEntity)[] | null;
}
export interface LabelsEntity {
  __typename: string;
  label: string;
  value: number;
}
export interface OptionsEntityOrMultiSelectionOptionsEntityOrTileMultiSelectionOptionsEntityOrDropdownFilterOptionsEntity {
  __typename: string;
  id: string;
  primary: string;
  secondary?: null;
  icon?: null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  value: string;
  description?: null;
  selected: boolean;
  disabled: boolean;
  default: boolean;
  selectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  deselectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface TileMultiSelectionOptionsEntity {
  __typename: string;
  id: string;
  primary: string;
  secondary?: string | null;
  icon?: Icon2 | null;
  analytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  value: string;
  description?: null;
  selected: boolean;
  disabled: boolean;
  default: boolean;
  selectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  deselectAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
}
export interface Icon2 {
  __typename: string;
  id: string;
  description: string;
  size?: null;
  token: string;
  theme?: null;
}
export interface SortSectionsEntity {
  __typename: string;
  title?: null;
  fields?: (FieldsEntity1)[] | null;
}
export interface FieldsEntity1 {
  __typename: string;
  primary: string;
  secondary?: null;
  dropdownFilterOptions?: (OptionsEntityOrMultiSelectionOptionsEntityOrTileMultiSelectionOptionsEntityOrDropdownFilterOptionsEntity)[] | null;
}
export interface PropertiesEntity {
  __typename: string;
  id: string;
  featuredMessages?: (null)[] | null;
  name: string;
  availability: Availability;
  propertyImage: PropertyImage;
  destinationInfo: DestinationInfo;
  legalDisclaimer?: null;
  listingFooter?: ListingFooter | null;
  mapMarker: MapMarker;
  neighborhood: Neighborhood;
  offerBadge?: OfferBadge | null;
  offerSummary: OfferSummary;
  pinnedDetails?: null;
  price: Price;
  priceAfterLoyaltyPointsApplied: PriceAfterLoyaltyPointsApplied;
  propertyFees?: (AttributesEntityOrPropertyFeesEntityOrPricingScheme | null)[] | null;
  reviews: Reviews;
  star: number;
  supportingMessages?: null;
  regionId: string;
  priceMetadata: PriceMetadata;
  saveTripItem?: null;
}
export interface Availability {
  __typename: string;
  available: boolean;
  minRoomsLeft?: number | null;
}
export interface PropertyImage {
  __typename: string;
  alt: string;
  fallbackImage?: null;
  image: Image;
  subjectId: number;
}
export interface Image {
  __typename: string;
  description: string;
  url: string;
}
export interface DestinationInfo {
  __typename: string;
  distanceFromDestination: DistanceFromDestination;
  distanceFromMessaging?: null;
  regionId: string;
}
export interface DistanceFromDestination {
  __typename: string;
  unit: string;
  value: number;
}
export interface ListingFooter {
  __typename: string;
  text: string;
  linkUrl: string;
  actionDetails: ActionDetails;
  analytics: Analytics;
}
export interface ActionDetails {
  __typename: string;
  action: string;
  details?: null;
  title?: null;
  accessibilityLabel?: null;
}
export interface Analytics {
  __typename: string;
  referrerId: string;
}
export interface MapMarker {
  __typename: string;
  label: string;
  latLong: LatLong;
}
export interface LatLong {
  __typename: string;
  latitude: number;
  longitude: number;
}
export interface Neighborhood {
  __typename: string;
  name: string;
}
export interface OfferBadge {
  __typename: string;
  primary?: PrimaryOrSecondary | null;
  secondary?: PrimaryOrSecondary1 | null;
}
export interface PrimaryOrSecondary {
  __typename: string;
  text: string;
  theme_temp: string;
  icon_temp?: IconTemp | null;
  mark?: null;
}
export interface IconTemp {
  __typename: string;
  id: string;
  description: string;
}
export interface PrimaryOrSecondary1 {
  __typename: string;
  text: string;
  theme_temp: string;
  icon_temp?: IconTemp | null;
  mark?: null;
}
export interface OfferSummary {
  __typename: string;
  messages?: (MessagesEntity)[] | null;
  attributes?: (AttributesEntityOrPropertyFeesEntityOrPricingScheme1)[] | null;
}
export interface MessagesEntity {
  __typename: string;
  message: string;
  theme?: string | null;
  type: string;
  mark?: Mark | null;
}
export interface Mark {
  __typename: string;
  id: string;
  token: string;
  description: string;
}
export interface AttributesEntityOrPropertyFeesEntityOrPricingScheme1 {
  __typename: string;
  type: string;
}
export interface Price {
  __typename: string;
  options?: (OptionsEntity)[] | null;
  priceMessaging?: null;
  lead: LeadOrStrikeOut;
  strikeOut?: LeadOrStrikeOut1 | null;
  displayMessages?: (DisplayMessagesEntity)[] | null;
  strikeOutType: string;
  priceMessages?: (PriceMessagesEntityOrDisclaimerOrUri)[] | null;
}
export interface OptionsEntity {
  __typename: string;
  strikeOut?: StrikeOut | null;
  disclaimer?: PriceMessagesEntityOrDisclaimerOrUri1 | null;
  formattedDisplayPrice: string;
}
export interface StrikeOut {
  __typename: string;
  amount: number;
  formatted: string;
}
export interface PriceMessagesEntityOrDisclaimerOrUri1 {
  __typename: string;
  value: string;
}
export interface LeadOrStrikeOut {
  __typename: string;
  amount: number;
  currencyInfo: CurrencyInfo;
  formatted: string;
}
export interface CurrencyInfo {
  __typename: string;
  code: string;
  symbol: string;
}
export interface LeadOrStrikeOut1 {
  __typename: string;
  amount: number;
  currencyInfo: CurrencyInfo;
  formatted: string;
}
export interface DisplayMessagesEntity {
  __typename: string;
  lineItems?: (LineItemsEntity)[] | null;
}
export interface LineItemsEntity {
  __typename: string;
  disclaimer?: Disclaimer | null;
  price?: Price1 | null;
  role?: string | null;
  accessibilityLabel?: null;
  mark?: null;
  state?: null;
  value?: string | null;
  badge?: null;
}
export interface Disclaimer {
  __typename: string;
  content?: (string)[] | null;
  title?: null;
}
export interface Price1 {
  __typename: string;
  formatted: string;
  accessibilityLabel: string;
}
export interface PriceMessagesEntityOrDisclaimerOrUri {
  __typename: string;
  value: string;
}
export interface PriceAfterLoyaltyPointsApplied {
  __typename: string;
  options?: (null)[] | null;
  lead?: null;
}
export interface AttributesEntityOrPropertyFeesEntityOrPricingScheme {
  __typename: string;
  type: string;
}
export interface Reviews {
  __typename: string;
  score: number;
  total: number;
}
export interface PriceMetadata {
  __typename: string;
  discountType?: string | null;
  rateDiscount: RateDiscount;
  totalDiscountPercentage: number;
}
export interface RateDiscount {
  __typename: string;
  description?: string | null;
}
export interface PropertySearchListingsEntity {
  __typename: string;
  id?: string | null;
  featuredMessages?: (null)[] | null;
  name?: string | null;
  availability?: Availability1 | null;
  propertyImage?: PropertyImage1 | null;
  destinationInfo?: DestinationInfo1 | null;
  legalDisclaimer?: null;
  listingFooter?: ListingFooter1 | null;
  mapMarker?: MapMarker1 | null;
  neighborhood?: Neighborhood1 | null;
  offerBadge?: OfferBadge1 | null;
  offerSummary?: OfferSummary1 | null;
  pinnedDetails?: null;
  price?: Price2 | null;
  priceAfterLoyaltyPointsApplied?: PriceAfterLoyaltyPointsApplied1 | null;
  propertyFees?: (AttributesEntityOrPropertyFeesEntityOrPricingScheme2 | null)[] | null;
  reviews?: Reviews1 | null;
  star?: number | null;
  supportingMessages?: null;
  regionId?: string | null;
  priceMetadata?: PriceMetadata1 | null;
  saveTripItem?: null;
}
export interface Availability1 {
  __typename: string;
  available: boolean;
  minRoomsLeft?: number | null;
}
export interface PropertyImage1 {
  __typename: string;
  alt: string;
  fallbackImage?: null;
  image: Image;
  subjectId: number;
}
export interface DestinationInfo1 {
  __typename: string;
  distanceFromDestination: DistanceFromDestination;
  distanceFromMessaging?: null;
  regionId: string;
}
export interface ListingFooter1 {
  __typename: string;
  text: string;
  linkUrl: string;
  actionDetails: ActionDetails;
  analytics: Analytics;
}
export interface MapMarker1 {
  __typename: string;
  label: string;
  latLong: LatLong;
}
export interface Neighborhood1 {
  __typename: string;
  name: string;
}
export interface OfferBadge1 {
  __typename: string;
  primary?: PrimaryOrSecondary | null;
  secondary?: PrimaryOrSecondary1 | null;
}
export interface OfferSummary1 {
  __typename: string;
  messages?: (MessagesEntity)[] | null;
  attributes?: (AttributesEntityOrPropertyFeesEntityOrPricingScheme1)[] | null;
}
export interface Price2 {
  __typename: string;
  options?: (OptionsEntity)[] | null;
  priceMessaging?: null;
  lead: LeadOrStrikeOut;
  strikeOut?: LeadOrStrikeOut1 | null;
  displayMessages?: (DisplayMessagesEntity)[] | null;
  strikeOutType: string;
  priceMessages?: (PriceMessagesEntityOrDisclaimerOrUri)[] | null;
}
export interface PriceAfterLoyaltyPointsApplied1 {
  __typename: string;
  options?: (null)[] | null;
  lead?: null;
}
export interface AttributesEntityOrPropertyFeesEntityOrPricingScheme2 {
  __typename: string;
  type: string;
}
export interface Reviews1 {
  __typename: string;
  score: number;
  total: number;
}
export interface PriceMetadata1 {
  __typename: string;
  discountType?: string | null;
  rateDiscount: RateDiscount;
  totalDiscountPercentage: number;
}
export interface Summary {
  __typename: string;
  matchedPropertiesSize: number;
  pricingScheme: AttributesEntityOrPropertyFeesEntityOrPricingScheme1;
  regionCompression?: null;
  loyaltyInfo?: null;
  resultsTitleModel: ResultsTitleModel;
  resultsSummary?: (ResultsSummaryEntity)[] | null;
}
export interface ResultsTitleModel {
  __typename: string;
  header: string;
}
export interface ResultsSummaryEntity {
  __typename: string;
  accessibilityLabel?: string | null;
  value?: string | null;
  link?: Link | null;
}
export interface Link {
  __typename: string;
  clientSideAnalytics: AnalyticsOrCollapseAnalyticsOrExpandAnalyticsOrSelectAnalyticsOrDeselectAnalyticsOrClientSideAnalytics;
  uri: PriceMessagesEntityOrDisclaimerOrUri;
}
export interface SearchCriteria {
  __typename: string;
  resolvedDateRange?: null;
}
export interface ShoppingContext {
  __typename: string;
  multiItem?: null;
}
export interface Map {
  __typename: string;
  subtitle?: null;
}
export interface Clickstream {
  __typename: string;
  searchResultsViewed?: null;
}


