insert into properties (propName, propDesc, addressInput, cityInput, stateInput, zipInput, urlInput, loanInput, mortgageInput, rentInput)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)

returning *;

