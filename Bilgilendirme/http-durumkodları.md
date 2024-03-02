## HTTP Durum Kodları:

Bir web sitesini ziyaret ettiğinizde veya bir API'ye istekte bulunduğunuzda, sunucu bir HTTP durum kodu döndürür. Bu kodlar, sunucunun isteğinizi nasıl işlediğini ve ne tür bir yanıt beklemeniz gerektiğini gösterir.

**Sıkça Karşılaşılan HTTP Durum Kodları:**

**200 (OK):** İstek başarılı bir şekilde işlendi ve istenen kaynak sunucu tarafından gönderildi.

**301 (Kalıcı Yönlendirme):** İstenen kaynak kalıcı olarak yeni bir URL'ye taşındı. Tarayıcı ve arama motorları yeni URL'ye yönlendirilir.

**302 (Geçici Yönlendirme):** İstenen kaynak geçici olarak yeni bir URL'ye yönlendirildi. Tarayıcı ve arama motorları eski URL'yi korur.

**404 (Bulunamadı):** İstenen kaynak sunucu tarafından bulunamadı.

**500 (Dahili Sunucu Hatası):** Sunucu, isteği işlerken beklenmedik bir hata ile karşılaştı.

**502 (Kötü Ağ Geçidi):** Sunucu, bir ağ geçidinden veya proxy'den beklenen yanıt alamadı.

**503 (Hizmet Kullanılamıyor):** Sunucu geçici olarak aşırı yüklenmiş veya bakımdadır ve istekleri işleyemiyor.

**403 (Yasak):** Sunucu, istekte bulunan kullanıcının istenen kaynağa erişmesine izin vermiyor.

**401 (Yetkisiz):** Sunucu, istekte bulunan kullanıcının kimlik doğrulaması yapmasını istiyor.

**Diğer Önemli HTTP Durum Kodları:**

* 303 (Bakınız): Geçici bir yönlendirme için kullanılır, ancak 302'den farklı olarak, tarayıcı POST istek yöntemini GET ile değiştirmelidir.
* 400 (Kötü İstek): İstek biçimi hatalıdır veya sunucu tarafından anlaşılamamaktadır.
* 405 (Yöntem İzin Verilmiyor): İstek için kullanılan HTTP yöntemi sunucu tarafından desteklenmiyor.
* 410 (Gitti): İstenen kaynak kalıcı olarak silindi ve artık mevcut değil.

**HTTP Durum Kodlarının Önemi:**

HTTP durum kodları, web sitelerinin ve API'lerin düzgün bir şekilde çalışmasını sağlamada önemli bir rol oynar. Bu kodlar, geliştiricilerin hataları ayıklamasına, kullanıcıların hataları anlamasına ve arama motorlarının web sitelerini doğru şekilde dizine eklemesine yardımcı olur.

**Gateaway Hakkında:**

502 kodunun yanında "Bad Gateway" ifadesi de görünebilir. Bu, sunucunun bir ağ geçidinden veya proxy'den beklenen yanıt alamadığını gösterir. Sorun sunucu tarafında veya ağ geçidi/proxy tarafında olabilir.

**Ek Bilgiler:**

* HTTP durum kodları hakkında daha fazla bilgi için: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* HTTP protokolü hakkında daha fazla bilgi için: [https://www.w3.org/Protocols/HTTP/](https://www.w3.org/Protocols/HTTP/)

