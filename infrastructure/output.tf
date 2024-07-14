output "server_host" {
  value = linode_instance.web.ip_address
  description = "linode instance public IP address"
}

output "linode_password" {
  value = random_password.linode_password.result
  description = "linode instance root password"
  sensitive = true
}

