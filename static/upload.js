// document.getElementById('uploadForm').addEventListener('submit', async function(e) {
//     e.preventDefault();
//     var files = document.getElementById('fileInput').files;
//     var previewContainer = document.getElementById('previewContainer');
  
//     for (var i = 0; i < files.length; i++) {
//       var file = files[i];
//       var reader = new FileReader();
  
//       reader.onload = async function(e) {
//         var image = document.createElement('img');
//         image.src = e.target.result;
  
//         var previewImage = document.createElement('div');
//         previewImage.className = 'previewImage';
//         previewImage.appendChild(image);
//         previewContainer.appendChild(previewImage);
  
//         try {
//           // Upload the image to S3
//           const imageUrl = await uploadImageToS3(file);
//           console.log('Image URL:', imageUrl);
          
//           // Call the API function with a PUT request
//           const bucketName = 'myprojectbackground';
//           const folderName = 'mybackgroundimages';
//           const apiEndpoint = `https://33papl52c6.execute-api.us-east-1.amazonaws.com/dev/PUT/${bucketName}/${folderName}/${file.name}`;
//           const response = await fetch(apiEndpoint, {
//             method: 'PUT',
//             body: JSON.stringify({ imageUrl }), // Send the image URL as JSON data
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           });
  
//           if (response.ok) {
//             console.log('PUT request successful');
//           } else {
//             console.error('PUT request failed:', response.statusText);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       }
  
//       reader.readAsDataURL(file);
//     }
//   });
  
  // Add file name to the list when selected
  document.getElementById('file').addEventListener('change', function(e) {
    var fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear previous files
  
    for (var i = 0; i < this.files.length; i++) {
      var fileName = this.files[i].name;
      var listItem = document.createElement('div');
      listItem.textContent = fileName;
      fileList.appendChild(listItem);
    }
  });
  
  // Trigger file input click event when the "Choose File" button is clicked
  document.getElementById('chooseFileButton').addEventListener('click', function() {
    document.getElementById('file').click();
  });
