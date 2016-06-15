module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     uglify:{
		 micro_web: {
			 files: [{
				 expand: true,
				 cwd: 'js',
				 src: '*.js',
				 dest: 'dest/js'
			 }]
		 }
     },
	 cssmin:{
		 micro_web:{
			 files:[{
				expand:true,
				 cwd: 'css',
				 src:['*.css'],
				 dest:'dest/css',
				 ext:'.css'
			 }]
		 }
	 },
	 htmlmin:{
		 micro_web: {                                      // Target
			 options: {                                 // Target options
				 removeComments: true,
				 collapseWhitespace: true
			 },
			 files: {                                   // Dictionary of files
				 'dest/index.html': 'index.html',
				 'dest/live.html':'live.html',
				 'dest/action.html':'action.html',
				 'dest/provide.html':'provide.html',
				 'dest/programs.html':'programs.html'
			 }
		 },
	 },
	  imagemin:{                         // Task
		  micro_web: {
			  options: {                       // Target options
				  optimizationLevel: 3
				},
			  files: [{
				  expand: true,                  // Enable dynamic expansion
				  cwd: 'images/',                   // Src matches are relative to this path
				  src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				  dest: 'dest/images'                  // Destination path prefix
			  }]
		  }
	}
});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');//插件引入
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['cssmin','uglify','htmlmin','imagemin']);
}