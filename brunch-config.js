// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: { presets: ['latest'] },
  copycat: {
    "images": ["app/assets/images", "node_modules/leaflet/dist/images"],
    verbose: true,
    onlyChanged: true
  }
};

exports.npm = {
  styles: {
    'leaflet': ['dist/leaflet.css']
  },
};
