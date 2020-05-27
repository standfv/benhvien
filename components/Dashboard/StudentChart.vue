<template>
  <div>
    <h2 class="mt-4 text-2xl font-bold text-gray-800">
      Biểu đồ sức khỏe
    </h2>
    <div class="randomChartjs py-4">
      <trend-chart
        :datasets="datasets"
        :grid="grid"
        :labels="labels"
        :min="0"
        :interactive="true"
        @mouse-move="onMouseMove"
        class="random-chart"
      ></trend-chart>
      <div
        id="pop"
        role="tooltip"
        ref="tooltip"
        class="tooltip"
        :class="{ 'is-active': tooltipData }"
      >
        <div class="tooltip-container" v-if="tooltipData">
          <strong class="uppercase text-sm mb-1"> Đợt đo {{ labels.xLabels[tooltipData.index] }}</strong>
          <div class="tooltip-data">
            <div class="tooltip-data-item tooltip-data-item--1">
              <span class="lg:text-md text-xs"> Cao: {{ tooltipData.data[0] }} <small>(cm)</small> </span>
            </div>
            <div class="tooltip-data-item tooltip-data-item--2">
              <span class="lg:text-md text-xs"> Nặng: {{ tooltipData.data[1] }} <small>(kg)</small> </span>
            </div>
            <div class="tooltip-data-item tooltip-data-item--3">
              <span class="lg:text-md text-xs"> BMI: {{ tooltipData.data[2] }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Popper from "popper.js";
window.Popper = Popper;
export default {
  name: "StudentChart",
  props: ["height", "weight", "bmi"],
  data() {
    return {
      datasets: [
        {
          data: [120.4, 123, this.height],
          smooth: true,
          showPoints: true,
          fill: true,
          className: "cHeight"
        },
        {
          data: [41, 43, this.weight],
          smooth: true,
          showPoints: true,
          className: "cWeight"
        },
        {
          data: [25.2, 33.2, this.bmi],
          smooth: true,
          showPoints: true,
          className: "cBMI"
        }
      ],
      grid: {
        verticalLines: true,
        horizontalLines: true
      },
      labels: {
        xLabels: ["22/03/2020", "22/04/2020", "22/05/2020"],
        yLabels: 3,
        yLabelsTextFormatter: val => Math.round(val * 100) / 100
      },
      tooltipData: null,
      popper: null,
      popperIsActive: false
    };
  },
  mounted() {
    this.initPopper();
  },
  methods: {
    initPopper() {
      const chart = document.querySelector(".random-chart");
      const ref = chart.querySelector(".active-line");
      const tooltip = this.$refs.tooltip;
      this.popper = new Popper(ref, tooltip, {
        placement: "right",
        modifiers: {
          offset: { offset: "0,10" },
          preventOverflow: {
            boundariesElement: chart
          }
        }
      });
    },
    onMouseMove(params) {
      this.popperIsActive = !!params;
      this.popper.scheduleUpdate();
      this.tooltipData = params || null;
    }
  }
};
</script>
<style lang="scss">
.randomChartjs {
  width: 100%;
  background: #ffffff;
  .vtc {
    height: 250px;
    font-size: 12px;
    @media (min-width: 699px) {
      height: 320px;
    }
  }
  .labels {
    stroke: rgba(0, 0, 0, 0.05);
  }
  .active-line {
    stroke: rgba(0, 0, 0, 0.2);
  }
  .point {
    stroke-width: 2;
    transition: stroke-width 0.2s;
  }
  .point.is-active {
    stroke-width: 5;
  }
  .cHeight {
    .stroke {
      stroke: #fbac91;
      stroke-width: 2;
    }
    .fill {
      fill: #fbac91;
      opacity: 0.05;
    }
    .point {
      fill: #fbac91;
      stroke: #fbac91;
    }
  }
  .cWeight {
    .stroke {
      stroke: #fbe1b6;
      stroke-width: 2;
    }
    .fill {
      fill: #fbe1b6;
      opacity: 0.05;
    }
    .point {
      fill: #fbe1b6;
      stroke: #fbe1b6;
    }
  }
  .cBMI {
    .stroke {
      stroke: #7fdfd4;
      stroke-width: 2;
    }
    .fill {
      fill: #7fdfd4;
      opacity: 0.05;
    }
    .point {
      fill: #7fdfd4;
      stroke: #7fdfd4;
    }
  }

  .tooltip {
    &:not(.is-active) {
      display: none;
    }
    padding: 10px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    &-data {
      display: flex;
      &-item {
        display: flex;
        align-items: center;
        &:not(:first-child) {
          margin-left: 20px;
        }
        &:before {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
        &--1:before {
          background: #fbac91;
        }
        &--2:before {
          background: #fbe1b6;
        }
        &--3:before {
          background: #7fdfd4;
        }
      }
    }
  }
}
</style>
