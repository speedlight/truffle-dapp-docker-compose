pipeline {
  agent any

  stages {
    stage('dapp compose') {
      steps {
        echo 'Running docker-compose...'
        sh 'docker-compose build'
        sh 'docker-compose up -d --remove-orphans'
      }
    }
    stage('dapp compile, test, migrate') {
      steps {
        echo 'Running build steps...'
        dir('truffle-dapp') {
          sh 'docker-compose exec -T truffle-dapp npx truffle compile'
          sh 'docker-compose exec -T truffle-dapp npx truffle test --network development'
          sh 'docker-compose exec -T truffle-dapp npx truffle migrate --network development'
        }
      }
    }
  }
  post {
    always {
      sh 'docker-compose down -v'
    }
  }
}
