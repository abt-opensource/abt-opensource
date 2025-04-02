const About = () => {
  return (
    <div className="w-full py-20">
      <div className="mb-20 px-5 lg:px-20">
        <h1 className="mb-4 font-geist-sans text-5xl">About ABT Open Source</h1>
        <p>
          We believe great software is built in the open, by the community, for
          the community.
        </p>
      </div>
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[80%]">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mb-20">
            <h1 className="mb-5 text-center font-semibold text-4xl">Our Mission</h1>
            <p className="text-center">
              We believe open source is the key to driving innovation and
              collaboration in the tech community. By sharing our code, tools,
              and resources, we empower developers to build faster, scale
              efficiently, and create impactful solutions. Our projects, like
              FluterCon and Fluter Essential, are designed to simplify Flutter
              development and help the community build better apps with ease.
            </p>
          </div>
          <div className="mb-20 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h1 className="mb-5 text-center text-2xl">Inclusivity</h1>
              <p className="text-center">
                Androbuddy Technologies creates open-source tools that empower
                developers of all backgrounds to build and innovate without
                barriers.
              </p>
            </div>
            <div>
              <h1 className="mb-5 text-center text-2xl">Innovation</h1>
              <p className="text-center">
                Open source is at the heart of our development process, driving
                us to build cutting-edge solutions like FluterCon and Fluter
                Essential for the Flutter community.
              </p>
            </div>
            <div>
              <h1 className="mb-5 text-center text-2xl">Excellence</h1>
              <p className="text-center">
                By contributing to open source, we strengthen the developer
                ecosystem, fostering collaboration and building high-quality
                tools for everyone.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-20">
            <h1 className="mb-5 text-center font-semibold text-4xl">
              Androbuddy Technologies is Built on Open Source
            </h1>
            <p className="mb-5 text-center">
              Open source is at the core of Androbuddy Technologies. It's our
              way of sharing not just our work but also the challenges we
              tackle—building scalable, efficient, and developer-friendly tools.
            </p>
            <p className="text-center">
              We believe in transparency and collaboration. That's why we openly
              share our projects, like FluterCon and Fluter Essential, along
              with our development insights and best practices. By engaging with
              the community, we aim to inspire and encourage developers of all
              backgrounds to contribute, innovate, and push technology forward
              together.
            </p>
          </div>
          <div className="mb-20 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h1 className="mb-5 text-center text-2xl">700+</h1>
              <p className="text-center">Open source code repositories</p>
            </div>
            <div>
              <h1 className="mb-5 text-center text-2xl">220K+</h1>
              <p className="text-center">Forks on GitHub</p>
            </div>
            <div>
              <h1 className="mb-5 text-center text-2xl">1.1M+</h1>
              <p className="text-center">Followers on our open source repos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
