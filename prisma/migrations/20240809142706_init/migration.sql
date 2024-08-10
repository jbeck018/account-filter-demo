-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('LEAD', 'PROSPECT', 'CUSTOMER', 'CHURNED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER', 'MODERATOR', 'GUEST');

-- CreateEnum
CREATE TYPE "OpportunityStatus" AS ENUM ('OPEN', 'WON', 'LOST', 'IN_PROGRESS', 'ON_HOLD', 'CLOSED');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "industry" TEXT,
    "website" TEXT,
    "phoneNumber" TEXT,
    "email" TEXT,
    "billingAddress" TEXT,
    "shippingAddress" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "annualRevenue" DOUBLE PRECISION,
    "numberOfEmployees" INTEGER,
    "ownership" TEXT,
    "parentAccountId" INTEGER,
    "accountSource" TEXT,
    "description" TEXT,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModifiedDate" TIMESTAMP(3) NOT NULL,
    "lastActivityDate" TIMESTAMP(3),
    "rating" INTEGER,
    "sicCode" TEXT,
    "tickerSymbol" TEXT,
    "ownershipType" TEXT,
    "accountType" "AccountType",
    "territory" TEXT,
    "marketSegment" TEXT,
    "primaryContactName" TEXT,
    "primaryContactEmail" TEXT,
    "primaryContactPhone" TEXT,
    "secondaryContactName" TEXT,
    "secondaryContactEmail" TEXT,
    "secondaryContactPhone" TEXT,
    "accountManagerId" INTEGER,
    "accountManagerName" TEXT,
    "accountManagerEmail" TEXT,
    "accountManagerPhone" TEXT,
    "renewalDate" TIMESTAMP(3),
    "contractStartDate" TIMESTAMP(3),
    "contractEndDate" TIMESTAMP(3),
    "subscriptionType" TEXT,
    "paymentTerms" TEXT,
    "lastPurchaseDate" TIMESTAMP(3),
    "totalPurchaseValue" DOUBLE PRECISION,
    "openOpportunities" INTEGER,
    "closedOpportunities" INTEGER,
    "activeContracts" INTEGER,
    "inactiveContracts" INTEGER,
    "isPartner" BOOLEAN NOT NULL DEFAULT false,
    "isCustomer" BOOLEAN NOT NULL DEFAULT true,
    "isProspect" BOOLEAN NOT NULL DEFAULT false,
    "industryVertical" TEXT,
    "referralSource" TEXT,
    "marketingBudget" DOUBLE PRECISION,
    "leadSource" TEXT,
    "businessUnit" TEXT,
    "accountStatus" "AccountStatus" NOT NULL,
    "upsellOpportunities" INTEGER,
    "crossSellOpportunities" INTEGER,
    "competitor" TEXT,
    "accountTier" TEXT,
    "lastContactedDate" TIMESTAMP(3),
    "customerSince" TIMESTAMP(3),
    "loyaltyScore" INTEGER,
    "npsScore" INTEGER,
    "accountRegion" TEXT,
    "preferredContactMethod" TEXT,
    "renewalProbability" DOUBLE PRECISION,
    "strategicAccount" BOOLEAN NOT NULL DEFAULT false,
    "socialMediaHandle" TEXT,
    "preferredLanguage" TEXT,
    "timezone" TEXT,
    "annualSpend" DOUBLE PRECISION,
    "engagementScore" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" TEXT,
    "jobTitle" TEXT,
    "department" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "lastLoginDate" TIMESTAMP(3),
    "profileImageUrl" TEXT,
    "bio" TEXT,
    "streetAddress" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "linkedinProfile" TEXT,
    "twitterHandle" TEXT,
    "facebookProfile" TEXT,
    "preferredLanguage" TEXT,
    "timezone" TEXT,
    "loginCount" INTEGER NOT NULL DEFAULT 0,
    "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
    "lastPasswordChangeDate" TIMESTAMP(3),
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" SERIAL NOT NULL,
    "opportunityName" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "closeDate" TIMESTAMP(3),
    "stage" TEXT NOT NULL,
    "probability" DOUBLE PRECISION,
    "status" "OpportunityStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "source" TEXT,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountNumber_key" ON "Account"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
