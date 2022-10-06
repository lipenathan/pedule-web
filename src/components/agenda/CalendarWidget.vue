<template>
  <main class="card">
    <section class="card__header">
      <h3>{{month}}</h3>
    </section>
    <section class="card__body">
      <ul class="card__body--days">
        <li>D</li>
        <li>S</li>
        <li>T</li>
        <li>Q</li>
        <li>Q</li>
        <li>S</li>
        <li>S</li>
      </ul>
      <ul class="card__body--dates">
        <li class="prev">30</li>
        <li class="prev">31</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li class="active">7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li class="notification">16 <span>5</span></li>
        <li>17</li>
        <li>18</li>
        <li class="notification">19 <span>6</span></li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li class="next">1</li>
        <li class="next">2</li>
      </ul>
    </section>
  </main>
</template>
<script>
export default ({
    data() {
      return {
        month: "Setembro"
      }
    }
})
</script>
<style lang="scss" scoped>

$bg-color: #78ACCD;
$white: #ffffff;
$black: #333333;
$gray: #7D8994;
$orange: #DE6E46;
$purple: #AE5989;
$primary: #1498d5;

$radius: 50%;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 10px;
    font-family: sans-serif;
    line-height: 1.6;
}

ul {
    list-style: none;
}

.card__header {
  display: flex !important;;
  justify-content: center!important;
}

.card {
  border-radius: 20px;
    background: $primary;
    width: 15%;
    max-width: 15rem;
    min-height: 16rem;
    display: grid;
    box-shadow: 0 1rem 2.5rem rgb(27, 64, 94);

    &__header {
        padding: 0 1.25rem;
        color: $black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__body {
        padding: 1rem 1rem;
        border-top: 1px solid #ccc;

        &--days {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: rem;

            li {
                flex: 1;
                font-weight: bold;
                text-transform: uppercase;
                text-align: center;
                color: $black;
                margin: 0 1px;
            }
        }
        &--dates {
          margin-top: 10px;
            display: grid;
            gap: 4px;
            grid-template-columns: repeat(7, 1fr);
            justify-items: center;
            text-align: center;
            li {
                width: 1.4rem;
                height: 1.3rem;
                display: grid;
                place-items: center;
                font-weight: bold;
                position: relative;
            }
            li.prev,
            li.next {
                color: #ccc;
            }
            li.active {
                background: $orange;
                color: $white;
                border-radius: $radius;
            }
            li.notification {
                border: 2px solid;
                border-radius: $radius;
                border-color: $orange;
                span {
                    position: absolute;
                    top: -0.75rem;
                    right: -0.5rem;
                    width: 0.50rem;
                    height: 0.50rem;
                    font-size: 1.2rem;
                    color: $white;
                    border-radius: $radius;
                    background: $orange;
                }
            }
        }
    }
    &__footer {
        @extend .card__header;
        color: $black;
        font-weight: bold;
        .add {
            text-decoration: none;
            color: inherit;
            border: 2px solid $orange;
            border-radius: $radius;
            width: 3.5rem;
            height: 3.5rem;
            padding-top: 0.25rem;
            display: grid;
            place-items: center;
        }
    }
}
</style>