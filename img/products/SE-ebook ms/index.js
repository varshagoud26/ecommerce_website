document.getElementById('libraryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    let bookName = document.getElementById('bookName').value.trim();
    let author = document.getElementById('author').value.trim();
    let type = document.querySelector('input[name="type"]:checked').value;

    // Validate form fields
    if (bookName === '' || author === '') {
        showMessage('Please fill in all fields.', 'danger');
        return;
    }

    // Get table body
    let tableBody = document.getElementById('tableBody');

    // Create new row
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${bookName}</td>
        <td>${author}</td>
        <td>${type}</td>
    `;

    // Add new row to table
    tableBody.appendChild(newRow);

    // Reset the form
    document.getElementById('libraryForm').reset();

    // Show success message
    showMessage('Book added successfully!', 'success');
});

function showMessage(message, className) {
    let div = document.createElement('div');
    div.className = `alert alert-${className} mt-3`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    let form = document.getElementById('libraryForm');
    container.insertBefore(div, form);

    // Remove message after 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
