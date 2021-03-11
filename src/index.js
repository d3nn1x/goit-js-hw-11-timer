import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  findDate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  findElements() {
    const timer = document.querySelector(`${this.selector}`);

    const daysEl = timer.querySelector('[data-value="days"]');
    const hoursEl = timer.querySelector('[data-value="hours"]');
    const minsEl = timer.querySelector('[data-value="mins"]');
    const secsEl = timer.querySelector('[data-value="secs"]');
    return { daysEl, hoursEl, minsEl, secsEl };
  }

  countDiff() {
    const currentDate = new Date();

    let time = this.targetDate - currentDate;

    const { days, hours, mins, secs } = this.findDate(time);

    const { secsEl, minsEl, hoursEl, daysEl } = this.findElements();

    daysEl.innerHTML = days.toString().padStart(2, 0);
    hoursEl.innerHTML = hours.toString().padStart(2, 0);
    minsEl.innerHTML = mins.toString().padStart(2, 0);
    secsEl.innerHTML = secs.toString().padStart(2, 0);
  }
  start() {
    this.countDiff();

    setInterval(() => {
      this.countDiff();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2021-12-31'),
});

timer.start();

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('2021-10-17'),
});

timer2.start();
