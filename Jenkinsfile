pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                echo 'Simulando clonación...'
            }
        }

        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                echo 'Ejecutando pruebas...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build exitoso 🎉'
        }
        failure {
            echo 'Build falló ❌'
        }
    }
}