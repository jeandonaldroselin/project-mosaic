pipeline {
  agent any
  stages {
    stage('Dev') {
      parallel {
        stage('Dev') {
          steps {
            sh 'echo 2'
          }
        }
        stage('Uat') {
          steps {
            sh 'echo 1'
          }
        }
      }
    }
  }
}