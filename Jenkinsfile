pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Todo funciona perfecto 🚀'
        }
        failure {
            echo 'Algo falló ❌'
        }
    }
}