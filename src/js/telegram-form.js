const TOKEN = "6739608960:AAFP458-2x_TA1fjxOQxeDGagWHW0YoaPeY";
const CHAT_ID = "-1002096127227";
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let message = `Заявка з сайту!\n`;
    message += `Ім'я: ${this.name.value}\nНомер телефону:${this.phone.value}`;
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: `${message}`
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.phone.value = '';
            this.name.value = '';
            window.location.href = 'thanks.html';

        })
        .catch(error => {
            console.log(error);
        });
});