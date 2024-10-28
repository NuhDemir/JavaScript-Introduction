function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}


function UI() {

}

UI.prototype.addCourseToList = function(course) {
    const list = document.getElementById('course-list');


}

UI.prototype.clearControls = function() {

}





document.getElementById('new-course').addEventListener('submit', function(e) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('innstructor').value;
    const image = document.getElementById('image').value;

    console.log(title, instructor, image);
    //create course object
    const course = new Course(title, instructor, image);

    //create UI
    const ui = new UI();

    //add course to lisst
    ui.addCourseToList(course);

    //clear controls
    ui.clearControls();

    //save to database


    //show on the uı

    d

    e.preventDefault();
});