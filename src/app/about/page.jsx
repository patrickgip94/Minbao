function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl text-[#6d3200] dark:text-white font-bold dark:underline">
        About
      </h1>
      <p className="text-lg">
        Welcome to Minbao, the premier destination for movie enthusiasts and
        critics alike. Our team is comprised of dedicated individuals who share
        a passion for cinema and have joined forces to establish a comprehensive
        platform to cater to all your movie-related requirements.
      </p>

      <p className="text-lg">
        Our website has been meticulously crafted to offer you an
        all-encompassing database of films from every corner of the globe,
        coupled with the most recent news, reviews, and trailers. Our movie
        catalog is perpetually updated with the latest releases, guaranteeing
        that you have access to the most current and exceptional offerings in
        the realm of cinema. You can seamlessly search for movies by title,
        director, actor, genre, or release date, streamlining the process of
        finding the ideal movie for any occasion.
      </p>

      <p className="text-lg">
        In addition to our comprehensive movie database, we have developed a
        thriving community platform for film enthusiasts to connect and share
        their insights on the most recent releases. Our community section
        features a forum where you can engage in discussions with like-minded
        individuals and explore reviews and ratings from fellow users.
        Furthermore, we provide a dedicated section for movie news and trailers,
        enabling you to stay informed on the latest developments in the world of
        cinema. Thank you for choosing our website, and we trust that your time
        exploring our movie database will be enjoyable. Should you have any
        suggestions or feedback, please do not hesitate to contact us as we
        constantly strive to enhance the user experience on our website. Happy
        browsing!
      </p>
      <div className="flex justify-center py-12">
        <img
          src="https://media1.giphy.com/media/6EQQhEeDL1KySoFcn5/giphy.gif?cid=ecf05e475kbv4x6bm3c1as5q7w8j4ryjd22j2tmoc3ispqm6&rid=giphy.gif&ct=g"
          alt=""
          className="h-36 w-36 rounded-md"
        />
      </div>
    </div>
  );
}

export default About;
