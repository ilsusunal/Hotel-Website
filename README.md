# Hotel İzmir

"Hotel İzmir" projesini, kullanıcıların otel odalarını keşfetmelerini ve rezervasyon yapmalarını sağlamak amacıyla geliştirdim. Bu projeyi React.js ile kodladım ve modern, kullanıcı dostu bir arayüz oluşturmayı hedefledim. Kullanıcılar, otel odalarını inceleyip filtreleme yaparak, detaylı bilgilere kolayca ulaşabiliyorlar.

- Demoyu incelemek isterseniz: [Demo Linki](https://hotel-website-murex.vercel.app)
- Proje gelişimini takip etmek isterseniz: [Proje Linki](https://github.com/users/ilsusunal/projects/3)

## Tech Stack

- **React.js**: Arayüzü oluşturmak için.
- **Redux Toolkit**: State yönetimini kolaylaştırmak için.
- **TailwindCSS**: Projeye stil vermek için.
- **Vercel**: Projeyi deploy etmek için.

## Dosya Yapısı

1. **Layout**: Projede sayfa yapısını Header, PageContent ve Footer olarak düzenledim. PageContent kısmında React Router v5 ile farklı sayfalar render ediliyor.
2. **Pages**: Her sayfa eventleri ve state değişikliklerini yönetiyor. Modülerliği artırmak için sayfaları küçük bileşenlere böldüm. Sayfalar şu şekilde:
   
| **Sayfa**             | **URL**                    | **İçerik**                                                         |
|-----------------------|----------------------------|---------------------------------------------------------------------|
| Home                  | `/`                        | **`Slider`**, **`arama formu`**, **`otel türlerini`**, otel hakkında genel bilgi, comments, location|
| About                 | `/about`                   | Otelin tarihçesi ve misyonunu içeren **`Hakkımızda`** bölümü.            |
| Room                  | `/rooms`                   | Oteldeki tüm odaların listelendiği ve **`filtreleme formu`** içeren sayfa. Bu sayfadan Rezervasyon sayfasına yönleniyoruz.|
| Room Reservation       | `/rooms/reservation`       | Rezervasyon için oda seçimi yapılan sayfa. Tüm **`odaların detaylı özellikleri`** burada görülebiliyor.|
| Contact               | `/contact`                 | **`İletişim bilgileri`** ve iletişim formu.  |
| Payment               | `/payment`                 | Under construction                             |

3. **Components**: Bileşenleri sayfalara göre organize ettim ve her bir bileşeni tek bir sorumluluk ilkesine (Single Responsibility) uygun olarak geliştirdim.
4. **UI**: `Tekrar kullanılabilir UI elemanlarını` (Button, Filtreleme elemanları, Breadcrumbs) bileşenler halinde yapılandırdım.

## Özellikler

1. **Oda Arama ve Filtreleme Formu**: `İki form bileşeni` oluşturdum. Ana sayfada, kullanıcıların check-in, check-out ve konuk bilgilerini girerek odaları filtreleyebileceği bir form var. Bu filtreler **`Redux`** ile yönetiliyor. Rooms sayfasındaki form, ekstra olarak fiyat ve hizmet filtrelerini içeriyor.
2. **Tekrar Kullanılabilir UI Elemanları**: Button, filtreleme elemanları ve breadcrumb gibi bileşenleri, projede tekrar kullanılabilir hale getirdim.

## Proje Gereksinimleri (Assignment)

Bu projede, assignment'ta belirtilen gereksinimlere uygun olarak aşağıdaki bileşenleri geliştirdim:

- [x] **Header Bileşeni**: Web sitesinde başlık ve menü bağlantılarını içeren bir bileşen oluşturdum.
- [x] **Slider Bileşeni**: Otel hakkında görsel bilgiler sunan bir slider bileşeni kodladım.
- [x] **Oda Arama ve Filtreleme Formu**: Kullanıcıların kolayca odaları arayıp filtreleyebileceği bir form bileşeni geliştirdim.
- [x] **Oda Türleri Bileşeni**: Farklı oda türlerini tanıtan ve özelliklerini gösteren bir bileşen oluşturdum.
- [x] **Footer Bileşeni**: İletişim bilgileri ve sosyal medya bağlantılarını içeren bir footer bileşeni geliştirdim.
- [x] **Oda Detay Sayfası**: Kullanıcılar oda türlerine tıkladığında detaylı bilgi sunan bir oda detay sayfası oluşturdum.
- [x] Uygulamayı **React.js** ile geliştirdim.
- [x] **Redux Toolkit** ile state yönetimini sağladım.
- [x] **TailwindCSS** kullanarak projeye stil ekledim.
- [x] Clean Code prensiplerine uygun bir yapı izledim.
- [x] **Git** ve branch yapısını kullandım.
- [x] Projeye "Hakkımızda" ve "İletişim" sayfalarını ekledim.

