module "aws-dev" {
  source = "../../infra"
  aws_instance = "t2.micro"
  aws_region = "us-east-2"
  aws_ami = "ami-05fb0b8c1424f266b"
  ssh_key = "alura-iac-prod"
  environment = "prod"
}