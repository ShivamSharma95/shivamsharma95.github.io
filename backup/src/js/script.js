document.addEventListener("DOMContentLoaded", function () {
  preventEnterInTextArea();
  const links = document.querySelectorAll(".scroll-link");
  scrollingForLinks(links);
  const logoBtn = document.querySelector(".logo-btn");
  scrollingForLogo(logoBtn);
  const phoneInputField = document.querySelector("#contact_number");
  const phoneInput = getPhoneInput(phoneInputField);
  if (typeof emailjs !== "undefined") {
    emailjs.init("WhBln0ytb5twdWSXL");
    submitContactForm(phoneInput);
  } else {
    console.error("❌ EmailJS SDK not loaded — check your <script> CDN path.");
  }

  showSlides(slideIndex);



});
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function preventEnterInTextArea() {
  document.getElementById("message").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.stopPropagation();
    }
  });
}

function submitContactForm(phoneInput) {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var selectedCountryData = phoneInput.getSelectedCountryData();
      var countryCode = selectedCountryData.dialCode;
      console.log("Country Dial Code:", countryCode);
      const formData = {
        from_name: contactForm.from_name.value,
        from_email: contactForm.from_email.value,
        contact_number: "+" + countryCode + contactForm.contact_number.value,
        message: contactForm.message.value,
      };

      emailjs
        .send("service_ch3913m", "template_cmpi89g", formData)
        .then(() => {
          handleEmailSuccess(contactForm);
        })
        .catch((error) => {
          handleEmailFailure(error);
        });
    });
  }
}

function handleEmailFailure(error) {
  console.error("❌ Failed to send email:", error);
  showToast("Oops! Something went wrong. Please try again later.", "error");
}

function handleEmailSuccess(contactForm) {
  showToast("Thank you for reaching out! I'll get back to you soon.", "success");
  contactForm.reset();
}

function getPhoneInput(phoneInputField) {
  return window.intlTelInput(phoneInputField, {
    autoPlaceholder: "polite",
    preferredCountries: ["us", "gb", "in"],
    showFlags: true,
    initialCountry: "auto",
    geoIpLookup: function (callback) {
      fetch("https://ipapi.co/json")
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback("in"));
    }, utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"

  });
}

function scrollingForLogo(logoBtn) {
  if (logoBtn) {
    logoBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function scrollingForLinks(links) {
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
