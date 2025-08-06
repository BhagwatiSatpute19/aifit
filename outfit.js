<script>
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  button.addEventListener("click", async () => {
    const name = document.querySelector("input[name='name']").value;
    const gender = document.getElementById("gender").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bodyType = document.getElementById("bodytype").value;
    const skinTone = document.getElementById("skinTone").value;
    const occasion = document.getElementById("occasion").value;
    const mood = document.getElementById("mood").value;

    if (!name || !height || !weight) {
      alert("Please fill out all required fields.");
      return;
    }

    const userData = {
      name,
      gender,
      height,
      weight,
      bodyType,
      skinTone,
      occasion,
      mood,
    };

    document.getElementById("output").innerHTML = `<h2>Hi ${name}!</h2><p>Getting your outfit suggestion...</p>`;

    try {
      const suggestion = await getOutfitSuggestion(userData);
      const imageUrl = await getImageFromUnsplash(userData); // ✅ Use correct image function

      document.getElementById("output").innerHTML = `
        <h2>Hi ${name}!</h2>
        <p><strong>Suggested Outfit:</strong><br>${suggestion}</p>
        <img src="${imageUrl}" alt="Outfit Image" style="max-width: 100%; margin-top: 10px;" onerror="this.src='default.webp';"/>
      `;
    } catch (error) {
      document.getElementById("output").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      console.error("Error:", error);
    }
  });
});

const GEMINI_API_KEY = "AIzaSyBgDE-Y2gifFt9P6RHE9ndeVtJIkgX24A4";
const UNSPLASH_ACCESS_KEY = "GEfFhY8toFSyswLyUQ5SwgRusqWUhwYkYRi9NCKanK0";

async function getOutfitSuggestion(user) {
  const prompt = `
Suggest a fashionable outfit for the following:
- Gender: ${user.gender}
- Height: ${user.height} ft
- Weight: ${user.weight} kg
- Body Type: ${user.bodyType}
- Skin Tone: ${user.skinTone}
- Occasion: ${user.occasion}
- Mood: ${user.mood}
Be creative and specific with clothing suggestions (like top, bottom, shoes, accessories).
`;

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await res.json();
  const suggestion = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  return suggestion || "No suggestion found.";


async function getImageFromUnsplash(user) {
  const keywords = `${user.gender}, ${user.occasion}, ${user.mood}, fashion, outfit`;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keywords)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data?.results?.[0]?.urls?.regular || "https://via.placeholder.com/400x300?text=No+Image+Found";
}
</script>
