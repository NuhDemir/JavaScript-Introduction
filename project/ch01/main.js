const user = {
    name: 'Anna',
    age: 20,
    gender: 'female',
    phone: '+905436219054',
    email: 'annapluo2@gmail.com',
};

// Telefon numarasının geçerli formatta olup olmadığını kontrol eden fonksiyon
function isValidPhone(phone) {
    const phonePattern = /^\+?\d{10,15}$/;  // En az 10, en fazla 15 basamaklı numara
    return phonePattern.test(phone);
}

// JSON verisini stringe çeviren fonksiyon
function convertToJSON(data) {
    try {
        const jsonString = JSON.stringify(data);
        console.log("JSON Format:", jsonString);
        return jsonString;
    } catch (error) {
        console.error("JSON formatına çevirme hatası:", error);
    }
}

// JSON string'ini nesneye çeviren fonksiyon
function parseFromJSON(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log("Nesne Formatı:", parsedData);
        return parsedData;
    } catch (error) {
        console.error("JSON formatı geçersiz:", error);
    }
}

// JSON işlemleri
const jsonData = convertToJSON(user);
if (jsonData) {
    parseFromJSON(jsonData);
}

// Telefon numarası geçerliliğini kontrol et
if (isValidPhone(user.phone)) {
    console.log("Geçerli telefon numarası:", user.phone);
} else {
    console.log("Geçersiz telefon numarası:", user.phone);
}
