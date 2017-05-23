<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Chris de la Fuente's Profile </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!-- custom bootstrap css -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<!-- custom css -->
    <link rel="stylesheet" href="css/styles.css">
<!-- jquery for bootstrap -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- bootstrap javascript -->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <!-- google fonts -->
    <link rel="stylesheet" href=href='//fonts.googleapis.com/css?family=Barrio' rel='stylesheet'>
    <!-- font awesome -->
        
  </head>
  <body>
<!-- open flex container -->
    <section class="flex-container">
<!-- open header -->
      <header class="row header-container">
        <div class="col-6 logo">
         <img src="https://img.utdstc.com/icons/256/udacity-learn-programming-android.png" class="profile-avatar img-circle img-responsive" alt="Udacity Logo"> 
        </div>
        <div class="col-6 main-title">
          <h1>Christopher de la Fuente</h1>
          <h4>Front-End Web Developer</h4>
        </div>
<!-- open bootstrap nav -->
        <nav class="row navbar navbar-default">
          <div class="navbar-header">
          </div>
            <div class="collapse navbar-collapse" id="collapse-navbar">
              <ul class="nav navbar-nav">
                <li class="nav-item"><a class="nav-item" href="#featured">My Featured Work</a></li>
                <li class="nav-item"><a class="nav-item" href="#contact">Contact Me</a></li>
              </ul>
          </div>
        </nav>  <!-- end nav -->
      </header>  <!-- end header -->
      <div class="row hero">
        <img class="col-12 hero-img" src="https://i1.wp.com/paperzip.co.uk/wp-content/uploads/2014/09/comic-books-banner.jpg?fit=675%2C325" sizes="(max-width: 550px) 100vw, (max-width: 768px) 100vw" alt="Traditional comicbook pannel">
      </div>
      <h2 class="row portfolio-title" id="featured">Featured Work</h2>
      <section class="row portfolio">
        <div class="col-6 project">
          <a href="http://www.github.com">
            <img class="project-img" src="http://www.icon2s.com/wp-content/uploads/2012/12/video-film-reel-icon.png" sizes="(max-width: 550px) 100vw, (max-width: 768px) 100vw" alt="Movie film reel">
          </a>
          <h3>Project One</h3>
          <p>Movie Trailer Website</p>
          <a href="https://github.com/cd186s/Movie-Trailer-Site">www.github.com</a>
        </div>
        <div class="col-6 project">
          <a href="http://www.github.com">
            <img class="project-img" src="http://icons.iconarchive.com/icons/graphicloads/seo-services/256/services-portfolio-icon.png"  sizes="(max-width: 550px) 100vw, (max-width: 768px) 100vw" alt="Clipart portfolio">
          </a>
          <h3>Project Two</h3>
          <p>Responsive web page</p>
          <a href="http://www.github.com">www.github.com</a>
        </div>
        <div class="col-6 project">
          <a href="http://www.github.com">
            <img class="project-img" src="http://www.andengine.org/images/blog.png" sizes="(max-width: 550px) 100vw, (max-width: 768px) 100vw" alt="clipart of blog">
          </a>
          <h3>Project Three</h3>
          <p>Multi user blog</p>
          <a href="http://www.github.com">www.github.com</a>
        </div>
      </section>



    <script>
    $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
    </script>
  </body>
</html>
