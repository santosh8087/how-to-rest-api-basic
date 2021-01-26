pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm install -D'
                bat 'npm run build'
            }
        }
        stage('Deliver') {
                       steps {
                                bat "npm run start"
                            }
                        }

    }
}