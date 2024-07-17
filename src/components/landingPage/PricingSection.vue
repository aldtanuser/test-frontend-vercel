<script setup>
import { useMouseInElement } from "@vueuse/core";
import { computed, ref } from "vue";
import vr2 from "../../assets/images/landing-page/vr2.mp4";
const target1 = ref(null);
const target2 = ref(null);

const {
  elementX: elementX1,
  elementY: elementY1,
  isOutside: isOutside1,
  elementHeight: elementHeight1,
  elementWidth: elementWidth1,
} = useMouseInElement(target1);

const {
  elementX: elementX2,
  elementY: elementY2,
  isOutside: isOutside2,
  elementHeight: elementHeight2,
  elementWidth: elementWidth2,
} = useMouseInElement(target2);

const cardTransform1 = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementX1.value / elementHeight1.value) * MAX_ROTATION
  ).toFixed(2); //handles x-axis
  const rY = (
    (elementY1.value / elementHeight1.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); //handles y-axis

  return isOutside1.value
    ? ""
    : `perspective(${elementWidth1.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const cardTransform2 = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementX2.value / elementHeight2.value) * MAX_ROTATION
  ).toFixed(2); //handles x-axis
  const rY = (
    (elementY2.value / elementHeight2.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); //handles y-axis

  return isOutside2.value
    ? ""
    : `perspective(${elementWidth2.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
  <div class="container pricing-section" style="z-index: 10">
    <video loop autoplay muted style="border-radius: 10px">
      <source :src="vr2" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="row" style="margin-inline: auto; width: max-content !important">
      <div class="pricing8 py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <h3 class="mb-3 csm-heading" style="font-weight: 900;">
                Pricing to make your Work Effective
              </h3>
              <h6 class="subtitle font-weight-normal csm-sub-heading">
                We offer 100% satisafaction and Money back Guarantee
              </h6>
            </div>
          </div>
          <!-- row  -->
          <div class="row mt-4 card-box">
            <!-- column  -->
            <div
              class="col-md-6 ml-auto pricing-box align-self-center"
              ref="target1"
              :style="{
                transform: cardTransform1,
                transition: 'transform 0.25s ease-out',
              }"
            >
              <div
                class="card mb-4 wrapper-pricing-card"
                style="background-color: transparent"
              >
                <div class="card-body text-center">
                  <h5 class="pricing-h-text pricing-h-text-starter" style="font-weight: 900;">
                    Starter Plan
                  </h5>
                  <hr class="pricing-hr pricing-hr-starter" />
                  <span class="pricing-price-number display-5">0</span
                    ><span class="pricing-currency">$</span>
                    <h6 class="pricing-sub-h-text">per 3 days / period</h6>
                  <div class="pricing-points">
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Duration: Accessible for 3 days
                      </p>
                    </div>
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Storage Allocation: Includes 1GB of storage space
                      </p>
                    </div>
                    <div class="d-flex flex-row">
                      <i
                      class="fa fa-check"
                      style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Payment: One-time payment only
                      </p>
                    </div>
                    <hr class="pricing-hr pricing-hr-starter" />
                    <p class="pricing-footer-text">Get a taste of our platform with the Starter Pack. Access for 3 days, 1GB storage, one-time payment.</p>
                    <!-- <div class="d-flex flex-row">
                      <i
                        class="fa fa-times"
                        style="font-size: 24px; color: rgba(253, 25, 25, 0.308)"
                      ></i>
                      <p class="pricing-point-text">
                        The Master license allows you to customize, store and
                        even host your website using your platform
                      </p>
                    </div>
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-times"
                        style="font-size: 24px; color: rgba(253, 25, 25, 0.308)"
                      ></i>
                      <p class="pricing-point-text">
                        The Master license allows you to customize, store and
                        even host your website using your platform
                      </p>
                    </div> -->
                  </div>
                </div>
                <RouterLink to="/login" class="pricing-submit-btn-starter pricing-submit-btn">CHOOSE PLAN</RouterLink>
                <p class="pricing-footer-text">Begin your journey to success now.</p>
              </div>
            </div>
            <!-- column  -->
            <!-- column  -->
            <div
              class="col-md-6 ml-auto pricing-box align-self-center"
              ref="target2"
              :style="{
                transform: cardTransform2,
                transition: 'transform 0.25s ease-out',
              }"
            >
              <div
                class="card mb-4 wrapper-pricing-card"
                style="background-color: transparent"
              >
                <div class="card-body text-center">
                  <h5 class="pricing-h-text pricing-h-text-pro" style="font-weight: 900;">Pro Plan</h5>
                  <hr class="pricing-hr pricing-hr-pro" />
                  <span class="pricing-price-number display-5">190</span
                  ><span class="pricing-currency">$</span>
                  <h6 class="pricing-sub-h-text">per year / period</h6>
                  <div class="pricing-points">
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Duration: Offers access for 1 year
                      </p>
                    </div>
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Storage Allocation: Includes a generous 5GB of storage
                      </p>
                    </div>
                    <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        Payment: Requires a one-time payment
                      </p>
                    </div>
                  <hr class="pricing-hr pricing-hr-pro" />
                <p class="pricing-footer-text">Upgrade to the Pro Pack for a full year of access. 5GB storage, one-time payment.</p>
                    <!-- <div class="d-flex flex-row">
                      <i
                        class="fa fa-check"
                        style="font-size: 24px; color: rgba(5, 253, 5, 0.329)"
                      ></i>
                      <p class="pricing-point-text">
                        The Master license allows you to customize, store and
                        even host your website using your platform
                      </p>
                    </div> -->
                  </div>
                </div>
                <RouterLink to="/#" class="pricing-submit-btn-pro pricing-submit-btn">CHOOSE PLAN</RouterLink>
                <p class="pricing-footer-text">Unlock your potential today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
.csm-heading {
  font-size: 50px;
  font-weight: 500;
  color: #d8c0ff;
}

.pricing-section {
  margin-top: -450px;
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
}

.pricing-section video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  opacity: 0.5;
  filter: blur(50px);
}

.csm-sub-heading {
  font-size: 16px;
  font-weight: 400;
  color: #d8c0ff;
  opacity: 0.7;
}
.wrapper-pricing-card {
  border: 2px solid rgba(83, 80, 80, 0.336) !important;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.507);
  padding: 20px 10px 20px 10px;
  border-radius: 70px !important;
  width: 450px;
}

.pricing-h-text {
  font-size: 35px;
  font-weight: 500;
  /* font-family: "Barlow Condensed", serif; */
}

.pricing-h-text-starter {
  background-image: linear-gradient(
    to left,
    rgb(255, 85, 178),
    rgb(162, 205, 240),
    rgb(147, 100, 255)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pricing-h-text-pro {
  background-image: linear-gradient(
    to left,
    rgb(228, 143, 228),
    rgb(240, 215, 162),
    rgb(114, 231, 37)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pricing-sub-h-text {
  font-size: 14px;
  font-weight: 500;
  color: #ffffffa9;
}

.pricing-price-number {
  color: #eee !important;
  font-weight: 700;
  font-size: 50px;
  /* font-family: "PT Serif Caption", sans-serif; */
}

.pricing-currency {
  color: #eee !important;
  font-weight: 700;
  font-size: 30px;
  opacity: 0.8;
  font-style: normal;
}

.pricing-submit-btn {
  margin: 0px 10px 8px 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 10px;
  display: block;
  border-radius: 80px;
  font-weight: 700;
  width: 250px;
  margin-inline: auto;
  text-decoration: none;
}

.pricing-submit-btn-pro {
  background-image: linear-gradient(
    to right,
    #ff6e7f 0%,
    #bfe9ff 51%,
    #ff6e7f 100%
  );
  text-shadow: 0 0 20px rgb(128, 21, 21);
  color: black;
  box-shadow: 0 0 0px #eee;
}

.pricing-submit-btn:hover {
  background-position: right center;
  color: #fff;
  transition: 0.5s;
  text-decoration: none;
}

.pricing-submit-btn-starter {
  background-image: linear-gradient(
    to right,
    #4776e6 0%,
    #d8c0ff 51%,
    #4776e6 100%
  );
  text-shadow: 0 0 20px rgb(128, 21, 21);
  color: black;
  box-shadow: 0 0 0px #eee;
}

.pricing-points {
  margin-top: 30px;
}

.pricing-point-text {
  text-align: left;
  color: #eee;
  text-shadow: 0 0 20px rgb(2, 2, 2);
  line-height: 1.5;
  padding-left: 10px;
  font-size: 14px;
}

.pricing-footer-text {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.7;
  color: #eee;
}

.pricing-hr {
  border: 0;
  border-radius: 5px;
  height: 3px;
  filter: blur(1px);
}

.pricing-hr-starter {
  background: linear-gradient(90deg, #4776e6 0%, #d8c0ff 35%, #4776e6 100%);
}

.pricing-hr-pro {
  background: linear-gradient(90deg, #ff6e7f 0%, #bfe9ff 35%, #ff6e7f 100%);
}

.card-box {
  margin: auto;
}

.pricing-box {
  margin: auto !important;
  text-align: -webkit-center;
}
</style>
