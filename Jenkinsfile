pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh"pwd"
                sh"npm version"
                sh "yarn install"
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