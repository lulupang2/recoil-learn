pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "pwd"
                sh "which yarn"
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