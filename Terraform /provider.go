package main

import (
      "github.com/hashicorp/terraform/terraform"
      "github.com/hashicorp/terraform/helper/schema"

)

//Provider- This function initializes the provider schema and the config function 
func Provider() terraform.ResourceProvider {
        return &schema.Provider{
                Schema:       providerSchema(),
                ResourcesMap: providerResources(),
        }

}

//Provider schema- to set provider details
func providerSchema() map[string]*schema.Schema {
          return  map[string]*schema.Schema{
                     "username": {
                           Type:        schema.TypeString,
                           Required:    true,
                           Description: "administrator username",
                     },
                     "password": {
                           Type:        schema.TypeString,
                           Required:    true,
                           Description: "administrator password",
                     },
                     "tenant": {
                           Type:        schema.TypeString,
                           Required:    true,
                           Description: "specifies the tenant url token determine by the system administrator",
                     },
                     "host": {
                           Type:        schema.TypeString,
                           Required:    true,
                           Description: "host name.domain name of the vRealize automation server",
                     },
              }
}

func providerResources() map[string]*schema.Resource {
          return map[string]*schema.Resource{
                 "dummy_server": resourceServer(),
          }
}
