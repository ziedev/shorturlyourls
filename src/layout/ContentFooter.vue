<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a> &
          <a href="https://www.binarcode.com" class="font-weight-bold ml-1" target="_blank">Binar Code</a> &
          Code By <a href="https://www.ziedmaaloul.site/resume-biographie-cv-de-zied-maaloul/" class="font-weight-bold ml-1" target="_blank">Zied Maaloul</a>  
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://www.ziedmaaloul.site" class="nav-link" target="_blank">Zied Maaloul</a>
          </li>
          <li class="nav-item">
            <a href="https://www.ziedmaaloul.site/resume-biographie-cv-de-zied-maaloul/" class="nav-link" target="_blank">Développer</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
