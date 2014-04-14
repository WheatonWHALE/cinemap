#!/usr/bin/env bash
npm_packages_to_install=(
    nodemon
    zerorpc
)

pip_packages_to_install=(
    zerorpc
    pymongo
)

echo "NPM Installs"
sudo chown -R vagrant /home/vagrant/.npm
npm install -g ${npm_packages_to_install[@]}

echo "PIP Installs"
pip install ${pip_packages_to_install[@]}
