pipeline{
  agent any
  stages {
    stage ('Build'){
      steps {
        nodejs('NodeJS2290'){
          sh 'npm i'
          sh 'npm t'
        }
      }
    }
  }
    
}
