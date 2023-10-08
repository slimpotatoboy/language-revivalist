"use client";
import AudioPlayer from "@/components/AudioPlay";
import PlayModal from "@/components/PlayModal";
import { useDictionary } from "@/lib/context/dictionary";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Language({ params }) {
  const lang = useDictionary();

  const router = useRouter();
  const searchParams = useSearchParams();

  const level = searchParams.get("level");

  const [seconds, setSeconds] = useState(60);
  const [open, seOpen] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!open) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, open]);

  useEffect(() => {
    if (seconds == 0) {
      router.push(`/play/${params.language}/learn?level=${level}`);
    }
  }, [seconds, router, params]);

  const onStart = () => {
    seOpen(false);
  };

  const getList = async () => {
    await lang.list();
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setList([]);
    if (params.language == "kusunda") {
      let data = lang.current.filter((item) => {
        if (item.kusunda != null) {
          return item;
        }
      });
      setList(
        data.slice(0, level == "advanced" ? 7 : level == "intermediate" ? 5 : 3)
      );
    } else if (params.language == "kaike") {
      let data1 = lang.current.filter((item) => {
        if (item.kaike != null) {
          return item;
        }
      });
      setList(
        data1.slice(
          0,
          level == "advanced" ? 7 : level == "intermediate" ? 5 : 3
        )
      );
    } else if (params.language == "newari") {
      let data3 = lang.current.filter((item) => {
        if (item.newari != null) {
          return item;
        }
      });
      setList(
        data3.slice(
          0,
          level == "advanced" ? 7 : level == "intermediate" ? 5 : 3
        )
      );
    }
  }, [params, lang]);

  return (
    <div className="max-w-screen-lg mx-auto prose text-center">
      <PlayModal open={open} level={level} onStart={() => onStart()} />
      <div className="flex justify-center items-center sticky top-0 bg-white z-50">
        <button className="btn btn-ghost mr-4" onClick={() => router.back()}>
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
        <h1 className="mt-10">Learn this word in {seconds} seconds</h1>
        <div className="ml-10">
          <button
            className="btn btn-primary text-white"
            onClick={() => {
              router.push(`/play/${params.language}/learn?level=${level}`);
            }}
          >
            {" "}
            Done
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
      {list.length > 0 && (
        <>
          {list
            // .slice(0, )
            .map((item, index) => {
              return (
                <div key={index} className="text-left mb-4">
                  <h2>Word {index + 1} </h2>
                  <div className="flex justify-between">
                    <div>
                      <div className="relative max-w-screen-sm mx-auto">
                        <img src="/caste/tamang.png" alt="" className="h-64" />
                        <div className="absolute top-0 left-52">
                          <div className="chat chat-start">
                            <div
                              className="chat-bubble text-center"
                              style={{ width: "100px" }}
                            >
                              {item.nepali}
                            </div>
                          </div>

                          {item.nepali_audio && (
                            <AudioPlayer
                              src={`/audio/${item.nepali_audio}.m4a`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="divider divider-horizontal">MEANS</div>
                    <div>
                      <div className="relative max-w-screen-sm mx-auto">
                        <div className="absolute top-0 right-52">
                          <div className="chat chat-end">
                            <div
                              className="chat-bubble text-center"
                              style={{ width: "100px" }}
                            >
                              {params.language == "kaike"
                                ? item.kaike
                                : params.language == "kusunda"
                                ? item.kusunda
                                : item.newari}
                            </div>
                          </div>
                          {params.language == "kaike" ? (
                            <>
                              {item.kaike_audio && (
                                <AudioPlayer
                                  src={`/audio/${item.kaike_audio}.m4a`}
                                />
                              )}
                            </>
                          ) : params.language == "kusunda" ? (
                            <>
                              {item.kusunda_audio && (
                                <AudioPlayer
                                  src={`/audio/${item.kusunda_audio}.m4a`}
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {item.newari_audio && (
                                <AudioPlayer
                                  src={`/audio/${item.newari_audio}.m4a`}
                                />
                              )}
                            </>
                          )}
                        </div>
                        <img src="/caste/magar.png" alt="" className="h-56" />
                      </div>
                    </div>
                  </div>
                </div>
              );
              // if (params.language == "kusunda") {
              //   if (item.kusunda != null) {
              //     return (
              //       <div key={index} className="text-left mb-4">
              //         <h2>Word {index + 1}</h2>
              //         <div className="flex justify-between">
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <img
              //                 src="/caste/tamang.png"
              //                 alt=""
              //                 className="h-64"
              //               />
              //               <div className="absolute top-0 left-52">
              //                 <div className="chat chat-start">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {item.nepali}
              //                   </div>
              //                 </div>

              //                 {item.nepali_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.nepali_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //             </div>
              //           </div>
              //           <div className="divider divider-horizontal">MEANS</div>
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <div className="absolute top-0 right-52">
              //                 <div className="chat chat-end">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {item.kusunda}
              //                   </div>
              //                 </div>
              //                 {item.kusunda_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.kusunda_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //               <img
              //                 src="/caste/entry.png"
              //                 alt=""
              //                 className="h-56"
              //               />
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     );
              //   }
              // } else if (params.language == "newari") {
              //   if (item.newari != null) {
              //     return (
              //       <div key={index} className="text-left mb-4">
              //         <h2>Word {index + 1}</h2>
              //         <div className="flex justify-between">
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <img
              //                 src="/caste/tamang.png"
              //                 alt=""
              //                 className="h-64"
              //               />
              //               <div className="absolute top-0 left-52">
              //                 <div className="chat chat-start">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {item.nepali}
              //                   </div>
              //                 </div>

              //                 {item.nepali_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.nepali_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //             </div>
              //           </div>
              //           <div className="divider divider-horizontal">MEANS</div>
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <div className="absolute top-0 right-52">
              //                 <div className="chat chat-end">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {params.language == "kusunda"
              //                       ? item.kusunda
              //                       : params.language == "kaike"
              //                       ? item.kaike
              //                       : item.newari}
              //                   </div>
              //                 </div>
              //                 {item.newari_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.newari_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //               <img
              //                 src="/caste/newar.png"
              //                 alt=""
              //                 className="h-56"
              //               />
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     );
              //   }
              // } else if (params.language == "kaike") {
              //   if (item.kaike != null) {
              //     return (
              //       <div key={index} className="text-left mb-4">
              //         <h2>
              //           Word {index + 1}{" "}
              //           {level == "advanced"
              //             ? 7
              //             : level == "intermediate"
              //             ? 5
              //             : 3}
              //         </h2>
              //         <div className="flex justify-between">
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <img
              //                 src="/caste/tamang.png"
              //                 alt=""
              //                 className="h-64"
              //               />
              //               <div className="absolute top-0 left-52">
              //                 <div className="chat chat-start">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {item.nepali}
              //                   </div>
              //                 </div>

              //                 {item.nepali_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.nepali_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //             </div>
              //           </div>
              //           <div className="divider divider-horizontal">MEANS</div>
              //           <div>
              //             <div className="relative max-w-screen-sm mx-auto">
              //               <div className="absolute top-0 right-52">
              //                 <div className="chat chat-end">
              //                   <div
              //                     className="chat-bubble text-center"
              //                     style={{ width: "100px" }}
              //                   >
              //                     {item.kaike}
              //                   </div>
              //                 </div>
              //                 {item.kaike_audio && (
              //                   <AudioPlayer
              //                     src={`/audio/${item.kaike_audio}.m4a`}
              //                   />
              //                 )}
              //               </div>
              //               <img
              //                 src="/caste/magar.png"
              //                 alt=""
              //                 className="h-56"
              //               />
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     );
              //   }
              // }
            })}
        </>
      )}
    </div>
  );
}
