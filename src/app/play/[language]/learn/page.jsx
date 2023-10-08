/* eslint-disable @next/next/no-img-element */
"use client";
import PlaySound from "@/components/PlaySound";
import SuccessModal from "@/components/SuccessModal";
import { useDictionary } from "@/lib/context/dictionary";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Learn({ params }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const lang = useDictionary();
  const router = useRouter();

  const [list, setList] = useState([]);

  const searchParams = useSearchParams();

  const level = searchParams.get("level");

  const [leftSelected, setLeftSelected] = useState();
  const [rightSelected, setRightSelected] = useState();
  const [correct, setCorrect] = useState([]);
  const [showAlert, setShowAltert] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [audio, setAudio] = useState();

  useEffect(() => {
    if (rightSelected && leftSelected) {
      if (rightSelected == leftSelected) {
        setLeftSelected();
        setRightSelected();
        setAudio("success");
        playAudio();
        setCorrect([...correct, leftSelected]);
        setShowAltert("success");
        setTimeout(() => {
          setShowAltert();
        }, 3000);
      } else {
        setAudio("error");
        setShowAltert("error");
      }
    }
  }, [leftSelected, rightSelected, playAudio]);

  useEffect(() => {
    if (list.length > 0) {
      if (correct.length == list.length) {
        setOpenModal(true);
      }
    }
  }, [correct]);

  function onDisabled(item) {
    var disabled = false;
    for (var i = 0; i < correct.length; i++) {
      if (correct[i] == item) {
        disabled = true;
      } else {
        disabled = false;
      }
    }
    return disabled;
  }

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
      <PlaySound
        audioRef={audioRef}
        src={audio == "success" ? "/audio/correct.wav" : "/audio/wrong.wav"}
      />
      {openModal && (
        <SuccessModal
          level={level}
          open={openModal}
          onStart={() => {
            router.push(`/play/${params.language}/choose`);
          }}
        />
      )}
      {(showAlert == "success" || showAlert == "error") && (
        <div
          className={`alert ${
            showAlert == "success" ? "alert-success" : "alert-error"
          } fixed right-10 bottom-10 w-48`}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}
          <span>{showAlert == "error" && "Did not "} Match</span>
        </div>
      )}
      <div className="flex items-center justify-center mt-10">
        <Link href="/play" className="btn btn-ghost mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
        <progress
          className="progress w-full progress-success"
          value={
            correct.length ==
            (level == "advanced" ? 7 : level == "intermediate" ? 5 : 3)
              ? "100"
              : correct.length > 2
              ? "50"
              : correct.length == 1
              ? "20"
              : "0"
          }
          max="100"
        ></progress>
      </div>

      <h1 className="my-10">Select the correct meaning</h1>

      <div className="flex justify-between">
        <div className="w-1/3 flex flex-col">
          <h3 className="mt-0 mb-10">Nepali</h3>

          {list.map((item, index) => (
            <input
              key={index}
              className="btn mb-10"
              type="checkbox"
              name="option"
              aria-label={item.nepali}
              disabled={onDisabled(item.$id)}
              // disabled={correct.filter((element) => element === item.$id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setLeftSelected(item.$id);
                }
              }}
            />
          ))}
          {/* {item.kaike_audio && (
                <AudioPlayer src={`/audio/${item.kaike_audio}.m4a`} />
              )} */}
        </div>
        <div className="w-1/3 flex flex-col">
          <h3 className="mt-0 mb-10">{params.language}</h3>
          {list.reverse().map((item, index) => (
            <input
              key={index}
              className="btn mb-10"
              type="checkbox"
              name="label"
              disabled={onDisabled(item.$id)}
              aria-label={
                params.language == "kusunda"
                  ? item.kusunda
                  : params.language == "kaike"
                  ? item.kaike
                  : item.newari
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setRightSelected(item.$id);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
