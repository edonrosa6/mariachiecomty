module.exports = function(grunt) {
    
    grunt.initConfig({
        //pass int options to plugins, references to files etc
    });

    // Load plugins
    //grunt.loadNpmTasks('')

    // Register task
    grunt.registerTask('run', function(){
        console.log("I am running");
    });

    grunt.registerTask('sleep', function(){
        console.log("I am sleeping");
    });

};