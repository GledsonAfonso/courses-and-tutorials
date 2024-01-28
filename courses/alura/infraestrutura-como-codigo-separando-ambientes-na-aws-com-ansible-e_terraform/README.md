# Infraestrutura como código: Separando ambientes na AWS com Ansible e Terraform

Part 2 of the an introductory course about Terraform and Ansible.

## Generating the SSH keys to use this

You will need to create two pairs of SSH keys to use this project, one for the development environment, and another for the production enviroment. To do this, run:

```shell
ssh-keygen
```

Follow the steps and choose a unique name with environment that the key is related to. That will generate a pair of keys, one public and one private. Remember to create that for each environment (development and production).

After completing this process, update the `main.tf` file to use the key names that you choose.