$(window).on('load', function () {
    if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify([])); // initialize `data` field in local storage
    }
    const $form = $('#appForm');
    if (localStorage.getItem('data')) {
        const data = JSON.parse(localStorage.getItem('data'));
        populateRows(data);
    }

    $form.submit(function (e) {
        e.preventDefault();
        const row = $form.serializeArray();

        this.reset();
        if (this.hasAttribute('data-edit-id')) {
            editRow(row);
        } else {
            let data = JSON.parse(localStorage.getItem('data'));
            data.push(row);
            localStorage.setItem('data', JSON.stringify(data));
            const index = JSON.parse(localStorage.getItem('data')).length;
            addRow(row, index);
        }
    });
});

function addRow(row, index) {
    const $row = $(
        '<div class="row">' +
        '  <div class="col">' +
        '    <section></section>' +
        '  </div>' +
        '  <div class="col">' +
        '    <button class="delete btn btn-danger delete" data-id="">Delete</button>' +
        '    <button class="delete btn btn-warning edit" data-id="">Edit</button>' +
        '  </div>' +
        '</div>' +
        '<hr>');

    row.forEach(function (value) {
        $row.find('section').append($("<p>" + value.name + ": " + value.value + "</p>"));
    });
    $row.find('.btn-danger').attr('data-id', index).on('click', deleteRow);
    $row.find('.btn-warning').attr('data-id', index).on('click', fillRow);
    $row.attr('id', 'row-' + index);
    $('#data-holder').append($($row));
}


function deleteRow() {
    const id = $(this).data('id');
    let data = JSON.parse(localStorage.getItem('data'));
    data.splice(id, 1);
    localStorage.setItem('data', JSON.stringify(data));
    $('#data-holder').html('');
    populateRows(data);
}

function populateRows(data) {
    data.forEach((row, index) => {
        addRow(row, index);
    });
}


function fillRow() {
    const $form = $('#appForm');
    const id = $(this).data('id');

    $form.attr('data-edit-id', id);

    const data = JSON.parse(localStorage.getItem('data'));
    const row = data[id];
    row.forEach(function (value) {
        $form.find('[name=' + value.name + ']').val(value.value)
    })


}

function editRow(row) {
    const id = $(this).data('edit-id');

    let data = JSON.parse(localStorage.getItem('data'));
    data[id] = row;
    localStorage.setItem('data', JSON.stringify(data));
    populateRows(JSON.parse(localStorage.getItem('data')));


}
