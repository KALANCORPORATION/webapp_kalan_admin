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
	cp app-admin-kalan /etc/nginx/sites-available/
	ln -sf /etc/nginx/sites-available/app-admin-kalan /etc/nginx/sites-enabled/app-admin-kalan

restart_nginx:
	systemctl restart nginx

apply_nginx: copy_nginx restart_nginx