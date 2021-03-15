<template>
  <div class="tooltip">
    <div class="logo"><img src="../../assets/images/icons/question.png" alt="">
    </div>
    <span class="tooltiptext"><strong>{{item.title}}</strong><br>
      {{item.desc}}</span>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props:['item']
}
</script>

<style scoped lang="scss">
.logo{
  max-width: 100px;
  img{
    width: 100%;
  }
}
.tooltip {
  //width: 548px;
  position: relative;
  display: inline-block;
  //background: #FFFFFF;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 548px;
  min-height: 86px;
  background: #FFFFFF;
  //background-color: #555;
  //color: #fff;
  //text-align: center;
  padding: 20px 25.27px 21px 25px;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 10%;
  margin-left: -5px;
  border-width: 11px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>
