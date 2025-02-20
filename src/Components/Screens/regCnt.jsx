// // export default RegCount;
// import React, { useState, useEffect } from "react";
// const SHEET_ID = "1uPci1tfKQHEr1mbu5WjlJyOeb7DTmErwjZsr95-bEpE"; // Replace with your actual Google Sheet ID
// const API_KEY = "AIzaSyCt-fkEJudB_wFcH9Zm6EUatT-5S9Gob_g"; // Replace with your actual API key

// // Categorized sheet names
// const SHEET_NAMES = {
//   technical: [
//     "Cryptera Coding Contest",
//     "CSS Battle",
//     "Jumbled Code",
//     "Missing Code",
//     "Logic Unchained",
//     "0xdebug",
//     "Tech Feud",
//     "Code in Chaos",
//     "Reverse Coding",
//     "Prompt Engineering",
//     "UI / UX Design",
//   ],
//   nonTechnical: [
//     "Treasure Hunt",
//     "Movie Quiz",
//     "Poster Design",
//     "Recall Rumble",
//     "Typing Thunder",
//     "Attack on Anime",
//     "Marvel / DC Quiz",
//     "Selling Showdown",
//   ],
// };

// const RegCount = () => {
//   const [counts, setCounts] = useState({ technical: {}, nonTechnical: {} });
//   const [loading, setLoading] = useState(true);
//   const [passkey, setPasskey] = useState("");

//   useEffect(() => {
//     async function fetchAllCounts() {
//       const countsData = { technical: {}, nonTechnical: {} };

//       for (let category in SHEET_NAMES) {
//         for (let sheet of SHEET_NAMES[category]) {
          
//           const RANGE = `${encodeURIComponent(sheet)}!A:A`; // Fetch column A to count non-empty rows
//           const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

//           try {
//             const response = await fetch(URL);
//             const data = await response.json();

//             // Count non-empty rows (excluding header)
//             const rowCount = data.values ? data.values.length - 1 : 0;
//             countsData[category][sheet] = rowCount;
//           } catch (error) {
//             console.error(`Error fetching data from ${sheet}:`, error);
//             countsData[category][sheet] = "Error"; // Indicate failure
//           }
//         }
//       }

//       setCounts(countsData);
//       setLoading(false);
//     }

//     fetchAllCounts();
//   }, []);

//   const renderEventGrid = (events, counts) => (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {events.map((event) => (
//         <div
//           key={event}
//           className="bg-[#22272A] border-2 border-[#24B47E] text-white p-4 rounded-lg flex items-center justify-between shadow-lg"
//         >
//           <span className="text-lg font-bold">{event==="Cryptera Coding Contest"?"Cryptera Coding":event}</span>
//           <span className="text-xl font-bold text-[#24B47E]">
//             {counts[event] !== undefined ? counts[event] : "Loading..."}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
  
//   return (
//        <div
//       className="bg-[#1b1c22] text-white font-primary py-8"
//     >
//       <h1 className="text-4xl font-bold text-center mb-8 text-[#24B47E]">
//         Event Registration Counts
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-400 font-secondary">Loading...</p>
//       ) : (
//         <div className="max-w-7xl mx-auto">
//           {/* Technical Events */}
//           <h2 className="text-2xl font-semibold mb-4 text-[#FFFFFF]">
//             Technical Events
//           </h2>
//           {renderEventGrid(SHEET_NAMES.technical, counts.technical)}

//           {/* Non-Technical Events */}
//           <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FFFFFF]">
//             Non-Technical Events
//           </h2>
//           {renderEventGrid(SHEET_NAMES.nonTechnical, counts.nonTechnical)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegCount;


import React, { useState, useEffect } from "react";
const SHEET_ID = "1uPci1tfKQHEr1mbu5WjlJyOeb7DTmErwjZsr95-bEpE";
const API_KEY = "AIzaSyCt-fkEJudB_wFcH9Zm6EUatT-5S9Gob_g";
const CORRECT_PASSKEY = "CRYPTERA$2K25"; // Replace with your actual passkey

const SHEET_NAMES = {
  technical: [
    "Cryptera Coding Contest",
    "CSS Battle",
    "Jumbled Code",
    "Missing Code",
    "Logic Unchained",
    "0xdebug",
    "Tech Feud",
    "Code in Chaos",
    "Reverse Coding",
    "Prompt Engineering",
    "UI / UX Design",
  ],
  nonTechnical: [
    "Treasure Hunt",
    "Movie Quiz",
    "Poster Design",
    "Recall Rumble",
    "Typing Thunder",
    "Attack on Anime",
    "Marvel / DC Quiz",
    "Selling Showdown",
  ],
};

const RegCount = () => {
  const [counts, setCounts] = useState({ technical: {}, nonTechnical: {} });
  const [loading, setLoading] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllCounts();
    }
  }, [isAuthenticated]);

  const fetchAllCounts = async () => {
    setLoading(true);
    const countsData = { technical: {}, nonTechnical: {} };

    for (let category in SHEET_NAMES) {
      for (let sheet of SHEET_NAMES[category]) {
        const RANGE = `${encodeURIComponent(sheet)}!A:A`;
        const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

        try {
          const response = await fetch(URL);
          const data = await response.json();
          const rowCount = data.values ? data.values.length - 1 : 0;
          countsData[category][sheet] = rowCount;
        } catch (error) {
          console.error(`Error fetching data from ${sheet}:`, error);
          countsData[category][sheet] = "Error";
        }
      }
    }

    setCounts(countsData);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passkey === CORRECT_PASSKEY) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong passowrd");
    }
  };

  const renderEventGrid = (events, counts) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {events.map((event) => (
        <div
          key={event}
          className="bg-[#22272A] border-2 border-[#24B47E] text-white p-4 rounded-lg flex items-center justify-between shadow-lg"
        >
          <span className="text-lg font-bold">
            {event === "Cryptera Coding Contest" ? "Cryptera Coding" : event}
          </span>
          <span className="text-xl font-bold text-[#24B47E]">
            {counts[event] !== undefined ? counts[event] : "Loading..."}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#1b1c22] text-white font-primary py-8 mt-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#24B47E]">
        Event Registration Counts
      </h1>

      {!isAuthenticated ? (
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Enter Passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              className="p-2 border border-gray-400 rounded text-black outline-none"
            />
            <button
              type="submit"
              className="bg-[#24B47E] px-4 py-2 rounded-lg text-white font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      ) : loading ? (
        <p className="text-center text-gray-400 font-secondary">Loading...</p>
      ) : (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFFFFF]">
            Technical Events
          </h2>
          {renderEventGrid(SHEET_NAMES.technical, counts.technical)}

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#FFFFFF]">
            Non-Technical Events
          </h2>
          {renderEventGrid(SHEET_NAMES.nonTechnical, counts.nonTechnical)}
        </div>
      )}
    </div>
  );
};

export default RegCount;

