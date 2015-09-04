module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
		    myTask: {
		      	options: {
		        	sizes: [{
		          		width: 44
		          	}]
		      	},
		      	files: [{
		        	expand: true,
		        	src: ['views/images/pizza.png'],
		      }]
		    }
		},
		imagemin: {
			dynamic: {                         // Another target
			    files: [{
			        expand: true,                  // Enable dynamic expansion
			        cwd: '',                   // Src matches are relative to this path
			        src: ['**/*.{png,jpg}'],   // Actual patterns to match
			        dest: ''                  // Destination path prefix
			    }]
			}
		}

    });

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


    grunt.registerTask('default', ['responsive_images', 'imagemin']);

};



//Thanks to :
//https://24ways.org/2013/grunt-is-not-weird-and-hard/
// https://discussions.udacity.com/t/grunt-and-setting-up-a-grunt-workflow-intermediate/21984

