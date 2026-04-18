function uploadFile(event) {
  event.preventDefault();

  const fileInput = document.getElementById('file');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const progressBar = document.getElementById('progress');
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  // Отслеживаем загрузку
  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      progressBar.value = e.loaded / e.total;
    }
  };

  // Проверям завершена ли
  xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 201) {
      progressBar.value = 1;
    }
  };

  // Отправляем файл
  xhr.send(formData);
}

// Привязываем обработчик к отправке файла
document.querySelector('form').onsubmit = uploadFile;