package main


import (
      "github.com/hashicorp/terraform/helper/schema"
)

//resourceServer- use for create resource fields
func resourceServer() *schema.Resource {
            return &schema.Resource{
                   Create: resourceServerCreate,
		   Read:   resourceServerRead,
		   Update: resourceServerUpdate,
                   Delete: resourceServerDelete,

                   Schema : setResourceSchema(),
           }
}

//setresourceSchema - use for update the catalog template
//and replace the values with user define values added in .tf file
func setResourceSchema() map[string]*schema.Schema {
	return map[string]*schema.Schema{
		"catalog_name": {
			Type:     schema.TypeString,
			Optional: true,
		},
		"catalog_id": {
			Type:     schema.TypeString,
			Computed: true,
			Optional: true,
		},
                "address": {
                        Type:    schema.TypeString,
                        Required: true,
                },
		"wait_timeout": {
			Type:     schema.TypeInt,
			Optional: true,
			Default:  15,
		},
		"deployment_configuration": {
			Type:     schema.TypeMap,
			Optional: true,
			Elem: &schema.Schema{
				Type:     schema.TypeMap,
				Optional: true,
				Elem:     schema.TypeString,
			},
		},
		"resource_configuration": {
			Type:     schema.TypeMap,
			Optional: true,
			Computed: true,
			Elem: &schema.Schema{
				Type:     schema.TypeMap,
				Optional: true,
				Elem:     schema.TypeString,
			},
		},
		"catalog_configuration": {
			Type:     schema.TypeMap,
			Optional: true,
			Elem: &schema.Schema{
				Type:     schema.TypeMap,
				Optional: true,
				Elem:     schema.TypeString,
			},
		},
	}
}

//to create resource and do all related things for create resource
//Terraform call - terraform  apply
func resourceServerCreate(d *schema.ResourceData, meta interface{}) error {
        address := d.Get("address").(string)
        d.SetId(address)
        return nil
}

func resourceServerRead(d *schema.ResourceData, meta interface{}) error {
        return nil
}

func resourceServerUpdate(d *schema.ResourceData, meta interface{}) error {
        return nil
}

func resourceServerDelete(d *schema.ResourceData, meta interface{}) error {
        return nil
}

