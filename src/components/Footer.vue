<template lang="html">
  <footer class="container-fluid">
    <div class="container">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
              <img
                id="Thapa-logo"
                :src="require('@/assets/images/logos/Thapa.jpg')"
                alt="Thapa-logo"
              >
            </a>
          </b-col>
          <b-col>
            <a
              v-b-modal.needHelp
              href="#needHelp"
              class="btn btn-footer need-help"
            >Need Help?</a>
          </b-col>
        </b-row>
        <b-row class="row legal">
          <b-col>
            <p>© 2019 Thapa Productions | All Rights Reserved</p>
          </b-col>
          <b-col>
            <ul class="links">
              <li>
                <a href="/terms-of-service">Terms of Use</a>
              </li>
              <li class="privacy-policy">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <b-modal
        id="needHelp"
        hide-footer
        hide-header
      >
        <h2>Need Help?</h2>
        <p>
          Mail us at
          <a href="mailto:ujjwalthapa2307@gmail.com">ujjwalthapa2307@gmail.com</a>
          or Call us at (090-3801-3909)
        </p>
      </b-modal>
    </div>
  </footer>
</template>

<script>
export default {
  name
}
</script>

<style scoped>
footer {
  background: #0071c5;
  padding: 20px;
  margin-top: 250px;
  clear: both;
  position: relative;
  height: 100px;
}
footer,
footer a,
footer p {
  color: #fff;
}

footer ul.links {
  font-size: 12px;
  margin: 0;
  padding: 0 2px;
  float: right;
}

footer ul.links li {
  display: inline-block;
  padding: 0 15px;
  list-style-type: none;
}
#Thapa-logo,
.logos {
  width: 50px;
  height: 58px;
}

.btn-footer {
  font-size: 1.8rem;
  border-radius: 8px;
  float: right;
  min-width: 150px;
  line-height: 30px;
  background-color: #4195d4;
}
</style>
