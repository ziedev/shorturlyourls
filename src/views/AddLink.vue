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
                                            <div class="form-group has-label">
                                                <label class="form-control-label">Short Link </label>
                                                    <h4 @click="doCopy(shortent)">{{shortent}}</h4>
                                               </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                    <center><base-button type="primary" @click="setLink()" size="md">Short Link</base-button></center>

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
import axios from 'axios'
import VueClipboard from 'vue-clipboard2';
import Vue from "vue";
  Vue.use(VueClipboard);
  export default {
    name: 'addLink',
    data() {
      return {
        shortent : '',
        links: [
        {
          original: '',
          short: '',
        }
        ]
      }
    },
     methods: {
    doCopy (url) {
        this.$copyText(url).then(function (e) {
          console.log(e)
        }, function (e) {
          
          console.log(e)
        })
      },
      alerter() {
          console.log(document.getElementById("shortLinkInput").value);
      },
      CopyAndEcho()
      {
          const shorter = document.getElementById("shortLinkInput").value;
          this.links.short = shorter;
          this.doCopy(shorter);
      },
          setLink () {
      axios
        .get("http://urys.xyz/yourls-api.php",{params: {
                username: "username",
                password: "password",
                action:   "shorturl",
                format:   "json",
                url:      this.links.original,
    } })
         .then(res =>{
               this.shortent = res.data.shorturl
               this.doCopy(res.data.shorturl);
        })
        .catch(err => console.error(err))
    },
  },

  };
</script>
<style></style>
