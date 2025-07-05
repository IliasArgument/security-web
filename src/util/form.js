document
  .getElementById("contacts-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.client_name.value.trim();
    const phone = form.client_phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !message) {
      alert("Пожалуйста, заполните все поля.");
      return; // Не отправляем запрос
    }

    try {
      const res = await fetch("/api/send-message.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await res.json();

      if (data.success) {
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
