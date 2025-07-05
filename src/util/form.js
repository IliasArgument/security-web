const tg = {
  token: process.env.MY_SECRET_KEY,
  chat_id: "1010054584",
};

document
  .getElementById("contacts-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.client_name, 'form');
    const name = form.client_name.value.trim();
    const phone = form.client_phone.value.trim();
    const msg = form.message.value.trim();

    const text = `Новое сообщение:\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${msg}`;
    console.log(text, "text");
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tg.chat_id, text }),
      });

      const data = await res.json();
      if (data.ok) {
        alert("Сообщение отправлено 👍");
        form.reset();
      } else {
        console.error(data);
        alert("Ошибка при отправке!");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка сети!");
    }
  });
