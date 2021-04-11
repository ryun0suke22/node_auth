#!/usr/bin/env sh
set -eu

# generate secret key and CSR.
openssl req -new -newkey rsa:2048 -nodes -subj "/O=Node Cookbook" -keyout key.pem -out csr.pem

# generate self-signed certificate.
openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem

