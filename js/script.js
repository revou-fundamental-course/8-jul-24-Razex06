document.addEventListener('DOMContentLoaded', function()  { //menunggu terloading

    // variable tombol
    var submitButton = document.querySelector('.submit_button');
    var downloadButton = document.querySelector('.download_button');
    var toggleButton = document.querySelector('.toggle_button');

    submitButton.addEventListener('click', function() {
        calculateBMI();
        toggleContents(); // Panggil toggleContents setelah menghitung BMI
    });
    //tes
    downloadButton.addEventListener('click', function() {
        downloadResult();
    });

    toggleButton.addEventListener('click', function() {
        toggleContent();
        toggleContents();
    });


    //menghitung bmi
    function calculateBMI() {
        var berat = parseFloat(document.getElementById('berat-badan').value); // mengambil nilai berat tinggi usia dan jenis kelamin
        var tinggi = parseFloat(document.getElementById('tinggi-badan').value) / 100;
        var umur = parseInt(document.getElementById('usia').value);
        var gender = document.querySelector('input[name="gender"]:checked');

        // data untuk ditampilkan
        var data1Element = document.querySelector('.data1');
        var data2Element = document.querySelector('.data2');

        //peringatan gender belum terpilih
        if (!gender) {
            alert('Pilih jenis kelamin');
            return;
        }
        // menentukan label jenis kelamin
        var genderLabel = gender.value === 'male' ? 'Laki-Laki' : 'Wanita';

        //menampilkan informasi berat tinggi umur dan jenis kelamin
        data1Element.innerHTML = '<p>Jenis Kelamin: ' + genderLabel + '</p>' +
            '<p>Berat Badan: ' + berat + ' KG</p>';

        data2Element.innerHTML = '<p>Usia: ' + umur + ' Tahun</p>' +
            '<p>Tinggi Badan: ' + tinggi + ' m</p>';

        //menghitung
        var bmi = berat / (tinggi * tinggi);
        // menentukan kategori
        var KategoriBMI = '';
        if (bmi < 18.5) {
            KategoriBMI = 'Kurus';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            KategoriBMI = 'Ideal';
        } else if (bmi >= 24.9 && bmi < 29.9) {
            KategoriBMI = 'Berlebihan';
        } else {
            KategoriBMI = 'Obesitas';
        }

        var hasilBMIElement = document.getElementById('hasilBMI');
        hasilBMIElement.querySelector('.bmi').textContent = bmi.toFixed(1);
        hasilBMIElement.querySelector('.HasilKategori').textContent = '(' + KategoriBMI + ')';
    }
    // tampilan hasil download
    function downloadResult() {
        var hasilBMIElement = document.getElementById('hasilBMI');
        var bmiNumber = hasilBMIElement.querySelector('.bmi').textContent;
        var KategoriBMI = hasilBMIElement.querySelector('.HasilKategori').textContent;

        var data1Element = document.querySelector('.data1').innerHTML;
        var data2Element = document.querySelector('.data2').innerHTML;

        var content = `Jenis Kelamin: ${data1Element}\nBerat Badan: ${data2Element}\n\nBMI Anda:\n${bmiNumber}\n${KategoriBMI}`;

        var blob = new Blob([content], { type: 'text/plain' });

        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'BMI_Result.txt';
        a.click();
    }
    // fungsi toggle
    function toggleContent() {
        var toggleElement = document.getElementById('toggleContent');
        toggleElement.classList.toggle('show');
        var toggleButton = document.querySelector('.toggle_button');
        if (toggleElement.classList.contains('show')) {
            toggleButton.textContent = 'Sembunyikan Keunggulan Fitur';
        } else {
            toggleButton.textContent = 'Tampilkan Keunggulan Fitur';
        }
    }
    // menampilkan untuk data kedua
    function toggleContents() {
    var toggleElement = document.getElementById('infoBMI');
    toggleElement.classList.toggle('show');
    
    var hasilBMIElement = document.getElementById('hasilBMI');
    var bmiNumber = hasilBMIElement.querySelector('.bmi').textContent;
    var KategoriBMI = hasilBMIElement.querySelector('.HasilKategori').textContent;
    
    if (toggleElement.classList.contains('show')) {
        var explanation = explainBMI(KategoriBMI);
        toggleElement.innerHTML = '<strong>Informasi BMI Anda:</strong><br>' +
                                  '<p>BMI: <span class="bmi">' + bmiNumber + '</span></p>' +
                                  '<p>Kategori: <span class="HasilKategori">' + KategoriBMI + '</span></p>' +
                                  '<p><span>' + explanation + '</span></p>';

    function explainBMI(KategoriBMI) {
    switch (KategoriBMI) {
        case 'Kurus':
            return '0';
        case 'Ideal':
            return '0';
        case 'Berlebihan':
            return '0';
        case 'Obesitas':
            return '0';
        default:
            return '';
    }
}

    }
}
});
