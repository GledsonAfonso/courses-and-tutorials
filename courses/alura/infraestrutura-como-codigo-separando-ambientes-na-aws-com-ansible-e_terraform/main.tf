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
  region  = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = "t2.micro"
  key_name = "user-test"

  tags = {
    Name = "Terraform Ansible Python"
  }
}

resource "aws_key_pair" "ssh_key" {
  key_name = dev
  public_key = file("~/.ssh/alura-iac-dev.pub")
}
