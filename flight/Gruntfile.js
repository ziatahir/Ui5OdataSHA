module.exports = function(grunt) {
	//Configure the options for the plugins. Provide the required paths to the tasks.
	grunt.initConfig({
		//Read the package.json to set the application name.
		pkg: grunt.file.readJSON("package.json"),
		//Set the directories.
		dir: {
			webapp: "<%= pkg.name %>",
			dist: "node_modules"
		},
		//To clean the node_modules folder
		clean: {
			dist: "<%=dir.dist%>"
		},
		//To run the eslint
		eslint: {
			src: ["webapp/**/**.js","!webapp/Component-preload.js", "!webapp/test/**.js"],
			options: {
				//adding config file
				configFile: "conf/eslint.json",	
				//adding custom rules' folder path
				rulePaths: ["conf/rules"],
				format: "node_modules/eslint-improved-checkstyle-formatter",
				//adding output file
				outputFile: "eslintCheckstyleOutput.xml"
			}
		},
		//To run qunit
		 qunit: {
                    all: "webapp/test/unit/qunitTest.html"
			       // all: "webapp/test/unit/unitTests.qunit.html"
        }
		
	});

	//Now we will load the npm tasks that we want to execute
	grunt.loadNpmTasks("gruntify-eslint");
	grunt.loadNpmTasks("grunt-contrib-qunit");
	grunt.registerTask("build", ["eslint"]);
	//grunt.registerTask("default", "build");
	
};
