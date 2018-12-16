#!/bin/bash
echo "Launching aws instances of type t2.micro and m3.medium"
ansible-playbook launch_instance/ec2_launch.yml -vvv
echo "After launched instances wait for 20 second...."
sleep 20
echo "Configuring instances...."
ansible-playbook configure/configure.yml -vvv
echo "All Done."

