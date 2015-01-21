
var fs            = require('fs');
var path          = require('path');
var Promise       = require('promise-es6').Promise;
var childProcess  = require('child_process');

exports.clone = function(opts, callback) {
	return new Promise(function(resolve, reject) {
		if (exists(opts)) {
			return reject('error: ' + opts.target + ' already exists');
		}
		childProcess.exec(cmd(opts), {cwd: process.cwd()}, function(err, stdout, stderr) {
			if (err) {
				return reject(err);
			}

			resolve({
				stdout: stdout,
				stderr: stderr
			});
		});
	});
};

function cmd(opts) {
	var target = opts.target ? ' ' + opts.target : '';
	var branch = opts.branch ? ' --branch ' + opts.branch : '';

	return 'git clone --depth 1' + branch + ' git@github.com:' + opts.owner + '/' + opts.repo + target;
}

function exists(opts) {
	return fs.existsSync(path.join(process.cwd(), opts.target));
}
