// DIOL-STOM Master Interactive Logic (Global Components)

window.diolClinic = {
  // Booking modal state
  modalOpen: false,
  modalService: 'Первичная консультация и 3D-осмотр',
  modalDoctor: 'Любой свободный специалист',
  patientName: '',
  patientPhone: '',
  patientDate: '',
  
  openBooking(service = '', doctor = '') {
    if (service) this.modalService = service;
    if (doctor) this.modalDoctor = doctor;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeBooking() {
    this.modalOpen = false;
    document.body.style.overflow = '';
  },

  submitBooking(e) {
    e.preventDefault();
    if (!this.patientName || !this.patientPhone) {
      alert('Пожалуйста, укажите имя и телефон');
      return;
    }

    const message = encodeURIComponent(
      `Здравствуйте! Хочу записаться на прием в Diol-Stom.\n` +
      `👤 Пациент: ${this.patientName}\n` +
      `📞 Телефон: ${this.patientPhone}\n` +
      `🦷 Услуга: ${this.modalService}\n` +
      `👨‍⚕️ Врач: ${this.modalDoctor}\n` +
      (this.patientDate ? `📅 Желаемое время: ${this.patientDate}\n` : '') +
      `\nОтправлено с официального сайта diolstom.kz`
    );

    window.open(`https://wa.me/77770337068?text=${message}`, '_blank');
    this.closeBooking();
    this.patientName = '';
    this.patientPhone = '';
    this.patientDate = '';
  },

  // Interactive Before/After slider
  sliderPos: 50,
  isDragging: false,
  
  initSlider(el) {
    if (!el) return;
    const move = (e) => {
      if (!this.isDragging) return;
      const rect = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let pct = ((clientX - rect.left) / rect.width) * 100;
      if (pct < 5) pct = 5;
      if (pct > 95) pct = 95;
      this.sliderPos = pct;
    };

    el.addEventListener('mousedown', () => this.isDragging = true);
    window.addEventListener('mouseup', () => this.isDragging = false);
    el.addEventListener('mousemove', move);

    el.addEventListener('touchstart', () => this.isDragging = true, { passive: true });
    window.addEventListener('touchend', () => this.isDragging = false);
    el.addEventListener('touchmove', move, { passive: true });
  },

  // Kaspi Calculator
  kaspiService: 200000,
  kaspiQty: 1,
  kaspiMonths: 12,

  get totalKaspiSum() {
    return this.kaspiService * this.kaspiQty;
  },

  get monthlyKaspiPayment() {
    return Math.ceil(this.totalKaspiSum / this.kaspiMonths);
  },

  formatMoney(amount) {
    return amount.toLocaleString('ru-KZ') + ' ₸';
  },

  openKaspiWhatsApp() {
    const text = encodeURIComponent(
      `Здравствуйте! Рассчитал рассрочку Kaspi на сайте Diol-Stom:\n` +
      `💰 Сумма: ${this.formatMoney(this.totalKaspiSum)}\n` +
      `📅 Срок: ${this.kaspiMonths} мес. (платеж ${this.formatMoney(this.monthlyKaspiPayment)}/мес)\n` +
      `Хочу оформить прием и зафиксировать условия.`
    );
    window.open(`https://wa.me/77770337068?text=${text}`, '_blank');
  }
};

// Initialize Lucide icons on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
