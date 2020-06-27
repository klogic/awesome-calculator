<template>
  <div id="awesome-calculator-app" class="container">
    <div id="result" class="row ">
      <div class="input-group input-group-lg">
        <input type="text" disabled="true" class="form-control" placeholder="0" />
      </div>
    </div>
    <div id="calculator-btn">
      <div id="first-row" class="row btn-style-1">
        <div id="ac-btn" class="col btn btn-input">
          <div>
            AC
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            +/-
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            %
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            /
          </div>
        </div>
      </div>
      <div id="second-row" class="row btn-style-2">
        <div id="ac-btn" class="col btn btn-input">
          <div>
            7
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            8
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            9
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            X
          </div>
        </div>
      </div>
      <div id="third-row" class="row btn-style-2">
        <div id="ac-btn" class="col btn btn-input">
          <div>
            4
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            5
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            6
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            -
          </div>
        </div>
      </div>
      <div id="forth-row" class="row btn-style-2">
        <div id="ac-btn" class="col btn btn-input">
          <div>
            1
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            2
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            3
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            +
          </div>
        </div>
      </div>
      <div id="fifth-row" class="row btn-style-2">
        <div id="ac-btn" class="col-6 btn btn-input">
          <div>
            0
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            .
          </div>
        </div>
        <div id="ac-btn" class="col btn btn-input">
          <div>
            =
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#calculator-btn .row .col:last-child div {
  background-color: #f59f0b;
}
#calculator-btn div {
  color: #e7e7e8;
  text-align: center;
}
#calculator-btn .row {
  height: 48px;
}
.btn-style-1 div {
  background-color: #424548;
}
.btn-style-2 div {
  background-color: #616264;
}
.btn-input {
  font-weight: 500;
  font-size: 20px;
  padding: 0px;
  border: 0px;
  border-radius: 0;
}
.btn-input div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 1px 1px #2f3236;
}
#result input {
  border-radius: 0px;
  text-align: right;
  font-size: 50px;
  height: 58px;
  background-color: #2e3134;
  border-color: #2e3134;
}
#result input::placeholder {
  color: #f9f9f9;
}
.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
