<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            All Short Links
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="Links">
        <template slot="columns">
          <th>Short</th>
          <th>Title / Original</th>
          <th>Clicks</th>
          <th>Date/Time</th>
        </template>

        <template slot-scope="{row}">
           <th class="budget" @click="doCopy(row.ShortLink)">
             <div class="media align-items-center">
             <div class="media-body">
                <span class="name mb-0 text-sm">{{row.ShortLink}}</span> 
              </div>
            </div>
           
          </th>
          <td scope="row">
            <div class="media align-items-center">
             <div class="media-body">
                <span class="name mb-0 text-sm">{{row.OriginalLink.substring(0,40)}}...</span> <br>
                
              </div>
            </div>
            <span>{{row.Title.substring(0,40)}}...</span>
          </td>
          <td>
            <div class="avatar-group">
              {{row.Clicks}}
            </div>
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.Time}}</span>
            </div>
          </td>
        </template>

      </base-table>
    </div>

   

  </div>
</template>
<script>
  import axios from 'axios';
  import VueClipboard from 'vue-clipboard2';
  import Vue from "vue";
  Vue.use(VueClipboard);
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      }
    },
    data() {
      return {
        Links: [],
        tableData: [
            {
            img: 'img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            pro : 'qjqjjjq',
            budget: '$2200 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          }
        ]
      }
    },
    mounted: function () {
    this.getAllLinks();
  },
    methods : {
        getAllLinks () {
      axios
        .get('https://www.urys.xyz/getall.php')
        .then(res => (this.Links = res.data.links))
        .catch(err => console.error(err))
    },
   doCopy (url) {
        this.$copyText(url).then(function (e) {
        
          console.log(e)
        }, function (e) {
          
          console.log(e)
        })
      }
    }
  }
</script>
<style>
</style>
