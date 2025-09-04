-- Migration script to fix statut_terrain column
-- Run this after the server starts successfully

-- Update existing terrain records to have default statut_terrain = 1 (titre)
UPDATE terrain 
SET statut_terrain = 1 
WHERE statut_terrain IS NULL;

-- Verify the update
SELECT COUNT(*) as total_records, 
       COUNT(statut_terrain) as records_with_statut,
       COUNT(*) - COUNT(statut_terrain) as null_statut_records
FROM terrain;
