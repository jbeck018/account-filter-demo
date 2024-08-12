import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Cursor: { input: any; output: any };
	Datetime: { input: any; output: any };
};

export type Account = Node & {
	__typename?: "Account";
	accountManagerEmail?: Maybe<Scalars["String"]["output"]>;
	accountManagerId?: Maybe<Scalars["Int"]["output"]>;
	accountManagerName?: Maybe<Scalars["String"]["output"]>;
	accountManagerPhone?: Maybe<Scalars["String"]["output"]>;
	accountName: Scalars["String"]["output"];
	accountNumber: Scalars["String"]["output"];
	accountRegion?: Maybe<Scalars["String"]["output"]>;
	accountSource?: Maybe<Scalars["String"]["output"]>;
	accountStatus: AccountStatus;
	accountTier?: Maybe<Scalars["String"]["output"]>;
	accountType?: Maybe<AccountType>;
	activeContracts?: Maybe<Scalars["Int"]["output"]>;
	annualRevenue?: Maybe<Scalars["Float"]["output"]>;
	annualSpend?: Maybe<Scalars["Float"]["output"]>;
	billingAddress?: Maybe<Scalars["String"]["output"]>;
	businessUnit?: Maybe<Scalars["String"]["output"]>;
	city?: Maybe<Scalars["String"]["output"]>;
	closedOpportunities?: Maybe<Scalars["Int"]["output"]>;
	competitor?: Maybe<Scalars["String"]["output"]>;
	contractEndDate?: Maybe<Scalars["Datetime"]["output"]>;
	contractStartDate?: Maybe<Scalars["Datetime"]["output"]>;
	country?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["Datetime"]["output"];
	createdDate: Scalars["Datetime"]["output"];
	crossSellOpportunities?: Maybe<Scalars["Int"]["output"]>;
	customerSince?: Maybe<Scalars["Datetime"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	email?: Maybe<Scalars["String"]["output"]>;
	engagementScore?: Maybe<Scalars["Int"]["output"]>;
	id: Scalars["Int"]["output"];
	inactiveContracts?: Maybe<Scalars["Int"]["output"]>;
	industry?: Maybe<Scalars["String"]["output"]>;
	industryVertical?: Maybe<Scalars["String"]["output"]>;
	isCustomer: Scalars["Boolean"]["output"];
	isPartner: Scalars["Boolean"]["output"];
	isProspect: Scalars["Boolean"]["output"];
	lastActivityDate?: Maybe<Scalars["Datetime"]["output"]>;
	lastContactedDate?: Maybe<Scalars["Datetime"]["output"]>;
	lastModifiedDate: Scalars["Datetime"]["output"];
	lastPurchaseDate?: Maybe<Scalars["Datetime"]["output"]>;
	leadSource?: Maybe<Scalars["String"]["output"]>;
	loyaltyScore?: Maybe<Scalars["Int"]["output"]>;
	marketSegment?: Maybe<Scalars["String"]["output"]>;
	marketingBudget?: Maybe<Scalars["Float"]["output"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"]["output"];
	npsScore?: Maybe<Scalars["Int"]["output"]>;
	numberOfEmployees?: Maybe<Scalars["Int"]["output"]>;
	openOpportunities?: Maybe<Scalars["Int"]["output"]>;
	/** Reads and enables pagination through a set of `Opportunity`. */
	opportunitiesByAccountId: OpportunitiesConnection;
	ownership?: Maybe<Scalars["String"]["output"]>;
	ownershipType?: Maybe<Scalars["String"]["output"]>;
	parentAccountId?: Maybe<Scalars["Int"]["output"]>;
	paymentTerms?: Maybe<Scalars["String"]["output"]>;
	phoneNumber?: Maybe<Scalars["String"]["output"]>;
	postalCode?: Maybe<Scalars["String"]["output"]>;
	preferredContactMethod?: Maybe<Scalars["String"]["output"]>;
	preferredLanguage?: Maybe<Scalars["String"]["output"]>;
	primaryContactEmail?: Maybe<Scalars["String"]["output"]>;
	primaryContactName?: Maybe<Scalars["String"]["output"]>;
	primaryContactPhone?: Maybe<Scalars["String"]["output"]>;
	rating?: Maybe<Scalars["Int"]["output"]>;
	referralSource?: Maybe<Scalars["String"]["output"]>;
	renewalDate?: Maybe<Scalars["Datetime"]["output"]>;
	renewalProbability?: Maybe<Scalars["Float"]["output"]>;
	secondaryContactEmail?: Maybe<Scalars["String"]["output"]>;
	secondaryContactName?: Maybe<Scalars["String"]["output"]>;
	secondaryContactPhone?: Maybe<Scalars["String"]["output"]>;
	shippingAddress?: Maybe<Scalars["String"]["output"]>;
	sicCode?: Maybe<Scalars["String"]["output"]>;
	socialMediaHandle?: Maybe<Scalars["String"]["output"]>;
	state?: Maybe<Scalars["String"]["output"]>;
	strategicAccount: Scalars["Boolean"]["output"];
	subscriptionType?: Maybe<Scalars["String"]["output"]>;
	territory?: Maybe<Scalars["String"]["output"]>;
	tickerSymbol?: Maybe<Scalars["String"]["output"]>;
	timezone?: Maybe<Scalars["String"]["output"]>;
	totalPurchaseValue?: Maybe<Scalars["Float"]["output"]>;
	updatedAt: Scalars["Datetime"]["output"];
	upsellOpportunities?: Maybe<Scalars["Int"]["output"]>;
	/** Reads and enables pagination through a set of `User`. */
	usersByAccountId: UsersConnection;
	website?: Maybe<Scalars["String"]["output"]>;
};

export type AccountOpportunitiesByAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<OpportunityCondition>;
	filter?: InputMaybe<OpportunityFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

export type AccountUsersByAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<UserCondition>;
	filter?: InputMaybe<UserFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
	/** Checks for equality with the object’s `accountManagerEmail` field. */
	accountManagerEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountManagerId` field. */
	accountManagerId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `accountManagerName` field. */
	accountManagerName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountManagerPhone` field. */
	accountManagerPhone?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountName` field. */
	accountName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountNumber` field. */
	accountNumber?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountRegion` field. */
	accountRegion?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountSource` field. */
	accountSource?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountStatus` field. */
	accountStatus?: InputMaybe<AccountStatus>;
	/** Checks for equality with the object’s `accountTier` field. */
	accountTier?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `accountType` field. */
	accountType?: InputMaybe<AccountType>;
	/** Checks for equality with the object’s `activeContracts` field. */
	activeContracts?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `annualRevenue` field. */
	annualRevenue?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `annualSpend` field. */
	annualSpend?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `billingAddress` field. */
	billingAddress?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `businessUnit` field. */
	businessUnit?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `city` field. */
	city?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `closedOpportunities` field. */
	closedOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `competitor` field. */
	competitor?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `contractEndDate` field. */
	contractEndDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `contractStartDate` field. */
	contractStartDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `country` field. */
	country?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `createdAt` field. */
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `createdDate` field. */
	createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `crossSellOpportunities` field. */
	crossSellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `customerSince` field. */
	customerSince?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `description` field. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `email` field. */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `engagementScore` field. */
	engagementScore?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `id` field. */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `inactiveContracts` field. */
	inactiveContracts?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `industry` field. */
	industry?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `industryVertical` field. */
	industryVertical?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `isCustomer` field. */
	isCustomer?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `isPartner` field. */
	isPartner?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `isProspect` field. */
	isProspect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `lastActivityDate` field. */
	lastActivityDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `lastContactedDate` field. */
	lastContactedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `lastModifiedDate` field. */
	lastModifiedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `lastPurchaseDate` field. */
	lastPurchaseDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `leadSource` field. */
	leadSource?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `loyaltyScore` field. */
	loyaltyScore?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `marketSegment` field. */
	marketSegment?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `marketingBudget` field. */
	marketingBudget?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `npsScore` field. */
	npsScore?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `numberOfEmployees` field. */
	numberOfEmployees?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `openOpportunities` field. */
	openOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `ownership` field. */
	ownership?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `ownershipType` field. */
	ownershipType?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `parentAccountId` field. */
	parentAccountId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `paymentTerms` field. */
	paymentTerms?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `phoneNumber` field. */
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `postalCode` field. */
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `preferredContactMethod` field. */
	preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `preferredLanguage` field. */
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `primaryContactEmail` field. */
	primaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `primaryContactName` field. */
	primaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `primaryContactPhone` field. */
	primaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `rating` field. */
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `referralSource` field. */
	referralSource?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `renewalDate` field. */
	renewalDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `renewalProbability` field. */
	renewalProbability?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `secondaryContactEmail` field. */
	secondaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `secondaryContactName` field. */
	secondaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `secondaryContactPhone` field. */
	secondaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `shippingAddress` field. */
	shippingAddress?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `sicCode` field. */
	sicCode?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `socialMediaHandle` field. */
	socialMediaHandle?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `state` field. */
	state?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `strategicAccount` field. */
	strategicAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `subscriptionType` field. */
	subscriptionType?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `territory` field. */
	territory?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `tickerSymbol` field. */
	tickerSymbol?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `timezone` field. */
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `totalPurchaseValue` field. */
	totalPurchaseValue?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `upsellOpportunities` field. */
	upsellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `website` field. */
	website?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
	/** Filter by the object’s `accountManagerEmail` field. */
	accountManagerEmail?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountManagerId` field. */
	accountManagerId?: InputMaybe<IntFilter>;
	/** Filter by the object’s `accountManagerName` field. */
	accountManagerName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountManagerPhone` field. */
	accountManagerPhone?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountName` field. */
	accountName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountNumber` field. */
	accountNumber?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountRegion` field. */
	accountRegion?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountSource` field. */
	accountSource?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountStatus` field. */
	accountStatus?: InputMaybe<AccountStatusFilter>;
	/** Filter by the object’s `accountTier` field. */
	accountTier?: InputMaybe<StringFilter>;
	/** Filter by the object’s `accountType` field. */
	accountType?: InputMaybe<AccountTypeFilter>;
	/** Filter by the object’s `activeContracts` field. */
	activeContracts?: InputMaybe<IntFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `annualRevenue` field. */
	annualRevenue?: InputMaybe<FloatFilter>;
	/** Filter by the object’s `annualSpend` field. */
	annualSpend?: InputMaybe<FloatFilter>;
	/** Filter by the object’s `billingAddress` field. */
	billingAddress?: InputMaybe<StringFilter>;
	/** Filter by the object’s `businessUnit` field. */
	businessUnit?: InputMaybe<StringFilter>;
	/** Filter by the object’s `city` field. */
	city?: InputMaybe<StringFilter>;
	/** Filter by the object’s `closedOpportunities` field. */
	closedOpportunities?: InputMaybe<IntFilter>;
	/** Filter by the object’s `competitor` field. */
	competitor?: InputMaybe<StringFilter>;
	/** Filter by the object’s `contractEndDate` field. */
	contractEndDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `contractStartDate` field. */
	contractStartDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `country` field. */
	country?: InputMaybe<StringFilter>;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `createdDate` field. */
	createdDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `crossSellOpportunities` field. */
	crossSellOpportunities?: InputMaybe<IntFilter>;
	/** Filter by the object’s `customerSince` field. */
	customerSince?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `description` field. */
	description?: InputMaybe<StringFilter>;
	/** Filter by the object’s `email` field. */
	email?: InputMaybe<StringFilter>;
	/** Filter by the object’s `engagementScore` field. */
	engagementScore?: InputMaybe<IntFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<IntFilter>;
	/** Filter by the object’s `inactiveContracts` field. */
	inactiveContracts?: InputMaybe<IntFilter>;
	/** Filter by the object’s `industry` field. */
	industry?: InputMaybe<StringFilter>;
	/** Filter by the object’s `industryVertical` field. */
	industryVertical?: InputMaybe<StringFilter>;
	/** Filter by the object’s `isCustomer` field. */
	isCustomer?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `isPartner` field. */
	isPartner?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `isProspect` field. */
	isProspect?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `lastActivityDate` field. */
	lastActivityDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `lastContactedDate` field. */
	lastContactedDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `lastModifiedDate` field. */
	lastModifiedDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `lastPurchaseDate` field. */
	lastPurchaseDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `leadSource` field. */
	leadSource?: InputMaybe<StringFilter>;
	/** Filter by the object’s `loyaltyScore` field. */
	loyaltyScore?: InputMaybe<IntFilter>;
	/** Filter by the object’s `marketSegment` field. */
	marketSegment?: InputMaybe<StringFilter>;
	/** Filter by the object’s `marketingBudget` field. */
	marketingBudget?: InputMaybe<FloatFilter>;
	/** Negates the expression. */
	not?: InputMaybe<AccountFilter>;
	/** Filter by the object’s `npsScore` field. */
	npsScore?: InputMaybe<IntFilter>;
	/** Filter by the object’s `numberOfEmployees` field. */
	numberOfEmployees?: InputMaybe<IntFilter>;
	/** Filter by the object’s `openOpportunities` field. */
	openOpportunities?: InputMaybe<IntFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `ownership` field. */
	ownership?: InputMaybe<StringFilter>;
	/** Filter by the object’s `ownershipType` field. */
	ownershipType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `parentAccountId` field. */
	parentAccountId?: InputMaybe<IntFilter>;
	/** Filter by the object’s `paymentTerms` field. */
	paymentTerms?: InputMaybe<StringFilter>;
	/** Filter by the object’s `phoneNumber` field. */
	phoneNumber?: InputMaybe<StringFilter>;
	/** Filter by the object’s `postalCode` field. */
	postalCode?: InputMaybe<StringFilter>;
	/** Filter by the object’s `preferredContactMethod` field. */
	preferredContactMethod?: InputMaybe<StringFilter>;
	/** Filter by the object’s `preferredLanguage` field. */
	preferredLanguage?: InputMaybe<StringFilter>;
	/** Filter by the object’s `primaryContactEmail` field. */
	primaryContactEmail?: InputMaybe<StringFilter>;
	/** Filter by the object’s `primaryContactName` field. */
	primaryContactName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `primaryContactPhone` field. */
	primaryContactPhone?: InputMaybe<StringFilter>;
	/** Filter by the object’s `rating` field. */
	rating?: InputMaybe<IntFilter>;
	/** Filter by the object’s `referralSource` field. */
	referralSource?: InputMaybe<StringFilter>;
	/** Filter by the object’s `renewalDate` field. */
	renewalDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `renewalProbability` field. */
	renewalProbability?: InputMaybe<FloatFilter>;
	/** Filter by the object’s `secondaryContactEmail` field. */
	secondaryContactEmail?: InputMaybe<StringFilter>;
	/** Filter by the object’s `secondaryContactName` field. */
	secondaryContactName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `secondaryContactPhone` field. */
	secondaryContactPhone?: InputMaybe<StringFilter>;
	/** Filter by the object’s `shippingAddress` field. */
	shippingAddress?: InputMaybe<StringFilter>;
	/** Filter by the object’s `sicCode` field. */
	sicCode?: InputMaybe<StringFilter>;
	/** Filter by the object’s `socialMediaHandle` field. */
	socialMediaHandle?: InputMaybe<StringFilter>;
	/** Filter by the object’s `state` field. */
	state?: InputMaybe<StringFilter>;
	/** Filter by the object’s `strategicAccount` field. */
	strategicAccount?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `subscriptionType` field. */
	subscriptionType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `territory` field. */
	territory?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tickerSymbol` field. */
	tickerSymbol?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timezone` field. */
	timezone?: InputMaybe<StringFilter>;
	/** Filter by the object’s `totalPurchaseValue` field. */
	totalPurchaseValue?: InputMaybe<FloatFilter>;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `upsellOpportunities` field. */
	upsellOpportunities?: InputMaybe<IntFilter>;
	/** Filter by the object’s `website` field. */
	website?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Account` */
export type AccountInput = {
	accountManagerEmail?: InputMaybe<Scalars["String"]["input"]>;
	accountManagerId?: InputMaybe<Scalars["Int"]["input"]>;
	accountManagerName?: InputMaybe<Scalars["String"]["input"]>;
	accountManagerPhone?: InputMaybe<Scalars["String"]["input"]>;
	accountName: Scalars["String"]["input"];
	accountNumber: Scalars["String"]["input"];
	accountRegion?: InputMaybe<Scalars["String"]["input"]>;
	accountSource?: InputMaybe<Scalars["String"]["input"]>;
	accountStatus: AccountStatus;
	accountTier?: InputMaybe<Scalars["String"]["input"]>;
	accountType?: InputMaybe<AccountType>;
	activeContracts?: InputMaybe<Scalars["Int"]["input"]>;
	annualRevenue?: InputMaybe<Scalars["Float"]["input"]>;
	annualSpend?: InputMaybe<Scalars["Float"]["input"]>;
	billingAddress?: InputMaybe<Scalars["String"]["input"]>;
	businessUnit?: InputMaybe<Scalars["String"]["input"]>;
	city?: InputMaybe<Scalars["String"]["input"]>;
	closedOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	competitor?: InputMaybe<Scalars["String"]["input"]>;
	contractEndDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	contractStartDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	crossSellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	customerSince?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	engagementScore?: InputMaybe<Scalars["Int"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	inactiveContracts?: InputMaybe<Scalars["Int"]["input"]>;
	industry?: InputMaybe<Scalars["String"]["input"]>;
	industryVertical?: InputMaybe<Scalars["String"]["input"]>;
	isCustomer?: InputMaybe<Scalars["Boolean"]["input"]>;
	isPartner?: InputMaybe<Scalars["Boolean"]["input"]>;
	isProspect?: InputMaybe<Scalars["Boolean"]["input"]>;
	lastActivityDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastContactedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastModifiedDate: Scalars["Datetime"]["input"];
	lastPurchaseDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	leadSource?: InputMaybe<Scalars["String"]["input"]>;
	loyaltyScore?: InputMaybe<Scalars["Int"]["input"]>;
	marketSegment?: InputMaybe<Scalars["String"]["input"]>;
	marketingBudget?: InputMaybe<Scalars["Float"]["input"]>;
	npsScore?: InputMaybe<Scalars["Int"]["input"]>;
	numberOfEmployees?: InputMaybe<Scalars["Int"]["input"]>;
	openOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	ownership?: InputMaybe<Scalars["String"]["input"]>;
	ownershipType?: InputMaybe<Scalars["String"]["input"]>;
	parentAccountId?: InputMaybe<Scalars["Int"]["input"]>;
	paymentTerms?: InputMaybe<Scalars["String"]["input"]>;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	referralSource?: InputMaybe<Scalars["String"]["input"]>;
	renewalDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	renewalProbability?: InputMaybe<Scalars["Float"]["input"]>;
	secondaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	secondaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	secondaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	shippingAddress?: InputMaybe<Scalars["String"]["input"]>;
	sicCode?: InputMaybe<Scalars["String"]["input"]>;
	socialMediaHandle?: InputMaybe<Scalars["String"]["input"]>;
	state?: InputMaybe<Scalars["String"]["input"]>;
	strategicAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
	subscriptionType?: InputMaybe<Scalars["String"]["input"]>;
	territory?: InputMaybe<Scalars["String"]["input"]>;
	tickerSymbol?: InputMaybe<Scalars["String"]["input"]>;
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	totalPurchaseValue?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt: Scalars["Datetime"]["input"];
	upsellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	website?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
	accountManagerEmail?: InputMaybe<Scalars["String"]["input"]>;
	accountManagerId?: InputMaybe<Scalars["Int"]["input"]>;
	accountManagerName?: InputMaybe<Scalars["String"]["input"]>;
	accountManagerPhone?: InputMaybe<Scalars["String"]["input"]>;
	accountName?: InputMaybe<Scalars["String"]["input"]>;
	accountNumber?: InputMaybe<Scalars["String"]["input"]>;
	accountRegion?: InputMaybe<Scalars["String"]["input"]>;
	accountSource?: InputMaybe<Scalars["String"]["input"]>;
	accountStatus?: InputMaybe<AccountStatus>;
	accountTier?: InputMaybe<Scalars["String"]["input"]>;
	accountType?: InputMaybe<AccountType>;
	activeContracts?: InputMaybe<Scalars["Int"]["input"]>;
	annualRevenue?: InputMaybe<Scalars["Float"]["input"]>;
	annualSpend?: InputMaybe<Scalars["Float"]["input"]>;
	billingAddress?: InputMaybe<Scalars["String"]["input"]>;
	businessUnit?: InputMaybe<Scalars["String"]["input"]>;
	city?: InputMaybe<Scalars["String"]["input"]>;
	closedOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	competitor?: InputMaybe<Scalars["String"]["input"]>;
	contractEndDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	contractStartDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	crossSellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	customerSince?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	engagementScore?: InputMaybe<Scalars["Int"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	inactiveContracts?: InputMaybe<Scalars["Int"]["input"]>;
	industry?: InputMaybe<Scalars["String"]["input"]>;
	industryVertical?: InputMaybe<Scalars["String"]["input"]>;
	isCustomer?: InputMaybe<Scalars["Boolean"]["input"]>;
	isPartner?: InputMaybe<Scalars["Boolean"]["input"]>;
	isProspect?: InputMaybe<Scalars["Boolean"]["input"]>;
	lastActivityDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastContactedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastModifiedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastPurchaseDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	leadSource?: InputMaybe<Scalars["String"]["input"]>;
	loyaltyScore?: InputMaybe<Scalars["Int"]["input"]>;
	marketSegment?: InputMaybe<Scalars["String"]["input"]>;
	marketingBudget?: InputMaybe<Scalars["Float"]["input"]>;
	npsScore?: InputMaybe<Scalars["Int"]["input"]>;
	numberOfEmployees?: InputMaybe<Scalars["Int"]["input"]>;
	openOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	ownership?: InputMaybe<Scalars["String"]["input"]>;
	ownershipType?: InputMaybe<Scalars["String"]["input"]>;
	parentAccountId?: InputMaybe<Scalars["Int"]["input"]>;
	paymentTerms?: InputMaybe<Scalars["String"]["input"]>;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	preferredContactMethod?: InputMaybe<Scalars["String"]["input"]>;
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	primaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	referralSource?: InputMaybe<Scalars["String"]["input"]>;
	renewalDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	renewalProbability?: InputMaybe<Scalars["Float"]["input"]>;
	secondaryContactEmail?: InputMaybe<Scalars["String"]["input"]>;
	secondaryContactName?: InputMaybe<Scalars["String"]["input"]>;
	secondaryContactPhone?: InputMaybe<Scalars["String"]["input"]>;
	shippingAddress?: InputMaybe<Scalars["String"]["input"]>;
	sicCode?: InputMaybe<Scalars["String"]["input"]>;
	socialMediaHandle?: InputMaybe<Scalars["String"]["input"]>;
	state?: InputMaybe<Scalars["String"]["input"]>;
	strategicAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
	subscriptionType?: InputMaybe<Scalars["String"]["input"]>;
	territory?: InputMaybe<Scalars["String"]["input"]>;
	tickerSymbol?: InputMaybe<Scalars["String"]["input"]>;
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	totalPurchaseValue?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	upsellOpportunities?: InputMaybe<Scalars["Int"]["input"]>;
	website?: InputMaybe<Scalars["String"]["input"]>;
};

export enum AccountStatus {
	Active = "ACTIVE",
	Inactive = "INACTIVE",
	Pending = "PENDING",
}

/** A filter to be used against AccountStatus fields. All fields are combined with a logical ‘and.’ */
export type AccountStatusFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<AccountStatus>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<AccountStatus>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<AccountStatus>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<AccountStatus>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<AccountStatus>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<AccountStatus>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<AccountStatus>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<AccountStatus>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<AccountStatus>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<AccountStatus>>;
};

export enum AccountType {
	Churned = "CHURNED",
	Customer = "CUSTOMER",
	Lead = "LEAD",
	Prospect = "PROSPECT",
}

/** A filter to be used against AccountType fields. All fields are combined with a logical ‘and.’ */
export type AccountTypeFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<AccountType>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<AccountType>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<AccountType>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<AccountType>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<AccountType>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<AccountType>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<AccountType>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<AccountType>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<AccountType>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<AccountType>>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
	__typename?: "AccountsConnection";
	/** A list of edges which contains the `Account` and cursor to aid in pagination. */
	edges: Array<AccountsEdge>;
	/** A list of `Account` objects. */
	nodes: Array<Account>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"]["output"];
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
	__typename?: "AccountsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]["output"]>;
	/** The `Account` at the end of the edge. */
	node: Account;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
	AccountManagerEmailAsc = "ACCOUNT_MANAGER_EMAIL_ASC",
	AccountManagerEmailDesc = "ACCOUNT_MANAGER_EMAIL_DESC",
	AccountManagerIdAsc = "ACCOUNT_MANAGER_ID_ASC",
	AccountManagerIdDesc = "ACCOUNT_MANAGER_ID_DESC",
	AccountManagerNameAsc = "ACCOUNT_MANAGER_NAME_ASC",
	AccountManagerNameDesc = "ACCOUNT_MANAGER_NAME_DESC",
	AccountManagerPhoneAsc = "ACCOUNT_MANAGER_PHONE_ASC",
	AccountManagerPhoneDesc = "ACCOUNT_MANAGER_PHONE_DESC",
	AccountNameAsc = "ACCOUNT_NAME_ASC",
	AccountNameDesc = "ACCOUNT_NAME_DESC",
	AccountNumberAsc = "ACCOUNT_NUMBER_ASC",
	AccountNumberDesc = "ACCOUNT_NUMBER_DESC",
	AccountRegionAsc = "ACCOUNT_REGION_ASC",
	AccountRegionDesc = "ACCOUNT_REGION_DESC",
	AccountSourceAsc = "ACCOUNT_SOURCE_ASC",
	AccountSourceDesc = "ACCOUNT_SOURCE_DESC",
	AccountStatusAsc = "ACCOUNT_STATUS_ASC",
	AccountStatusDesc = "ACCOUNT_STATUS_DESC",
	AccountTierAsc = "ACCOUNT_TIER_ASC",
	AccountTierDesc = "ACCOUNT_TIER_DESC",
	AccountTypeAsc = "ACCOUNT_TYPE_ASC",
	AccountTypeDesc = "ACCOUNT_TYPE_DESC",
	ActiveContractsAsc = "ACTIVE_CONTRACTS_ASC",
	ActiveContractsDesc = "ACTIVE_CONTRACTS_DESC",
	AnnualRevenueAsc = "ANNUAL_REVENUE_ASC",
	AnnualRevenueDesc = "ANNUAL_REVENUE_DESC",
	AnnualSpendAsc = "ANNUAL_SPEND_ASC",
	AnnualSpendDesc = "ANNUAL_SPEND_DESC",
	BillingAddressAsc = "BILLING_ADDRESS_ASC",
	BillingAddressDesc = "BILLING_ADDRESS_DESC",
	BusinessUnitAsc = "BUSINESS_UNIT_ASC",
	BusinessUnitDesc = "BUSINESS_UNIT_DESC",
	CityAsc = "CITY_ASC",
	CityDesc = "CITY_DESC",
	ClosedOpportunitiesAsc = "CLOSED_OPPORTUNITIES_ASC",
	ClosedOpportunitiesDesc = "CLOSED_OPPORTUNITIES_DESC",
	CompetitorAsc = "COMPETITOR_ASC",
	CompetitorDesc = "COMPETITOR_DESC",
	ContractEndDateAsc = "CONTRACT_END_DATE_ASC",
	ContractEndDateDesc = "CONTRACT_END_DATE_DESC",
	ContractStartDateAsc = "CONTRACT_START_DATE_ASC",
	ContractStartDateDesc = "CONTRACT_START_DATE_DESC",
	CountryAsc = "COUNTRY_ASC",
	CountryDesc = "COUNTRY_DESC",
	CreatedAtAsc = "CREATED_AT_ASC",
	CreatedAtDesc = "CREATED_AT_DESC",
	CreatedDateAsc = "CREATED_DATE_ASC",
	CreatedDateDesc = "CREATED_DATE_DESC",
	CrossSellOpportunitiesAsc = "CROSS_SELL_OPPORTUNITIES_ASC",
	CrossSellOpportunitiesDesc = "CROSS_SELL_OPPORTUNITIES_DESC",
	CustomerSinceAsc = "CUSTOMER_SINCE_ASC",
	CustomerSinceDesc = "CUSTOMER_SINCE_DESC",
	DescriptionAsc = "DESCRIPTION_ASC",
	DescriptionDesc = "DESCRIPTION_DESC",
	EmailAsc = "EMAIL_ASC",
	EmailDesc = "EMAIL_DESC",
	EngagementScoreAsc = "ENGAGEMENT_SCORE_ASC",
	EngagementScoreDesc = "ENGAGEMENT_SCORE_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	InactiveContractsAsc = "INACTIVE_CONTRACTS_ASC",
	InactiveContractsDesc = "INACTIVE_CONTRACTS_DESC",
	IndustryAsc = "INDUSTRY_ASC",
	IndustryDesc = "INDUSTRY_DESC",
	IndustryVerticalAsc = "INDUSTRY_VERTICAL_ASC",
	IndustryVerticalDesc = "INDUSTRY_VERTICAL_DESC",
	IsCustomerAsc = "IS_CUSTOMER_ASC",
	IsCustomerDesc = "IS_CUSTOMER_DESC",
	IsPartnerAsc = "IS_PARTNER_ASC",
	IsPartnerDesc = "IS_PARTNER_DESC",
	IsProspectAsc = "IS_PROSPECT_ASC",
	IsProspectDesc = "IS_PROSPECT_DESC",
	LastActivityDateAsc = "LAST_ACTIVITY_DATE_ASC",
	LastActivityDateDesc = "LAST_ACTIVITY_DATE_DESC",
	LastContactedDateAsc = "LAST_CONTACTED_DATE_ASC",
	LastContactedDateDesc = "LAST_CONTACTED_DATE_DESC",
	LastModifiedDateAsc = "LAST_MODIFIED_DATE_ASC",
	LastModifiedDateDesc = "LAST_MODIFIED_DATE_DESC",
	LastPurchaseDateAsc = "LAST_PURCHASE_DATE_ASC",
	LastPurchaseDateDesc = "LAST_PURCHASE_DATE_DESC",
	LeadSourceAsc = "LEAD_SOURCE_ASC",
	LeadSourceDesc = "LEAD_SOURCE_DESC",
	LoyaltyScoreAsc = "LOYALTY_SCORE_ASC",
	LoyaltyScoreDesc = "LOYALTY_SCORE_DESC",
	MarketingBudgetAsc = "MARKETING_BUDGET_ASC",
	MarketingBudgetDesc = "MARKETING_BUDGET_DESC",
	MarketSegmentAsc = "MARKET_SEGMENT_ASC",
	MarketSegmentDesc = "MARKET_SEGMENT_DESC",
	Natural = "NATURAL",
	NpsScoreAsc = "NPS_SCORE_ASC",
	NpsScoreDesc = "NPS_SCORE_DESC",
	NumberOfEmployeesAsc = "NUMBER_OF_EMPLOYEES_ASC",
	NumberOfEmployeesDesc = "NUMBER_OF_EMPLOYEES_DESC",
	OpenOpportunitiesAsc = "OPEN_OPPORTUNITIES_ASC",
	OpenOpportunitiesDesc = "OPEN_OPPORTUNITIES_DESC",
	OwnershipAsc = "OWNERSHIP_ASC",
	OwnershipDesc = "OWNERSHIP_DESC",
	OwnershipTypeAsc = "OWNERSHIP_TYPE_ASC",
	OwnershipTypeDesc = "OWNERSHIP_TYPE_DESC",
	ParentAccountIdAsc = "PARENT_ACCOUNT_ID_ASC",
	ParentAccountIdDesc = "PARENT_ACCOUNT_ID_DESC",
	PaymentTermsAsc = "PAYMENT_TERMS_ASC",
	PaymentTermsDesc = "PAYMENT_TERMS_DESC",
	PhoneNumberAsc = "PHONE_NUMBER_ASC",
	PhoneNumberDesc = "PHONE_NUMBER_DESC",
	PostalCodeAsc = "POSTAL_CODE_ASC",
	PostalCodeDesc = "POSTAL_CODE_DESC",
	PreferredContactMethodAsc = "PREFERRED_CONTACT_METHOD_ASC",
	PreferredContactMethodDesc = "PREFERRED_CONTACT_METHOD_DESC",
	PreferredLanguageAsc = "PREFERRED_LANGUAGE_ASC",
	PreferredLanguageDesc = "PREFERRED_LANGUAGE_DESC",
	PrimaryContactEmailAsc = "PRIMARY_CONTACT_EMAIL_ASC",
	PrimaryContactEmailDesc = "PRIMARY_CONTACT_EMAIL_DESC",
	PrimaryContactNameAsc = "PRIMARY_CONTACT_NAME_ASC",
	PrimaryContactNameDesc = "PRIMARY_CONTACT_NAME_DESC",
	PrimaryContactPhoneAsc = "PRIMARY_CONTACT_PHONE_ASC",
	PrimaryContactPhoneDesc = "PRIMARY_CONTACT_PHONE_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	RatingAsc = "RATING_ASC",
	RatingDesc = "RATING_DESC",
	ReferralSourceAsc = "REFERRAL_SOURCE_ASC",
	ReferralSourceDesc = "REFERRAL_SOURCE_DESC",
	RenewalDateAsc = "RENEWAL_DATE_ASC",
	RenewalDateDesc = "RENEWAL_DATE_DESC",
	RenewalProbabilityAsc = "RENEWAL_PROBABILITY_ASC",
	RenewalProbabilityDesc = "RENEWAL_PROBABILITY_DESC",
	SecondaryContactEmailAsc = "SECONDARY_CONTACT_EMAIL_ASC",
	SecondaryContactEmailDesc = "SECONDARY_CONTACT_EMAIL_DESC",
	SecondaryContactNameAsc = "SECONDARY_CONTACT_NAME_ASC",
	SecondaryContactNameDesc = "SECONDARY_CONTACT_NAME_DESC",
	SecondaryContactPhoneAsc = "SECONDARY_CONTACT_PHONE_ASC",
	SecondaryContactPhoneDesc = "SECONDARY_CONTACT_PHONE_DESC",
	ShippingAddressAsc = "SHIPPING_ADDRESS_ASC",
	ShippingAddressDesc = "SHIPPING_ADDRESS_DESC",
	SicCodeAsc = "SIC_CODE_ASC",
	SicCodeDesc = "SIC_CODE_DESC",
	SocialMediaHandleAsc = "SOCIAL_MEDIA_HANDLE_ASC",
	SocialMediaHandleDesc = "SOCIAL_MEDIA_HANDLE_DESC",
	StateAsc = "STATE_ASC",
	StateDesc = "STATE_DESC",
	StrategicAccountAsc = "STRATEGIC_ACCOUNT_ASC",
	StrategicAccountDesc = "STRATEGIC_ACCOUNT_DESC",
	SubscriptionTypeAsc = "SUBSCRIPTION_TYPE_ASC",
	SubscriptionTypeDesc = "SUBSCRIPTION_TYPE_DESC",
	TerritoryAsc = "TERRITORY_ASC",
	TerritoryDesc = "TERRITORY_DESC",
	TickerSymbolAsc = "TICKER_SYMBOL_ASC",
	TickerSymbolDesc = "TICKER_SYMBOL_DESC",
	TimezoneAsc = "TIMEZONE_ASC",
	TimezoneDesc = "TIMEZONE_DESC",
	TotalPurchaseValueAsc = "TOTAL_PURCHASE_VALUE_ASC",
	TotalPurchaseValueDesc = "TOTAL_PURCHASE_VALUE_DESC",
	UpdatedAtAsc = "UPDATED_AT_ASC",
	UpdatedAtDesc = "UPDATED_AT_DESC",
	UpsellOpportunitiesAsc = "UPSELL_OPPORTUNITIES_ASC",
	UpsellOpportunitiesDesc = "UPSELL_OPPORTUNITIES_DESC",
	WebsiteAsc = "WEBSITE_ASC",
	WebsiteDesc = "WEBSITE_DESC",
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
	/** The `Account` to be created by this mutation. */
	account: AccountInput;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
	__typename?: "CreateAccountPayload";
	/** The `Account` that was created by this mutation. */
	account?: Maybe<Account>;
	/** An edge for our `Account`. May be used by Relay 1. */
	accountEdge?: Maybe<AccountsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayloadAccountEdgeArgs = {
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** All input for the create `Opportunity` mutation. */
export type CreateOpportunityInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The `Opportunity` to be created by this mutation. */
	opportunity: OpportunityInput;
};

/** The output of our create `Opportunity` mutation. */
export type CreateOpportunityPayload = {
	__typename?: "CreateOpportunityPayload";
	/** Reads a single `Account` that is related to this `Opportunity`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The `Opportunity` that was created by this mutation. */
	opportunity?: Maybe<Opportunity>;
	/** An edge for our `Opportunity`. May be used by Relay 1. */
	opportunityEdge?: Maybe<OpportunitiesEdge>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** Reads a single `User` that is related to this `Opportunity`. */
	userByOwnerId?: Maybe<User>;
};

/** The output of our create `Opportunity` mutation. */
export type CreateOpportunityPayloadOpportunityEdgeArgs = {
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

/** All input for the create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationInput = {
	/** The `_PrismaMigration` to be created by this mutation. */
	_prismaMigration: _PrismaMigrationInput;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationPayload = {
	__typename?: "CreatePrismaMigrationPayload";
	/** The `_PrismaMigration` that was created by this mutation. */
	_prismaMigration?: Maybe<_PrismaMigration>;
	/** An edge for our `_PrismaMigration`. May be used by Relay 1. */
	_prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our create `_PrismaMigration` mutation. */
export type CreatePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
	orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The `User` to be created by this mutation. */
	user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
	__typename?: "CreateUserPayload";
	/** Reads a single `Account` that is related to this `User`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** The `User` that was created by this mutation. */
	user?: Maybe<User>;
	/** An edge for our `User`. May be used by Relay 1. */
	userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

/** All input for the `deleteAccountById` mutation. */
export type DeleteAccountByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `Account` to be deleted. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
	__typename?: "DeleteAccountPayload";
	/** The `Account` that was deleted by this mutation. */
	account?: Maybe<Account>;
	/** An edge for our `Account`. May be used by Relay 1. */
	accountEdge?: Maybe<AccountsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	deletedAccountId?: Maybe<Scalars["ID"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** All input for the `deleteOpportunityById` mutation. */
export type DeleteOpportunityByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
};

/** All input for the `deleteOpportunity` mutation. */
export type DeleteOpportunityInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `Opportunity` to be deleted. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Opportunity` mutation. */
export type DeleteOpportunityPayload = {
	__typename?: "DeleteOpportunityPayload";
	/** Reads a single `Account` that is related to this `Opportunity`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	deletedOpportunityId?: Maybe<Scalars["ID"]["output"]>;
	/** The `Opportunity` that was deleted by this mutation. */
	opportunity?: Maybe<Opportunity>;
	/** An edge for our `Opportunity`. May be used by Relay 1. */
	opportunityEdge?: Maybe<OpportunitiesEdge>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** Reads a single `User` that is related to this `Opportunity`. */
	userByOwnerId?: Maybe<User>;
};

/** The output of our delete `Opportunity` mutation. */
export type DeleteOpportunityPayloadOpportunityEdgeArgs = {
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

/** All input for the `deletePrismaMigrationById` mutation. */
export type DeletePrismaMigrationByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
};

/** All input for the `deletePrismaMigration` mutation. */
export type DeletePrismaMigrationInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `_PrismaMigration` to be deleted. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `_PrismaMigration` mutation. */
export type DeletePrismaMigrationPayload = {
	__typename?: "DeletePrismaMigrationPayload";
	/** The `_PrismaMigration` that was deleted by this mutation. */
	_prismaMigration?: Maybe<_PrismaMigration>;
	/** An edge for our `_PrismaMigration`. May be used by Relay 1. */
	_prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	deletedPrismaMigrationId?: Maybe<Scalars["ID"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our delete `_PrismaMigration` mutation. */
export type DeletePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
	orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `User` to be deleted. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
	__typename?: "DeleteUserPayload";
	/** Reads a single `Account` that is related to this `User`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	deletedUserId?: Maybe<Scalars["ID"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** The `User` that was deleted by this mutation. */
	user?: Maybe<User>;
	/** An edge for our `User`. May be used by Relay 1. */
	userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Float"]["input"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Float"]["input"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Float"]["input"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Float"]["input"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Float"]["input"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Float"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Float"]["input"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Float"]["input"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Int"]["input"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Int"]["input"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Int"]["input"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
	__typename?: "Mutation";
	/** Creates a single `Account`. */
	createAccount?: Maybe<CreateAccountPayload>;
	/** Creates a single `Opportunity`. */
	createOpportunity?: Maybe<CreateOpportunityPayload>;
	/** Creates a single `_PrismaMigration`. */
	createPrismaMigration?: Maybe<CreatePrismaMigrationPayload>;
	/** Creates a single `User`. */
	createUser?: Maybe<CreateUserPayload>;
	/** Deletes a single `Account` using its globally unique id. */
	deleteAccount?: Maybe<DeleteAccountPayload>;
	/** Deletes a single `Account` using a unique key. */
	deleteAccountById?: Maybe<DeleteAccountPayload>;
	/** Deletes a single `Opportunity` using its globally unique id. */
	deleteOpportunity?: Maybe<DeleteOpportunityPayload>;
	/** Deletes a single `Opportunity` using a unique key. */
	deleteOpportunityById?: Maybe<DeleteOpportunityPayload>;
	/** Deletes a single `_PrismaMigration` using its globally unique id. */
	deletePrismaMigration?: Maybe<DeletePrismaMigrationPayload>;
	/** Deletes a single `_PrismaMigration` using a unique key. */
	deletePrismaMigrationById?: Maybe<DeletePrismaMigrationPayload>;
	/** Deletes a single `User` using its globally unique id. */
	deleteUser?: Maybe<DeleteUserPayload>;
	/** Deletes a single `User` using a unique key. */
	deleteUserById?: Maybe<DeleteUserPayload>;
	/** Updates a single `Account` using its globally unique id and a patch. */
	updateAccount?: Maybe<UpdateAccountPayload>;
	/** Updates a single `Account` using a unique key and a patch. */
	updateAccountById?: Maybe<UpdateAccountPayload>;
	/** Updates a single `Opportunity` using its globally unique id and a patch. */
	updateOpportunity?: Maybe<UpdateOpportunityPayload>;
	/** Updates a single `Opportunity` using a unique key and a patch. */
	updateOpportunityById?: Maybe<UpdateOpportunityPayload>;
	/** Updates a single `_PrismaMigration` using its globally unique id and a patch. */
	updatePrismaMigration?: Maybe<UpdatePrismaMigrationPayload>;
	/** Updates a single `_PrismaMigration` using a unique key and a patch. */
	updatePrismaMigrationById?: Maybe<UpdatePrismaMigrationPayload>;
	/** Updates a single `User` using its globally unique id and a patch. */
	updateUser?: Maybe<UpdateUserPayload>;
	/** Updates a single `User` using a unique key and a patch. */
	updateUserById?: Maybe<UpdateUserPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
	input: CreateAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOpportunityArgs = {
	input: CreateOpportunityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePrismaMigrationArgs = {
	input: CreatePrismaMigrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
	input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
	input: DeleteAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByIdArgs = {
	input: DeleteAccountByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOpportunityArgs = {
	input: DeleteOpportunityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOpportunityByIdArgs = {
	input: DeleteOpportunityByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrismaMigrationArgs = {
	input: DeletePrismaMigrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePrismaMigrationByIdArgs = {
	input: DeletePrismaMigrationByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
	input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
	input: DeleteUserByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
	input: UpdateAccountInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByIdArgs = {
	input: UpdateAccountByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOpportunityArgs = {
	input: UpdateOpportunityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOpportunityByIdArgs = {
	input: UpdateOpportunityByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrismaMigrationArgs = {
	input: UpdatePrismaMigrationInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePrismaMigrationByIdArgs = {
	input: UpdatePrismaMigrationByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
	input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
	input: UpdateUserByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"]["output"];
};

/** A connection to a list of `Opportunity` values. */
export type OpportunitiesConnection = {
	__typename?: "OpportunitiesConnection";
	/** A list of edges which contains the `Opportunity` and cursor to aid in pagination. */
	edges: Array<OpportunitiesEdge>;
	/** A list of `Opportunity` objects. */
	nodes: Array<Opportunity>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Opportunity` you could get from the connection. */
	totalCount: Scalars["Int"]["output"];
};

/** A `Opportunity` edge in the connection. */
export type OpportunitiesEdge = {
	__typename?: "OpportunitiesEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]["output"]>;
	/** The `Opportunity` at the end of the edge. */
	node: Opportunity;
};

/** Methods to use when ordering `Opportunity`. */
export enum OpportunitiesOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	AmountAsc = "AMOUNT_ASC",
	AmountDesc = "AMOUNT_DESC",
	CloseDateAsc = "CLOSE_DATE_ASC",
	CloseDateDesc = "CLOSE_DATE_DESC",
	CreatedAtAsc = "CREATED_AT_ASC",
	CreatedAtDesc = "CREATED_AT_DESC",
	DescriptionAsc = "DESCRIPTION_ASC",
	DescriptionDesc = "DESCRIPTION_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	OpportunityNameAsc = "OPPORTUNITY_NAME_ASC",
	OpportunityNameDesc = "OPPORTUNITY_NAME_DESC",
	OwnerIdAsc = "OWNER_ID_ASC",
	OwnerIdDesc = "OWNER_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	ProbabilityAsc = "PROBABILITY_ASC",
	ProbabilityDesc = "PROBABILITY_DESC",
	SourceAsc = "SOURCE_ASC",
	SourceDesc = "SOURCE_DESC",
	StageAsc = "STAGE_ASC",
	StageDesc = "STAGE_DESC",
	StatusAsc = "STATUS_ASC",
	StatusDesc = "STATUS_DESC",
	UpdatedAtAsc = "UPDATED_AT_ASC",
	UpdatedAtDesc = "UPDATED_AT_DESC",
}

export type Opportunity = Node & {
	__typename?: "Opportunity";
	/** Reads a single `Account` that is related to this `Opportunity`. */
	accountByAccountId?: Maybe<Account>;
	accountId: Scalars["Int"]["output"];
	amount: Scalars["Float"]["output"];
	closeDate?: Maybe<Scalars["Datetime"]["output"]>;
	createdAt: Scalars["Datetime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["Int"]["output"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"]["output"];
	opportunityName: Scalars["String"]["output"];
	ownerId: Scalars["Int"]["output"];
	probability?: Maybe<Scalars["Float"]["output"]>;
	source?: Maybe<Scalars["String"]["output"]>;
	stage: Scalars["String"]["output"];
	status: OpportunityStatus;
	updatedAt: Scalars["Datetime"]["output"];
	/** Reads a single `User` that is related to this `Opportunity`. */
	userByOwnerId?: Maybe<User>;
};

/**
 * A condition to be used against `Opportunity` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type OpportunityCondition = {
	/** Checks for equality with the object’s `accountId` field. */
	accountId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `amount` field. */
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `closeDate` field. */
	closeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `createdAt` field. */
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `description` field. */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `id` field. */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `opportunityName` field. */
	opportunityName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `ownerId` field. */
	ownerId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `probability` field. */
	probability?: InputMaybe<Scalars["Float"]["input"]>;
	/** Checks for equality with the object’s `source` field. */
	source?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `stage` field. */
	stage?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `status` field. */
	status?: InputMaybe<OpportunityStatus>;
	/** Checks for equality with the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A filter to be used against `Opportunity` object types. All fields are combined with a logical ‘and.’ */
export type OpportunityFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<IntFilter>;
	/** Filter by the object’s `amount` field. */
	amount?: InputMaybe<FloatFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<OpportunityFilter>>;
	/** Filter by the object’s `closeDate` field. */
	closeDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `description` field. */
	description?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<IntFilter>;
	/** Negates the expression. */
	not?: InputMaybe<OpportunityFilter>;
	/** Filter by the object’s `opportunityName` field. */
	opportunityName?: InputMaybe<StringFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<OpportunityFilter>>;
	/** Filter by the object’s `ownerId` field. */
	ownerId?: InputMaybe<IntFilter>;
	/** Filter by the object’s `probability` field. */
	probability?: InputMaybe<FloatFilter>;
	/** Filter by the object’s `source` field. */
	source?: InputMaybe<StringFilter>;
	/** Filter by the object’s `stage` field. */
	stage?: InputMaybe<StringFilter>;
	/** Filter by the object’s `status` field. */
	status?: InputMaybe<OpportunityStatusFilter>;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Opportunity` */
export type OpportunityInput = {
	accountId: Scalars["Int"]["input"];
	amount: Scalars["Float"]["input"];
	closeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	opportunityName: Scalars["String"]["input"];
	ownerId: Scalars["Int"]["input"];
	probability?: InputMaybe<Scalars["Float"]["input"]>;
	source?: InputMaybe<Scalars["String"]["input"]>;
	stage: Scalars["String"]["input"];
	status?: InputMaybe<OpportunityStatus>;
	updatedAt: Scalars["Datetime"]["input"];
};

/** Represents an update to a `Opportunity`. Fields that are set will be updated. */
export type OpportunityPatch = {
	accountId?: InputMaybe<Scalars["Int"]["input"]>;
	amount?: InputMaybe<Scalars["Float"]["input"]>;
	closeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	opportunityName?: InputMaybe<Scalars["String"]["input"]>;
	ownerId?: InputMaybe<Scalars["Int"]["input"]>;
	probability?: InputMaybe<Scalars["Float"]["input"]>;
	source?: InputMaybe<Scalars["String"]["input"]>;
	stage?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<OpportunityStatus>;
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export enum OpportunityStatus {
	Closed = "CLOSED",
	InProgress = "IN_PROGRESS",
	Lost = "LOST",
	OnHold = "ON_HOLD",
	Open = "OPEN",
	Won = "WON",
}

/** A filter to be used against OpportunityStatus fields. All fields are combined with a logical ‘and.’ */
export type OpportunityStatusFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<OpportunityStatus>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<OpportunityStatus>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<OpportunityStatus>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<OpportunityStatus>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<OpportunityStatus>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<OpportunityStatus>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<OpportunityStatus>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<OpportunityStatus>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<OpportunityStatus>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<OpportunityStatus>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: "PageInfo";
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["Cursor"]["output"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"]["output"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["Cursor"]["output"]>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
	__typename?: "Query";
	/** Reads a single `_PrismaMigration` using its globally unique `ID`. */
	_prismaMigration?: Maybe<_PrismaMigration>;
	_prismaMigrationById?: Maybe<_PrismaMigration>;
	/** Reads a single `Account` using its globally unique `ID`. */
	account?: Maybe<Account>;
	accountById?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Account`. */
	allAccounts?: Maybe<AccountsConnection>;
	/** Reads and enables pagination through a set of `Opportunity`. */
	allOpportunities?: Maybe<OpportunitiesConnection>;
	/** Reads and enables pagination through a set of `_PrismaMigration`. */
	allPrismaMigrations?: Maybe<_PrismaMigrationsConnection>;
	/** Reads and enables pagination through a set of `User`. */
	allUsers?: Maybe<UsersConnection>;
	/** Fetches an object given its globally unique `ID`. */
	node?: Maybe<Node>;
	/** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
	nodeId: Scalars["ID"]["output"];
	/** Reads a single `Opportunity` using its globally unique `ID`. */
	opportunity?: Maybe<Opportunity>;
	opportunityById?: Maybe<Opportunity>;
	/**
	 * Exposes the root query type nested one level down. This is helpful for Relay 1
	 * which can only query top level fields if they are in a particular form.
	 */
	query: Query;
	/** Reads a single `User` using its globally unique `ID`. */
	user?: Maybe<User>;
	userById?: Maybe<User>;
};

/** The root query type which gives access points into the data universe. */
export type Query_PrismaMigrationArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type Query_PrismaMigrationByIdArgs = {
	id: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountByIdArgs = {
	id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<AccountCondition>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllOpportunitiesArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<OpportunityCondition>;
	filter?: InputMaybe<OpportunityFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllPrismaMigrationsArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<_PrismaMigrationCondition>;
	filter?: InputMaybe<_PrismaMigrationFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<UserCondition>;
	filter?: InputMaybe<UserFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOpportunityArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOpportunityByIdArgs = {
	id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
	id: Scalars["Int"]["input"];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["String"]["input"]>;
	/** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
	distinctFromInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Ends with the specified string (case-sensitive). */
	endsWith?: InputMaybe<Scalars["String"]["input"]>;
	/** Ends with the specified string (case-insensitive). */
	endsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["String"]["input"]>;
	/** Equal to the specified value (case-insensitive). */
	equalToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["String"]["input"]>;
	/** Greater than the specified value (case-insensitive). */
	greaterThanInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["String"]["input"]>;
	/** Greater than or equal to the specified value (case-insensitive). */
	greaterThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** Included in the specified list (case-insensitive). */
	inInsensitive?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** Contains the specified string (case-sensitive). */
	includes?: InputMaybe<Scalars["String"]["input"]>;
	/** Contains the specified string (case-insensitive). */
	includesInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["String"]["input"]>;
	/** Less than the specified value (case-insensitive). */
	lessThanInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["String"]["input"]>;
	/** Less than or equal to the specified value (case-insensitive). */
	lessThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	like?: InputMaybe<Scalars["String"]["input"]>;
	/** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	likeInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["String"]["input"]>;
	/** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
	notDistinctFromInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not end with the specified string (case-sensitive). */
	notEndsWith?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not end with the specified string (case-insensitive). */
	notEndsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["String"]["input"]>;
	/** Not equal to the specified value (case-insensitive). */
	notEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** Not included in the specified list (case-insensitive). */
	notInInsensitive?: InputMaybe<Array<Scalars["String"]["input"]>>;
	/** Does not contain the specified string (case-sensitive). */
	notIncludes?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not contain the specified string (case-insensitive). */
	notIncludesInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLike?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLikeInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not start with the specified string (case-sensitive). */
	notStartsWith?: InputMaybe<Scalars["String"]["input"]>;
	/** Does not start with the specified string (case-insensitive). */
	notStartsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
	/** Starts with the specified string (case-sensitive). */
	startsWith?: InputMaybe<Scalars["String"]["input"]>;
	/** Starts with the specified string (case-insensitive). */
	startsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
};

/** All input for the `updateAccountById` mutation. */
export type UpdateAccountByIdInput = {
	/** An object where the defined keys will be set on the `Account` being updated. */
	accountPatch: AccountPatch;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
};

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
	/** An object where the defined keys will be set on the `Account` being updated. */
	accountPatch: AccountPatch;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `Account` to be updated. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
	__typename?: "UpdateAccountPayload";
	/** The `Account` that was updated by this mutation. */
	account?: Maybe<Account>;
	/** An edge for our `Account`. May be used by Relay 1. */
	accountEdge?: Maybe<AccountsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** All input for the `updateOpportunityById` mutation. */
export type UpdateOpportunityByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
	/** An object where the defined keys will be set on the `Opportunity` being updated. */
	opportunityPatch: OpportunityPatch;
};

/** All input for the `updateOpportunity` mutation. */
export type UpdateOpportunityInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `Opportunity` to be updated. */
	nodeId: Scalars["ID"]["input"];
	/** An object where the defined keys will be set on the `Opportunity` being updated. */
	opportunityPatch: OpportunityPatch;
};

/** The output of our update `Opportunity` mutation. */
export type UpdateOpportunityPayload = {
	__typename?: "UpdateOpportunityPayload";
	/** Reads a single `Account` that is related to this `Opportunity`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** The `Opportunity` that was updated by this mutation. */
	opportunity?: Maybe<Opportunity>;
	/** An edge for our `Opportunity`. May be used by Relay 1. */
	opportunityEdge?: Maybe<OpportunitiesEdge>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** Reads a single `User` that is related to this `Opportunity`. */
	userByOwnerId?: Maybe<User>;
};

/** The output of our update `Opportunity` mutation. */
export type UpdateOpportunityPayloadOpportunityEdgeArgs = {
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

/** All input for the `updatePrismaMigrationById` mutation. */
export type UpdatePrismaMigrationByIdInput = {
	/** An object where the defined keys will be set on the `_PrismaMigration` being updated. */
	_prismaMigrationPatch: _PrismaMigrationPatch;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["String"]["input"];
};

/** All input for the `updatePrismaMigration` mutation. */
export type UpdatePrismaMigrationInput = {
	/** An object where the defined keys will be set on the `_PrismaMigration` being updated. */
	_prismaMigrationPatch: _PrismaMigrationPatch;
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `_PrismaMigration` to be updated. */
	nodeId: Scalars["ID"]["input"];
};

/** The output of our update `_PrismaMigration` mutation. */
export type UpdatePrismaMigrationPayload = {
	__typename?: "UpdatePrismaMigrationPayload";
	/** The `_PrismaMigration` that was updated by this mutation. */
	_prismaMigration?: Maybe<_PrismaMigration>;
	/** An edge for our `_PrismaMigration`. May be used by Relay 1. */
	_prismaMigrationEdge?: Maybe<_PrismaMigrationsEdge>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
};

/** The output of our update `_PrismaMigration` mutation. */
export type UpdatePrismaMigrationPayload_PrismaMigrationEdgeArgs = {
	orderBy?: InputMaybe<Array<_PrismaMigrationsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["Int"]["input"];
	/** An object where the defined keys will be set on the `User` being updated. */
	userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
	/**
	 * An arbitrary string value with no semantic meaning. Will be included in the
	 * payload verbatim. May be used to track mutations by the client.
	 */
	clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
	/** The globally unique `ID` which will identify a single `User` to be updated. */
	nodeId: Scalars["ID"]["input"];
	/** An object where the defined keys will be set on the `User` being updated. */
	userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
	__typename?: "UpdateUserPayload";
	/** Reads a single `Account` that is related to this `User`. */
	accountByAccountId?: Maybe<Account>;
	/**
	 * The exact same `clientMutationId` that was provided in the mutation input,
	 * unchanged and unused. May be used by a client to track mutations.
	 */
	clientMutationId?: Maybe<Scalars["String"]["output"]>;
	/** Our root query field type. Allows us to run any query from our mutation payload. */
	query?: Maybe<Query>;
	/** The `User` that was updated by this mutation. */
	user?: Maybe<User>;
	/** An edge for our `User`. May be used by Relay 1. */
	userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = Node & {
	__typename?: "User";
	/** Reads a single `Account` that is related to this `User`. */
	accountByAccountId?: Maybe<Account>;
	accountId: Scalars["Int"]["output"];
	bio?: Maybe<Scalars["String"]["output"]>;
	city?: Maybe<Scalars["String"]["output"]>;
	country?: Maybe<Scalars["String"]["output"]>;
	createdAt: Scalars["Datetime"]["output"];
	dateOfBirth?: Maybe<Scalars["Datetime"]["output"]>;
	department?: Maybe<Scalars["String"]["output"]>;
	email: Scalars["String"]["output"];
	facebookProfile?: Maybe<Scalars["String"]["output"]>;
	failedLoginAttempts: Scalars["Int"]["output"];
	firstName: Scalars["String"]["output"];
	gender?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["Int"]["output"];
	isActive: Scalars["Boolean"]["output"];
	isVerified: Scalars["Boolean"]["output"];
	jobTitle?: Maybe<Scalars["String"]["output"]>;
	lastLoginDate?: Maybe<Scalars["Datetime"]["output"]>;
	lastName: Scalars["String"]["output"];
	lastPasswordChangeDate?: Maybe<Scalars["Datetime"]["output"]>;
	linkedinProfile?: Maybe<Scalars["String"]["output"]>;
	loginCount: Scalars["Int"]["output"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"]["output"];
	/** Reads and enables pagination through a set of `Opportunity`. */
	opportunitiesByOwnerId: OpportunitiesConnection;
	password: Scalars["String"]["output"];
	phoneNumber?: Maybe<Scalars["String"]["output"]>;
	postalCode?: Maybe<Scalars["String"]["output"]>;
	preferredLanguage?: Maybe<Scalars["String"]["output"]>;
	profileImageUrl?: Maybe<Scalars["String"]["output"]>;
	role: UserRole;
	state?: Maybe<Scalars["String"]["output"]>;
	streetAddress?: Maybe<Scalars["String"]["output"]>;
	timezone?: Maybe<Scalars["String"]["output"]>;
	twitterHandle?: Maybe<Scalars["String"]["output"]>;
	updatedAt: Scalars["Datetime"]["output"];
	username: Scalars["String"]["output"];
};

export type UserOpportunitiesByOwnerIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	condition?: InputMaybe<OpportunityCondition>;
	filter?: InputMaybe<OpportunityFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<OpportunitiesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
	/** Checks for equality with the object’s `accountId` field. */
	accountId?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `bio` field. */
	bio?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `city` field. */
	city?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `country` field. */
	country?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `createdAt` field. */
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `dateOfBirth` field. */
	dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `department` field. */
	department?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `email` field. */
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `facebookProfile` field. */
	facebookProfile?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `failedLoginAttempts` field. */
	failedLoginAttempts?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `firstName` field. */
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `gender` field. */
	gender?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `id` field. */
	id?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `isActive` field. */
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `isVerified` field. */
	isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Checks for equality with the object’s `jobTitle` field. */
	jobTitle?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `lastLoginDate` field. */
	lastLoginDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `lastName` field. */
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `lastPasswordChangeDate` field. */
	lastPasswordChangeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `linkedinProfile` field. */
	linkedinProfile?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `loginCount` field. */
	loginCount?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `password` field. */
	password?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `phoneNumber` field. */
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `postalCode` field. */
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `preferredLanguage` field. */
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `profileImageUrl` field. */
	profileImageUrl?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `role` field. */
	role?: InputMaybe<UserRole>;
	/** Checks for equality with the object’s `state` field. */
	state?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `streetAddress` field. */
	streetAddress?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `timezone` field. */
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `twitterHandle` field. */
	twitterHandle?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `username` field. */
	username?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<IntFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<UserFilter>>;
	/** Filter by the object’s `bio` field. */
	bio?: InputMaybe<StringFilter>;
	/** Filter by the object’s `city` field. */
	city?: InputMaybe<StringFilter>;
	/** Filter by the object’s `country` field. */
	country?: InputMaybe<StringFilter>;
	/** Filter by the object’s `createdAt` field. */
	createdAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `dateOfBirth` field. */
	dateOfBirth?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `department` field. */
	department?: InputMaybe<StringFilter>;
	/** Filter by the object’s `email` field. */
	email?: InputMaybe<StringFilter>;
	/** Filter by the object’s `facebookProfile` field. */
	facebookProfile?: InputMaybe<StringFilter>;
	/** Filter by the object’s `failedLoginAttempts` field. */
	failedLoginAttempts?: InputMaybe<IntFilter>;
	/** Filter by the object’s `firstName` field. */
	firstName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `gender` field. */
	gender?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<IntFilter>;
	/** Filter by the object’s `isActive` field. */
	isActive?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `isVerified` field. */
	isVerified?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `jobTitle` field. */
	jobTitle?: InputMaybe<StringFilter>;
	/** Filter by the object’s `lastLoginDate` field. */
	lastLoginDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `lastName` field. */
	lastName?: InputMaybe<StringFilter>;
	/** Filter by the object’s `lastPasswordChangeDate` field. */
	lastPasswordChangeDate?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `linkedinProfile` field. */
	linkedinProfile?: InputMaybe<StringFilter>;
	/** Filter by the object’s `loginCount` field. */
	loginCount?: InputMaybe<IntFilter>;
	/** Negates the expression. */
	not?: InputMaybe<UserFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<UserFilter>>;
	/** Filter by the object’s `password` field. */
	password?: InputMaybe<StringFilter>;
	/** Filter by the object’s `phoneNumber` field. */
	phoneNumber?: InputMaybe<StringFilter>;
	/** Filter by the object’s `postalCode` field. */
	postalCode?: InputMaybe<StringFilter>;
	/** Filter by the object’s `preferredLanguage` field. */
	preferredLanguage?: InputMaybe<StringFilter>;
	/** Filter by the object’s `profileImageUrl` field. */
	profileImageUrl?: InputMaybe<StringFilter>;
	/** Filter by the object’s `role` field. */
	role?: InputMaybe<UserRoleFilter>;
	/** Filter by the object’s `state` field. */
	state?: InputMaybe<StringFilter>;
	/** Filter by the object’s `streetAddress` field. */
	streetAddress?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timezone` field. */
	timezone?: InputMaybe<StringFilter>;
	/** Filter by the object’s `twitterHandle` field. */
	twitterHandle?: InputMaybe<StringFilter>;
	/** Filter by the object’s `updatedAt` field. */
	updatedAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `username` field. */
	username?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
	accountId: Scalars["Int"]["input"];
	bio?: InputMaybe<Scalars["String"]["input"]>;
	city?: InputMaybe<Scalars["String"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
	department?: InputMaybe<Scalars["String"]["input"]>;
	email: Scalars["String"]["input"];
	facebookProfile?: InputMaybe<Scalars["String"]["input"]>;
	failedLoginAttempts?: InputMaybe<Scalars["Int"]["input"]>;
	firstName: Scalars["String"]["input"];
	gender?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
	jobTitle?: InputMaybe<Scalars["String"]["input"]>;
	lastLoginDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastName: Scalars["String"]["input"];
	lastPasswordChangeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	linkedinProfile?: InputMaybe<Scalars["String"]["input"]>;
	loginCount?: InputMaybe<Scalars["Int"]["input"]>;
	password: Scalars["String"]["input"];
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	profileImageUrl?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<UserRole>;
	state?: InputMaybe<Scalars["String"]["input"]>;
	streetAddress?: InputMaybe<Scalars["String"]["input"]>;
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	twitterHandle?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt: Scalars["Datetime"]["input"];
	username: Scalars["String"]["input"];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
	accountId?: InputMaybe<Scalars["Int"]["input"]>;
	bio?: InputMaybe<Scalars["String"]["input"]>;
	city?: InputMaybe<Scalars["String"]["input"]>;
	country?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
	department?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	facebookProfile?: InputMaybe<Scalars["String"]["input"]>;
	failedLoginAttempts?: InputMaybe<Scalars["Int"]["input"]>;
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	gender?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["Int"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
	jobTitle?: InputMaybe<Scalars["String"]["input"]>;
	lastLoginDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	lastName?: InputMaybe<Scalars["String"]["input"]>;
	lastPasswordChangeDate?: InputMaybe<Scalars["Datetime"]["input"]>;
	linkedinProfile?: InputMaybe<Scalars["String"]["input"]>;
	loginCount?: InputMaybe<Scalars["Int"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	postalCode?: InputMaybe<Scalars["String"]["input"]>;
	preferredLanguage?: InputMaybe<Scalars["String"]["input"]>;
	profileImageUrl?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<UserRole>;
	state?: InputMaybe<Scalars["String"]["input"]>;
	streetAddress?: InputMaybe<Scalars["String"]["input"]>;
	timezone?: InputMaybe<Scalars["String"]["input"]>;
	twitterHandle?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	username?: InputMaybe<Scalars["String"]["input"]>;
};

export enum UserRole {
	Admin = "ADMIN",
	Guest = "GUEST",
	Moderator = "MODERATOR",
	User = "USER",
}

/** A filter to be used against UserRole fields. All fields are combined with a logical ‘and.’ */
export type UserRoleFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<UserRole>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<UserRole>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<UserRole>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<UserRole>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<UserRole>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<UserRole>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<UserRole>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<UserRole>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<UserRole>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<UserRole>>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
	__typename?: "UsersConnection";
	/** A list of edges which contains the `User` and cursor to aid in pagination. */
	edges: Array<UsersEdge>;
	/** A list of `User` objects. */
	nodes: Array<User>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `User` you could get from the connection. */
	totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
	__typename?: "UsersEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]["output"]>;
	/** The `User` at the end of the edge. */
	node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	BioAsc = "BIO_ASC",
	BioDesc = "BIO_DESC",
	CityAsc = "CITY_ASC",
	CityDesc = "CITY_DESC",
	CountryAsc = "COUNTRY_ASC",
	CountryDesc = "COUNTRY_DESC",
	CreatedAtAsc = "CREATED_AT_ASC",
	CreatedAtDesc = "CREATED_AT_DESC",
	DateOfBirthAsc = "DATE_OF_BIRTH_ASC",
	DateOfBirthDesc = "DATE_OF_BIRTH_DESC",
	DepartmentAsc = "DEPARTMENT_ASC",
	DepartmentDesc = "DEPARTMENT_DESC",
	EmailAsc = "EMAIL_ASC",
	EmailDesc = "EMAIL_DESC",
	FacebookProfileAsc = "FACEBOOK_PROFILE_ASC",
	FacebookProfileDesc = "FACEBOOK_PROFILE_DESC",
	FailedLoginAttemptsAsc = "FAILED_LOGIN_ATTEMPTS_ASC",
	FailedLoginAttemptsDesc = "FAILED_LOGIN_ATTEMPTS_DESC",
	FirstNameAsc = "FIRST_NAME_ASC",
	FirstNameDesc = "FIRST_NAME_DESC",
	GenderAsc = "GENDER_ASC",
	GenderDesc = "GENDER_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IsActiveAsc = "IS_ACTIVE_ASC",
	IsActiveDesc = "IS_ACTIVE_DESC",
	IsVerifiedAsc = "IS_VERIFIED_ASC",
	IsVerifiedDesc = "IS_VERIFIED_DESC",
	JobTitleAsc = "JOB_TITLE_ASC",
	JobTitleDesc = "JOB_TITLE_DESC",
	LastLoginDateAsc = "LAST_LOGIN_DATE_ASC",
	LastLoginDateDesc = "LAST_LOGIN_DATE_DESC",
	LastNameAsc = "LAST_NAME_ASC",
	LastNameDesc = "LAST_NAME_DESC",
	LastPasswordChangeDateAsc = "LAST_PASSWORD_CHANGE_DATE_ASC",
	LastPasswordChangeDateDesc = "LAST_PASSWORD_CHANGE_DATE_DESC",
	LinkedinProfileAsc = "LINKEDIN_PROFILE_ASC",
	LinkedinProfileDesc = "LINKEDIN_PROFILE_DESC",
	LoginCountAsc = "LOGIN_COUNT_ASC",
	LoginCountDesc = "LOGIN_COUNT_DESC",
	Natural = "NATURAL",
	PasswordAsc = "PASSWORD_ASC",
	PasswordDesc = "PASSWORD_DESC",
	PhoneNumberAsc = "PHONE_NUMBER_ASC",
	PhoneNumberDesc = "PHONE_NUMBER_DESC",
	PostalCodeAsc = "POSTAL_CODE_ASC",
	PostalCodeDesc = "POSTAL_CODE_DESC",
	PreferredLanguageAsc = "PREFERRED_LANGUAGE_ASC",
	PreferredLanguageDesc = "PREFERRED_LANGUAGE_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	ProfileImageUrlAsc = "PROFILE_IMAGE_URL_ASC",
	ProfileImageUrlDesc = "PROFILE_IMAGE_URL_DESC",
	RoleAsc = "ROLE_ASC",
	RoleDesc = "ROLE_DESC",
	StateAsc = "STATE_ASC",
	StateDesc = "STATE_DESC",
	StreetAddressAsc = "STREET_ADDRESS_ASC",
	StreetAddressDesc = "STREET_ADDRESS_DESC",
	TimezoneAsc = "TIMEZONE_ASC",
	TimezoneDesc = "TIMEZONE_DESC",
	TwitterHandleAsc = "TWITTER_HANDLE_ASC",
	TwitterHandleDesc = "TWITTER_HANDLE_DESC",
	UpdatedAtAsc = "UPDATED_AT_ASC",
	UpdatedAtDesc = "UPDATED_AT_DESC",
	UsernameAsc = "USERNAME_ASC",
	UsernameDesc = "USERNAME_DESC",
}

export type _PrismaMigration = Node & {
	__typename?: "_PrismaMigration";
	appliedStepsCount: Scalars["Int"]["output"];
	checksum: Scalars["String"]["output"];
	finishedAt?: Maybe<Scalars["Datetime"]["output"]>;
	id: Scalars["String"]["output"];
	logs?: Maybe<Scalars["String"]["output"]>;
	migrationName: Scalars["String"]["output"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"]["output"];
	rolledBackAt?: Maybe<Scalars["Datetime"]["output"]>;
	startedAt: Scalars["Datetime"]["output"];
};

/**
 * A condition to be used against `_PrismaMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type _PrismaMigrationCondition = {
	/** Checks for equality with the object’s `appliedStepsCount` field. */
	appliedStepsCount?: InputMaybe<Scalars["Int"]["input"]>;
	/** Checks for equality with the object’s `checksum` field. */
	checksum?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `finishedAt` field. */
	finishedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `id` field. */
	id?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `logs` field. */
	logs?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `migrationName` field. */
	migrationName?: InputMaybe<Scalars["String"]["input"]>;
	/** Checks for equality with the object’s `rolledBackAt` field. */
	rolledBackAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	/** Checks for equality with the object’s `startedAt` field. */
	startedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A filter to be used against `_PrismaMigration` object types. All fields are combined with a logical ‘and.’ */
export type _PrismaMigrationFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<_PrismaMigrationFilter>>;
	/** Filter by the object’s `appliedStepsCount` field. */
	appliedStepsCount?: InputMaybe<IntFilter>;
	/** Filter by the object’s `checksum` field. */
	checksum?: InputMaybe<StringFilter>;
	/** Filter by the object’s `finishedAt` field. */
	finishedAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `logs` field. */
	logs?: InputMaybe<StringFilter>;
	/** Filter by the object’s `migrationName` field. */
	migrationName?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<_PrismaMigrationFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<_PrismaMigrationFilter>>;
	/** Filter by the object’s `rolledBackAt` field. */
	rolledBackAt?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `startedAt` field. */
	startedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `_PrismaMigration` */
export type _PrismaMigrationInput = {
	appliedStepsCount?: InputMaybe<Scalars["Int"]["input"]>;
	checksum: Scalars["String"]["input"];
	finishedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	id: Scalars["String"]["input"];
	logs?: InputMaybe<Scalars["String"]["input"]>;
	migrationName: Scalars["String"]["input"];
	rolledBackAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	startedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `_PrismaMigration`. Fields that are set will be updated. */
export type _PrismaMigrationPatch = {
	appliedStepsCount?: InputMaybe<Scalars["Int"]["input"]>;
	checksum?: InputMaybe<Scalars["String"]["input"]>;
	finishedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["String"]["input"]>;
	logs?: InputMaybe<Scalars["String"]["input"]>;
	migrationName?: InputMaybe<Scalars["String"]["input"]>;
	rolledBackAt?: InputMaybe<Scalars["Datetime"]["input"]>;
	startedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A connection to a list of `_PrismaMigration` values. */
export type _PrismaMigrationsConnection = {
	__typename?: "_PrismaMigrationsConnection";
	/** A list of edges which contains the `_PrismaMigration` and cursor to aid in pagination. */
	edges: Array<_PrismaMigrationsEdge>;
	/** A list of `_PrismaMigration` objects. */
	nodes: Array<_PrismaMigration>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `_PrismaMigration` you could get from the connection. */
	totalCount: Scalars["Int"]["output"];
};

/** A `_PrismaMigration` edge in the connection. */
export type _PrismaMigrationsEdge = {
	__typename?: "_PrismaMigrationsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]["output"]>;
	/** The `_PrismaMigration` at the end of the edge. */
	node: _PrismaMigration;
};

/** Methods to use when ordering `_PrismaMigration`. */
export enum _PrismaMigrationsOrderBy {
	AppliedStepsCountAsc = "APPLIED_STEPS_COUNT_ASC",
	AppliedStepsCountDesc = "APPLIED_STEPS_COUNT_DESC",
	ChecksumAsc = "CHECKSUM_ASC",
	ChecksumDesc = "CHECKSUM_DESC",
	FinishedAtAsc = "FINISHED_AT_ASC",
	FinishedAtDesc = "FINISHED_AT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	LogsAsc = "LOGS_ASC",
	LogsDesc = "LOGS_DESC",
	MigrationNameAsc = "MIGRATION_NAME_ASC",
	MigrationNameDesc = "MIGRATION_NAME_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	RolledBackAtAsc = "ROLLED_BACK_AT_ASC",
	RolledBackAtDesc = "ROLLED_BACK_AT_DESC",
	StartedAtAsc = "STARTED_AT_ASC",
	StartedAtDesc = "STARTED_AT_DESC",
}

export type AccountListQueryVariables = Exact<{
	filter?: InputMaybe<AccountFilter>;
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy> | AccountsOrderBy>;
}>;

export type AccountListQuery = {
	__typename?: "Query";
	allAccounts?: {
		__typename: "AccountsConnection";
		totalCount: number;
		pageInfo: {
			__typename?: "PageInfo";
			hasNextPage: boolean;
			hasPreviousPage: boolean;
			startCursor?: any | null;
			endCursor?: any | null;
		};
		nodes: Array<{
			__typename?: "Account";
			nodeId: string;
			billingAddress?: string | null;
			shippingAddress?: string | null;
			city?: string | null;
			state?: string | null;
			postalCode?: string | null;
			country?: string | null;
			annualRevenue?: number | null;
			numberOfEmployees?: number | null;
			ownership?: string | null;
			parentAccountId?: number | null;
			id: number;
			accountSource?: string | null;
			description?: string | null;
			createdDate: any;
			lastModifiedDate: any;
			lastActivityDate?: any | null;
			rating?: number | null;
			sicCode?: string | null;
			tickerSymbol?: string | null;
			ownershipType?: string | null;
			accountType?: AccountType | null;
			createdAt: any;
			territory?: string | null;
			marketSegment?: string | null;
			primaryContactName?: string | null;
			primaryContactEmail?: string | null;
			primaryContactPhone?: string | null;
			secondaryContactName?: string | null;
			secondaryContactEmail?: string | null;
			secondaryContactPhone?: string | null;
			accountManagerId?: number | null;
			accountManagerName?: string | null;
			accountManagerEmail?: string | null;
			accountManagerPhone?: string | null;
			updatedAt: any;
			renewalDate?: any | null;
			contractStartDate?: any | null;
			contractEndDate?: any | null;
			subscriptionType?: string | null;
			paymentTerms?: string | null;
			lastPurchaseDate?: any | null;
			totalPurchaseValue?: number | null;
			openOpportunities?: number | null;
			accountName: string;
			closedOpportunities?: number | null;
			activeContracts?: number | null;
			inactiveContracts?: number | null;
			isPartner: boolean;
			isCustomer: boolean;
			isProspect: boolean;
			industryVertical?: string | null;
			referralSource?: string | null;
			marketingBudget?: number | null;
			leadSource?: string | null;
			accountNumber: string;
			businessUnit?: string | null;
			accountStatus: AccountStatus;
			upsellOpportunities?: number | null;
			crossSellOpportunities?: number | null;
			competitor?: string | null;
			accountTier?: string | null;
			lastContactedDate?: any | null;
			customerSince?: any | null;
			loyaltyScore?: number | null;
			npsScore?: number | null;
			industry?: string | null;
			accountRegion?: string | null;
			preferredContactMethod?: string | null;
			renewalProbability?: number | null;
			strategicAccount: boolean;
			socialMediaHandle?: string | null;
			preferredLanguage?: string | null;
			timezone?: string | null;
			annualSpend?: number | null;
			engagementScore?: number | null;
			website?: string | null;
			phoneNumber?: string | null;
			email?: string | null;
			usersByAccountId: {
				__typename?: "UsersConnection";
				totalCount: number;
				nodes: Array<{
					__typename?: "User";
					nodeId: string;
					phoneNumber?: string | null;
					dateOfBirth?: any | null;
					gender?: string | null;
					jobTitle?: string | null;
					department?: string | null;
					isActive: boolean;
					isVerified: boolean;
					lastLoginDate?: any | null;
					profileImageUrl?: string | null;
					id: number;
					firstName: string;
					lastName: string;
					email: string;
				}>;
			};
			opportunitiesByAccountId: {
				__typename?: "OpportunitiesConnection";
				totalCount: number;
				nodes: Array<{
					__typename?: "Opportunity";
					id: number;
					createdAt: any;
					updatedAt: any;
					opportunityName: string;
					source?: string | null;
					closeDate?: any | null;
					stage: string;
					probability?: number | null;
					status: OpportunityStatus;
					userByOwnerId?: {
						__typename?: "User";
						id: number;
						lastName: string;
						firstName: string;
						email: string;
					} | null;
				}>;
			};
		}>;
	} | null;
};

export const AccountListDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "AccountList" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "filter" },
					},
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "AccountFilter" },
					},
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "after" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "Cursor" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "first" },
					},
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
				},
				{
					kind: "VariableDefinition",
					variable: {
						kind: "Variable",
						name: { kind: "Name", value: "orderBy" },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: { kind: "Name", value: "AccountsOrderBy" },
							},
						},
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "allAccounts" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "filter" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "filter" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "after" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "after" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "first" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "first" },
								},
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "orderBy" },
								value: {
									kind: "Variable",
									name: { kind: "Name", value: "orderBy" },
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "__typename" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "pageInfo" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "hasNextPage" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "hasPreviousPage" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "startCursor" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "endCursor" },
											},
										],
									},
								},
								{
									kind: "Field",
									name: { kind: "Name", value: "nodes" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "nodeId" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "billingAddress" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "shippingAddress" },
											},
											{ kind: "Field", name: { kind: "Name", value: "city" } },
											{ kind: "Field", name: { kind: "Name", value: "state" } },
											{
												kind: "Field",
												name: { kind: "Name", value: "postalCode" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "country" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "annualRevenue" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "numberOfEmployees" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "ownership" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "parentAccountId" },
											},
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{
												kind: "Field",
												name: { kind: "Name", value: "accountSource" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "description" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "createdDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "lastModifiedDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "lastActivityDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "rating" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "sicCode" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "tickerSymbol" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "ownershipType" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountType" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "createdAt" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "territory" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "marketSegment" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "primaryContactName" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "primaryContactEmail" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "primaryContactPhone" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "secondaryContactName" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "secondaryContactEmail" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "secondaryContactPhone" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountManagerId" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountManagerId" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountManagerName" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountManagerEmail" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountManagerPhone" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "updatedAt" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "renewalDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "contractStartDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "contractEndDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "subscriptionType" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "paymentTerms" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "lastPurchaseDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "totalPurchaseValue" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "openOpportunities" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountName" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "closedOpportunities" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "activeContracts" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "inactiveContracts" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "isPartner" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "isCustomer" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "isProspect" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "industryVertical" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "referralSource" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "marketingBudget" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "leadSource" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountNumber" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "businessUnit" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountStatus" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "upsellOpportunities" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "crossSellOpportunities" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "competitor" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountTier" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "lastContactedDate" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "customerSince" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "loyaltyScore" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "npsScore" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "industry" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "accountRegion" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "preferredContactMethod" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "renewalProbability" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "strategicAccount" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "socialMediaHandle" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "preferredLanguage" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "timezone" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "annualSpend" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "engagementScore" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "website" },
											},
											{
												kind: "Field",
												name: { kind: "Name", value: "phoneNumber" },
											},
											{ kind: "Field", name: { kind: "Name", value: "email" } },
											{
												kind: "Field",
												name: { kind: "Name", value: "usersByAccountId" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "totalCount" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "nodes" },
															selectionSet: {
																kind: "SelectionSet",
																selections: [
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "nodeId" },
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "phoneNumber",
																		},
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "dateOfBirth",
																		},
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "gender" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "jobTitle" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "jobTitle" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "department" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "isActive" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "isVerified" },
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "lastLoginDate",
																		},
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "profileImageUrl",
																		},
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "id" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "firstName" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "lastName" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "email" },
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: "Field",
												name: {
													kind: "Name",
													value: "opportunitiesByAccountId",
												},
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "totalCount" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "nodes" },
															selectionSet: {
																kind: "SelectionSet",
																selections: [
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "id" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "createdAt" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "updatedAt" },
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "opportunityName",
																		},
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "source" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "closeDate" },
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "stage" },
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "probability",
																		},
																	},
																	{
																		kind: "Field",
																		name: { kind: "Name", value: "status" },
																	},
																	{
																		kind: "Field",
																		name: {
																			kind: "Name",
																			value: "userByOwnerId",
																		},
																		selectionSet: {
																			kind: "SelectionSet",
																			selections: [
																				{
																					kind: "Field",
																					name: { kind: "Name", value: "id" },
																				},
																				{
																					kind: "Field",
																					name: {
																						kind: "Name",
																						value: "lastName",
																					},
																				},
																				{
																					kind: "Field",
																					name: {
																						kind: "Name",
																						value: "firstName",
																					},
																				},
																				{
																					kind: "Field",
																					name: {
																						kind: "Name",
																						value: "email",
																					},
																				},
																			],
																		},
																	},
																],
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AccountListQuery, AccountListQueryVariables>;
