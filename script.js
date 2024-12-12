// Dữ liệu ban đầu
const statsData = [
    {
        id: "accuracy",
        title: "Prediction Accuracy",
        value: "89.4%",
        change: "+2.4% from last semester",
    },
    {
        id: "atRisk",
        title: "At-Risk Students",
        value: "234",
        change: "15% of total enrollment",
    },
    {
        id: "success",
        title: "Intervention Success",
        value: "78%",
        change: "+12% from previous year",
    },
];

const data = {
    cards: [
        {
            title: "Total Students",
            value: "2,850",
            change: "+20.1% from last month",
        },
        {
            title: "Active Courses",
            value: "245",
            change: "+180.1% from last month",
        },
        {
            title: "Total Revenue",
            value: "$48,250",
            change: "+19% from last month",
        },
        {
            title: "Active Teachers",
            value: "145",
            change: "+201 since last hour",
        },
    ],
    courses: [
        {
            title: "Web Designing",
            author: "Sang Young",
            rating: "⭐ 4.5 (4,514)",
            price: "$180",
        },
        {
            title: "Prototyping",
            author: "Sang Young",
            rating: "⭐ 4.7 (4,713)",
            price: "$180",
        },
        {
            title: "Web Development",
            author: "Sang Young",
            rating: "⭐ 4.8 (4,512)",
            price: "$180",
        },
    ],
};

// Hàm render dữ liệu
function renderDashboard() {
    // Render cards
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.cards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p class="value">${card.value}</p>
            <p class="change">${card.change}</p>
        `;
        cardsContainer.appendChild(cardElement);
    });

    // Render courses
    const coursesContainer = document.getElementById("courses");
    coursesContainer.innerHTML = ""; // Xóa dữ liệu cũ
    data.courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.className = "course-card";
        courseElement.innerHTML = `
            <div class="placeholder"></div>
            <h3>${course.title}</h3>
            <p>by ${course.author}</p>
            <p>${course.rating}</p>
            <p>${course.price}</p>
        `;
        coursesContainer.appendChild(courseElement);
    });
}

// Gọi hàm render lần đầu tiên
renderDashboard();

// Ví dụ: Cập nhật dữ liệu và render lại
setTimeout(() => {
    data.cards[0].value = "3,000"; // Thay đổi số Total Students
    data.courses[0].rating = "⭐ 4.6 (5,000)"; // Thay đổi rating của course đầu tiên
    renderDashboard(); // Render lại giao diện
}, 5000); // Sau 5 giây

// Hàm tạo biểu đồ
function renderCharts() {
    // Biểu đồ Accuracy
    const ctx1 = document.getElementById('accuracyChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Correct Predictions', 'Incorrect Predictions'],
            datasets: [{
                data: [89.4, 100 - 89.4], // Dữ liệu
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    });

    // Biểu đồ Dropout Predictions vs Actual
    const ctx2 = document.getElementById('dropoutChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
                {
                    label: 'Predicted Dropouts',
                    data: [120, 160, 140, 180], // Thay đổi dữ liệu thực tế
                    backgroundColor: '#3f51b5',
                },
                {
                    label: 'Actual Dropouts',
                    data: [110, 150, 135, 170],
                    backgroundColor: '#ff5722',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Gọi hàm render biểu đồ
renderCharts();

function renderStats(statsData) {
    const statisticsContainer = document.getElementById("statistics");
    statisticsContainer.innerHTML = ""; // Xóa dữ liệu cũ

    statsData.forEach((stat) => {
        const card = document.createElement("div");
        card.className = "stats-card";
        card.id = stat.id;
        card.innerHTML = `
            <h3>${stat.title}</h3>
            <p class="value">${stat.value}</p>
            <p class="change">${stat.change}</p>
        `;
        statisticsContainer.appendChild(card);
    });
}

// Gọi hàm render lần đầu
renderStats(statsData);
setTimeout(() => {
    // Cập nhật dữ liệu
    statsData[0].value = "91.0%";
    statsData[0].change = "+3.6% from last semester";
    statsData[1].value = "220";
    statsData[1].change = "14% of total enrollment";
    statsData[2].value = "80%";
    statsData[2].change = "+15% from previous year";

    // Render lại giao diện với dữ liệu mới
    renderStats(statsData);
}, 5000); // Sau 5 giây

















