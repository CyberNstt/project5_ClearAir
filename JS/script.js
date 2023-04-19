//popUps
function popUpPhone() {
	const backGround = document.querySelector('.wrapper');
	const popupPhoneOpen = document.querySelector('.header_menu_connect-btn');
	const popupPhone = document.querySelector('.header_popupPhone');
	const popupPhoneClose = document.querySelector('.header_popupPhone-closeBtn-body');

	popupPhoneOpen.addEventListener('click', (open) => {
		popupPhone.classList.add('header_popupPhone__active');
		backGround.classList.add('wrapper__active');
	});
	popupPhoneClose.addEventListener(
		'click', (close) => {
			popupPhone.classList.remove('header_popupPhone__active');
			backGround.classList.remove('wrapper__active');
		});
}
popUpPhone()

function popUpRequest() {
	const backGround = document.querySelector('.wrapper');
	const popupPhoneOpen = document.querySelector('.header_limiter_main_requestBtn-btn');
	const popupPhone = document.querySelector('.header_popupRequest');
	const popupPhoneClose = document.querySelector('.header_popupRequest-closeBtn-body');

	popupPhoneOpen.addEventListener('click', (open) => {
		popupPhone.classList.add('header_popupRequest__active');
		backGround.classList.add('wrapper__active');
	});
	popupPhoneClose.addEventListener(
		'click', (close) => {
			popupPhone.classList.remove('header_popupRequest__active');
			backGround.classList.remove('wrapper__active');
		});
}
popUpRequest()

// menuOnScroll
function menuOnScroll() {
	const docHeader = document.querySelector('.header_menu');
	let screen = document.body.clientWidth;

	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		if (scrollTop > 10) {
			docHeader.classList.add('header_menu__active');
		} else {
			docHeader.classList.remove('header_menu__active');
		}
	})
}
menuOnScroll()

// menuBurger
function menuBurger() {
	const backGround = document.querySelector('.wrapper');
	const menu = document.querySelector('.header_menu');
	const burger = document.querySelector('.header_menu_burger');
	const logo = document.querySelector('.header_menu_logo');
	const nav = document.querySelector('.header_menu_nav');
	const connect = document.querySelector('.header_menu_connect');
	const closeBody = document.querySelector('body');

	burger.addEventListener('click', (toggle) => {
		console.log('yes')
		burger.classList.toggle('header_menu_burger__activeBurger');
		menu.classList.toggle('header_menu__activeBurger');
		logo.classList.toggle('header_menu_logo__activeBurger');
		nav.classList.toggle('header_menu_nav__activeBurger');
		connect.classList.toggle('header_menu_connect__activeBurger');
		backGround.classList.toggle('wrapper__activeBurger');
	})
}
menuBurger()

//telePhoneChecker
document.addEventListener("DOMContentLoaded", function () {
	let phoneInputs = document.querySelectorAll('input[data-tel-input]');

	let getInputNumbersValue = function (input) {
		// Return stripped input value — just numbers
		return input.value.replace(/\D/g, '');
	}

	let onPhonePaste = function (e) {
		let input = e.target,
			inputNumbersValue = getInputNumbersValue(input);
		let pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			let pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
				// formatting will be in onPhoneInput handler
				input.value = inputNumbersValue;
				return;
			}
		}
	}

	let onPhoneInput = function (e) {
		let input = e.target,
			inputNumbersValue = getInputNumbersValue(input),
			selectionStart = input.selectionStart,
			formattedInputValue = "";

		if (!inputNumbersValue) {
			return input.value = "";
		}

		if (input.value.length != selectionStart) {
			// Editing in the middle of input, not last symbol
			if (e.data && /\D/g.test(e.data)) {
				// Attempt to input non-numeric symbol
				input.value = inputNumbersValue;
			}
			return;
		}

		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
			let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
			formattedInputValue = input.value = firstSymbols + " ";
			if (inputNumbersValue.length > 1) {
				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
		}
		input.value = formattedInputValue;
	}
	let onPhoneKeyDown = function (e) {
		// Clear input after remove last symbol
		let inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode == 8 && inputValue.length == 1) {
			e.target.value = "";
		}
	}
	for (let phoneInput of phoneInputs) {
		phoneInput.addEventListener('keydown', onPhoneKeyDown);
		phoneInput.addEventListener('input', onPhoneInput, false);
		phoneInput.addEventListener('paste', onPhonePaste, false);
	}
})

// servicesSwitcher
const ventBtn = document.querySelector('.services_listBlock_elementBtns-ventBtn');
const condBtn = document.querySelector('.services_listBlock_elementBtns-condBtn');
const ventUl = document.querySelector('.services_listBlock_element_ulVent');
const ventImg = document.querySelector('.services_listBlock_element_bg-imgFirst');
const ventImgMobile = document.querySelector('.services_listBlock_element_bg-imgMobileFirst');
const condUl = document.querySelector('.services_listBlock_element_ulCond');
const condImg = document.querySelector('.services_listBlock_element_bg-imgSecond');
const condImgMobile = document.querySelector('.services_listBlock_element_bg-imgMobileSecond');

ventBtn.addEventListener('click', () => {
	condBtn.classList.remove('services_listBlock_elementBtns-condBtn__active');
	condUl.classList.remove('services_listBlock_element_ulCond__active');
	condImg.classList.remove('services_listBlock_element_bg-imgSecond__active');
	ventBtn.classList.add('services_listBlock_elementBtns-ventBtn__active');
	ventUl.classList.add('services_listBlock_element_ulVent__active');
	ventImg.classList.add('services_listBlock_element_bg-imgFirst__active');

	if (document.body.clientWidth < 950) {
		condImgMobile.classList.remove('services_listBlock_element_bg-imgMobileSecond__active');
		ventImgMobile.classList.add('services_listBlock_element_bg-imgMobileFirst__active');
	}
})

condBtn.addEventListener('click', () => {
	ventBtn.classList.remove('services_listBlock_elementBtns-ventBtn__active');
	ventUl.classList.remove('services_listBlock_element_ulVent__active');
	ventImg.classList.remove('services_listBlock_element_bg-imgFirst__active');
	condBtn.classList.add('services_listBlock_elementBtns-condBtn__active');
	condUl.classList.add('services_listBlock_element_ulCond__active');
	condImg.classList.add('services_listBlock_element_bg-imgSecond__active');
	if (document.body.clientWidth < 950) {
		ventImgMobile.classList.remove('services_listBlock_element_bg-imgMobileFirst__active');
		condImgMobile.classList.add('services_listBlock_element_bg-imgMobileSecond__active');
	}
})


