<template>
  <main class="card">
    <section class="card__header">
      <img
        id="icon-calendar-nav"
        src="../../../public/img/left-arrow.png"
        @click="calendarPrevMonth()"
      />
      <h3>{{ monthDesc }}</h3>
      <img
        id="icon-calendar-nav"
        src="../../../public/img/right-arrow.png"
        @click="calendarNextMonth()"
      />
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
        <!-- <li class="prev">30</li>
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
        <li class="next">2</li> -->
        <li v-for="day in calendar" :key="day.day" :class="day.month">
          {{ day.day }}
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      date: null,
      monthDesc: "",
      month: null,
      calendar: [],
    };
  },
  created() {
    this.calendarInit();
  },
  methods: {
    getDayNumber() {
      return this.date.getDate();
    },
    getDaysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    getMonthFirstDayWeek() {
      return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    },
    getMonthLastDayWeek() {
      return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    },
    getMonthLastDays(qt) {
      let date = this.date;
      date = new Date(this.date.setMonth(this.date.getMonth()-1));
      let days = [];
      for (let i = 0; i < qt; i++) {
        days.push({
          day: new Date(date.getFullYear(), date.getMonth(), -i).getDate(),
          month: "prev",
        });
      }
      return days;
    },
    getMonthFirstDays(qt) {
      let date = this.date;
      date = new Date(this.date.setMonth(this.date.getMonth()-1));
      let days = [];
      for (let i = 1; i <= qt; i++) {
        days.push({
          day: new Date(date.getFullYear(), date.getMonth() + 1, i).getDate(),
          month: "next",
        });
      }
      return days;
    },
    getFirstDayNumber() {
      return calendarControl.firstDay().getDay() + 1;
    },
    getLastDayNumber() {
      return this.getMonthLastDayWeek();
    },
    getCalendar() {
      this.month = this.date.getMonth();
      this.monthDesc = this.getStringMonth(this.month);

      let firstDay = this.getMonthFirstDayWeek();
      let lastDay = this.getMonthLastDayWeek();

      let countLastDaysPrevMonth = (0 - firstDay.getDay()) * -1;
      let countFirstDaysNextMonth = 6 - lastDay.getDay();

      let lastDaysPrevMonth = this.getMonthLastDays(countLastDaysPrevMonth);
      for (let i = lastDaysPrevMonth.length - 1; i >= 0; i--) {
        this.calendar.push(lastDaysPrevMonth[i]);
      }
      let daysInMonth = this.getDaysInMonth(
        this.date.getMonth() + 1,
        this.date.getFullYear()
      );
      for (let i = 1; i <= daysInMonth; i++) {
        if (i == this.getDayNumber()) {
          this.calendar.push({ day: i, month: "notification" });
        } else {
          this.calendar.push({ day: i, month: "" });
        }
      }
      let firstDaysNextMonth = this.getMonthFirstDays(countFirstDaysNextMonth);
      for (let i = 0; i < firstDaysNextMonth.length; i++) {
        this.calendar.push(firstDaysNextMonth[i]);
      }
    },
    calendarInit() {
      this.date = new Date();
      this.getCalendar();
    },
    calendarPrevMonth() {
      this.calendar.splice(0)
      this.date = new Date(this.date.setMonth(this.date.getMonth()-1));
      this.getCalendar();
    },
    calendarNextMonth() {
      this.calendar.splice(0)
      this.date = new Date(this.date.setMonth(this.date.getMonth()+1));
      this.getCalendar();
    },
    getStringMonth(number) {
      switch (number) {
        case 0:
          return "Janeiro";
        case 1:
          return "Fevereiro";
        case 2:
          return "Março";
        case 3:
          return "Abril";
        case 4:
          return "Maio";
        case 5:
          return "Junho";
        case 6:
          return "Julho";
        case 7:
          return "Agosto";
        case 8:
          return "Setembro";
        case 9:
          return "Outubro";
        case 10:
          return "Novembro";
        case 11:
          return "Dezembro";
        default:
          "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$bg-color: #78accd;
$white: #ffffff;
$black: #333333;
$gray: #7d8994;
$orange: #de6e46;
$purple: #ae5989;
$primary: #1498d5;
$tertiary: #ef4565;

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
  display: flex !important;
}

#icon-calendar-nav {
  height: auto;
  width: 0.75rem;
  cursor: pointer;
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
        background: $tertiary;
        color: $white;
        border-radius: $radius;
      }
      li.notification {
        border: 2px solid;
        border-radius: $radius;
        border-color: $tertiary;
        span {
          position: absolute;
          top: -0.75rem;
          right: -0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          font-size: 1.2rem;
          color: $white;
          border-radius: $radius;
          background: $tertiary;
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