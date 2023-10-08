"use client";
import MainLayout from "@/components/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="container mx-auto text-center p-6">
        <h1>About Us</h1>
        <section className="bg-white p-6 rounded-lg">
          <p>
            Welcome to our language learning and community platform dedicated to
            preserving, promoting, and revitalizing languages from around the
            world. We are a passionate and diverse team of language enthusiasts,
            educators, and technology enthusiasts who share a common goal: to
            celebrate the beauty of languages and ensure they thrive for
            generations to come.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            At the heart of our project lies a deep-seated commitment to
            preserving linguistic diversity. We recognize that languages are not
            just a means of communication; they are vessels of culture, history,
            and identity. Our mission is to empower individuals to learn,
            celebrate, and contribute to the preservation of languages, both
            endangered and thriving.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p>
            We envision a world where every language, no matter how rare or
            marginalized, is celebrated and cherished. We believe that through
            language learning, cultural exchange, and community engagement, we
            can bridge gaps, foster understanding, and promote unity among
            people of diverse linguistic backgrounds.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Goals</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Our goals are clear and ambitious. We aim to:</li>
            <li>
              Create an engaging and interactive platform for language learners
              of all levels, from beginners to advanced.
            </li>
            <li>
              Cultivate a vibrant and supportive community where language
              enthusiasts can share their passion, knowledge, and experiences.
            </li>
            <li>
              Provide access to a diverse library of resources, including books,
              articles, and multimedia, to deepen understanding and appreciation
              of languages.
            </li>
            <li>
              Foster collaboration with linguists, educators, and cultural
              organizations to ensure the accuracy and cultural sensitivity of
              our content.
            </li>
            <li>
              Empower users to become advocates for language preservation and
              revitalization in their own communities.
            </li>
          </ul>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <p>
            Our project is grounded in the values of inclusivity, respect, and
            collaboration. We believe that every language has intrinsic value
            and that cultural diversity should be celebrated. We are committed
            to creating a safe and welcoming space for all individuals to learn,
            share, and connect.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Join Us on this Journey</h2>
          <p>
            We invite you to join us on this exciting journey of language
            exploration and preservation. Together, we can make a difference by
            learning, sharing, and celebrating the rich tapestry of languages
            that make our world so wonderfully diverse.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>
            Have questions, suggestions, or ideas to share? We&apos;d love to
            hear from you! Feel free to reach out to our team at{" "}
            <strong>languagerevivalists2023@gmail.com</strong> or connect with
            us on social discussion platforms.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
