module "aws-dev" {
  source = "../../infra"
  aws_instance = "t2.micro"
  aws_region = "us-east-1"
  ssh_key = "alura-iac-dev"
  environment = "dev"
}