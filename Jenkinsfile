#!groovy

node('EJ2AngularSample') {
    try {
        deleteDir()

        stage('Import') {
            git url: 'https://gitlab.syncfusion.com/essential-studio/ej2-groovy-scripts.git', branch: 'master', credentialsId: env.JENKINS_CREDENTIAL_ID
            shared = load 'src/shared.groovy'
        }

        stage('Checkout') {
            checkout scm
            shared.getProjectDetails()
            shared.gitlabCommitStatus('running')
        }

        if(shared.checkCommitMessage()) {
            stage('Install') {
                shared.install()
            }

            stage('Styles') {
                shared.runShell('npm run scss')
            }

            stage('Build') {
                shared.runShell('npm run build')
            }

            stage('Publish') {
                if(shared.isProtectedBranch()) {
                    shared.runShell('npm run ci-publish')
                }
            }
        }

        shared.gitlabCommitStatus('success')
        deleteDir()
    }
    catch(Exception e) {
        println(e)
        shared.gitlabCommitStatus('failed')
        deleteDir()
        error('Build Failed')
    }
}