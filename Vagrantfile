# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/wily64"
  config.vm.box_url = "http://192.168.1.7/vagrant/boxes/wily64v1.box"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.provision :puppet
end
