output "instance_external_ip" {
  description = "External IP address of the GCE instance"
  value       = google_compute_address.vm_address.address
}

output "instance_internal_ip" {
  description = "Internal IP address of the GCE instance"
  value       = google_compute_instance.gcp_server.network_interface[0].network_ip
}

output "instance_name" {
  description = "Name of the GCE instance"
  value       = google_compute_instance.gcp_server.name
}

output "instance_zone" {
  description = "Zone of the GCE instance"
  value       = google_compute_instance.gcp_server.zone
}

output "ssh_command" {
  description = "SSH command to connect to the instance"
  value       = "ssh -i ~/.ssh/gcp_key ${var.ssh_user}@${google_compute_address.vm_address.address}"
}

output "k3s_api_endpoint" {
  description = "K3s API endpoint"
  value       = "https://${google_compute_address.vm_address.address}:6443"
}

output "application_url" {
  description = "Application URL"
  value       = "http://${google_compute_address.vm_address.address}"
}

output "dashboard_url" {
  description = "Kubernetes Dashboard URL"
  value       = "https://${google_compute_address.vm_address.address}:30001"
}
