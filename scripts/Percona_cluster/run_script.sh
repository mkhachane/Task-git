#!/bin/bash
echo "Launching aws instances of type m3.medium"
ansible-playbook setup/launch-instance/ec2_launch.yml -vvv
echo "After launched instances wait for 10 second...."
sleep 10

echo "Write all IP's into configure files"
ansible-playbook setup/configure/write_ip_config.yml -vvv
echo "Wait..."
sleep 5

echo "Install and Configuring cluster's...."
ansible-playbook setup/configure/install_config.yml -vvv
echo "All Done."

