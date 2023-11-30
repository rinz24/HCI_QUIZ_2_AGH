$(document).ready(function () {
    $('#generateButton').click(function () {
        generateResume();
    });
});

function generateResume() {
    const fullName = $('#fullName').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const address = $('#address').val();
    const university = $('#university').val();
    const major = $('#major').val();
    const template = $('#template').val();

    let templateContent = '';

    switch (template) {
        case 'template1':
            templateContent = `
                <div id="template1">
                    <h1>${fullName}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>University: ${university}</p>
                    <p>Major: ${major}</p>
                    <!-- Additional Template 1 content -->
                </div>
            `;
            break;

        case 'template2':
            templateContent = `
                <div id="template2">
                    <h1>${fullName}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>University: ${university}</p>
                    <p>Major: ${major}</p>
                    <!-- Additional Template 2 content -->
                </div>
            `;
            break;

        case 'template3':
            templateContent = `
                <div id="template3">
                    <h1>${fullName}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>University: ${university}</p>
                    <p>Major: ${major}</p>
                    <!-- Additional Template 3 content -->
                </div>
            `;
            break;

        case 'template4':
            templateContent = `
                <div id="template4">
                    <h1>${fullName}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>University: ${university}</p>
                    <p>Major: ${major}</p>
                    <!-- Additional Template 4 content -->
                </div>
            `;
            break;

        case 'template5':
            templateContent = `
                <div id="template5">
                    <h1>${fullName}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                    <p>University: ${university}</p>
                    <p>Major: ${major}</p>
                    <!-- Additional Template 5 content -->
                </div>
            `;
            break;

        default:
            break;
    }

    const pdf = new jsPDF();
    pdf.fromHTML(templateContent, 10, 10);
    pdf.save('resume.pdf');
}
