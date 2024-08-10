/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Opportunity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Opportunity" DROP CONSTRAINT "Opportunity_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_accountId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Opportunity";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "account" (
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

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
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

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportunity" (
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

    CONSTRAINT "opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_accountNumber_key" ON "account"("accountNumber");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
