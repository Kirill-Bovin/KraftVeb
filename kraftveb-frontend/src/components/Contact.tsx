import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showPolicy, setShowPolicy] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.consent) {
      alert('Вы должны согласиться с политикой конфиденциальности');
      return;
    }

    setStatus('sending');
    try {
      await axios.post('/api/contacts/', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '', consent: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100" style={{ scrollMarginTop: '6rem' }}>
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Свяжитесь с нами</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Имя"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Телефон"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Сообщение"
            required
            className="w-full p-3 border rounded h-40"
          />

          <label className="flex items-start gap-2 text-sm">
            <input
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              required
            />
            <span>
              Я согласен с{' '}
              <button
                type="button"
                onClick={() => setShowPolicy(true)}
                className="text-blue-600 underline hover:text-blue-800"
              >
                политикой конфиденциальности
              </button>
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 bg-green-500 text-white font-semibold rounded"
          >
            {status === 'sending' ? 'Отправка...' : 'Отправить'}
          </button>
        </form>

        {status === 'success' && <p className="mt-4 text-green-600">Сообщение отправлено!</p>}
        {status === 'error' && <p className="mt-4 text-red-600">Ошибка отправки.</p>}
      </div>

      {/* ✅ Модальное окно политики */}
      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-2xl max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowPolicy(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Политика конфиденциальности</h3>
            <div className="space-y-4 text-sm text-gray-800">
              <p>Мы собираем только те данные, которые вы добровольно предоставляете через форму: имя, email, телефон, сообщение.</p>
              <p>Данные используются исключительно для связи с вами и оказания услуг. Мы не передаём ваши данные третьим лицам без законных оснований.</p>
              <p>Все данные защищены и обрабатываются в соответствии с ФЗ-152 «О персональных данных».</p>
              <p>Вы можете запросить удаление своих данных, написав нам на <a href="mailto:info@kraftveb.ru" className="text-blue-600 underline">info@kraftveb.ru</a>.</p>
              <p>Продолжая пользоваться сайтом, вы соглашаетесь с нашей политикой конфиденциальности.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;