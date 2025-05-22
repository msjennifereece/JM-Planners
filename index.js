// TOGGLE MODAL



let isModalOpen = false;

function toggleModal(event, plannerId) {
  event.preventDefault();
  const data = modalData[plannerId];

  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-subtitle-left').textContent = data.subtitleL;
  document.getElementById('modal-subtitle-right').textContent = data.subtitleR;
  document.getElementById('modal-description').innerHTML = data.description;

  const modalRight = document.getElementById("modal-right");

  // Set background color
  modalRight.style.backgroundColor = data.backgroundColor;

  // Remove text-white from previous planner if it was applied
  modalRight.classList.remove('text-white');

  // Set font color (inline or via class)
  if (data.fontColor === '#ffffff' || data.fontColor === 'white') {
    modalRight.classList.add('text-white');
    modalRight.style.color = ''; // let the class take over
  } else {
    modalRight.style.color = data.fontColor;
  }

  // Update close icon color
  document.querySelector('.fa-xmark').style.color = data.fontColor;

  // Update modal images
  const imageContainer = document.getElementById("modal-images");
  imageContainer.innerHTML = "";
  data.image.forEach(src => {
    const fig = document.createElement("figure");
    fig.classList.add("modal__img--wrapper");
    fig.innerHTML = `<img class="modal__img" src="${src}" alt="">`;
    imageContainer.appendChild(fig);
  });

  document.body.classList.add('modal--open');
}


function closeModal() {
  document.body.classList.remove('modal--open')
}

function outsideClick(event) {
  if (event.target.classList.contains('modal__overlay')) {
    closeModal()
  }
} 


const modalData = {
  focus: {
    title: 'Focus Mode',
    subtitleL: 'A Self Discipline & Productivity Planner',
    subtitleR: 'Build discipline. Block distractions. Execute daily.',
    description: `The Focus Mode Planner is your go-to tool for mastering self-discipline and building unstoppable momentum. In just 90 days you'll create structure, stay accountable to your goals, and finally follow through on your plans - without the overwhelm.
    <br>
    Designed to eliminate distractions and build laser-sharp focus, each daily page guides you through a simple yet powerful process: plan your top prioties, block you time, reflect on your habits, and stay honest about what's helping or holding you back. Whether you're rebuilding routines or leveling up your productivity, Focus Mode helps you operate like your highest self.`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#dfe4e7',
    fontColor: '#242424'
  },
  
  reset: {
    title: 'Reset & Rebuild',
    subtitleL: 'A Recovery Planner',
    subtitleR: 'Let go of the chaos. Rebuild your foundation',
    description: `Life can known us down - and when it does, we don't need fluff. We need da reset. The <b>Reset & Rebuild Planner</b> is a 90-day trasnformation system to help you regain clarity, rebuild consistency, and heal through structure.
    <br>
    This planner is part journal, part recovery system. It includes deep reflection prompts, gentle habit tracking, mental reset check-ins, and weekly evaluations to help you reconnect with yourself. Whether you're recovering from burnout, heartbreak, overwhelm, or just feel lost - this planner walks with you as you rebuild your strength, focus, and peavce`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#77b3b7',
    fontColor: '#ffffff' 
  },
  glow: {
    title: 'Glow-Up Guide',
    subtitleL: 'The 12-Week Self Improvement',
    subtitleR: 'Level up your confidence, mindset, and habits - inside and out.',
    description: `The Glow-Up Guide isn’t just a planner. It’s a 90-day lifestyle upgrade. Designed to help you grow in self-love, discipline, and confidence, this planner blends productivity with mindset shifts and feminine empowerment.
    <br>
    Each week includes goal setting, beauty and wellness habit tracking, mindset journal prompts, and daily space to reflect on how you’re showing up for yourself. Whether you’re working on your glow-up physically, emotionally, or mentally — this planner gives you the structure and encouragement to evolve gracefully.`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#f0e2dd',
    fontColor: '#242424'
  },
  excuses: {
    title: 'No More Excuses',
    subtitleL: 'An Accountability Planner',
    subtitleR: 'Build discipline. Block distractions. Execute daily.',
    description: `If you’re tired of talking about your goals and ready to start crushing them — the No More Excuses Planner is for you. This 90-day planner is a daily kick in the ass for your future self.
    <br>
    Built for pure execution, this planner keeps you accountable through daily reflection, top priorities, progress checklists, and personal challenges. Each week you’ll assess your performance, track results, and adjust with intention. It’s not always comfortable — but it’s designed to push you into action and destroy procrastination, one page at a time.`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#36485f',
    fontColor: '#ffffff'
  },
  couple: {
    title: `The Couple's Planner`,
    subtitleL: 'Improve Communication, Deeper Connection',
    subtitleR: 'Grow stronger together. Communicate. Connect. Reflect',
    description: `The Couple’s Planner is a guided 90-day journal for partners who want to build deeper connection, stronger habits, and intentional growth as a team. Whether you’re dating, living together, or married — this planner helps you both show up better for each other.
    <br>
    It includes weekly relationship check-ins, communication prompts, shared goal planning, gratitude pages, and guided reflections. Use it to spark meaningful conversations, strengthen your bond, and keep growing together through life’s busy seasons.`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#463936',
    fontColor: '#ffffff'
  },
  hustle: {
    title: 'Side Hustle Blueprint Planner',
    subtitleL: 'Plan smarter. Execute faster. Grow your dream hustle in 90 days.',
    subtitleR: 'Build discipline. Block distractions. Execute daily.',
    description: `You don’t need another idea — you need a system. The Side Hustle Blueprint Planner is a 90-day planning tool for aspiring entrepreneurs and creatives ready to turn their hustle into real results.
    <br>
    This planner breaks your big vision into weekly goals, daily execution steps, income tracking, marketing planning, and progress reviews. Whether you’re launching a digital product, building a service, or just testing your idea — this planner helps you move with clarity and confidence while balancing life.`,
    image: ['/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png', '/assets/modal planner page.png'],
    backgroundColor: '#d5dae0',
    fontColor: '#242424'
  },
}