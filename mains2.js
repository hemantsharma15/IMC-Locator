document.addEventListener("DOMContentLoaded", function() {
    // Array of office names in Hindi (you can adjust these as per your actual data)
    const offices = [
        { name: "संपत्ति कर करेक्शन यूनिट", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "ई नगर पालिका लाइसेंस बोरिंग", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "नर्मदा जल प्रदाय", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "स्पॉट फाइन", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "जलकर मार्केट", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "परिवहन", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "लेव (पानी टेस्टिंग)", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "राम रोटी योजना", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "शहरी परिवहन एवं वाहन पार्किंग विभाग", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "रेशम केंद्र", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "गौशाला", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "रेन बसेरा / आश्रय स्थल", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "रसोई योजना दीनदयाल", url: "https://maps.app.goo.gl/p2FqgQuFp95Dnjxc8" },
        { name: "प्रभावी राजस्व विभाग", url: "https://maps.app.goo.gl/6zfDLykHFHQE4Uyy6" },
        { name: "विद्युत विभाग", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "संग्रहण कक्ष", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "सेंट्रल स्टोर", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "निविदा समिति कार्यालय स्टोर", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8"},
        { name: "निर्वाचन कार्यालय", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "विधि विभाग", url: "https://maps.app.goo.gl/DwhhK9hf6LAsyMJe8" },
        { name: "स्वच्छता एवं ठोस अवशिष्ट प्रबंधन विभाग", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "अपर आयुक्त श्री अभिलाष सर", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "स्थापना शाखा", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "अप्रयुक्त श्री सिद्धार्थ जैन", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "अप्रयुक्त श्री मनोज कुमार चौरसिया", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "अप्रयुक्त श्री श्यामेंद्र जयसवाल", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "नया उद्यान विभाग", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "कॉलोनी सेल फायर विभाग", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "उपयुक्त लता अग्रवाल", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "उद्यान विभाग संधारण शाखा", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "उद्यान विभाग सिविल शाका", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "परिषद कार्यालय", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "सीएम हेल्पलाइन", url: "https://maps.app.goo.gl/iGVsehEtuky8NveD8" },
        { name: "आईटी डिपार्मेंट", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "पेंशन विभाग", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "योजना एवं सूचना प्रौद्योगिकी जनकार्य विभागो", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "लेखा विभाग", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "अपरायुक्त श्री शिवम वर्मा", url: "https://maps.app.goo.gl/Anc1qucNaiYURVJh7" },
        { name: "लोक सूचना कार्यालय", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "कंसल्टेंसी लेखा विभागो", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "महापौर कार्यालय |आवक जावक", url: "https://maps.app.goo.gl/eXJY8aJE7bc61KmeA" },
        { name: "नगर निगम कंट्रोल रूम", url: "https://maps.app.goo.gl/xdaMyNWZGh414krw7" },
        { name: "रिकॉर्ड रूम", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "स्वास्थ्य विभाग", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "मलेरिया विभाग", url: "https://maps.app.goo.gl/SzM7uqRjNvNyb6Qr9" },
        { name: "जय हिंद भवन", url: "https://maps.app.goo.gl/eWsvfZkd9JiW5qax6" },
        { name: "ड्रेनेज विभाग", url: "https://maps.app.goo.gl/XdHapDWBXPbWkPT56" },
        { name: "सीटीपीटी विभाग", url: "https://maps.app.goo.gl/XdHapDWBXPbWkPT56" },
        { name: "राजस्व विभाग (जन्म मृत्यू विवाह प्रमाण पत्र)", url: "https://maps.app.goo.gl/TgsNKa31REx4duNt5" },
        { name: "NULM कार्यालय", url: "https://maps.app.goo.gl/Z3updv8mDbDaj8Jf9" }
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