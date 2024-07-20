resource "random_password" "linode_password" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "linode_instance" "web" {
  label           = local.instance_name
  image           = local.instance_image
  region          = local.instance_region
  authorized_keys = [ var.linode_public_keys ]
  type            = local.instance_type
  root_pass       = random_password.linode_password.result
  tags  = ["linux-server", local.instance_name]
}
