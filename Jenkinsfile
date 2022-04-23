pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "/pwd"
                //sh "/home/ubuntu/.nvm/versions/node/v17.9.0/bin/yarn"
                sh "/usr/local/bin/yarn"                
                sh "CI=false /usr/local/bin/yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo systemctl restart nginx"
            }
        }
    }
}