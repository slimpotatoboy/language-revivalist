"use client";
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  {
    name: "Kaike",
    image: "/caste/tamang.png",
  },
  {
    name: "Newari",
    image: "/caste/newar.png",
  },
  {
    name: "Kusunda",
    image: "/caste/nepali.png",
  },
  {
    name: "Magar",
    image: "/caste/magar.png",
  },
  {
    name: "Sherpa",
    image: "/caste/beginner.png",
  },
];
export default function Play() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <div
    // className={selectedLanguage != null ? "hero min-h-screen" : ""}
    // style={{
    //   backgroundImage:
    //     selectedLanguage != null
    //       ? selectedLanguage.toLowerCase() == "newari"
    //         ? "url(newari.jpg)"
    //         : selectedLanguage.toLowerCase() == "kusunda"
    //         ? "url(kusunda.jpg)"
    //         : "url(kaike.jpg)"
    //       : "",
    // }}
    >
      {selectedLanguage != null && (
        <div className="hero-overlay bg-opacity-60"></div>
      )}
      {/* <div
        className={`max-w-screen-xl mx-auto prose text-center my-10 ${
          selectedLanguage != null && "text-white"
        }`}
      > */}
      <div className={`max-w-screen-xl mx-auto prose text-center my-10`}>
        <div className="flex justify-center items-center mb-10">
          <button
            className="btn btn-ghost mr-2"
            onClick={() => {
              if (selectedLanguage != null) {
                setSelectedLanguage();
              } else {
                router.push("/");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className={`m-0`}>
            {selectedLanguage != null
              ? `About ${selectedLanguage}`
              : "Select Language"}
          </h1>
        </div>
        {selectedLanguage != null ? (
          <div className="max-w-screen-lg mx-auto">
            <div>
              <img
              className="h-64 mx-auto rounded-lg"
                src={
                  selectedLanguage != null
                    ? selectedLanguage.toLowerCase() == "newari"
                      ? "/newari.jpg"
                      : selectedLanguage.toLowerCase() == "kusunda"
                      ? "/kusunda.jpg"
                      : "/kaike.jpg"
                    : ""
                }
                alt=""
              />
            </div>
            <div className="flex">
              <div>
                {selectedLanguage.toLowerCase() == "newari" ? (
                  <>
                    The Newar people, native to Nepal&apos;s Kathmandu Valley,
                    possess a cultural heritage rich in art, music, dance, and
                    festivals that reflect their deep spirituality and
                    commitment to tradition. Their artistic prowess is evident
                    in exquisite woodcarvings adorning temples and palaces,
                    depicting deities, mythical beings, and intricate patterns.
                    This craftsmanship, along with metalwork, thangka painting,
                    and pottery, reflects their profound cultural connections.
                    Newar festivals serve as vibrant reflections of their
                    culture and spirituality. For instance, the &qiot;Indra
                    Jatra&qiot; festival celebrates the god Indra with a grand
                    Kathmandu procession culminating in raising the ceremonial
                    &qiot;Yosin&qiot; pole and the Kumari Jatra, where the
                    living goddess Kumari makes her appearance. Another
                    significant celebration is &qiot;Nepal Sambat,&qiot; marking
                    the Newar New Year, featuring rituals, feasts, and cultural
                    events that highlight their deep-rooted connection to their
                    cultural calendar. These traditions, passed down through
                    hereditary lineages, continue to enrich Nepal&apos;s
                    cultural tapestry and captivate the world with their beauty
                    and depth.
                  </>
                ) : selectedLanguage.toLowerCase() == "kaike" ? (
                  <>
                    The Magar Kaike language is a Sino-Tibetan language spoken
                    in Nepal, particularly in Shahartara, Tupatara, Tarakot, and
                    Belawa villages of Sahartara VDC, Dolpa District, Karnali
                    Province. Ethnologue classifies it as a West Bodish
                    language. It shares some linguistic similarities with
                    Tamangic but is distinct from it. Additionally, it has
                    linguistic contact with Tichurong, a Tibetic dialect spoken
                    in the Kaike-speaking areas. The Kaike language has a rich
                    lexicon, with unique words for various concepts, such as
                    &qiot;gold&qiot; (mar), &qiot;blood&qiot; (ka:), and
                    &qiot;fire&qiot; (me). In terms of culture and tradition,
                    the Kaike people have a unique heritage rooted in their
                    linguistic and geographical context. The language reflects
                    their history, with influences from neighboring languages
                    such as Tamangic and Tichurong. Traditional practices,
                    social structures, and oral traditions are intricately tied
                    to the Kaike language, preserving their cultural identity.
                    The lexicon also provides insights into their daily lives,
                    including words for common objects, animals, and activities.
                    The Kaike language serves as a vital vessel for transmitting
                    their cultural heritage from one generation to the next. It
                    is not only a means of communication but also a repository
                    of their history, beliefs, and customs. Through the
                    preservation and continued use of the Kaike language, the
                    community sustains its cultural richness, ensuring that
                    their traditions and way of life endure in an ever-changing
                    world.
                  </>
                ) : (
                  <>
                    Kusunda, also known as Kusanda, is a highly endangered
                    language isolate spoken by a small number of Kusunda people
                    in western and central Nepal. As of 2023, there is only one
                    known fluent speaker, Kamala Khatri Sen, but efforts are
                    being made to preserve the language. The rediscovery of
                    active Kusunda speakers was a remarkable development after
                    decades of believing the language was on the verge of
                    extinction. Historically, the Kusunda language was
                    considered a linguistic isolate, distinct from neighboring
                    languages. However, prior to the discovery of active
                    speakers, attempts were made to classify it within
                    established language families, including Tibeto-Burman,
                    Andamanese, Indo-Pacific, Munda, Yeniseian, Burushaski,
                    Caucasian, and even its potential relation to the Nihali
                    isolate in central India. The classification remained
                    uncertain until it was confirmed as a language isolate.
                    Kusunda phonology is unique and includes six vowels, divided
                    into two harmonic groups. Consonants in Kusunda display
                    distinctive features, including variable articulation of
                    stops, fricatives, and aspiration. The language also
                    features a variety of cases marked on nouns and pronouns,
                    including nominative, genitive, and accusative.
                    Demonstrative pronouns and case suffixes are used in Kusunda
                    to indicate various grammatical functions. Despite its
                    near-extinction status, Kusunda has been the focus of
                    linguistic research, resulting in publications such as
                    grammatical descriptions and dictionaries. Efforts to
                    revitalize the language have been led by Gyani Maiya Sen
                    Kusunda and Kamala Kusunda, who survived the presumed last
                    fluent speaker, Rajamama Kusunda. They have been actively
                    teaching Kusunda to interested individuals, ensuring that
                    their cultural heritage and linguistic traditions endure.
                    The Kusunda language, with its linguistic uniqueness and the
                    dedicated efforts of its speakers and researchers, serves as
                    a testament to the importance of preserving linguistic
                    diversity and cultural heritage in a rapidly changing world.
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button
                className="btn btn-primary text-white"
                onClick={() => {
                  router.push(`/play/${selectedLanguage.toLowerCase()}/choose`);
                  // localStorage.setItem("lang.revivalist.nep", "");
                }}
              >
                Learn by Playing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap">
            {languages.map((item, index) => (
              // href={`/play/${item.name.toLowerCase()}`}
              <button
                key={index}
                className="btn btn-ghost w-1/5 h-full mx-auto"
                onClick={() => setSelectedLanguage(item.name)}
              >
                <img
                  src={item.image}
                  className="w-full h-64 object-contain"
                  alt=""
                />
                <div className="mb-2">{item.name}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
