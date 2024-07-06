-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['client']::TEXT[];
