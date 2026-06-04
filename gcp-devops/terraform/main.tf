terraform {
  required_version = ">= 1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_compute_instance" "gcp_server" {
  name         = var.instance_name
  machine_type = var.machine_type
  zone         = "${var.region}-a"

  boot_disk {
    initialize_params {
      image = var.boot_disk_image
      size  = var.boot_disk_size
    }
  }

  network_interface {
    network    = "default"
    network_ip = var.static_ip_address

    access_config {
      nat_ip = google_compute_address.vm_address.address
    }
  }

  metadata = {
    ssh-keys = "${var.ssh_user}:${file(var.ssh_public_key_path)}"
  }

  tags = ["k3s", "devops", "docker"]

  service_account {
    scopes = ["cloud-platform"]
  }

  depends_on = [google_compute_address.vm_address]
}

resource "google_compute_address" "vm_address" {
  name   = "${var.instance_name}-ip"
  region = var.region
}

resource "google_compute_firewall" "allow_http" {
  name    = "allow-http"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["k3s"]
}

resource "google_compute_firewall" "allow_https" {
  name    = "allow-https"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["443"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["k3s"]
}

resource "google_compute_firewall" "allow_k3s" {
  name    = "allow-k3s"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["6443"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["k3s"]
}

resource "google_compute_firewall" "allow_ssh" {
  name    = "allow-ssh"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = var.allowed_ssh_cidrs
  target_tags   = ["k3s"]
}

resource "google_compute_firewall" "allow_dashboard" {
  name    = "allow-dashboard"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["30001"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["k3s"]
}
