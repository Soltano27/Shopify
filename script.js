const select = (h) => document.querySelector("." + h);
const selectAll = (h) => document.querySelectorAll("." + h);
const cancelPlanIcon = select("cancel-plan");

const planContainer = select("select-plan-container");

const setupSteps = select("setup-steps");

const accordionSwitch = select("accordion-control");

const allStep = selectAll("check-manipulator");

const allActionBtn = selectAll("checkbox");
const allProgress = selectAll("progress");

const progressNumber = select("progress-number");

const popup = select("notification-logo-box");
const profilePopup = select("store-name");
const profileContainer = select("store-profile-container");
const alertPopup = select("alert-popup");

const accordionControl = selectAll("accordion-control");

cancelPlanIcon.addEventListener("click", () => {
  planContainer.style.visibility = "hidden";
});

allStep.forEach((step) => {
  step.addEventListener("click", () => {
    allStep.forEach((step) => {
      step.classList.remove("manipulator");
    });
    step.classList.add("manipulator");
  });
});

let i = 0;

allActionBtn.forEach((btn) => {
  let clicked = 0;

  btn.addEventListener("click", () => {
    ++clicked;

    if (clicked % 2 === 0) {
      setTimeout(() => {
        btn.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 6"
                  /></svg >`;

        btn.style.transform = "rotate(360deg)";
      }, 200);

      --i;
    } else if (clicked % 2 === 1) {
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#000"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;

      setTimeout(() => {
        btn.innerHTML = ` <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`;
      }, 200);
      ++i;
    }

    progressNumber.textContent = i <= 5 ? i : 5;
    const allProgressToArray = Array.from(allProgress);
    allProgressToArray.forEach((bar) => bar.classList.remove("active"));
    allProgressToArray.slice(0, i).forEach((bar) => {
      bar.classList.add("active");
    });
  });
});

document.addEventListener("click", function (e) {
  const notificationLogoBox = e.target.closest(".notification-logo-box");
  const profilePopup = e.target.closest(".store-name");

  if (notificationLogoBox) {
    profileContainer.classList.remove("visible");
    alertPopup.classList.toggle("visible");
  } else if (profilePopup) {
    profileContainer.classList.toggle("visible");
    alertPopup.classList.remove("visible");
  } else {
    alertPopup.classList.remove("visible");
    profileContainer.classList.remove("visible");
  }
});

accordionControl.forEach((control) => {
  control.addEventListener("click", () => {
    setupSteps.classList.toggle("setup-step-inactive");
    accordionControl.forEach((innerControl) => {
      innerControl.classList.toggle("control-on");
    });
  });
});
 
