/*
  Warnings:

  - You are about to drop the column `coomplete` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "coomplete",
ADD COLUMN     "complete" BOOLEAN NOT NULL DEFAULT false;
