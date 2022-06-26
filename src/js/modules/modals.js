import clearFields from "./clearFields";

const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modalWindow = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              btnCalc = document.querySelector('.popup_calc_button'),
              btnEnd = document.querySelector('.popup_calc_profile_button');

        

        trigger.forEach(item => {
            item.addEventListener('click', (elem) => {
                if (elem.target) {
                    elem.preventDefault();
                }
    
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                if ((item !== btnCalc) && (item !== btnEnd)){
                    showModal(modalWindow);
                } else {
                    if ((item === btnCalc) && state.width && state.height) {
                        showModal(modalWindow);
                    } else {
                        clearFields('input', '.balcon_icons_img', '.popup_calc_content', 'do_image_more', 0);
                    }
                    if ((item === btnEnd) && state.profile) {
                        showModal(modalWindow);
                    } else {
                        clearFields('input', '.balcon_icons_img', '.popup_calc_content', 'do_image_more', 0);
                    }
                }

            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });

    }

    function showModalByTime (selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    function showModal(modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // function calcScroll() {         /* Функция для расчета ширины скролла */
    //     let div = document.createElement('div');

    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.overflowY = 'scroll';
    //     div.style.visibility = 'hidden';

    //     document.body.appendChild(div);
    //     let scrollWidth = div.offsetWidth - div.clientWidth;
    //     div.remove();

    //     return scrollWidth;
    // }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export function autoCloseModal(modalWindowSelector) {
    const modalWindowCalc = document.querySelectorAll(modalWindowSelector);
    modalWindowCalc.forEach(item => {
        setTimeout(() => {
        item.style.display = 'none';
        document.body.style.overflow = '';
    }, 2000);
    });
}

export default modals;