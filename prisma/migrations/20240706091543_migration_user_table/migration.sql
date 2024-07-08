/*
  Warnings:

  - You are about to drop the column `isActive` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `roles` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "isActive",
DROP COLUMN "roles";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['client']::TEXT[];
