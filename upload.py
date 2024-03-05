from flask import Flask, request, render_template
import boto3
import os

app = Flask(__name__)

# AWS credentials and S3 bucket information
AWS_ACCESS_KEY_ID = 'AKIAZQ3DUIJGUG6HS42N'
AWS_SECRET_ACCESS_KEY = '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'
S3_BUCKET_NAME = 'myprojectbackground'

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']
    prefix = "mybackgroundimages/"
    filePath = prefix + file.filename

    if file.filename == '':
        return 'No selected file'

    # Initialize the S3 client
    s3 = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

    try:
        # Upload file to S3 bucket
        s3.upload_fileobj(file, S3_BUCKET_NAME, filePath)

        return 'File uploaded successfully to S3 bucket'
    except Exception as e:
        return f'An error occurred: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)

