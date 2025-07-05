export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не разрешён" });
  }

  const token = process.env.MY_SECRET_KEY;
  const chat_id = "1010054584";

  const { name, phone, message } = req.body;

  const text = `Новое сообщение:\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
console.log(text, 'api text')
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id, text }),
    });

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({ error: "Ошибка при отправке в Telegram", details: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Ошибка сервера", details: err });
  }
}
