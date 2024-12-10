function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

function UI() {}

UI.prototype.addCourseToList = function(course) {
    const list = document.getElementById('course-list');
    const html = `
       <tr>
           <td><img src="img/${course.image}" alt="${course.title}" style="width: 100px;"></td>
           <td>${course.title}</td>
           <td>${course.instructor}</td>
           <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>`;
    list.innerHTML += html;
}

UI.prototype.clearControls = function() {
    document.getElementById('title').value = '';
    document.getElementById('instructor').value = '';
    document.getElementById('image').value = '';
}

// deleteCourse fonksiyonunu ekleyelim
UI.prototype.deleteCourse = function(target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('new-course').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // Nesne oluştur
    const course = new Course(title, instructor, image);

    // UI oluştur
    const ui = new UI();

    // Course listesine ekle
    ui.addCourseToList(course);

    // Kontrolleri temizle
    ui.clearControls();

    e.preventDefault();
});

// Delete butonuna tıklama olayını ekle
document.getElementById('course-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
});