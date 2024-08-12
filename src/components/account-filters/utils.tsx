import { startCase } from "lodash";
import type React from "react";
import type { Account } from "../../generated/graphql";
import {
	BooleanFilter,
	DateFilter,
	NumberFilter,
	type SharedFilterInputTypes,
	StatusFilter,
	StringFilter,
	TypeFilter,
} from "./filters";

export type AccountFilterNoRelations = Omit<
	Account,
	| "id"
	| "nodeId"
	| "__typename"
	| "opportunitiesByAccountId"
	| "usersByAccountId"
>;

export const fieldMappings: Record<
	keyof AccountFilterNoRelations,
	(props: SharedFilterInputTypes) => React.ReactElement
> = {
	/** Filter by the object’s `accountManagerEmail` field. */
	accountManagerEmail: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountManagerId` field. */
	accountManagerId: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `accountManagerName` field. */
	accountManagerName: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountManagerPhone` field. */
	accountManagerPhone: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountName` field. */
	accountName: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountNumber` field. */
	accountNumber: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountRegion` field. */
	accountRegion: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountSource` field. */
	accountSource: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountStatus` field. */
	accountStatus: (props) => <StatusFilter {...props} />,
	/** Filter by the object’s `accountTier` field. */
	accountTier: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `accountType` field. */
	accountType: (props) => <TypeFilter {...props} />,
	/** Filter by the object’s `activeContracts` field. */
	activeContracts: (props) => <NumberFilter {...props} />,
	/** Checks for all expressions in this list. */
	// and: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `annualRevenue` field. */
	annualRevenue: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `annualSpend` field. */
	annualSpend: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `billingAddress` field. */
	billingAddress: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `businessUnit` field. */
	businessUnit: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `city` field. */
	city: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `closedOpportunities` field. */
	closedOpportunities: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `competitor` field. */
	competitor: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `contractEndDate` field. */
	contractEndDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `contractStartDate` field. */
	contractStartDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `country` field. */
	country: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `createdAt` field. */
	createdAt: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `createdDate` field. */
	createdDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `crossSellOpportunities` field. */
	crossSellOpportunities: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `customerSince` field. */
	customerSince: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `description` field. */
	description: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `email` field. */
	email: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `engagementScore` field. */
	engagementScore: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `inactiveContracts` field. */
	inactiveContracts: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `industry` field. */
	industry: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `industryVertical` field. */
	industryVertical: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `isCustomer` field. */
	isCustomer: (props) => <BooleanFilter {...props} />,
	/** Filter by the object’s `isPartner` field. */
	isPartner: (props) => <BooleanFilter {...props} />,
	/** Filter by the object’s `isProspect` field. */
	isProspect: (props) => <BooleanFilter {...props} />,
	/** Filter by the object’s `lastActivityDate` field. */
	lastActivityDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `lastContactedDate` field. */
	lastContactedDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `lastModifiedDate` field. */
	lastModifiedDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `lastPurchaseDate` field. */
	lastPurchaseDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `leadSource` field. */
	leadSource: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `loyaltyScore` field. */
	loyaltyScore: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `marketSegment` field. */
	marketSegment: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `marketingBudget` field. */
	marketingBudget: (props) => <NumberFilter {...props} />,
	/** Negates the expression. */
	// not: InputMaybe<AccountFilter>;
	/** Filter by the object’s `npsScore` field. */
	npsScore: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `numberOfEmployees` field. */
	numberOfEmployees: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `openOpportunities` field. */
	openOpportunities: (props) => <NumberFilter {...props} />,
	/** Checks for any expressions in this list. */
	// or: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `ownership` field. */
	ownership: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `ownershipType` field. */
	ownershipType: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `parentAccountId` field. */
	parentAccountId: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `paymentTerms` field. */
	paymentTerms: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `phoneNumber` field. */
	phoneNumber: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `postalCode` field. */
	postalCode: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `preferredContactMethod` field. */
	preferredContactMethod: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `preferredLanguage` field. */
	preferredLanguage: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `primaryContactEmail` field. */
	primaryContactEmail: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `primaryContactName` field. */
	primaryContactName: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `primaryContactPhone` field. */
	primaryContactPhone: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `rating` field. */
	rating: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `referralSource` field. */
	referralSource: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `renewalDate` field. */
	renewalDate: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `renewalProbability` field. */
	renewalProbability: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `secondaryContactEmail` field. */
	secondaryContactEmail: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `secondaryContactName` field. */
	secondaryContactName: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `secondaryContactPhone` field. */
	secondaryContactPhone: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `shippingAddress` field. */
	shippingAddress: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `sicCode` field. */
	sicCode: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `socialMediaHandle` field. */
	socialMediaHandle: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `state` field. */
	state: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `strategicAccount` field. */
	strategicAccount: (props) => <BooleanFilter {...props} />,
	/** Filter by the object’s `subscriptionType` field. */
	subscriptionType: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `territory` field. */
	territory: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `tickerSymbol` field. */
	tickerSymbol: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `timezone` field. */
	timezone: (props) => <StringFilter {...props} />,
	/** Filter by the object’s `totalPurchaseValue` field. */
	totalPurchaseValue: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `updatedAt` field. */
	updatedAt: (props) => <DateFilter {...props} />,
	/** Filter by the object’s `upsellOpportunities` field. */
	upsellOpportunities: (props) => <NumberFilter {...props} />,
	/** Filter by the object’s `website` field. */
	website: (props) => <StringFilter {...props} />,
};

export const availableFields = Object.keys(fieldMappings).map((field) => ({
	id: field,
	label: startCase(field),
	value: field,
}));
