// Event Listener for the Search Button
document.getElementById('search-btn').addEventListener('click', () => {
    const age = document.getElementById('age').value.trim();
    const location = document.getElementById('location').value.trim();
    const traits = document.getElementById('traits').value.trim();

    if (!age || !location || !traits) {
        alert('يرجى ملء جميع الحقول للبحث عن شريك الحياة!');
        return;
    }

    // Simulate a search process
    alert(`أوك، جاري البحث عن شريك حياة بعمر ${age}، في ${location}، وبصفات: ${traits}.`);
});


// Array of stories
const stories = [
    {
        title: "قصة يوسف وريم",
        content: "تعرف يوسف وريم عبر الموقع وكان التفاهم عنوانًا لعلاقتهما منذ البداية. اليوم يعيشان حياة مليئة بالسعادة والمحبة."
    },
    {
        title: "قصة خالد وهبة",
        content: "كانت هبة تبحث عن شخص يشاركها شغفها بالحياة، ووجدت خالد الذي شاركها نفس الحلم. اليوم هما أفضل صديقين وزوجين."
    }
];

// Function to add stories dynamically
function addStories() {
    const container = document.getElementById('stories-container');

    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story');

        const storyTitle = document.createElement('h3');
        storyTitle.textContent = story.title;

        const storyContent = document.createElement('p');
        storyContent.textContent = story.content;

        storyDiv.appendChild(storyTitle);
        storyDiv.appendChild(storyContent);
        container.appendChild(storyDiv);
    });
}

// Call the function to add stories
addStories();




// دالة لعرض الأسئلة بناءً على اختيار الجنس
function showGenderQuestions() {
    const gender = document.getElementById("gender").value;
    const maleQuestions = document.getElementById("male-questions");
    const femaleQuestions = document.getElementById("female-questions");

    // إخفاء الأسئلة عند عدم اختيار الجنس
    if (gender === "male") {
        maleQuestions.style.display = "block";
        femaleQuestions.style.display = "none";
    } else if (gender === "female") {
        femaleQuestions.style.display = "block";
        maleQuestions.style.display = "none";
    } else {
        maleQuestions.style.display = "none";
        femaleQuestions.style.display = "none";
    }
}

// دالة لمعالجة إرسال النموذج
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // إخفاء صفحة التسجيل
    document.getElementById("register").style.display = "none";
    // عرض رسالة الشكر
    document.getElementById("thank-you-message").style.display = "block";
});
