use testdb;

CREATE TABLE todo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT 0,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into todo 
  (title, description) 
  values
    ('Learn SQL', 'Learn SQL from scratch'),
    ('Learn Node.js', 'Learn Node.js from scratch'),
    ('Learn React.js', 'Learn React.js from scratch'),
    ('Learn Vue.js', 'Learn Vue.js from scratch'),
    ('Learn Angular.js', 'Learn Angular.js from scratch'),
    ('Learn Express.js', 'Learn Express.js from scratch'),
    ('Learn MongoDB', 'Learn MongoDB from scratch'),
    ('Learn MySQL', 'Learn MySQL from scratch'),
    ('Learn PostgreSQL', 'Learn PostgreSQL from scratch'),
    ('Learn Redis', 'Learn Redis from scratch'),
    ('Learn Docker', 'Learn Docker from scratch'),
    ('Learn Kubernetes', 'Learn Kubernetes from scratch'),
    ('Learn AWS', 'Learn AWS from scratch'),
    ('Learn GCP', 'Learn GCP from scratch'),
    ('Learn Azure', 'Learn Azure from scratch'),
    ('Learn Python', 'Learn Python from scratch'),
    ('Learn Java', 'Learn Java from scratch'),
    ('Learn C++', 'Learn C++ from scratch'),
    ('Learn C#', 'Learn C# from scratch'),
    ('Learn Ruby', 'Learn Ruby from scratch'),
    ('Learn PHP', 'Learn PHP from scratch'),
    ('Learn Go', 'Learn Go from scratch'),
    ('Learn Rust', 'Learn Rust from scratch'),
    ('Learn Swift', 'Learn Swift from scratch'),
    ('Learn Kotlin', 'Learn Kotlin from scratch'),
    ('Learn Dart', 'Learn Dart from scratch'),
    ('Learn Flutter', 'Learn Flutter from scratch'),
    ('Learn React Native', 'Learn React Native from scratch'),
    ('Learn Ionic', 'Learn Ionic from scratch'),
    ('Learn Cordova', 'Learn Cordova from scratch'),
    ('Learn Electron', 'Learn Electron from scratch'),
    ('Learn Unity', 'Learn Unity from scratch'),
    ('Learn Unreal', 'Learn Unreal from scratch'),
    ('Learn Blender', 'Learn Blender from scratch'),
    ('Learn Maya', 'Learn Maya from scratch'),
    ('Learn 3ds Max', 'Learn 3ds Max from scratch'),
    ('Learn ZBrush', 'Learn ZBrush from scratch'),
    ('Learn Substance Painter', 'Learn Substance Painter from scratch'),
    ('Learn Photoshop', 'Learn Photoshop from scratch'),
    ('Learn Illustrator', 'Learn Illustrator from scratch'),
    ('Learn InDesign', 'Learn InDesign from scratch'),
    ('Learn After Effects', 'Learn After Effects from scratch')