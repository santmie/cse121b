//CSE 121B PROJECT - Public Holiday Viewer

// Set the current year as the default value for the input element with id 'yr'
const yrElement = document.getElementById('yr');
yrElement.value = new Date().getFullYear();

// Format date.iso to "2018-12-31" to "December 31, 2018" format.
const formatDate = (dateString) => {
    const date = new Date(dateString); // create new Date object from the dateString
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // display month as long text, day and year as numbers
    return date.toLocaleDateString('en-US', options);
}

// Array to store holiday data
let allHolidays = [];

// Function to fetch and display holidays - Date and Name of Holiday
const getHolidays = async () => {
    const countryElement = document.getElementById('country');
    const countryCode = countryElement.value; // country code
    const countryName = countryElement.options[countryElement.selectedIndex].text; // country's name
    const yr = document.getElementById('yr').value;
    const monthFilter = document.getElementById('monthFilter');
    monthFilter.value = ''; // reset the monthfilter element whenever the getHolidaysButton button is clicked

    const apiKey = 'efYfTf0jowhh72T43TqCjHcByXROXQZ0'; // free apiKey with max of 500 requests

    try { // error handling
        // Fetch holiday data from https://calendarific.com API
        const response = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${countryCode}&year=${yr}`);
        if (response.ok) {
            const data = await response.json();
            const holidaysDiv = document.getElementById('holidays');

            // Store holiday data in the 'allHolidays' array
            allHolidays = data.response.holidays;

            // Display the selected country's name and year
            holidaysDiv.innerHTML = `<h4>${countryName} Public Holidays in ${yr}</h4>`;

            // Display each holiday - formatted Date and holiday name
            allHolidays.forEach(holiday => {
                const formattedDate = formatDate(holiday.date.iso);
                holidaysDiv.innerHTML += `<p>${formattedDate} - ${holiday.name}</p>`;
            });
        } else {
            throw new Error('Error fetching holiday data'); // if response is unsuccessful
        }
    } catch (error) {
        console.log('Error fetching holiday data', error); // log error to console when an error is encountered
    }
}

// Function to filter and display holidays by month
const filterHolidaysByMonth = async () => {
    const countryElement = document.getElementById('country');
    const countryName = countryElement.options[countryElement.selectedIndex].text;
    const yr = document.getElementById('yr').value;
    const monthFilter = document.getElementById('monthFilter').value;
    const holidaysDiv = document.getElementById('holidays');

    // Display the selected country's name and year and the selected month
    holidaysDiv.innerHTML = `<h4>${countryName} Public Holidays in ${monthFilter} ${yr}</h4>`;

    // Filter holidays - check the holiday's date, use the month name for comparison against the selected month and returns the filtered array
    const filteredHolidays = allHolidays.filter(holiday => {
        const holidayDate = new Date(holiday.date.iso);
        const holidayMonth = holidayDate.toLocaleString('default', { month: 'long' }); 
        return monthFilter === '' || holidayMonth === monthFilter; // If the selected month is empty or matches the holiday's month, it includes the holiday in the filtered list
    });

    // Display filtered holidays
    filteredHolidays.forEach(holiday => {
        const formattedDate = formatDate(holiday.date.iso);
        holidaysDiv.innerHTML += `<p>${formattedDate} - ${holiday.name}</p>`;
    });
}

// ES Modules - Exporting functions
export { getHolidays, filterHolidaysByMonth };