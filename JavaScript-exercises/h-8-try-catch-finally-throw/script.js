try {
    const number = parseInt("abc");
  } catch (error) {
    console.log("Hata:", error.message);
  } finally {
    console.log("İşlem tamamlandı.");
  }