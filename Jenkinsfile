pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('Dev') {
          steps {
            contentReplace()
            sh 'test'
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