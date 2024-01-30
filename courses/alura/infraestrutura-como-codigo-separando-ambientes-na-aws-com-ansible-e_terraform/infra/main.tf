terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "default"
  region  = var.aws_region
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = var.aws_instance
  key_name = var.ssh_key

  tags = {
    Name = "Terraform Ansible Python"
  }
}

resource "aws_key_pair" "ssh_key" {
  key_name = var.ssh_key
  public_key = file("${var.ssh_key}.pub")
}
