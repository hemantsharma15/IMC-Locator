document.addEventListener("DOMContentLoaded", function() {
    // Array of office names in Hindi (you can adjust these as per your actual data)
    const offices = [
        { name: "Property Tax Correction Unit", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "E Municipal License Boring", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "Narmada water supply", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "spot fine", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "water tax market", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "transportation", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "Lab (water testing)", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "Ram Roti Scheme", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "Urban Transport and Vehicle Parking Department", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "silk center", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "cow shed", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "fire department", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "रेन बसेरा / आश्रय स्थल", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "रसोई योजना दीनदयाल", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "प्रभावी राजस्व विभाग", url: "https://maps.app.goo.gl/6zfDLykHFHQE4Uyy6" },
        { name: "विद्युत विभाग", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "संग्रहण कक्ष", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "सेंट्रल स्टोर", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "निविदा समिति कार्यालय स्टोर", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8"},
        { name: "निर्वाचन कार्यालय", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "विधि विभाग", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "Sanitation and Solid Waste Management Department", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Sanitation and Solid Waste Management Department", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Establishment branch", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Additional Commissioner Shri Siddharth Jain", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Additional Commissioner Shri Manoj Kumar Chaurasia", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Additional Commissioner Shri Shyamendra Jaiswa", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "New Garden Department", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "colony cell fire department", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "Deputy Commissioner Lata Agarwal", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "garden department maintenance branch", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "garden department civil branch", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "council office", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "CM Helpline", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "IT department", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Pension Department (Super Staff)", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Planning and Information Technology Public Affairs Department", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "accounting department", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Commissioner Shri Shivam Verma", url: "https://maps.app.goo.gl/Anc1qucNaiYURVJh7" },
        { name: "Public Information Office", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Consultancy Accounts Departmentो", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Mayor Inbound and outbound department.", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "Municipal Corporation Control Room", url: "https://maps.app.goo.gl/xdaMyNWZGh414krw7" },
        { name: "record room", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "health Department", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "malaria department", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "Jai Hind Bhawan", url: "https://maps.app.goo.gl/eWsvfZkd9JiW5qax6" },
        { name: "Drainage Department", url: "https://maps.app.goo.gl/XdHapDWBXPbWkPT56" },
        { name: "CTPT Department", url: "https://maps.app.goo.gl/XdHapDWBXPbWkPT56" },
        { name: "Revenue Department (Birth Death Marriage Certificate)", url: "https://maps.app.goo.gl/TgsNKa31REx4duNt5" },
        { name: "NULM Office", url: "https://maps.app.goo.gl/Z3updv8mDbDaj8Jf9" }
        ];

    const searchInput = document.getElementById('searchInput');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function filterOffices(searchTerm) {
        const filteredOffices = offices.filter(office => {
            return office.name.toLowerCase().startsWith(searchTerm.toLowerCase());
        });
        return filteredOffices;
    }

    function displayFilteredOffices(filteredOffices) {
        dropdownMenu.innerHTML = '';

        filteredOffices.forEach(office => {
            const link = document.createElement('a');
            link.href = office.url;
            link.textContent = office.name;
            console.log(link);
            dropdownMenu.appendChild(link);
        });
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length === 0) {
            dropdownMenu.style.display = 'none';
        } else {
            const filteredOffices = filterOffices(searchTerm);
            displayFilteredOffices(filteredOffices);
            dropdownMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            dropdownMenu.style.display = 'none';
        }
    });
});