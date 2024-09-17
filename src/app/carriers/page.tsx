"use client";

import { useState } from 'react';

export default function Anket() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const analyzeResults = (answers: Record<string, string>) => {
    const categories = {
      Engineering: 0,
      Teaching: 0,
      Healthcare: 0,
      Sports: 0,
      Arts: 0,
      Business: 0,
      Law: 0,
      Others: 0,
    };

    const weights = {
      question1: { Engineering: 1, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question2: { Engineering: 1, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question3: { Engineering: 0, Teaching: 1, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question4: { Engineering: 0, Teaching: 1, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question5: { Engineering: 0, Teaching: 0, Healthcare: 1, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question6: { Engineering: 0, Teaching: 0, Healthcare: 1, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question7: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 1, Arts: 0, Business: 0, Law: 0 },
      question8: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 1, Arts: 0, Business: 0, Law: 0 },
      question9: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 1, Business: 0, Law: 0 },
      question10: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 1, Business: 0, Law: 0 },
      question11: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 1, Law: 0 },
      question12: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 1, Law: 0 },
      question13: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 1 },
      question14: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 1 },
      question15: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 1, Law: 0 },
      question16: { Engineering: 1, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question17: { Engineering: 0, Teaching: 1, Healthcare: 0, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question18: { Engineering: 0, Teaching: 0, Healthcare: 1, Sports: 0, Arts: 0, Business: 0, Law: 0 },
      question19: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 0, Arts: 1, Business: 0, Law: 0 },
      question20: { Engineering: 0, Teaching: 0, Healthcare: 0, Sports: 1, Arts: 0, Business: 0, Law: 0 },
    };

    Object.keys(answers).forEach(question => {
      const answerValue = parseInt(answers[question] || '0');
      Object.keys(categories).forEach(category => {
        categories[category] += (answerValue * (weights[question][category] || 0));
      });
    });

    const maxCategory = Object.keys(categories).reduce((a, b) => categories[a] > categories[b] ? a : b);

    switch (maxCategory) {
      case 'Engineering':
        return 'Mühendislik alanında güçlü bir profile sahipsiniz. Bu alanda yazılım, inşaat, makine, elektronik gibi farklı dallarda başarılı olabilirsiniz.';
      case 'Teaching':
        return 'Öğretmenlik ve eğitim alanında potansiyeliniz yüksek. Eğitim teknolojileri, özel eğitim, çocuk gelişimi gibi alanlarda fırsatlar bulabilirsiniz.';
      case 'Healthcare':
        return 'Sağlık sektöründe başarılı olabilirsiniz. Doktorluk, hemşirelik, fizyoterapi, diyetisyenlik gibi alanlar ilginizi çekebilir.';
      case 'Sports':
        return 'Spor ve fiziksel aktivitelere olan ilginiz yüksek. Spor antrenörlüğü, spor yönetimi veya rehabilitasyon gibi kariyer seçenekleri olabilir.';
      case 'Arts':
        return 'Sanat ve yaratıcılık alanında yetenekleriniz dikkat çekici. Grafik tasarım, moda, müzik, sinema gibi yaratıcı alanlarda başarılı olabilirsiniz.';
      case 'Business':
        return 'İş dünyasında başarılı olma potansiyeliniz var. Yönetim, girişimcilik, pazarlama veya finans gibi alanlarda başarılı olabilirsiniz.';
      case 'Law':
        return 'Hukuk ve adalet alanında çalışmak için uygun bir profiliniz var. Avukatlık, hakimlik, danışmanlık gibi alanlarda kendinizi geliştirebilirsiniz.';
      default:
        return 'Farklı kariyer alanlarını keşfetmek için daha fazla bilgi toplamanız gerekebilir.';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = analyzeResults(answers);
    setResult(result);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-transparent">
           <nav className="w-full flex justify-between items-center bg-transparent p-4 shadow-lg">
        <div className="text-white text-2xl font-bold">
          Brand
        </div>
        <ul className="hidden sm:flex gap-8 text-white">
          <li><a href="/" className="hover:text-gray-300">Anasayfa</a></li>
          <li><a href="#" className="hover:text-gray-300">Hakkımızda</a></li>
          <li><a href="/" className="hover:text-gray-300">Servislerimiz</a></li>
          <li><a href="#" className="hover:text-gray-300">İletişim</a></li>
        </ul>
        <button className="sm:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </nav>
<div className=' rounded-lg  w-full max-w-2xl mt-5'>
<aside className="hidden lg:block w-4/4 sticky top-8 ">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Reklam Alanı</h3>
          <div className="bg-gray-300 h-40 flex items-center justify-center">
            <span className="text-gray-600">Reklam İçeriği</span>
          </div>
        </div>
      </aside>
</div>



      <div className="bg-opacity-90 bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-5">

        <h1 className="text-3xl font-bold text-white text-center mb-6">Kariyer Seçimi Anketi</h1>
        <form onSubmit={handleSubmit}>

          {[
            'Teknik problemleri çözmekten keyif alıyor musunuz?',
            'İnsanlara bilgi aktarmak ve öğretmek ilginizi çeker mi?',
            'Sağlık alanında çalışmak ve insanlara yardım etmek sizi motive eder mi?',
            'Spor ve fiziksel aktivitelerle ilgileniyor musunuz?',
            'Sanat ve yaratıcılık alanında projeler yapmak sizi tatmin eder mi?',
            'İş dünyasında yönetim ve liderlik pozisyonlarında çalışmak ilginizi çeker mi?',
            'Hukuki sorunlar ve adaletin sağlanması sizin için önemli mi?',
            'Mühendislik alanında karmaşık projelerde çalışmayı sever misiniz?',
            'Eğitim alanında öğrencilere rehberlik etmek sizin için keyifli bir süreç olur mu?',
            'Sağlık hizmetlerinde araştırma ve geliştirme projelerinde yer almak ister misiniz?',
            'Bir spor takımı yönetmek ya da bireylerle çalışarak onların gelişimini izlemek sizi motive eder mi?',
            'Yaratıcı bir sanat projesi üzerinde çalışmak ve özgün fikirler üretmek sizi heyecanlandırır mı?',
            'İş dünyasında stratejik kararlar almak ve şirket yönetmek sizin için çekici mi?',
            'Hukuk alanında araştırma yapmak ve davalar üzerinde çalışmak ilginizi çeker mi?',
            'Bir mühendis olarak yenilikçi çözümler üretmek sizin için tatmin edici mi?',
            'Bir öğretmen olarak öğrencilerin gelişimine katkıda bulunmak sizi mutlu eder mi?',
            'Hastaların sağlıklarını koruma veya iyileştirme konusunda çalışma yapmayı sever misiniz?',
            'Spor etkinliklerinde veya yarışmalarda yer almak ve başarılar elde etmek sizin için önemli mi?',
            'Sanat galerilerinde eserler sergilemek veya performans sanatlarında yer almak sizin için çekici mi?',
            'İş dünyasında girişimcilik yaparak yeni projeler başlatmak ilginizi çeker mi?',
            'Hukuk sisteminde adaletin sağlanması için çalışmak ve savunuculuk yapmak ister misiniz?',
          ].map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block text-lg font-medium text-white">{question}</label>

              <select
  name={`question${index + 1}`}
  value={answers[`question${index + 1}`]}
  onChange={handleChange}
  className="mt-2 block w-full p-2 bg-black text-white border border-gray-600 rounded-md"
  required
>
  <option value=""></option>
  <option value="1">Kesinlikle katılıyorum</option>
  <option value="2">Katılıyorum</option>
  <option value="3">Ne katılıyorum ne de katılmıyorum</option>
  <option value="4">Katılmıyorum</option>
  <option value="5">Kesinlikle katılmıyorum</option>
</select>

            </div>
          ))}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
          >
            Sonuçları Göster
          </button>


        </form>
        {result && (
          <div className="mt-6 p-4 bg-gray-900 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-4">Sonuçlar</h2>
            <p>{result}</p>
          </div>
        )}

      </div>


    </div>


  );
}

