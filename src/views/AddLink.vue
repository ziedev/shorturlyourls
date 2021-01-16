<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 100px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                

                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Short a new Link</h3>
                                </div>
                                
                            </div>
                        </div>
                        <template>
                            <form>
                                <h6 class="heading-small text-muted mb-4">Link information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Original Link"
                                                        placeholder="Original Link"
                                                        input-classes="form-control-alternative"
                                                        v-model="links.original"
                                            />
                                        </div>
                                     </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Short Link"
                                                        placeholder="Short Link"
                                                        input-classes="form-control-alternative"
                                                        v-model="links.short"
                                            />
                                        </div>
                                        
                                    </div>
                                    <center><base-button type="primary" size="md">Short Link</base-button></center>
                                </div>
                               
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
  export default {
    name: 'addLink',
    data() {
      return {
        links: {
          original: '',
          short: '',
        }
      }
    },
     methods: {
     getting() {
	var api_url  = "http://urys.xyz/yourls-api.php";
    var response = $.get( api_url, {
    username: "username",
    password: "password",
    action:   "shorturl",
    format:   "json",
    url:      this.links.original,
    },
    
    // callback function that will deal with the server response
    function( data) {
        console.log(response);
        // now do something with the data, for instance show new short URL:
        console.log("FROM : "+data.shorturl);
        this.links.short = data.shorturl;
        console.log("Saved : "+this.links.short);
    }
);
}
  },
  };
</script>
<style></style>
