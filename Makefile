########################
######### npm ##########
########################

npi:
	npm install --legacy-peer-deps

npb:
	npm run build

npm: npi npb

########################
######## Nginx #########
########################

copy_nginx:
	cp webapp /etc/nginx/sites-available/

restart_nginx:
	systemctl restart nginx

apply_nginx: copy_nginx restart_nginx