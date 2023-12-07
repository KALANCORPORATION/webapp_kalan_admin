########################
######### npm ##########
########################

npi:
	npm install --legacy-peer-deps

npb:
	npm run build

npm: npi npb
