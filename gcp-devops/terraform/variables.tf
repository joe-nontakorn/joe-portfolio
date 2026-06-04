variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "instance_name" {
  description = "GCE Instance name"
  type        = string
  default     = "k3s-server"
}

variable "machine_type" {
  description = "GCE Machine type"
  type        = string
  default     = "e2-medium"
}

variable "boot_disk_image" {
  description = "Boot disk image"
  type        = string
  default     = "ubuntu-2404-lts-amd64"
}

variable "boot_disk_size" {
  description = "Boot disk size in GB"
  type        = number
  default     = 50
}

variable "static_ip_address" {
  description = "Static internal IP address"
  type        = string
  default     = "10.128.0.2"
}

variable "ssh_user" {
  description = "SSH username"
  type        = string
  default     = "nontakorn_kha"
}

variable "ssh_public_key_path" {
  description = "Path to SSH public key"
  type        = string
  default     = "~/.ssh/gcp_key.pub"
}

variable "allowed_ssh_cidrs" {
  description = "CIDR blocks allowed for SSH access"
  type        = list(string)
  default     = ["0.0.0.0/0"]
}
