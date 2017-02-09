
module.exports = function(grunt) {
  //加载任务器
  grunt.loadNpmTasks('grunt-contrib-sass');
  //总配置
	grunt.initConfig({
    sass: {
      dist: {
        options: {// 任务配置
          sourcemap: 'none',//不生成map文件
          style: 'expanded',
          noCache: true//不生成缓存文件
        },
        files: {// 文件列表
          './css/main.css': './sass/main.scss',// '目标文件': '源文件'
          './css/app.css': './sass/app.scss'
        }
      }
    }
	});
  //注册任务
	grunt.registerTask('default',['sass']);

};
