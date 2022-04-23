pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "nvm install latest"
                sh "yarn"
                sh "CI=false yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo systemctl restart nginx"
            }
        }
    }
}