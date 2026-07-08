SELECT
  ingredients.name
FROM
  ingredients
  JOIN suppliers ON ingredients.supplier_id = suppliers.supplier_id
WHERE
  suppliers.name = 'Patty''s Premium Meats';