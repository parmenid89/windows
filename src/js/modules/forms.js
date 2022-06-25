import checkNumInputs from './checkNumInputs';
import {autoCloseModal} from './modals';
import clearFields from './clearFields';


const forms = (state) => {
    const form = document.querySelectorAll('form');
          

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'loading',
        success: 'thanks, we will call you soon',
        failure: 'something go wrong'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };
    

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData("./assets/server.php", formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {statusMessage.textContent = message.failure;})
                .finally(() => {
                    clearFields('input', '.balcon_icons_img', '.popup_calc_content', 'do_image_more', 0);
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                    autoCloseModal('[data-modal]');
                    for (let key in state) {
                        delete state[key];
                    }
                });
        });
    });
};


export default forms;