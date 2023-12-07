########################
####### Nginx #########
########################

copy_nginx:
	cp webapp /etc/nginx/sites-available/

restart_nginx:
	systemctl restart nginx

apply_nginx: copy_nginx restart_nginx