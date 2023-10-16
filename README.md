# Real-Estate-Listing
An estate record contain the following fields:
Title
Description
Price
Property_type: Apartment/Home/Cottage/Farm House
Listing_type: eg. rent or for sale
Bedrooms
property_id
  The following API routes:
 
/estates (method: GET): This should retrieve all estate records 
/estates (method: POST):  This route should create a new estate record.     
/estates (method: DELETE): This route should delete all estate records.
/estate/property_type (method: GET with query string specifying property type): This route should return all estates with a particular property type.   
/estate/bedrooms (method: GET with query string specifying n ): This route returns all the estates with bedrooms > n.    
/estate (method: GET | use params or query string: property_id): This route should fetch the record of a particular estate.    
/estate (method: PUT |  use params or query string: property_id): This route should replace an estate record with another estate
 record.  
/estate (method: PATCH | use params or query string: property_id): This route should update some fields of an estate record.
/estate (method: DELETE | use params or query string: property_id): This route should delete the record of an estate.
/estate/cheapest (method: GET | use query string or params specifying n): This route should sort records of n properties in increasing order based on price.

Api documentation:- https://documenter.getpostman.com/view/30484480/2s9YR6ZtTM
